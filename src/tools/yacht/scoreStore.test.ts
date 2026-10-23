import { describe, it, expect, vi } from 'vitest'
import {
  LOCAL_KEY,
  LOCAL_MAX,
  LocalScoreStore,
  RemoteScoreStore,
  ScoreServerError,
  parseSummaries,
  summarize,
  toSummary,
  type StorageLike,
} from './scoreStore'
import {
  buildRecord,
  chooseCategory,
  initialGame,
  isGameOver,
  rollFinal,
  CATEGORIES,
  MAX_TOTAL,
  type Category,
  type ScoreRecord,
} from './controller'

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

// A finished game, as a record. Different seeds give different games.
function record(seed: number, playedAt = `2026-10-24T09:${String(seed % 60).padStart(2, '0')}:00.000Z`): ScoreRecord {
  const rng = seeded(seed)
  let game = initialGame()
  while (!isGameOver(game)) {
    game = rollFinal(game, rng)
    game = chooseCategory(game, CATEGORIES.find((c) => game.scores[c] === null) as Category)
  }
  return buildRecord(game, `game-${seed}`, playedAt)
}

// Storage that lives in memory, in place of the browser's.
function memoryStorage(initial: Record<string, string> = {}): StorageLike & { data: Record<string, string> } {
  const data = { ...initial }
  return {
    data,
    getItem: (key) => (key in data ? data[key] : null),
    setItem: (key, value) => {
      data[key] = value
    },
  }
}

describe('toSummary', () => {
  it('keeps the totals and leaves out the turns', () => {
    const full = record(1)
    expect(toSummary(full)).toEqual({
      id: full.id,
      playedAt: full.playedAt,
      total: full.total,
      upperSum: full.upperSum,
      bonus: full.bonus,
    })
  })
})

describe('parseSummaries', () => {
  const good = toSummary(record(2))

  it('keeps well-formed summaries and drops anything else', () => {
    const parsed = parseSummaries([
      good,
      null,
      'x',
      { ...good, total: 'many' },
      { ...good, id: 5 },
      { ...good, total: -3 },
      { ...good, total: MAX_TOTAL + 1 },
      { ...good, total: 90.5 },
      { ...good, playedAt: 'yesterday' },
    ])
    expect(parsed).toEqual([good])
  })

  it('keeps a valid nickname, and leaves a bad one out without dropping the game', () => {
    const parsed = parseSummaries([
      { ...good, id: 'a', nickname: 'Kim Lee' },
      { ...good, id: 'b', nickname: '<b>x</b>' },
      { ...good, id: 'c', nickname: 42 },
      { ...good, id: 'd', nickname: '  padded  ' },
      { ...good, id: 'e' },
    ])
    expect(parsed.map((entry) => [entry.id, entry.nickname])).toEqual([
      ['a', 'Kim Lee'],
      ['b', undefined],
      ['c', undefined],
      ['d', undefined],
      ['e', undefined],
    ])
  })

  it('gives an empty list for something that is not a list', () => {
    expect(parseSummaries(null)).toEqual([])
    expect(parseSummaries({})).toEqual([])
    expect(parseSummaries('abc')).toEqual([])
  })

  it('ignores extra fields, such as the turns', () => {
    const parsed = parseSummaries([record(3)])
    expect(parsed).toHaveLength(1)
    expect(parsed[0]).not.toHaveProperty('turns')
  })
})

