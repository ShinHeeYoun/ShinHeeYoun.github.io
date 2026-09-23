# Portfolio Site Phase 2 (Blog Content & Editor) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Phase 1 hardcoded placeholder post array with a real Markdown-file content model, add pages to browse and read posts, and add an in-site editor that creates, edits, and deletes posts by committing directly to the live GitHub repo through the GitHub Contents API.

**Architecture:** Posts are `.md` files with YAML frontmatter under `src/content/posts/`, loaded at build time via Vite's `import.meta.glob` into a synchronous `Post[]` (no runtime fetching, no async data layer in the page components). `/blog` and `/blog/:slug` read from that same array. `/write` is a client-only editor: a personal access token (PAT) entered once and cached in `localStorage` authorizes direct browser calls to the GitHub REST API's Contents endpoint, which is how a post is actually persisted (there is no backend — GitHub Pages only serves static files).

**Tech Stack:** Existing Vite + React + TypeScript + Tailwind + React Router (`HashRouter`) stack from Phase 1, plus `marked` for Markdown-to-HTML rendering.

**Spec:** [docs/superpowers/specs/2026-09-23-blog-editor-design.md](../specs/2026-09-23-blog-editor-design.md)

## Global Constraints

- Post content loads at **build time** only, via `import.meta.glob` — no runtime fetch of the post list, no async state in `Home`/`Blog`/`BlogPreviewSection`.
- Slugs are always `<YYYY-MM-DD>-<6-char-random-id>`, never derived from the post title (titles may be Korean and are not URL-safe).
- The PAT lives only in `localStorage` and is sent only as the `Authorization` header on calls to `api.github.com`. Never log it, never send it anywhere else.
- Repo constants are fixed: owner `ShinHeeYoun`, repo `ShinHeeYoun.github.io`, branch `main`.
- No automated test suite — verification is `npm run build` (type-check + production build) plus manual browser checks, same as Phase 1. The GitHub API create/edit/delete calls additionally require a real PAT against the real repo, which only the human operator holds — implementer subagents verify these tasks with `npm run build` only and do **not** attempt a live API call; end-to-end verification of the live flow is a separate, human-supervised task at the end of this plan (Task 9), matching how Phase 1's live-deploy step (Task 6) was handled outside the subagent loop.
- Styling stays Tailwind utility classes only — no new CSS files, no additional Tailwind plugins (e.g. do not add `@tailwindcss/typography`).
- No rich-text editor, no tags/categories/comments/pagination/search, no drafts.

---

### Task 1: Content model — frontmatter parser, posts loader, migrate placeholder posts

**Files:**
- Create: `src/lib/frontmatter.ts`
- Create: `src/lib/posts.ts`
- Create: `src/content/posts/2026-09-22-p1a2b3.md`
- Create: `src/content/posts/2026-09-22-q4d5e6.md`
- Delete: `src/data/posts.ts`
- Modify: `src/components/BlogPreviewCard.tsx`
- Modify: `src/components/BlogPreviewSection.tsx`

**Interfaces:**
- Produces: `Post` type (`{ slug, title, date, excerpt, body }`), `posts: Post[]` (sorted newest-first), and `generateSlug(date: string): string`, all exported from `src/lib/posts.ts`. Produces `parseFrontmatter(raw: string): { frontmatter: { title, date }, body: string }` and `serializeFrontmatter(frontmatter: { title, date }, body: string): string` from `src/lib/frontmatter.ts` (only `parseFrontmatter` is consumed this task; `serializeFrontmatter` and `generateSlug` are consumed starting Task 5).
- Consumes: nothing from earlier tasks (this is the first task of Phase 2).

- [ ] **Step 1: Write `src/lib/frontmatter.ts`**

