import { Delete, Keyboard } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  MAX_LENGTH,
  backspace,
  evaluate,
  formatNumber,
  keyText,
  normalize,
  press,
  type AngleMode,
  type Edit,
} from './controller'

type Key =
  | { kind: 'text'; label: string; text: string; aria?: string; tone?: 'number' | 'operator' | 'function' }
  | { kind: 'action'; label: string; action: 'clear' | 'back' | 'equals' | 'mc' | 'mr' | 'mplus' | 'mminus'; aria?: string }

const text = (label: string, insert: string, aria?: string, tone: 'number' | 'operator' | 'function' = 'function'): Key => ({
  kind: 'text',
  label,
  text: insert,
  aria,
  tone,
})

// The scientific keys, five to a row. What a key writes is what could also be typed.
const SCIENTIFIC: Key[] = [
  text('sin', 'sin(', '사인'),
  text('cos', 'cos(', '코사인'),
  text('tan', 'tan(', '탄젠트'),
  text('π', 'π', '파이'),
  text('e', 'e', '자연상수 e'),
  text('sin⁻¹', 'asin(', '아크사인'),
  text('cos⁻¹', 'acos(', '아크코사인'),
  text('tan⁻¹', 'atan(', '아크탄젠트'),
  text('Ans', 'Ans', '이전 결과'),
  text('n!', '!', '팩토리얼'),
  text('ln', 'ln(', '자연로그'),
  text('log', 'log(', '상용로그'),
  text('√', '√(', '제곱근'),
  text('∛', '∛(', '세제곱근'),
  text('|x|', 'abs(', '절댓값'),
  text('x²', '^2', '제곱'),
  text('xʸ', '^', '거듭제곱'),
  text('eˣ', 'e^(', 'e의 거듭제곱'),
  text('10ˣ', '10^(', '10의 거듭제곱'),
  text('1/x', '1÷(', '역수'),
  text('nCr', 'nCr(', '조합'),
  text('nPr', 'nPr(', '순열'),
  text(',', ',', '쉼표'),
  text('%', '%', '퍼센트'),
  { kind: 'action', label: 'MC', action: 'mc', aria: '메모리 지우기' },
  { kind: 'action', label: 'MR', action: 'mr', aria: '메모리 불러오기' },
  { kind: 'action', label: 'M+', action: 'mplus', aria: '메모리에 더하기' },
  { kind: 'action', label: 'M−', action: 'mminus', aria: '메모리에서 빼기' },
]

const NUMERIC: Key[] = [
  { kind: 'action', label: 'AC', action: 'clear', aria: '모두 지우기' },
  { kind: 'action', label: '⌫', action: 'back', aria: '한 칸 지우기' },
  text('(', '(', '여는 괄호', 'operator'),
  text(')', ')', '닫는 괄호', 'operator'),
  text('7', '7', undefined, 'number'),
  text('8', '8', undefined, 'number'),
  text('9', '9', undefined, 'number'),
  text('÷', '÷', '나누기', 'operator'),
  text('4', '4', undefined, 'number'),
  text('5', '5', undefined, 'number'),
  text('6', '6', undefined, 'number'),
  text('×', '×', '곱하기', 'operator'),
  text('1', '1', undefined, 'number'),
  text('2', '2', undefined, 'number'),
  text('3', '3', undefined, 'number'),
  text('−', '-', '빼기', 'operator'),
  text('0', '0', undefined, 'number'),
  text('.', '.', '소수점', 'number'),
  text('+', '+', '더하기', 'operator'),
]

type Entry = { expression: string; result: string }

const HISTORY_SIZE = 12

