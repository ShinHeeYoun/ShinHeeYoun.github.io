import { describe, expect, it } from 'vitest'
import {
  MAX_LENGTH,
  backspace,
  combinations,
  continuesResult,
  evaluate,
  factorial,
  formatNumber,
  insertText,
  keyText,
  normalize,
  permutations,
  press,
  type Context,
} from './controller'

const DEG: Context = { angle: 'deg', ans: 0 }
const RAD: Context = { angle: 'rad', ans: 0 }

function value(expression: string, context: Context = DEG): number {
  const result = evaluate(expression, context)
  if (!result.ok) throw new Error(`"${expression}" failed: ${result.error}`)
  return result.value
}

function error(expression: string, context: Context = DEG): string {
  const result = evaluate(expression, context)
  if (result.ok) throw new Error(`"${expression}" should fail but gave ${result.value}`)
  return result.error
}

describe('arithmetic', () => {
  it('adds, subtracts, multiplies and divides', () => {
    expect(value('2+3')).toBe(5)
    expect(value('9-4')).toBe(5)
    expect(value('6*7')).toBe(42)
    expect(value('8/4')).toBe(2)
    expect(value('6×7')).toBe(42)
    expect(value('8÷4')).toBe(2)
    expect(value('9−4')).toBe(5)
  })

  it('does multiplication and division before addition and subtraction', () => {
    expect(value('2+3*4')).toBe(14)
    expect(value('2*3+4')).toBe(10)
    expect(value('10-6/3')).toBe(8)
    expect(value('100/10/5')).toBe(2)
    expect(value('10-3-2')).toBe(5)
  })

  it('uses brackets', () => {
    expect(value('(2+3)*4')).toBe(20)
    expect(value('2*(3+4)')).toBe(14)
    expect(value('((1+2)*(3+4))')).toBe(21)
  })

  it('reads decimals and exponents', () => {
    expect(value('1.5+1.5')).toBe(3)
    expect(value('.5*4')).toBe(2)
    expect(value('2e3')).toBe(2000)
    expect(value('1.5E-3')).toBeCloseTo(0.0015)
    expect(value('2.')).toBe(2)
  })

  it('reads a sign in front of a value', () => {
    expect(value('-5+8')).toBe(3)
    expect(value('+5')).toBe(5)
    expect(value('--5')).toBe(5)
    expect(value('2*-3')).toBe(-6)
    expect(value('4--2')).toBe(6)
  })

  it('works out the sign of a power the way mathematics does', () => {
    expect(value('-2^2')).toBe(-4)
    expect(value('(-2)^2')).toBe(4)
    expect(value('2^-2')).toBe(0.25)
    expect(value('2^3^2')).toBe(512)
    expect(value('2^3*2')).toBe(16)
  })

  it('multiplies when there is no sign between two values', () => {
    expect(value('2(3+4)')).toBe(14)
    expect(value('(1+1)(2+2)')).toBe(8)
    expect(value('2π')).toBeCloseTo(2 * Math.PI)
    expect(value('2sin(30)')).toBeCloseTo(1)
    expect(value('3e')).toBeCloseTo(3 * Math.E)
    expect(value('2pi')).toBeCloseTo(2 * Math.PI)
  })

  it('treats % as a hundredth and ! as a factorial', () => {
    expect(value('50%')).toBe(0.5)
    expect(value('200*10%')).toBe(20)
    expect(value('5!')).toBe(120)
    expect(value('3!+1')).toBe(7)
    expect(value('2^3!')).toBe(64)
    expect(value('4!%')).toBe(0.24)
  })

  it('closes a bracket that is left open at the end', () => {
    expect(value('(2+3')).toBe(5)
    expect(value('2*(3+(4')).toBe(14)
    expect(value('sqrt(16')).toBe(4)
  })

  it('ignores spaces', () => {
    expect(value(' 2 + 3 * 4 ')).toBe(14)
  })
})

