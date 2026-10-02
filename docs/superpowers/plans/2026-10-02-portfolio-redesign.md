# Portfolio Site Phase 4 (Terminal Redesign & Portfolio Content) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Give the site a dark-terminal identity (site-wide, via color tokens) and add the portfolio content it lacks: a hero, featured projects, `/projects`, `/about`, and a Contact section.

**Architecture:** The site already has semantic color tokens (`--color-*` CSS variables mapped in `tailwind.config.js`) and a light/dark toggle. This phase changes the token *values* and the default theme rather than editing every page. Shared look-and-feel (`.card`, `.card-title`, `.tag`) lives as small CSS component classes in `src/index.css`. New content pages follow the existing page pattern (fluid-width `<main>`, typed data in `src/data/`).

**Tech Stack:** Existing Vite + React + TypeScript + Tailwind + React Router (`HashRouter`) + Vitest stack. No new dependencies.

**Spec:** [docs/superpowers/specs/2026-10-02-portfolio-redesign-design.md](../specs/2026-10-02-portfolio-redesign-design.md)

## Global Constraints

- Token **names** stay as they are; only values change. Dark (default): background `11 15 20`, surface `17 24 32`, border `28 39 51`, foreground `230 237 243`, muted `125 139 153`, accent `61 220 151`. Light ("paper terminal"): background `250 247 240`, surface `243 239 228`, border `221 215 200`, foreground `31 41 55`, accent `4 120 87`. (Light `muted` is `87 96 110`, darker than the spec's `107 114 128`, because the spec value is only ~4.4:1 on the cream background; this is a deliberate contrast fix.)
- **Default theme is dark** when no stored preference exists; a stored `'light'` or `'dark'` wins. The OS color-scheme preference is no longer consulted.
- Mono font stack is exactly `ui-monospace, "D2Coding", Consolas, monospace`. No web-font downloads, no animation libraries, no images, no new npm dependencies.
- The blinking cursor animation must be disabled under `prefers-reduced-motion: reduce`.
- **Confidentiality:** public copy contains no customer names, no employer/product/vendor names, no internal hostnames or paths, no copied log or report text. Use the project copy given in Task 3 verbatim.
- Contact is **GitHub only**: `https://github.com/ShinHeeYoun`. No email address anywhere on the site.
- Display name is `ShinHeeYoun` (no Korean name).
- Routing stays `HashRouter`. New pages use the existing fluid-width page pattern: `<main className="w-full px-6 py-12 md:px-12">`.
- `npm run test` and `npm run build` must both pass at the end of every task (CI runs both before every deploy).
- UI is verified manually in a browser (no component-test library). When you start a dev server for a manual check, **stop it (kill the node process you started) before you finish** — leftover dev servers lock files in the worktree.

---

### Task 1: Dark-by-default theme, terminal color tokens, mono headings

**Files:**
- Create: `src/lib/theme.test.ts`
- Modify: `src/lib/theme.ts`
- Modify: `src/components/NavBar.tsx` (initial theme state only; the full NavBar rewrite is Task 6)
- Modify: `index.html`
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

**Interfaces:**
- Produces: `resolveInitialTheme(stored: Theme | null): Theme` exported from `src/lib/theme.ts` (returns `stored ?? 'dark'`). `getSystemTheme` is **removed** from `theme.ts`. The `font-mono` Tailwind utility now resolves to the spec's mono stack, and `h1, h2, h3` are mono site-wide.
- Consumes: nothing from earlier tasks (first task).

- [ ] **Step 1: Write the failing test** — create `src/lib/theme.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { resolveInitialTheme } from './theme'

describe('resolveInitialTheme', () => {
  it('uses a stored light preference', () => {
    expect(resolveInitialTheme('light')).toBe('light')
  })

  it('uses a stored dark preference', () => {
    expect(resolveInitialTheme('dark')).toBe('dark')
  })

  it('defaults to dark when nothing is stored', () => {
    expect(resolveInitialTheme(null)).toBe('dark')
  })
})
```

- [ ] **Step 2: Run it and confirm it fails**

Run: `npm run test`
Expected: `src/lib/theme.test.ts` FAILS (`resolveInitialTheme` is not a function / not exported); the other 14 tests pass.

- [ ] **Step 3: Replace `src/lib/theme.ts`** with:

```typescript
export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

export function setStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // localStorage unavailable (e.g. private browsing) — nothing to persist
  }
}

export function resolveInitialTheme(stored: Theme | null): Theme {
  return stored ?? 'dark'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}
```

- [ ] **Step 4: Run the tests**

Run: `npm run test`
Expected: all 17 tests pass (14 existing + 3 new), pristine output.

- [ ] **Step 5: Modify `src/components/NavBar.tsx`** — two edits only, nothing else in the file.

Replace the import line:

```typescript
import { applyTheme, getStoredTheme, getSystemTheme, setStoredTheme, type Theme } from '../lib/theme'
```

with:

```typescript
import { applyTheme, getStoredTheme, resolveInitialTheme, setStoredTheme, type Theme } from '../lib/theme'
```

and replace the state line:

```typescript
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())
```

with:

```typescript
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme(getStoredTheme()))
```

- [ ] **Step 6: Modify `index.html`** — replace the whole inline `<script>` block (the one that reads `localStorage.getItem('theme')`) with this, so the first paint matches `resolveInitialTheme`:

```html
    <script>
      (function () {
        try {
          if (localStorage.getItem('theme') !== 'light') {
            document.documentElement.classList.add('dark')
          }
        } catch (e) {
          document.documentElement.classList.add('dark')
        }
      })()
    </script>
```

- [ ] **Step 7: Replace `src/index.css`** with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-background: 250 247 240;
  --color-foreground: 31 41 55;
  --color-muted: 87 96 110;
  --color-border: 221 215 200;
  --color-surface: 243 239 228;
  --color-accent: 4 120 87;
  --color-accent-hover: 6 95 70;
}

