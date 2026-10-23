// Posts that are an uploaded HTML page. The page is stored untouched except for (a) a comment in front that holds
// the title and date, and (b) a <style data-post-css> block when stylesheets were uploaded with it.

export type HtmlMeta = { title: string; date: string }
export type CssFile = { name: string; text: string }

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (whole, name: string) => {
    if (name[0] === '#') {
      const code = name[1].toLowerCase() === 'x' ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10)
      try {
        return String.fromCodePoint(code)
      } catch {
        return whole
      }
    }
    return ENTITIES[name.toLowerCase()] ?? whole
  })
}

// Tags that sit inside a line of text: removing them must not split a word in two.
const INLINE_TAGS = new Set(['a', 'abbr', 'b', 'code', 'em', 'font', 'i', 'mark', 'small', 'span', 'strong', 'sub', 'sup', 'u'])

// The text a reader sees on the page, on one line: no scripts, styles, comments or tags.
export function htmlToText(html: string): string {
  const text = html
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/<[!?][^>]*>/g, ' ') // <!DOCTYPE ...> and <?xml ...?>
    .replace(/<(script|style|head|noscript|template)\b[\s\S]*?<\/\1\s*>/gi, ' ')
    .replace(/<\/?([a-z][a-z0-9-]*)\b[^>]*>/gi, (_tag, name: string) => (INLINE_TAGS.has(name.toLowerCase()) ? '' : ' '))
  return decodeEntities(text).replace(/\s+/g, ' ').trim()
}

// The page's own title: <title>, else the first <h1>, else the fallback (usually the file name).
export function extractTitle(html: string, fallback: string): string {
  for (const pattern of [/<title\b[^>]*>([\s\S]*?)<\/title\s*>/i, /<h1\b[^>]*>([\s\S]*?)<\/h1\s*>/i]) {
    const found = pattern.exec(html)
    const text = found ? htmlToText(found[1]) : ''
    if (text) return text
  }
  return fallback
}

export function serializeHtmlPost(meta: HtmlMeta, html: string): string {
  // The title sits inside an HTML comment, so it must not be able to end it.
  const title = meta.title.replace(/\s+/g, ' ').replace(/-->/g, '--&gt;').trim()
  return `<!--post\ntitle: ${title}\ndate: ${meta.date}\n-->\n${html}`
}

export function parseHtmlPost(raw: string): HtmlMeta & { html: string } {
  const match = raw.replace(/^﻿/, '').match(/^<!--post\r?\n([\s\S]*?)\r?\n-->\r?\n?([\s\S]*)$/)
  if (!match) throw new Error('Missing post comment')
  const fields: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx !== -1) fields[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
  }
  if (!fields.title || !fields.date) throw new Error('Post comment must include title and date')
  return { title: fields.title, date: fields.date, html: match[2] }
}

