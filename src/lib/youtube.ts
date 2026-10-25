// YouTube links: which video an address points to, and the addresses made from a video id.

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/
const YOUTUBE_HOSTS = new Set(['youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtube-nocookie.com'])

export function isVideoId(text: string): boolean {
  return VIDEO_ID.test(text)
}

function onlyId(text: string | null | undefined): string | null {
  return text && isVideoId(text) ? text : null
}

// The video id in what the admin pasted: a watch, short, shorts, live or embed address (with or without
// "https://" and "www."), or the 11-character id itself. A playlist or channel address has no single video: null.
export function parseYoutubeUrl(input: string): string | null {
  const text = input.trim()
  if (isVideoId(text)) return text

  let url: URL
  try {
    url = new URL(/^https?:\/\//i.test(text) ? text : `https://${text}`)
  } catch {
    return null
  }
  const host = url.hostname.toLowerCase().replace(/^www\./, '')

  if (host === 'youtu.be') return onlyId(url.pathname.split('/')[1])
  if (!YOUTUBE_HOSTS.has(host)) return null
  if (url.pathname === '/watch') return onlyId(url.searchParams.get('v'))
  const path = /^\/(?:embed|shorts|live|v)\/([^/?#]+)/.exec(url.pathname)
  return path ? onlyId(path[1]) : null
}

// The video's own page, for the "open in a new tab" button.
export function watchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`
}

// A 16:9 picture of the video, shown on the blog list.
export function thumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`
}

// Why the player stopped, from the error code the IFrame Player API reports.
export function playerErrorMessage(code: number): string {
  switch (code) {
    case 2:
      return '영상 주소가 올바르지 않습니다.'
    case 5:
      return '이 브라우저의 플레이어에서 재생할 수 없는 영상입니다.'
    case 100:
      return '영상이 삭제되었거나 비공개입니다.'
    case 101:
    case 150:
      return '이 사이트에서 재생할 수 없는 영상입니다. 퍼가기가 막혀 있거나, 삭제되었거나 비공개일 수 있습니다.'
    default:
      return '영상을 재생하지 못했습니다.'
  }
}
