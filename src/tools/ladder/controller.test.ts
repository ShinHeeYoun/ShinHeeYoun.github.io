import { describe, it, expect } from 'vitest'
import {
  DEFAULT_COLUMNS,
  HIGHLIGHT_HUE,
  MAX_COLUMNS,
  MIN_COLUMNS,
  bottomLabel,
  clampColumns,
  cryptoRng,
  endColumn,
  generateRungs,
  groupColor,
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
  type Rungs,
} from './controller'

// A small seeded random generator, so that the "random" tests give the same answer every run.
function seeded(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const DENSITIES: Density[] = ['low', 'normal', 'high']

describe('clampColumns', () => {
  it('keeps the number of columns between the minimum and the maximum', () => {
    expect(clampColumns(1)).toBe(MIN_COLUMNS)
    expect(clampColumns(0)).toBe(MIN_COLUMNS)
    expect(clampColumns(-5)).toBe(MIN_COLUMNS)
    expect(clampColumns(99)).toBe(MAX_COLUMNS)
    expect(clampColumns(7)).toBe(7)
  })

  it('turns a decimal into a whole number and a non-number into the default', () => {
    expect(clampColumns(3.9)).toBe(3)
    expect(clampColumns(Number.NaN)).toBe(DEFAULT_COLUMNS)
    expect(clampColumns(Number.POSITIVE_INFINITY)).toBe(MAX_COLUMNS)
  })
})

describe('settleColumns', () => {
  it('uses a finished number, kept inside the range', () => {
    expect(settleColumns('7', 4)).toBe(7)
    expect(settleColumns('25', 4)).toBe(MAX_COLUMNS)
    expect(settleColumns('0', 4)).toBe(MIN_COLUMNS)
    expect(settleColumns('3.7', 4)).toBe(3)
  })

  it('goes back to the current number when the box is empty or is not a number', () => {
    expect(settleColumns('', 9)).toBe(9)
    expect(settleColumns('   ', 9)).toBe(9)
    expect(settleColumns('abc', 9)).toBe(9)
    expect(settleColumns('-', 9)).toBe(9)
  })
})

describe('draft', () => {
  it('starts with the default number of blank columns', () => {
    const draft = initialDraft()
    expect(draft.count).toBe(DEFAULT_COLUMNS)
    expect(draft.tops).toEqual(Array(DEFAULT_COLUMNS).fill(''))
    expect(draft.bottoms).toEqual(Array(DEFAULT_COLUMNS).fill(''))
  })

  it('keeps the texts typed so far when columns are added or removed', () => {
    let draft = setText(setText(initialDraft(), 'top', 0, 'Kim'), 'bottom', 1, 'win')
    draft = resizeDraft(draft, 6)
    expect(draft.count).toBe(6)
    expect(draft.tops).toHaveLength(6)
    expect(draft.tops[0]).toBe('Kim')
    expect(draft.bottoms[1]).toBe('win')
    expect(draft.tops[5]).toBe('')
    draft = resizeDraft(draft, 2)
    expect(draft.tops).toEqual(['Kim', ''])
    expect(draft.bottoms).toEqual(['', 'win'])
  })

  it('clamps the count it is asked for', () => {
    expect(resizeDraft(initialDraft(), 100).count).toBe(MAX_COLUMNS)
    expect(resizeDraft(initialDraft(), 0).count).toBe(MIN_COLUMNS)
  })

  it('changes one text without touching the others, or the draft it was given', () => {
    const before = initialDraft()
    const after = setText(before, 'bottom', 2, 'X')
    expect(after.bottoms[2]).toBe('X')
    expect(after.bottoms.filter((text) => text !== '')).toHaveLength(1)
    expect(before.bottoms[2]).toBe('')
  })

  it('shuffles the texts of one side only, and keeps every text', () => {
    let draft = resizeDraft(initialDraft(), 8)
    for (let i = 0; i < 8; i++) {
      draft = setText(setText(draft, 'top', i, `t${i}`), 'bottom', i, `b${i}`)
    }
    const shuffled = shuffleSide(draft, 'bottom', seeded(1))
    expect(shuffled.tops).toEqual(draft.tops)
    expect([...shuffled.bottoms].sort()).toEqual([...draft.bottoms].sort())
    expect(shuffled.bottoms).not.toEqual(draft.bottoms)
  })
})

describe('parseDraft', () => {
  it('reads back a saved draft', () => {
    const draft = setText(resizeDraft(initialDraft(), 3), 'top', 1, 'Lee')
    expect(parseDraft(JSON.parse(JSON.stringify(draft)))).toEqual(draft)
  })

  it('fits the texts to the count when they do not agree', () => {
    const parsed = parseDraft({ count: 3, tops: ['a'], bottoms: ['x', 'y', 'z', 'w'] })
    expect(parsed).toEqual({ count: 3, tops: ['a', '', ''], bottoms: ['x', 'y', 'z'] })
  })

  it('refuses anything that is not a draft, and clamps a count that is out of range', () => {
    expect(parseDraft(null)).toBeNull()
    expect(parseDraft('x')).toBeNull()
    expect(parseDraft({ count: 'many', tops: [], bottoms: [] })).toBeNull()
    expect(parseDraft({ count: 3, tops: 'abc', bottoms: [] })).toBeNull()
    expect(parseDraft({ count: 3, tops: [1, 2, 3], bottoms: ['a', 'b', 'c'] })).toBeNull()
    expect(parseDraft({ count: 500, tops: [], bottoms: [] })?.count).toBe(MAX_COLUMNS)
  })
})

describe('rowCountFor', () => {
  it('gives more rows to more columns and to a higher density, and never fewer than 8', () => {
    for (const density of DENSITIES) {
      for (let columns = MIN_COLUMNS; columns <= MAX_COLUMNS; columns++) {
        expect(rowCountFor(columns, density)).toBeGreaterThanOrEqual(8)
        if (columns > MIN_COLUMNS) {
          expect(rowCountFor(columns, density)).toBeGreaterThanOrEqual(rowCountFor(columns - 1, density))
        }
      }
    }
    expect(rowCountFor(10, 'low')).toBeLessThan(rowCountFor(10, 'normal'))
    expect(rowCountFor(10, 'normal')).toBeLessThan(rowCountFor(10, 'high'))
  })
})

describe('generateRungs', () => {
  it('has one row per level and one place between each pair of neighbouring columns', () => {
    const rungs = generateRungs(5, 'normal', seeded(3))
    expect(rungs).toHaveLength(rowCountFor(5, 'normal'))
    for (const row of rungs) expect(row).toHaveLength(4)
  })

  it('never puts two rungs side by side in the same row, which would make the path ambiguous', () => {
    for (const density of DENSITIES) {
      for (let columns = MIN_COLUMNS; columns <= MAX_COLUMNS; columns++) {
        for (let seed = 1; seed <= 20; seed++) {
          const rungs = generateRungs(columns, density, seeded(seed * 97 + columns))
          for (const row of rungs) {
            for (let gap = 1; gap < row.length; gap++) {
              expect(row[gap] && row[gap - 1]).toBe(false)
            }
          }
        }
      }
    }
  })

  it('joins every pair of neighbouring columns with at least one rung, so no column just runs straight down', () => {
    for (const density of DENSITIES) {
      for (let columns = MIN_COLUMNS; columns <= MAX_COLUMNS; columns++) {
        for (let seed = 1; seed <= 20; seed++) {
          const rungs = generateRungs(columns, density, seeded(seed * 131 + columns))
          for (let gap = 0; gap < columns - 1; gap++) {
            expect(rungs.some((row) => row[gap])).toBe(true)
          }
        }
      }
    }
  })

  it('draws more rungs at a higher density', () => {
    const count = (density: Density) =>
      generateRungs(10, density, seeded(5)).flat().filter(Boolean).length
    expect(count('low')).toBeLessThan(count('normal'))
    expect(count('normal')).toBeLessThan(count('high'))
  })

  it('gives the same ladder for the same random numbers, and different ladders for different ones', () => {
    expect(generateRungs(6, 'normal', seeded(9))).toEqual(generateRungs(6, 'normal', seeded(9)))
    expect(generateRungs(6, 'normal', seeded(9))).not.toEqual(generateRungs(6, 'normal', seeded(10)))
  })
})

describe('following a path', () => {
  // 3 columns, 3 rows: row 0 joins columns 0-1, row 1 joins columns 1-2, row 2 has no rung.
  const rungs: Rungs = [
    [true, false],
    [false, true],
    [false, false],
  ]

  it('goes down, crossing a rung whenever there is one beside it', () => {
    expect(endColumn(rungs, 0)).toBe(2) // 0 -> 1 -> 2
    expect(endColumn(rungs, 1)).toBe(0) // 1 -> 0 (row 0), then nothing at column 0
    expect(endColumn(rungs, 2)).toBe(1) // 2 -> 1 (row 1)
  })

  it('lists the corners of the path, from the top box to the bottom box', () => {
    expect(pathPoints(rungs, 0)).toEqual([
      { column: 0, level: 0 },
      { column: 0, level: 1 },
      { column: 1, level: 1 },
      { column: 1, level: 2 },
      { column: 2, level: 2 },
      { column: 2, level: 4 },
    ])
  })

  it('walks back up from a bottom box to the top box that leads there', () => {
    for (let start = 0; start < 3; start++) {
      expect(startColumn(rungs, endColumn(rungs, start))).toBe(start)
    }
  })

  it('sends every top box to a different bottom box, and back, on any ladder', () => {
    for (const density of DENSITIES) {
      for (let columns = MIN_COLUMNS; columns <= MAX_COLUMNS; columns++) {
        for (let seed = 1; seed <= 10; seed++) {
          const ladder = generateRungs(columns, density, seeded(seed * 17 + columns))
          const ends = Array.from({ length: columns }, (_, start) => endColumn(ladder, start))
          expect(new Set(ends).size).toBe(columns)
          for (let start = 0; start < columns; start++) {
            expect(startColumn(ladder, ends[start])).toBe(start)
            const points = pathPoints(ladder, start)
            expect(points[0]).toEqual({ column: start, level: 0 })
            expect(points[points.length - 1]).toEqual({ column: ends[start], level: ladder.length + 1 })
          }
        }
      }
    }
  })
})

describe('partialPath', () => {
  const points = [
    { column: 0, level: 0 },
    { column: 0, level: 2 },
    { column: 1, level: 2 },
    { column: 1, level: 4 },
  ]

  it('is just the start at 0 and the whole path at 1', () => {
    expect(partialPath(points, 0, 1, 1)).toEqual([{ column: 0, level: 0 }])
    expect(partialPath(points, 1, 1, 1)).toEqual(points)
  })

  it('stops part of the way along a segment, measuring lengths in pixels', () => {
    // lengths with 1px per column and 1px per level: 2 down, 1 across, 2 down = 5; half of 5 is 2.5
    const half = partialPath(points, 0.5, 1, 1)
    expect(half).toHaveLength(3)
    expect(half[2].level).toBe(2)
    expect(half[2].column).toBeCloseTo(0.5)
    // a wide column makes the sideways step a bigger part of the walk
    const wide = partialPath(points, 0.5, 100, 1)
    expect(wide[wide.length - 1].level).toBe(2)
    expect(wide[wide.length - 1].column).toBeCloseTo(0.5, 1)
  })

  it('only grows as the fraction grows', () => {
    let previous = 0
    for (let step = 0; step <= 20; step++) {
      const partial = partialPath(points, step / 20, 60, 20)
      const last = partial[partial.length - 1]
      const reached = last.level * 20 + last.column * 60
      expect(reached).toBeGreaterThanOrEqual(previous)
      previous = reached
    }
  })

  it('copes with a path of one point', () => {
    expect(partialPath([{ column: 0, level: 0 }], 0.5, 1, 1)).toEqual([{ column: 0, level: 0 }])
  })
})

describe('labels', () => {
  it('names a blank top box by its number, and a blank bottom box with a dash', () => {
    expect(topLabel('', 0)).toBe('1번')
    expect(topLabel('   ', 4)).toBe('5번')
    expect(topLabel(' Kim ', 0)).toBe('Kim')
    expect(bottomLabel('')).toBe('-')
    expect(bottomLabel(' win ')).toBe('win')
  })
})

describe('resultColors', () => {
  it('gives the same color to the same text, and different colors to different texts', () => {
    const colors = resultColors(['O', 'X', 'O', 'X'])
    expect(colors[0]).toBe(colors[2])
    expect(colors[1]).toBe(colors[3])
    expect(colors[0]).not.toBe(colors[1])
  })

  it('ignores spaces around a text, but not its case', () => {
    const colors = resultColors(['win', ' win ', 'Win'])
    expect(colors[0]).toBe(colors[1])
    expect(colors[0]).not.toBe(colors[2])
  })

  it('gives all blank boxes one gray color of their own', () => {
    const colors = resultColors(['', 'A', '  ', 'B'])
    expect(colors[0]).toBe(colors[2])
    expect(colors[0]).not.toBe(colors[1])
    expect(colors[0]).not.toBe(colors[3])
    expect(colors[0]).toMatch(/0%/) // no saturation: gray
  })

  it('gives every text of a full ladder its own color', () => {
    const texts = Array.from({ length: MAX_COLUMNS }, (_, i) => `result ${i}`)
    expect(new Set(resultColors(texts)).size).toBe(MAX_COLUMNS)
  })
})

describe('groupColor', () => {
  const hueOf = (color: string) => Number(/hsl\((\d+)/.exec(color)![1])

  it('never uses a color near red, which is kept for the highlighted path', () => {
    for (let group = 0; group < 40; group++) {
      const hue = hueOf(groupColor(group))
      const distance = Math.min(Math.abs(hue - HIGHLIGHT_HUE), 360 - Math.abs(hue - HIGHLIGHT_HUE))
      expect(distance).toBeGreaterThanOrEqual(30)
    }
  })

  it('makes the first five colors, the ones most games use, clearly different hues', () => {
    const hues = Array.from({ length: 5 }, (_, group) => hueOf(groupColor(group)))
    for (let i = 0; i < hues.length; i++) {
      for (let j = i + 1; j < hues.length; j++) {
        const gap = Math.abs(hues[i] - hues[j])
        expect(Math.min(gap, 360 - gap)).toBeGreaterThanOrEqual(60)
      }
    }
  })

  it('keeps the first 20 groups apart from each other', () => {
    expect(new Set(Array.from({ length: 20 }, (_, group) => groupColor(group))).size).toBe(20)
  })
})

describe('cryptoRng', () => {
  it('gives numbers from 0 up to, but not including, 1, and not always the same one', () => {
    const next = cryptoRng()
    const values = Array.from({ length: 200 }, () => next())
    for (const value of values) {
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
    expect(new Set(values).size).toBeGreaterThan(150)
  })
})