describe('constants and Ans', () => {
  it('knows π, e and the last result', () => {
    expect(value('π')).toBe(Math.PI)
    expect(value('pi')).toBe(Math.PI)
    expect(value('e')).toBe(Math.E)
    expect(value('Ans*2', { angle: 'deg', ans: 21 })).toBe(42)
    expect(value('ans+1', { angle: 'deg', ans: -1 })).toBe(0)
  })
})

describe('angles', () => {
  it('works in degrees', () => {
    expect(value('sin(30)')).toBeCloseTo(0.5)
    expect(value('cos(60)')).toBeCloseTo(0.5)
    expect(value('tan(45)')).toBeCloseTo(1)
    expect(value('asin(1)')).toBeCloseTo(90)
    expect(value('acos(0)')).toBeCloseTo(90)
    expect(value('atan(1)')).toBeCloseTo(45)
  })

  it('works in radians', () => {
    expect(value('sin(π/2)', RAD)).toBeCloseTo(1)
    expect(value('cos(π)', RAD)).toBeCloseTo(-1)
    expect(value('asin(1)', RAD)).toBeCloseTo(Math.PI / 2)
    expect(value('atan(1)', RAD)).toBeCloseTo(Math.PI / 4)
  })

  it('gives exactly zero where the answer is zero', () => {
    expect(value('sin(180)')).toBe(0)
    expect(value('cos(90)')).toBe(0)
    expect(value('sin(π)', RAD)).toBe(0)
    expect(value('sin(360)')).toBe(0)
  })

  it('refuses tan where it is not defined', () => {
    expect(error('tan(90)')).toContain('정의되지 않는')
    expect(error('tan(270)')).toContain('정의되지 않는')
    expect(value('tan(0)')).toBe(0)
  })

  it('keeps asin and acos to the numbers from -1 to 1', () => {
    expect(error('asin(2)')).toContain('−1')
    expect(error('acos(-1.5)')).toContain('−1')
    expect(value('acos(-1)')).toBeCloseTo(180)
  })
})

describe('functions', () => {
  it('works out logarithms and powers', () => {
    expect(value('ln(e)')).toBeCloseTo(1)
    expect(value('log(1000)')).toBeCloseTo(3)
    expect(value('log2(8)')).toBeCloseTo(3)
    expect(value('log(1)')).toBe(0)
    expect(value('exp(0)')).toBe(1)
    expect(value('10^2')).toBe(100)
    expect(value('e^(0)')).toBe(1)
  })

  it('works out roots and absolute values', () => {
    expect(value('sqrt(16)')).toBe(4)
    expect(value('√(81)')).toBe(9)
    expect(value('√9')).toBe(3)
    expect(value('cbrt(27)')).toBeCloseTo(3)
    expect(value('∛(-8)')).toBeCloseTo(-2)
    expect(value('abs(-7)')).toBe(7)
  })

  it('rounds', () => {
    expect(value('floor(2.7)')).toBe(2)
    expect(value('ceil(2.1)')).toBe(3)
    expect(value('round(2.5)')).toBe(3)
  })

  it('has the hyperbolic functions', () => {
    expect(value('sinh(0)')).toBe(0)
    expect(value('cosh(0)')).toBe(1)
    expect(value('tanh(0)')).toBe(0)
  })

  it('takes two values for nCr, nPr, mod and pow', () => {
    expect(value('nCr(5,2)')).toBe(10)
    expect(value('nPr(5,2)')).toBe(20)
    expect(value('mod(17,5)')).toBe(2)
    expect(value('mod(-1,5)')).toBe(4)
    expect(value('pow(2,10)')).toBe(1024)
    expect(value('ncr(4,2)')).toBe(6)
  })

  it('nests', () => {
    expect(value('sqrt(abs(-16))+nCr(4,2)')).toBe(10)
    expect(value('sin(asin(0.5))')).toBeCloseTo(0.5)
  })

  it('is not case-sensitive', () => {
    expect(value('SIN(30)')).toBeCloseTo(0.5)
    expect(value('Sqrt(4)')).toBe(2)
  })
})

