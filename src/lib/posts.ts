import { parseFrontmatter } from './frontmatter'
import { toExcerpt } from './markdown'

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string
}

const EXCERPT_LENGTH = 80

const files = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const match = path.match(/([^/]+)\.md$/)
  if (!match) {
    throw new Error(`Unexpected post file path: ${path}`)
  }
  return match[1]
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { frontmatter, body } = parseFrontmatter(raw)
    return {
      slug: slugFromPath(path),
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: toExcerpt(body, frontmatter.title, EXCERPT_LENGTH),
      body,
    }
  })
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
