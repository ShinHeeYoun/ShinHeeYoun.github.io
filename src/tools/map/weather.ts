// The weather and the local time at a point, from Open-Meteo (https://open-meteo.com): a free weather service that
// needs no key. Weather data by Open-Meteo.com, licensed CC BY 4.0, free for non-commercial use.

import type { LatLng } from './places'

export type Weather = {
  timeZone: string // like "Asia/Seoul"
  utcOffsetSeconds: number
  temperature: number // degrees Celsius
  humidity: number // percent
  windSpeed: number // metres per second
  code: number // WMO weather code
}

const round4 = (n: number) => Math.round(n * 10000) / 10000

export function weatherUrl(point: LatLng): string {
  const params = new URLSearchParams({
    latitude: String(round4(point.lat)),
    longitude: String(round4(point.lng)),
    current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
    wind_speed_unit: 'ms',
    timezone: 'auto',
  })
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`
}

// What Open-Meteo answered, or null if it is not shaped as expected. Whatever arrives is checked, never trusted.
export function parseWeather(raw: unknown): Weather | null {
  if (typeof raw !== 'object' || raw === null) return null
  const { timezone, utc_offset_seconds: offset, current } = raw as Record<string, unknown>
  if (typeof timezone !== 'string' || timezone === '' || typeof offset !== 'number' || !Number.isFinite(offset)) return null
  if (typeof current !== 'object' || current === null) return null
  const c = current as Record<string, unknown>
  const num = (value: unknown) => (typeof value === 'number' && Number.isFinite(value) ? value : null)
  const temperature = num(c.temperature_2m)
  const humidity = num(c.relative_humidity_2m)
  const windSpeed = num(c.wind_speed_10m)
  const code = num(c.weather_code)
  if (temperature === null || humidity === null || windSpeed === null || code === null) return null
  return { timeZone: timezone, utcOffsetSeconds: offset, temperature, humidity, windSpeed, code }
}

export async function fetchWeather(
  point: LatLng,
  fetcher: typeof fetch = (input, init) => fetch(input, init), // not `fetch` itself: a browser refuses it with another `this`
): Promise<Weather> {
  const response = await fetcher(weatherUrl(point))
  if (!response.ok) throw new Error(`Weather service error (${response.status})`)
  const weather = parseWeather(await response.json())
  if (!weather) throw new Error('The weather service answered with something unexpected')
  return weather
}

// WMO weather codes, in words and a symbol.
export function describeWeather(code: number): { text: string; icon: string } {
  if (code === 0) return { text: '맑음', icon: '☀️' }
  if (code === 1) return { text: '대체로 맑음', icon: '🌤️' }
  if (code === 2) return { text: '구름 조금', icon: '⛅' }
  if (code === 3) return { text: '흐림', icon: '☁️' }
  if (code === 45 || code === 48) return { text: '안개', icon: '🌫️' }
  if (code >= 51 && code <= 55) return { text: '이슬비', icon: '🌦️' }
  if (code === 56 || code === 57) return { text: '어는 이슬비', icon: '🌧️' }
  if (code >= 61 && code <= 65) return { text: '비', icon: '🌧️' }
  if (code === 66 || code === 67) return { text: '어는 비', icon: '🌧️' }
  if (code >= 71 && code <= 75) return { text: '눈', icon: '🌨️' }
  if (code === 77) return { text: '싸락눈', icon: '🌨️' }
  if (code >= 80 && code <= 82) return { text: '소나기', icon: '🌦️' }
  if (code === 85 || code === 86) return { text: '눈 소나기', icon: '🌨️' }
  if (code === 95) return { text: '뇌우', icon: '⛈️' }
  if (code === 96 || code === 99) return { text: '우박을 동반한 뇌우', icon: '⛈️' }
  return { text: '알 수 없음', icon: '❔' }
}

// The date and time in a time zone, such as "2026년 10월 24일 (토) 오후 3:00:00". Empty if the zone is not known.
export function formatLocalTime(now: Date, timeZone: string): string {
  try {
    return new Intl.DateTimeFormat('ko-KR', {
      timeZone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    }).format(now)
  } catch {
    return ''
  }
}

// How far a clock is from the viewer's own, in words: "나와 같은 시각", "나보다 3시간 빠름", "나보다 9시간 30분 느림".
export function describeTimeDifference(zoneOffsetSeconds: number, ownOffsetSeconds: number): string {
  const minutes = Math.round((zoneOffsetSeconds - ownOffsetSeconds) / 60)
  if (minutes === 0) return '나와 같은 시각'
  const hours = Math.floor(Math.abs(minutes) / 60)
  const rest = Math.abs(minutes) % 60
  const amount = [hours > 0 ? `${hours}시간` : '', rest > 0 ? `${rest}분` : ''].filter(Boolean).join(' ')
  return `나보다 ${amount} ${minutes > 0 ? '빠름' : '느림'}`
}