```typescript
export type Frontmatter = {
  title: string
  date: string
}

export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    throw new Error('Missing frontmatter block')
  }
  const [, header, body] = match
  const fields: Record<string, string> = {}
  for (const line of header.split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    fields[key] = value
  }
  if (!fields.title || !fields.date) {
    throw new Error('Frontmatter must include title and date')
  }
  return {
    frontmatter: { title: fields.title, date: fields.date },
    body: body.trim(),
  }
}

export function serializeFrontmatter(frontmatter: Frontmatter, body: string): string {
  return `---\ntitle: ${frontmatter.title}\ndate: ${frontmatter.date}\n---\n${body}\n`
}
```

- [ ] **Step 2: Write `src/lib/posts.ts`**

```typescript
import { parseFrontmatter } from './frontmatter'

export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string
}

const EXCERPT_LENGTH = 80

const files = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function slugFromPath(path: string): string {
  const match = path.match(/([^/]+)\.md$/)
  if (!match) {
    throw new Error(`Unexpected post file path: ${path}`)
  }
  return match[1]
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { frontmatter, body } = parseFrontmatter(raw)
    const excerpt =
      body.length > EXCERPT_LENGTH ? `${body.slice(0, EXCERPT_LENGTH)}...` : body
    return {
      slug: slugFromPath(path),
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt,
      body,
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function generateSlug(date: string): string {
  const randomId = Math.random().toString(36).slice(2, 8)
  return `${date}-${randomId}`
}
```

- [ ] **Step 3: Write `src/content/posts/2026-09-22-p1a2b3.md`**

```markdown
---
title: 첫 번째 글
date: 2026-09-22
---
이 사이트를 막 만들기 시작했습니다. 게시글 작성 기능은 이제 이 페이지에서 직접 쓸 수 있어요.

앞으로 포트폴리오 페이지와 직접 실행해볼 수 있는 도구들도 하나씩 추가할 예정입니다.
```

- [ ] **Step 4: Write `src/content/posts/2026-09-22-q4d5e6.md`**

```markdown
---
title: 이 사이트에 대하여
date: 2026-09-22
---
Vite와 React로 만든 개인 홈페이지입니다.

포트폴리오, 블로그, 직접 실행해볼 수 있는 도구들을 담을 예정입니다. 블로그 글은 이 사이트 안의 글쓰기 페이지에서 직접 작성하고, GitHub에 커밋되는 방식으로 관리됩니다.
```

- [ ] **Step 5: Delete `src/data/posts.ts`**

Run: `rm src/data/posts.ts` (or delete via your editor), then remove the now-empty `src/data/` directory if nothing else is in it.

- [ ] **Step 6: Modify `src/components/BlogPreviewCard.tsx`** to import `Post` from the new location

Replace the file's import line:

```typescript
import type { Post } from '../data/posts'
```

with:

```typescript
import type { Post } from '../lib/posts'
```

Leave the rest of the file (the component body) exactly as it is.

- [ ] **Step 7: Modify `src/components/BlogPreviewSection.tsx`** to import `posts` from the new location

Replace the file's import line:

```typescript
import { posts } from '../data/posts'
```

with:

```typescript
import { posts } from '../lib/posts'
```

Leave the rest of the file exactly as it is.

- [ ] **Step 8: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors.

- [ ] **Step 9: Manual check**

Run: `npm run dev`, open the printed local URL.
Expected: Home page still shows "최신 글" with two cards — "첫 번째 글" and "이 사이트에 대하여" — same as before, now sourced from the two new Markdown files instead of the deleted `data/posts.ts`. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 10: Commit**

```bash
git add src/lib/frontmatter.ts src/lib/posts.ts src/content/posts/2026-09-22-p1a2b3.md src/content/posts/2026-09-22-q4d5e6.md src/components/BlogPreviewCard.tsx src/components/BlogPreviewSection.tsx
git rm src/data/posts.ts
git commit -m "feat: load blog posts from Markdown files at build time"
```

---

### Task 2: Blog list page

