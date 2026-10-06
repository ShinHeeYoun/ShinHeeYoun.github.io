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
