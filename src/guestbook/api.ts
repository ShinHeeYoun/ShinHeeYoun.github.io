// Talks to the guestbook on the score server (server/scores, GuestbookService.java).

export type Entry = {
  id: number
  parentId: number | null
  author: string
  body: string
  createdAt: string
  replyCount: number
}

export type Page = { comments: Entry[]; hasMore: boolean }

// The server said no. The status tells the screen what to say (403: wrong password, 429: too many tries).
export class GuestbookError extends Error {
  constructor(readonly status: number) {
    super(`Guestbook server error (${status})`)
    this.name = 'GuestbookError'
  }
}

// An entry as the server sends it, or null if it is not shaped like one. Whatever arrives is checked, never trusted.
export function parseEntry(raw: unknown): Entry | null {
  if (typeof raw !== 'object' || raw === null) return null
  const item = raw as Record<string, unknown>
  const { id, parentId, author, body, createdAt, replyCount } = item
  if (typeof id !== 'number' || !Number.isSafeInteger(id) || id < 1) return null
  if (typeof author !== 'string' || typeof body !== 'string') return null
  if (typeof createdAt !== 'string' || Number.isNaN(Date.parse(createdAt))) return null
  if (typeof replyCount !== 'number' || !Number.isSafeInteger(replyCount) || replyCount < 0) return null
  if (parentId !== undefined && parentId !== null && (typeof parentId !== 'number' || !Number.isSafeInteger(parentId))) {
    return null
  }
  return { id, parentId: typeof parentId === 'number' ? parentId : null, author, body, createdAt, replyCount }
}

export function parseEntries(raw: unknown): Entry[] {
  if (!Array.isArray(raw)) throw new Error('The guestbook answered with something that is not a list')
  return raw.flatMap((item) => {
    const entry = parseEntry(item)
    return entry ? [entry] : []
  })
}

export type Proof = { password: string } | { adminToken: string }

export class GuestbookApi {
  private readonly base: string

  // The default is a wrapper, not `fetch` itself: a browser refuses to call fetch with any other `this`.
  constructor(
    baseUrl: string,
    private readonly fetcher: typeof fetch = (input, init) => fetch(input, init),
  ) {
    this.base = `${baseUrl.replace(/\/+$/, '')}/scores/api/guestbook`
  }

  async list(before?: number, limit = 20): Promise<Page> {
    const query = `limit=${limit}${before === undefined ? '' : `&before=${before}`}`
    const data = (await this.read(`${this.base}?${query}`)) as { comments?: unknown; hasMore?: unknown }
    return { comments: parseEntries(data.comments), hasMore: data.hasMore === true }
  }

  async replies(commentId: number): Promise<Entry[]> {
    const data = (await this.read(`${this.base}/${commentId}/replies`)) as { replies?: unknown }
    return parseEntries(data.replies)
  }

  // A comment, or a reply when parentId is given. Returns the entry as the server kept it.
  async write(input: { author: string; password: string; body: string; parentId?: number }): Promise<Entry> {
    const response = await this.fetcher(this.base, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    })
    if (response.status !== 201) throw new GuestbookError(response.status)
    const entry = parseEntry(await response.json())
    if (!entry) throw new Error('The guestbook answered with something that is not an entry')
    return entry
  }

  // With the writer's password, or with the admin's GitHub token (no password then).
  async remove(id: number, proof: Proof): Promise<void> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' }
    let body = '{}'
    if ('adminToken' in proof) headers.Authorization = `Bearer ${proof.adminToken}`
    else body = JSON.stringify({ password: proof.password })
    const response = await this.fetcher(`${this.base}/${id}/delete`, { method: 'POST', headers, body })
    if (response.status !== 200) throw new GuestbookError(response.status)
  }

  private async read(url: string): Promise<unknown> {
    const response = await this.fetcher(url)
    if (!response.ok) throw new GuestbookError(response.status)
    return response.json()
  }
}
