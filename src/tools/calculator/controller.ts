// A scientific calculator that reads a whole expression, such as 2+3*sin(30)^2, rather than one key at a time. The rules
// live here, apart from the screen: reading the expression (no eval), working it out, and writing the number back as text.

export type AngleMode = 'deg' | 'rad'

export type CalcResult = { ok: true; value: number } | { ok: false; error: string }

export type Context = {
  angle: AngleMode // what sin(30) means: 30 degrees or 30 radians
  ans: number // what "Ans" stands for: the last result
}

class CalcError extends Error {}

// Whether the table has the name itself, not just something every object has (constructor, toString...).
const own = (table: object, name: string) => Object.prototype.hasOwnProperty.call(table, name)

const fail = (message: string): never => {
  throw new CalcError(message)
}

export const MAX_LENGTH = 200

// ---- reading the text

type Token =
  | { type: 'num'; value: number }
  | { type: 'id'; name: string }
  | { type: 'op'; op: '+' | '-' | '*' | '/' | '^' | '!' | '%' | '(' | ')' | ',' }

const SYMBOLS: Record<string, Token> = {
  '+': { type: 'op', op: '+' },
  '-': { type: 'op', op: '-' },
  '−': { type: 'op', op: '-' },
  '*': { type: 'op', op: '*' },
  '×': { type: 'op', op: '*' },
  '/': { type: 'op', op: '/' },
  '÷': { type: 'op', op: '/' },
  '^': { type: 'op', op: '^' },
  '!': { type: 'op', op: '!' },
  '%': { type: 'op', op: '%' },
  '(': { type: 'op', op: '(' },
  ')': { type: 'op', op: ')' },
  ',': { type: 'op', op: ',' },
  'π': { type: 'id', name: 'pi' },
  '√': { type: 'id', name: 'sqrt' },
  '∛': { type: 'id', name: 'cbrt' },
}

