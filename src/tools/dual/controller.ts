import type { Rng } from '../../lib/random'

// A sample table written as an Oracle query on DUAL, for testing. The rules live here, apart from the screen:
// what a typed value becomes in SQL, what a field name becomes, how the query is put together, what dummy data is.

export type Mode = 'loop' | 'plain'

export const MAX_COLUMNS = 20
export const MAX_ROWS = 100
export const MAX_REPEAT = 1_000_000
export const DEFAULT_COLUMNS = 3
export const DEFAULT_ROWS = 3
export const DEFAULT_REPEAT = 15
export const DEFAULT_STRING_LENGTH = 6
export const DEFAULT_NUMBER_DIGITS = 4
export const MAX_STRING_LENGTH = 30
export const MAX_NUMBER_DIGITS = 9

export type Config = {
  mode: Mode
  columns: number
  rows: number // used by the plain query; the loop query has one row
  repeat: number // used by the loop query
  names: string[] // the field names; one may be missing or empty, and then the default name is used
  cells: string[][] // cells[row][column]: what the user typed; a missing cell is empty
}

export const defaultName = (column: number) => `COL${column + 1}`

export function clamp(value: number, min: number, max: number, fallback = min): number {
  if (!Number.isFinite(value)) return fallback
  return Math.min(max, Math.max(min, Math.trunc(value)))
}

export const cellAt = (cells: string[][], row: number, column: number): string => cells[row]?.[column] ?? ''

// ---- field names

// The words Oracle does not allow as a name unless they are in double quotes (V$RESERVED_WORDS).
const RESERVED = new Set(
  (
    'ACCESS ADD ALL ALTER AND ANY AS ASC AUDIT BETWEEN BY CHAR CHECK CLUSTER COLUMN COLUMN_VALUE COMMENT COMPRESS CONNECT ' +
    'CREATE CURRENT DATE DECIMAL DEFAULT DELETE DESC DISTINCT DROP ELSE EXCLUSIVE EXISTS FILE FLOAT FOR FROM GRANT GROUP ' +
    'HAVING IDENTIFIED IMMEDIATE IN INCREMENT INDEX INITIAL INSERT INTEGER INTERSECT INTO IS LEVEL LIKE LOCK LONG ' +
    'MAXEXTENTS MINUS MLSLABEL MODE MODIFY NESTED_TABLE_ID NOAUDIT NOCOMPRESS NOT NOWAIT NULL NUMBER OF OFFLINE ON ONLINE ' +
    'OPTION OR ORDER PCTFREE PRIOR PUBLIC RAW RENAME RESOURCE REVOKE ROW ROWID ROWNUM ROWS SELECT SESSION SET SHARE SIZE ' +
    'SMALLINT START SUCCESSFUL SYNONYM SYSDATE TABLE THEN TO TRIGGER UID UNION UNIQUE UPDATE USER VALIDATE VALUES VARCHAR ' +
    'VARCHAR2 VIEW WHENEVER WHERE WITH'
  ).split(' '),
)

