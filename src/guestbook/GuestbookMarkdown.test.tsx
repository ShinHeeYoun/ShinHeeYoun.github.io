import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import GuestbookMarkdown, { safeHref } from './GuestbookMarkdown'

const html = (source: string) => renderToStaticMarkup(<GuestbookMarkdown source={source} />)

describe('GuestbookMarkdown', () => {
  it('shows plain text as text', () => {
    expect(html('hello world')).toContain('<p class="my-1">hello world</p>')
  })

  it('applies Markdown: emphasis, code, lists, quotes, headings', () => {
    const out = html('**bold** *italic* ~~gone~~ `code`\n\n- one\n- two\n\n1. first\n\n> quoted\n\n# Title')
    expect(out).toContain('<strong>bold</strong>')
    expect(out).toContain('<em>italic</em>')
    expect(out).toContain('<del>gone</del>')
    expect(out).toContain('>code</code>')
    expect(out).toContain('<ul')
    expect(out).toContain('<li>')
    expect(out).toContain('<ol')
    expect(out).toContain('<blockquote')
    expect(out).toContain('Title')
    expect(out).not.toContain('<h1')
  })

  it('keeps a line break inside a paragraph', () => {
    expect(html('line one\nline two')).toContain('line one<br/>line two')
  })

  it('shows a code block as it was written', () => {
    const out = html('```\nlet a = 1 < 2 && "x"\n```')
    expect(out).toContain('<pre')
    expect(out).toContain('let a = 1 &lt; 2 &amp;&amp; &quot;x&quot;')
  })

  it('writes the special characters of ordinary text as text, once', () => {
    expect(html('a < b & c > d "q"')).toContain('a &lt; b &amp; c &gt; d &quot;q&quot;')
    expect(html('`<b>`')).toContain('&lt;b&gt;')
  })

  describe('what a visitor must not be able to do', () => {
    it('does not let HTML through: a tag is shown as the text that was typed', () => {
      for (const attack of [
        '<script>alert(1)</script>',
        '<img src=x onerror=alert(1)>',
        '<b onmouseover="alert(1)">hi</b>',
        '<iframe src="https://evil.example"></iframe>',
        '<a href="javascript:alert(1)">x</a>',
        '<div>block</div>',
        '<style>body{display:none}</style>',
      ]) {
        const out = html(attack)
        expect(out).not.toMatch(/<(script|img|iframe|style|b|a)[\s>]/)
        expect(out.match(/<div/g)).toHaveLength(1) // only the wrapper
        expect(out).toContain('&lt;')
      }
    })

    it('makes a link only of http, https and mailto addresses', () => {
      expect(html('[site](https://example.com/a?b=1)')).toContain('<a href="https://example.com/a?b=1"')
      expect(html('[site](http://example.com)')).toContain('<a href="http://example.com"')
      expect(html('[me](mailto:a@example.com)')).toContain('<a href="mailto:a@example.com"')
      for (const bad of [
        'javascript:alert(1)',
        'JaVaScRiPt:alert(1)',
        ' javascript:alert(1)',
        'data:text/html,<script>alert(1)</script>',
        'vbscript:msgbox(1)',
        '/relative/path',
        '//evil.example',
        '#anchor',
      ]) {
        const out = html(`[click](${bad.replace(/ /g, '%20')})`)
        expect(out, bad).not.toContain('<a ')
        expect(out, bad).not.toContain('href=')
        expect(out, bad).toContain('click')
      }
    })

    it('opens links in a new tab without handing over the page', () => {
      const out = html('[x](https://example.com)')
      expect(out).toContain('target="_blank"')
      expect(out).toContain('rel="noopener noreferrer nofollow ugc"')
    })

    it('does not load an image: its description is shown instead', () => {
      const out = html('![a cat](https://example.com/cat.png)')
      expect(out).not.toContain('<img')
      expect(out).not.toContain('src=')
      expect(out).toContain('a cat')
    })

    it('shows a table as the text that was typed', () => {
      const out = html('| a | b |\n|---|---|\n| 1 | 2 |')
      expect(out).not.toContain('<table')
      expect(out).toContain('| a | b |')
    })

    it('writes quotes in a link text and in a title as text, not as markup', () => {
      const out = html('[a" onclick="alert(1)](https://example.com "t\\" onfocus=\\"x")')
      // the typed quotes stay inside the link text; the link's own tag carries only what this component put there
      const tag = out.match(/<a [^>]*>/)?.[0] ?? ''
      expect(tag).not.toMatch(/onclick|onfocus/)
      expect(out).toContain('a&quot; onclick=&quot;alert(1)')
    })

    it('survives text nested far deeper than a comment can be', () => {
      expect(() => html('> '.repeat(100) + 'x')).not.toThrow()
      expect(() => html('- '.repeat(100) + 'x')).not.toThrow()
      expect(() => html('*'.repeat(300))).not.toThrow()
    })
  })
})

describe('safeHref', () => {
  it('passes only http, https and mailto', () => {
    expect(safeHref('https://a.example')).toBe('https://a.example')
    expect(safeHref('  https://a.example  ')).toBe('https://a.example')
    expect(safeHref('javascript:alert(1)')).toBeNull()
    expect(safeHref('ftp://a.example')).toBeNull()
    expect(safeHref('')).toBeNull()
    expect(safeHref('example.com')).toBeNull()
  })
})