export default function CalculatorView() {
  const inputRef = useRef<HTMLInputElement>(null)
  const caretRef = useRef<number | null>(null)
  const [expression, setExpression] = useState('')
  const [done, setDone] = useState(false) // "=" was just pressed
  const [error, setError] = useState<string | null>(null)
  const [angle, setAngle] = useState<AngleMode>('deg')
  const [ans, setAns] = useState(0)
  const [memory, setMemory] = useState(0)
  const [history, setHistory] = useState<Entry[]>([])
  // On a phone the on-screen keys are used, and the phone's own keyboard would cover them.
  const touch = useMemo(() => window.matchMedia('(pointer: coarse)').matches, [])

  const context = useMemo(() => ({ angle, ans }), [angle, ans])
  const live = useMemo(() => (expression.trim() === '' ? null : evaluate(expression, context)), [expression, context])

  // After the text changes the cursor goes where the edit left it.
  useLayoutEffect(() => {
    const input = inputRef.current
    if (input && caretRef.current !== null) {
      input.setSelectionRange(caretRef.current, caretRef.current)
      caretRef.current = null
    }
  })

  useEffect(() => {
    if (!touch) inputRef.current?.focus()
  }, [touch])

  const apply = useCallback((edit: Edit) => {
    caretRef.current = edit.caret
    setExpression(edit.expression.slice(0, MAX_LENGTH))
    setDone(false)
    setError(null)
  }, [])

  const selection = () => {
    const input = inputRef.current
    return { start: input?.selectionStart ?? expression.length, end: input?.selectionEnd ?? expression.length }
  }

  const type = useCallback(
    (insert: string) => {
      const input = inputRef.current
      const at = { start: input?.selectionStart ?? expression.length, end: input?.selectionEnd ?? expression.length }
      apply(press(expression, done, at, insert))
      input?.focus()
    },
    [apply, done, expression],
  )

  const clear = useCallback(() => {
    setExpression('')
    setDone(false)
    setError(null)
    caretRef.current = 0
    inputRef.current?.focus()
  }, [])

  const calculate = useCallback(() => {
    if (expression.trim() === '') return
    const result = evaluate(expression, context)
    if (!result.ok) {
      setError(result.error)
      return
    }
    setError(null)
    setAns(result.value)
    setDone(true)
    setHistory((old) => [{ expression, result: formatNumber(result.value) }, ...old].slice(0, HISTORY_SIZE))
  }, [expression, context])

  // The value that M+ and M− use: the result if "=" was pressed, else what the expression comes to so far.
  const currentValue = (): number | null => (done ? ans : live && live.ok ? live.value : null)

  function runAction(action: Extract<Key, { kind: 'action' }>['action']) {
    if (action === 'clear') return clear()
    if (action === 'equals') return calculate()
    if (action === 'back') {
      if (done) return apply({ expression, caret: expression.length }) // leave the result alone for editing
      return apply(backspace(expression, selection()))
    }
    if (action === 'mc') return setMemory(0)
    if (action === 'mr') return type(formatNumber(memory))
    const value = currentValue()
    if (value === null) return
    setMemory((old) => old + (action === 'mplus' ? value : -value))
  }

  // One key of the keyboard. Returns true when the calculator handled it, so that the browser should not.
  const handleKey = useCallback(
    (event: { key: string; isComposing?: boolean }): boolean => {
      if (event.isComposing) return false
      if (event.key === 'Enter' || event.key === '=') {
        calculate()
        return true
      }
      if (event.key === 'Escape') {
        clear()
        return true
      }
      if (event.key === 'Backspace') {
        runAction('back')
        return true
      }
      if (event.key.length === 1 && event.key !== ' ') {
        type(keyText(event.key))
        return true
      }
      // Moving the cursor or deleting ends the "result" state: the expression is edited as it is.
      if (done && ['Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) setDone(false)
      return false
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [calculate, clear, type, done, expression],
  )

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.ctrlKey || event.metaKey || event.altKey) return // copy, paste, select all and the like
    if (handleKey({ key: event.key, isComposing: event.nativeEvent.isComposing })) event.preventDefault()
  }

  // Typing on the page without having clicked the display: the key goes to the calculator.
  useEffect(() => {
    function onDocumentKeyDown(event: globalThis.KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey || event.defaultPrevented) return
      const target = event.target as HTMLElement | null
      if (target && target !== document.body && target.closest('input, textarea, select, button, a, [contenteditable]')) return
      if (handleKey(event)) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onDocumentKeyDown)
    return () => document.removeEventListener('keydown', onDocumentKeyDown)
  }, [handleKey])

  // A key on the screen must not take the cursor out of the display.
  const keepFocus = (event: MouseEvent) => event.preventDefault()

  const result = done ? formatNumber(ans) : null
  const preview = !done && live && live.ok && !/^-?[\d.]+$/.test(expression.trim()) ? formatNumber(live.value) : null

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      <Card>
        <CardContent className="space-y-3 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-2">
            <div role="group" aria-label="각도 단위" className="flex gap-1">
              {(['deg', 'rad'] as const).map((mode) => (
                <Button
                  key={mode}
                  type="button"
                  size="sm"
                  variant={angle === mode ? 'default' : 'outline'}
                  aria-pressed={angle === mode}
                  onMouseDown={keepFocus}
                  onClick={() => setAngle(mode)}
                  className="h-7 px-2.5 text-xs"
                >
                  {mode === 'deg' ? 'DEG' : 'RAD'}
                </Button>
              ))}
            </div>
            <span className="text-xs text-muted-foreground" aria-live="polite">
              {memory !== 0 && `M = ${formatNumber(memory)}`}
            </span>
          </div>

          <input
            ref={inputRef}
            type="text"
            aria-label="수식"
            placeholder="수식을 입력하세요 (예: 2+3*sin(30))"
            value={expression}
            maxLength={MAX_LENGTH}
            inputMode={touch ? 'none' : 'text'}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            onKeyDown={onKeyDown}
            onChange={(event) => {
              const value = normalize(event.target.value)
              // Text added at the end of a result (typed with a keyboard that does not send key presses, such as a
              // phone's) goes the same way as a key: an operator carries on from the result, anything else starts again.
              if (done && value.length > expression.length && value.startsWith(expression)) {
                const tail = value.slice(expression.length)
                apply(press(expression, true, { start: expression.length, end: expression.length }, tail))
                return
              }
              caretRef.current = event.target.selectionStart
              setExpression(value)
              setDone(false)
              setError(null)
            }}
            className="w-full rounded-lg border bg-muted/50 px-4 py-3 text-right font-mono text-xl tabular-nums outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-2xl"
          />

          <div
            className={cn(
              'min-h-[2.75rem] break-all text-right font-mono text-3xl font-semibold tabular-nums sm:text-4xl',
              error && 'text-base font-medium text-destructive sm:text-base',
              !done && !error && 'text-muted-foreground',
            )}
            aria-live="polite"
            aria-label="계산 결과"
          >
            {error ?? (result !== null ? result : preview !== null ? `= ${preview}` : ' ')}
          </div>

          <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <Keyboard className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>
              키보드로 바로 입력할 수 있어요: 숫자, <code className="font-mono">+ - * / ^ ( ) % !</code>, 함수 이름(
              <code className="font-mono">sin(</code>, <code className="font-mono">sqrt(</code> …). Enter나 = 로 계산하고 Esc로 지웁니다. 계산 직후
              연산자를 누르면 그 결과에서 이어가고, 숫자를 누르면 새로 시작합니다.
            </span>
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-3 md:grid-cols-[5fr_4fr]">
        <div className="order-2 grid grid-cols-5 gap-2 md:order-1" aria-label="공학용 버튼">
          {SCIENTIFIC.map((key) => (
            <KeyButton key={key.label} def={key} onType={type} onAction={runAction} keepFocus={keepFocus} small />
          ))}
          <div className="col-span-2 flex items-center justify-center rounded-md border border-dashed px-1 text-center text-[11px] leading-tight text-muted-foreground">
            {memory !== 0 ? `M ${formatNumber(memory)}` : 'M 0'}
          </div>
        </div>

        <div className="order-1 grid grid-cols-4 gap-2 md:order-2" aria-label="숫자 버튼">
          {NUMERIC.map((key) => (
            <KeyButton key={key.label} def={key} onType={type} onAction={runAction} keepFocus={keepFocus} />
          ))}
          <Button
            type="button"
            size="lg"
            onMouseDown={keepFocus}
            onClick={calculate}
            aria-label="계산하기"
            className="col-span-4 h-12 text-xl"
          >
            =
          </Button>
        </div>
      </div>

      {history.length > 0 && (
        <Card>
          <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-base">기록</CardTitle>
            <Button type="button" variant="ghost" size="sm" className="gap-1.5" onClick={() => setHistory([])}>
              <Delete />
              기록 지우기
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="divide-y">
              {history.map((entry, index) => (
                <li key={`${index}-${entry.expression}`}>
                  <button
                    type="button"
                    onClick={() => apply({ expression: entry.expression, caret: entry.expression.length })}
                    className="flex w-full items-baseline justify-between gap-4 rounded-sm px-1 py-2 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    title="이 수식 다시 불러오기"
                  >
                    <span className="min-w-0 break-all font-mono text-sm text-muted-foreground">{entry.expression}</span>
                    <span className="shrink-0 font-mono text-base font-semibold tabular-nums">= {entry.result}</span>
                  </button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function KeyButton({
  def,
  onType,
  onAction,
  keepFocus,
  small = false,
}: {
  def: Key
  onType: (insert: string) => void
  onAction: (action: Extract<Key, { kind: 'action' }>['action']) => void
  keepFocus: (event: MouseEvent) => void
  small?: boolean
}) {
  const variant =
    def.kind === 'action'
      ? def.action === 'clear'
        ? 'destructive'
        : 'outline'
      : def.tone === 'number'
        ? 'secondary'
        : def.tone === 'operator'
          ? 'outline'
          : 'secondary'
  return (
    <Button
      type="button"
      variant={variant}
      aria-label={def.aria}
      onMouseDown={keepFocus}
      onClick={() => (def.kind === 'text' ? onType(def.text) : onAction(def.action))}
      className={cn('px-0', small ? 'h-11 text-sm' : 'h-12 text-lg', def.label === '0' && 'col-span-2')}
    >
      {def.label}
    </Button>
  )
}