.dark {
  --color-background: 11 15 20;
  --color-foreground: 230 237 243;
  --color-muted: 125 139 153;
  --color-border: 28 39 51;
  --color-surface: 17 24 32;
  --color-accent: 61 220 151;
  --color-accent-hover: 110 231 183;
}

@layer base {
  h1,
  h2,
  h3 {
    @apply font-mono;
  }
}

body {
  @apply bg-background text-foreground transition-colors duration-200;
}
```

- [ ] **Step 8: Modify `tailwind.config.js`** — inside `theme.extend`, add a `fontFamily` entry next to the existing `colors` entry, so the file reads:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace', '"D2Coding"', 'Consolas', 'monospace'],
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 9: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 tests pass; build succeeds with no TypeScript errors (an unused `getSystemTheme` import anywhere would fail the build — if so, fix that import).

- [ ] **Step 10: Manual browser check**

Run `npm run dev` and open the printed URL.
1. In devtools run `localStorage.clear()` and reload: the page must be dark (near-black `#0b0f14` background, `<html class="dark">`), headings in a monospace font.
2. Click the theme toggle: page becomes the cream light theme; reload: it stays light.
3. Click the toggle back to dark; reload: stays dark.
Report what you actually observed (e.g. read `document.documentElement.className` and `getComputedStyle(document.body).backgroundColor`). Stop the dev server when done.

- [ ] **Step 11: Commit**

```bash
git add src/lib/theme.test.ts src/lib/theme.ts src/components/NavBar.tsx index.html src/index.css tailwind.config.js
git commit -m "feat: dark-by-default terminal theme tokens and mono headings"
```

---

### Task 2: Shared card and tag styles

**Files:**
- Modify: `src/index.css`
- Modify: `src/components/BlogPreviewCard.tsx`
- Modify: `src/pages/Blog.tsx`
- Modify: `src/pages/Tools.tsx`

**Interfaces:**
- Produces: CSS classes `.card` (bordered surface box with accent border + soft glow on hover), `.card-title` (mono semibold title with a small accent `●` before it), `.tag` (small mono chip). Consumed by Tasks 3, 4 and 5.
- Consumes: the tokens and `font-mono` from Task 1.

- [ ] **Step 1: Modify `src/index.css`** — insert this block between the `@layer base { ... }` block and the `body { ... }` rule:

```css
@layer components {
  .card {
    @apply rounded-lg border border-border bg-surface p-4 transition-all duration-200;
  }

  .card:hover {
    border-color: rgb(var(--color-accent));
    box-shadow: 0 0 24px rgb(var(--color-accent) / 0.15);
  }

  .card-title {
    @apply font-mono text-lg font-semibold;
  }

  .card-title::before {
    content: '●';
    color: rgb(var(--color-accent));
    font-size: 0.6em;
    margin-right: 0.5em;
    vertical-align: middle;
  }

  .tag {
    @apply rounded border border-border px-2 py-0.5 font-mono text-xs text-muted;
  }
}
```

- [ ] **Step 2: Replace `src/components/BlogPreviewCard.tsx`** with:

```tsx
import { Link } from 'react-router-dom'
import type { Post } from '../lib/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="card">
        <h3 className="card-title">{post.title}</h3>
        <p className="mt-1 text-sm text-muted">{post.date}</p>
        <p className="mt-2 text-foreground/80">{post.excerpt}</p>
      </article>
    </Link>
  )
}
```

