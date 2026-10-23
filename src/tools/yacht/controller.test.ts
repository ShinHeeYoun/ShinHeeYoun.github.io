import { describe, it, expect } from 'vitest'
import {
  CATEGORIES,
  DICE_COUNT,
  FLIP_MS,
  MAX_FLIPS,
  MAX_HOLD_MS,
  MAX_ROLLS,
  MAX_TOTAL,
  MAX_UPPER_SUM,
  MIN_FLIPS,
  UPPER_BONUS,
  UPPER_BONUS_THRESHOLD,
  UPPER_CATEGORIES,
  buildRecord,
  chooseCategory,
  finalValue,
  flipCountFor,
  initialGame,
  isGameOver,
  isRolled,
  nextFace,
  potentialScores,
  rollFinal,
  scoreFor,
  toggleHold,
  totalScore,
  upperBonus,
  upperSum,
  verifyRecord,
  type Category,
  type GameState,
} from './controller'

// A small seeded random generator, so that the "random" tests give the same answer every run.
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

// A random generator that gives exactly these dice faces, in order (finalValue turns a number into a face).
function facesRng(faces: number[]) {
  let index = 0
  return () => {
    const face = faces[index++ % faces.length]
    return (face - 1) / 6 + 0.05
  }
}

// Every possible throw of five dice: 6 x 6 x 6 x 6 x 6 = 7776.
function allThrows(): number[][] {
  const throws: number[][] = []
  for (let n = 0; n < 7776; n++) {
    let rest = n
    const dice: number[] = []
    for (let i = 0; i < DICE_COUNT; i++) {
      dice.push((rest % 6) + 1)
      rest = Math.floor(rest / 6)
    }
    throws.push(dice)
  }
  return throws
}

describe('scoreFor: the number categories', () => {
  it('adds up the dice that show the number', () => {
    expect(scoreFor('aces', [1, 1, 2, 3, 1])).toBe(3)
    expect(scoreFor('deuces', [2, 2, 5, 6, 2])).toBe(6)
    expect(scoreFor('threes', [3, 1, 3, 4, 5])).toBe(6)
    expect(scoreFor('fours', [4, 4, 4, 4, 4])).toBe(20)
    expect(scoreFor('fives', [5, 1, 2, 3, 4])).toBe(5)
    expect(scoreFor('sixes', [6, 6, 1, 1, 6])).toBe(18)
  })

  it('is zero when the number does not appear', () => {
    expect(scoreFor('aces', [2, 3, 4, 5, 6])).toBe(0)
    expect(scoreFor('sixes', [1, 2, 3, 4, 5])).toBe(0)
  })
})