describe('LocalScoreStore', () => {
  it('saves a finished game and finds it again', async () => {
    const store = new LocalScoreStore(memoryStorage())
    const game = record(4)
    await store.save(game)
    expect(await store.recent(10)).toEqual([toSummary(game)])
    expect(await store.top(10)).toEqual([toSummary(game)])
  })

  it('lists the highest scores first, and the newest first among equal scores', async () => {
    const store = new LocalScoreStore(memoryStorage())
    const games = [record(5), record(6), record(7), record(8)]
    for (const game of games) await store.save(game)
    const top = await store.top(10)
    const totals = top.map((entry) => entry.total)
    expect(totals).toEqual([...totals].sort((a, b) => b - a))
    expect(top).toHaveLength(4)
    const same = await new LocalScoreStore(memoryStorage()).top(5)
    expect(same).toEqual([])
    const older = { ...record(9), id: 'older', playedAt: '2026-10-20T00:00:00.000Z' }
    const newer = { ...older, id: 'newer', playedAt: '2026-10-25T00:00:00.000Z' }
    const tie = new LocalScoreStore(memoryStorage())
    await tie.save(older)
    await tie.save(newer)
    expect((await tie.top(2)).map((entry) => entry.id)).toEqual(['newer', 'older'])
  })

  it('lists the newest games first, and only as many as asked for', async () => {
    const store = new LocalScoreStore(memoryStorage())
    await store.save({ ...record(10), id: 'a', playedAt: '2026-10-21T00:00:00.000Z' })
    await store.save({ ...record(11), id: 'b', playedAt: '2026-10-23T00:00:00.000Z' })
    await store.save({ ...record(12), id: 'c', playedAt: '2026-10-22T00:00:00.000Z' })
    expect((await store.recent(2)).map((entry) => entry.id)).toEqual(['b', 'c'])
    expect(await store.recent(0)).toEqual([])
  })

  it('does not save the same game twice, and says so', async () => {
    const store = new LocalScoreStore(memoryStorage())
    const game = record(13)
    expect(await store.save(game)).toBe('saved')
    expect(await store.save(game)).toBe('duplicate')
    expect(await store.recent(10)).toHaveLength(1)
  })

  it('does not keep a nickname: it is only for the ranking on the server', async () => {
    const store = new LocalScoreStore(memoryStorage())
    await store.save(record(19), 'Kim')
    expect((await store.recent(1))[0]).not.toHaveProperty('nickname')
  })

  it('refuses a record that is not a real game, without failing', async () => {
    const store = new LocalScoreStore(memoryStorage())
    await store.save({ ...record(14), total: 999 })
    expect(await store.recent(10)).toEqual([])
  })

  it('keeps only the latest games, up to the limit', async () => {
    const storage = memoryStorage()
    const store = new LocalScoreStore(storage)
    for (let i = 0; i < LOCAL_MAX + 5; i++) {
      await store.save({ ...record(1000 + i), id: `g${i}`, playedAt: new Date(Date.UTC(2026, 0, 1, 0, 0, i)).toISOString() })
    }
    const all = await store.recent(LOCAL_MAX + 50)
    expect(all).toHaveLength(LOCAL_MAX)
    expect(all[0].id).toBe(`g${LOCAL_MAX + 4}`)
    expect(all.some((entry) => entry.id === 'g0')).toBe(false)
  })

  it('reads games saved earlier by another visit, and skips damaged entries in the storage', async () => {
    const storage = memoryStorage({
      [LOCAL_KEY]: JSON.stringify([toSummary(record(15)), { broken: true }, 42]),
    })
    expect(await new LocalScoreStore(storage).recent(10)).toHaveLength(1)
  })

  it('copes with storage holding something that is not JSON', async () => {
    const store = new LocalScoreStore(memoryStorage({ [LOCAL_KEY]: '{not json' }))
    expect(await store.recent(10)).toEqual([])
    await store.save(record(16))
    expect(await store.recent(10)).toHaveLength(1)
  })

  it('does not fail when the browser refuses to store anything', async () => {
    const refusing: StorageLike = {
      getItem: () => {
        throw new Error('blocked')
      },
      setItem: () => {
        throw new Error('blocked')
      },
    }
    const store = new LocalScoreStore(refusing)
    await expect(store.save(record(17))).resolves.toBe('saved')
    expect(await store.recent(10)).toEqual([])
    const none = new LocalScoreStore(null)
    await expect(none.save(record(18))).resolves.toBe('saved')
    expect(await none.top(5)).toEqual([])
  })
})

describe('summarize', () => {
  it('counts the games and finds the best and the average', () => {
    const summaries = [100, 150, 200].map((total, i) => ({ ...toSummary(record(20 + i)), total }))
    expect(summarize(summaries)).toEqual({ games: 3, best: 200, average: 150 })
  })

  it('rounds the average to one decimal', () => {
    const summaries = [100, 101, 101].map((total, i) => ({ ...toSummary(record(30 + i)), total }))
    expect(summarize(summaries).average).toBe(100.7)
  })

  it('is all zero when no game was played', () => {
    expect(summarize([])).toEqual({ games: 0, best: 0, average: 0 })
  })
})

