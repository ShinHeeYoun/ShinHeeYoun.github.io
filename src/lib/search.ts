import type { Post } from './posts'
import { stripLeadingTitle, toPlainText } from './markdown'

export type Match = { index: number; length: number }
// A piece of text with the matched part in the middle, so the page can paint the match red.
export type Highlighted = { before: string; match: string; after: string }
export type SearchResult = {
  post: Post
  title: Highlighted | null // set when the title matched
  snippet: Highlighted | null // the part of the body around the first match; null when only the title matched
}

const SNIPPET_RADIUS = 40 // characters kept on each side of the match

const escapeRegExp = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const collapse = (text: string) => text.replace(/\s+/g, ' ').trim()

// The first place the query appears, ignoring case. The query is plain text, never a pattern, so
// characters such as ( or * can be searched for.
export function findFirst(text: string, query: string): Match | null {
  if (query === '') return null
  const found = new RegExp(escapeRegExp(query), 'i').exec(text)
  return found ? { index: found.index, length: found[0].length } : null
}

// Cuts the text around a match so it can be shown as a short preview, with "..." where text was left out.
// The cut is moved to a space when there is one nearby, so that words are not split in half.
export function makeSnippet(text: string, hit: Match, radius = SNIPPET_RADIUS): Highlighted {
  const matchEnd = hit.index + hit.length
  let start = Math.max(0, hit.index - radius)
  let end = Math.min(text.length, matchEnd + radius)

  if (start > 0 && text[start - 1] !== ' ') {
    const space = text.indexOf(' ', start)
    if (space !== -1 && space < hit.index) start = space + 1
  }
  if (end < text.length) {
    const space = text.lastIndexOf(' ', end)
    if (space > matchEnd) end = space
  }

  return {
    before: (start > 0 ? '...' : '') + text.slice(start, hit.index),
    match: text.slice(hit.index, matchEnd),
    after: text.slice(matchEnd, end) + (end < text.length ? '...' : ''),
  }
}

function split(text: string, hit: Match): Highlighted {
  return {
    before: text.slice(0, hit.index),
    match: text.slice(hit.index, hit.index + hit.length),
    after: text.slice(hit.index + hit.length),
  }
}

// What each post looks like to a reader (code blocks included), worked out once per post.
const visibleText = new WeakMap<Post, string>()

function bodyText(post: Post): string {
  let text = visibleText.get(post)
  if (text === undefined) {
    text = toPlainText(stripLeadingTitle(post.body, post.title), true)
    visibleText.set(post, text)
  }
  return text
}

// Posts whose title or body contains the query. Title matches come first; inside each group the order of
// `posts` is kept, so with newest-first input the newest come first.
export function searchPosts(posts: Post[], rawQuery: string): SearchResult[] {
  const query = collapse(rawQuery)
  if (query === '') return []

  const titleMatches: SearchResult[] = []
  const bodyMatches: SearchResult[] = []
  for (const post of posts) {
    const title = collapse(post.title)
    const inTitle = findFirst(title, query)
    const text = bodyText(post)
    const inBody = findFirst(text, query)
    if (!inTitle && !inBody) continue

    const result: SearchResult = {
      post,
      title: inTitle ? split(title, inTitle) : null,
      snippet: inBody ? makeSnippet(text, inBody) : null,
    }
    ;(inTitle ? titleMatches : bodyMatches).push(result)
  }
  return [...titleMatches, ...bodyMatches]
}
