# Portfolio Site Phase 3 (Interactive Tools — Calculator) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `/tools` section to the site with a controller/view-separated calculator as the first interactive tool, backed by real unit tests (Vitest) on the controller logic for the first time in this project.

**Architecture:** Each tool is a pure-function "controller" (a reducer: `(state, action) => state`, no React/DOM dependency) plus a React "view" that wires it to `useReducer`. A small `registry.ts` lists tool metadata for `/tools`; `/tools/:id` maps an id to its view component. Vitest is introduced to unit-test the calculator's reducer directly — the UI stays manually verified, same as every prior phase.

**Tech Stack:** Existing Vite + React + TypeScript + Tailwind + React Router (`HashRouter`) stack from Phases 1–2, plus Vitest for controller unit tests.

**Spec:** [docs/superpowers/specs/2026-09-23-tools-calculator-design.md](../specs/2026-09-23-tools-calculator-design.md)

## Global Constraints

- The calculator's controller (`src/tools/calculator/controller.ts`) must have zero React or DOM dependency — it's a plain reducer function, importable and testable in isolation.
- The calculator evaluates left-to-right as buttons are pressed — it does **not** implement operator precedence (e.g. `2 + 3 × 4 =` evaluates as `(2 + 3) × 4 = 20`, not `2 + (3 × 4) = 14`). This is a deliberate scope decision (spec's Non-goals), not a bug to fix later.
- Vitest is scoped to controller unit tests only this phase — do not add `@testing-library/react` or any component-level test.
- `npm run build` remains the build/type-check gate for everything else; UI is verified manually in a browser, same as Phases 1–2.
- Styling stays Tailwind utility classes only — no new plugins.
- Only the calculator ships this phase — no second tool, no keyboard input, no calculation history, no memory functions.

---

### Task 1: Vitest setup and the calculator controller with unit tests

**Files:**
- Modify: `package.json`
- Modify: `vite.config.ts`
- Create: `src/tools/calculator/controller.ts`
- Create: `src/tools/calculator/controller.test.ts`

**Interfaces:**
- Produces: `CalculatorState`, `Operator`, `CalculatorAction` types, `initialState: CalculatorState`, and `calculatorReducer(state, action): CalculatorState`, all exported from `src/tools/calculator/controller.ts`. Consumed by Task 3's `CalculatorView.tsx`.
- Produces: an `npm run test` script that later tasks don't need (no further automated tests are added this phase), but which must keep passing.
- Consumes: nothing from earlier tasks (first task of this plan).

- [ ] **Step 1: Install Vitest**

Run: `npm install -D vitest@^2.1.0`
Expected: `package.json`/`package-lock.json` updated, install succeeds.

- [ ] **Step 2: Modify `package.json`** to add the `test` script

In the `"scripts"` block, add a `"test"` entry so the full block reads:

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
```

- [ ] **Step 3: Modify `vite.config.ts`** to configure Vitest

Replace the file's contents with:

```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'node',
  },
})
```

(`vitest/config`'s `defineConfig` is a drop-in superset of Vite's own — it adds the `test` field's types. `environment: 'node'` is enough because this phase's tests exercise a plain reducer, not React rendering or DOM APIs.)

- [ ] **Step 4: Write `src/tools/calculator/controller.ts`**

```typescript
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
```

- [ ] **Step 5: Write `src/tools/calculator/controller.test.ts`**

```typescript
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
```

- [ ] **Step 6: Run the tests**

Run: `npm run test`
Expected: all 11 tests pass, output pristine (no warnings).

- [ ] **Step 7: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors (the `vite.config.ts` change doesn't affect the production build, only adds the `test` block).

- [ ] **Step 8: Commit**

```bash
git add package.json package-lock.json vite.config.ts src/tools/calculator/controller.ts src/tools/calculator/controller.test.ts
git commit -m "feat: add calculator controller with Vitest unit tests"
```

---

### Task 2: Tools registry and /tools list page

**Files:**
- Create: `src/tools/registry.ts`
- Create: `src/pages/Tools.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `ToolMeta` type and `tools: ToolMeta[]` from `src/tools/registry.ts`, consumed by `Tools.tsx` this task. `Tools` default export, routed at `/tools`.