**Files:**
- Create: `src/pages/Blog.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `Post` type and `posts` array from `src/lib/posts.ts` (Task 1).
- Produces: `Blog` default export, routed at `/blog`.

- [ ] **Step 1: Write `src/pages/Blog.tsx`**

```tsx
import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function Blog() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <article className="rounded-lg border border-gray-200 p-4 shadow-sm hover:border-gray-400">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
```

- [ ] **Step 2: Modify `src/App.tsx`** to add the `/blog` route

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
}
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, open `http://localhost:5173/#/blog` (adjust port to whatever Vite printed).
Expected: page shows "Blog" heading and two cards ("첫 번째 글", "이 사이트에 대하여"), each a clickable link (href pointing at `/#/blog/2026-09-22-p1a2b3` and `/#/blog/2026-09-22-q4d5e6` respectively — the target page doesn't exist yet until Task 3, that's expected). Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add src/pages/Blog.tsx src/App.tsx
git commit -m "feat: add /blog post list page"
```

---

### Task 3: Post detail page

**Files:**
- Create: `src/pages/PostDetail.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/BlogPreviewCard.tsx`
- Modify: `package.json`

**Interfaces:**
- Consumes: `posts` array from `src/lib/posts.ts` (Task 1).
- Produces: `PostDetail` default export, routed at `/blog/:slug`.

- [ ] **Step 1: Add the `marked` dependency**

Run: `npm install marked@^13.0.0`
Expected: `package.json` and `package-lock.json` updated, install succeeds.

- [ ] **Step 2: Write `src/pages/PostDetail.tsx`**

```tsx
import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { posts } from '../lib/posts'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-blue-600 underline">
          목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link to="/blog" className="text-sm text-blue-600 underline">
        ← 목록으로
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{post.title}</h1>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: marked.parse(post.body, { async: false }) as string }}
      />
    </main>
  )
}
```

- [ ] **Step 3: Modify `src/App.tsx`** to add the `/blog/:slug` route

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<PostDetail />} />
    </Routes>
  )
}
```

- [ ] **Step 4: Modify `src/components/BlogPreviewCard.tsx`** so Home's preview cards link to the detail page

Replace the file's full contents with:

```tsx
import { Link } from 'react-router-dom'
import type { Post } from '../lib/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="rounded-lg border border-gray-200 p-4 shadow-sm hover:border-gray-400">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{post.date}</p>
        <p className="mt-2 text-gray-700">{post.excerpt}</p>
      </article>
    </Link>
  )
}
```

- [ ] **Step 5: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 6: Manual check**

Run: `npm run dev`. From `/#/blog`, click "첫 번째 글".
Expected: navigates to `/#/blog/2026-09-22-p1a2b3` and shows the title, date, and the post's full body rendered as HTML (two paragraphs). Click "← 목록으로" to confirm it returns to `/#/blog`. Also confirm clicking a card on the Home page (`/`) navigates to the same detail page. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json src/pages/PostDetail.tsx src/App.tsx src/components/BlogPreviewCard.tsx
git commit -m "feat: add post detail page with Markdown rendering"
```

---

### Task 4: GitHub API client and PAT storage modules

**Files:**
- Create: `src/lib/github.ts`
- Create: `src/lib/pat.ts`

**Interfaces:**
- Produces: `getFile(path, pat): Promise<{ content: string; sha: string }>`, `createOrUpdateFile(path, content, message, pat, sha?): Promise<void>`, `deleteFile(path, message, sha, pat): Promise<void>` from `src/lib/github.ts`. Produces `getStoredPat(): string` and `setStoredPat(pat: string): void` from `src/lib/pat.ts`. Consumed starting Task 5.
- Consumes: nothing from earlier tasks.

- [ ] **Step 1: Write `src/lib/pat.ts`**

```typescript
const STORAGE_KEY = 'gh_pat'

export function getStoredPat(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

export function setStoredPat(pat: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, pat)
  } catch {
    // localStorage unavailable (e.g. private browsing) — nothing to persist
  }
}
```

- [ ] **Step 2: Write `src/lib/github.ts`**

```typescript
const OWNER = 'ShinHeeYoun'
const REPO = 'ShinHeeYoun.github.io'
const BRANCH = 'main'