const PLAIN_NAME = /^[A-Za-z][A-Za-z0-9_$#]*$/

// The field name as it is written after AS. An empty name becomes COL1, COL2...; a name Oracle would not accept as
// it is (a reserved word, spaces, Korean, a leading digit...) goes in double quotes.
export function fieldName(raw: string | undefined, column: number): string {
  const name = (raw ?? '').trim().replace(/"/g, '')
  if (name === '') return defaultName(column)
  if (PLAIN_NAME.test(name)) return RESERVED.has(name.toUpperCase()) ? `"${name.toUpperCase()}"` : name
  return `"${name}"`
}

// ---- values

// A whole or decimal number as people write it. "007" and "1e5" are not: they stay text.
const NUMBER = /^-?(0|[1-9]\d*)(\.\d+)?$/

export const isNumber = (text: string) => NUMBER.test(text.trim())

// A value that starts with "=" is SQL, put in as it is (=LEVEL, =SYSDATE, =TO_DATE('2024-01-01','YYYY-MM-DD')).
export const isExpression = (text: string) => text.trimStart().startsWith('=')

export type Kind = 'number' | 'string'

// What a column holds. Every row of a UNION ALL must have the same type in the same column, so the column is
// numeric only when all its filled-in cells are numbers; otherwise all of them are written as text.
export function columnKind(config: Pick<Config, 'cells'>, rowCount: number, column: number): Kind {
  let sawNumber = false
  for (let row = 0; row < rowCount; row += 1) {
    const text = cellAt(config.cells, row, column)
    if (text.trim() === '' || isExpression(text)) continue
    if (!isNumber(text)) return 'string'
    sawNumber = true
  }
  return sawNumber ? 'number' : 'string'
}

// One value as SQL: NULL for an empty cell, the SQL itself for "=...", a number or a quoted text otherwise.
export function literal(text: string, kind: Kind): string {
  if (isExpression(text)) {
    const sql = text.trimStart().slice(1).trim()
    return sql === '' ? 'NULL' : sql
  }
  if (text.trim() === '') return 'NULL'
  if (kind === 'number') return text.trim()
  return `'${text.replace(/'/g, "''")}'`
}

// ---- the query

export function rowCountOf(config: Config): number {
  return config.mode === 'loop' ? 1 : clamp(config.rows, 1, MAX_ROWS)
}

export const columnCountOf = (config: Config) => clamp(config.columns, 1, MAX_COLUMNS)
export const repeatOf = (config: Config) => clamp(config.repeat, 1, MAX_REPEAT, 1)

function selectRow(config: Config, row: number, withNames: boolean): string {
  const columns = columnCountOf(config)
  const rows = rowCountOf(config)
  const parts: string[] = []
  for (let column = 0; column < columns; column += 1) {
    const value = literal(cellAt(config.cells, row, column), columnKind(config, rows, column))
    parts.push(withNames ? `${value} AS ${fieldName(config.names[column], column)}` : value)
  }
  return `SELECT ${parts.join(', ')}\n  FROM DUAL`
}

// The query. No semicolon at the end, so that it can be pasted into a larger statement.
// Plain: every row is its own SELECT ... FROM DUAL, joined with UNION ALL; the first row names the fields.
// Loop: the one row repeated with CONNECT BY LEVEL.
export function buildSql(config: Config): string {
  if (config.mode === 'loop') return `${selectRow(config, 0, true)}\nCONNECT BY LEVEL <= ${repeatOf(config)}`
  const rows = rowCountOf(config)
  const selects: string[] = []
  for (let row = 0; row < rows; row += 1) selects.push(selectRow(config, row, row === 0))
  return selects.join('\nUNION ALL\n')
}

// Things the user should know about the query. Not errors: the query is still made.
export function warnings(config: Config): string[] {
  const found: string[] = []
  const columns = columnCountOf(config)
  const rows = rowCountOf(config)

  const seen = new Map<string, number>()
  for (let column = 0; column < columns; column += 1) {
    const key = fieldName(config.names[column], column).replace(/"/g, '').toUpperCase()
    seen.set(key, (seen.get(key) ?? 0) + 1)
  }
  const repeated = [...seen].filter(([, count]) => count > 1).map(([name]) => name)
  if (repeated.length > 0) found.push(`필드명이 겹칩니다: ${repeated.join(', ')}. 다른 쿼리에서 이 결과를 쓰면 오류가 날 수 있어요.`)

  let ampersand = false
  for (let row = 0; row < rows && !ampersand; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const text = cellAt(config.cells, row, column)
      if (!isExpression(text) && text.includes('&')) ampersand = true
    }
  }
  if (ampersand) found.push("값에 &가 있습니다. SQL Developer·SQL*Plus에서는 변수 입력창이 뜰 수 있어요. 먼저 SET DEFINE OFF 를 실행하세요.")
  return found
}

// ---- dummy data

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function randomString(length: number, rng: Rng): string {
  let text = ''
  for (let i = 0; i < clamp(length, 1, MAX_STRING_LENGTH); i += 1) text += LETTERS[Math.floor(rng() * LETTERS.length)]
  return text
}

// A whole number with exactly `digits` digits (no leading zero); one digit means 0 to 9.
export function randomNumber(digits: number, rng: Rng): string {
  const n = clamp(digits, 1, MAX_NUMBER_DIGITS)
  const low = n === 1 ? 0 : 10 ** (n - 1)
  const high = 10 ** n
  return String(low + Math.floor(rng() * (high - low)))
}

export type DummyKind = 'string' | 'number'

// The grid with every shown cell (the first `rows` rows and `columns` columns) replaced by dummy data. Cells outside
// the shown part are kept, so switching between the loop and the plain query does not lose the other rows.
export function withDummy(cells: string[][], rows: number, columns: number, kind: DummyKind, size: number, rng: Rng): string[][] {
  const next = cells.map((line) => line.slice())
  for (let row = 0; row < rows; row += 1) {
    while (next.length <= row) next.push([])
    for (let column = 0; column < columns; column += 1) {
      while (next[row].length <= column) next[row].push('')
      next[row][column] = kind === 'string' ? randomString(size, rng) : randomNumber(size, rng)
    }
  }
  return next
}

// A grid with one cell set, growing it if the cell lies outside.
export function withCell(cells: string[][], row: number, column: number, text: string): string[][] {
  const next = cells.map((line) => line.slice())
  while (next.length <= row) next.push([])
  const line = next[row]
  while (line.length <= column) line.push('')
  line[column] = text
  return next
}

export function withName(names: string[], column: number, text: string): string[] {
  const next = names.slice()
  while (next.length <= column) next.push('')
  next[column] = text
  return next
}
