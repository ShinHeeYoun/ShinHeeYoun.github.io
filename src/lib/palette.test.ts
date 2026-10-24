import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'

// Read from the file itself: Vitest leaves out the content of CSS files it imports.
const css = readFileSync(new URL('../index.css', import.meta.url), 'utf8')

// The colours of the site are written in src/index.css as HSL numbers. These tests read them from there and check
// that text stays readable on the colour it sits on (WCAG AA asks for a contrast of 4.5 to 1 for body text).

type Theme = Record<string, [number, number, number]>

function readTheme(selector: ':root' | '.dark'): Theme {
  const start = css.indexOf(`${selector} {`)
  const block = css.slice(start, css.indexOf('}', start))
  const theme: Theme = {}
  for (const match of block.matchAll(/--([a-z-]+):\s*(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%/g)) {
    theme[match[1]] = [Number(match[2]), Number(match[3]), Number(match[4])]
  }
  return theme
}

function toRgb([h, s, l]: [number, number, number]): [number, number, number] {
  const sat = s / 100
  const light = l / 100
  const k = (n: number) => (n + h / 30) % 12
  const a = sat * Math.min(light, 1 - light)
  const f = (n: number) => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  return [f(0) * 255, f(8) * 255, f(4) * 255]
}

function luminance(hsl: [number, number, number]): number {
  const [r, g, b] = toRgb(hsl).map((channel) => {
    const c = channel / 255
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function contrast(a: [number, number, number], b: [number, number, number]): number {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (light + 0.05) / (dark + 0.05)
}

// text colour, the colour it sits on
const PAIRS: [string, string][] = [
  ['foreground', 'background'],
  ['card-foreground', 'card'],
  ['popover-foreground', 'popover'],
  ['primary-foreground', 'primary'],
  ['secondary-foreground', 'secondary'],
  ['muted-foreground', 'background'],
  ['muted-foreground', 'muted'],
  ['muted-foreground', 'card'],
  ['accent-foreground', 'accent'],
  ['destructive-foreground', 'destructive'],
  ['highlight-foreground', 'highlight'],
  ['primary', 'background'], // links are written in the primary colour
  ['primary', 'card'],
  ['match', 'background'], // the search match
  ['match', 'card'],
  ['destructive', 'background'], // error messages
]

describe.each([':root', '.dark'] as const)('colours of %s', (selector) => {
  const theme = readTheme(selector)

  it('defines every colour the components ask for', () => {
    for (const name of [
      'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground', 'primary',
      'primary-foreground', 'secondary', 'secondary-foreground', 'muted', 'muted-foreground', 'accent',
      'accent-foreground', 'destructive', 'destructive-foreground', 'highlight', 'highlight-foreground', 'match',
      'border', 'input', 'ring',
    ]) {
      expect(theme[name], name).toBeDefined()
    }
  })

  it.each(PAIRS)('keeps %s readable on %s', (text, surface) => {
    expect(contrast(theme[text], theme[surface]), `${text} on ${surface}`).toBeGreaterThanOrEqual(4.5)
  })

  it('makes the focus ring visible against the page (3:1 for interface parts)', () => {
    expect(contrast(theme.ring, theme.background)).toBeGreaterThanOrEqual(3)
  })
})

describe('the palette', () => {
  it('uses the colours of the chosen Coolors palette: the navy for the light buttons and the gold for the dark ones', () => {
    const light = readTheme(':root')
    const dark = readTheme('.dark')
    expect(light.primary).toEqual([209, 100, 20]) // #003566
    expect(dark.primary).toEqual([46, 100, 50]) // #ffc300
    expect(dark.background).toEqual([216, 100, 4]) // #000814
    expect(light.highlight).toEqual([46, 100, 50]) // #ffc300
  })

  it('converts hex colours the way the checks assume', () => {
    // white on black is 21:1, and a colour against itself is 1:1
    expect(contrast([0, 0, 100], [0, 0, 0])).toBeCloseTo(21, 0)
    expect(contrast([209, 100, 20], [209, 100, 20])).toBeCloseTo(1, 5)
  })
})
