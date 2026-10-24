import { describe, it, expect } from 'vitest'
import {
  MAX_POINTS,
  QUESTIONS_PER_GAME,
  QUIZ_PLACES,
  answer,
  currentPlace,
  isFinished,
  maxScore,
  newQuiz,
  next,
  parseBest,
  roundScore,
  totalScore,
} from './quiz'
import { MAX_LAT } from './places'

const sequence = (...values: number[]) => {
  let i = 0
  return () => values[i++ % values.length]
}

describe('QUIZ_PLACES', () => {
  it('has enough places, each real and different', () => {
    expect(QUIZ_PLACES.length).toBeGreaterThanOrEqual(QUESTIONS_PER_GAME * 2)
    expect(new Set(QUIZ_PLACES.map((place) => place.name)).size).toBe(QUIZ_PLACES.length)
    for (const place of QUIZ_PLACES) {
      expect(Math.abs(place.lat), place.name).toBeLessThanOrEqual(MAX_LAT)
      expect(Math.abs(place.lng), place.name).toBeLessThanOrEqual(180)
      expect(place.country, place.name).not.toBe('')
    }
  })

  it('has a few well-known places in the right hemisphere', () => {
    const at = (name: string) => QUIZ_PLACES.find((place) => place.name === name)
    expect(at('서울')?.lat).toBeGreaterThan(0)
    expect(at('시드니')?.lat).toBeLessThan(0) // south
    expect(at('뉴욕')?.lng).toBeLessThan(0) // west
    expect(at('도쿄')?.lng).toBeGreaterThan(0) // east
  })
})

describe('roundScore', () => {
  it('is the most for a perfect guess', () => {
    expect(roundScore(0)).toBe(MAX_POINTS)
    expect(roundScore(-5)).toBe(MAX_POINTS)
  })

  it('gets smaller the farther off the guess is, and never below zero', () => {
    let previous = Infinity
    for (const km of [0, 10, 100, 500, 1500, 5000, 10000, 20000]) {
      const points = roundScore(km)
      expect(points).toBeLessThanOrEqual(previous)
      expect(points).toBeGreaterThanOrEqual(0)
      previous = points
    }
  })

  it('gives a few hundred at 1500 km and almost nothing on the other side of the world', () => {
    expect(roundScore(1500)).toBe(368)
    expect(roundScore(20000)).toBeLessThan(5)
    expect(roundScore(25)).toBeGreaterThan(980)
  })
})

describe('newQuiz', () => {
  it('asks the number of questions wanted, all different, and none answered yet', () => {
    const quiz = newQuiz(() => Math.random())
    expect(quiz.places).toHaveLength(QUESTIONS_PER_GAME)
    expect(new Set(quiz.places.map((place) => place.name)).size).toBe(QUESTIONS_PER_GAME)
    expect(quiz.results).toEqual([])
    expect(quiz.revealed).toBe(false)
  })

  it('is different from game to game', () => {
    const a = newQuiz(sequence(0.1, 0.9, 0.3)).places.map((place) => place.name)
    const b = newQuiz(sequence(0.7, 0.2, 0.5)).places.map((place) => place.name)
    expect(a).not.toEqual(b)
  })

  it('stays inside the list even for the largest number a random source can give', () => {
    const quiz = newQuiz(() => 0.9999999999)
    expect(quiz.places).toHaveLength(QUESTIONS_PER_GAME)
    for (const place of quiz.places) expect(QUIZ_PLACES).toContain(place)
  })

  it('asks every place about equally often over many games', () => {
    const counts = new Map<string, number>()
    const games = 4000
    for (let i = 0; i < games; i++) {
      for (const place of newQuiz(() => Math.random()).places) counts.set(place.name, (counts.get(place.name) ?? 0) + 1)
    }
    const expected = (games * QUESTIONS_PER_GAME) / QUIZ_PLACES.length
    for (const place of QUIZ_PLACES) {
      expect(counts.get(place.name) ?? 0, place.name).toBeGreaterThan(expected * 0.8)
      expect(counts.get(place.name) ?? 0, place.name).toBeLessThan(expected * 1.2)
    }
  })

  it('can be shorter than the list, or as long as the whole list at most', () => {
    expect(newQuiz(() => 0.5, 3).places).toHaveLength(3)
    expect(newQuiz(() => 0.5, 1000).places).toHaveLength(QUIZ_PLACES.length)
  })
})

