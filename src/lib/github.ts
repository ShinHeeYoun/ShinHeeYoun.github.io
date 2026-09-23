const OWNER = 'ShinHeeYoun'
const REPO = 'ShinHeeYoun.github.io'
const BRANCH = 'main'

function apiUrl(path: string): string {
  return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`
}

function utf8ToBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }
  return btoa(binary)
}

function base64ToUtf8(base64: string): string {
  const binary = atob(base64.replace(/\n/g, ''))
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

async function githubRequest(path: string, pat: string, init: RequestInit): Promise<Response> {
  const response = await fetch(apiUrl(path), {
    ...init,
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github+json',
      ...init.headers,
    },
  })
  if (!response.ok) {
    const body = await response.json().catch(() => ({}) as Record<string, unknown>)
    const message = typeof body.message === 'string' ? body.message : response.statusText
    throw new Error(`GitHub API error (${response.status}): ${message}`)
  }
  return response
}

export type RemoteFile = {
  content: string
  sha: string
}

export async function getFile(path: string, pat: string): Promise<RemoteFile> {
  const response = await githubRequest(path, pat, { method: 'GET' })
  const data = await response.json()
  return { content: base64ToUtf8(data.content as string), sha: data.sha as string }
}

export async function createOrUpdateFile(
  path: string,
  content: string,
  message: string,
  pat: string,
  sha?: string,
): Promise<void> {
  await githubRequest(path, pat, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      content: utf8ToBase64(content),
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  })
}

export async function deleteFile(
  path: string,
  message: string,
  sha: string,
  pat: string,
): Promise<void> {
  await githubRequest(path, pat, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  })
}