describe('factorial, combinations, permutations', () => {
  it('works them out', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(10)).toBe(3628800)
    expect(factorial(170)).toBeGreaterThan(1e306)
    expect(combinations(10, 3)).toBe(120)
    expect(combinations(52, 5)).toBe(2598960)
    expect(combinations(6, 0)).toBe(1)
    expect(combinations(6, 6)).toBe(1)
    expect(permutations(6, 3)).toBe(120)
    expect(permutations(6, 0)).toBe(1)
  })

  it('refuses what is not defined', () => {
    expect(error('(-1)!')).toContain('정수')
    expect(error('2.5!')).toContain('정수')
    expect(error('171!')).toContain('너무 큽니다')
    expect(error('nCr(3,5)')).toContain('nCr')
    expect(error('nPr(3,-1)')).toContain('nPr')
    expect(error('nCr(2.5,1)')).toContain('nCr')
  })
})

describe('errors', () => {
  it('refuses to divide by zero', () => {
    expect(error('1/0')).toContain('0으로')
    expect(error('5÷(3-3)')).toContain('0으로')
    expect(error('0^-1')).toContain('0으로')
    expect(error('mod(5,0)')).toContain('0으로')
  })

  it('refuses values outside the real numbers', () => {
    expect(error('sqrt(-1)')).toContain('제곱근')
    expect(error('ln(0)')).toContain('0보다 큰')
    expect(error('log(-5)')).toContain('0보다 큰')
    expect(error('(-8)^0.5')).toContain('계산할 수 없는')
  })

  it('refuses a number too big to keep', () => {
    expect(error('10^400')).toContain('너무 큽니다')
    expect(error('exp(1000)')).toContain('너무 큽니다')
  })

  it('refuses text that is not an expression', () => {
    for (const text of ['', '   ', '2+', '*3', '2**3', '()', '(2+3))', '2 3)', '2,3', 'sin', 'sin 30', '1..2', '.']) {
      expect(error(text)).toBeTruthy()
    }
    expect(error('foo(1)')).toContain('foo')
    expect(error('2+x')).toContain('x')
    expect(error('2$3')).toContain('$')
    expect(error('nCr(1)')).toContain('2개')
    expect(error('sin(1,2)')).toContain('1개')
  })

  it('refuses an expression that is too long', () => {
    expect(error('1+'.repeat(MAX_LENGTH))).toContain('너무 깁니다')
  })

  it('does not let a pasted script run', () => {
    expect(error('alert(1)')).toContain('alert')
    expect(error('constructor')).toContain('constructor')
    expect(error('__proto__')).toBeTruthy()
    expect(error('toString(1)')).toBeTruthy()
  })
})

describe('formatNumber', () => {
  it('shows 12 digits, so that rounding noise does not show', () => {
    expect(formatNumber(0.1 + 0.2)).toBe('0.3')
    expect(formatNumber(1 / 3)).toBe('0.333333333333')
    expect(formatNumber(2 / 3)).toBe('0.666666666667')
    expect(formatNumber(Math.sin((30 * Math.PI) / 180))).toBe('0.5')
    expect(formatNumber(Math.PI)).toBe('3.14159265359')
  })

  it('shows whole numbers in full', () => {
    expect(formatNumber(42)).toBe('42')
    expect(formatNumber(-7)).toBe('-7')
    expect(formatNumber(3628800)).toBe('3628800')
    expect(formatNumber(123456789012)).toBe('123456789012')
  })

  it('shows zero as 0, even negative zero', () => {
    expect(formatNumber(0)).toBe('0')
    expect(formatNumber(-0)).toBe('0')
  })

  it('shows very large and very small numbers with an exponent that can be typed back in', () => {
    expect(formatNumber(1e20)).toBe('1e+20')
    expect(formatNumber(1.5e-9)).toBe('1.5e-9')
    expect(formatNumber(-2.5e30)).toBe('-2.5e+30')
    expect(value(formatNumber(1.5e-9))).toBeCloseTo(1.5e-9, 20)
    expect(value(formatNumber(1.5e20))).toBe(1.5e20)
  })
})