- [ ] **Step 3: Replace `src/pages/Blog.tsx`** with:

```tsx
import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function Blog() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <article className="card">
              <h2 className="card-title">{post.title}</h2>
              <p className="mt-1 text-sm text-muted">{post.date}</p>
              <p className="mt-2 text-foreground/80">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Replace `src/pages/Tools.tsx`** with:

```tsx
import { Link } from 'react-router-dom'
import { tools } from '../tools/registry'

export default function Tools() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Tools</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
            <article className="card">
              <h2 className="card-title">{tool.name}</h2>
              <p className="mt-2 text-foreground/80">{tool.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 5: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 pass; build succeeds (an `@apply` of an unknown utility would fail the CSS build).

- [ ] **Step 6: Manual browser check**

Run `npm run dev`; open `/#/blog`, `/#/tools`, and `/` in dark and then light theme.
Expected: each card has a small green `●` before its title; hovering a card turns its border green with a faint glow; no layout breakage. Report what you observed. Stop the dev server when done.

- [ ] **Step 7: Commit**

```bash
git add src/index.css src/components/BlogPreviewCard.tsx src/pages/Blog.tsx src/pages/Tools.tsx
git commit -m "feat: shared terminal card and tag styles"
```

---

### Task 3: Projects data, project card, and /projects page

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/components/ProjectCard.tsx`
- Create: `src/pages/Projects.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `Project` type `{ id: string; title: string; summary: string; tags: string[]; href?: string }` and `projects: Project[]` from `src/data/projects.ts`; `ProjectCard` default export taking `{ project: Project }` (consumed by Task 5); `Projects` default export routed at `/projects`.
- Consumes: `.card`, `.card-title`, `.tag` from Task 2.

- [ ] **Step 1: Write `src/data/projects.ts`** (copy verbatim — this is the owner-approved, anonymized copy):

```typescript
export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  href?: string
}

export const projects: Project[] = [
  {
    id: 'reporting-queue-analysis',
    title: '리포팅 서버 요청 적체 원인 분석',
    summary:
      '주기적 "멈춤" 현상을 로그로 추적. 개별 요청 지연이 아니라 요청 총량이 처리 용량을 넘어 내부 큐가 적체되고, 상위 timeout이 만료되던 구조를 규명하고 근거 지표와 권고안을 정리.',
    tags: ['로그분석', 'Tomcat', '용량산정'],
  },
  {
    id: 'was-thread-leak-oom',
    title: 'WAS 스레드 누수로 인한 OOM/행 장애 분석',
    summary: '반복 재기동 징후와 스레드 누수를 로그·덤프로 연결해 원인을 특정.',
    tags: ['JVM', '스레드덤프', 'Tomcat'],
  },
  {
    id: 'log-analysis-tool',
    title: '대용량 로그 분석 웹 도구',
    summary:
      '수 GB 로그를 한 번만 인덱싱해 타임라인, 요청 추적, 예외 군집화, 성능·트래픽 분석을 제공하는 로컬 도구. 외부 의존성 없이 오프라인 동작.',
    tags: ['Python', 'JavaScript', '로그분석'],
  },
  {
    id: 'connection-pool-leak-demo',
    title: 'DB 커넥션 풀 누수 재현 데모',
    summary: '커넥션 누수 증상을 재현해 원인과 관찰 방법을 보여주는 데모.',
    tags: ['Node.js', 'DB', 'pgpool'],
  },
  {
    id: 'thread-dump-scripts',
    title: '스레드 덤프 수집·분석 스크립트',
    summary: '장애 시점의 jstack 덤프를 일정 간격으로 수집하고 요약하는 스크립트.',
    tags: ['PowerShell', 'JVM'],
  },
]
```

- [ ] **Step 2: Write `src/components/ProjectCard.tsx`**

```tsx
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const content = (
    <article className="card">
      <h3 className="card-title">{project.title}</h3>
      <p className="mt-2 text-foreground/80">{project.summary}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )

  return project.href ? (
    <Link to={project.href} className="block">
      {content}
    </Link>
  ) : (
    content
  )
}
```

- [ ] **Step 3: Write `src/pages/Projects.tsx`**

```tsx
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p className="mt-2 text-muted">장애 분석과 운영 도구 작업을 익명화해서 정리했습니다.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Replace `src/App.tsx`** with:

```tsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'
import Tools from './pages/Tools'
import ToolPage from './pages/ToolPage'
import Projects from './pages/Projects'

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
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
```

- [ ] **Step 5: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 pass; build succeeds.

- [ ] **Step 6: Manual browser check**

Run `npm run dev`; open `/#/projects` in dark and light theme.
Expected: heading "Projects", the subtitle line, and 5 cards, each with a green `●` title, the summary, and small mono tag chips. The first card's summary contains the quoted word "멈춤". Report what you observed. Stop the dev server when done.

- [ ] **Step 7: Commit**

```bash
git add src/data/projects.ts src/components/ProjectCard.tsx src/pages/Projects.tsx src/App.tsx
git commit -m "feat: add projects data, card, and /projects page"
```

---

### Task 4: About page

**Files:**
- Create: `src/pages/About.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `About` default export routed at `/about`.
- Consumes: `.tag` from Task 2.

- [ ] **Step 1: Write `src/pages/About.tsx`** (copy verbatim; the intro, interests and stack are the owner-reviewed drafts — claim nothing more, e.g. no employer, dates, or years of experience):

```tsx
const interests = [
  '장애 원인 분석(RCA)',
  'JVM / 스레드 덤프 분석',
  '대용량 로그 분석',
  'DB 커넥션 풀 운영',
]

const stack = ['Java', 'Tomcat', 'Python', 'Node.js', 'PowerShell / Batch', 'awk', 'pgpool']

export default function About() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-6 leading-relaxed text-foreground/90">
          Java/Tomcat 기반 운영 환경에서 발생하는 장애와 성능 문제를 로그·덤프·지표로 분석하고,
          재현 가능한 근거와 함께 보고서로 정리합니다. 반복되는 분석 작업은 직접 도구로 만들어
          둡니다.
        </p>

        <h2 className="mt-10 text-lg font-semibold">관심사</h2>
        <ul className="mt-3 list-inside list-disc space-y-1 text-foreground/90">
          {interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mt-10 text-lg font-semibold">기술 스택</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Replace `src/App.tsx`** with:

```tsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'
import Tools from './pages/Tools'
import ToolPage from './pages/ToolPage'
import Projects from './pages/Projects'
import About from './pages/About'

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
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}
```

- [ ] **Step 3: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 pass; build succeeds.

- [ ] **Step 4: Manual browser check**

Run `npm run dev`; open `/#/about` in dark and light theme.
Expected: "About" heading, an intro paragraph, a bulleted "관심사" list of 4 items, and a "기술 스택" row of 7 tag chips; text column is narrow (max ~42rem) while the page padding matches other pages. Report what you observed. Stop the dev server when done.

- [ ] **Step 5: Commit**

```bash
git add src/pages/About.tsx src/App.tsx
git commit -m "feat: add /about page"
```

---

### Task 5: Home — hero, featured projects, contact

**Files:**
- Create: `src/components/Hero.tsx`
- Create: `src/components/FeaturedProjects.tsx`
- Create: `src/components/ContactSection.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Produces: `Hero`, `FeaturedProjects`, `ContactSection` default exports; a `.cursor-blink` CSS class.
- Consumes: `ProjectCard` and `projects` (Task 3); `BlogPreviewSection` (existing, unchanged); `.card*`/`.tag` styles (Task 2).

- [ ] **Step 1: Modify `src/index.css`** — append this to the **end** of the file (after the `body { ... }` rule):

```css
@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.cursor-blink {
  animation: blink 1.1s steps(1) infinite;
}

@media (prefers-reduced-motion: reduce) {
  .cursor-blink {
    animation: none;
  }
}
```

- [ ] **Step 2: Write `src/components/Hero.tsx`**

```tsx
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="py-10 font-mono">
      <p className="text-sm text-muted">$ whoami</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">
        ShinHeeYoun
        <span className="cursor-blink text-accent" aria-hidden="true">
          _
        </span>
      </h1>
      <p className="mt-3 text-lg text-foreground/90">백엔드 / 인프라 엔지니어</p>
      <p className="mt-2 max-w-xl font-sans text-muted">장애의 원인을 로그에서 끝까지 추적합니다.</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          to="/projects"
          className="rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background"
        >
          view projects
        </Link>
        <Link
          to="/blog"
          className="rounded border border-border px-4 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          read blog
        </Link>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Write `src/components/FeaturedProjects.tsx`**

```tsx
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">대표 프로젝트</h2>
        <Link to="/projects" className="font-mono text-sm text-accent hover:text-accent-hover">
          전체 보기 →
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Write `src/components/ContactSection.tsx`**

```tsx
const GITHUB_URL = 'https://github.com/ShinHeeYoun'

export default function ContactSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-3 font-mono text-sm">
        <span className="text-muted">$ open </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          github.com/ShinHeeYoun
        </a>
      </p>
    </section>
  )
}
```

- [ ] **Step 5: Replace `src/pages/Home.tsx`** with:

```tsx
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import BlogPreviewSection from '../components/BlogPreviewSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <main className="w-full px-6 py-8 md:px-12">
      <Hero />
      <div className="mt-12 space-y-14">
        <FeaturedProjects />
        <BlogPreviewSection />
        <ContactSection />
      </div>
    </main>
  )
}
```

- [ ] **Step 6: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 pass; build succeeds.

- [ ] **Step 7: Manual browser check**

Run `npm run dev`; open `/` in dark and light theme.
Expected, top to bottom: `$ whoami`; the large name "ShinHeeYoun" followed by a green blinking `_` cursor; "백엔드 / 인프라 엔지니어"; the tagline; two buttons (`view projects` green-outlined, `read blog` neutral); then "대표 프로젝트" with 3 project cards and a "전체 보기 →" link; then "최신 글" with post cards; then "Contact" with a `$ open github.com/ShinHeeYoun` link. Click "view projects" → `/projects`; click the GitHub link → opens `https://github.com/ShinHeeYoun` in a new tab. In devtools, emulate `prefers-reduced-motion: reduce` (or check `getComputedStyle` of the cursor span's `animationName` under that emulation) and confirm the cursor stops blinking; if you cannot emulate it, say so explicitly. Report what you actually observed. Stop the dev server when done.

