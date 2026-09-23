# Portfolio Site — Phase 2: Blog Content & Editor Design

## Context

Phase 1 shipped a static Vite + React + TypeScript site deployed to
`https://shinheeyoun.github.io/`, with a Home page showing a "latest posts"
preview backed by a hardcoded placeholder array (`src/data/posts.ts`). Phase
1's design explicitly deferred: real post content, an in-site editor, a full
post list, and individual post pages.

This phase adds:

1. A real Markdown-file-based content model, replacing the hardcoded array.
2. Pages to browse all posts and read one in full.
3. An in-site editor (`/write`) that creates, edits, and deletes posts by
   committing Markdown files directly to the GitHub repo via the GitHub
   REST API, called from the browser — there is still no backend server
   (GitHub Pages only serves static files), so the browser needs a
   personal access token (PAT) to authenticate those API calls.

## Goals

- Posts live as `.md` files with YAML frontmatter in `src/content/posts/`,
  loaded at **build time** via Vite's `import.meta.glob` into a `Post[]`
  array — the existing `posts.ts` array and its consumers (`Home.tsx`,
  `BlogPreviewSection`, `BlogPreviewCard`) are updated to source from this
  loader instead of a hardcoded literal.
- `/blog` lists all posts (newest first); `/blog/:slug` renders one post's
  full Markdown content.
- `/write` lets the site owner create a new post, and edit or delete an
  existing one, by committing directly to the `main` branch through the
  GitHub Contents API. A PAT entered once is stored in the browser's
  `localStorage` and reused for subsequent visits.
- A shared `NavBar` (Home / Blog / Write) is added — Phase 1 had no
  navigation at all.
- Publishing a post does not appear on the live site immediately: the
  commit triggers the existing GitHub Actions workflow, which rebuilds and
  redeploys (roughly 30–60 seconds). The `/write` page tells the user this
  after a successful publish.

## Non-goals (explicitly deferred)

- Runtime (client-fetched) post loading — rejected in favor of build-time
  loading to keep `Home`/`BlogPreviewSection` synchronous and avoid
  unauthenticated GitHub API rate limits (60 requests/hour/IP) on every
  page view.
- Rich-text/WYSIWYG editing — the editor is a plain Markdown textarea.
- Any access control beyond "holds a valid PAT with write access to this
  one repo." The `/write` route is linked from the nav and reachable by
  anyone; nothing is publishable without a working PAT.
- Tags, categories, comments, pagination, search, drafts, or scheduled
  publishing.
- Phase 3 (interactive tool demos) — untouched by this phase.

## Content model

Each post is one file: `src/content/posts/<slug>.md`.

```markdown
---
title: 첫 번째 글
date: 2026-09-22
---
본문 내용 (Markdown)...
```

- **`slug`**: generated at publish time as `<YYYY-MM-DD>-<6-char-random-id>`
  (e.g. `2026-09-23-a1b2c3`), never derived from the (often Korean, not
  URL-safe) title. The title displayed on the page always comes from
  frontmatter.
- **`excerpt`**: not stored in frontmatter — derived at load time by
  truncating the rendered body to a fixed character count (matches Phase
  1's `BlogPreviewCard`, which already expects an `excerpt` string).
- **Loading**: `src/lib/posts.ts` uses `import.meta.glob('/src/content/posts/*.md', { query: '?raw', import: 'default', eager: true })` to read every file's raw text at build time, a small hand-written `src/lib/frontmatter.ts` splits the `---`-delimited YAML header from the body (no external YAML library needed — the frontmatter here is always exactly two flat string fields), and the result is sorted newest-first and exported as `Post[]`.
- Phase 1's two placeholder posts become real files under
  `src/content/posts/` with today's date-based slugs, so the migration
  ships with content instead of an empty list. `src/data/posts.ts` is
  deleted; its `Post` type moves to `src/lib/posts.ts`.

## Routes & navigation

- `NavBar` (new component, rendered once in `App.tsx` above the routed
  page): links to `/`, `/blog`, `/write`.
- `/` — Home (unchanged behavior, now reading from the real loader).
- `/blog` — every post, newest first, title + date + excerpt, each linking
  to its detail page.
- `/blog/:slug` — full post: title, date, and the body rendered from
  Markdown to HTML via `marked` (a dependency-light, browser-safe Markdown
  parser — no Node-only APIs, unlike some alternatives).
- `/write` — the editor (see below).

All routes stay under the existing `HashRouter`.

## Editor & publish flow (`/write`)

**PAT entry:** a password-type input, saved to `localStorage` under a
single key on submit, pre-filled from `localStorage` on later visits. The
page displays a fixed warning: use a fine-grained PAT scoped to only this
repository with Contents: Read and write permission, because it is stored
in plain browser storage (readable by anything that can run JS on this
origin, and lost if the browser's storage is cleared).

**Create:** title + Markdown body form. On submit:
1. Generate the slug (`<date>-<random-id>`).
2. Build the file text (frontmatter + body) and base64-encode it
   (UTF-8-safe — `btoa`/`atob` don't handle non-ASCII directly, so encoding
   goes through `TextEncoder`/`TextDecoder` plus a byte-to-base64 helper).
3. `PUT https://api.github.com/repos/ShinHeeYoun/ShinHeeYoun.github.io/contents/src/content/posts/<slug>.md` with `{ message, content, branch: "main" }` and an `Authorization: Bearer <PAT>` header.
4. On success, show "게시됨 — 배포까지 약 1분 정도 걸려요." On failure, show
   the GitHub API's error message.

**My posts list:** below the form, the posts already known at build time
(from the same `Post[]` the rest of the site uses) are listed with
"수정"/"삭제" buttons each.

**Edit:** clicking "수정" does `GET .../contents/<path>` to fetch the
file's current content and `sha` (required by the Contents API for any
update — using a stale or missing `sha` is rejected), decodes and parses
it into the form (now in "editing" mode), and on submit does the same
`PUT` as create but includes the fetched `sha` so it updates the existing
file instead of erroring on a conflict.

**Delete:** clicking "삭제" asks for confirmation, fetches the current
`sha` the same way, then `DELETE .../contents/<path>` with
`{ message, sha, branch: "main" }`.

**Known limitation, accepted:** the "my posts" list is only as fresh as
the last build. A post published seconds ago won't show up for editing
until the triggered deploy finishes and the page is reloaded. This follows
directly from the build-time content model and is not worked around.

## Testing

Same approach as Phase 1: no automated test suite. Verification is
`npm run build` plus manual browser checks. The GitHub API integration
(create/edit/delete) can only be verified by actually calling the live
API with a real PAT against the real repo — the implementation plan will
call this out explicitly as a manual, PAT-gated verification step rather
than something a subagent can check unattended.

## Open items for later phases (not decided here)

- Phase 3 (interactive tool demos) is untouched by this phase's design.
- Any future access control tighter than "holds a valid repo-scoped PAT."