describe('playing', () => {
  const small = () => newQuiz(() => 0.5, 2)

  it('asks the first place at the start', () => {
    const quiz = small()
    expect(currentPlace(quiz)).toBe(quiz.places[0])
    expect(isFinished(quiz)).toBe(false)
  })

  it('scores a guess by its distance from the place', () => {
    const quiz = small()
    const place = quiz.places[0]
    const perfect = answer(quiz, { lat: place.lat, lng: place.lng })
    expect(perfect.results[0].km).toBeCloseTo(0, 6)
    expect(perfect.results[0].points).toBe(MAX_POINTS)
    const far = answer(quiz, { lat: place.lat + 10, lng: place.lng })
    expect(far.results[0].km).toBeCloseTo(1112, -1) // ten degrees of latitude
    expect(far.results[0].points).toBeLessThan(MAX_POINTS)
  })

  it('keeps showing the answered place until the player asks for the next', () => {
    const quiz = small()
    const answered = answer(quiz, { lat: 0, lng: 0 })
    expect(answered.revealed).toBe(true)
    expect(currentPlace(answered)).toBe(quiz.places[0])
    const moved = next(answered)
    expect(moved.revealed).toBe(false)
    expect(currentPlace(moved)).toBe(quiz.places[1])
  })

  it('ignores a second guess for the same question, and a "next" with nothing to move on from', () => {
    const quiz = small()
    const once = answer(quiz, { lat: 0, lng: 0 })
    expect(answer(once, { lat: 50, lng: 50 })).toBe(once)
    expect(next(quiz)).toBe(quiz)
  })

  it('finishes after the last answer has been moved on from, and takes no more guesses', () => {
    let quiz = small()
    quiz = next(answer(quiz, { lat: 0, lng: 0 }))
    expect(isFinished(quiz)).toBe(false)
    quiz = answer(quiz, { lat: 0, lng: 0 })
    expect(isFinished(quiz)).toBe(false) // the last answer is still being shown
    quiz = next(quiz)
    expect(isFinished(quiz)).toBe(true)
    expect(currentPlace(quiz)).toBeUndefined()
    expect(answer(quiz, { lat: 1, lng: 1 })).toBe(quiz)
  })

  it('adds up the points, out of the most there are', () => {
    let quiz = small()
    const first = quiz.places[0]
    const second = quiz.places[1]
    quiz = next(answer(quiz, { lat: first.lat, lng: first.lng }))
    quiz = answer(quiz, { lat: second.lat, lng: second.lng })
    expect(totalScore(quiz)).toBe(2 * MAX_POINTS)
    expect(maxScore(quiz)).toBe(2 * MAX_POINTS)
    expect(totalScore(small())).toBe(0)
  })

  it('does not change the game it was given', () => {
    const quiz = small()
    const frozen = JSON.stringify(quiz)
    answer(quiz, { lat: 5, lng: 5 })
    next(answer(quiz, { lat: 5, lng: 5 }))
    expect(JSON.stringify(quiz)).toBe(frozen)
  })
})

describe('parseBest', () => {
  it('reads a stored best score', () => {
    expect(parseBest('7420')).toBe(7420)
    expect(parseBest('0')).toBe(0)
    expect(parseBest(512)).toBe(512)
  })

  it('treats anything else as no best score', () => {
    for (const bad of [null, undefined, '', 'abc', '-5', '12.5', NaN, {}, [], '1e3x']) expect(parseBest(bad)).toBe(0)
  })
})
