// The rules of Yacht Dice, with nothing about the screen in it (see YachtView.tsx for that).
//
// Five dice are rolled up to three times in a turn, keeping any dice between rolls. After the last roll that the
// player wants, the dice are scored in one of twelve categories, each of which can be used once. After twelve turns
// the game is over.

import type { Rng } from '../../lib/random'

export const DICE_COUNT = 5
export const MAX_ROLLS = 3

export const CATEGORIES = [
  'aces',
  'deuces',
  'threes',
  'fours',
  'fives',
  'sixes',
  'choice',
  'fourOfAKind',
  'fullHouse',
  'smallStraight',
  'largeStraight',
  'yacht',
] as const
export type Category = (typeof CATEGORIES)[number]

export const UPPER_CATEGORIES: readonly Category[] = CATEGORIES.slice(0, 6)
export const UPPER_BONUS_THRESHOLD = 63
export const UPPER_BONUS = 35

// The most the upper section can give (five of each number: 5 + 10 + 15 + 20 + 25 + 30), and the best possible total:
// that, the bonus, and the best of each lower category (30 + 30 + 28 + 15 + 30 + 50). A test checks both by trying
// every throw of the dice.
export const MAX_UPPER_SUM = 105
export const MAX_TOTAL = 323

export const CATEGORY_LABEL: Record<Category, string> = {
  aces: 'Aces',
  deuces: 'Deuces',
  threes: 'Threes',
  fours: 'Fours',
  fives: 'Fives',
  sixes: 'Sixes',
  choice: 'Choice',
  fourOfAKind: '4 of a Kind',
  fullHouse: 'Full House',
  smallStraight: 'Small Straight',
  largeStraight: 'Large Straight',
  yacht: 'Yacht',
}

// How each category scores, in a few words, for the scoreboard.
export const CATEGORY_HINT: Record<Category, string> = {
  aces: '1의 눈의 합',
  deuces: '2의 눈의 합',
  threes: '3의 눈의 합',
  fours: '4의 눈의 합',
  fives: '5의 눈의 합',
  sixes: '6의 눈의 합',
  choice: '모든 눈의 합',
  fourOfAKind: '같은 눈 4개 이상: 모든 눈의 합',
  fullHouse: '3개 + 2개: 모든 눈의 합',
  smallStraight: '4개 연속: 15점',
  largeStraight: '5개 연속: 30점',
  yacht: '5개 모두 같음: 50점',
}

function isValidDice(dice: unknown): dice is number[] {
  return (
    Array.isArray(dice) &&
    dice.length === DICE_COUNT &&
    dice.every((face) => Number.isInteger(face) && face >= 1 && face <= 6)
  )
}

// The points that these dice would give in this category (0 when they do not fit it).
export function scoreFor(category: Category, dice: number[]): number {
  if (!isValidDice(dice)) throw new RangeError(`Expected ${DICE_COUNT} dice showing 1 to 6, got ${JSON.stringify(dice)}`)

  const counts = [0, 0, 0, 0, 0, 0, 0] // counts[face] = how many dice show that face
  for (const face of dice) counts[face]++
  const sum = dice.reduce((total, face) => total + face, 0)
  const hasRun = (from: number, length: number) => counts.slice(from, from + length).every((count) => count > 0)

  switch (category) {
    case 'aces':
      return counts[1] * 1
    case 'deuces':
      return counts[2] * 2
    case 'threes':
      return counts[3] * 3
    case 'fours':
      return counts[4] * 4
    case 'fives':
      return counts[5] * 5
    case 'sixes':
      return counts[6] * 6
    case 'choice':
      return sum
    case 'fourOfAKind':
      return counts.some((count) => count >= 4) ? sum : 0
    case 'fullHouse':
      return counts.includes(3) && counts.includes(2) ? sum : 0
    case 'smallStraight':
      return hasRun(1, 4) || hasRun(2, 4) || hasRun(3, 4) ? 15 : 0
    case 'largeStraight':
      return hasRun(1, 5) || hasRun(2, 5) ? 30 : 0
    case 'yacht':
      return counts.includes(5) ? 50 : 0
  }
}

export function upperBonus(upperTotal: number): number {
  return upperTotal >= UPPER_BONUS_THRESHOLD ? UPPER_BONUS : 0
}

// --- The game ---

export type Turn = { dice: number[]; category: Category }
export type Scores = Record<Category, number | null>

export type GameState = {
  dice: number[] // 0 = not rolled yet in this turn
  held: boolean[]
  rollsLeft: number
  scores: Scores
  history: Turn[] // every finished turn: the dice that were scored, and the category
}

export function initialGame(): GameState {
  const scores = {} as Scores
  for (const category of CATEGORIES) scores[category] = null
  return {
    dice: Array(DICE_COUNT).fill(0),
    held: Array(DICE_COUNT).fill(false),
    rollsLeft: MAX_ROLLS,
    scores,
    history: [],
  }
}

// Has the dice been rolled at least once in this turn?
export function isRolled(game: GameState): boolean {
  return game.rollsLeft < MAX_ROLLS
}

