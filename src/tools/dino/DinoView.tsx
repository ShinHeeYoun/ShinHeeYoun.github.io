import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import spriteUrl from './offline-sprite.png'
import {
  CONTROL_KEYS,
  DINO_X,
  GROUND_Y,
  HEIGHT,
  OBSTACLES,
  START_KEYS,
  WIDTH,
  getMeters,
  initialState,
  isDucking,
  onKey,
  onKeyUp,
  step,
  type LogLine,
  type State,
} from './controller'
import { moonProgress, nightAmount, sunProgress } from './daynight'
import { makeWhiteTransparent } from './sprite'

const SCALE = 2 // canvas pixels per CSS pixel, keeps the pixel art crisp on hi-dpi screens
const STEP_MS = 1000 / 60 // the game always advances 60 steps per second, whatever the screen's refresh rate
const LEG_TICKS = 15 // steps per leg swap: 4 swaps per second
const WING_TICKS = 10 // steps per wing flap
const MAX_LOGS = 60
const BEST_KEY = 'dino_best_m' // meters; the old 'dino_best' was a score in other units

// Where each picture sits in Chromium's 1x offline sprite sheet (offline_sprite_definitions.ts, trex.ts).
// The crashed frame has 2 empty rows under the feet, so it is drawn 2px lower to touch the ground line.
const DINO = { x: 848, y: 2, w: 44, h: 47, standing: 0, running: [88, 132], crashed: 220, crashedFootPad: 2 }
const DUCK = { w: 59, frames: [264, 323] }
const BIRD = { x: 134, y: 2, w: 46, h: 40, frames: [0, 46] }
const CACTUS_X = { small: 228, large: 332 }
const CLOUD = { x: 86, y: 2, w: 46, h: 14 }
const HORIZON = { x: 2, y: 54, w: 1200, h: 12, lineRow: 4 }

type Rgb = [number, number, number]
// Palette at full day and full night; everything on the canvas is blended between the two.
const DAY = {
  skyTop: [138, 200, 255] as Rgb,
  skyBottom: [226, 243, 255] as Rgb,
  ink: [62, 62, 62] as Rgb,
  dino: [8, 140, 90] as Rgb,
  hud: [60, 72, 90] as Rgb,
  trunk: [122, 86, 50] as Rgb,
  bark: [92, 64, 36] as Rgb,
  leaves: [42, 150, 84] as Rgb,
  leavesLight: [86, 190, 110] as Rgb,
}
const NIGHT = {
  skyTop: [6, 10, 30] as Rgb,
  skyBottom: [26, 36, 70] as Rgb,
  ink: [226, 233, 241] as Rgb,
  dino: [61, 220, 151] as Rgb,
  hud: [160, 172, 190] as Rgb,
  trunk: [74, 52, 34] as Rgb,
  bark: [52, 36, 24] as Rgb,
  leaves: [24, 88, 58] as Rgb,
  leavesLight: [40, 124, 80] as Rgb,
}
const mix = (day: Rgb, night: Rgb, n: number) =>
  `rgb(${day.map((c, i) => Math.round(c + (night[i] - c) * n)).join(',')})`

// Fixed star positions, so the sky does not reshuffle every frame.
const STARS = Array.from({ length: 36 }, (_, i) => ({ x: (i * 97 + 31) % 580 + 10, y: ((i * 53 + 7) % 80) + 5 }))

type Entry = LogLine & { id: number }

function loadBest() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0
  } catch {
    return 0
  }
}

function saveBest(meters: number) {
  try {
    localStorage.setItem(BEST_KEY, String(meters))
  } catch {
    // storage unavailable (private window etc.): the best distance just won't persist
  }
}

// The sheet with its white backgrounds made transparent (built once), and a scratch canvas used to repaint
// one picture at a time in whatever color the sky calls for.
let cleanSheet: HTMLCanvasElement | null = null
let scratch: HTMLCanvasElement | null = null

