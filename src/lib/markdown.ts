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
