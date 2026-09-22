# Portfolio Site — Phase 1: Foundation & Home Design

## Context

Building a personal homepage on GitHub Pages (`shinheeyoun.github.io`) that will
eventually have three parts:

1. **Foundation + Portfolio** (this phase)
2. **Blog** with an in-site post editor that commits Markdown files to the repo
   via the GitHub API (no backend server)
3. **Tool runner** — interactive demos of the owner's own programs (e.g. a
   calculator with a "controller" and a "view"), running entirely client-side

The site is hosted on GitHub Pages, which only serves static files — there is
no server to run backend code. This constrains phases 2 and 3 (both will be
implemented client-side; phase 2's "writing" happens by committing files
through the GitHub REST API using a personal access token the owner enters
and stores locally in their own browser).

The existing `shinheeyoun.github.io` repository contains an old, unfinished
page. It will be replaced entirely by this project.

This document specs **Phase 1 only**: project scaffold, deployment pipeline,
and a Home page containing a blog-preview section (populated with placeholder
data for now — real content arrives in Phase 2).

## Goals

- A working Vite + React + TypeScript site, deployed automatically to
  `https://shinheeyoun.github.io/` on every push to `main`.
- A Home page that renders a "latest blog posts" preview section from a
  typed data source, so Phase 2 can slot real content in without restructuring.
- Routing set up with `HashRouter` so future routes (`/blog`, `/tools`) work
  on GitHub Pages without a 404-on-refresh problem, but only the `/` route is
  actually built in this phase.

## Non-goals (explicitly deferred)

- About/Projects/Contact pages and nav items — next phase.
- Real blog content, the post editor, and GitHub API integration — Phase 2.
- Any interactive tool/demo pages — Phase 3.
- Automated test suite — deferred until there's enough behavior to justify one.

## Architecture

- **Vite + React + TypeScript** — fast dev server, minimal config, standard
  static build output (`dist/`).
- **React Router (`HashRouter`)** — GitHub Pages has no server-side rewrite
  rules, so a `BrowserRouter` would 404 on a hard refresh of any non-root
  route. `HashRouter` (`/#/blog`) always resolves to `index.html`, sidestepping
  that entirely, at the cost of the `#` in the URL.
- **Tailwind CSS** — utility-first styling for fast, consistent iteration.
- **Deployment target**: `https://shinheeyoun.github.io/` (root domain), which
  requires the repository to be named exactly `shinheeyoun.github.io`. The
  existing repository by that name will be replaced.

## Project structure

```
src/
  main.tsx              # ReactDOM root, wraps <App/> in <HashRouter>
  App.tsx                # <Routes> — currently just "/" -> Home
  pages/
    Home.tsx              # renders <BlogPreviewSection/>
  components/
    BlogPreviewSection.tsx
    BlogPreviewCard.tsx
  data/
    posts.ts              # Post type + array; sample placeholder entries for now
```

- `data/posts.ts` exports a `Post` type (`{ slug, title, date, excerpt }`) and
  an array of posts. Phase 1 ships with 1–2 hand-written placeholder posts so
  the layout can be verified. Phase 2 replaces how this array is populated
  (real files written via the in-site editor) without changing `Home.tsx` or
  the components that consume it.
- No `/blog` or `/tools` routes or stub pages are created yet — adding a
  route later is a small, additive change, so building stubs now would be
  pure speculation.

## Deployment pipeline

- GitHub Actions workflow (`.github/workflows/deploy.yml`) triggered on push
  to `main`:
  1. checkout, `npm ci`, `npm run build`
  2. publish `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`
- Repository Settings → Pages source set to the `gh-pages` branch.
- The existing content of `shinheeyoun.github.io` (both the `main` branch and
  any Pages configuration) will be replaced. This is a destructive, remote,
  hard-to-reverse action — it will be confirmed explicitly with the user
  immediately before it's executed, separately from this design approval.

## Testing

- No automated test suite for this phase — it's static layout with no
  business logic yet. Verification is manual: `npm run dev` for local
  iteration, `npm run build && npm run preview` to confirm the production
  build renders correctly before deploying.
- Automated tests are a reasonable addition once Phase 2 (editor, GitHub API
  calls) introduces real logic worth protecting with tests.

## Open items for later phases (not decided here)

- Phase 2: exact Markdown front-matter schema for posts, PAT storage/UX,
  GitHub Contents API commit flow, listing/reading posts from the repo at
  build or runtime.
- Phase 3: how each tool's "controller" logic is structured/shared across
  demos, and the UI shell for picking/running a tool.