function apiUrl(path: string): string {
  return `https://api.github.com/repos/${OWNER}/${REPO}/contents/${path}`
}

function utf8ToBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) {
    binary += String.fromCharCode(byte)
  }
  return btoa(binary)
}

function base64ToUtf8(base64: string): string {
  const binary = atob(base64.replace(/\n/g, ''))
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

async function githubRequest(path: string, pat: string, init: RequestInit): Promise<Response> {
  const response = await fetch(apiUrl(path), {
    ...init,
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github+json',
      ...init.headers,
    },
  })
  if (!response.ok) {
    const body = await response.json().catch(() => ({}) as Record<string, unknown>)
    const message = typeof body.message === 'string' ? body.message : response.statusText
    throw new Error(`GitHub API error (${response.status}): ${message}`)
  }
  return response
}

export type RemoteFile = {
  content: string
  sha: string
}

export async function getFile(path: string, pat: string): Promise<RemoteFile> {
  const response = await githubRequest(path, pat, { method: 'GET' })
  const data = await response.json()
  return { content: base64ToUtf8(data.content as string), sha: data.sha as string }
}

export async function createOrUpdateFile(
  path: string,
  content: string,
  message: string,
  pat: string,
  sha?: string,
): Promise<void> {
  await githubRequest(path, pat, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message,
      content: utf8ToBase64(content),
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  })
}

export async function deleteFile(
  path: string,
  message: string,
  sha: string,
  pat: string,
): Promise<void> {
  await githubRequest(path, pat, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message, sha, branch: BRANCH }),
  })
}
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript errors. This task cannot be verified against the live GitHub API — no PAT is available in this environment. Type-correctness and a build pass are the full verification for this task; live-call correctness is exercised for the first time in Task 5 and formally verified in Task 9.

- [ ] **Step 4: Commit**

```bash
git add src/lib/github.ts src/lib/pat.ts
git commit -m "feat: add GitHub Contents API client and PAT storage"
```

---

### Task 5: Write page — create flow

**Files:**
- Create: `src/pages/Write.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `generateSlug` from `src/lib/posts.ts` (Task 1); `serializeFrontmatter` from `src/lib/frontmatter.ts` (Task 1); `createOrUpdateFile` from `src/lib/github.ts` (Task 4); `getStoredPat`/`setStoredPat` from `src/lib/pat.ts` (Task 4).
- Produces: `Write` default export, routed at `/write`. Tasks 6 and 7 modify this same file to add the "my posts" list, edit, and delete flows.

- [ ] **Step 1: Write `src/pages/Write.tsx`**

```tsx
import { useState } from 'react'
import { generateSlug } from '../lib/posts'
import { serializeFrontmatter } from '../lib/frontmatter'
import { createOrUpdateFile } from '../lib/github'
import { getStoredPat, setStoredPat } from '../lib/pat'

