import { describe, expect, it } from 'vitest'
import {
  MAX_COLUMNS,
  MAX_REPEAT,
  MAX_ROWS,
  buildSql,
  clamp,
  columnKind,
  fieldName,
  isNumber,
  literal,
  randomNumber,
  randomString,
  warnings,
  withCell,
  withDummy,
  withName,
  type Config,
} from './controller'

function config(partial: Partial<Config> = {}): Config {
  return { mode: 'plain', columns: 2, rows: 2, repeat: 15, names: ['ID', 'NAME'], cells: [['1', 'kim'], ['2', 'lee']], ...partial }
}

// A repeatable "random": 0.1, 0.2, ... 0.9, then round again.
function sequence() {
  let i = 0
  return () => {
    i = (i % 9) + 1
    return i / 10
  }
}

describe('fieldName', () => {
  it('uses a plain name as it is, and COL1, COL2... for an empty one', () => {
    expect(fieldName('EMP_NO', 0)).toBe('EMP_NO')
    expect(fieldName('name2', 1)).toBe('name2')
    expect(fieldName('', 0)).toBe('COL1')
    expect(fieldName('   ', 2)).toBe('COL3')
    expect(fieldName(undefined, 4)).toBe('COL5')
  })

  it('puts a name Oracle would refuse in double quotes', () => {
    expect(fieldName('date', 0)).toBe('"DATE"')
    expect(fieldName('Level', 0)).toBe('"LEVEL"')
    expect(fieldName('order', 0)).toBe('"ORDER"')
    expect(fieldName('user name', 0)).toBe('"user name"')
    expect(fieldName('이름', 0)).toBe('"이름"')
    expect(fieldName('1st', 0)).toBe('"1st"')
  })

  it('cannot be broken out of the quotes', () => {
    expect(fieldName('a"b', 0)).toBe('ab')
    expect(fieldName('a b"', 0)).toBe('"a b"')
  })
})

describe('values', () => {
  it('knows a number from a text', () => {
    for (const text of ['0', '12', '-7', '3.14', ' 42 ']) expect(isNumber(text)).toBe(true)
    for (const text of ['007', '1e5', '1,000', 'abc', '', '-', '1.', '.5', '0x1F']) expect(isNumber(text)).toBe(false)
  })

  it('writes a text in quotes, doubling the quotes inside it', () => {
    expect(literal('kim', 'string')).toBe("'kim'")
    expect(literal("it's", 'string')).toBe("'it''s'")
    expect(literal("'; DROP TABLE x; --", 'string')).toBe("'''; DROP TABLE x; --'")
  })

  it('writes a number without quotes, and an empty cell as NULL', () => {
    expect(literal('12', 'number')).toBe('12')
    expect(literal(' 12 ', 'number')).toBe('12')
    expect(literal('', 'number')).toBe('NULL')
    expect(literal('   ', 'string')).toBe('NULL')
  })

  it('puts SQL after "=" in as it is', () => {
    expect(literal('=LEVEL', 'number')).toBe('LEVEL')
    expect(literal("= TO_DATE('2024-01-01','YYYY-MM-DD')", 'string')).toBe("TO_DATE('2024-01-01','YYYY-MM-DD')")
    expect(literal('=', 'string')).toBe('NULL')
  })
})

describe('columnKind', () => {
  it('is a number only when every filled-in cell is a number', () => {
    expect(columnKind({ cells: [['1'], ['2.5'], ['-3']] }, 3, 0)).toBe('number')
    expect(columnKind({ cells: [['1'], ['x'], ['3']] }, 3, 0)).toBe('string')
    expect(columnKind({ cells: [['007'], ['1']] }, 2, 0)).toBe('string')
  })

  it('ignores empty cells and SQL, and is a string when nothing is filled in', () => {
    expect(columnKind({ cells: [['1'], [''], ['=LEVEL']] }, 3, 0)).toBe('number')
    expect(columnKind({ cells: [[''], ['']] }, 2, 0)).toBe('string')
    expect(columnKind({ cells: [] }, 3, 0)).toBe('string')
  })

  it('looks only at the rows that are used', () => {
    expect(columnKind({ cells: [['1'], ['x']] }, 1, 0)).toBe('number')
  })
})

describe('buildSql: plain', () => {
  it('joins every row with UNION ALL, naming the fields in the first row only', () => {
    expect(buildSql(config())).toBe(
      ['SELECT 1 AS ID, \'kim\' AS NAME', '  FROM DUAL', 'UNION ALL', "SELECT 2, 'lee'", '  FROM DUAL'].join('\n'),
    )
  })

  it('is a single SELECT for one row', () => {
    expect(buildSql(config({ rows: 1 }))).toBe("SELECT 1 AS ID, 'kim' AS NAME\n  FROM DUAL")
  })

  it('has no semicolon at the end', () => {
    for (const mode of ['plain', 'loop'] as const) expect(buildSql(config({ mode })).trimEnd().endsWith(';')).toBe(false)
  })

  it('writes a mixed column as text in every row, so that UNION ALL accepts it', () => {
    const sql = buildSql(config({ names: ['A'], columns: 1, cells: [['1'], ['x']] }))
    expect(sql).toContain("SELECT '1' AS A")
    expect(sql).toContain("SELECT 'x'")
  })

  it('uses COL1, COL2 for empty names and NULL for empty cells', () => {
    expect(buildSql(config({ names: [], cells: [], rows: 1 }))).toBe('SELECT NULL AS COL1, NULL AS COL2\n  FROM DUAL')
  })

  it('keeps the limits', () => {
    const many = buildSql(config({ rows: 500, columns: 99, cells: [] }))
    expect(many.split('UNION ALL').length).toBe(MAX_ROWS)
    expect(many.split('\n')[0].split(' AS ').length - 1).toBe(MAX_COLUMNS)
    expect(buildSql(config({ rows: 0, columns: 0 })).startsWith('SELECT ')).toBe(true)
  })

  it('does not use the cells below the rows that are used', () => {
    expect(buildSql(config({ rows: 1, cells: [['1', 'a'], ['2', 'b'], ['3', 'c']] }))).not.toContain('UNION')
  })
})

