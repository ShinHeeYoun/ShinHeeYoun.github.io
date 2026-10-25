// Loads YouTube's IFrame Player API into the page, once.

export type YouTubePlayer = {
  destroy(): void
  getIframe(): HTMLIFrameElement
}

export type YouTubePlayerOptions = {
  videoId: string
  host?: string
  width?: string | number
  height?: string | number
  playerVars?: Record<string, string | number>
  events?: {
    onReady?: (event: { target: YouTubePlayer }) => void
    onError?: (event: { data: number }) => void
  }
}

export type YouTubeApi = {
  Player: new (element: HTMLElement, options: YouTubePlayerOptions) => YouTubePlayer
}

const SCRIPT_URL = 'https://www.youtube.com/iframe_api'
const LOAD_TIMEOUT_MS = 15000
let loading: Promise<YouTubeApi> | null = null

// Resolves when the API is ready. Rejects when the script cannot be reached (offline, or blocked by an ad blocker)
// or does not answer in time; a later call tries again.
export function loadYouTubeApi(): Promise<YouTubeApi> {
  const w = window as unknown as { YT?: Partial<YouTubeApi>; onYouTubeIframeAPIReady?: () => void }
  if (w.YT?.Player) return Promise.resolve(w.YT as YouTubeApi)
  if (loading) return loading

  loading = new Promise<YouTubeApi>((resolve, reject) => {
    const script = document.createElement('script')
    const fail = () => {
      loading = null
      script.remove()
      reject(new Error('The YouTube player script could not be loaded'))
    }
    const timer = window.setTimeout(fail, LOAD_TIMEOUT_MS)
    const earlier = w.onYouTubeIframeAPIReady // keep a callback somebody else already set
    w.onYouTubeIframeAPIReady = () => {
      window.clearTimeout(timer)
      earlier?.()
      resolve(w.YT as YouTubeApi)
    }
    script.src = SCRIPT_URL
    script.async = true
    script.onerror = () => {
      window.clearTimeout(timer)
      fail()
    }
    document.head.appendChild(script)
  })
  return loading
}
