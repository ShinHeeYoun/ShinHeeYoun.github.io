import { describe, it, expect } from 'vitest'
import { resolveInitialTheme } from './theme'

describe('resolveInitialTheme', () => {
  it('uses a stored light preference', () => {
    expect(resolveInitialTheme('light')).toBe('light')
  })

  it('uses a stored dark preference', () => {
    expect(resolveInitialTheme('dark')).toBe('dark')
  })

  it('defaults to dark when nothing is stored', () => {
    expect(resolveInitialTheme(null)).toBe('dark')
  })
})
