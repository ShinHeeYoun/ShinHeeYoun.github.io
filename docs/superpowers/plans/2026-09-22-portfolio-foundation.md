# Portfolio Site Phase 1 (Foundation & Home) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a Vite + React + TypeScript site with an automated GitHub Pages deploy pipeline, and a Home page that renders a "latest blog posts" preview from a typed placeholder data source.

**Architecture:** Vite + React + TypeScript, client-side routing via React Router's `HashRouter` (avoids 404s on GitHub Pages, which has no server-side rewrites), styled with Tailwind CSS. Blog post data lives in a typed `src/data/posts.ts` array that later phases will populate for real; the UI components that render it don't need to change when that happens.

**Tech Stack:** Vite 5, React 18, TypeScript 5, React Router 6, Tailwind CSS 3, GitHub Actions + `peaceiris/actions-gh-pages` for deployment.

**Spec:** [docs/superpowers/specs/2026-09-22-portfolio-foundation-design.md](../specs/2026-09-22-portfolio-foundation-design.md)

## Global Constraints

- Routing must use `HashRouter`, not `BrowserRouter` (GitHub Pages has no server-side rewrite rules; a hard refresh on a non-root `BrowserRouter` route 404s).
- Deploy target is the root domain `https://shinheeyoun.github.io/`, which requires the GitHub repository to be named exactly `shinheeyoun.github.io`. The existing repository of that name is being fully replaced.
- No automated test suite this phase — verification is `npm run build` (type-check + production build) plus manual checks in a browser, per the spec's Testing section. Automated tests are deferred to Phase 2, where real logic (GitHub API calls, the editor) shows up.
- Styling uses Tailwind CSS utility classes, not hand-written CSS files.
- `/blog` and `/tools` routes are explicitly out of scope this phase — do not create stub pages for them.

---

### Task 1: Project scaffold (Vite + React + TypeScript + Tailwind)

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `vite.config.ts`
- Create: `index.html`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `src/index.css`
- Create: `src/vite-env.d.ts`
- Create: `src/main.tsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: an `npm run build` script that later tasks use as their verification command; `src/main.tsx` as the entry point later tasks will modify.

- [ ] **Step 1: Write `.gitignore`**

```
node_modules
dist
*.tsbuildinfo
.DS_Store
*.local
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "shinheeyoun-portfolio",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.10",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.13",
    "typescript": "^5.6.2",
    "vite": "^5.4.8"
  }
}
```

- [ ] **Step 3: Install dependencies**

Run: `npm install`
Expected: completes with no errors, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 4: Write `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- [ ] **Step 5: Write `tsconfig.node.json`**

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 6: Write `vite.config.ts`**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 7: Write `index.html`**

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shinheeyoun</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 8: Write `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- [ ] **Step 9: Write `postcss.config.js`**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 10: Write `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] **Step 11: Write `src/vite-env.d.ts`**

```typescript
/// <reference types="vite/client" />
```

- [ ] **Step 12: Write `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="p-8 text-xl">Scaffold OK</div>
  </StrictMode>,
)
```

- [ ] **Step 13: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors, and creates a `dist/index.html`.

- [ ] **Step 14: Commit**

```bash
git add .gitignore package.json package-lock.json tsconfig.json tsconfig.node.json vite.config.ts index.html tailwind.config.js postcss.config.js src/index.css src/vite-env.d.ts src/main.tsx
git commit -m "chore: scaffold Vite + React + TypeScript + Tailwind project"
```

---

### Task 2: Routing shell and Home page

**Files:**
- Create: `src/App.tsx`
- Create: `src/pages/Home.tsx`
- Modify: `src/main.tsx`

**Interfaces:**
- Consumes: `src/main.tsx` entry point from Task 1.
- Produces: `Home` default-exported component from `src/pages/Home.tsx` that Task 4 will modify to render `<BlogPreviewSection/>`.

- [ ] **Step 1: Install React Router**

Run: `npm install react-router-dom@^6.26.2`
Expected: `package.json` and `package-lock.json` updated, install succeeds.

- [ ] **Step 2: Write `src/pages/Home.tsx`**

```tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Home</h1>
    </main>
  )
}
```

- [ ] **Step 3: Write `src/App.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
```

- [ ] **Step 4: Modify `src/main.tsx`** to wrap `App` in `HashRouter`

Replace the file contents with:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
```

- [ ] **Step 5: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 6: Manual check**

Run: `npm run dev`, open the printed local URL (e.g. `http://localhost:5173/`) in a browser.
Expected: page shows the heading "Home". Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/App.tsx src/pages/Home.tsx src/main.tsx
git commit -m "feat: add HashRouter and Home page shell"
```

---

### Task 3: Blog post data model

**Files:**
- Create: `src/data/posts.ts`

**Interfaces:**
- Produces: `Post` type (`{ slug: string; title: string; date: string; excerpt: string }`) and `posts: Post[]`, consumed by Task 4's `BlogPreviewCard` and `BlogPreviewSection`.

- [ ] **Step 1: Write `src/data/posts.ts`**

```typescript
export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
}

