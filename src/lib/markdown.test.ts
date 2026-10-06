import { describe, it, expect } from 'vitest'
import { stripLeadingTitle } from './markdown'

describe('stripLeadingTitle', () => {
  it('removes a leading H1 that repeats the post title', () => {
    const body = '# My Post\n\nFirst paragraph.\n'
    expect(stripLeadingTitle(body, 'My Post')).toBe('First paragraph.\n')
  })

  it('skips blank lines before the leading H1', () => {
    const body = '\n\n# My Post\nFirst paragraph.'
    expect(stripLeadingTitle(body, 'My Post')).toBe('First paragraph.')
  })

  it('keeps the body when the first H1 is a different title', () => {
    const body = '# Something Else\n\nText'
    expect(stripLeadingTitle(body, 'My Post')).toBe(body)
  })

  it('only looks at the first line, not later headings with the same text', () => {
    const body = 'Intro line\n\n# My Post\n\nText'
    expect(stripLeadingTitle(body, 'My Post')).toBe(body)
  })

  it('does not strip a lower-level heading', () => {
    const body = '## My Post\n\nText'
    expect(stripLeadingTitle(body, 'My Post')).toBe(body)
  })

  it('matches titles containing regex special characters literally', () => {
    const body = '# C++ (draft) [v1.0]?\n\nText'
    expect(stripLeadingTitle(body, 'C++ (draft) [v1.0]?')).toBe('Text')
  })

  it('ignores trailing spaces after the heading text', () => {
    const body = '# My Post   \n\nText'
    expect(stripLeadingTitle(body, 'My Post')).toBe('Text')
  })
})