function drawTinted(
  ctx: CanvasRenderingContext2D,
  sprite: HTMLImageElement,
  fill: string,
  [sx, sy, sw, sh]: [number, number, number, number],
  dx: number,
  dy: number,
) {
  if (!cleanSheet) {
    cleanSheet = document.createElement('canvas')
    cleanSheet.width = sprite.width
    cleanSheet.height = sprite.height
    const g = cleanSheet.getContext('2d')!
    g.drawImage(sprite, 0, 0)
    const pixels = g.getImageData(0, 0, cleanSheet.width, cleanSheet.height)
    makeWhiteTransparent(pixels.data)
    g.putImageData(pixels, 0, 0)
    scratch = document.createElement('canvas')
    scratch.width = HORIZON.w
    scratch.height = 60
  }
  const g = scratch!.getContext('2d')!
  g.globalCompositeOperation = 'source-over'
  g.clearRect(0, 0, sw, sh)
  g.drawImage(cleanSheet, sx, sy, sw, sh, 0, 0, sw, sh)
  g.globalCompositeOperation = 'source-in'
  g.fillStyle = fill
  g.fillRect(0, 0, sw, sh)
  ctx.drawImage(scratch!, 0, 0, sw, sh, dx, dy, sw, sh)
}

function drawSky(ctx: CanvasRenderingContext2D, night: number, ticks: number) {
  const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT)
  gradient.addColorStop(0, mix(DAY.skyTop, NIGHT.skyTop, night))
  gradient.addColorStop(1, mix(DAY.skyBottom, NIGHT.skyBottom, night))
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, WIDTH, HEIGHT)

  ctx.fillStyle = '#fff'
  STARS.forEach((star, i) => {
    ctx.globalAlpha = night * (0.45 + 0.55 * Math.sin(ticks / 18 + i * 1.7) ** 2)
    ctx.fillRect(star.x, star.y, i % 5 === 0 ? 2 : 1, i % 5 === 0 ? 2 : 1)
  })

  // The sun and the moon each follow their own arc and fade as the sky changes, so the sun is still
  // setting on the right while the moon starts to rise on the left.
  const sunX = 40 + 520 * sunProgress(ticks)
  const sunY = 98 - 62 * Math.sin(Math.PI * sunProgress(ticks))
  ctx.globalAlpha = 1 - night
  ctx.fillStyle = '#ffd34d'
  ctx.beginPath()
  ctx.arc(sunX, sunY, 12, 0, Math.PI * 2)
  ctx.fill()
  ctx.globalAlpha = (1 - night) * 0.25
  ctx.beginPath()
  ctx.arc(sunX, sunY, 18, 0, Math.PI * 2)
  ctx.fill()

  const moonX = 40 + 520 * moonProgress(ticks)
  const moonY = 98 - 62 * Math.sin(Math.PI * moonProgress(ticks))
  ctx.globalAlpha = night
  ctx.fillStyle = '#eef3fb'
  ctx.save()
  ctx.beginPath() // clip away a second circle to leave a crescent
  ctx.rect(0, 0, WIDTH, HEIGHT)
  ctx.moveTo(moonX + 15, moonY - 3)
  ctx.arc(moonX + 5, moonY - 3, 10, 0, Math.PI * 2)
  ctx.clip('evenodd')
  ctx.beginPath()
  ctx.arc(moonX, moonY, 11, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
  ctx.globalAlpha = 1
}

function drawMeteors(ctx: CanvasRenderingContext2D, state: State) {
  for (const meteor of state.meteors) {
    const trail = ctx.createLinearGradient(meteor.x, meteor.y, meteor.x + 42, meteor.y - 24.5)
    trail.addColorStop(0, 'rgba(255,255,255,1)')
    trail.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.strokeStyle = trail
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(meteor.x, meteor.y)
    ctx.lineTo(meteor.x + 42, meteor.y - 24.5)
    ctx.stroke()
    ctx.fillStyle = '#fff'
    ctx.fillRect(meteor.x - 1.5, meteor.y - 1.5, 3, 3)
  }
}

