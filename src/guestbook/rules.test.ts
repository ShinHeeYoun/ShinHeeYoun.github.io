import { describe, it, expect } from 'vitest'
import { MAX_TEXT, checkEntry, cleanText, countChars } from './rules'

const good = { author: 'Kim Lee', password: 'secret1', body: 'hello' }

describe('countChars', () => {
  it('counts characters, not UTF-16 units', () => {
    expect(countChars('abc')).toBe(3)
    expect(countChars('가나다')).toBe(3)
    expect(countChars('😀')).toBe(1)
  })
})

describe('cleanText', () => {
  it('removes blank space at both ends and makes line ends newlines', () => {
    expect(cleanText('  hi \n ')).toBe('hi')
    expect(cleanText('a\r\nb\rc')).toBe('a\nb\nc')
    expect(cleanText('# title\n\n- one')).toBe('# title\n\n- one')
  })

  it('allows 300 characters and refuses 301', () => {
    expect(cleanText('a'.repeat(MAX_TEXT))).not.toBeNull()
    expect(cleanText('a'.repeat(MAX_TEXT + 1))).toBeNull()
    expect(cleanText('😀'.repeat(MAX_TEXT))).not.toBeNull()
    expect(cleanText('😀'.repeat(MAX_TEXT + 1))).toBeNull()
  })

  it('refuses empty text and control characters', () => {
    expect(cleanText('')).toBeNull()
    expect(cleanText(' \n\t ')).toBeNull()
    expect(cleanText(`a${String.fromCharCode(0)}b`)).toBeNull()
    expect(cleanText(`a${String.fromCharCode(27)}[0m`)).toBeNull()
    expect(cleanText('a\tb')).toBe('a\tb')
  })
})

describe('checkEntry', () => {
  it('accepts a good entry and gives it back tidied', () => {
    expect(checkEntry({ author: '  Kim   Lee ', password: 'secret1', body: ' hi ' })).toEqual({
      ok: true,
      author: 'Kim Lee',
      password: 'secret1',
      body: 'hi',
    })
  })

  it('says which field is wrong', () => {
    expect(checkEntry({ ...good, author: '' })).toMatchObject({ ok: false, field: 'author' })
    expect(checkEntry({ ...good, author: '<b>x</b>' })).toMatchObject({ ok: false, field: 'author' })
    expect(checkEntry({ ...good, author: 'abcdefghijklm' })).toMatchObject({ ok: false, field: 'author' })
    expect(checkEntry({ ...good, password: 'abc' })).toMatchObject({ ok: false, field: 'password' })
    expect(checkEntry({ ...good, password: 'x'.repeat(33) })).toMatchObject({ ok: false, field: 'password' })
    expect(checkEntry({ ...good, body: '   ' })).toMatchObject({ ok: false, field: 'body' })
    expect(checkEntry({ ...good, body: 'a'.repeat(301) })).toMatchObject({ ok: false, field: 'body' })
  })

  it('accepts the shortest and longest passwords', () => {
    expect(checkEntry({ ...good, password: 'abcd' }).ok).toBe(true)
    expect(checkEntry({ ...good, password: 'x'.repeat(32) }).ok).toBe(true)
  })

  it('tells a text that is too long from one that is empty', () => {
    const long = checkEntry({ ...good, body: 'a'.repeat(301) })
    const empty = checkEntry({ ...good, body: '' })
    expect(long.ok === false && long.message).toContain('300')
    expect(empty.ok === false && empty.message).toContain('입력')
  })
})
