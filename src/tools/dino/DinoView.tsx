import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import {
  CONTROL_KEYS,
  DINO_H,
  DINO_W,
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

const SCALE = 2 // canvas pixels per CSS pixel, keeps rectangles crisp on hi-dpi screens
const MAX_LOGS = 60
const BEST_KEY = 'dino_best'

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

function draw(ctx: CanvasRenderingContext2D, state: State, best: number, running: boolean) {
  const fg = color('foreground')
  const muted = color('muted')
  ctx.setTransform(SCALE, 0, 0, SCALE, 0, 0)
  ctx.clearRect(0, 0, WIDTH, HEIGHT)

  // Both layers scroll from the same distance, so a higher speed moves them faster.
  ctx.fillStyle = muted
  ctx.globalAlpha = 0.35
  for (const base of [90, 260, 430]) {
    const cloudX = (((base - state.distance * 0.3) % (WIDTH + 80)) + WIDTH + 80) % (WIDTH + 80) - 40
    ctx.fillRect(cloudX, 30 + (base % 40), 36, 8)
  }
  ctx.globalAlpha = 1
  ctx.fillRect(0, GROUND_Y, WIDTH, 1)
  for (let x = -(state.distance % 40); x < WIDTH; x += 40) ctx.fillRect(x, GROUND_Y + 6, 16, 2)

  ctx.fillStyle = color('accent')
  const top = GROUND_Y - state.y - DINO_H
  ctx.fillRect(DINO_X, top, DINO_W, DINO_H)
  ctx.fillRect(DINO_X + DINO_W - 4, top - 6, 10, 10)
  ctx.fillStyle = color('background')
  ctx.fillRect(DINO_X + DINO_W + 2, top - 3, 2, 2)

  ctx.fillStyle = fg
  for (const o of state.obstacles) ctx.fillRect(o.x, GROUND_Y - o.h, o.w, o.h)

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
    ctx.fillText(message, WIDTH / 2, 100) // below the clouds (which stay above y=70)
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
    let frame = 0
    function loop() {
      if (runningRef.current) {
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
      draw(ctx, stateRef.current, bestRef.current, runningRef.current)
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
    </div>
  )
}