const STYLE_BLOCK = /<style data-post-css>[\s\S]*?<\/style>\n?/g
const baseName = (path: string) => (path.split(/[?#]/)[0].split('/').pop() ?? '').toLowerCase()

// The page with the uploaded stylesheets inside it. A <link> to one of them is removed, since the file now travels
// inside the page. An earlier block of uploaded CSS is replaced rather than stacked. No files: the page is unchanged.
export function withCss(html: string, files: CssFile[]): string {
  if (files.length === 0) return html

  const names = new Set(files.map((file) => file.name.toLowerCase()))
  const page = html.replace(STYLE_BLOCK, '').replace(/<link\b[^>]*>/gi, (tag) => {
    const href = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i.exec(tag)
    const target = href ? (href[1] ?? href[2] ?? href[3] ?? '') : ''
    return /\brel\s*=\s*["']?[^"'>]*stylesheet/i.test(tag) && names.has(baseName(target)) ? '' : tag
  })

  const css = (files.length === 1 ? files[0].text : files.map((file) => `/* ${file.name} */\n${file.text}`).join('\n\n'))
    // A stylesheet must not be able to close its own <style> block.
    .replace(/<\/style/gi, '<\\/style')
  const style = `<style data-post-css>${css}</style>`

  if (/<\/head\s*>/i.test(page)) return page.replace(/<\/head\s*>/i, (end) => `${style}\n${end}`)
  const htmlTag = /<html\b[^>]*>/i.exec(page)
  if (htmlTag) {
    const at = htmlTag.index + htmlTag[0].length
    return `${page.slice(0, at)}<head>${style}</head>${page.slice(at)}`
  }
  const doctype = /^\s*<!doctype[^>]*>/i.exec(page)
  if (doctype) return `${page.slice(0, doctype[0].length)}${style}${page.slice(doctype[0].length)}`
  return style + page
}

// The CSS that was uploaded with the page earlier, or null.
export function injectedCss(html: string): string | null {
  const found = /<style data-post-css>([\s\S]*?)<\/style>/.exec(html)
  return found ? found[1] : null
}

// Local files the page asks for (stylesheets, scripts, images) that were not uploaded with it. They cannot be
// loaded from the stored post, so the writer is told about them.
export function missingFiles(html: string, uploaded: string[]): string[] {
  const have = new Set(uploaded.map((name) => name.toLowerCase()))
  const missing: string[] = []
  for (const tag of html.matchAll(/<(link|script|img|source)\b[^>]*>/gi)) {
    const attribute = tag[1].toLowerCase() === 'link' ? 'href' : 'src'
    const found = new RegExp(`\\b${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i').exec(tag[0])
    const ref = found ? (found[1] ?? found[2] ?? found[3] ?? '').trim() : ''
    if (!ref || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(ref)) continue
    if (have.has(baseName(ref)) || missing.includes(ref)) continue
    missing.push(ref)
  }
  return missing
}

// Added to a page shown in the post frame. It reports the page's height to the site, so that the frame can be as
// tall as the page, opens links to other sites in a new tab (the frame itself cannot show them), and asks the site
// to scroll when a link points to a place in the page (the frame is as tall as the page, so it cannot scroll itself).
const FRAME_SCRIPT = `<script>
(function () {
  function report() {
    var height = Math.ceil(document.documentElement.getBoundingClientRect().height);
    parent.postMessage({ type: 'post-frame-height', height: height }, '*');
  }
  if (window.ResizeObserver) {
    var observer = new ResizeObserver(report);
    observer.observe(document.documentElement);
  }
  window.addEventListener('load', report);
  window.addEventListener('resize', report);
  // The site asks once the page has loaded, in case the first reports were sent before the site was listening.
  window.addEventListener('message', function (event) {
    if (event.data === 'post-frame-ping') report();
  });
  report();
  document.addEventListener('click', function (event) {
    var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
    if (!link) return;
    var href = link.getAttribute('href');
    if (/^(https?:)?\\/\\//i.test(href)) {
      event.preventDefault();
      window.open(link.href, '_blank', 'noopener');
    } else if (href.charAt(0) === '#') {
      var id = href.slice(1);
      try { id = decodeURIComponent(id); } catch (e) {}
      var target = id ? (document.getElementById(id) || document.getElementsByName(id)[0]) : document.documentElement;
      if (target) {
        event.preventDefault();
        var top = id ? target.getBoundingClientRect().top + window.pageYOffset : 0;
        parent.postMessage({ type: 'post-frame-scroll', top: top }, '*');
      }
    }
  });
})();
</script>`

export function frameDocument(html: string): string {
  return html + FRAME_SCRIPT
}

// Every post is bundled into the site's script, so one page may not be large.
export const MAX_HTML_BYTES = 1_000_000

export function byteLength(text: string): number {
  return new TextEncoder().encode(text).length
}

// What the writer has chosen so far for an HTML post.
export type HtmlDraft = {
  title: string
  html: string | null // the page (for an edit: the page as it is stored now)
  htmlName: string | null
  css: CssFile[] // stylesheets chosen to go with it
}

export const emptyHtmlDraft: HtmlDraft = { title: '', html: null, htmlName: null, css: [] }

// The page as it will be stored: the HTML with the chosen stylesheets inside it.
export function composeDraft(draft: HtmlDraft): string | null {
  return draft.html === null ? null : withCss(draft.html, draft.css)
}

// Why this draft cannot be published, or null.
export function draftProblem(draft: HtmlDraft): string | null {
  const page = composeDraft(draft)
  if (page === null) return 'HTML 파일을 선택하세요.'
  if (byteLength(page) > MAX_HTML_BYTES) return `파일이 너무 큽니다. HTML과 CSS를 합쳐 ${Math.floor(MAX_HTML_BYTES / 1000)}KB까지 올릴 수 있어요.`
  return null
}
