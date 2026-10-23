import { describe, it, expect } from 'vitest'
import { MAX_NICKNAME } from '../tools/yacht/nickname'
import { MAX_PASSWORD, MAX_TEXT, MIN_PASSWORD } from './rules'
import schema from '../../server/scores/guestbook-schema.sql?raw'
import repository from '../../server/scores/src/main/java/dev/shinheeyoun/scores/OracleGuestbookRepository.java?raw'
import service from '../../server/scores/src/main/java/dev/shinheeyoun/scores/GuestbookService.java?raw'

// The limits are written in the database script, in the Java service and in rules.ts. If they drift apart, these fail.
describe('guestbook limits agree between the site, the server and the table', () => {
  it('has columns as long as the site allows', () => {
    expect(schema).toContain(`AUTHOR         VARCHAR2(${MAX_NICKNAME} CHAR)`)
    expect(schema).toContain(`BODY           VARCHAR2(${MAX_TEXT} CHAR)`)
    expect(schema).toContain(`CHECK (LENGTH(BODY) BETWEEN 1 AND ${MAX_TEXT})`)
  })

  it('is checked by the server with the same numbers', () => {
    expect(service).toContain(`MAX_TEXT = ${MAX_TEXT};`)
    expect(service).toContain(`MIN_PASSWORD = ${MIN_PASSWORD};`)
    expect(service).toContain(`MAX_PASSWORD = ${MAX_PASSWORD};`)
  })

  it('does not keep the password itself, only a hash, and keeps what the writer asked to be recorded', () => {
    expect(schema).toContain('PASSWORD_HASH')
    expect(schema).not.toMatch(/\bPASSWORD\s+VARCHAR/i)
    expect(schema).toContain('CLIENT_IP')
    expect(schema).toContain('CREATED_AT')
    expect(schema).toContain('ON DELETE CASCADE')
  })
})

describe('guestbook SQL cannot be injected into', () => {
  it('passes every statement as a constant, never built from text', () => {
    const calls = [...repository.matchAll(/prepareStatement\(([^)]*)\)/g)].map((match) => match[1].trim())
    expect(calls.length).toBeGreaterThanOrEqual(6)
    for (const argument of calls) expect(argument).toMatch(/^[A-Z_]+(,|$)/)
  })

  it('never joins a variable into the text of a statement', () => {
    // a string literal followed by + and anything but another string literal
    expect(repository).not.toMatch(/"\s*\+\s*[A-Za-z_(]/)
    expect(repository).not.toMatch(/[A-Za-z_)]\s*\+\s*"/)
    expect(repository).not.toContain('String.format')
    expect(repository).not.toContain('createStatement')
  })

  it('has a bind variable for every value the statements take', () => {
    const insert = repository.match(/INSERT =\s*"([^;]*?)";/s)?.[1] ?? ''
    expect(insert.match(/\?/g)).toHaveLength(7)
    expect(repository).toContain('g.ID < ?')
    expect(repository).toContain('FETCH FIRST ? ROWS ONLY')
  })
})