describe('scoreFor: the other categories', () => {
  it('Choice is the sum of all five dice', () => {
    expect(scoreFor('choice', [1, 2, 3, 4, 5])).toBe(15)
    expect(scoreFor('choice', [6, 6, 6, 6, 6])).toBe(30)
  })

  it('4 of a Kind is the sum of all five dice when four or more are the same', () => {
    expect(scoreFor('fourOfAKind', [3, 3, 3, 3, 5])).toBe(17)
    expect(scoreFor('fourOfAKind', [6, 2, 6, 6, 6])).toBe(26)
    expect(scoreFor('fourOfAKind', [3, 3, 3, 3, 3])).toBe(15) // five of a kind counts too
    expect(scoreFor('fourOfAKind', [3, 3, 3, 5, 5])).toBe(0)
  })

  it('Full House is the sum of all five dice for three of one number and two of another', () => {
    expect(scoreFor('fullHouse', [2, 2, 3, 3, 3])).toBe(13)
    expect(scoreFor('fullHouse', [1, 1, 1, 2, 2])).toBe(7)
    expect(scoreFor('fullHouse', [6, 5, 6, 5, 6])).toBe(28)
    expect(scoreFor('fullHouse', [4, 4, 4, 4, 4])).toBe(0) // five of a kind is not a full house
    expect(scoreFor('fullHouse', [4, 4, 4, 4, 2])).toBe(0)
    expect(scoreFor('fullHouse', [1, 2, 3, 4, 5])).toBe(0)
    expect(scoreFor('fullHouse', [1, 1, 2, 2, 3])).toBe(0)
  })

  it('Small Straight is 15 for four dice in a row, in any order', () => {
    expect(scoreFor('smallStraight', [1, 2, 3, 4, 6])).toBe(15)
    expect(scoreFor('smallStraight', [2, 3, 4, 5, 5])).toBe(15)
    expect(scoreFor('smallStraight', [6, 3, 5, 4, 1])).toBe(15)
    expect(scoreFor('smallStraight', [1, 1, 2, 3, 4])).toBe(15)
    expect(scoreFor('smallStraight', [1, 2, 3, 4, 5])).toBe(15) // five in a row has four in a row too
    expect(scoreFor('smallStraight', [1, 2, 3, 5, 6])).toBe(0)
    expect(scoreFor('smallStraight', [2, 3, 4, 6, 6])).toBe(0)
    expect(scoreFor('smallStraight', [1, 1, 1, 1, 1])).toBe(0)
  })

  it('Large Straight is 30 for five dice in a row: 1 to 5 or 2 to 6', () => {
    expect(scoreFor('largeStraight', [1, 2, 3, 4, 5])).toBe(30)
    expect(scoreFor('largeStraight', [6, 5, 4, 3, 2])).toBe(30)
    expect(scoreFor('largeStraight', [1, 2, 3, 4, 6])).toBe(0)
    expect(scoreFor('largeStraight', [1, 3, 4, 5, 6])).toBe(0)
    expect(scoreFor('largeStraight', [2, 3, 4, 5, 5])).toBe(0)
  })

  it('Yacht is 50 for five of the same number', () => {
    expect(scoreFor('yacht', [5, 5, 5, 5, 5])).toBe(50)
    expect(scoreFor('yacht', [1, 1, 1, 1, 1])).toBe(50)
    expect(scoreFor('yacht', [5, 5, 5, 5, 4])).toBe(0)
  })

  it('refuses dice that are not five faces from 1 to 6', () => {
    expect(() => scoreFor('choice', [1, 2, 3, 4])).toThrow(RangeError)
    expect(() => scoreFor('choice', [0, 0, 0, 0, 0])).toThrow(RangeError)
    expect(() => scoreFor('choice', [1, 2, 3, 4, 7])).toThrow(RangeError)
    expect(() => scoreFor('choice', [1, 2, 3, 4, 2.5])).toThrow(RangeError)
  })

  it('agrees with the counts of all 7776 possible throws', () => {
    const throws = allThrows()
    const count = (category: Category) => throws.filter((dice) => scoreFor(category, dice) > 0).length
    expect(count('yacht')).toBe(6)
    expect(count('fullHouse')).toBe(300) // 6 x 5 choices of numbers x 10 arrangements
    expect(count('largeStraight')).toBe(240) // two runs x 120 orders
    expect(count('fourOfAKind')).toBe(156) // 150 with exactly four, and the 6 yachts
    for (const dice of throws) {
      for (const category of CATEGORIES) {
        const points = scoreFor(category, dice)
        expect(Number.isInteger(points) && points >= 0 && points <= 50).toBe(true)
      }
    }
  })
})

describe('the upper bonus', () => {
  it('gives 35 points from an upper total of 63', () => {
    expect(UPPER_BONUS_THRESHOLD).toBe(63)
    expect(UPPER_BONUS).toBe(35)
    expect(upperBonus(62)).toBe(0)
    expect(upperBonus(63)).toBe(35)
    expect(upperBonus(105)).toBe(35)
  })
})

describe('a new game', () => {
  it('starts with unrolled dice, three rolls and an empty scoreboard', () => {
    const game = initialGame()
    expect(game.dice).toEqual([0, 0, 0, 0, 0])
    expect(game.held).toEqual([false, false, false, false, false])
    expect(game.rollsLeft).toBe(MAX_ROLLS)
    expect(CATEGORIES.every((category) => game.scores[category] === null)).toBe(true)
    expect(isRolled(game)).toBe(false)
    expect(isGameOver(game)).toBe(false)
    expect(totalScore(game)).toBe(0)
  })

  it('has twelve categories, six of them in the upper section', () => {
    expect(CATEGORIES).toHaveLength(12)
    expect(UPPER_CATEGORIES).toEqual(['aces', 'deuces', 'threes', 'fours', 'fives', 'sixes'])
  })
})

