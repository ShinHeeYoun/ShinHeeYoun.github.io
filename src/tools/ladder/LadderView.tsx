import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useEffect, useMemo, useState } from 'react'
import {
  HIGHLIGHT_COLOR,
  MAX_COLUMNS,
  MIN_COLUMNS,
  bottomLabel,
  cryptoRng,
  endColumn,
  generateRungs,
  initialDraft,
  parseDraft,
  partialPath,
  pathPoints,
  resizeDraft,
  resultColors,
  rowCountFor,
  setText,
  settleColumns,
  shuffleSide,
  startColumn,
  topLabel,
  type Density,
  type Draft,
  type PathPoint,
  type Rungs,
} from './controller'

const STORAGE_KEY = 'ladder_draft'
const COLUMN_MIN_WIDTH = 76 // px: narrower than this, the ladder scrolls sideways instead of squeezing
const ROW_HEIGHT = 18 // px per level of the ladder
const ANIMATION_MS = 900
const NEUTRAL_LINE = 'hsl(var(--muted-foreground) / 0.55)'

const DENSITY_LABELS: Record<Density, string> = { low: '적게', normal: '보통', high: '많이' }

type Selection = { start: number; from: 'top' | 'bottom' }

// The same color with some transparency, for the background of a colored box.
const tint = (color: string, alpha: number) => color.replace(/\)$/, ` / ${alpha})`)

function loadDraft(): Draft {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return (saved && parseDraft(JSON.parse(saved))) || initialDraft()
  } catch {
    return initialDraft()
  }
}

function toPolyline(points: PathPoint[]): string {
  return points.map((point) => `${point.column + 0.5},${point.level}`).join(' ')
}

// A box of the ladder (a name above, a result below): typed into before the start, pressed after it.
const boxClass = 'w-full min-w-0 rounded-md border px-2 py-1.5 text-center text-sm transition-colors'
const typedBox = 'bg-background shadow-sm outline-none focus-visible:ring-1 focus-visible:ring-ring'

