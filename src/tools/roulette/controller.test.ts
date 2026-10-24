import { describe, it, expect } from 'vitest'
import {
  DEFAULT_ROWS,
  MAX_ITEMS,
  MAX_NAME,
  MIN_ITEMS,
  addRow,
  canSpin,
  entriesOf,
  labelFor,
  labelSize,
  landingRotation,
  normalizeAngle,
  parseRows,
  pickWinner,
  removeRow,
  setRow,
  sliceAtPointer,
  sliceColor,
  slicePath,
} from './controller'

// A random source that gives the numbers in turn, over and over.
const sequence = (...values: number[]) => {
  let i = 0
  return () => values[i++ % values.length]
}

describe('entriesOf', () => {
  it('keeps the names in order with the row each was typed in, and drops empty rows', () => {
    expect(entriesOf(['a', '', '  b  ', '   ', 'c'])).toEqual([
      { row: 0, name: 'a' },
      { row: 2, name: 'b' },
      { row: 4, name: 'c' },
    ])
  })

  it('cuts a long name to MAX_NAME characters, counting an emoji once', () => {
    expect(entriesOf(['x'.repeat(50)])[0].name).toHaveLength(MAX_NAME)
    expect([...entriesOf(['😀'.repeat(50)])[0].name]).toHaveLength(MAX_NAME)
  })

  it('has a default list that can be spun at once', () => {
    expect(canSpin(DEFAULT_ROWS)).toBe(true)
  })
})

describe('canSpin', () => {
  it('needs at least two names', () => {
    expect(canSpin(['a', ''])).toBe(false)
    expect(canSpin(['a', ' '])).toBe(false)
    expect(canSpin(['a', 'b'])).toBe(true)
    expect(canSpin([])).toBe(false)
  })
})

describe('rows', () => {
  it('adds an empty row after a given one, or at the end', () => {
    expect(addRow(['a', 'b'], 0)).toEqual(['a', '', 'b'])
    expect(addRow(['a', 'b'])).toEqual(['a', 'b', ''])
    expect(addRow(['a', 'b'], 9)).toEqual(['a', 'b', ''])
    expect(addRow(['a', 'b'], -5)).toEqual(['', 'a', 'b'])
  })

  it('stops adding at the most rows allowed', () => {
    const full = Array.from({ length: MAX_ITEMS }, (_, i) => `n${i}`)
    expect(addRow(full)).toBe(full)
  })

  it('removes a row, but only empties it when only the least rows are left', () => {
    expect(removeRow(['a', 'b', 'c'], 1)).toEqual(['a', 'c'])
    expect(removeRow(['a', 'b'], 0)).toEqual(['', 'b'])
    expect(removeRow(['a', 'b'], 0)).toHaveLength(MIN_ITEMS)
    expect(removeRow(['a', 'b', 'c'], 7)).toEqual(['a', 'b', 'c'])
  })

  it('sets the text of one row', () => {
    expect(setRow(['a', 'b'], 1, 'z')).toEqual(['a', 'z'])
  })
})

describe('parseRows', () => {
  it('reads a stored list of texts', () => {
    expect(parseRows(['a', 'b', 'c'])).toEqual(['a', 'b', 'c'])
  })

  it('refuses anything that is not a list of texts', () => {
    for (const bad of [null, undefined, 'a', 5, {}, [1, 2], ['a', null]]) expect(parseRows(bad)).toBeNull()
  })

  it('fixes a list that is too short or too long', () => {
    expect(parseRows(['a'])).toEqual(['a', ''])
    expect(parseRows([])).toEqual(['', ''])
    expect(parseRows(Array(50).fill('x'))).toHaveLength(MAX_ITEMS)
  })
})

describe('pickWinner', () => {
  it('stays inside the slices, even for the largest number a source can give', () => {
    expect(pickWinner(5, () => 0)).toBe(0)
    expect(pickWinner(5, () => 0.999999999)).toBe(4)
    expect(pickWinner(5, () => 1)).toBe(4)
  })

  it('gives every slice the same chance', () => {
    const counts = Array(5).fill(0)
    for (let i = 0; i < 5000; i++) counts[pickWinner(5, () => Math.random())]++
    for (const count of counts) expect(count).toBeGreaterThan(800) // 1000 expected; far from this would be a bias
  })
})

