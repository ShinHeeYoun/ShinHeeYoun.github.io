// The rules of the ladder game, with nothing about the screen in it (see LadderView.tsx for that).
//
// A ladder has `columns` vertical lines and, between each pair of neighbours, places where a rung (a crossbar)
// may be. `rungs[row][gap]` is true when a rung joins column `gap` and column `gap + 1` in that row.

export const MIN_COLUMNS = 2
export const MAX_COLUMNS = 20
export const DEFAULT_COLUMNS = 4

export type Density = 'low' | 'normal' | 'high'
export type Rungs = boolean[][]
// A function that gives a number from 0 up to, but not including, 1.
export type Rng = () => number

// Whole numbers only, and always inside the allowed range.
export function clampColumns(value: number): number {
  if (Number.isNaN(value)) return DEFAULT_COLUMNS
  return Math.min(MAX_COLUMNS, Math.max(MIN_COLUMNS, Math.floor(value)))
}

// The number of columns once the player has finished typing in the box (when it loses focus): a number is kept
// inside the range, and a box left empty, or holding something that is not a number, goes back to what it was.
export function settleColumns(text: string, current: number): number {
  const value = Number(text)
  if (text.trim() === '' || !Number.isFinite(value)) return current
  return clampColumns(value)
}

// The random numbers for a real game. They come from the browser's secure generator, so nobody can predict the
// ladder from earlier ones.
export function cryptoRng(): Rng {
  return () => {
    const buffer = new Uint32Array(1)
    crypto.getRandomValues(buffer)
    return buffer[0] / 4294967296
  }
}

// --- What the player typed ---

export type Side = 'top' | 'bottom'
export type Draft = { count: number; tops: string[]; bottoms: string[] }

export function initialDraft(): Draft {
  return {
    count: DEFAULT_COLUMNS,
    tops: Array(DEFAULT_COLUMNS).fill(''),
    bottoms: Array(DEFAULT_COLUMNS).fill(''),
  }
}

// A new number of columns. Texts already typed stay where they are; new columns start blank.
export function resizeDraft(draft: Draft, count: number): Draft {
  const size = clampColumns(count)
  const fit = (texts: string[]) => Array.from({ length: size }, (_, i) => texts[i] ?? '')
  return { count: size, tops: fit(draft.tops), bottoms: fit(draft.bottoms) }
}

export function setText(draft: Draft, side: Side, index: number, text: string): Draft {
  const key = side === 'top' ? 'tops' : 'bottoms'
  const texts = [...draft[key]]
  texts[index] = text
  return { ...draft, [key]: texts }
}

// The texts of one side in a random order (Fisher-Yates), so that even the person running the game does not know
// who stands where.
export function shuffleSide(draft: Draft, side: Side, rng: Rng): Draft {
  const key = side === 'top' ? 'tops' : 'bottoms'
  const texts = [...draft[key]]
  for (let i = texts.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[texts[i], texts[j]] = [texts[j], texts[i]]
  }
  return { ...draft, [key]: texts }
}

// A draft read back from storage. Anything that is not a draft gives null; a count that is out of range, or texts
// that do not match the count, are fixed.
export function parseDraft(raw: unknown): Draft | null {
  if (typeof raw !== 'object' || raw === null) return null
  const { count, tops, bottoms } = raw as Record<string, unknown>
  if (typeof count !== 'number') return null
  const isTexts = (value: unknown): value is string[] =>
    Array.isArray(value) && value.every((item) => typeof item === 'string')
  if (!isTexts(tops) || !isTexts(bottoms)) return null
  return resizeDraft({ count, tops, bottoms }, count)
}

export function topLabel(text: string, index: number): string {
  return text.trim() || `${index + 1}번`
}

export function bottomLabel(text: string): string {
  return text.trim() || '-'
}

// --- The ladder itself ---

const ROWS_PER_COLUMN: Record<Density, number> = { low: 1.5, normal: 2.5, high: 4 }
const RUNG_CHANCE: Record<Density, number> = { low: 0.2, normal: 0.35, high: 0.5 }

export function rowCountFor(columns: number, density: Density): number {
  return Math.max(8, Math.round(columns * ROWS_PER_COLUMN[density]))
}