- [ ] **Step 1: Write `src/tools/registry.ts`**

```typescript
export type ToolMeta = {
  id: string
  name: string
  description: string
}

export const tools: ToolMeta[] = [
  {
    id: 'calculator',
    name: '계산기',
    description: '기본 사칙연산을 지원하는 버튼식 계산기입니다.',
  },
]
```

- [ ] **Step 2: Write `src/pages/Tools.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { tools } from '../tools/registry'

export default function Tools() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Tools</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
            <article className="rounded-lg border border-gray-200 p-4 shadow-sm hover:border-gray-400">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="mt-2 text-gray-700">{tool.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 3: Modify `src/App.tsx`** to add the `/tools` route

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'
import Tools from './pages/Tools'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </>
  )
}
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 5: Manual check**

Run: `npm run dev`, open `/#/tools`.
Expected: page shows a "Tools" heading and one card, "계산기", with the description text. Clicking it navigates to `/#/tools/calculator` (the page there doesn't exist yet until Task 3 — that's expected). Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 6: Commit**

```bash
git add src/tools/registry.ts src/pages/Tools.tsx src/App.tsx
git commit -m "feat: add /tools list page"
```

---

### Task 3: Calculator view and /tools/:id page

**Files:**
- Create: `src/tools/calculator/CalculatorView.tsx`
- Create: `src/pages/ToolPage.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `calculatorReducer`, `initialState`, `Operator` from `src/tools/calculator/controller.ts` (Task 1).
- Produces: `CalculatorView` default export, rendered by `ToolPage` when `id === 'calculator'`. `ToolPage` default export, routed at `/tools/:id`.

- [ ] **Step 1: Write `src/tools/calculator/CalculatorView.tsx`**

```tsx
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
```

- [ ] **Step 2: Write `src/pages/ToolPage.tsx`**

```tsx
import { useParams } from 'react-router-dom'
import type { ComponentType } from 'react'
import CalculatorView from '../tools/calculator/CalculatorView'

const toolViews: Record<string, ComponentType> = {
  calculator: CalculatorView,
}

export default function ToolPage() {
  const { id } = useParams<{ id: string }>()
  const View = id ? toolViews[id] : undefined

  if (!View) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>도구를 찾을 수 없습니다.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <View />
    </main>
  )
}
```

- [ ] **Step 3: Modify `src/App.tsx`** to add the `/tools/:id` route

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'
import Tools from './pages/Tools'
import ToolPage from './pages/ToolPage'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<ToolPage />} />
      </Routes>
    </>
  )
}
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 5: Manual check**

Run: `npm run dev`, open `/#/tools/calculator`.
Expected: a calculator renders — a display showing `0`, and a 4-column button grid (digits 0-9, `.`, `÷ × - +`, `=`, and a full-width `C`). Click `2`, `+`, `3`, `×`, `4`, `=` — the display should read `20` (left-to-right evaluation, matching Task 1's controller test). Click `C` — display resets to `0`. Also open `/#/tools/nonexistent` and confirm it shows "도구를 찾을 수 없습니다." instead of crashing. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 6: Commit**

```bash
git add src/tools/calculator/CalculatorView.tsx src/pages/ToolPage.tsx src/App.tsx
git commit -m "feat: add calculator view and /tools/:id page"
```

---

### Task 4: Navigation link

**Files:**
- Modify: `src/components/NavBar.tsx`

**Interfaces:**
- Consumes: nothing from earlier tasks besides the existence of the `/tools` route (Task 2) that it links to.
- Produces: the same `NavBar` default export, now with a fourth link.

- [ ] **Step 1: Modify `src/components/NavBar.tsx`**

Replace the file's contents with:

```tsx
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-2xl gap-6 px-4 py-4">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/write">Write</Link>
        <Link to="/tools">Tools</Link>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 3: Manual check**

Run: `npm run dev`, open `/`.
Expected: the nav bar now shows "Home / Blog / Write / Tools"; clicking "Tools" navigates to `/#/tools`. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add src/components/NavBar.tsx
git commit -m "feat: add Tools link to navigation"
```