export const posts: Post[] = [
  {
    slug: 'hello-world',
    title: '첫 번째 글',
    date: '2026-09-22',
    excerpt:
      '이 사이트를 막 만들기 시작했습니다. 게시글 작성 기능은 다음 단계에서 붙일 예정입니다.',
  },
  {
    slug: 'about-this-site',
    title: '이 사이트에 대하여',
    date: '2026-09-22',
    excerpt:
      'Vite와 React로 만든 개인 홈페이지입니다. 포트폴리오, 블로그, 직접 실행해볼 수 있는 도구들을 담을 예정입니다.',
  },
]
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/posts.ts
git commit -m "feat: add placeholder blog post data model"
```

---

### Task 4: Blog preview components, wired into Home

**Files:**
- Create: `src/components/BlogPreviewCard.tsx`
- Create: `src/components/BlogPreviewSection.tsx`
- Modify: `src/pages/Home.tsx`

**Interfaces:**
- Consumes: `Post` type and `posts` array from `src/data/posts.ts` (Task 3).
- Produces: `BlogPreviewSection` default export, rendered by `Home`.

- [ ] **Step 1: Write `src/components/BlogPreviewCard.tsx`**

```tsx
import type { Post } from '../data/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <article className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
      <p className="mt-2 text-gray-700">{post.excerpt}</p>
    </article>
  )
}
```

- [ ] **Step 2: Write `src/components/BlogPreviewSection.tsx`**

```tsx
import { posts } from '../data/posts'
import BlogPreviewCard from './BlogPreviewCard'

export default function BlogPreviewSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold">최신 글</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogPreviewCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Modify `src/pages/Home.tsx`** to render the preview section

Replace the file contents with:

```tsx
import BlogPreviewSection from '../components/BlogPreviewSection'

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-8">
        <BlogPreviewSection />
      </div>
    </main>
  )
}
```

- [ ] **Step 4: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 5: Manual check**

Run: `npm run dev`, open the printed local URL in a browser.
Expected: page shows "Home", then a "최신 글" heading, then two cards titled "첫 번째 글" and "이 사이트에 대하여". Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 6: Commit**

```bash
git add src/components/BlogPreviewCard.tsx src/components/BlogPreviewSection.tsx src/pages/Home.tsx
git commit -m "feat: render blog post previews on Home"
```

---

### Task 5: GitHub Actions deploy workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: the `npm run build` script from Task 1 (must produce `dist/`).
- Produces: a `gh-pages` branch published by the workflow, which Task 6 points GitHub Pages at.

- [ ] **Step 1: Write `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: Verify the file is well-formed**

Run: `node -e "require('fs').readFileSync('.github/workflows/deploy.yml','utf8').split('\n').forEach((l,i)=>{if(l.includes('\t'))throw new Error('tab at line '+(i+1))})"`
Expected: no output (no tab characters, which would break YAML indentation).

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: add GitHub Actions workflow to deploy to gh-pages"
```

---

### Task 6: Connect to the live `shinheeyoun.github.io` repo and deploy

This task overwrites the existing `shinheeyoun.github.io` GitHub repository with
this project's history. That is a **destructive, remote, effectively
irreversible action** (the old repo's content will no longer be reachable
from GitHub in its previous form). Do not run Steps 3–4 without the user's
explicit, in-the-moment confirmation — approval of the plan as a whole is
not sufficient, per this project's safety rules on destructive/remote
actions.

**Files:** none (git/GitHub operations only).

**Interfaces:**
- Consumes: the `main` branch built by Tasks 1–5; the `deploy.yml` workflow from Task 5.

- [ ] **Step 1: Rename the local default branch to `main`**

Run: `git branch -M main`
Expected: no output; `git branch` shows `* main`.

- [ ] **Step 2: STOP — confirm with the user**

Before proceeding, tell the user exactly what Step 3 and Step 4 will do
(add the `shinheeyoun/shinheeyoun.github.io` remote and force-push,
replacing everything currently on GitHub for that repo) and wait for an
explicit yes. Do not proceed on an assumed or earlier approval.

- [ ] **Step 3: Add the GitHub remote**

Run: `git remote add origin https://github.com/shinheeyoun/shinheeyoun.github.io.git`
Expected: no output. Verify with `git remote -v`.

- [ ] **Step 4: Force-push `main`**

Run: `git push -u origin main --force`
Expected: push succeeds. Force is required because the existing remote
repository has unrelated history.

- [ ] **Step 5: Watch the deploy workflow**

Open `https://github.com/shinheeyoun/shinheeyoun.github.io/actions` in a
browser and confirm the "Deploy to GitHub Pages" run completes
successfully (green check). If it fails, read the job logs to diagnose
before continuing.

- [ ] **Step 6: Confirm the Pages source**

Open `https://github.com/shinheeyoun/shinheeyoun.github.io/settings/pages`
and confirm the build source is set to the `gh-pages` branch (the
workflow creates this branch on first run; if Pages isn't already
serving from it, select it and save).

- [ ] **Step 7: Verify the live site**

Open `https://shinheeyoun.github.io/` in a browser.
Expected: the page loads, shows "Home", a "최신 글" heading, and the two
placeholder post cards from Task 3.
