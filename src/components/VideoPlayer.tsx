import { ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { playerErrorMessage, watchUrl } from '../lib/youtube'
import { loadYouTubeApi } from '../lib/youtubeApi'

const LOAD_FAILED = 'YouTube 플레이어를 불러오지 못했습니다. 인터넷 연결이나 광고 차단 프로그램을 확인하거나, 아래 버튼으로 YouTube에서 직접 보세요.'

// A YouTube video in the 16:9 frame of the IFrame Player API, with a button that opens it on YouTube in a new tab.
// The video does not start by itself: browsers do not allow sound before the reader has pressed something.
export default function VideoPlayer({ id, title }: { id: string; title: string }) {
  const box = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const container = box.current
    if (!container) return
    setError(null)
    // The player replaces the element it is given with its own frame, so React must not own that element.
    const slot = document.createElement('div')
    container.appendChild(slot)
    let player: { destroy(): void } | null = null
    let stopped = false

    loadYouTubeApi()
      .then((api) => {
        if (stopped) return
        player = new api.Player(slot, {
          videoId: id,
          host: 'https://www.youtube-nocookie.com',
          width: '100%',
          height: '100%',
          playerVars: { rel: 0, playsinline: 1 },
          events: {
            onReady: (event) => {
              event.target.getIframe().title = title
            },
            onError: (event) => setError(playerErrorMessage(event.data)),
          },
        })
      })
      .catch(() => {
        if (!stopped) setError(LOAD_FAILED)
      })

    return () => {
      stopped = true
      player?.destroy()
      slot.remove()
    }
  }, [id, title])

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-sm">
        <div ref={box} className="absolute inset-0 [&_iframe]:h-full [&_iframe]:w-full" />
        {error && (
          <p role="alert" className="absolute inset-0 flex items-center justify-center bg-muted p-6 text-center text-sm text-muted-foreground">
            {error}
          </p>
        )}
      </div>
      <div className="mt-3 flex justify-end">
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <a href={watchUrl(id)} target="_blank" rel="noopener noreferrer">
            <ExternalLink />
            새 탭에서 열기
          </a>
        </Button>
      </div>
    </div>
  )
}
