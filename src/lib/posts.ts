import { parseFrontmatter } from './frontmatter'

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
    const excerpt =
      body.length > EXCERPT_LENGTH ? `${body.slice(0, EXCERPT_LENGTH)}...` : body
    return {
      slug: slugFromPath(path),
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt,
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function generateSlug(date: string): string {
  const randomId = Math.random().toString(36).slice(2, 8)
  return `${date}-${randomId}`
}
