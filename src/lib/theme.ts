export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function setStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // localStorage unavailable (e.g. private browsing) — nothing to persist
  }
}

// What a visitor sees first: the theme they chose last time, or else the one their device asks for (a computer or
// phone set to dark mode gets the dark theme, anything else the light one).
// Keep in sync with the inline script in index.html, which runs before React to avoid a theme flash.
export function resolveInitialTheme(stored: Theme | null, prefersDark = false): Theme {
  return stored ?? (prefersDark ? 'dark' : 'light')
}

export function systemPrefersDark(): boolean {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}