// There is no tree in Chromium's sheet, so it is built from rectangles: a wide trunk under a big crown.
function drawTree(ctx: CanvasRenderingContext2D, x: number, night: number) {
  const top = GROUND_Y - OBSTACLES.tree.h
  const rect = (color: string, dx: number, dy: number, w: number, h: number) => {
    ctx.fillStyle = color
    ctx.fillRect(x + dx, top + dy, w, h)
  }
  rect(mix(DAY.trunk, NIGHT.trunk, night), 5, 40, 20, OBSTACLES.tree.h - 40)
  rect(mix(DAY.bark, NIGHT.bark, night), 9, 50, 3, 70)
  rect(mix(DAY.bark, NIGHT.bark, night), 18, 62, 3, 58)
  const leaves = mix(DAY.leaves, NIGHT.leaves, night)
  rect(leaves, 7, 0, 16, 8)
  rect(leaves, 2, 8, 26, 14)
  rect(leaves, 0, 22, 30, 18)
  rect(leaves, 2, 40, 8, 8)
  rect(leaves, 20, 62, 10, 10)
  rect(leaves, 0, 76, 9, 9)
  const light = mix(DAY.leavesLight, NIGHT.leavesLight, night)
  rect(light, 6, 4, 8, 4)
  rect(light, 4, 14, 8, 4)
  rect(light, 14, 27, 10, 5)
}

function drawFireball(ctx: CanvasRenderingContext2D, x: number, height: number, ticks: number) {
  const y = GROUND_Y - height
  const wobble = ticks % 4 < 2 ? 0 : 1
  ctx.fillStyle = 'rgba(255,90,30,0.45)'
  ctx.fillRect(x - 16, y - 2 + wobble, 10, 4)
  ctx.fillStyle = 'rgba(255,120,30,0.7)'
  ctx.fillRect(x - 8, y - 4 - wobble, 10, 8)
  ctx.fillStyle = '#ff8c1a'
  ctx.fillRect(x, y - 5, 10, 10)
  ctx.fillStyle = '#ffd23f'
  ctx.fillRect(x + 2, y - 3, 6, 6)
}

// A flash, a growing "100 m" and a ring of sparks every 100 m.
function drawMilestone(ctx: CanvasRenderingContext2D, state: State, night: number) {
  const age = state.ticks - state.milestoneTick
  if (state.milestone === 0 || age >= 90) return
  if (age < 24) {
    ctx.fillStyle = `rgba(255,255,255,${0.4 * (1 - age / 24)})`
    ctx.fillRect(0, 0, WIDTH, HEIGHT)
  }
  const size = 30 + 12 * Math.max(0, 1 - age / 20)
  ctx.globalAlpha = age < 60 ? 1 : (90 - age) / 30
  ctx.font = `bold ${size}px ui-monospace, Consolas, monospace`
  ctx.textAlign = 'center'
  ctx.lineWidth = 4
  ctx.strokeStyle = mix([255, 255, 255], [10, 14, 30], night)
  ctx.fillStyle = mix(DAY.dino, NIGHT.dino, night)
  ctx.strokeText(`${state.milestone * 100} m`, WIDTH / 2, 70)
  ctx.fillText(`${state.milestone * 100} m`, WIDTH / 2, 70)
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2
    ctx.fillStyle = i % 2 ? '#ffd23f' : mix(DAY.dino, NIGHT.dino, night)
    ctx.fillRect(WIDTH / 2 + Math.cos(angle) * (30 + age * 2.4), 58 + Math.sin(angle) * (18 + age * 1.2), 4, 4)
  }
  ctx.globalAlpha = 1
}

