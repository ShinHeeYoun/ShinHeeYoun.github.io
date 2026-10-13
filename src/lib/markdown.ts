import { marked } from 'marked'

// Markdown marks removed from ordinary text (everything that is not a fenced code block).
function stripMarks(prose: string): string {
  return prose
    .replace(/^[ \t]*[|:\- \t]*-{3}[|:\- \t]*$/gm, ' ') // table separator rows such as |---|:---:|
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*|__|~~|`/g, '')
    .replace(/\*(\S[^*]*?)\*/g, '$1')
    .replace(/\|/g, ' ')
}

// The text a reader sees, on one line. Code blocks are dropped, or kept exactly as written (without the
// fences) when keepCode is set, because their lines would be damaged by the rules above (a shell pipe
// is not a table cell and a "# comment" is not a heading).
export function toPlainText(markdown: string, keepCode = false): string {
  const parts: string[] = []
  let prose: string[] = []
  let code: string[] | null = null

  const flushProse = () => {
    if (prose.length > 0) parts.push(stripMarks(prose.join('\n')))
    prose = []
  }

  for (const line of markdown.split('\n')) {
    if (/^\s{0,3}```/.test(line)) {
      if (code === null) {
        flushProse()
        code = []
      } else {
        if (keepCode) parts.push(code.join('\n'))
        code = null
      }
    } else if (code === null) {
      prose.push(line)
    } else {
      code.push(line)
    }
  }
  flushProse()
  if (code !== null && keepCode) parts.push(code.join('\n')) // a fence that is never closed runs to the end

  return parts.join(' ').replace(/\s+/g, ' ').trim()
}

export function toExcerpt(body: string, title: string, maxLength = 80): string {
  const text = toPlainText(stripLeadingTitle(body, title))
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text
}

export function stripLeadingTitle(body: string, title: string): string {
  const lines = body.split('\n')
  const firstIndex = lines.findIndex((line) => line.trim() !== '')
  if (firstIndex === -1) return body
  if (lines[firstIndex].trimEnd() !== `# ${title}`) return body

  let next = firstIndex + 1
  while (next < lines.length && lines[next].trim() === '') {
    next += 1
  }
  return lines.slice(next).join('\n')
}

// The text of a heading as a reader sees it: the HTML marked produced for it, without tags and entities.
function visibleText(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

// GitHub's rule for the id of a heading, so that a table of contents written for GitHub works here too: lower case,
// everything except letters, digits, spaces, hyphens and underscores removed, each space turned into a hyphen.
function headingSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}_ -]/gu, '')
    .replace(/ /g, '-')
}

// The HTML of a post body, exactly as the post page and the editor's preview both show it. Headings carry ids, so
// that in-page links (a table of contents) have something to point at. No sanitizing: the text comes only from
// files in this repository, or from the admin's own editor.
export function renderPostHtml(body: string, title: string): string {
  const html = marked.parse(stripLeadingTitle(body, title), { async: false }) as string
  // The ids are added to the finished HTML rather than through marked's renderer, whose arguments differ between
  // versions. Code in a post is escaped by marked, so a "<h2>" written inside a code block is never matched here.
  const used = new Map<string, number>()
  return html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g, (_match, level: string, inner: string) => {
    const base = headingSlug(visibleText(inner))
    const seen = used.get(base) ?? 0
    used.set(base, seen + 1)
    const id = seen === 0 ? base : `${base}-${seen}`
    return `<h${level} id="${id}">${inner}</h${level}>`
  })
}

// The id an in-page link (href="#...") points at, or null for any other link. marked writes non-ASCII ids
// percent-encoded, so they are decoded back to match the ids of the headings.
export function anchorIdFromHref(href: string): string | null {
  if (!href.startsWith('#') || href.length === 1) return null
  const encoded = href.slice(1)
  try {
    return decodeURIComponent(encoded)
  } catch {
    return encoded
  }
}