export function isGameOver(game: GameState): boolean {
  return game.history.length >= CATEGORIES.length
}

// A random face, 1 to 6. This is the only place where a die's result is decided.
export function finalValue(rng: Rng): number {
  return 1 + Math.floor(rng() * 6)
}

// The dice after a roll: every die that is not held gets a new face. The faces are drawn here, when the dice stop,
// and not while they flicker, so how long the player held the button cannot change the odds.
export function rollFinal(game: GameState, rng: Rng): GameState {
  if (isGameOver(game) || game.rollsLeft <= 0) return game
  const dice = game.dice.map((face, index) => (game.held[index] ? face : finalValue(rng)))
  return { ...game, dice, rollsLeft: game.rollsLeft - 1 }
}

// Keep a die for the next roll, or let go of it. Nothing can be kept before the first roll, or after the last.
export function toggleHold(game: GameState, index: number): GameState {
  if (!Number.isInteger(index) || index < 0 || index >= DICE_COUNT) return game
  if (isGameOver(game) || !isRolled(game) || game.rollsLeft <= 0) return game
  const held = game.held.map((value, i) => (i === index ? !value : value))
  return { ...game, held }
}

// Score the current dice in a category and begin the next turn.
export function chooseCategory(game: GameState, category: Category): GameState {
  if (isGameOver(game) || !isRolled(game)) return game
  if (!CATEGORIES.includes(category) || game.scores[category] !== null) return game
  return {
    dice: Array(DICE_COUNT).fill(0),
    held: Array(DICE_COUNT).fill(false),
    rollsLeft: MAX_ROLLS,
    scores: { ...game.scores, [category]: scoreFor(category, game.dice) },
    history: [...game.history, { dice: [...game.dice], category }],
  }
}

// What each unused category would give for the dice as they are now (null: used already, or nothing rolled yet).
export function potentialScores(game: GameState): Scores {
  const potential = {} as Scores
  for (const category of CATEGORIES) {
    potential[category] = isRolled(game) && game.scores[category] === null ? scoreFor(category, game.dice) : null
  }
  return potential
}

export function upperSum(game: GameState): number {
  return UPPER_CATEGORIES.reduce((sum, category) => sum + (game.scores[category] ?? 0), 0)
}

export function totalScore(game: GameState): number {
  const base = CATEGORIES.reduce((sum, category) => sum + (game.scores[category] ?? 0), 0)
  return base + upperBonus(upperSum(game))
}

// --- The record of a finished game ---

export type ScoreRecord = {
  id: string
  playedAt: string // ISO date and time
  total: number
  upperSum: number
  bonus: number
  turns: Turn[]
}

export function buildRecord(game: GameState, id: string, playedAt: string): ScoreRecord {
  if (!isGameOver(game)) throw new Error('A record can only be made of a finished game')
  return {
    id,
    playedAt,
    total: totalScore(game),
    upperSum: upperSum(game),
    bonus: upperBonus(upperSum(game)),
    turns: game.history.map((turn) => ({ dice: [...turn.dice], category: turn.category })),
  }
}

// Works the score out again from the dice and the choices, and compares it with what the record says. A record that
// is not a real game, or whose numbers were changed, fails. (The server will do the same before it saves a score.)
export function verifyRecord(record: ScoreRecord): boolean {
  if (typeof record !== 'object' || record === null) return false
  const { turns } = record
  if (!Array.isArray(turns) || turns.length !== CATEGORIES.length) return false

  const used = new Set<Category>()
  let total = 0
  let upper = 0
  for (const turn of turns) {
    if (typeof turn !== 'object' || turn === null) return false
    if (!isValidDice(turn.dice) || !CATEGORIES.includes(turn.category) || used.has(turn.category)) return false
    used.add(turn.category)
    const points = scoreFor(turn.category, turn.dice)
    total += points
    if (UPPER_CATEGORIES.includes(turn.category)) upper += points
  }
  const bonus = upperBonus(upper)
  return record.upperSum === upper && record.bonus === bonus && record.total === total + bonus
}

// --- The roll: how the dice flicker ---

export const FLIP_MS = 55 // how often the faces change while rolling
export const MIN_FLIPS = 24 // even a quick tap changes the faces this many times
export const MAX_HOLD_MS = 6000 // holding longer than this stops the roll
export const MAX_FLIPS = Math.floor(MAX_HOLD_MS / FLIP_MS)

// How many times the faces change in one roll, for a button held this long: one change per interval held, but never
// fewer than MIN_FLIPS, and never more than the longest hold gives.
export function flipCountFor(heldMs: number): number {
  if (!Number.isFinite(heldMs) || heldMs < 0) return MIN_FLIPS
  return Math.min(MAX_FLIPS, Math.max(MIN_FLIPS, Math.floor(heldMs / FLIP_MS)))
}

// The next face to show on a flickering die: any face except the one it shows now, so that every change is seen.
export function nextFace(previous: number, rng: Rng): number {
  if (!Number.isInteger(previous) || previous < 1 || previous > 6) return finalValue(rng)
  const pick = 1 + Math.floor(rng() * 5)
  return pick >= previous ? pick + 1 : pick
}