describe('buildSql: loop', () => {
  it('repeats the first row with CONNECT BY LEVEL <= the count', () => {
    expect(buildSql(config({ mode: 'loop', repeat: 15 }))).toBe(
      "SELECT 1 AS ID, 'kim' AS NAME\n  FROM DUAL\nCONNECT BY LEVEL <= 15",
    )
  })

  it('uses only the first row, whatever the rows setting is', () => {
    const sql = buildSql(config({ mode: 'loop', rows: 5, repeat: 3 }))
    expect(sql).not.toContain('UNION')
    expect(sql).not.toContain('lee')
  })

  it('keeps the count between 1 and the limit', () => {
    expect(buildSql(config({ mode: 'loop', repeat: 0 }))).toContain('LEVEL <= 1')
    expect(buildSql(config({ mode: 'loop', repeat: 5e9 }))).toContain(`LEVEL <= ${MAX_REPEAT}`)
    expect(buildSql(config({ mode: 'loop', repeat: Number.NaN }))).toContain('LEVEL <= 1')
  })

  it('can number the rows with =LEVEL', () => {
    const sql = buildSql(config({ mode: 'loop', repeat: 4, columns: 1, names: ['NO'], cells: [['=LEVEL']] }))
    expect(sql).toBe('SELECT LEVEL AS NO\n  FROM DUAL\nCONNECT BY LEVEL <= 4')
  })
})

describe('warnings', () => {
  it('has none for a clean table', () => {
    expect(warnings(config())).toEqual([])
  })

  it('names the fields that repeat, in any case and quoted or not', () => {
    const found = warnings(config({ names: ['id', 'ID'] }))
    expect(found).toHaveLength(1)
    expect(found[0]).toContain('ID')
    expect(warnings(config({ names: [], columns: 2 }))).toEqual([])
  })

  it('warns about & in a value, but not in SQL typed after "="', () => {
    expect(warnings(config({ cells: [['1', 'a&b']] }))[0]).toContain('SET DEFINE OFF')
    expect(warnings(config({ cells: [['1', "=CHR(38)||'x'"]] }))).toEqual([])
    expect(warnings(config({ rows: 1, cells: [['1', 'x'], ['2', 'a&b']] }))).toEqual([])
  })
})

describe('dummy data', () => {
  it('makes a text of the given length from letters', () => {
    expect(randomString(6, sequence())).toMatch(/^[A-Za-z]{6}$/)
    expect(randomString(0, sequence())).toHaveLength(1)
    expect(randomString(99, sequence())).toHaveLength(30)
  })

  it('makes a number with exactly that many digits', () => {
    for (let i = 0; i < 200; i += 1) expect(randomNumber(4, Math.random)).toMatch(/^[1-9]\d{3}$/)
    expect(randomNumber(1, () => 0)).toBe('0')
    expect(randomNumber(1, () => 0.999999)).toBe('9')
    expect(randomNumber(4, () => 0)).toBe('1000')
    expect(randomNumber(4, () => 0.9999999)).toBe('9999')
    expect(randomNumber(99, () => 0)).toBe('100000000')
  })

  it('fills every shown cell and keeps the others', () => {
    const grid = withDummy([['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']], 2, 2, 'number', 3, Math.random)
    for (const [row, column] of [[0, 0], [0, 1], [1, 0], [1, 1]]) expect(grid[row][column]).toMatch(/^[1-9]\d{2}$/)
    expect(grid[0][2]).toBe('c')
    expect(grid[1][2]).toBe('f')
    expect(grid[2]).toEqual(['g', 'h', 'i'])
  })

  it('fills a table that is still empty', () => {
    const grid = withDummy([], 2, 3, 'string', 4, Math.random)
    expect(grid).toHaveLength(2)
    for (const line of grid) {
      expect(line).toHaveLength(3)
      for (const cell of line) expect(cell).toMatch(/^[A-Za-z]{4}$/)
    }
  })

  it('makes a query out of what it filled', () => {
    const cells = withDummy([], 3, 2, 'number', 2, Math.random)
    const sql = buildSql(config({ cells, rows: 3 }))
    expect(sql.split('UNION ALL')).toHaveLength(3)
    expect(sql).not.toContain("'")
  })
})

describe('editing helpers', () => {
  it('sets a cell, growing the grid, without changing the old one', () => {
    const old = [['a']]
    const next = withCell(old, 2, 1, 'z')
    expect(next).toEqual([['a'], [], ['', 'z']])
    expect(old).toEqual([['a']])
  })

  it('sets a name, growing the list', () => {
    expect(withName(['A'], 2, 'C')).toEqual(['A', '', 'C'])
  })

  it('clamps numbers', () => {
    expect(clamp(5, 1, 3)).toBe(3)
    expect(clamp(-5, 1, 3)).toBe(1)
    expect(clamp(2.9, 1, 3)).toBe(2)
    expect(clamp(Number.NaN, 1, 3, 2)).toBe(2)
  })
})
