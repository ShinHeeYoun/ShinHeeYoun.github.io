import { describe, it, expect } from 'vitest'
import { calculatorReducer, initialState } from './controller'

describe('calculatorReducer', () => {
  it('enters a single digit', () => {
    const state = calculatorReducer(initialState, { type: 'digit', digit: '5' })
    expect(state.display).toBe('5')
  })

  it('enters multiple digits', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '1' })
    state = calculatorReducer(state, { type: 'digit', digit: '2' })
    expect(state.display).toBe('12')
  })

  it('handles a decimal point', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '1' })
    state = calculatorReducer(state, { type: 'decimal' })
    state = calculatorReducer(state, { type: 'digit', digit: '5' })
    expect(state.display).toBe('1.5')
  })

  it('ignores a second decimal point', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '1' })
    state = calculatorReducer(state, { type: 'decimal' })
    state = calculatorReducer(state, { type: 'decimal' })
    state = calculatorReducer(state, { type: 'digit', digit: '5' })
    expect(state.display).toBe('1.5')
  })

  it('adds two numbers', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '2' })
    state = calculatorReducer(state, { type: 'operator', operator: '+' })
    state = calculatorReducer(state, { type: 'digit', digit: '3' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('5')
  })

  it('subtracts two numbers', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '9' })
    state = calculatorReducer(state, { type: 'operator', operator: '-' })
    state = calculatorReducer(state, { type: 'digit', digit: '4' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('5')
  })

  it('multiplies two numbers', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '6' })
    state = calculatorReducer(state, { type: 'operator', operator: '×' })
    state = calculatorReducer(state, { type: 'digit', digit: '7' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('42')
  })

  it('divides two numbers', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '8' })
    state = calculatorReducer(state, { type: 'operator', operator: '÷' })
    state = calculatorReducer(state, { type: 'digit', digit: '4' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('2')
  })

  it('returns NaN display when dividing by zero', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '5' })
    state = calculatorReducer(state, { type: 'operator', operator: '÷' })
    state = calculatorReducer(state, { type: 'digit', digit: '0' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('NaN')
  })

  it('chains operations left-to-right without operator precedence', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '2' })
    state = calculatorReducer(state, { type: 'operator', operator: '+' })
    state = calculatorReducer(state, { type: 'digit', digit: '3' })
    state = calculatorReducer(state, { type: 'operator', operator: '×' })
    state = calculatorReducer(state, { type: 'digit', digit: '4' })
    state = calculatorReducer(state, { type: 'equals' })
    expect(state.display).toBe('20')
  })

  it('resets to initial state on clear', () => {
    let state = calculatorReducer(initialState, { type: 'digit', digit: '9' })
    state = calculatorReducer(state, { type: 'clear' })
    expect(state).toEqual(initialState)
  })
})
