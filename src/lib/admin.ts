import { REPO_API_URL } from './github'

// ok: a token that works here | invalid: not recognised | no-write: real, but read-only | error: GitHub could not tell us
export type PatCheck = 'ok' | 'invalid' | 'no-write' | 'error'

// Asks GitHub whether this token is real and may push to this repository. The answer only decides what the page
// shows: the token itself is what protects the repository, since every change is made with it.
export async function verifyPat(pat: string, fetcher: typeof fetch = fetch): Promise<PatCheck> {
  const token = pat.trim()
  if (!token) return 'invalid'
  try {
    const response = await fetcher(REPO_API_URL, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' },
    })
    if (response.status === 401) return 'invalid'
    if (!response.ok) return 'error'
    const repo = (await response.json().catch(() => ({}))) as { permissions?: { push?: unknown } }
    // When GitHub does not report permissions the token is real, and a publish will say if it cannot write.
    return repo.permissions?.push === false ? 'no-write' : 'ok'
  } catch {
    return 'error'
  }
}
