export function toExcerpt(body: string, title: string, maxLength = 80): string {
  const text = stripLeadingTitle(body, title)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s*(?:[-*+]|\d+\.)\s+/gm, '')
    .replace(/^\s*>\s?/gm, '')
    .replace(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/gm, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*|__|~~|`/g, '')
    .replace(/\*(\S[^*]*?)\*/g, '$1')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
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
