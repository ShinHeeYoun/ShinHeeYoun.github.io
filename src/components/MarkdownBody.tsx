import type { MouseEvent } from 'react'
import { anchorIdFromHref } from '../lib/markdown'

// A post's HTML. The site keeps its page in the part of the address after "#", so a link such as "#1-intro" (a
// table of contents) must not be left to the browser: it would be read as a page address and show an empty page.
// It scrolls to the heading with that id instead.
export default function MarkdownBody({ html, className = '' }: { html: string; className?: string }) {
  function onClick(event: MouseEvent<HTMLDivElement>) {
    const link = (event.target as HTMLElement).closest('a')
    if (!link) return
    const id = anchorIdFromHref(link.getAttribute('href') ?? '')
    if (id === null) return
    event.preventDefault()
    const target = [...event.currentTarget.querySelectorAll('[id]')].find((element) => element.id === id)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div
      className={`markdown-body ${className}`.trim()}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
