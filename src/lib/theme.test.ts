import { describe, it, expect } from 'vitest'
import { resolveInitialTheme } from './theme'

describe('resolveInitialTheme', () => {
  it('uses a stored light preference', () => {
    expect(resolveInitialTheme('light')).toBe('light')
  })

  it('uses a stored dark preference', () => {
    expect(resolveInitialTheme('dark')).toBe('dark')
  })

  it('follows the device when nothing is stored: dark for a device set to dark, light otherwise', () => {
    expect(resolveInitialTheme(null, true)).toBe('dark')
    expect(resolveInitialTheme(null, false)).toBe('light')
    expect(resolveInitialTheme(null)).toBe('light')
  })

  it('prefers what was chosen over what the device asks for', () => {
    expect(resolveInitialTheme('light', true)).toBe('light')
    expect(resolveInitialTheme('dark', false)).toBe('dark')
  })
})
