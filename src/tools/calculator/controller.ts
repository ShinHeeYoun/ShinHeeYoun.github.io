export type Operator = '+' | '-' | '×' | '÷'

export type CalculatorState = {
  display: string
  pendingValue: number | null
  pendingOperator: Operator | null
  overwrite: boolean
}

export type CalculatorAction =
  | { type: 'digit'; digit: string }
  | { type: 'decimal' }
  | { type: 'operator'; operator: Operator }
  | { type: 'equals' }
  | { type: 'clear' }

export const initialState: CalculatorState = {
  display: '0',
  pendingValue: null,
  pendingOperator: null,
  overwrite: false,
}

function applyOperator(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '×':
      return a * b
    case '÷':
      return b === 0 ? NaN : a / b
  }
}

export function calculatorReducer(
  state: CalculatorState,
  action: CalculatorAction,
): CalculatorState {
  switch (action.type) {
    case 'digit': {
      if (state.overwrite || state.display === '0') {
        return { ...state, display: action.digit, overwrite: false }
      }
      return { ...state, display: state.display + action.digit }
    }
    case 'decimal': {
      if (state.overwrite) {
        return { ...state, display: '0.', overwrite: false }
      }
      if (state.display.includes('.')) {
        return state
      }
      return { ...state, display: state.display + '.' }
    }
    case 'operator': {
      const current = Number(state.display)
      if (state.pendingOperator !== null && !state.overwrite) {
        const result = applyOperator(state.pendingValue ?? 0, current, state.pendingOperator)
        return {
          display: String(result),
          pendingValue: result,
          pendingOperator: action.operator,
          overwrite: true,
        }
      }
      return {
        ...state,
        pendingValue: current,
        pendingOperator: action.operator,
        overwrite: true,
      }
    }
    case 'equals': {
      if (state.pendingOperator === null) {
        return state
      }
      const current = Number(state.display)
      const result = applyOperator(state.pendingValue ?? 0, current, state.pendingOperator)
      return {
        display: String(result),
        pendingValue: null,
        pendingOperator: null,
        overwrite: true,
      }
    }
    case 'clear': {
      return initialState
    }
  }
}
