import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { frameDocument } from '../lib/htmlPost'

const MIN_HEIGHT = 200
const TOP_BAR = 80 // room left for the sticky top bar when scrolling to a place in the page
const MAX_HEIGHT = 30000 // a page that sizes itself to the window (height: 100vh) would otherwise keep growing

// An uploaded HTML page, shown inside the post. The frame is sandboxed without "allow-same-origin", so the page's
// scripts run but cannot reach this site: not its storage (where the admin token lives), not its cookies, not its
// pages. The page reports its own height (see frameDocument), so the frame is as tall as the page and the post
// scrolls as one.
export default function HtmlFrame({ html, title }: { html: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(MIN_HEIGHT)
  const document_ = useMemo(() => frameDocument(html), [html])

  // A layout effect, so the site is listening before the frame can load and report.
  useLayoutEffect(() => {
    setHeight(MIN_HEIGHT)
    function onMessage(event: MessageEvent) {
      if (event.source !== frame.current?.contentWindow) return
      const data = event.data as { type?: unknown; height?: unknown; top?: unknown } | null
      if (!data || typeof data !== 'object') return
      if (data.type === 'post-frame-height' && typeof data.height === 'number' && Number.isFinite(data.height)) {
        setHeight(Math.min(MAX_HEIGHT, Math.max(MIN_HEIGHT, Math.ceil(data.height))))
      } else if (data.type === 'post-frame-scroll' && typeof data.top === 'number' && Number.isFinite(data.top)) {
        // A link inside the page: scroll the site so that the place it points to is just under the top bar.
        const frameTop = frame.current ? frame.current.getBoundingClientRect().top + window.scrollY : 0
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: Math.max(0, frameTop + data.top - TOP_BAR), behavior: reduceMotion ? 'auto' : 'smooth' })
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [document_])

  return (
    <iframe
      ref={frame}
      title={title}
      srcDoc={document_}
      onLoad={() => frame.current?.contentWindow?.postMessage('post-frame-ping', '*')}
      sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
      style={{ height }}
      className="block w-full rounded-md border border-border bg-white"
    />
  )
}
