import { describe, expect, it } from 'vitest'
import { isVideoId, parseYoutubeUrl, playerErrorMessage, thumbnailUrl, watchUrl } from './youtube'

const ID = 'dQw4w9WgXcQ'

describe('parseYoutubeUrl', () => {
  it.each([
    [`https://www.youtube.com/watch?v=${ID}`],
    [`https://youtube.com/watch?v=${ID}&t=42s`],
    [`https://www.youtube.com/watch?list=PL123&v=${ID}`],
    [`https://m.youtube.com/watch?v=${ID}`],
    [`https://music.youtube.com/watch?v=${ID}&si=abc`],
    [`https://youtu.be/${ID}`],
    [`https://youtu.be/${ID}?si=abc`],
    [`https://www.youtube.com/shorts/${ID}`],
    [`https://www.youtube.com/embed/${ID}`],
    [`https://www.youtube-nocookie.com/embed/${ID}`],
    [`https://www.youtube.com/live/${ID}?feature=share`],
    [`youtube.com/watch?v=${ID}`],
    [`  https://youtu.be/${ID}  `],
    [ID],
  ])('finds the video in %s', (input) => {
    expect(parseYoutubeUrl(input)).toBe(ID)
  })

  it.each([
    [''],
    ['hello'],
    ['https://www.youtube.com/playlist?list=PL123'],
    ['https://www.youtube.com/@somechannel'],
    ['https://www.youtube.com/watch'],
    ['https://www.youtube.com/watch?v=short'],
    [`https://www.youtube.com.evil.example/watch?v=${ID}`],
    [`https://evil.example/watch?v=${ID}`],
    [`https://notyoutube.com/watch?v=${ID}`],
    [`https://youtu.be/${ID}extra`],
    ['https://www.youtube.com/watch?v=<script>alert(1)</sc>'],
  ])('rejects %s', (input) => {
    expect(parseYoutubeUrl(input)).toBeNull()
  })
})

describe('addresses made from an id', () => {
  it('builds the watch page and the thumbnail', () => {
    expect(watchUrl(ID)).toBe(`https://www.youtube.com/watch?v=${ID}`)
    expect(thumbnailUrl(ID)).toBe(`https://i.ytimg.com/vi/${ID}/mqdefault.jpg`)
  })

  it('recognises a video id', () => {
    expect(isVideoId(ID)).toBe(true)
    expect(isVideoId('too-short')).toBe(false)
    expect(isVideoId(`${ID}x`)).toBe(false)
    expect(isVideoId('has space!')).toBe(false)
  })
})

describe('playerErrorMessage', () => {
  it('explains the codes of the IFrame Player API', () => {
    expect(playerErrorMessage(100)).toContain('삭제')
    expect(playerErrorMessage(101)).toContain('퍼가기')
    expect(playerErrorMessage(150)).toBe(playerErrorMessage(101))
    expect(playerErrorMessage(2)).toContain('주소')
    expect(playerErrorMessage(999)).toContain('재생하지 못했습니다')
  })
})
