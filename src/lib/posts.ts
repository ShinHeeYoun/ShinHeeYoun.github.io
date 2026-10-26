import { parseFrontmatter } from './frontmatter'
import { htmlToText, parseHtmlPost } from './htmlPost'
import { toExcerpt } from './markdown'

export type Post = {
  slug: string
  format: 'md' | 'html' // markdown, or an uploaded HTML page
  path: string // where the file is in the repository
  title: string
  date: string
  excerpt: string
  body: string // the markdown (for a video: its description), or the whole HTML page
  video?: string // set when the post is a YouTube video: its id
}

// A card shows as much of this as fits its box and cuts the rest, so it only has to be longer than any box can show.
const EXCERPT_LENGTH = 600

const files = import.meta.glob('/src/content/posts/*.{md,html}', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const match = path.match(/([^/]+)\.(?:md|html)$/)
  if (!match) {
    throw new Error(`Unexpected post file path: ${path}`)
  }
  return match[1]
}

function parsePost(path: string, raw: string): Post {
  const slug = slugFromPath(path)
  const repoPath = path.replace(/^\//, '')

  if (path.endsWith('.html')) {
    const { title, date, html } = parseHtmlPost(raw)
    const text = htmlToText(html)
    const excerpt = text.slice(0, EXCERPT_LENGTH)
    return { slug, format: 'html', path: repoPath, title, date, excerpt, body: html }
  }

  const { frontmatter, body } = parseFrontmatter(raw)
  return {
    slug,
    format: 'md',
    path: repoPath,
    title: frontmatter.title,
    date: frontmatter.date,
    excerpt: toExcerpt(body, frontmatter.title, Infinity).slice(0, EXCERPT_LENGTH) || (frontmatter.video ? '동영상' : ''),
    body,
    ...(frontmatter.video ? { video: frontmatter.video } : {}),
  }
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function generateSlug(date: string): string {
  const randomId = Math.random().toString(36).slice(2, 8)
  return `${date}-${randomId}`
}

// Today's date in the reader's own time zone, as YYYY-MM-DD (what a new post is dated).
export function getLocalDateString(): string {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}
