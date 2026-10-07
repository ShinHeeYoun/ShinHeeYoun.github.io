import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import spriteUrl from './offline-sprite.png'
import {
  CACTI,
  CONTROL_KEYS,
  DINO_X,
  GROUND_Y,
  HEIGHT,
  JUMP_KEYS,
  WIDTH,
  getScore,
  initialState,
  onKey,
  step,
  type LogLine,
  type State,
} from './controller'

const SCALE = 2 // canvas pixels per CSS pixel, keeps the pixel art crisp on hi-dpi screens
const STEP_MS = 1000 / 60 // the game always advances 60 steps per second, whatever the screen's refresh rate
const LEG_TICKS = 15 // steps per leg swap: 4 swaps per second
const MAX_LOGS = 60
const BEST_KEY = 'dino_best'

// Where each picture sits in Chromium's 1x offline sprite sheet (offline_sprite_definitions.ts, trex.ts).
// The crashed frame has 2 empty rows under the feet, so it is drawn 2px lower to touch the ground line.
const DINO = { x: 848, y: 2, w: 44, h: 47, standing: 0, running: [88, 132], crashed: 220, crashedFootPad: 2 }
const CACTUS_X = { small: 228, large: 332 }
const CLOUD = { x: 86, y: 2, w: 46, h: 14 }
const HORIZON = { x: 2, y: 54, w: 1200, h: 12, lineRow: 4 }

type Entry = LogLine & { id: number }

function loadBest() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0
  } catch {
    return 0
  }
}

function saveBest(score: number) {
  try {
    localStorage.setItem(BEST_KEY, String(score))
  } catch {
    // storage unavailable (private window etc.): the best score just won't persist
  }
}

const color = (token: string) =>
  `rgb(${getComputedStyle(document.documentElement).getPropertyValue(`--color-${token}`).trim()})`

const pad = (n: number) => String(n).padStart(5, '0')

// The sprite sheet is one grey on transparent, so repaint it in a theme color (cached per color).
const tinted = new Map<string, HTMLCanvasElement>()
function tint(sprite: HTMLImageElement, fill: string) {
  let copy = tinted.get(fill)
  if (!copy) {
    copy = document.createElement('canvas')
    copy.width = sprite.width
    copy.height = sprite.height
    const g = copy.getContext('2d')!
    g.drawImage(sprite, 0, 0)
    g.globalCompositeOperation = 'source-in'
    g.fillStyle = fill
    g.fillRect(0, 0, copy.width, copy.height)
    tinted.set(fill, copy)
  }
  return copy
}

function draw(ctx: CanvasRenderingContext2D, sprite: HTMLImageElement, state: State, best: number, running: boolean) {
  const fg = color('foreground')
  const muted = color('muted')
  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0)
  ctx.imageSmoothingEnabled = false
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  // Every layer scrolls from the same distance, so a higher speed moves them all faster.
  const mutedSprite = tint(sprite, muted)
  ctx.globalAlpha = 0.5
  for (const base of [90, 260, 430]) {
    const cloudX = (((base - state.distance * 0.3) % (WIDTH + 80)) + WIDTH + 80) % (WIDTH + 80) - 40
    // clouds stay between y=42 and y=60, above the centered message (baseline 76)
    ctx.drawImage(mutedSprite, CLOUD.x, CLOUD.y, CLOUD.w, CLOUD.h, cloudX, 24 + (base % 24), CLOUD.w, CLOUD.h)
  }
  ctx.globalAlpha = 1
  const lineY = GROUND_Y - HORIZON.lineRow
  const scroll = state.distance % HORIZON.w
  for (const x of [-scroll, HORIZON.w - scroll]) {
    ctx.drawImage(mutedSprite, HORIZON.x, HORIZON.y, HORIZON.w, HORIZON.h, x, lineY, HORIZON.w, HORIZON.h)
  }

  const fgSprite = tint(sprite, fg)
  for (const o of state.obstacles) {
    const { w, h } = CACTI[o.kind]
    ctx.drawImage(fgSprite, CACTUS_X[o.kind], DINO.y, w, h, o.x, GROUND_Y - h, w, h)
  }

  // In the air and on the title screen the dino keeps one pose.
  const pose = state.over
    ? DINO.crashed
    : state.y > 0 || !running
      ? DINO.standing
      : DINO.running[Math.floor(state.ticks / LEG_TICKS) % 2]
  const dinoY = GROUND_Y - DINO.h - state.y + (state.over ? DINO.crashedFootPad : 0)
  ctx.drawImage(tint(sprite, color('accent')), DINO.x + pose, DINO.y, DINO.w, DINO.h, DINO_X, dinoY, DINO.w, DINO.h)

  ctx.font = '14px ui-monospace, Consolas, monospace'
  ctx.fillStyle = muted
  ctx.textAlign = 'left'
  ctx.fillText(`speed ${state.speed}`, 10, 20)
  ctx.textAlign = 'right'
  ctx.fillText(`HI ${pad(best)}  ${pad(getScore(state))}`, WIDTH - 10, 20)

  const message = state.over ? 'GAME OVER - Space / ↑ 로 다시 시작' : running ? '' : '클릭 후 Space / ↑ 로 시작'
  if (message) {
    ctx.fillStyle = fg
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
    if (JUMP_KEYS.includes(code)) runningRef.current = true
    pushLogs(update.logs)
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (!CONTROL_KEYS.includes(e.code)) return
    e.preventDefault() // keep Space and the arrows from scrolling the page
    if (!e.repeat) handleKey(e.code)
  }

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
        const score = getScore(update.state)
        if (score > bestRef.current) {
          bestRef.current = score
          saveBest(score)
          logs.push({ type: 'code', text: `if (score > best) localStorage.setItem('${BEST_KEY}', score)   // best=${score}` })
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
        게임 화면을 클릭한 뒤 Space / ↑ 로 점프, ← → 로 감속·증속합니다.
      </p>
      <canvas
        ref={canvasRef}
        width={WIDTH * SCALE}
        height={HEIGHT * SCALE}
        tabIndex={0}
        aria-label="공룡 점프 게임"
        onKeyDown={handleKeyDown}
        onBlur={() => (runningRef.current = false)}
        onMouseDown={(e) => {
          e.currentTarget.focus()
          handleKey('Space')
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
