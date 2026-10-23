import { describe, it, expect } from 'vitest'
import {
  MAX_HTML_BYTES,
  byteLength,
  composeDraft,
  draftProblem,
  emptyHtmlDraft,
  extractTitle,
  frameDocument,
  htmlToText,
  injectedCss,
  missingFiles,
  parseHtmlPost,
  serializeHtmlPost,
  withCss,
} from './htmlPost'

const PAGE = '<!DOCTYPE html>\n<html>\n<head>\n<title>My Page</title>\n</head>\n<body>\n<h1>Hello</h1>\n</body>\n</html>'

describe('extractTitle', () => {
  it('prefers <title>, then the first <h1>, then the fallback', () => {
    expect(extractTitle(PAGE, 'file')).toBe('My Page')
    expect(extractTitle('<body><h1>Big <em>Head</em></h1></body>', 'file')).toBe('Big Head')
    expect(extractTitle('<p>no heading</p>', 'file')).toBe('file')
  })

  it('reads entities and collapses white space', () => {
    expect(extractTitle('<title>\n  Tom &amp;   Jerry \n</title>', 'x')).toBe('Tom & Jerry')
  })

  it('ignores an empty <title>', () => {
    expect(extractTitle('<title> </title><h1>Real</h1>', 'x')).toBe('Real')
  })
})

describe('htmlToText', () => {
  it('keeps only what a reader sees', () => {
    const html = '<head><title>T</title><style>p{color:red}</style></head><body><script>var secret=1</script><p>Hello <b>big</b> world</p><!-- note --></body>'
    expect(htmlToText(html)).toBe('Hello big world')
  })

  it('separates block elements and reads entities', () => {
    expect(htmlToText('<p>one</p><p>two&nbsp;&amp;&#51;&#x34;</p>')).toBe('one two &34')
  })

  it('leaves out the metadata comment of a stored post', () => {
    expect(htmlToText('<!--post\ntitle: T\ndate: 2026-10-22\n-->\n<p>body</p>')).toBe('body')
  })
})

describe('serializeHtmlPost / parseHtmlPost', () => {
  it('stores title and date in a comment in front of the untouched HTML', () => {
    const raw = serializeHtmlPost({ title: 'My Page', date: '2026-10-22' }, PAGE)
    expect(raw.startsWith('<!--post\ntitle: My Page\ndate: 2026-10-22\n-->\n')).toBe(true)
    expect(raw).toContain(PAGE)
  })

  it('reads back what it wrote', () => {
    const parsed = parseHtmlPost(serializeHtmlPost({ title: 'My Page', date: '2026-10-22' }, PAGE))
    expect(parsed).toEqual({ title: 'My Page', date: '2026-10-22', html: PAGE })
  })

  it('cannot be broken out of by a title that contains the end of a comment', () => {
    const raw = serializeHtmlPost({ title: 'a --> <script>x</script>', date: '2026-10-22' }, '<p>x</p>')
    const parsed = parseHtmlPost(raw)
    expect(parsed.html).toBe('<p>x</p>')
    expect(parsed.title).not.toContain('-->')
  })

  it('refuses a file without the comment', () => {
    expect(() => parseHtmlPost(PAGE)).toThrow()
  })
})

describe('withCss', () => {
  const css = [{ name: 'style.css', text: 'body{color:red}' }]

  it('puts the stylesheet at the end of <head>', () => {
    const out = withCss(PAGE, css)
    expect(out).toContain('<style data-post-css>body{color:red}</style>\n</head>')
  })

  it('creates a <head> when the page has none, and keeps the doctype first', () => {
    expect(withCss('<!doctype html><html><body>x</body></html>', css)).toBe(
      '<!doctype html><html><head><style data-post-css>body{color:red}</style></head><body>x</body></html>',
    )
    expect(withCss('<!doctype html><p>x</p>', css)).toBe('<!doctype html><style data-post-css>body{color:red}</style><p>x</p>')
  })

  it('puts the stylesheet in front of a bare fragment', () => {
    expect(withCss('<p>x</p>', css)).toBe('<style data-post-css>body{color:red}</style><p>x</p>')
  })

  it('joins several files in the order given, each under its name', () => {
    const out = withCss('<p>x</p>', [
      { name: 'a.css', text: 'a{}' },
      { name: 'b.css', text: 'b{}' },
    ])
    expect(out).toContain('/* a.css */\na{}\n\n/* b.css */\nb{}')
  })

  it('replaces the stylesheet it added earlier instead of stacking another', () => {
    const once = withCss(PAGE, css)
    const twice = withCss(once, [{ name: 'new.css', text: 'p{margin:0}' }])
    expect(twice.match(/data-post-css/g)).toHaveLength(1)
    expect(twice).toContain('p{margin:0}')
    expect(twice).not.toContain('color:red')
  })

  it('leaves the page alone when no file is given', () => {
    const once = withCss(PAGE, css)
    expect(withCss(once, [])).toBe(once)
    expect(withCss(PAGE, [])).toBe(PAGE)
  })

  it('drops the <link> to a stylesheet that is now included, whatever folder the link names', () => {
    const html = '<head><link rel="stylesheet" href="./css/style.css?v=2"><link rel="stylesheet" href="https://cdn.example.com/other.css"></head>'
    const out = withCss(html, css)
    expect(out).not.toContain('./css/style.css')
    expect(out).toContain('https://cdn.example.com/other.css')
  })

  it('cannot be closed early by a stylesheet that contains </style>', () => {
    const out = withCss('<p>x</p>', [{ name: 'x.css', text: 'a{}</style><script>alert(1)</script>' }])
    expect(out.match(/<\/style>/g)).toHaveLength(1)
  })
})