// A random ladder. Two promises are kept, so that the game is fair and the paths are clear:
// - no two rungs sit side by side in a row (a path could not tell which one to take);
// - every pair of neighbouring columns is joined by at least one rung (no column just runs straight down).
export function generateRungs(columns: number, density: Density, rng: Rng): Rungs {
  const rows = rowCountFor(columns, density)
  const gaps = columns - 1
  const rungs: Rungs = Array.from({ length: rows }, () => Array<boolean>(gaps).fill(false))

  // One rung for each gap first, in rows that differ from the previous gap's, so they never touch.
  let previousRow = -1
  for (let gap = 0; gap < gaps; gap++) {
    let row = Math.floor(rng() * (rows - 1))
    if (previousRow >= 0 && row >= previousRow) row += 1
    rungs[row][gap] = true
    previousRow = row
  }

  // Then the rest by chance, wherever a rung would not touch another.
  for (let row = 0; row < rows; row++) {
    for (let gap = 0; gap < gaps; gap++) {
      if (rungs[row][gap]) continue
      if (rungs[row][gap - 1] || rungs[row][gap + 1]) continue
      if (rng() < RUNG_CHANCE[density]) rungs[row][gap] = true
    }
  }
  return rungs
}

// Crossing one row: the column a path ends up in, coming from `column`.
function cross(row: boolean[], column: number): number {
  if (row[column]) return column + 1
  if (column > 0 && row[column - 1]) return column - 1
  return column
}

// The bottom column that the path from top column `start` ends in.
export function endColumn(rungs: Rungs, start: number): number {
  let column = start
  for (const row of rungs) column = cross(row, column)
  return column
}

// The top column that leads to bottom column `end`: the same walk, from the bottom up.
export function startColumn(rungs: Rungs, end: number): number {
  let column = end
  for (let row = rungs.length - 1; row >= 0; row--) column = cross(rungs[row], column)
  return column
}

// A point on the picture: a column, and a level counted down from the top box (0) to the bottom box (rows + 1).
export type PathPoint = { column: number; level: number }

// The corners of the path from top column `start`: down the column, sideways over each rung it meets, and on down.
export function pathPoints(rungs: Rungs, start: number): PathPoint[] {
  const points: PathPoint[] = [{ column: start, level: 0 }]
  let column = start
  rungs.forEach((row, index) => {
    const next = cross(row, column)
    if (next !== column) {
      points.push({ column, level: index + 1 }, { column: next, level: index + 1 })
      column = next
    }
  })
  points.push({ column, level: rungs.length + 1 })
  return points
}

// The first `fraction` of a path (0 to 1), for drawing it a little more each frame. Lengths are measured in pixels,
// so a sideways step takes as long as it looks. The last point may fall part of the way along a segment.
export function partialPath(
  points: PathPoint[],
  fraction: number,
  columnWidth: number,
  rowHeight: number,
): PathPoint[] {
  if (points.length < 2 || fraction >= 1) return [...points]
  const lengthOf = (a: PathPoint, b: PathPoint) =>
    Math.abs(b.column - a.column) * columnWidth + Math.abs(b.level - a.level) * rowHeight
  let total = 0
  for (let i = 1; i < points.length; i++) total += lengthOf(points[i - 1], points[i])

  let remaining = Math.max(0, fraction) * total
  const result: PathPoint[] = [points[0]]
  for (let i = 1; i < points.length; i++) {
    const length = lengthOf(points[i - 1], points[i])
    if (remaining >= length) {
      result.push(points[i])
      remaining -= length
      continue
    }
    if (remaining > 0 && length > 0) {
      const share = remaining / length
      result.push({
        column: points[i - 1].column + (points[i].column - points[i - 1].column) * share,
        level: points[i - 1].level + (points[i].level - points[i - 1].level) * share,
      })
    }
    break
  }
  return result
}

// --- Colors ---

// The path the player picked is drawn in red, so no group color may be near it.
export const HIGHLIGHT_HUE = 0
export const HIGHLIGHT_COLOR = 'hsl(0 85% 55%)'
const BLANK_COLOR = 'hsl(0 0% 55%)'
// Hues that keep away from red (0). The first five are 60 degrees apart, since most games have only a few different
// results; the other five fill the gaps.
const GROUP_HUES = [225, 45, 165, 285, 105, 255, 75, 195, 135, 300]

// The color of the nth group of results: ten hues, then the same ten darker. (Twenty columns at most.)
export function groupColor(index: number): string {
  const hue = GROUP_HUES[index % GROUP_HUES.length]
  const lightness = Math.floor(index / GROUP_HUES.length) % 2 === 0 ? 52 : 38
  return `hsl(${hue} 70% ${lightness}%)`
}

// One color for each bottom box: the same text, the same color. Blank boxes share one gray.
export function resultColors(bottoms: string[]): string[] {
  const groups = new Map<string, number>()
  return bottoms.map((text) => {
    const key = text.trim()
    if (key === '') return BLANK_COLOR
    if (!groups.has(key)) groups.set(key, groups.size)
    return groupColor(groups.get(key) as number)
  })
}