describe('rolling', () => {
  it('rolls all five dice the first time and uses up one roll', () => {
    const game = rollFinal(initialGame(), facesRng([3, 1, 4, 1, 5]))
    expect(game.dice).toEqual([3, 1, 4, 1, 5])
    expect(game.rollsLeft).toBe(MAX_ROLLS - 1)
    expect(isRolled(game)).toBe(true)
  })

  it('rolls again only the dice that are not held', () => {
    let game = rollFinal(initialGame(), facesRng([3, 1, 4, 1, 5]))
    game = toggleHold(toggleHold(game, 0), 4) // keep the 3 and the 5
    game = rollFinal(game, facesRng([6, 6, 6]))
    expect(game.dice).toEqual([3, 6, 6, 6, 5])
    expect(game.rollsLeft).toBe(MAX_ROLLS - 2)
  })

  it('can be rolled three times in a turn and no more', () => {
    let game = initialGame()
    for (let i = 0; i < 3; i++) game = rollFinal(game, facesRng([2, 2, 2, 2, 2]))
    expect(game.rollsLeft).toBe(0)
    const again = rollFinal(game, facesRng([6, 6, 6, 6, 6]))
    expect(again).toBe(game)
    expect(again.dice).toEqual([2, 2, 2, 2, 2])
  })

  it('does not change the game it was given', () => {
    const before = initialGame()
    rollFinal(before, facesRng([1, 2, 3, 4, 5]))
    expect(before.dice).toEqual([0, 0, 0, 0, 0])
    expect(before.rollsLeft).toBe(MAX_ROLLS)
  })
})

describe('holding dice', () => {
  it('cannot hold a die before the first roll, since there is nothing to keep', () => {
    const game = initialGame()
    expect(toggleHold(game, 0)).toBe(game)
  })

  it('holds a die and lets go of it again', () => {
    let game = rollFinal(initialGame(), facesRng([1, 2, 3, 4, 5]))
    game = toggleHold(game, 2)
    expect(game.held).toEqual([false, false, true, false, false])
    game = toggleHold(game, 2)
    expect(game.held).toEqual([false, false, false, false, false])
  })

  it('ignores a die number that does not exist', () => {
    const game = rollFinal(initialGame(), facesRng([1, 2, 3, 4, 5]))
    expect(toggleHold(game, 5)).toBe(game)
    expect(toggleHold(game, -1)).toBe(game)
  })

  it('cannot hold dice once the rolls are used up, because they cannot be rolled again anyway', () => {
    let game = initialGame()
    for (let i = 0; i < 3; i++) game = rollFinal(game, facesRng([1, 2, 3, 4, 5]))
    expect(toggleHold(game, 0)).toBe(game)
  })
})

describe('choosing a category', () => {
  const rolled = () => rollFinal(initialGame(), facesRng([2, 2, 3, 3, 3]))

  it('cannot be done before the first roll', () => {
    const game = initialGame()
    expect(chooseCategory(game, 'choice')).toBe(game)
  })

  it('records the points and starts the next turn with fresh dice', () => {
    let game = toggleHold(rolled(), 0)
    game = chooseCategory(game, 'fullHouse')
    expect(game.scores.fullHouse).toBe(13)
    expect(game.dice).toEqual([0, 0, 0, 0, 0])
    expect(game.held).toEqual([false, false, false, false, false])
    expect(game.rollsLeft).toBe(MAX_ROLLS)
  })

  it('can record zero in a category the dice do not fit', () => {
    const game = chooseCategory(rolled(), 'yacht')
    expect(game.scores.yacht).toBe(0)
  })

  it('cannot use a category twice', () => {
    let game = chooseCategory(rolled(), 'choice')
    game = rollFinal(game, facesRng([1, 1, 1, 1, 1]))
    expect(chooseCategory(game, 'choice')).toBe(game)
  })

  it('can be done after one, two or three rolls', () => {
    let game = rollFinal(initialGame(), facesRng([1, 2, 3, 4, 5]))
    expect(chooseCategory(game, 'largeStraight').scores.largeStraight).toBe(30)
    game = rollFinal(game, facesRng([1, 2, 3, 4, 5]))
    game = rollFinal(game, facesRng([1, 2, 3, 4, 5]))
    expect(chooseCategory(game, 'smallStraight').scores.smallStraight).toBe(15)
  })

  it('remembers every turn: the dice that were scored and where', () => {
    const game = chooseCategory(rolled(), 'fullHouse')
    expect(game.history).toEqual([{ dice: [2, 2, 3, 3, 3], category: 'fullHouse' }])
  })
})