function draw(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, state: State, best: number, running: boolean) {
  const night = nightAmount(state.ticks)
  // The sky blends slowly, but sprites and text switch colors quickly around the halfway point: halfway
  // between a dark and a light color would be the same mid-grey as the sky and vanish into it.
  const contrast = Math.min(1, Math.max(0, (night - 0.35) / 0.3))
  const inkBlend = contrast * contrast * (3 - 2 * contrast)
  const ink = mix(DAY.ink, NIGHT.ink, inkBlend)
  const dinoColor = mix(DAY.dino, NIGHT.dino, inkBlend)
  const hud = mix(DAY.hud, NIGHT.hud, inkBlend)
  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0)
  ctx.imageSmoothingEnabled = false
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  drawSky(ctx, night, state.ticks)
  drawMeteors(ctx, state)

  // Every layer scrolls from the same distance, so a higher speed moves them all faster.
  ctx.globalAlpha = 0.5
  for (const base of [90, 260, 430]) {
    const cloudX = (((base - state.distance * 0.3) % (WIDTH + 80)) + WIDTH + 80) % (WIDTH + 80) - 40
    // clouds stay between y=42 and y=60, above the centered message (baseline 76)
    drawTinted(ctx, sprite, hud, [CLOUD.x, CLOUD.y, CLOUD.w, CLOUD.h], cloudX, 24 + (base % 24))
  }
  ctx.globalAlpha = 1
  const lineY = GROUND_Y - HORIZON.lineRow
  const scroll = state.distance % HORIZON.w
  for (const x of [-scroll, HORIZON.w - scroll]) {
    drawTinted(ctx, sprite, hud, [HORIZON.x, HORIZON.y, HORIZON.w, HORIZON.h], x, lineY)
  }

  for (const o of state.obstacles) {
    const { w, h, y } = OBSTACLES[o.kind]
    if (o.kind === 'tree') {
      drawTree(ctx, o.x, night)
    } else if (o.kind === 'bird') {
      const frame = BIRD.frames[Math.floor(state.ticks / WING_TICKS) % 2]
      drawTinted(ctx, sprite, ink, [BIRD.x + frame, BIRD.y, BIRD.w, BIRD.h], o.x, GROUND_Y - y - h)
    } else {
      drawTinted(ctx, sprite, ink, [CACTUS_X[o.kind], DINO.y, w, h], o.x, GROUND_Y - h)
    }
  }

  for (const fireball of state.fireballs) drawFireball(ctx, fireball.x, fireball.y, state.ticks)

  // In the air and on the title screen the dino keeps one pose.
  const legs = Math.floor(state.ticks / LEG_TICKS) % 2
  let sourceX: number = DINO.x + DINO.standing
  let width: number = DINO.w
  if (state.over) {
    sourceX = DINO.x + DINO.crashed
  } else if (isDucking(state)) {
    sourceX = DINO.x + DUCK.frames[legs]
    width = DUCK.w
  } else if (state.y === 0 && running) {
    sourceX = DINO.x + DINO.running[legs]
  }
  const dinoY = GROUND_Y - DINO.h - state.y + (state.over ? DINO.crashedFootPad : 0)
  drawTinted(ctx, sprite, dinoColor, [sourceX, DINO.y, width, DINO.h], DINO_X, dinoY)

  drawMilestone(ctx, state, night)

  const meters = getMeters(state)
  ctx.font = '14px ui-monospace, Consolas, monospace'
  ctx.fillStyle = hud
  ctx.textAlign = 'left'
  ctx.fillText(`speed ${state.speed}`, 10, 20)
  ctx.textAlign = 'right'
  ctx.fillText(`HI ${best} m   ${meters} m`, WIDTH - 10, 20)

  const message = state.over
    ? 'GAME OVER - ↑ / Space 로 다시 시작'
    : running
      ? ''
      : '클릭 후 ↑ 또는 Space 로 시작'
  if (message) {
    ctx.fillStyle = ink
    ctx.textAlign = 'center'
    ctx.fillText(message, WIDTH / 2, 76)
  }
}

