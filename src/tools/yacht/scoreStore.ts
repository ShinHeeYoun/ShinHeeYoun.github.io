// Where the scores of finished games are kept. The game only knows the ScoreStore interface, so the place can change
// without touching the game:
// - LocalScoreStore keeps them in this browser (this is what the screen uses now);
// - RemoteScoreStore sends them to the score server and reads the ranking back. It is NOT connected to the screen
//   yet: it waits for the server and its database (see server/scores).

import { MAX_TOTAL, MAX_UPPER_SUM, UPPER_BONUS, verifyRecord, type ScoreRecord } from './controller'

// A game without its turns: what the lists show.
export type ScoreSummary = Omit<ScoreRecord, 'turns'>

export interface ScoreStore {
  save(record: ScoreRecord): Promise<void>
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
    const { id, playedAt, total, upperSum, bonus } = item as Record<string, unknown>
    if (typeof id !== 'string' || id === '') continue
    if (typeof playedAt !== 'string' || Number.isNaN(Date.parse(playedAt))) continue
    if (!isWhole(total, 0, MAX_TOTAL) || !isWhole(upperSum, 0, MAX_UPPER_SUM)) continue
    if (bonus !== 0 && bonus !== UPPER_BONUS) continue
    summaries.push({ id, playedAt, total, upperSum, bonus })
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

  async save(record: ScoreRecord): Promise<void> {
    if (!verifyRecord(record)) return // not a real game: not worth keeping
    try {
      const saved = this.read()
      if (saved.some((entry) => entry.id === record.id)) return
      const kept = [...saved, toSummary(record)].slice(-LOCAL_MAX)
      this.storage?.setItem(LOCAL_KEY, JSON.stringify(kept))
    } catch {
      // the browser refuses to store (e.g. private browsing): the game just is not recorded
    }
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

// --- On the score server (not connected to the screen yet) ---

export class RemoteScoreStore implements ScoreStore {
  private readonly base: string

  constructor(
    baseUrl: string,
    private readonly fetcher: typeof fetch = fetch,
  ) {
    this.base = baseUrl.replace(/\/+$/, '')
  }

  // The whole game is sent, not just the score: the server works the score out again from the dice and the
  // choices (verifyRecord does the same here) and refuses what does not add up.
  async save(record: ScoreRecord): Promise<void> {
    if (!verifyRecord(record)) throw new Error('Refusing to send a record that is not a real game')
    const response = await this.fetcher(`${this.base}/scores/api/yacht`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
    if (!response.ok) throw new Error(`Score server error (${response.status})`)
  }

  top(limit: number): Promise<ScoreSummary[]> {
    return this.list('top', limit)
  }

  recent(limit: number): Promise<ScoreSummary[]> {
    return this.list('recent', limit)
  }

  private async list(which: 'top' | 'recent', limit: number): Promise<ScoreSummary[]> {
    const response = await this.fetcher(`${this.base}/scores/api/yacht/${which}?limit=${limit}`)
    if (!response.ok) throw new Error(`Score server error (${response.status})`)
    return parseSummaries(await response.json())
  }
}