describe('potentialScores', () => {
  it('shows what each unused category would give for the current dice', () => {
    let game = rollFinal(initialGame(), facesRng([2, 2, 3, 3, 3]))
    game = chooseCategory(game, 'threes')
    game = rollFinal(game, facesRng([4, 4, 4, 4, 1]))
    const potential = potentialScores(game)
    expect(potential.fours).toBe(16)
    expect(potential.fourOfAKind).toBe(17)
    expect(potential.choice).toBe(17)
    expect(potential.yacht).toBe(0)
    expect(potential.threes).toBeNull() // already used
  })

  it('has nothing to show before the first roll', () => {
    expect(CATEGORIES.every((category) => potentialScores(initialGame())[category] === null)).toBe(true)
  })
})

// Plays a whole game: every turn rolls once and then scores in the first unused category.
function playThrough(rng: () => number): GameState {
  let game = initialGame()
  while (!isGameOver(game)) {
    game = rollFinal(game, rng)
    const category = CATEGORIES.find((candidate) => game.scores[candidate] === null) as Category
    game = chooseCategory(game, category)
  }
  return game
}

describe('a whole game', () => {
  it('ends after twelve turns, and nothing more can be done', () => {
    const game = playThrough(seeded(1))
    expect(isGameOver(game)).toBe(true)
    expect(game.history).toHaveLength(12)
    expect(rollFinal(game, seeded(2))).toBe(game)
    expect(chooseCategory(game, 'choice')).toBe(game)
    expect(toggleHold(game, 0)).toBe(game)
  })

  it('totals the categories and adds the bonus only from 63 in the upper section', () => {
    const game = playThrough(seeded(5))
    const total = CATEGORIES.reduce((sum, category) => sum + (game.scores[category] as number), 0)
    expect(upperSum(game)).toBe(
      UPPER_CATEGORIES.reduce((sum, category) => sum + (game.scores[category] as number), 0),
    )
    expect(totalScore(game)).toBe(total + upperBonus(upperSum(game)))
  })

  it('gives the bonus exactly at 63: three of every number', () => {
    // three of each number: 3 + 6 + 9 + 12 + 15 + 18 = 63
    let game = initialGame()
    const sets: [Category, number[]][] = [
      ['aces', [1, 1, 1, 2, 3]],
      ['deuces', [2, 2, 2, 3, 4]],
      ['threes', [3, 3, 3, 4, 5]],
      ['fours', [4, 4, 4, 5, 6]],
      ['fives', [5, 5, 5, 6, 1]],
      ['sixes', [6, 6, 6, 1, 2]],
    ]
    for (const [category, dice] of sets) game = chooseCategory(rollFinal(game, facesRng(dice)), category)
    expect(upperSum(game)).toBe(63)
    expect(totalScore(game)).toBe(63 + 35)
  })

  it('does not give the bonus at 62', () => {
    let game = initialGame()
    const sets: [Category, number[]][] = [
      ['aces', [1, 1, 1, 2, 3]],
      ['deuces', [2, 2, 2, 3, 4]],
      ['threes', [3, 3, 3, 4, 5]],
      ['fours', [4, 4, 4, 5, 6]],
      ['fives', [5, 5, 5, 6, 1]],
      ['sixes', [6, 6, 1, 1, 2]], // 12 instead of 18
    ]
    for (const [category, dice] of sets) game = chooseCategory(rollFinal(game, facesRng(dice)), category)
    expect(upperSum(game)).toBe(57)
    expect(totalScore(game)).toBe(57)
  })

  it('cannot score more than the best possible total, or less than zero', () => {
    for (let seed = 1; seed <= 50; seed++) {
      const total = totalScore(playThrough(seeded(seed)))
      expect(total).toBeGreaterThanOrEqual(0)
      expect(total).toBeLessThanOrEqual(MAX_TOTAL)
    }
  })

  it('has a best possible total of 323, found by trying every throw in every category', () => {
    const throws = allThrows()
    const best = (category: Category) => Math.max(...throws.map((dice) => scoreFor(category, dice)))
    const upper = UPPER_CATEGORIES.reduce((sum, category) => sum + best(category), 0)
    const lower = CATEGORIES.filter((category) => !UPPER_CATEGORIES.includes(category)).reduce(
      (sum, category) => sum + best(category),
      0,
    )
    expect(upper).toBe(105)
    expect(lower).toBe(183)
    expect(MAX_UPPER_SUM).toBe(upper)
    expect(MAX_TOTAL).toBe(upper + upperBonus(upper) + lower)
    expect(MAX_TOTAL).toBe(323)
  })
})

