import { describe, it, expect, vi } from 'vitest'
import { describeTimeDifference, describeWeather, fetchWeather, formatLocalTime, parseWeather, weatherUrl } from './weather'

const answer = {
  latitude: 37.57,
  longitude: 126.98,
  utc_offset_seconds: 32400,
  timezone: 'Asia/Seoul',
  current: { time: '2026-10-24T15:00', temperature_2m: 18.2, relative_humidity_2m: 55, weather_code: 3, wind_speed_10m: 2.1 },
}

describe('weatherUrl', () => {
  it('asks Open-Meteo for the current weather at the point, in metres per second, in the point\'s own time zone', () => {
    const url = new URL(weatherUrl({ lat: 37.5665, lng: 126.978 }))
    expect(url.origin).toBe('https://api.open-meteo.com')
    expect(url.pathname).toBe('/v1/forecast')
    expect(url.searchParams.get('latitude')).toBe('37.5665')
    expect(url.searchParams.get('longitude')).toBe('126.978')
    expect(url.searchParams.get('timezone')).toBe('auto')
    expect(url.searchParams.get('wind_speed_unit')).toBe('ms')
    expect(url.searchParams.get('current')).toContain('temperature_2m')
  })

  it('rounds the numbers, so that a very long click position does not make a very long address', () => {
    const url = new URL(weatherUrl({ lat: 1.123456789, lng: -2.987654321 }))
    expect(url.searchParams.get('latitude')).toBe('1.1235')
    expect(url.searchParams.get('longitude')).toBe('-2.9877')
  })
})

describe('parseWeather', () => {
  it('reads a good answer', () => {
    expect(parseWeather(answer)).toEqual({
      timeZone: 'Asia/Seoul',
      utcOffsetSeconds: 32400,
      temperature: 18.2,
      humidity: 55,
      windSpeed: 2.1,
      code: 3,
    })
  })

  it('refuses an answer that is not shaped as expected', () => {
    for (const bad of [
      null,
      'x',
      [],
      {},
      { ...answer, timezone: '' },
      { ...answer, timezone: 5 },
      { ...answer, utc_offset_seconds: '32400' },
      { ...answer, current: null },
      { ...answer, current: {} },
      { ...answer, current: { ...answer.current, temperature_2m: null } },
      { ...answer, current: { ...answer.current, weather_code: 'x' } },
      { ...answer, current: { ...answer.current, wind_speed_10m: NaN } },
    ]) {
      expect(parseWeather(bad)).toBeNull()
    }
  })
})

describe('fetchWeather', () => {
  const reply = (status: number, body: unknown) => vi.fn(async () => new Response(JSON.stringify(body), { status }))

  it('gives the weather the service reports', async () => {
    const weather = await fetchWeather({ lat: 37.5, lng: 127 }, reply(200, answer))
    expect(weather.temperature).toBe(18.2)
  })

  it('fails when the service refuses, or answers with something else', async () => {
    await expect(fetchWeather({ lat: 0, lng: 0 }, reply(429, {}))).rejects.toThrow(/429/)
    await expect(fetchWeather({ lat: 0, lng: 0 }, reply(200, { nothing: true }))).rejects.toThrow()
  })

  // A browser refuses fetch called with any other `this` ("Illegal invocation").
  it('calls the global fetch without anything as its this', async () => {
    let seenThis: unknown = 'not called'
    const original = globalThis.fetch
    globalThis.fetch = function (this: unknown) {
      seenThis = this
      return Promise.resolve(new Response(JSON.stringify(answer), { status: 200 }))
    } as typeof fetch
    try {
      await fetchWeather({ lat: 1, lng: 1 })
    } finally {
      globalThis.fetch = original
    }
    expect(seenThis === undefined || seenThis === globalThis).toBe(true)
  })
})

describe('describeWeather', () => {
  it('puts the main weather codes into words', () => {
    expect(describeWeather(0).text).toBe('맑음')
    expect(describeWeather(3).text).toBe('흐림')
    expect(describeWeather(63).text).toBe('비')
    expect(describeWeather(73).text).toBe('눈')
    expect(describeWeather(95).text).toBe('뇌우')
  })

  it('has a word and a symbol for every code Open-Meteo can send', () => {
    const codes = [0, 1, 2, 3, 45, 48, 51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 71, 73, 75, 77, 80, 81, 82, 85, 86, 95, 96, 99]
    for (const code of codes) {
      const { text, icon } = describeWeather(code)
      expect(text, String(code)).not.toBe('알 수 없음')
      expect(icon, String(code)).not.toBe('')
    }
  })

  it('does not break on a code it does not know', () => {
    expect(describeWeather(123).text).toBe('알 수 없음')
  })
})

describe('formatLocalTime', () => {
  const moment = new Date('2026-10-24T06:00:00Z')

  it('shows the time in the zone, not in the computer\'s own', () => {
    expect(formatLocalTime(moment, 'Asia/Seoul')).toContain('오후 3:00:00') // 06:00 UTC is 15:00 in Seoul
    expect(formatLocalTime(moment, 'America/New_York')).toContain('오전 2:00:00') // daylight time: 4 hours behind UTC
    expect(formatLocalTime(moment, 'UTC')).toContain('오전 6:00:00')
  })

  it('shows the date of that zone, which can differ from the date elsewhere', () => {
    const lateInUtc = new Date('2026-10-24T20:00:00Z')
    expect(formatLocalTime(lateInUtc, 'Asia/Seoul')).toContain('25일') // already the next day there
    expect(formatLocalTime(lateInUtc, 'UTC')).toContain('24일')
  })

  it('gives nothing for a zone that does not exist', () => {
    expect(formatLocalTime(moment, 'Not/AZone')).toBe('')
    expect(formatLocalTime(moment, '')).toBe('')
  })
})

describe('describeTimeDifference', () => {
  it('says how far a clock is from the viewer\'s own', () => {
    expect(describeTimeDifference(32400, 32400)).toBe('나와 같은 시각')
    expect(describeTimeDifference(32400, 0)).toBe('나보다 9시간 빠름')
    expect(describeTimeDifference(-14400, 32400)).toBe('나보다 13시간 느림')
  })

  it('shows half hours and quarter hours', () => {
    expect(describeTimeDifference(19800, 32400)).toBe('나보다 3시간 30분 느림') // India
    expect(describeTimeDifference(20700, 32400)).toBe('나보다 3시간 15분 느림') // Nepal
    expect(describeTimeDifference(34200, 0)).toBe('나보다 9시간 30분 빠름')
    expect(describeTimeDifference(1800, 0)).toBe('나보다 30분 빠름')
  })
})
