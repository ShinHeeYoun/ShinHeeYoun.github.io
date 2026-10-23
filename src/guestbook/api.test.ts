import { describe, it, expect, vi } from 'vitest'
import { GuestbookApi, GuestbookError, parseEntry } from './api'

const BASE = 'https://server.example'
const entry = (id: number, extra: Record<string, unknown> = {}) => ({
  id,
  author: 'Kim',
  body: 'hello',
  createdAt: '2026-10-24T09:00:00Z',
  replyCount: 0,
  ...extra,
})

function reply(status: number, body: unknown = {}) {
  return vi.fn(async (_input: RequestInfo | URL, _init?: RequestInit) => new Response(JSON.stringify(body), { status }))
}
const lastCall = (fetcher: ReturnType<typeof reply>) => fetcher.mock.calls[fetcher.mock.calls.length - 1] as unknown as [string, RequestInit?]

describe('parseEntry', () => {
  it('reads an entry, with or without a parent', () => {
    expect(parseEntry(entry(3))).toEqual({ ...entry(3), parentId: null })
    expect(parseEntry(entry(4, { parentId: 3 }))?.parentId).toBe(3)
  })

  it('refuses anything that is not shaped like an entry', () => {
    for (const bad of [null, 5, 'x', [], {}, entry(0), entry(-1), entry(1.5), entry(1, { author: 5 }), entry(1, { body: null }), entry(1, { createdAt: 'yesterday' }), entry(1, { replyCount: -1 }), entry(1, { parentId: 'x' })]) {
      expect(parseEntry(bad)).toBeNull()
    }
  })
})

describe('GuestbookApi', () => {
  it('asks for a page of comments', async () => {
    const fetcher = reply(200, { comments: [entry(2), entry(1)], hasMore: true })
    const page = await new GuestbookApi(BASE, fetcher).list()
    expect(lastCall(fetcher)[0]).toBe(`${BASE}/scores/api/guestbook?limit=20`)
    expect(page.comments.map((c) => c.id)).toEqual([2, 1])
    expect(page.hasMore).toBe(true)
  })

  it('asks for the next page with before=', async () => {
    const fetcher = reply(200, { comments: [], hasMore: false })
    await new GuestbookApi(`${BASE}/`, fetcher).list(7, 5)
    expect(lastCall(fetcher)[0]).toBe(`${BASE}/scores/api/guestbook?limit=5&before=7`)
  })

  it('drops entries that are not shaped right instead of showing them', async () => {
    const fetcher = reply(200, { comments: [entry(2), { id: 'x' }, null], hasMore: false })
    expect((await new GuestbookApi(BASE, fetcher).list()).comments).toHaveLength(1)
  })

  it('fails when the server answers with something that is not a list', async () => {
    await expect(new GuestbookApi(BASE, reply(200, { comments: 'x' })).list()).rejects.toThrow()
    await expect(new GuestbookApi(BASE, reply(503)).list()).rejects.toMatchObject({ status: 503 })
  })

  it('reads the replies of a comment', async () => {
    const fetcher = reply(200, { replies: [entry(5, { parentId: 2 })] })
    const replies = await new GuestbookApi(BASE, fetcher).replies(2)
    expect(lastCall(fetcher)[0]).toBe(`${BASE}/scores/api/guestbook/2/replies`)
    expect(replies[0].parentId).toBe(2)
  })

  it('writes a comment and gives back the entry the server kept', async () => {
    const fetcher = reply(201, entry(9))
    const saved = await new GuestbookApi(BASE, fetcher).write({ author: 'Kim', password: 'secret1', body: 'hello' })
    const [url, init] = lastCall(fetcher)
    expect(url).toBe(`${BASE}/scores/api/guestbook`)
    expect(init?.method).toBe('POST')
    expect(JSON.parse(String(init?.body))).toEqual({ author: 'Kim', password: 'secret1', body: 'hello' })
    expect(saved.id).toBe(9)
  })

  it('writes a reply with the parent id', async () => {
    const fetcher = reply(201, entry(10, { parentId: 9 }))
    await new GuestbookApi(BASE, fetcher).write({ author: 'Kim', password: 'secret1', body: 'hi', parentId: 9 })
    expect(JSON.parse(String(lastCall(fetcher)[1]?.body)).parentId).toBe(9)
  })

  it('reports why a write was refused', async () => {
    const error = await new GuestbookApi(BASE, reply(429)).write({ author: 'Kim', password: 'secret1', body: 'hi' }).catch((e) => e)
    expect(error).toBeInstanceOf(GuestbookError)
    expect(error.status).toBe(429)
  })

  it('deletes with the writer\'s password, which goes in the body and not in the address', async () => {
    const fetcher = reply(200)
    await new GuestbookApi(BASE, fetcher).remove(4, { password: 'secret1' })
    const [url, init] = lastCall(fetcher)
    expect(url).toBe(`${BASE}/scores/api/guestbook/4/delete`)
    expect(JSON.parse(String(init?.body))).toEqual({ password: 'secret1' })
    expect((init?.headers as Record<string, string>).Authorization).toBeUndefined()
  })

  it('deletes with the admin token as a Bearer header, and sends no password', async () => {
    const fetcher = reply(200)
    await new GuestbookApi(BASE, fetcher).remove(4, { adminToken: 'ghp_x' })
    const [, init] = lastCall(fetcher)
    expect((init?.headers as Record<string, string>).Authorization).toBe('Bearer ghp_x')
    expect(init?.body).toBe('{}')
  })

  it('reports a wrong password as 403', async () => {
    await expect(new GuestbookApi(BASE, reply(403)).remove(4, { password: 'nope' })).rejects.toMatchObject({ status: 403 })
  })

  // A browser refuses fetch called with any other `this` ("Illegal invocation").
  it('calls the global fetch without the api as its this', async () => {
    let seenThis: unknown = 'not called'
    const original = globalThis.fetch
    globalThis.fetch = function (this: unknown) {
      seenThis = this
      return Promise.resolve(new Response(JSON.stringify({ comments: [], hasMore: false }), { status: 200 }))
    } as typeof fetch
    try {
      await new GuestbookApi(BASE).list()
    } finally {
      globalThis.fetch = original
    }
    expect(seenThis === undefined || seenThis === globalThis).toBe(true)
  })
})