describe('RemoteScoreStore', () => {
  const BASE = 'https://example.test'
  const reply = (status: number, body: unknown = {}) =>
    vi.fn(async () => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } }))

  it('sends a finished game to the server as JSON, turns and nickname included, so the server can check it', async () => {
    const fetcher = reply(201)
    const game = record(40)
    await new RemoteScoreStore(BASE, fetcher).save(game, 'Kim')
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe(`${BASE}/scores/api/yacht`)
    expect(init.method).toBe('POST')
    expect((init.headers as Record<string, string>)['Content-Type']).toBe('application/json')
    expect(JSON.parse(init.body as string)).toEqual({ ...game, nickname: 'Kim' })
  })

  it('says whether the game was newly saved (201) or had been saved before (200)', async () => {
    expect(await new RemoteScoreStore(BASE, reply(201)).save(record(45), 'Kim')).toBe('saved')
    expect(await new RemoteScoreStore(BASE, reply(200)).save(record(46), 'Kim')).toBe('duplicate')
  })

  it('sends the nickname with its spaces tidied', async () => {
    const fetcher = reply(201)
    await new RemoteScoreStore(BASE, fetcher).save(record(47), '  Kim    Lee ')
    const [, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit]
    expect(JSON.parse(init.body as string).nickname).toBe('Kim Lee')
  })

  it('does not send a game without a usable nickname', async () => {
    const fetcher = reply(201)
    const store = new RemoteScoreStore(BASE, fetcher)
    await expect(store.save(record(48))).rejects.toThrow(/nickname/i)
    await expect(store.save(record(48), '')).rejects.toThrow(/nickname/i)
    await expect(store.save(record(48), '<b>x</b>')).rejects.toThrow(/nickname/i)
    await expect(store.save(record(48), 'abcdefghijklm')).rejects.toThrow(/nickname/i)
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('fails when the server does not accept the score, and keeps the status code for the screen to explain', async () => {
    await expect(new RemoteScoreStore(BASE, reply(400)).save(record(41), 'Kim')).rejects.toThrow(/400/)
    await expect(new RemoteScoreStore(BASE, reply(500)).save(record(42), 'Kim')).rejects.toThrow(/500/)
    const error = await new RemoteScoreStore(BASE, reply(429)).save(record(49), 'Kim').catch((e) => e)
    expect(error).toBeInstanceOf(ScoreServerError)
    expect((error as ScoreServerError).status).toBe(429)
  })

  it('does not send a record that fails its own check', async () => {
    const fetcher = reply(201)
    await expect(new RemoteScoreStore(BASE, fetcher).save({ ...record(43), total: 1 }, 'Kim')).rejects.toThrow()
    expect(fetcher).not.toHaveBeenCalled()
  })

  it('asks the server for the top scores and reads the answer carefully', async () => {
    const good = { ...toSummary(record(44)), nickname: 'Kim' }
    const fetcher = reply(200, [good, { nonsense: true }, { ...good, total: 'many' }])
    const top = await new RemoteScoreStore(BASE, fetcher).top(5)
    const [url] = fetcher.mock.calls[0] as unknown as [string]
    expect(url).toBe(`${BASE}/scores/api/yacht/top?limit=5`)
    expect(top).toEqual([good])
  })

  it('asks for the most recent games too', async () => {
    const fetcher = reply(200, [])
    await new RemoteScoreStore(BASE, fetcher).recent(3)
    const [url] = fetcher.mock.calls[0] as unknown as [string]
    expect(url).toBe(`${BASE}/scores/api/yacht/recent?limit=3`)
  })

  it('fails when the server cannot be reached or answers with an error', async () => {
    const down = vi.fn(async () => {
      throw new TypeError('Failed to fetch')
    })
    await expect(new RemoteScoreStore(BASE, down).top(5)).rejects.toThrow()
    await expect(new RemoteScoreStore(BASE, reply(503)).top(5)).rejects.toThrow(/503/)
  })

  it('does not double the slash when the address ends with one', async () => {
    const fetcher = reply(200, [])
    await new RemoteScoreStore(`${BASE}/`, fetcher).top(1)
    const [url] = fetcher.mock.calls[0] as unknown as [string]
    expect(url).toBe(`${BASE}/scores/api/yacht/top?limit=1`)
  })
})
