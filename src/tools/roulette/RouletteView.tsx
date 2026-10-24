import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { cryptoRng } from '../../lib/random'
import {
  DEFAULT_ROWS,
  MAX_ITEMS,
  MAX_NAME,
  MIN_ITEMS,
  SPIN_MS,
  addRow,
  canSpin,
  entriesOf,
  labelFor,
  labelSize,
  landingRotation,
  parseRows,
  pickWinner,
  removeRow,
  setRow,
  slicePath,
  sliceColor,
  type Entry,
} from './controller'

const STORAGE_KEY = 'roulette_rows'
const HISTORY_SIZE = 10

// The wheel is drawn in a 440 x 440 box: the centre of the wheel is at (CX, CY), the pointer sits above it.
const CX = 220
const CY = 230
const RADIUS = 190

function loadRows(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return (raw ? parseRows(JSON.parse(raw)) : null) ?? DEFAULT_ROWS
  } catch {
    return DEFAULT_ROWS
  }
}

function Wheel({ entries, rotation, spinning }: { entries: Entry[]; rotation: number; spinning: boolean }) {
  const count = entries.length
  const size = 360 / count
  const fontSize = labelSize(count)
  return (
    <svg
      viewBox="0 0 440 440"
      role="img"
      aria-label={count >= 2 ? `룰렛: ${entries.map((entry) => entry.name).join(', ')}` : '룰렛: 항목이 부족합니다'}
      className="mx-auto block h-auto w-full max-w-[28rem]"
    >
      {count >= 2 ? (
        <g
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${CX}px ${CY}px`,
            transition: spinning ? `transform ${SPIN_MS}ms cubic-bezier(0.12, 0.6, 0.1, 1)` : 'none',
          }}
        >
          {entries.map((entry, i) => (
            <g key={entry.row}>
              <path d={slicePath(CX, CY, RADIUS, i * size, (i + 1) * size)} fill={sliceColor(i)} stroke="white" strokeWidth="2" />
              <text
                x={CX + RADIUS - 14}
                y={CY}
                transform={`rotate(${i * size + size / 2 - 90} ${CX} ${CY})`}
                textAnchor="end"
                dominantBaseline="central"
                fontSize={fontSize}
                fontWeight="600"
                fill="white"
              >
                {labelFor(entry.name, count)}
              </text>
            </g>
          ))}
        </g>
      ) : (
        <>
          <circle cx={CX} cy={CY} r={RADIUS} className="fill-surface stroke-border" strokeWidth="2" />
          <text x={CX} y={CY} textAnchor="middle" dominantBaseline="central" fontSize="18" className="fill-muted">
            항목을 {MIN_ITEMS}개 이상 입력하세요
          </text>
        </>
      )}
      <circle cx={CX} cy={CY} r="22" className="fill-background stroke-border" strokeWidth="3" />
      {/* the pointer: fixed, it does not turn with the wheel */}
      <polygon points="203,6 237,6 220,50" className="fill-accent stroke-background" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

export default function RouletteView() {
  const [rows, setRows] = useState<string[]>(loadRows)
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<Entry | null>(null)
  const [history, setHistory] = useState<string[]>([])

  const timer = useRef<number | null>(null)
  const focusRow = useRef<number | null>(null)
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const entries = entriesOf(rows)
  const ready = canSpin(rows)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rows))
    } catch {
      // storage unavailable: the list is just not kept
    }
  }, [rows])

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current)
    }
  }, [])

  // After a row is added, the cursor goes into it.
  useEffect(() => {
    if (focusRow.current !== null) {
      inputs.current[focusRow.current]?.focus()
      focusRow.current = null
    }
  }, [rows])

  // Any change to the list lays the wheel out again, so it starts again from the top with no result.
  function changeRows(next: string[]) {
    setRows(next)
    setRotation(0)
    setResult(null)
  }

  function finish(winner: Entry) {
    timer.current = null
    setSpinning(false)
    setResult(winner)
    setHistory((past) => [winner.name, ...past].slice(0, HISTORY_SIZE))
  }

  function spin() {
    if (spinning || !ready) return
    const rng = cryptoRng()
    const winner = entries[pickWinner(entries.length, rng)]
    const target = landingRotation(rotation, entries.length, entries.indexOf(winner), rng)
    setResult(null)
    setRotation(target)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish(winner) // no spinning to watch for someone who asked for less motion
      return
    }
    setSpinning(true)
    timer.current = window.setTimeout(() => finish(winner), SPIN_MS + 100)
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>, index: number) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing && rows.length < MAX_ITEMS) {
      event.preventDefault()
      focusRow.current = index + 1
      changeRows(addRow(rows, index))
    }
  }

  function dropWinner() {
    if (result) changeRows(removeRow(rows, result.row))
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,30rem)_minmax(0,1fr)]">
      <div>
        <Wheel entries={entries} rotation={rotation} spinning={spinning} />
        <button
          type="button"
          onClick={spin}
          disabled={spinning || !ready}
          className="mt-4 w-full rounded-lg bg-accent px-4 py-4 text-lg font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {spinning ? '돌아가는 중...' : '돌리기'}
        </button>
        <div role="status" aria-live="polite" className="mt-4 min-h-[5rem]">
          {result && (
            <div className="rounded-lg border border-accent bg-accent/10 p-4">
              <p className="text-sm text-muted">결과</p>
              <p className="mt-1 break-words text-3xl font-bold">{result.name}</p>
              <button
                type="button"
                onClick={dropWinner}
                className="mt-3 rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent"
              >
                이 항목 빼고 다시
              </button>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">항목</h2>
        <p className="mt-1 text-xs text-muted">
          {MIN_ITEMS}~{MAX_ITEMS}개, 이름은 {MAX_NAME}자까지입니다. 비워 둔 칸은 빼고 돌립니다. 결과는 돌리기 전에 브라우저의 보안
          난수로 정해지고, 모든 항목의 확률이 같습니다.
        </p>
        <ul className="mt-3 space-y-2">
          {rows.map((text, i) => (
            <li key={i} className="flex items-center gap-2">
              <span
                className="h-4 w-4 shrink-0 rounded-sm"
                style={{ background: text.trim() === '' ? 'transparent' : sliceColor(entries.findIndex((entry) => entry.row === i)) }}
                aria-hidden="true"
              />
              <input
                ref={(element) => {
                  inputs.current[i] = element
                }}
                type="text"
                value={text}
                disabled={spinning}
                maxLength={MAX_NAME * 2}
                placeholder={`항목 ${i + 1}`}
                aria-label={`항목 ${i + 1}`}
                onChange={(event) => changeRows(setRow(rows, i, event.target.value))}
                onKeyDown={(event) => onKeyDown(event, i)}
                className="min-w-0 flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none disabled:opacity-60"
              />
              <button
                type="button"
                disabled={spinning}
                onClick={() => changeRows(removeRow(rows, i))}
                aria-label={`항목 ${i + 1} 지우기`}
                className="rounded-md border border-border bg-surface px-2.5 py-2 text-sm transition-colors hover:border-accent disabled:opacity-50"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={spinning || rows.length >= MAX_ITEMS}
            onClick={() => {
              focusRow.current = rows.length
              changeRows(addRow(rows))
            }}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50"
          >
            항목 추가
          </button>
          <button
            type="button"
            disabled={spinning}
            onClick={() => changeRows(DEFAULT_ROWS)}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm transition-colors hover:border-accent disabled:opacity-50"
          >
            예시로 되돌리기
          </button>
        </div>

        {history.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold">지난 결과</h2>
            <ol className="mt-2 list-inside list-decimal space-y-1 text-sm">
              {history.map((name, i) => (
                <li key={i} className={i === 0 ? 'font-semibold' : 'text-muted'}>
                  {name}
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </div>
  )
}
