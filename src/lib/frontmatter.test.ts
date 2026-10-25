import { describe, it, expect } from 'vitest'
import { parseFrontmatter, serializeFrontmatter } from './frontmatter'

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

  it('reads the video of a video post, and keeps it when written back', () => {
    const raw = '---\ntitle: T\ndate: 2026-10-25\nvideo: dQw4w9WgXcQ\n---\nthe description\n'
    const { frontmatter, body } = parseFrontmatter(raw)
    expect(frontmatter).toEqual({ title: 'T', date: '2026-10-25', video: 'dQw4w9WgXcQ' })
    expect(body).toBe('the description')
    expect(serializeFrontmatter(frontmatter, body)).toBe(raw)
  })

  it('reads a video post that has no description', () => {
    const raw = serializeFrontmatter({ title: 'T', date: '2026-10-25', video: 'dQw4w9WgXcQ' }, '')
    const { frontmatter, body } = parseFrontmatter(raw)
    expect(frontmatter.video).toBe('dQw4w9WgXcQ')
    expect(body).toBe('')
  })

  it('leaves out a video line that is not a video id', () => {
    const { frontmatter } = parseFrontmatter('---\ntitle: T\ndate: 2026-10-25\nvideo: nope\n---\nbody\n')
    expect(frontmatter).toEqual({ title: 'T', date: '2026-10-25' })
  })

  it('writes no video line for an ordinary post', () => {
    expect(serializeFrontmatter({ title: 'T', date: '2026-10-25' }, 'b')).toBe('---\ntitle: T\ndate: 2026-10-25\n---\nb\n')
  })
})