describe('sliceAtPointer', () => {
  it('starts with slice 0 under the pointer', () => {
    expect(sliceAtPointer(0, 4)).toBe(0)
  })

  it('moves to the last slice when the wheel turns a little clockwise, and backwards after that', () => {
    // turning clockwise brings what was counter-clockwise of the pointer under it: the slice before
    expect(sliceAtPointer(10, 4)).toBe(3)
    expect(sliceAtPointer(100, 4)).toBe(2)
    expect(sliceAtPointer(190, 4)).toBe(1)
    expect(sliceAtPointer(280, 4)).toBe(0)
    expect(sliceAtPointer(360, 4)).toBe(0)
  })

  it('does not depend on how many whole turns were made, or on the direction of the number', () => {
    expect(sliceAtPointer(100 + 360 * 7, 4)).toBe(sliceAtPointer(100, 4))
    expect(sliceAtPointer(-80, 4)).toBe(sliceAtPointer(280, 4))
  })
})

describe('landingRotation', () => {
  it('puts the pointer on the winning slice, for every slice count, every winner and a spread of random numbers', () => {
    for (let count = 2; count <= MAX_ITEMS; count++) {
      for (let winner = 0; winner < count; winner++) {
        for (const r of [0, 0.0001, 0.25, 0.5, 0.75, 0.9999, 0.999999999]) {
          for (const current of [0, 33.3, 359.9, 720, 1234.5678]) {
            const rotation = landingRotation(current, count, winner, sequence(r, 0.5))
            expect(sliceAtPointer(rotation, count), `count ${count}, winner ${winner}, r ${r}, from ${current}`).toBe(winner)
          }
        }
      }
    }
  })

  it('never stops on the line between two slices', () => {
    const size = 360 / 6
    for (const r of [0, 0.999999999]) {
      const rotation = landingRotation(0, 6, 2, sequence(r, 0))
      const inside = normalizeAngle(-rotation) - 2 * size
      expect(inside).toBeGreaterThan(size * 0.05)
      expect(inside).toBeLessThan(size * 0.95)
    }
  })

  it('always turns clockwise, at least four whole turns and not more than seven', () => {
    for (const r of [0, 0.3, 0.6, 0.999999999]) {
      for (const current of [0, 100, 359, 5000]) {
        const turned = landingRotation(current, 7, 3, sequence(0.5, r)) - current
        expect(turned).toBeGreaterThanOrEqual(4 * 360)
        expect(turned).toBeLessThan(7 * 360)
      }
    }
  })

  it('does not always stop in the middle of the slice', () => {
    const at = (r: number) => normalizeAngle(-landingRotation(0, 4, 1, sequence(r, 0)))
    expect(at(0.1)).not.toBeCloseTo(at(0.9), 0)
  })
})

describe('drawing', () => {
  it('draws a slice from the centre out to two points on the rim', () => {
    expect(slicePath(100, 100, 50, 0, 90)).toBe('M 100 100 L 100 50 A 50 50 0 0 1 150 100 Z')
  })

  it('marks an arc of more than half a circle as a large arc', () => {
    expect(slicePath(100, 100, 50, 0, 270)).toContain('A 50 50 0 1 1')
    expect(slicePath(100, 100, 50, 0, 180)).toContain('A 50 50 0 0 1')
  })

  it('gives neighbouring slices different colours', () => {
    for (let i = 0; i < 40; i++) expect(sliceColor(i)).not.toBe(sliceColor(i + 1))
    expect(sliceColor(0)).toMatch(/^hsl\(\d+ \d+% \d+%\)$/)
  })

  it('shortens a name that does not fit its slice, with an ellipsis', () => {
    expect(labelFor('짜장면', 4)).toBe('짜장면')
    expect(labelFor('a'.repeat(30), 4)).toBe(`${'a'.repeat(11)}…`)
    expect([...labelFor('a'.repeat(30), 20)]).toHaveLength(5)
  })

  it('writes smaller letters when there are more slices', () => {
    expect(labelSize(4)).toBeGreaterThan(labelSize(10))
    expect(labelSize(10)).toBeGreaterThan(labelSize(20))
  })
})
