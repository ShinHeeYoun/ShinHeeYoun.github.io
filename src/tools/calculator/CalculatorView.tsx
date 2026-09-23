import { useReducer } from 'react'
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
    <div className="mx-auto max-w-xs">
      <div className="mb-4 rounded-md border border-gray-300 p-4 text-right text-2xl font-mono">
        {state.display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {BUTTONS.map((button, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(button)}
            className={`rounded-md border border-gray-300 p-3 text-lg hover:bg-gray-100 ${
              button.kind === 'clear' ? 'col-span-4' : ''
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}
