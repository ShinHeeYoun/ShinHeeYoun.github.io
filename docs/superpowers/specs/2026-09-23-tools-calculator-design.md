# Portfolio Site — Phase 3: Interactive Tools (Calculator) Design

## Context

Phases 1 and 2 shipped a static portfolio/blog (Vite + React + TypeScript,
deployed to `https://shinheeyoun.github.io/`) with an in-site editor. The
site owner also wants to showcase their own small programs as interactive,
runnable demos directly on the site — "connect a controller and a view so
a calculator can actually run on the site," in their own words from the
original project kickoff.

Since GitHub Pages only serves static files, every tool has to run
entirely client-side. Heavier existing tools (e.g. the owner's Java-based
log analyzers) can't be ported as-is; that tradeoff was already accepted
when the project's hosting model was chosen back in Phase 1's kickoff.
This phase builds the pattern with the simplest possible tool — a
calculator — so later tools can follow the same shape.

## Goals

- A `/tools` page listing available tools, and `/tools/:id` rendering one.
- A **controller/view split per tool**: the controller is a pure function
  (`(state, action) => state`, i.e. a reducer) with no React or DOM
  dependency; the view is a React component that wires the controller to
  `useReducer` and renders UI. This directly matches the owner's own
  mental model ("컨트롤러와 뷰를 연결") and, unlike prior phases, produces
  real logic worth unit-testing.
- The first tool: a button-grid calculator (digits, decimal point, `+ − × ÷`,
  `=`, clear) — a working demo, not a scientific calculator.
- A lightweight registry (`src/tools/registry.ts`) listing tool metadata,
  so adding the next tool later is "add one file pair, add one registry
  entry" rather than restructuring anything.
- **Vitest** introduced for the first time, scoped to unit-testing
  controller logic only — UI is still verified manually in a browser, same
  as every prior phase.
- `NavBar` gets a "Tools" link.

## Non-goals (explicitly deferred)

- Any tool beyond the calculator — this phase proves the pattern with one.
- Porting the owner's existing Java tools (log analyzers, jstack dump
  tooling, etc.) — out of reach of a static, client-side-only site without
  a substantial reimplementation effort; not attempted here.
- Component/UI testing (e.g. `@testing-library/react`) — only the
  controller (pure logic) gets automated tests this phase.
- Keyboard input, calculation history, memory functions (M+/M-), or
  scientific-calculator operations (√, %, etc.) — a basic four-function
  calculator is the whole scope.

## Architecture

- **Controller** (`src/tools/calculator/controller.ts`): a pure reducer,
  `calculatorReducer(state: CalculatorState, action: CalculatorAction): CalculatorState`.
  State holds the display string and the in-progress operation (pending
  operator and left-hand operand). Actions: pressing a digit, pressing the
  decimal point, choosing an operator, pressing `=`, and clearing. No
  import of React, no DOM access — this is what makes it independently
  unit-testable with Vitest.
- **View** (`src/tools/calculator/CalculatorView.tsx`): calls
  `useReducer(calculatorReducer, initialState)` and renders a button grid
  (Tailwind grid layout) that dispatches actions on click. Purely a
  presentation layer over the controller — no calculation logic lives
  here.
- **Registry** (`src/tools/registry.ts`): exports `tools: ToolMeta[]`
  (`{ id, name, description }`), consumed by `/tools` to render the list.
  A separate, small `id -> component` map (kept in `ToolPage.tsx`, since
  it's the one place that needs to turn an id into an actual React
  component to render) resolves `/tools/:id` to the right view.

## Routes & navigation

- `/tools` — lists every entry in `registry.ts` as a card linking to
  `/tools/:id`.
- `/tools/:id` — looks the id up in the view map; renders that tool's
  view, or a "도구를 찾을 수 없습니다" fallback for an unknown id (same
  pattern as `PostDetail`'s not-found case from Phase 2).
- `NavBar` gains a fourth link: Home / Blog / Write / Tools.

## Testing

- **Vitest** is added as a dev dependency, with an `npm run test` script.
- `controller.test.ts` unit-tests `calculatorReducer` directly: digit
  entry, decimal point handling, each of the four operators, chained
  operations (e.g. `2 + 3 × 4 =`, testing left-to-right evaluation without
  operator precedence — a basic calculator does not implement precedence,
  it evaluates as you press keys), divide-by-zero, and clear.
- The view (button grid, click handling, rendered display) is still
  verified manually in a browser, exactly as every prior phase's UI was —
  this phase does not introduce component-level testing.
- `npm run build` continues to be the build/type-check gate for
  everything else, as in Phases 1 and 2.

## Open items for later phases (not decided here)

- Whether later tools follow the same reducer-controller shape, or need
  something different (e.g. a tool with async work) — decide per-tool
  when it's actually being built, not speculatively here.
- Any tool beyond the calculator is out of scope for this document.
