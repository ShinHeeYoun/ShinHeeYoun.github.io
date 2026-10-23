import { describe, it, expect } from 'vitest'
import { MAX_NICKNAME, normalizeNickname } from './nickname'
import cases from '../../../server/scores/fixtures/nicknames.json'

// The same file is read by the server's tests, so the site and the server agree on what a nickname may be.
describe('normalizeNickname: the cases shared with the server', () => {
  for (const { note, input, expected } of cases) {
    it(note, () => {
      expect(normalizeNickname(input)).toBe(expected)
    })
  }
})

describe('normalizeNickname', () => {
  it('allows at most 12 characters', () => {
    expect(MAX_NICKNAME).toBe(12)
  })

  it('is stable: tidying a tidy name changes nothing', () => {
    for (const { expected } of cases) {
      if (expected !== null) expect(normalizeNickname(expected)).toBe(expected)
    }
  })

  it('refuses what is not text', () => {
    expect(normalizeNickname(undefined as never)).toBeNull()
    expect(normalizeNickname(null as never)).toBeNull()
    expect(normalizeNickname(42 as never)).toBeNull()
  })
})