// 12, 1.5, .5, 2e5, 1.5E-3. An "e" with no digits after it is not an exponent (2e is 2 times the number e).
const NUMBER = /^(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/
// log2 is the one name with a digit in it; elsewhere a digit after a name is a number (pi2 is π times 2).
const WORD = /^(?:log2(?=\()|[A-Za-z]+)/

function tokenize(text: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  while (i < text.length) {
    const rest = text.slice(i)
    const char = text[i]
    if (/\s/.test(char)) {
      i += 1
      continue
    }
    const number = NUMBER.exec(rest)
    if (number) {
      tokens.push({ type: 'num', value: Number(number[0]) })
      i += number[0].length
      if (text[i] === '.') fail(BAD_EXPRESSION) // 1..2, 1.5.2
      continue
    }
    const word = WORD.exec(rest)
    if (word) {
      tokens.push({ type: 'id', name: word[0].toLowerCase() })
      i += word[0].length
      continue
    }
    const symbol = SYMBOLS[char]
    if (!symbol) fail(`알 수 없는 문자입니다: ${char}`)
    tokens.push(symbol)
    i += 1
  }
  return tokens
}

// ---- the functions

const BAD_EXPRESSION = '수식이 올바르지 않습니다.'
const OUT_OF_RANGE = '계산할 수 없는 값입니다.'
const TOO_BIG = '값이 너무 큽니다.'
const DIVIDE_BY_ZERO = '0으로 나눌 수 없습니다.'

// A result that should be zero but is a hair off because of how computers keep numbers: sin(π) is 1.2e-16.
const snap = (value: number) => (Math.abs(value) < 1e-15 ? 0 : value)

const isInteger = (value: number) => Number.isInteger(value)

export function factorial(n: number): number {
  if (!isInteger(n) || n < 0) return fail('n!은 0 이상의 정수만 계산할 수 있습니다.')
  if (n > 170) return fail(TOO_BIG)
  let result = 1
  for (let i = 2; i <= n; i += 1) result *= i
  return result
}

export function combinations(n: number, r: number): number {
  if (!isInteger(n) || !isInteger(r) || n < 0 || r < 0 || r > n) return fail('nCr은 0 ≤ r ≤ n인 정수만 계산할 수 있습니다.')
  const k = Math.min(r, n - r)
  let result = 1
  for (let i = 1; i <= k; i += 1) result = (result * (n - k + i)) / i
  return Math.round(result)
}

export function permutations(n: number, r: number): number {
  if (!isInteger(n) || !isInteger(r) || n < 0 || r < 0 || r > n) return fail('nPr은 0 ≤ r ≤ n인 정수만 계산할 수 있습니다.')
  let result = 1
  for (let i = 0; i < r; i += 1) result *= n - i
  return result
}

type Fn = { arity: number; run: (args: number[], context: Context) => number }

const toRadians = (x: number, context: Context) => (context.angle === 'deg' ? (x * Math.PI) / 180 : x)
const fromRadians = (x: number, context: Context) => (context.angle === 'deg' ? (x * 180) / Math.PI : x)

const unit = (x: number) => (x < -1 || x > 1 ? fail('−1 이상 1 이하의 값만 넣을 수 있습니다.') : x)
const positive = (x: number) => (x <= 0 ? fail('0보다 큰 값만 넣을 수 있습니다.') : x)

const FUNCTIONS: Record<string, Fn> = {
  sin: { arity: 1, run: ([x], c) => snap(Math.sin(toRadians(x, c))) },
  cos: { arity: 1, run: ([x], c) => snap(Math.cos(toRadians(x, c))) },
  tan: {
    arity: 1,
    run: ([x], c) => {
      const r = toRadians(x, c)
      if (snap(Math.cos(r)) === 0) return fail('tan이 정의되지 않는 값입니다.')
      return snap(Math.tan(r))
    },
  },
  asin: { arity: 1, run: ([x], c) => snap(fromRadians(Math.asin(unit(x)), c)) },
  acos: { arity: 1, run: ([x], c) => snap(fromRadians(Math.acos(unit(x)), c)) },
  atan: { arity: 1, run: ([x], c) => snap(fromRadians(Math.atan(x), c)) },
  sinh: { arity: 1, run: ([x]) => Math.sinh(x) },
  cosh: { arity: 1, run: ([x]) => Math.cosh(x) },
  tanh: { arity: 1, run: ([x]) => Math.tanh(x) },
  ln: { arity: 1, run: ([x]) => Math.log(positive(x)) },
  log: { arity: 1, run: ([x]) => snap(Math.log10(positive(x))) },
  log2: { arity: 1, run: ([x]) => snap(Math.log2(positive(x))) },
  exp: { arity: 1, run: ([x]) => Math.exp(x) },
  sqrt: { arity: 1, run: ([x]) => (x < 0 ? fail('음수의 제곱근은 계산할 수 없습니다.') : Math.sqrt(x)) },
  cbrt: { arity: 1, run: ([x]) => Math.cbrt(x) },
  abs: { arity: 1, run: ([x]) => Math.abs(x) },
  floor: { arity: 1, run: ([x]) => Math.floor(x) },
  ceil: { arity: 1, run: ([x]) => Math.ceil(x) },
  round: { arity: 1, run: ([x]) => Math.round(x) },
  fact: { arity: 1, run: ([x]) => factorial(x) },
  ncr: { arity: 2, run: ([n, r]) => combinations(n, r) },
  npr: { arity: 2, run: ([n, r]) => permutations(n, r) },
  mod: { arity: 2, run: ([a, b]) => (b === 0 ? fail(DIVIDE_BY_ZERO) : a - b * Math.floor(a / b)) },
  pow: { arity: 2, run: ([a, b]) => power(a, b) },
}

const CONSTANTS: Record<string, (context: Context) => number> = {
  pi: () => Math.PI,
  e: () => Math.E,
  ans: (context) => context.ans,
}

function power(base: number, exponent: number): number {
  if (base === 0 && exponent < 0) return fail(DIVIDE_BY_ZERO)
  const result = Math.pow(base, exponent)
  if (Number.isNaN(result)) return fail(OUT_OF_RANGE)
  return result
}

// ---- working it out

// Precedence, from the loosest: + -  |  × ÷ and a product with no sign (2π, 3(4+5))  |  a sign  |  ^ (to the right)  |  ! %.
// So -2^2 is -4, and 2^3^2 is 2^9. A bracket left open at the end counts as closed, so a half-typed expression still
// shows its result.
class Parser {
  private position = 0

  constructor(
    private readonly tokens: Token[],
    private readonly context: Context,
  ) {}

  parse(): number {
    if (this.tokens.length === 0) return fail(BAD_EXPRESSION)
    const value = this.sum()
    if (this.position < this.tokens.length) return fail(BAD_EXPRESSION)
    return value
  }

  private peek(): Token | undefined {
    return this.tokens[this.position]
  }

  private isOp(op: string): boolean {
    const token = this.peek()
    return token !== undefined && token.type === 'op' && token.op === op
  }

  private take(): Token {
    const token = this.tokens[this.position]
    if (!token) return fail(BAD_EXPRESSION)
    this.position += 1
    return token
  }

  // ")" is required unless the text just ends.
  private close() {
    if (this.position >= this.tokens.length) return
    if (!this.isOp(')')) fail(BAD_EXPRESSION)
    this.position += 1
  }

  private startsValue(): boolean {
    const token = this.peek()
    return token !== undefined && (token.type === 'num' || token.type === 'id' || (token.type === 'op' && token.op === '('))
  }

  private startsPlainValue(): boolean {
    const token = this.peek()
    return token !== undefined && (token.type === 'num' || (token.type === 'id' && own(CONSTANTS, token.name)))
  }

  private sum(): number {
    let value = this.product()
    while (this.isOp('+') || this.isOp('-')) {
      const plus = this.isOp('+')
      this.position += 1
      const right = this.product()
      value = plus ? value + right : value - right
    }
    return value
  }

  private product(): number {
    let value = this.signed()
    for (;;) {
      if (this.isOp('*')) {
        this.position += 1
        value *= this.signed()
      } else if (this.isOp('/')) {
        this.position += 1
        const right = this.signed()
        if (right === 0) return fail(DIVIDE_BY_ZERO)
        value /= right
      } else if (this.startsValue()) {
        value *= this.signed() // 2π, 3(4+5), 2sin(30)
      } else {
        return value
      }
    }
  }

  private signed(): number {
    if (this.isOp('-')) {
      this.position += 1
      return -this.signed()
    }
    if (this.isOp('+')) {
      this.position += 1
      return this.signed()
    }
    return this.powered()
  }

  private powered(): number {
    const base = this.postfix()
    if (!this.isOp('^')) return base
    this.position += 1
    return power(base, this.signed())
  }

  private postfix(): number {
    let value = this.primary()
    for (;;) {
      if (this.isOp('!')) {
        this.position += 1
        value = factorial(value)
      } else if (this.isOp('%')) {
        this.position += 1
        value /= 100
      } else {
        return value
      }
    }
  }

  private primary(): number {
    const token = this.take()
    if (token.type === 'num') return token.value
    if (token.type === 'op') {
      if (token.op !== '(') return fail(BAD_EXPRESSION)
      const value = this.sum()
      this.close()
      return value
    }

    // Only the names written in the tables below: not what every object has (constructor, toString...).
    if (own(CONSTANTS, token.name)) return CONSTANTS[token.name](this.context)
    if (!own(FUNCTIONS, token.name)) return fail(`알 수 없는 이름입니다: ${token.name}`)
    const fn = FUNCTIONS[token.name]
    // √9 and ∛8 need no bracket.
    if (!this.isOp('(') && (token.name === 'sqrt' || token.name === 'cbrt') && this.startsPlainValue()) {
      return fn.run([this.postfix()], this.context)
    }
    if (!this.isOp('(')) return fail(`${token.name} 뒤에는 ( 가 필요합니다.`)
    this.position += 1
    const args = [this.sum()]
    while (this.isOp(',')) {
      this.position += 1
      args.push(this.sum())
    }
    this.close()
    if (args.length !== fn.arity) return fail(`${token.name}에는 값이 ${fn.arity}개 필요합니다.`)
    return fn.run(args, this.context)
  }
}

export function evaluate(expression: string, context: Context): CalcResult {
  try {
    if (expression.length > MAX_LENGTH) return { ok: false, error: '수식이 너무 깁니다.' }
    const value = new Parser(tokenize(expression), context).parse()
    if (Number.isNaN(value)) return { ok: false, error: OUT_OF_RANGE }
    if (!Number.isFinite(value)) return { ok: false, error: TOO_BIG }
    return { ok: true, value }
  } catch (error) {
    if (error instanceof CalcError) return { ok: false, error: error.message }
    throw error
  }
}

// ---- writing a number

// 12 significant digits, so that 0.1+0.2 shows as 0.3; very large and very small numbers in the form 1.5e+20.
export function formatNumber(value: number): string {
  if (value === 0) return '0'
  const size = Math.abs(value)
  if (size >= 1e15 || size < 1e-6) {
    const [mantissa, exponent] = value.toExponential(11).split('e')
    return `${mantissa.includes('.') ? mantissa.replace(/\.?0+$/, '') : mantissa}e${exponent}`
  }
  return String(parseFloat(value.toPrecision(12)))
}

// ---- keys

export type Selection = { start: number; end: number }
export type Edit = { expression: string; caret: number }

// The text with `text` put where the cursor is (in place of what is selected).
export function insertText(expression: string, selection: Selection, text: string): Edit {
  const start = Math.min(selection.start, selection.end)
  const end = Math.max(selection.start, selection.end)
  return { expression: expression.slice(0, start) + text + expression.slice(end), caret: start + text.length }
}

// A name with its bracket (sin(, sqrt() or Ans is deleted whole by one Backspace.
const WHOLE_TOKEN = /(?:[A-Za-z]+\(|Ans)$/i

export function backspace(expression: string, selection: Selection): Edit {
  const start = Math.min(selection.start, selection.end)
  const end = Math.max(selection.start, selection.end)
  if (start !== end) return { expression: expression.slice(0, start) + expression.slice(end), caret: start }
  if (start === 0) return { expression, caret: 0 }
  const before = expression.slice(0, start)
  const token = WHOLE_TOKEN.exec(before)
  const cut = token ? token[0].length : 1
  return { expression: before.slice(0, before.length - cut) + expression.slice(start), caret: start - cut }
}

// Text that goes after a value rather than starting one: after "=", it carries on from the result.
export const continuesResult = (text: string) => /^[+\-×÷*/^%!−]/.test(text)

// A key press. Right after "=" (done), a key that starts something new replaces the old expression, while an
// operator carries on from the result (Ans).
export function press(expression: string, done: boolean, selection: Selection, text: string): Edit {
  if (!done) return insertText(expression, selection, text)
  const fresh = continuesResult(text) ? `Ans${text}` : text
  return { expression: fresh, caret: fresh.length }
}

// The text a typed key stands for: * and / are shown as × and ÷.
export function keyText(key: string): string {
  return key === '*' ? '×' : key === '/' ? '÷' : key
}

// Text from outside (a paste) made to match what the keys give.
export const normalize = (text: string) => text.replace(/\*/g, '×').replace(/\//g, '÷').slice(0, MAX_LENGTH)