describe('the record of a game', () => {
  const finished = () => playThrough(seeded(11))

  it('keeps the totals, the date and each turn', () => {
    const game = finished()
    const record = buildRecord(game, 'game-1', '2026-10-24T09:00:00.000Z')
    expect(record.id).toBe('game-1')
    expect(record.playedAt).toBe('2026-10-24T09:00:00.000Z')
    expect(record.total).toBe(totalScore(game))
    expect(record.upperSum).toBe(upperSum(game))
    expect(record.bonus).toBe(upperBonus(upperSum(game)))
    expect(record.turns).toEqual(game.history)
  })

  it('refuses to make a record of a game that is not finished', () => {
    expect(() => buildRecord(initialGame(), 'x', '2026-10-24T09:00:00.000Z')).toThrow()
  })

  it('can be checked again from the dice and the choices alone, on any game', () => {
    for (let seed = 1; seed <= 30; seed++) {
      const record = buildRecord(playThrough(seeded(seed)), `g${seed}`, '2026-10-24T09:00:00.000Z')
      expect(verifyRecord(record)).toBe(true)
    }
  })

  it('is rejected when a total, a bonus or the upper sum was changed', () => {
    const record = buildRecord(finished(), 'g', '2026-10-24T09:00:00.000Z')
    expect(verifyRecord({ ...record, total: record.total + 1 })).toBe(false)
    expect(verifyRecord({ ...record, bonus: record.bonus === 0 ? 35 : 0 })).toBe(false)
    expect(verifyRecord({ ...record, upperSum: record.upperSum + 1 })).toBe(false)
  })

  it('is rejected when the turns are not a real game', () => {
    const record = buildRecord(finished(), 'g', '2026-10-24T09:00:00.000Z')
    expect(verifyRecord({ ...record, turns: record.turns.slice(1) })).toBe(false) // only 11 turns
    const twice = [...record.turns]
    twice[1] = { ...twice[1], category: twice[0].category }
    expect(verifyRecord({ ...record, turns: twice })).toBe(false) // a category used twice
    const badDie = record.turns.map((turn, i) => (i === 0 ? { ...turn, dice: [1, 2, 3, 4, 7] } : turn))
    expect(verifyRecord({ ...record, turns: badDie })).toBe(false)
    const fewDice = record.turns.map((turn, i) => (i === 0 ? { ...turn, dice: [1, 2, 3, 4] } : turn))
    expect(verifyRecord({ ...record, turns: fewDice })).toBe(false)
    const unknown = record.turns.map((turn, i) => (i === 0 ? { ...turn, category: 'bonus' as Category } : turn))
    expect(verifyRecord({ ...record, turns: unknown })).toBe(false)
  })

  it('is rejected when it is not shaped like a record at all', () => {
    expect(verifyRecord(null as never)).toBe(false)
    expect(verifyRecord({} as never)).toBe(false)
  })
})

