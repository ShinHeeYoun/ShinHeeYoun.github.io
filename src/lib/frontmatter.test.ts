import { describe, it, expect } from 'vitest'
import { parseFrontmatter } from './frontmatter'

describe('parseFrontmatter', () => {
  it('parses LF-only content', () => {
    const raw = '---\ntitle: T\ndate: 2026-09-23\n---\nbody line\n'
    const { frontmatter, body } = parseFrontmatter(raw)
    expect(frontmatter).toEqual({ title: 'T', date: '2026-09-23' })
    expect(body).toBe('body line')
  })

  it('parses CRLF content without leaving stray carriage returns', () => {
    const raw = '---\r\ntitle: T\r\ndate: 2026-09-23\r\n---\r\nbody line\r\n'
    const { frontmatter, body } = parseFrontmatter(raw)
    expect(frontmatter).toEqual({ title: 'T', date: '2026-09-23' })
    expect(body).toBe('body line')
    expect(body).not.toContain('\r')
    expect(frontmatter.date).not.toContain('\r')
  })

  it('throws when the frontmatter block is missing', () => {
    expect(() => parseFrontmatter('no frontmatter here')).toThrow('Missing frontmatter block')
  })
})
