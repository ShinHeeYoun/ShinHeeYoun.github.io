import { describe, it, expect } from 'vitest'
import { verifyRecord, type ScoreRecord } from './controller'
import { buildFixtures } from '../../../server/scores/fixtures/build'
import stored from '../../../server/scores/fixtures/records.json'

// server/scores/fixtures/records.json holds finished games, some real and some tampered with, with the answer the site
// gives. The score server's tests read the same file, so the two cannot drift apart.
describe('the cases shared with the score server', () => {
  it('are what the generator makes now (run: npx vite-node server/scores/fixtures/generate.ts)', () => {
    expect(stored).toEqual(buildFixtures())
  })

  it('each have the answer that verifyRecord gives', () => {
    for (const { name, valid, record } of stored) {
      expect([name, verifyRecord(record as unknown as ScoreRecord)]).toEqual([name, valid])
    }
  })

  it('cover both real games and tampered ones, each with a different name', () => {
    expect(stored.filter((fixture) => fixture.valid).length).toBeGreaterThanOrEqual(30)
    expect(stored.filter((fixture) => !fixture.valid).length).toBeGreaterThanOrEqual(40)
    expect(new Set(stored.map((fixture) => fixture.name)).size).toBe(stored.length)
  })

  it('include the edges of the rules: the bonus at 63 and 62, and the best possible game', () => {
    const byName = (name: string) => stored.find((fixture) => fixture.name === name)
    expect(byName('upper section exactly 63: bonus given')?.valid).toBe(true)
    expect(byName('upper section 62: no bonus')?.valid).toBe(true)
    expect(byName('bonus claimed at 62')?.valid).toBe(false)
    expect(byName('bonus denied at 63')?.valid).toBe(false)
    const perfect = byName('perfect game, 323 points')
    expect(perfect?.valid).toBe(true)
    expect((perfect?.record as ScoreRecord).total).toBe(323)
  })

  it('are plain ASCII, so that no tool can quietly change an invisible character', () => {
    expect(JSON.stringify(stored)).toMatch(/^[\x00-\x7f]*$/)
  })
})
