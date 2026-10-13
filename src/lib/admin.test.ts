import { describe, it, expect, vi } from 'vitest'
import { verifyPat } from './admin'

// A stand-in for fetch that answers once with the given status and JSON body.
function answer(status: number, body: unknown = {}) {
  return vi.fn(async () => new Response(JSON.stringify(body), { status }))
}

describe('verifyPat', () => {
  it('accepts a token that can push to the repository', async () => {
    const fetcher = answer(200, { permissions: { admin: false, push: true, pull: true } })
    expect(await verifyPat('github_pat_x', fetcher)).toBe('ok')
  })

  it('asks the GitHub API about this repository, with the token in the Authorization header', async () => {
    const fetcher = answer(200, { permissions: { push: true } })
    await verifyPat('github_pat_x', fetcher)
    const [url, init] = fetcher.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe('https://api.github.com/repos/ShinHeeYoun/ShinHeeYoun.github.io')
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer github_pat_x')
  })

  it('refuses a token GitHub does not recognise', async () => {
    expect(await verifyPat('wrong', answer(401, { message: 'Bad credentials' }))).toBe('invalid')
  })

  it('refuses a real token that cannot write to the repository', async () => {
    const fetcher = answer(200, { permissions: { admin: false, push: false, pull: true } })
    expect(await verifyPat('github_pat_readonly', fetcher)).toBe('no-write')
  })

  it('does not call a token wrong because GitHub failed or was out of reach', async () => {
    expect(await verifyPat('x', answer(500))).toBe('error')
    expect(await verifyPat('x', answer(403, { message: 'rate limit exceeded' }))).toBe('error')
    const offline = vi.fn(async () => {
      throw new TypeError('Failed to fetch')
    })
    expect(await verifyPat('x', offline)).toBe('error')
  })

  it('accepts a valid token when GitHub does not say what it may do (a failed publish will say so)', async () => {
    expect(await verifyPat('x', answer(200, { full_name: 'ShinHeeYoun/ShinHeeYoun.github.io' }))).toBe('ok')
  })

  it('does not even ask GitHub when no token was typed', async () => {
    const fetcher = answer(200)
    expect(await verifyPat('   ', fetcher)).toBe('invalid')
    expect(fetcher).not.toHaveBeenCalled()
  })
})