describe('keys', () => {
  it('puts text where the cursor is, or over what is selected', () => {
    expect(insertText('12+', { start: 3, end: 3 }, '4')).toEqual({ expression: '12+4', caret: 4 })
    expect(insertText('12+3', { start: 0, end: 0 }, '(')).toEqual({ expression: '(12+3', caret: 1 })
    expect(insertText('12+34', { start: 3, end: 5 }, '9')).toEqual({ expression: '12+9', caret: 4 })
    expect(insertText('12+34', { start: 5, end: 3 }, '9')).toEqual({ expression: '12+9', caret: 4 })
  })

  it('deletes one character, or the selection', () => {
    expect(backspace('123', { start: 3, end: 3 })).toEqual({ expression: '12', caret: 2 })
    expect(backspace('123', { start: 1, end: 3 })).toEqual({ expression: '1', caret: 1 })
    expect(backspace('123', { start: 0, end: 0 })).toEqual({ expression: '123', caret: 0 })
    expect(backspace('1234', { start: 2, end: 2 })).toEqual({ expression: '134', caret: 1 })
  })

  it('deletes a function name with its bracket, or Ans, in one go', () => {
    expect(backspace('2+sin(', { start: 6, end: 6 })).toEqual({ expression: '2+', caret: 2 })
    expect(backspace('sqrt(9)', { start: 5, end: 5 })).toEqual({ expression: '9)', caret: 0 })
    expect(backspace('Ans+1', { start: 3, end: 3 })).toEqual({ expression: '+1', caret: 0 })
    expect(backspace('2+(', { start: 3, end: 3 })).toEqual({ expression: '2+', caret: 2 })
    expect(backspace('sin(30', { start: 6, end: 6 })).toEqual({ expression: 'sin(3', caret: 5 })
  })

  it('types into the expression as usual before "="', () => {
    expect(press('2+', false, { start: 2, end: 2 }, '3')).toEqual({ expression: '2+3', caret: 3 })
  })

  it('carries on from the result after "=" when an operator is pressed', () => {
    for (const text of ['+', '-', '×', '÷', '*', '/', '^', '%', '!']) {
      expect(press('2+3', true, { start: 3, end: 3 }, text)).toEqual({ expression: `Ans${text}`, caret: 4 })
    }
  })

  it('starts again after "=" when a number or a function is pressed', () => {
    expect(press('2+3', true, { start: 3, end: 3 }, '7')).toEqual({ expression: '7', caret: 1 })
    expect(press('2+3', true, { start: 3, end: 3 }, 'sin(')).toEqual({ expression: 'sin(', caret: 4 })
    expect(press('2+3', true, { start: 3, end: 3 }, '(')).toEqual({ expression: '(', caret: 1 })
    expect(press('2+3', true, { start: 0, end: 3 }, 'π')).toEqual({ expression: 'π', caret: 1 })
  })

  it('knows which text carries on from a result', () => {
    expect(continuesResult('+')).toBe(true)
    expect(continuesResult('^2')).toBe(true)
    expect(continuesResult('7')).toBe(false)
    expect(continuesResult('sin(')).toBe(false)
    expect(continuesResult('(')).toBe(false)
    expect(continuesResult('.')).toBe(false)
  })

  it('shows * and / as × and ÷', () => {
    expect(keyText('*')).toBe('×')
    expect(keyText('/')).toBe('÷')
    expect(keyText('5')).toBe('5')
    expect(normalize('2*3/4')).toBe('2×3÷4')
    expect(normalize('x'.repeat(MAX_LENGTH + 50))).toHaveLength(MAX_LENGTH)
  })

  it('gives the same answer for what the buttons write and what the keys type', () => {
    expect(value(normalize('2*3'))).toBe(value('2×3'))
    expect(value('Ans^2', { angle: 'deg', ans: 9 })).toBe(81)
    expect(value('e^(1)')).toBeCloseTo(Math.E)
    expect(value('1÷(4)')).toBe(0.25)
  })
})
