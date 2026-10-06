import { describe, it, expect } from 'vitest'
import { stripLeadingTitle, toExcerpt } from './markdown'

describe('toExcerpt', () => {
  it('drops the repeated title and heading markers', () => {
    const body = '# My Post\n\n## Overview\n\nSome text here.'
    expect(toExcerpt(body, 'My Post')).toBe('Overview Some text here.')
  })

  it('removes list markers, blockquote markers and horizontal rules', () => {
    const body = '- first item\n2. second item\n> quoted\n\n---\n\nend'
    expect(toExcerpt(body, 'T')).toBe('first item second item quoted end')
  })

  it('keeps link text and image alt text but drops the URLs', () => {
    const body = 'See [the docs](https://example.com/a) and ![diagram](x.png).'
    expect(toExcerpt(body, 'T')).toBe('See the docs and diagram.')
  })

  it('removes emphasis, strikethrough and inline-code marks', () => {
    const body = 'Use **bold**, *italic*, ~~old~~ and `code` text.'
    expect(toExcerpt(body, 'T')).toBe('Use bold, italic, old and code text.')
  })

  it('leaves underscores inside identifiers alone', () => {
    expect(toExcerpt('Set ssh_key_name now', 'T')).toBe('Set ssh_key_name now')
  })

  it('skips fenced code blocks entirely', () => {
    const body = 'Run this:\n\n```bash\nsudo reboot\n```\n\nThen wait.'
    expect(toExcerpt(body, 'T')).toBe('Run this: Then wait.')
  })

  it('collapses whitespace and truncates with an ellipsis past the limit', () => {
    const body = 'one two  three\nfour five six'
    expect(toExcerpt(body, 'T', 10)).toBe('one two th...')
  })

  it('does not add an ellipsis when the text fits', () => {
    expect(toExcerpt('short text', 'T', 80)).toBe('short text')
  })
})

describe('stripLeadingTitle', () => {
  it('returns an empty string when the body is only the title heading', () => {
    expect(stripLeadingTitle('# My Post\n', 'My Post')).toBe('')
  })

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