export default function Write() {
  const [pat, setPat] = useState(getStoredPat())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)

  async function handlePublish() {
    setStatus(null)
    setIsPublishing(true)
    try {
      setStoredPat(pat)
      const date = new Date().toISOString().slice(0, 10)
      const slug = generateSlug(date)
      const fileContent = serializeFrontmatter({ title, date }, body)
      await createOrUpdateFile(`src/content/posts/${slug}.md`, fileContent, `post: ${title}`, pat)
      setStatus('게시됨 — 배포까지 약 1분 정도 걸려요.')
      setTitle('')
      setBody('')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '게시 중 오류가 발생했습니다.')
    } finally {
      setIsPublishing(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Write</h1>

      <p className="mt-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
        이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는
        fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서
        스크립트를 실행할 수 있는 누구나 읽을 수 있습니다.
      </p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Personal Access Token</label>
        <input
          type="password"
          value={pat}
          onChange={(e) => setPat(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">본문 (Markdown)</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={12}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 font-mono text-sm"
        />
      </div>

      <button
        type="button"
        onClick={handlePublish}
        disabled={isPublishing || !pat || !title || !body}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {isPublishing ? '게시 중...' : '게시'}
      </button>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  )
}
```

- [ ] **Step 2: Modify `src/App.tsx`** to add the `/write` route

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<PostDetail />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  )
}
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors.

- [ ] **Step 4: Manual check (no live API call — form behavior only)**

Run: `npm run dev`, open `/#/write`.
Expected: the page renders the warning banner, PAT/title/body fields, and a "게시" button that is disabled until all three fields are non-empty. Typing in all three fields enables the button. Do NOT click "게시" in this check — there is no PAT available in this environment, and clicking it would attempt a real network call that only Task 9 is set up to verify. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add src/pages/Write.tsx src/App.tsx
git commit -m "feat: add /write page with post creation"
```

---

### Task 6: Write page — my posts list and edit flow

**Files:**
- Modify: `src/pages/Write.tsx`

**Interfaces:**
- Consumes: `posts` from `src/lib/posts.ts` (Task 1); `getFile` from `src/lib/github.ts` (Task 4); the `Write` component structure from Task 5.
- Produces: the same `Write` default export, now also listing existing posts and supporting an "editing" mode. Task 7 modifies this same file again to add delete.

- [ ] **Step 1: Replace `src/pages/Write.tsx`** in full with the following (adds a posts list below the form, and edit-mode state)

```tsx
import { useState } from 'react'
import { generateSlug, posts, type Post } from '../lib/posts'
import { serializeFrontmatter } from '../lib/frontmatter'
import { createOrUpdateFile, getFile } from '../lib/github'
import { getStoredPat, setStoredPat } from '../lib/pat'

export default function Write() {
  const [pat, setPat] = useState(getStoredPat())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [editingSha, setEditingSha] = useState<string | null>(null)
  const [isLoadingPost, setIsLoadingPost] = useState<string | null>(null)

  function resetForm() {
    setTitle('')
    setBody('')
    setEditingSlug(null)
    setEditingSha(null)
  }

  async function handlePublish() {
    setStatus(null)
    setIsPublishing(true)
    try {
      setStoredPat(pat)
      const date = new Date().toISOString().slice(0, 10)
      const slug = editingSlug ?? generateSlug(date)
      const fileContent = serializeFrontmatter({ title, date }, body)
      const message = editingSlug ? `post: update ${title}` : `post: ${title}`
      await createOrUpdateFile(
        `src/content/posts/${slug}.md`,
        fileContent,
        message,
        pat,
        editingSha ?? undefined,
      )
      setStatus('게시됨 — 배포까지 약 1분 정도 걸려요.')
      resetForm()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '게시 중 오류가 발생했습니다.')
    } finally {
      setIsPublishing(false)
    }
  }

  async function handleEdit(post: Post) {
    setStatus(null)
    setIsLoadingPost(post.slug)
    try {
      setStoredPat(pat)
      const path = `src/content/posts/${post.slug}.md`
      const { content, sha } = await getFile(path, pat)
      const bodyStart = content.indexOf('\n---\n')
      const parsedBody = bodyStart === -1 ? content : content.slice(bodyStart + 5).trim()
      setTitle(post.title)
      setBody(parsedBody)
      setEditingSlug(post.slug)
      setEditingSha(sha)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '글을 불러오지 못했습니다.')
    } finally {
      setIsLoadingPost(null)
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Write</h1>

      <p className="mt-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
        이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는
        fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서
        스크립트를 실행할 수 있는 누구나 읽을 수 있습니다.
      </p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Personal Access Token</label>
        <input
          type="password"
          value={pat}
          onChange={(e) => setPat(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">
          제목 {editingSlug && <span className="text-xs text-gray-500">(수정 중: {editingSlug})</span>}
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">본문 (Markdown)</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={12}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 font-mono text-sm"
        />
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handlePublish}
          disabled={isPublishing || !pat || !title || !body}
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isPublishing ? '게시 중...' : editingSlug ? '수정 게시' : '게시'}
        </button>
        {editingSlug && (
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md border border-gray-300 px-4 py-2"
          >
            취소
          </button>
        )}
      </div>

      {status && <p className="mt-4 text-sm">{status}</p>}

      <h2 className="mt-12 text-xl font-semibold">내 글 목록</h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex items-center justify-between rounded-md border border-gray-200 p-3"
          >
            <span>
              {post.title} <span className="text-xs text-gray-500">({post.date})</span>
            </span>
            <button
              type="button"
              onClick={() => handleEdit(post)}
              disabled={isLoadingPost === post.slug || !pat}
              className="text-sm text-blue-600 underline disabled:opacity-50"
            >
              {isLoadingPost === post.slug ? '불러오는 중...' : '수정'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors.

- [ ] **Step 3: Manual check (no live API call — form and list rendering only)**

Run: `npm run dev`, open `/#/write`.
Expected: below the form, "내 글 목록" lists "첫 번째 글 (2026-09-22)" and "이 사이트에 대하여 (2026-09-22)", each with a "수정" button that is disabled while the PAT field is empty. Do NOT click "수정" in this check — it would attempt a real `getFile` network call. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add src/pages/Write.tsx
git commit -m "feat: add post list and edit flow to /write"
```

---

### Task 7: Write page — delete flow

**Files:**
- Modify: `src/pages/Write.tsx`

**Interfaces:**
- Consumes: `deleteFile` from `src/lib/github.ts` (Task 4); the `Write` component structure from Task 6.
- Produces: the same `Write` default export, now also supporting delete. This is the last task that touches `Write.tsx`.

- [ ] **Step 1: Modify `src/pages/Write.tsx`**

First, update the import line for `../lib/github` to also bring in `deleteFile`:

Replace:

```typescript
import { createOrUpdateFile, getFile } from '../lib/github'
```

with:

```typescript
import { createOrUpdateFile, deleteFile, getFile } from '../lib/github'
```

Next, add a `handleDelete` function. Insert it directly after the existing `handleEdit` function (i.e. after its closing `}`, before the `return (` that starts the JSX):

```typescript
  async function handleDelete(post: Post) {
    if (!window.confirm(`"${post.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)) {
      return
    }
    setStatus(null)
    setIsLoadingPost(post.slug)
    try {
      setStoredPat(pat)
      const path = `src/content/posts/${post.slug}.md`
      const { sha } = await getFile(path, pat)
      await deleteFile(path, `post: delete ${post.title}`, sha, pat)
      setStatus('삭제됨 — 배포까지 약 1분 정도 걸려요.')
      if (editingSlug === post.slug) {
        resetForm()
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다.')
    } finally {
      setIsLoadingPost(null)
    }
  }
```

Finally, add a "삭제" button next to the existing "수정" button in the "내 글 목록" list. Replace:

```tsx
            <button
              type="button"
              onClick={() => handleEdit(post)}
              disabled={isLoadingPost === post.slug || !pat}
              className="text-sm text-blue-600 underline disabled:opacity-50"
            >
              {isLoadingPost === post.slug ? '불러오는 중...' : '수정'}
            </button>
```

with:

```tsx
            <span className="flex gap-3">
              <button
                type="button"
                onClick={() => handleEdit(post)}
                disabled={isLoadingPost === post.slug || !pat}
                className="text-sm text-blue-600 underline disabled:opacity-50"
              >
                {isLoadingPost === post.slug ? '불러오는 중...' : '수정'}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(post)}
                disabled={isLoadingPost === post.slug || !pat}
                className="text-sm text-red-600 underline disabled:opacity-50"
              >
                삭제
              </button>
            </span>
```

- [ ] **Step 2: Verify the build**

Run: `npm run build`
Expected: succeeds with no TypeScript or Vite errors.

- [ ] **Step 3: Manual check (no live API call — button rendering only)**

Run: `npm run dev`, open `/#/write`.
Expected: each row in "내 글 목록" now shows both "수정" and "삭제" buttons, both disabled while the PAT field is empty. Do NOT click "삭제" in this check. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 4: Commit**

```bash
git add src/pages/Write.tsx
git commit -m "feat: add delete flow to /write"
```

---

### Task 8: Shared navigation bar

**Files:**
- Create: `src/components/NavBar.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: nothing from earlier tasks besides the existence of the `/`, `/blog`, `/write` routes (Tasks 2, 3, 5) that it links to.
- Produces: `NavBar` default export, rendered once above the routed page content in `App.tsx`.

- [ ] **Step 1: Write `src/components/NavBar.tsx`**

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
      </div>
    </nav>
  )
}
```

- [ ] **Step 2: Modify `src/App.tsx`** to render `NavBar` above the routes

Replace the file's contents with:

```tsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  )
}
```

- [ ] **Step 3: Verify the build**

Run: `npm run build`
Expected: succeeds with no errors.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, open `/`.
Expected: a nav bar with "Home / Blog / Write" links appears above the page content on every route; clicking each link navigates correctly and the nav bar stays visible. Stop the dev server after confirming (Ctrl+C).

- [ ] **Step 5: Commit**

```bash
git add src/components/NavBar.tsx src/App.tsx
git commit -m "feat: add shared navigation bar"
```

---

### Task 9: Manual end-to-end verification of the live publish/edit/delete flow

This task requires a real GitHub personal access token and makes real commits to
the live `ShinHeeYoun/ShinHeeYoun.github.io` repository. It is **not** dispatched
to an implementer subagent — no subagent has or should have the PAT. The
controller runs this task directly with the human operator, the same way
Phase 1's Task 6 (connecting to the live repo) was handled outside the
subagent loop.

**Files:** none (manual verification only).

**Interfaces:**
- Consumes: the fully assembled `/write` page from Tasks 1–8, deployed to the live site.

- [ ] **Step 1: Confirm a PAT is available**

Use the same fine-grained PAT already registered in Windows Credential
Manager during Phase 1's deployment (scope: this repo, Contents:
Read and write), or ask the user to provide/create one if it has expired
or lacks the right scope. Do not ask the user to paste the token into
chat — they enter it directly into the `/write` page's PAT field in their
own browser.

- [ ] **Step 2: Merge and deploy this plan's work to the live site first**

Before testing, the code from Tasks 1–8 must actually be live (the
`/write` page and its GitHub API calls only make sense once deployed,
since they commit to the same repo that serves the site). Follow this
project's normal finish-the-branch flow to get this plan's commits onto
`main` on the live repo, and confirm the GitHub Actions deploy succeeds
(same verification pattern as Phase 1 Task 6, Steps 5–7).

- [ ] **Step 3: Test create**

On the live site, open `/#/write`, enter the PAT, write a short test post
(e.g. title "테스트 글", any body text), and click 게시. Confirm the success
message appears. Wait ~1 minute for the deploy workflow to finish, then
reload `/#/blog` and confirm the test post appears in the list, and that
`/#/blog/<its-slug>` renders its content correctly.

- [ ] **Step 4: Test edit**

Reload `/#/write` (so the "내 글 목록" reflects the just-deployed test
post), click "수정" on the test post, change its body text, and click
"수정 게시". Wait for the deploy, then reload `/#/blog/<its-slug>` and
confirm the body text changed.

- [ ] **Step 5: Test delete**

Reload `/#/write`, click "삭제" on the test post, confirm the browser
confirmation dialog, and confirm the success message appears. Wait for
the deploy, then reload `/#/blog` and confirm the test post is gone, and
that `/#/blog/<its-slug>` now shows "글을 찾을 수 없습니다."

- [ ] **Step 6: Report results**

Report which of create/edit/delete worked as expected and which did not,
with any error messages the GitHub API returned. If any step failed, fix
the underlying code (not by editing this plan) and re-run the failing
step before considering this task, and the phase, complete.
