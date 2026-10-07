import { describe, it, expect } from 'vitest'
import type { Post } from './posts'
import { findFirst, makeSnippet, searchPosts } from './search'

function post(slug: string, title: string, body: string, date = '2026-10-01'): Post {
  return { slug, title, date, excerpt: '', body }
}

describe('findFirst', () => {
  it('finds the first match and ignores case', () => {
    expect(findFirst('Use Tomcat and tomcat', 'tomcat')).toEqual({ index: 4, length: 6 })
  })

  it('works with Korean text', () => {
    expect(findFirst('맛있는 과자와 과자', '과자')).toEqual({ index: 4, length: 2 })
  })

  it('treats the query as plain text, not as a pattern', () => {
    expect(findFirst('a (b) c', '(b)')).toEqual({ index: 2, length: 3 })
    expect(findFirst('x.*y', '.*')).toEqual({ index: 1, length: 2 })
    expect(findFirst('abc', '.')).toBeNull()
    expect(findFirst('a+b', 'a+')).toEqual({ index: 0, length: 2 })
  })

  it('returns null when there is no match or no query', () => {
    expect(findFirst('hello', 'xyz')).toBeNull()
    expect(findFirst('hello', '')).toBeNull()
  })
})

describe('makeSnippet', () => {
  it('shows the whole text without ellipses when it is short', () => {
    expect(makeSnippet('hello world', { index: 0, length: 5 }, 40)).toEqual({
      before: '',
      match: 'hello',
      after: ' world',
    })
  })

  it('cuts around a match in the middle and adds ellipses on both sides, on word boundaries', () => {
    const text = 'aaa bbb ccc ddd eee fff ggg'
    expect(makeSnippet(text, { index: 12, length: 3 }, 5)).toEqual({
      before: '...ccc ',
      match: 'ddd',
      after: ' eee...',
    })
  })

  it('only adds an ellipsis on the side that was cut', () => {
    const text = 'start of a long line with the match'
    const snippet = makeSnippet(text, { index: text.indexOf('match'), length: 5 }, 40)
    expect(snippet.before).toBe('start of a long line with the ')
    expect(snippet.after).toBe('')
  })

  it('keeps a long text to about the window size', () => {
    const text = `${'word '.repeat(200)}TARGET${' word'.repeat(200)}`
    const snippet = makeSnippet(text, { index: text.indexOf('TARGET'), length: 6 }, 40)
    expect(snippet.before.startsWith('...')).toBe(true)
    expect(snippet.after.endsWith('...')).toBe(true)
    expect(snippet.before.length + snippet.match.length + snippet.after.length).toBeLessThan(100)
  })

  it('cuts inside a word when the text has no spaces to cut at', () => {
    const text = `${'x'.repeat(100)}TARGET${'y'.repeat(100)}`
    const snippet = makeSnippet(text, { index: 100, length: 6 }, 10)
    expect(snippet.before).toBe(`...${'x'.repeat(10)}`)
    expect(snippet.after).toBe(`${'y'.repeat(10)}...`)
  })
})

describe('searchPosts', () => {
  const posts = [
    post('new', '새 글', '본문에 과자가 있습니다.', '2026-10-07'),
    post('title', '과자 만들기', '밀가루와 설탕', '2026-10-06'),
    post('old', '옛날 글', '아주 오래된 이야기 속에 과자 이야기가 있다', '2026-10-05'),
    post('none', '관계 없음', '전혀 다른 내용', '2026-10-04'),
  ]

  it('returns nothing for an empty or blank query', () => {
    expect(searchPosts(posts, '')).toEqual([])
    expect(searchPosts(posts, '   ')).toEqual([])
  })

  it('finds posts by title or body and leaves the others out', () => {
    expect(searchPosts(posts, '과자').map((r) => r.post.slug)).toEqual(['title', 'new', 'old'])
  })

  it('lists title matches first, then body matches in the original (newest first) order', () => {
    const slugs = searchPosts(posts, '과자').map((r) => r.post.slug)
    expect(slugs[0]).toBe('title')
    expect(slugs.slice(1)).toEqual(['new', 'old'])
  })

  it('highlights the title and has no snippet when only the title matches', () => {
    const result = searchPosts(posts, '과자').find((r) => r.post.slug === 'title')!
    expect(result.title).toEqual({ before: '', match: '과자', after: ' 만들기' })
    expect(result.snippet).toBeNull()
  })

  it('shows the part of the body that matched, and no title highlight, when only the body matches', () => {
    const result = searchPosts(posts, '과자').find((r) => r.post.slug === 'new')!
    expect(result.title).toBeNull()
    expect(result.snippet).toEqual({ before: '본문에 ', match: '과자', after: '가 있습니다.' })
  })

  it('pulls a match from the middle of a long body into the snippet', () => {
    const body = `${'앞부분 문장입니다. '.repeat(30)}여기에 과자가 있습니다. ${'뒷부분 문장입니다. '.repeat(30)}`
    const [result] = searchPosts([post('long', '긴 글', body)], '과자')
    expect(result.snippet!.before.startsWith('...')).toBe(true)
    expect(result.snippet!.match).toBe('과자')
    expect(result.snippet!.after.endsWith('...')).toBe(true)
    expect(result.snippet!.before.length + result.snippet!.after.length).toBeLessThan(120)
  })

  it('uses the first match only', () => {
    const [result] = searchPosts([post('p', '제목', '과자 하나 그리고 과자 둘')], '과자')
    expect(result.snippet!.before).toBe('')
    expect(result.snippet!.after).toBe(' 하나 그리고 과자 둘')
  })

  it('can highlight both the title and the body', () => {
    const [result] = searchPosts([post('p', '과자 이야기', '오늘 과자를 먹었다')], '과자')
    expect(result.title!.match).toBe('과자')
    expect(result.snippet!.match).toBe('과자')
  })

  it('ignores case and keeps the original spelling in the highlight', () => {
    const [result] = searchPosts([post('p', '제목', 'Apache Tomcat is a server')], 'tomcat')
    expect(result.snippet!.match).toBe('Tomcat')
  })

  it('trims the query and treats runs of spaces like the single spaces of the visible text', () => {
    expect(searchPosts([post('p', '제목', '서버는 Tomcat   9 입니다')], '  Tomcat  9  ')).toHaveLength(1)
  })

  it('searches the text a reader sees: bold marks do not get in the way, link addresses are not searched', () => {
    const bold = searchPosts([post('p', '제목', '맛있는 **과자**입니다')], '과자')
    expect(bold[0].snippet).toEqual({ before: '맛있는 ', match: '과자', after: '입니다' })
    expect(searchPosts([post('p', '제목', '[문서](https://example.com/snack)')], 'snack')).toEqual([])
  })

  it('searches inside code blocks too, without mangling the code', () => {
    const body = '실행:\n\n```bash\nps -ef | grep java\njstack -l 1234\n```'
    const [result] = searchPosts([post('p', '제목', body)], 'jstack -l')
    expect(result.snippet!.match).toBe('jstack -l')
    expect(searchPosts([post('p', '제목', body)], '| grep')).toHaveLength(1)
  })

  it('does not count the heading that repeats the title as a body match', () => {
    const [result] = searchPosts([post('p', '과자', '# 과자\n\n내용')], '과자')
    expect(result.title!.match).toBe('과자')
    expect(result.snippet).toBeNull()
  })

  it('treats special characters in the query literally', () => {
    expect(searchPosts([post('p', '제목', 'call foo(bar) now')], '(')).toHaveLength(1)
    expect(searchPosts([post('p', '제목', 'abc')], '.*')).toEqual([])
  })
})