export default function LadderView() {
  const [draft, setDraft] = useState<Draft>(loadDraft)
  const [countText, setCountText] = useState(() => String(draft.count))
  const [density, setDensity] = useState<Density>('normal')
  // The ladder exists only after Start. Before that there is nothing to look at, not even hidden.
  const [rungs, setRungs] = useState<Rungs | null>(null)
  const [selected, setSelected] = useState<Selection | null>(null)
  const [revealed, setRevealed] = useState<number[]>([])
  const [showAll, setShowAll] = useState(false)
  const [progress, setProgress] = useState(1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft))
    } catch {
      // storage unavailable (e.g. private browsing): the draft just is not kept
    }
  }, [draft])

  // Draw the picked path a little more each frame, from the box that was clicked.
  useEffect(() => {
    if (!selected) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      return
    }
    setProgress(0)
    const startedAt = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const fraction = Math.min(1, (now - startedAt) / ANIMATION_MS)
      setProgress(fraction)
      if (fraction < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [selected])

  const count = draft.count
  const rows = rungs ? rungs.length : rowCountFor(count, density)
  const colors = useMemo(() => resultColors(draft.bottoms), [draft.bottoms])
  const playing = rungs !== null

  function changeCount(text: string) {
    setCountText(text)
    const value = Number(text)
    // Only a finished, valid number resizes the ladder; "1" on the way to "12" must not shrink it to 2.
    if (text.trim() !== '' && Number.isInteger(value) && value >= MIN_COLUMNS && value <= MAX_COLUMNS) {
      setDraft((current) => resizeDraft(current, value))
    }
  }

  function start() {
    setRungs(generateRungs(count, density, cryptoRng()))
    setSelected(null)
    setRevealed([])
    setShowAll(false)
  }

  function backToEdit() {
    setRungs(null)
    setSelected(null)
    setRevealed([])
    setShowAll(false)
  }

  function pick(selection: Selection) {
    setSelected(selection)
    setRevealed((current) => (current.includes(selection.start) ? current : [...current, selection.start]))
  }

  function hideAll() {
    setShowAll(false)
    setSelected(null)
    setRevealed([])
  }

  async function copyResults() {
    if (!rungs) return
    const lines = Array.from({ length: count }, (_, i) => {
      return `${topLabel(draft.tops[i], i)} → ${bottomLabel(draft.bottoms[endColumn(rungs, i)])}`
    })
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // the browser refused: nothing was copied
    }
  }

  const isShown = (start: number) => showAll || revealed.includes(start)

  // The path being picked, from the clicked box onward (a bottom box walks up, so its path is drawn upward).
  const picked = useMemo(() => {
    if (!rungs || !selected) return null
    const forward = pathPoints(rungs, selected.start)
    return {
      end: endColumn(rungs, selected.start),
      forward,
      drawn: selected.from === 'bottom' ? [...forward].reverse() : forward,
    }
  }, [rungs, selected])

  const columnsStyle = { gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }

  return (
    <div>
      <p className="text-sm text-muted-foreground">
        열 수를 정하고 위(이름)와 아래(결과)를 적은 뒤 시작을 누르세요. 시작하기 전에는 사다리의 가로줄이 만들어지지
        않습니다.
      </p>

      {!playing && (
        <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="ladder-count">
              열 수 ({MIN_COLUMNS}~{MAX_COLUMNS})
            </Label>
            <Input
              id="ladder-count"
              type="number"
              inputMode="numeric"
              min={MIN_COLUMNS}
              max={MAX_COLUMNS}
              step={1}
              value={countText}
              onChange={(event) => changeCount(event.target.value)}
              onBlur={() => {
                const settled = settleColumns(countText, draft.count)
                setDraft(resizeDraft(draft, settled))
                setCountText(String(settled))
              }}
              className="w-24"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="ladder-density">가로줄</Label>
            <select
              id="ladder-density"
              value={density}
              onChange={(event) => setDensity(event.target.value as Density)}
              className="flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              {(Object.keys(DENSITY_LABELS) as Density[]).map((key) => (
                <option key={key} value={key}>
                  {DENSITY_LABELS[key]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" onClick={() => setDraft(shuffleSide(draft, 'top', cryptoRng()))}>
              이름 섞기
            </Button>
            <Button type="button" variant="outline" onClick={() => setDraft(shuffleSide(draft, 'bottom', cryptoRng()))}>
              결과 섞기
            </Button>
            <Button type="button" onClick={start}>
              시작
            </Button>
          </div>
        </div>
      )}

      {playing && (
        <div className="mt-4 flex flex-wrap gap-2">
          {showAll ? (
            <Button type="button" variant="outline" size="sm" onClick={hideAll}>
              결과 숨기기
            </Button>
          ) : (
            <Button type="button" variant="outline" size="sm" onClick={() => setShowAll(true)}>
              전체 결과 보기
            </Button>
          )}
          {showAll && (
            <Button type="button" variant="outline" size="sm" onClick={copyResults}>
              {copied ? '복사됨' : '결과 복사'}
            </Button>
          )}
          <Button type="button" variant="outline" size="sm" onClick={start}>
            다시 섞기
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={backToEdit}>
            처음으로
          </Button>
        </div>
      )}

      <div className="mt-5 overflow-x-auto pb-2">
        <div style={{ minWidth: count * COLUMN_MIN_WIDTH }}>
          {/* top boxes */}
          <div className="grid" style={columnsStyle}>
            {Array.from({ length: count }, (_, i) => {
              const isPicked = selected?.start === i
              return (
                <div key={i} className="px-1">
                  {playing ? (
                    <button
                      type="button"
                      aria-pressed={isPicked}
                      onClick={() => pick({ start: i, from: 'top' })}
                      className={`${boxClass} truncate bg-card hover:bg-muted`}
                      style={
                        isPicked
                          ? { borderColor: HIGHLIGHT_COLOR, backgroundColor: tint(HIGHLIGHT_COLOR, 0.2) }
                          : isShown(i) && rungs
                            ? {
                                borderColor: colors[endColumn(rungs, i)],
                                backgroundColor: tint(colors[endColumn(rungs, i)], 0.15),
                              }
                            : { borderColor: 'hsl(var(--border))' }
                      }
                    >
                      {isShown(i) && '✓ '}
                      {topLabel(draft.tops[i], i)}
                    </button>
                  ) : (
                    <input
                      type="text"
                      value={draft.tops[i]}
                      maxLength={20}
                      placeholder={`${i + 1}번`}
                      aria-label={`${i + 1}번째 열 위 텍스트`}
                      onChange={(event) => setDraft(setText(draft, 'top', i, event.target.value))}
                      className={`${boxClass} border-input ${typedBox}`}
                    />
                  )}
                </div>
              )
            })}
          </div>

          {/* the ladder: vertical lines always, rungs only once started */}
          <div className="relative">
            <svg
              viewBox={`0 0 ${count} ${rows + 1}`}
              preserveAspectRatio="none"
              aria-hidden="true"
              className="block w-full"
              style={{ height: (rows + 1) * ROW_HEIGHT }}
            >
              {Array.from({ length: count }, (_, i) => (
                <line
                  key={`v${i}`}
                  x1={i + 0.5}
                  x2={i + 0.5}
                  y1={0}
                  y2={rows + 1}
                  stroke={NEUTRAL_LINE}
                  strokeWidth={2}
                  strokeDasharray={playing ? undefined : '4 5'}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              {rungs?.map((row, r) =>
                row.map((has, gap) =>
                  has ? (
                    <line
                      key={`h${r}-${gap}`}
                      x1={gap + 0.5}
                      x2={gap + 1.5}
                      y1={r + 1}
                      y2={r + 1}
                      stroke={NEUTRAL_LINE}
                      strokeWidth={2}
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ) : null,
                ),
              )}
              {/* paths already checked, in the color of their result */}
              {rungs &&
                Array.from({ length: count }, (_, start) =>
                  isShown(start) && start !== selected?.start ? (
                    <polyline
                      key={`p${start}`}
                      points={toPolyline(pathPoints(rungs, start))}
                      fill="none"
                      stroke={colors[endColumn(rungs, start)]}
                      strokeWidth={4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  ) : null,
                )}
              {/* the path just picked: red, on top */}
              {picked && (
                <polyline
                  data-testid="picked-path"
                  points={toPolyline(partialPath(picked.drawn, progress, COLUMN_MIN_WIDTH, ROW_HEIGHT))}
                  fill="none"
                  stroke={HIGHLIGHT_COLOR}
                  strokeWidth={5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              )}
            </svg>
            {!playing && (
              <p className="pointer-events-none absolute inset-0 flex items-center justify-center text-center text-sm text-muted-foreground">
                <span className="rounded bg-background/80 px-3 py-1">시작하면 사다리가 나타납니다</span>
              </p>
            )}
          </div>

          {/* bottom boxes */}
          <div className="grid" style={columnsStyle}>
            {Array.from({ length: count }, (_, j) => {
              const isEnd = picked?.end === j
              return (
                <div key={j} className="px-1">
                  {playing && rungs ? (
                    <button
                      type="button"
                      aria-pressed={isEnd}
                      onClick={() => pick({ start: startColumn(rungs, j), from: 'bottom' })}
                      className={`${boxClass} truncate bg-card hover:bg-muted`}
                      style={
                        isEnd
                          ? { borderColor: HIGHLIGHT_COLOR, backgroundColor: tint(HIGHLIGHT_COLOR, 0.2) }
                          : { borderColor: colors[j], backgroundColor: tint(colors[j], 0.15) }
                      }
                    >
                      {bottomLabel(draft.bottoms[j])}
                    </button>
                  ) : (
                    <input
                      type="text"
                      value={draft.bottoms[j]}
                      maxLength={20}
                      placeholder="결과"
                      aria-label={`${j + 1}번째 열 아래 텍스트`}
                      onChange={(event) => setDraft(setText(draft, 'bottom', j, event.target.value))}
                      className={`${boxClass} ${typedBox}`}
                      style={{ borderColor: draft.bottoms[j].trim() ? colors[j] : 'hsl(var(--border))' }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {playing && rungs && (
        <div className="mt-4">
          <p role="status" className="min-h-6 text-sm">
            {selected && picked ? (
              <>
                <span style={{ color: HIGHLIGHT_COLOR }}>●</span> {topLabel(draft.tops[selected.start], selected.start)} →{' '}
                <strong>{bottomLabel(draft.bottoms[picked.end])}</strong>
              </>
            ) : (
              <span className="text-muted-foreground">위 또는 아래 상자를 눌러 연결된 길을 확인하세요.</span>
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            확인한 열 {showAll ? count : revealed.length} / {count}
          </p>

          <Table className="mt-3 max-w-md">
            <caption className="sr-only">이름별 결과</caption>
            <TableHeader>
              <TableRow>
                <TableHead>이름</TableHead>
                <TableHead>결과</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: count }, (_, i) => {
                const end = endColumn(rungs, i)
                return (
                  <TableRow key={i}>
                    <TableCell>{topLabel(draft.tops[i], i)}</TableCell>
                    <TableCell>
                      {isShown(i) ? (
                        <span className="inline-flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: colors[end] }}
                          />
                          {bottomLabel(draft.bottoms[end])}
                        </span>
                      ) : (
                        <span className="text-muted-foreground">?</span>
                      )}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
