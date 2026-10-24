// The map quiz: "where is Paris?" The player clicks the map and is scored by how far off the click is. No screen and no
// Google in here.

import { cryptoRng, type Rng } from '../../lib/random'
import { distanceKm } from './geo'
import type { LatLng } from './places'

export { cryptoRng }
export type { Rng }

export type QuizPlace = LatLng & { name: string; country: string }

export const QUESTIONS_PER_GAME = 10
export const MAX_POINTS = 1000

export const QUIZ_PLACES: readonly QuizPlace[] = [
  { name: '서울', country: '대한민국', lat: 37.5665, lng: 126.978 },
  { name: '도쿄', country: '일본', lat: 35.6762, lng: 139.6503 },
  { name: '베이징', country: '중국', lat: 39.9042, lng: 116.4074 },
  { name: '상하이', country: '중국', lat: 31.2304, lng: 121.4737 },
  { name: '홍콩', country: '중국', lat: 22.3193, lng: 114.1694 },
  { name: '하노이', country: '베트남', lat: 21.0278, lng: 105.8342 },
  { name: '방콕', country: '태국', lat: 13.7563, lng: 100.5018 },
  { name: '싱가포르', country: '싱가포르', lat: 1.3521, lng: 103.8198 },
  { name: '자카르타', country: '인도네시아', lat: -6.2088, lng: 106.8456 },
  { name: '델리', country: '인도', lat: 28.6139, lng: 77.209 },
  { name: '뭄바이', country: '인도', lat: 19.076, lng: 72.8777 },
  { name: '울란바토르', country: '몽골', lat: 47.8864, lng: 106.9057 },
  { name: '두바이', country: '아랍에미리트', lat: 25.2048, lng: 55.2708 },
  { name: '이스탄불', country: '튀르키예', lat: 41.0082, lng: 28.9784 },
  { name: '모스크바', country: '러시아', lat: 55.7558, lng: 37.6173 },
  { name: '카이로', country: '이집트', lat: 30.0444, lng: 31.2357 },
  { name: '나이로비', country: '케냐', lat: -1.2921, lng: 36.8219 },
  { name: '케이프타운', country: '남아프리카공화국', lat: -33.9249, lng: 18.4241 },
  { name: '라고스', country: '나이지리아', lat: 6.5244, lng: 3.3792 },
  { name: '파리', country: '프랑스', lat: 48.8566, lng: 2.3522 },
  { name: '런던', country: '영국', lat: 51.5072, lng: -0.1276 },
  { name: '로마', country: '이탈리아', lat: 41.9028, lng: 12.4964 },
  { name: '베를린', country: '독일', lat: 52.52, lng: 13.405 },
  { name: '마드리드', country: '스페인', lat: 40.4168, lng: -3.7038 },
  { name: '암스테르담', country: '네덜란드', lat: 52.3676, lng: 4.9041 },
  { name: '아테네', country: '그리스', lat: 37.9838, lng: 23.7275 },
  { name: '스톡홀름', country: '스웨덴', lat: 59.3293, lng: 18.0686 },
  { name: '레이캬비크', country: '아이슬란드', lat: 64.1466, lng: -21.9426 },
  { name: '뉴욕', country: '미국', lat: 40.7128, lng: -74.006 },
  { name: '워싱턴 D.C.', country: '미국', lat: 38.9072, lng: -77.0369 },
  { name: '시카고', country: '미국', lat: 41.8781, lng: -87.6298 },
  { name: '로스앤젤레스', country: '미국', lat: 34.0522, lng: -118.2437 },
  { name: '호놀룰루', country: '미국', lat: 21.3099, lng: -157.8581 },
  { name: '밴쿠버', country: '캐나다', lat: 49.2827, lng: -123.1207 },
  { name: '멕시코시티', country: '멕시코', lat: 19.4326, lng: -99.1332 },
  { name: '보고타', country: '콜롬비아', lat: 4.711, lng: -74.0721 },
  { name: '리마', country: '페루', lat: -12.0464, lng: -77.0428 },
  { name: '상파울루', country: '브라질', lat: -23.5505, lng: -46.6333 },
  { name: '부에노스아이레스', country: '아르헨티나', lat: -34.6037, lng: -58.3816 },
  { name: '시드니', country: '오스트레일리아', lat: -33.8688, lng: 151.2093 },
  { name: '멜버른', country: '오스트레일리아', lat: -37.8136, lng: 144.9631 },
  { name: '오클랜드', country: '뉴질랜드', lat: -36.8485, lng: 174.7633 },
]

// The points for a guess that is `km` away: 1000 for a perfect one, and fewer the farther off it is (about a third
// of that at 1500 km, a few points on the other side of the world).
export function roundScore(km: number): number {
  return Math.round(MAX_POINTS * Math.exp(-Math.max(0, km) / 1500))
}

export type Guess = { place: QuizPlace; guess: LatLng; km: number; points: number }

// places: the questions, in the order they are asked. results: the answers so far. revealed: the last answer is
// being shown, and the next question waits for the player to ask for it.
export type Quiz = { places: QuizPlace[]; results: Guess[]; revealed: boolean }

// A game of `size` different questions, chosen at random (a partial Fisher-Yates shuffle).
export function newQuiz(rng: Rng, size = QUESTIONS_PER_GAME, pool: readonly QuizPlace[] = QUIZ_PLACES): Quiz {
  const chosen = [...pool]
  const count = Math.min(size, chosen.length)
  for (let i = 0; i < count; i++) {
    const j = i + Math.min(chosen.length - i - 1, Math.floor(rng() * (chosen.length - i)))
    ;[chosen[i], chosen[j]] = [chosen[j], chosen[i]]
  }
  return { places: chosen.slice(0, count), results: [], revealed: false }
}

export function isFinished(quiz: Quiz): boolean {
  return quiz.results.length === quiz.places.length && !quiz.revealed
}

// The place being asked, or, while an answer is shown, the one just answered. Undefined once the game is over.
export function currentPlace(quiz: Quiz): QuizPlace | undefined {
  return quiz.places[quiz.revealed ? quiz.results.length - 1 : quiz.results.length]
}

// The player's click as the answer to the current question. Ignored when no question is waiting for one.
export function answer(quiz: Quiz, guess: LatLng): Quiz {
  if (quiz.revealed || quiz.results.length >= quiz.places.length) return quiz
  const place = quiz.places[quiz.results.length]
  const km = distanceKm(guess, place)
  return { ...quiz, results: [...quiz.results, { place, guess, km, points: roundScore(km) }], revealed: true }
}

export function next(quiz: Quiz): Quiz {
  return quiz.revealed ? { ...quiz, revealed: false } : quiz
}

export function totalScore(quiz: Quiz): number {
  return quiz.results.reduce((sum, result) => sum + result.points, 0)
}

export function maxScore(quiz: Quiz): number {
  return quiz.places.length * MAX_POINTS
}

// A best score read back from storage: a whole number from 0 up, or 0.
export function parseBest(raw: unknown): number {
  const value = typeof raw === 'string' ? Number(raw) : raw
  return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : 0
}
