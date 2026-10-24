import { useReducer } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { calculatorReducer, initialState, type Operator } from './controller'

type ButtonDef =
  | { kind: 'digit'; label: string }
  | { kind: 'decimal'; label: string }
  | { kind: 'operator'; label: string; operator: Operator }
  | { kind: 'equals'; label: string }
  | { kind: 'clear'; label: string }

const BUTTONS: ButtonDef[] = [
  { kind: 'digit', label: '7' },
  { kind: 'digit', label: '8' },
  { kind: 'digit', label: '9' },
  { kind: 'operator', label: '÷', operator: '÷' },
  { kind: 'digit', label: '4' },
  { kind: 'digit', label: '5' },
  { kind: 'digit', label: '6' },
  { kind: 'operator', label: '×', operator: '×' },
  { kind: 'digit', label: '1' },
  { kind: 'digit', label: '2' },
  { kind: 'digit', label: '3' },
  { kind: 'operator', label: '-', operator: '-' },
  { kind: 'digit', label: '0' },
  { kind: 'decimal', label: '.' },
  { kind: 'equals', label: '=' },
  { kind: 'operator', label: '+', operator: '+' },
  { kind: 'clear', label: 'C' },
]

export default function CalculatorView() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  function handleClick(button: ButtonDef) {
    switch (button.kind) {
      case 'digit':
        dispatch({ type: 'digit', digit: button.label })
        break
      case 'decimal':
        dispatch({ type: 'decimal' })
        break
      case 'operator':
        dispatch({ type: 'operator', operator: button.operator })
        break
      case 'equals':
        dispatch({ type: 'equals' })
        break
      case 'clear':
        dispatch({ type: 'clear' })
        break
    }
  }

  return (
    <Card className="mx-auto max-w-xs p-4">
      <div
        className="mb-4 break-all rounded-lg bg-muted p-4 text-right text-3xl font-semibold tabular-nums"
        aria-live="polite"
        aria-label="계산 결과"
      >
        {state.display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {BUTTONS.map((button, index) => (
          <Button
            key={index}
            type="button"
            size="lg"
            variant={
              button.kind === 'equals' ? 'default' : button.kind === 'operator' ? 'outline' : button.kind === 'clear' ? 'destructive' : 'secondary'
            }
            onClick={() => handleClick(button)}
            className={`h-14 px-0 text-lg ${button.kind === 'clear' ? 'col-span-4' : ''}`}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </Card>
  )
}