- [ ] **Step 8: Commit**

```bash
git add src/components/Hero.tsx src/components/FeaturedProjects.tsx src/components/ContactSection.tsx src/pages/Home.tsx src/index.css
git commit -m "feat: terminal hero, featured projects, and contact on Home"
```

---

### Task 6: Terminal navigation bar

**Files:**
- Modify: `src/components/NavBar.tsx`

**Interfaces:**
- Consumes: the `/projects` (Task 3) and `/about` (Task 4) routes; `resolveInitialTheme`, `getStoredTheme`, `setStoredTheme`, `applyTheme`, `Theme` from `src/lib/theme.ts` (Task 1).
- Produces: the same `NavBar` default export, now with the terminal brand, an active-route `>` marker, and all six links.

- [ ] **Step 1: Replace `src/components/NavBar.tsx`** with:

```tsx
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme, resolveInitialTheme, setStoredTheme, type Theme } from '../lib/theme'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/tools', label: 'Tools', end: false },
  { to: '/about', label: 'About', end: false },
  { to: '/write', label: 'Write', end: false },
]

export default function NavBar() {
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme(getStoredTheme()))

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setStoredTheme(next)
  }

  return (
    <nav className="border-b border-border font-mono text-sm">
      <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12">
        <Link to="/" className="mr-2 font-bold text-accent">
          ~/shinheeyoun
        </Link>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'text-muted transition-colors hover:text-foreground'
            }
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? '' : 'invisible'}>&gt;</span> {link.label}
              </>
            )}
          </NavLink>
        ))}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="테마 전환"
          className="ml-auto rounded-md border border-border px-2 py-1 text-sm hover:border-accent"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Verify build and tests**

Run: `npm run test` then `npm run build`
Expected: 17/17 pass; build succeeds.

- [ ] **Step 3: Manual browser check**

Run `npm run dev`. At desktop width, in dark and light theme, visit `/`, `/projects`, `/blog`, `/blog/<any post slug>`, `/tools`, `/tools/calculator`, `/about`, `/write`.
Expected on every page: the brand `~/shinheeyoun` (green) on the left, six links (Home, Projects, Blog, Tools, About, Write) in mono type, the theme toggle at the far right; on the current page's link the text is green with a `>` before it (on `/blog/<slug>` the Blog link is active; on `/` only Home is active, not every link); inactive links have no visible `>` and links don't shift horizontally when the active route changes.
Then emulate a phone width of about 375px: the nav wraps onto a second line instead of overflowing or causing horizontal page scroll, and Home, `/projects` and `/about` have no horizontal scroll. Report what you observed. Stop the dev server when done.

- [ ] **Step 4: Commit**

```bash
git add src/components/NavBar.tsx
git commit -m "feat: terminal-style nav with active marker and new links"
```

---

## Final verification (controller-run, not a dispatched task)

After all six tasks and the final whole-branch review, the controller re-checks the spec's manual matrix in a real browser before merging: every route in dark and light, a phone width (~375px), theme persistence across reload, first load with cleared storage is dark, and no horizontal scroll. After deploy, the same smoke check runs against `https://shinheeyoun.github.io/`.