describe('injectedCss', () => {
  it('returns the stylesheet that was added, or null', () => {
    expect(injectedCss(withCss(PAGE, [{ name: 'a.css', text: 'a{}' }]))).toContain('a{}')
    expect(injectedCss(PAGE)).toBeNull()
  })
})

describe('missingFiles', () => {
  it('lists local files the page refers to that were not uploaded', () => {
    const html =
      '<link rel="stylesheet" href="style.css"><link rel="stylesheet" href="https://x.test/a.css"><script src="app.js"></script><img src="img/a.png"><img src="data:image/png;base64,AAA"><a href="#top">top</a><a href="other.html">x</a>'
    expect(missingFiles(html, ['style.css'])).toEqual(['app.js', 'img/a.png'])
  })

  it('does not report links that are not files to load', () => {
    expect(missingFiles('<link rel="icon" href="favicon.ico"><a href="x.html">x</a>', [])).toEqual(['favicon.ico'])
  })

  it('reports each file once', () => {
    expect(missingFiles('<img src="a.png"><img src="a.png">', [])).toEqual(['a.png'])
  })
})

describe('frameDocument', () => {
  it('keeps the page as it is and adds the script that reports its height', () => {
    const out = frameDocument(PAGE)
    expect(out.startsWith(PAGE)).toBe(true)
    expect(out.match(/<script>/g)).toHaveLength(1)
    expect(out).toContain('post-frame-height')
  })
})

describe('byteLength', () => {
  it('counts bytes, not characters', () => {
    expect(byteLength('abc')).toBe(3)
    expect(byteLength('한글')).toBe(6)
  })
})

describe('composeDraft / draftProblem', () => {
  const draft = { title: 'T', html: '<p>x</p>', htmlName: 'x.html', css: [] }

  it('composes the page with the chosen stylesheets', () => {
    expect(composeDraft({ ...draft, css: [{ name: 'a.css', text: 'p{}' }] })).toBe('<style data-post-css>p{}</style><p>x</p>')
    expect(composeDraft(emptyHtmlDraft)).toBeNull()
  })

  it('asks for a file first', () => {
    expect(draftProblem(emptyHtmlDraft)).toContain('HTML 파일')
    expect(draftProblem(draft)).toBeNull()
  })

  it('refuses a page that is too large, counting the stylesheets too', () => {
    const big = 'a'.repeat(MAX_HTML_BYTES + 1)
    expect(draftProblem({ ...draft, html: big })).toContain('너무 큽니다')
    expect(draftProblem({ ...draft, css: [{ name: 'a.css', text: big }] })).toContain('너무 큽니다')
  })
})

describe('htmlToText declarations', () => {
  it('leaves out the doctype and XML declaration', () => {
    expect(htmlToText('<?xml version="1.0"?><!DOCTYPE html><html><body>Hello</body></html>')).toBe('Hello')
    expect(htmlToText('<!doctype html>\n<p>x</p>')).toBe('x')
  })
})

describe('frameDocument in-page links', () => {
  it('asks the site to scroll, because the frame is as tall as the page and cannot scroll itself', () => {
    expect(frameDocument('<p>x</p>')).toContain('post-frame-scroll')
  })
})

describe('frameDocument height reports', () => {
  it('answers when the site asks, so that a report sent before the site was listening is not lost', () => {
    expect(frameDocument('<p>x</p>')).toContain('post-frame-ping')
  })
})
