import { describe, it, expect } from 'vitest'
import { CATEGORIES, MAX_TOTAL, MAX_UPPER_SUM, UPPER_BONUS } from './controller'
import { MAX_NICKNAME } from './nickname'
import schema from '../../../server/scores/schema.sql?raw'
import readme from '../../../server/scores/README.md?raw'
import queries from '../../../server/scores/queries.sql?raw'

// The database script and its notes repeat the limits of the game. If the game changes and they do not, these fail.
describe('server/scores', () => {
  it('limits the table to the totals the game can really give', () => {
    expect(schema).toContain(`CHECK (TOTAL BETWEEN 0 AND ${MAX_TOTAL})`)
    expect(schema).toContain(`CHECK (UPPER_SUM BETWEEN 0 AND ${MAX_UPPER_SUM})`)
    expect(schema).toContain(`CHECK (BONUS IN (0, ${UPPER_BONUS}))`)
  })

  it('names every category of the game in the notes for the server', () => {
    for (const category of CATEGORIES) expect(readme).toContain(category)
  })

  it('has a nickname column as long as the longest nickname the site accepts', () => {
    expect(schema).toContain(`NICKNAME    VARCHAR2(${MAX_NICKNAME} CHAR)`)
    expect(queries).toContain(':nickname')
  })

  it('uses bind variables for every value in the statements', () => {
    expect(queries).toContain(':id')
    expect(queries).toContain(':total')
    expect(queries).toContain(':limit')
    // no value is joined into the text with a string
    expect(queries).not.toMatch(/\|\|\s*'/)
  })

  it('keeps database passwords out of the repository: only placeholders', () => {
    expect(readme).toContain('<PASSWORD>')
    expect(schema + readme + queries).not.toMatch(/password\s*=\s*"(?!<PASSWORD>)[^"]+"/i)
  })
})
