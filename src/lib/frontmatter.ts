export type Frontmatter = {
  title: string
  date: string
}

export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const normalized = raw.replace(/\r\n/g, '\n')
  const match = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    throw new Error('Missing frontmatter block')
  }
  const [, header, body] = match
  const fields: Record<string, string> = {}
  for (const line of header.split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    fields[key] = value
  }
  if (!fields.title || !fields.date) {
    throw new Error('Frontmatter must include title and date')
  }
  return {
    frontmatter: { title: fields.title, date: fields.date },
    body: body.trim(),
  }
}

export function serializeFrontmatter(frontmatter: Frontmatter, body: string): string {
  return `---\ntitle: ${frontmatter.title}\ndate: ${frontmatter.date}\n---\n${body}\n`
}
