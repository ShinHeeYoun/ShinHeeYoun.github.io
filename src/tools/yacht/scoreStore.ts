// Where the scores of finished games are kept. The game only knows the ScoreStore interface, so the place can change
// without touching the game:
// - LocalScoreStore keeps them in this browser (the player's own record on the screen);
// - RemoteScoreStore sends them to the score server and reads the ranking back (the shared ranking; see server/scores).

import { MAX_TOTAL, MAX_UPPER_SUM, UPPER_BONUS, verifyRecord, type ScoreRecord } from './controller'
import { normalizeNickname } from './nickname'

// A game without its turns: what the lists show. The nickname exists only for games kept on the score server.
export type ScoreSummary = Omit<ScoreRecord, 'turns'> & { nickname?: string }

// saved: this game is kept now. duplicate: the same game (same id) was already kept, and nothing changed.
export type SaveResult = 'saved' | 'duplicate'

export interface ScoreStore {
  // The nickname is for the ranking on the score server; a store that keeps scores only for the player ignores it.
  save(record: ScoreRecord, nickname?: string): Promise<SaveResult>
  top(limit: number): Promise<ScoreSummary[]>
  recent(limit: number): Promise<ScoreSummary[]>
}

export function toSummary(record: ScoreRecord): ScoreSummary {
  return {
    id: record.id,
    playedAt: record.playedAt,
    total: record.total,
    upperSum: record.upperSum,
    bonus: record.bonus,
  }
}

const isWhole = (value: unknown, min: number, max: number): value is number =>
  typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max

// Summaries from outside (the browser's storage, or the server): whatever is not a well-formed summary is dropped,
// and anything extra, such as the turns, is left out.
export function parseSummaries(raw: unknown): ScoreSummary[] {
  if (!Array.isArray(raw)) return []
  const summaries: ScoreSummary[] = []
  for (const item of raw) {
    if (typeof item !== 'object' || item === null) continue
    const { id, playedAt, total, upperSum, bonus, nickname } = item as Record<string, unknown>
    if (typeof id !== 'string' || id === '') continue
    if (typeof playedAt !== 'string' || Number.isNaN(Date.parse(playedAt))) continue
    if (!isWhole(total, 0, MAX_TOTAL) || !isWhole(upperSum, 0, MAX_UPPER_SUM)) continue
    if (bonus !== 0 && bonus !== UPPER_BONUS) continue
    const summary: ScoreSummary = { id, playedAt, total, upperSum, bonus }
    // A nickname must already be in its tidy form; anything else is left out, and the game is still listed.
    if (typeof nickname === 'string' && normalizeNickname(nickname) === nickname) summary.nickname = nickname
    summaries.push(summary)
  }
  return summaries
}

const newestFirst = (a: ScoreSummary, b: ScoreSummary) => Date.parse(b.playedAt) - Date.parse(a.playedAt)

// --- In this browser ---

export type StorageLike = Pick<Storage, 'getItem' | 'setItem'>
export const LOCAL_KEY = 'yacht_scores'
export const LOCAL_MAX = 100 // how many games are kept

function browserStorage(): StorageLike | null {
  try {
    return typeof localStorage === 'undefined' ? null : localStorage
  } catch {
    return null
  }
}

export class LocalScoreStore implements ScoreStore {
  constructor(private readonly storage: StorageLike | null = browserStorage()) {}

  private read(): ScoreSummary[] {
    try {
      const saved = this.storage?.getItem(LOCAL_KEY)
      return saved ? parseSummaries(JSON.parse(saved)) : []
    } catch {
      return [] // nothing saved, or what was saved cannot be read
    }
  }

  // The nickname is not kept here: it is only for the ranking on the score server.
  async save(record: ScoreRecord, _nickname?: string): Promise<SaveResult> {
    if (!verifyRecord(record)) return 'saved' // not a real game: not worth keeping, and nothing to tell the player
    try {
      const saved = this.read()
      if (saved.some((entry) => entry.id === record.id)) return 'duplicate'
      const kept = [...saved, toSummary(record)].slice(-LOCAL_MAX)
      this.storage?.setItem(LOCAL_KEY, JSON.stringify(kept))
    } catch {
      // the browser refuses to store (e.g. private browsing): the game just is not recorded
    }
    return 'saved'
  }

  async top(limit: number): Promise<ScoreSummary[]> {
    return [...this.read()].sort((a, b) => b.total - a.total || newestFirst(a, b)).slice(0, Math.max(0, limit))
  }

  async recent(limit: number): Promise<ScoreSummary[]> {
    return [...this.read()].sort(newestFirst).slice(0, Math.max(0, limit))
  }
}

// The numbers shown as "my record".
export function summarize(summaries: ScoreSummary[]): { games: number; best: number; average: number } {
  if (summaries.length === 0) return { games: 0, best: 0, average: 0 }
  const sum = summaries.reduce((total, entry) => total + entry.total, 0)
  return {
    games: summaries.length,
    best: Math.max(...summaries.map((entry) => entry.total)),
    average: Math.round((sum / summaries.length) * 10) / 10,
  }
}

// --- On the score server ---

// The score server said no. The status code tells the screen what to say (400: not accepted, 429: too many tries).
export class ScoreServerError extends Error {
  constructor(readonly status: number) {
    super(`Score server error (${status})`)
    this.name = 'ScoreServerError'
  }
}

export class RemoteScoreStore implements ScoreStore {
  private readonly base: string

  constructor(
    baseUrl: string,
    private readonly fetcher: typeof fetch = (input, init) => fetch(input, init),
  ) {
    this.base = baseUrl.replace(/\/+$/, '')
  }

  // The whole game is sent, not just the score: the server works the score out again from the dice and the
  // choices (verifyRecord does the same here) and refuses what does not add up. The nickname is tidied the same way
  // the server will tidy it.
  async save(record: ScoreRecord, nickname?: string): Promise<SaveResult> {
    const name = nickname === undefined ? null : normalizeNickname(nickname)
    if (name === null) throw new Error('A usable nickname is needed to join the ranking')
    if (!verifyRecord(record)) throw new Error('Refusing to send a record that is not a real game')
    const response = await this.fetcher(`${this.base}/scores/api/yacht`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...record, nickname: name }),
    })
    if (response.status === 200) return 'duplicate'
    if (response.status === 201) return 'saved'
    throw new ScoreServerError(response.status)
  }

  top(limit: number): Promise<ScoreSummary[]> {
    return this.list('top', limit)
  }

  recent(limit: number): Promise<ScoreSummary[]> {
    return this.list('recent', limit)
  }

  private async list(which: 'top' | 'recent', limit: number): Promise<ScoreSummary[]> {
    const response = await this.fetcher(`${this.base}/scores/api/yacht/${which}?limit=${limit}`)
    if (!response.ok) throw new ScoreServerError(response.status)
    return parseSummaries(await response.json())
  }
}