export default function DinoView() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logRef = useRef<HTMLDivElement>(null)
  const stateRef = useRef<State>(initialState)
  const runningRef = useRef(false)
  const bestRef = useRef(loadBest())
  const nextId = useRef(0)
  const [entries, setEntries] = useState<Entry[]>([])

  function pushLogs(lines: LogLine[]) {
    if (lines.length === 0) return
    const added = lines.map((line) => ({ ...line, id: nextId.current++ }))
    setEntries((prev) => [...prev, ...added].slice(-MAX_LOGS))
  }

  function handleKey(code: string) {
    const update = onKey(stateRef.current, code)
    stateRef.current = update.state
    if (START_KEYS.includes(code)) runningRef.current = true
    pushLogs(update.logs)
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!CONTROL_KEYS.includes(e.code)) return
    e.preventDefault() // keep Space and the arrows from scrolling the page
    if (!e.repeat) handleKey(e.code)
  }

  function handleKeyUp(e: KeyboardEvent) {
    const update = onKeyUp(stateRef.current, e.code)
    stateRef.current = update.state
    pushLogs(update.logs)
  }

  useEffect(() => {
    // Development only: lets a preview stage scenes (night, birds, a tree...) by setting the state directly.
    if (import.meta.env.DEV) Object.assign(window, { __dino: { stateRef, runningRef } })
  }, [])

  useEffect(() => {
    const ctx = canvasRef.current!.getContext('2d')!
    const sprite = new Image()
    sprite.src = spriteUrl
    let frame = 0
    let last = performance.now()
    let pending = 0 // milliseconds of game time not yet stepped

    function advance() {
      const update = step(stateRef.current)
      const logs = [...update.logs]
      if (update.state.over && !stateRef.current.over) {
        const meters = getMeters(update.state)
        if (meters > bestRef.current) {
          bestRef.current = meters
          saveBest(meters)
          logs.push({ type: 'code', text: `if (meters > best) localStorage.setItem('${BEST_KEY}', meters)   // best=${meters}` })
        }
      }
      stateRef.current = update.state
      pushLogs(logs)
    }

    function loop(now = performance.now()) {
      if (runningRef.current) {
        pending += Math.min(now - last, 100) // after a hidden tab, don't fast-forward
        while (pending >= STEP_MS) {
          advance()
          pending -= STEP_MS
        }
      } else {
        pending = 0
      }
      last = now
      if (sprite.complete && sprite.naturalWidth > 0) draw(ctx, sprite, stateRef.current, bestRef.current, runningRef.current)
      frame = requestAnimationFrame(loop)
    }
    loop()
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const el = logRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries])

  return (
    <div>
      <p className="mb-3 text-sm text-muted">
        게임 화면을 클릭한 뒤 ↑ 점프, ↓ 숙이기, Space 불덩이, ← → 감속·증속합니다.
      </p>
      <canvas
        ref={canvasRef}
        width={WIDTH * SCALE}
        height={HEIGHT * SCALE}
        tabIndex={0}
        aria-label="공룡 점프 게임"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={() => {
          runningRef.current = false
          stateRef.current = { ...stateRef.current, ducking: false } // a key release while unfocused is never seen
        }}
        onMouseDown={(e) => {
          e.currentTarget.focus()
          handleKey('ArrowUp')
        }}
        className="w-full cursor-pointer rounded-md border border-border bg-surface outline-none focus-visible:border-accent"
      />
      <div
        ref={logRef}
        role="log"
        aria-live="off"
        className="mt-4 h-56 overflow-y-auto rounded-md border border-border bg-surface p-3 font-mono text-xs leading-5"
      >
        <div className="text-muted">$ tail -f dino.log</div>
        {entries.map((entry) => (
          <div key={entry.id} className="whitespace-pre-wrap break-all">
            <span className={entry.type === 'event' ? 'text-accent' : 'text-muted'}>
              {entry.type === 'event' ? '$' : '>'}
            </span>{' '}
            {entry.text}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-muted">
        공룡 그래픽:{' '}
        <a
          href="https://github.com/ShinHeeYoun/ShinHeeYoun.github.io/blob/main/src/tools/dino/CHROMIUM-LICENSE.txt"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Chromium 프로젝트 (BSD 3-Clause)
        </a>
      </p>
    </div>
  )
}
