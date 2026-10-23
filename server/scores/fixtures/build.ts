// Builds the cases in records.json: finished Yacht Dice games, some as they should be and some tampered with, each with
// the answer the site's verifyRecord() gives. The score server's tests read the same file and must give the same
// answers, so the site and the server can never disagree about what a real game is.
//
// Nothing here touches the disk: generate.ts writes the file, and src/tools/yacht/fixtures.test.ts checks that the
// file on disk is what this builds.

import {
  CATEGORIES,
  buildRecord,
  chooseCategory,
  initialGame,
  isGameOver,
  rollFinal,
  verifyRecord,
  type Category,
  type ScoreRecord,
} from '../../../src/tools/yacht/controller'

export type Fixture = { name: string; valid: boolean; record: unknown }

function seeded(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// A random generator that gives exactly these dice faces, in order.
function facesRng(faces: number[]) {
  let index = 0
  return () => (faces[index++ % faces.length] - 1) / 6 + 0.05
}

const PLAYED_AT = '2026-10-24T09:00:00.000Z'

// A game played with a seeded generator: each turn rolls once, and scores in a category picked at random.
function randomGame(seed: number): ScoreRecord {
  const rng = seeded(seed)
  let game = initialGame()
  while (!isGameOver(game)) {
    game = rollFinal(game, rng)
    const open = CATEGORIES.filter((category) => game.scores[category] === null)
    game = chooseCategory(game, open[Math.floor(rng() * open.length)])
  }
  return buildRecord(game, `fixture-${seed}`, PLAYED_AT)
}

// A game where the dice of each category are chosen by hand.
function craftedGame(id: string, dice: Record<Category, number[]>): ScoreRecord {
  let game = initialGame()
  for (const category of CATEGORIES) game = chooseCategory(rollFinal(game, facesRng(dice[category])), category)
  return buildRecord(game, id, PLAYED_AT)
}

const PERFECT: Record<Category, number[]> = {
  aces: [1, 1, 1, 1, 1],
  deuces: [2, 2, 2, 2, 2],
  threes: [3, 3, 3, 3, 3],
  fours: [4, 4, 4, 4, 4],
  fives: [5, 5, 5, 5, 5],
  sixes: [6, 6, 6, 6, 6],
  choice: [6, 6, 6, 6, 6],
  fourOfAKind: [6, 6, 6, 6, 6],
  fullHouse: [6, 6, 6, 5, 5],
  smallStraight: [1, 2, 3, 4, 6],
  largeStraight: [1, 2, 3, 4, 5],
  yacht: [5, 5, 5, 5, 5],
}

// Three of each number in the upper section: 3 + 6 + 9 + 12 + 15 + 18 = 63, the bonus just reached.
const BONUS_63: Record<Category, number[]> = {
  aces: [1, 1, 1, 2, 3],
  deuces: [2, 2, 2, 3, 4],
  threes: [3, 3, 3, 4, 5],
  fours: [4, 4, 4, 5, 6],
  fives: [5, 5, 5, 6, 1],
  sixes: [6, 6, 6, 1, 2],
  choice: [1, 2, 3, 4, 5],
  fourOfAKind: [1, 1, 1, 1, 2],
  fullHouse: [1, 1, 2, 2, 2],
  smallStraight: [1, 2, 3, 4, 6],
  largeStraight: [2, 3, 4, 5, 6],
  yacht: [3, 3, 3, 3, 2],
}

// One point short: 62.
const BONUS_62: Record<Category, number[]> = { ...BONUS_63, aces: [1, 1, 2, 3, 4] }

// The record as plain data, the way it travels as JSON.
const plain = (record: ScoreRecord): Record<string, unknown> => JSON.parse(JSON.stringify(record))

// A copy of the record with the given changes made to it.
function change(record: ScoreRecord, edit: (copy: Record<string, any>) => void): unknown {
  const copy = plain(record)
  edit(copy)
  return copy
}

export function buildFixtures(): Fixture[] {
  const fixtures: Fixture[] = []
  const add = (name: string, record: unknown) => fixtures.push({ name, valid: verifyRecord(record as ScoreRecord), record })

  // Real games.
  for (let seed = 1; seed <= 30; seed++) add(`random game ${seed}`, randomGame(seed))
  const perfect = craftedGame('fixture-perfect', PERFECT)
  const bonus63 = craftedGame('fixture-bonus-63', BONUS_63)
  const bonus62 = craftedGame('fixture-bonus-62', BONUS_62)
  add('perfect game, 323 points', perfect)
  add('upper section exactly 63: bonus given', bonus63)
  add('upper section 62: no bonus', bonus62)

  const base = randomGame(1)
  add('turns in another order are still a real game', change(base, (r) => r.turns.reverse()))
  add('extra fields are ignored', change(base, (r) => { r.nickname = 'someone'; r.extra = [1, 2, 3] }))

  // Wrong totals.
  add('total one too high', change(base, (r) => { r.total += 1 }))
  add('total one too low', change(base, (r) => { r.total -= 1 }))
  add('total as text', change(base, (r) => { r.total = String(r.total) }))
  add('total missing', change(base, (r) => { delete r.total }))
  add('total null', change(base, (r) => { r.total = null }))
  add('total with a fraction', change(base, (r) => { r.total += 0.5 }))
  add('upper sum one too high', change(base, (r) => { r.upperSum += 1 }))
  add('upper sum one too low', change(base, (r) => { r.upperSum -= 1 }))
  add('upper sum missing', change(base, (r) => { delete r.upperSum }))
  add('bonus flipped', change(base, (r) => { r.bonus = r.bonus === 0 ? 35 : 0 }))
  add('bonus missing', change(base, (r) => { delete r.bonus }))
  add('bonus as text', change(base, (r) => { r.bonus = String(r.bonus) }))
  add('bonus claimed at 62', change(bonus62, (r) => { r.bonus = 35; r.total += 35 }))
  add('bonus denied at 63', change(bonus63, (r) => { r.bonus = 0; r.total -= 35 }))
  add('perfect game claiming one point more', change(perfect, (r) => { r.total += 1 }))

  // Turns that are not a real game.
  add('only 11 turns', change(base, (r) => { r.turns.pop() }))
  add('13 turns', change(base, (r) => { r.turns.push(r.turns[0]) }))
  add('no turns', change(base, (r) => { r.turns = [] }))
  add('turns missing', change(base, (r) => { delete r.turns }))
  add('turns null', change(base, (r) => { r.turns = null }))
  add('turns is an object', change(base, (r) => { r.turns = { a: 1 } }))
  add('a category used twice', change(base, (r) => { r.turns[1].category = r.turns[0].category }))
  add('unknown category', change(base, (r) => { r.turns[0].category = 'bonus' }))
  add('category in capitals', change(base, (r) => { r.turns[0].category = String(r.turns[0].category).toUpperCase() }))
  add('category null', change(base, (r) => { r.turns[0].category = null }))
  add('category a number', change(base, (r) => { r.turns[0].category = 3 }))
  add('category missing', change(base, (r) => { delete r.turns[0].category }))
  add('a turn that is null', change(base, (r) => { r.turns[2] = null }))
  add('a turn that is text', change(base, (r) => { r.turns[2] = 'aces' }))

  // Dice that are not real dice.
  add('a die showing 0', change(base, (r) => { r.turns[0].dice[0] = 0 }))
  add('a die showing 7', change(base, (r) => { r.turns[0].dice[0] = 7 }))
  add('a die showing 2.5', change(base, (r) => { r.turns[0].dice[0] = 2.5 }))
  add('a die showing text', change(base, (r) => { r.turns[0].dice[0] = '3' }))
  add('a die that is null', change(base, (r) => { r.turns[0].dice[0] = null }))
  add('a negative die', change(base, (r) => { r.turns[0].dice[0] = -3 }))
  add('4 dice', change(base, (r) => { r.turns[0].dice.pop() }))
  add('6 dice', change(base, (r) => { r.turns[0].dice.push(1) }))
  add('dice missing', change(base, (r) => { delete r.turns[0].dice }))
  add('dice is text', change(base, (r) => { r.turns[0].dice = '12345' }))
  add('dice changed to fit a bigger score', change(base, (r) => { r.turns[0].dice = [6, 6, 6, 6, 6] }))

  // Not a record at all.
  add('null', null)
  add('a list', [])
  add('text', 'a game')
  add('a number', 42)
  add('an empty object', {})

  return fixtures
}
