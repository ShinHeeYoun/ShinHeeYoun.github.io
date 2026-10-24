import { Fragment, type ReactNode } from 'react'
import { marked, type Token, type Tokens } from 'marked'

// A guestbook entry, written in Markdown by anyone, shown as React elements.
//
// marked only reads the text into tokens; the page is built from those tokens here, never from marked's HTML. Text
// therefore always reaches the page as text, and a visitor cannot add HTML, a script, an event handler or an image:
// - raw HTML in an entry (a block or a tag) is shown as the text that was typed;
// - a link is a link only for http, https and mailto addresses, and opens in a new tab with rel="noopener nofollow ugc";
// - an image is not loaded (it could report who looks at the page): its description is shown as text;
// - a table is shown as the text that was typed.
const MAX_DEPTH = 8

// The few entities marked's tokenizer writes into the text it reads (it escapes & < > " '). Decoded here because
// React escapes text itself.
function decode(text: string): string {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

// Only these addresses may be followed. Anything else (javascript:, data:, vbscript:, a relative path) is plain text.
export function safeHref(href: string): string | null {
  const trimmed = href.trim()
  try {
    const url = new URL(trimmed)
    return ['http:', 'https:', 'mailto:'].includes(url.protocol) ? trimmed : null
  } catch {
    return null
  }
}

function inline(tokens: Token[] | undefined, depth: number): ReactNode[] {
  return (tokens ?? []).map((token, i) => <Fragment key={i}>{inlineToken(token, depth)}</Fragment>)
}

function inlineToken(token: Token, depth: number): ReactNode {
  if (depth > MAX_DEPTH) return token.raw
  switch (token.type) {
    case 'text':
    case 'escape': {
      const text = token as Tokens.Text
      // A text token can hold inline tokens of its own (inside a list item).
      return text.tokens ? inline(text.tokens, depth + 1) : decode(text.text)
    }
    case 'strong':
      return <strong>{inline((token as Tokens.Strong).tokens, depth + 1)}</strong>
    case 'em':
      return <em>{inline((token as Tokens.Em).tokens, depth + 1)}</em>
    case 'del':
      return <del>{inline((token as Tokens.Del).tokens, depth + 1)}</del>
    case 'codespan':
      return <code className="rounded bg-muted px-1 font-mono text-[0.9em]">{decode((token as Tokens.Codespan).text)}</code>
    case 'br':
      return <br />
    case 'link': {
      const link = token as Tokens.Link
      const href = safeHref(link.href)
      const children = inline(link.tokens, depth + 1)
      return href === null ? (
        <>{children}</>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer nofollow ugc" className="font-medium text-primary underline underline-offset-2">
          {children}
        </a>
      )
    }
    case 'image':
      return decode((token as Tokens.Image).text)
    default:
      // html tags, and anything this does not know: the text as typed
      return token.raw
  }
}

function block(token: Token, depth: number): ReactNode {
  if (depth > MAX_DEPTH) return <p className="my-1 whitespace-pre-wrap">{token.raw}</p>
  switch (token.type) {
    case 'space':
      return null
    case 'paragraph':
      return <p className="my-1">{inline((token as Tokens.Paragraph).tokens, depth + 1)}</p>
    case 'text': {
      const text = token as Tokens.Text
      return <p className="my-1">{text.tokens ? inline(text.tokens, depth + 1) : decode(text.text)}</p>
    }
    case 'heading': {
      const heading = token as Tokens.Heading
      // The size of a heading is kept small: this is a comment, not a page.
      return <p className={`my-1 font-semibold ${heading.depth <= 2 ? 'text-base' : 'text-sm'}`}>{inline(heading.tokens, depth + 1)}</p>
    }
    case 'blockquote':
      return (
        <blockquote className="my-1 border-l-4 border-highlight pl-3 text-muted-foreground">
          {blocks((token as Tokens.Blockquote).tokens, depth + 1)}
        </blockquote>
      )
    case 'code':
      return (
        <pre className="my-1 overflow-x-auto rounded-md bg-muted p-2 font-mono text-[0.9em]">
          <code>{(token as Tokens.Code).text}</code>
        </pre>
      )
    case 'hr':
      return <hr className="my-2" />
    case 'list': {
      const list = token as Tokens.List
      const items = list.items.map((item, i) => <li key={i}>{blocks(item.tokens, depth + 1)}</li>)
      return list.ordered ? (
        <ol start={typeof list.start === 'number' ? list.start : 1} className="my-1 list-decimal pl-6">
          {items}
        </ol>
      ) : (
        <ul className="my-1 list-disc pl-6">{items}</ul>
      )
    }
    default:
      // html, table, and anything this does not know: the text as typed
      return <p className="my-1 whitespace-pre-wrap">{token.raw.trim()}</p>
  }
}

function blocks(tokens: Token[], depth: number): ReactNode[] {
  return tokens.map((token, i) => <Fragment key={i}>{block(token, depth)}</Fragment>)
}

export default function GuestbookMarkdown({ source }: { source: string }) {
  // A line break inside a paragraph is a line break, as people write in a comment box.
  const tokens = marked.lexer(source, { gfm: true, breaks: true })
  return <div className="break-words text-sm leading-relaxed">{blocks(tokens, 0)}</div>
}