describe('the dice faces that flicker while rolling', () => {
  it('never shows the same face twice in a row, so the die visibly changes each time', () => {
    const rng = seeded(3)
    for (let previous = 1; previous <= 6; previous++) {
      for (let i = 0; i < 200; i++) {
        const face = nextFace(previous, rng)
        expect(face).not.toBe(previous)
        expect(face).toBeGreaterThanOrEqual(1)
        expect(face).toBeLessThanOrEqual(6)
      }
    }
  })

  it('can show any face on a die that has none yet, and reaches all six', () => {
    const rng = seeded(4)
    const seen = new Set<number>()
    for (let i = 0; i < 200; i++) seen.add(nextFace(0, rng))
    expect([...seen].sort()).toEqual([1, 2, 3, 4, 5, 6])
  })
})

describe('how many times the dice change', () => {
  it('is at least 24 times, even for a quick tap', () => {
    expect(MIN_FLIPS).toBe(24)
    expect(flipCountFor(0)).toBe(MIN_FLIPS)
    expect(flipCountFor(100)).toBe(MIN_FLIPS)
    expect(flipCountFor(FLIP_MS * MIN_FLIPS)).toBe(MIN_FLIPS)
  })

  it('grows with how long the button was held: one change for each interval', () => {
    expect(flipCountFor(FLIP_MS * 40)).toBe(40)
    expect(flipCountFor(FLIP_MS * 40 + FLIP_MS - 1)).toBe(40)
    expect(flipCountFor(FLIP_MS * 75)).toBe(75)
  })

  it('never goes down as the hold gets longer, and stops growing at the longest hold', () => {
    let previous = 0
    for (let ms = 0; ms <= MAX_HOLD_MS * 2; ms += 37) {
      const flips = flipCountFor(ms)
      expect(flips).toBeGreaterThanOrEqual(previous)
      previous = flips
    }
    expect(MAX_FLIPS).toBe(Math.floor(MAX_HOLD_MS / FLIP_MS))
    expect(flipCountFor(MAX_HOLD_MS)).toBe(MAX_FLIPS)
    expect(flipCountFor(MAX_HOLD_MS * 10)).toBe(MAX_FLIPS)
  })

  it('treats a negative or missing time as no time', () => {
    expect(flipCountFor(-500)).toBe(MIN_FLIPS)
    expect(flipCountFor(Number.NaN)).toBe(MIN_FLIPS)
  })
})

describe('the final face', () => {
  it('is always a whole number from 1 to 6', () => {
    const rng = seeded(8)
    for (let i = 0; i < 1000; i++) {
      const face = finalValue(rng)
      expect(Number.isInteger(face) && face >= 1 && face <= 6).toBe(true)
    }
  })

  it('is as likely to be any one of the six faces', () => {
    const rng = seeded(21)
    const counts = [0, 0, 0, 0, 0, 0]
    const draws = 60000
    for (let i = 0; i < draws; i++) counts[finalValue(rng) - 1]++
    for (const count of counts) {
      // 10000 expected each, with a spread of about 91: allow four times that
      expect(Math.abs(count - draws / 6)).toBeLessThan(400)
    }
  })

  it('does not depend on how long the button was held: it is drawn only when the dice stop', () => {
    // The same random numbers give the same dice, whether the roll lasted 24 changes or 100.
    const quick = rollFinal(initialGame(), seeded(99))
    flipCountFor(5000) // the length of the hold is not an input of rollFinal
    const slow = rollFinal(initialGame(), seeded(99))
    expect(slow.dice).toEqual(quick.dice)
  })

  it('draws all five dice with the same chance when nothing is held', () => {
    const rng = seeded(31)
    const perDie = Array.from({ length: DICE_COUNT }, () => [0, 0, 0, 0, 0, 0])
    const rolls = 12000
    for (let i = 0; i < rolls; i++) {
      const game = rollFinal(initialGame(), rng)
      game.dice.forEach((face, die) => perDie[die][face - 1]++)
    }
    for (const counts of perDie) {
      for (const count of counts) expect(Math.abs(count - rolls / 6)).toBeLessThan(200)
    }
  })
})
