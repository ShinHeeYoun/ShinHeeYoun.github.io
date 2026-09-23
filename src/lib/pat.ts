const STORAGE_KEY = 'gh_pat'

export function getStoredPat(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

export function setStoredPat(pat: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, pat)
  } catch {
    // localStorage unavailable (e.g. private browsing) — nothing to persist
  }
}
