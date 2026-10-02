# Portfolio Site — Phase 4: Terminal Redesign & Portfolio Content Design

## Context

Phases 1–3 shipped a working but bare site: Home (title + two post cards),
Blog, Write, Tools. The owner's feedback: it feels empty, not like a live
personal site — it needs more content and a more striking design, and they
weren't sure what to add.

Diagnosis: the site doesn't say **who the owner is**. Phase 1 deferred the
portfolio sections (About / Projects / Contact); this phase adds them and
restyles the whole site with a "dark terminal" identity chosen from three
mockups (terminal / minimal / gradient-glass — the owner picked terminal).

Positioning (owner-confirmed): **backend / infrastructure engineer** whose
strength is tracing production incidents (Tomcat memory leaks, thread dumps,
connection leaks, log analysis).

A separate session already added a light/dark toggle built on semantic color
tokens (`--color-*` CSS variables, mapped in `tailwind.config.js`; theme
helpers in `src/lib/theme.ts`; `NavBar` toggle). This phase builds on that
system rather than replacing it.

## Goals

- A terminal visual identity applied site-wide by changing token values, not
  by editing every page's classes.
- Home becomes a one-screen portfolio summary: hero → featured projects →
  latest posts → contact.
- New pages: `/projects` (all projects) and `/about`.
- Navigation: Home / Projects / Blog / Tools / About / Write + theme toggle.

## Non-goals

- Contact form, email/LinkedIn links (owner chose **GitHub only** for
  contact, to avoid exposing an email address on a public page).
- Photos/images, animation libraries, i18n, analytics, comments, search.
- Any real customer name, product name, or internal log content (see
  "Confidentiality").
- Changes to Blog/Write/Tools behavior — only their styling follows the new
  tokens.

## Confidentiality (binding constraint)

The owner's real incident reports name customers and an employer's product.
Public project descriptions must be **anonymized, generalized
problem → cause → resolution summaries**: no customer names, no product or
vendor names, no internal hostnames/paths, no copied log excerpts or report
text. Tool/script projects are described by what they do generically. The
owner reviews all copy before it ships (see "Copy drafts").

## Visual system

Token values (in `src/index.css`; names unchanged so existing classes keep
working):

| Token | Dark (default) | Light ("paper terminal") |
|---|---|---|
| background | `11 15 20` (#0b0f14) | `250 247 240` |
| surface | `17 24 32` (#111820) | `243 239 228` |
| border | `28 39 51` (#1c2733) | `221 215 200` |
| foreground | `230 237 243` | `31 41 55` |
| muted | `125 139 153` | `87 96 110` (darker than first drafted `107 114 128`, for contrast on the cream background) |
| accent | `61 220 151` (#3ddc97) | `4 120 87` |
| accent-hover | lighter green | darker green |

- **Default theme**: dark when no stored preference exists (previously the
  OS preference decided). A stored explicit choice still wins. The same rule
  applies in the inline script in `index.html` (prevents a flash of the wrong
  theme) and in `NavBar`'s initial state. The decision is extracted to a pure
  function in `src/lib/theme.ts`, `resolveInitialTheme(stored: Theme | null): Theme`
  (returns `stored ?? 'dark'`), and unit-tested with Vitest.
- **Fonts**: `font-mono` stack (`ui-monospace, "D2Coding", Consolas, monospace`)
  for nav, headings, labels, tags; body keeps the existing sans stack. No
  web-font downloads.
- **Details**: nav brand `~/shinheeyoun`; current route marked with a `>`
  prefix; cards get a small accent dot and a subtle accent border/glow on
  hover; hero shows a blinking block cursor via a CSS animation that is
  disabled under `prefers-reduced-motion: reduce`.
- No animation library, no images.

## Pages and components

New/changed files:

```
src/data/projects.ts            # Project type + projects array (typed data, like tools registry)
src/components/Hero.tsx         # "$ whoami" block
src/components/ProjectCard.tsx  # shared by Home (featured) and /projects
src/components/FeaturedProjects.tsx  # first 3 projects + link to /projects
src/components/ContactSection.tsx    # GitHub link
src/pages/Home.tsx              # Hero, FeaturedProjects, BlogPreviewSection, ContactSection
src/pages/Projects.tsx          # all projects
src/pages/About.tsx             # intro + stack
src/components/NavBar.tsx       # new links, brand, active marker
src/lib/theme.ts (+ test)       # resolveInitialTheme
src/index.css, tailwind.config.js, index.html  # tokens, mono font family, inline theme script
src/App.tsx                     # /projects, /about routes
```

- `Project`: `{ id: string; title: string; summary: string; tags: string[]; href?: string }`.
  `href` is optional and, when present, an internal route (e.g. a tool on this
  site); anonymized work projects have none.
- `BlogPreviewSection` already caps at 3 and keeps working; it is only
  restyled by tokens.
- Routing stays `HashRouter`.

## Copy drafts (owner to review — these ship as written unless changed)

Name display: **ShinHeeYoun** (from the GitHub account). *Open: confirm whether
the hero should show a Korean name (the mockups used one without confirmation).*

**Hero**
- `$ whoami`
- Role: 백엔드 / 인프라 엔지니어
- Tagline: 장애의 원인을 로그에서 끝까지 추적합니다.
- Buttons: `view projects` → `/projects`, `read blog` → `/blog`

**About** (derived only from the owner's work folders; no employment dates,
employer, or years of experience are claimed)
- 소개: Java/Tomcat 기반 운영 환경에서 발생하는 장애와 성능 문제를 로그·덤프·
  지표로 분석하고, 재현 가능한 근거와 함께 보고서로 정리합니다. 반복되는 분석
  작업은 직접 도구로 만들어 둡니다.
- 관심사: 장애 원인 분석(RCA) · JVM/스레드 덤프 분석 · 대용량 로그 분석 · DB 커넥션 풀 운영
- 기술 스택 *(owner to confirm)*: Java, Tomcat, Python, Node.js, PowerShell/Batch, awk, pgpool

**Projects** (anonymized)
1. **리포팅 서버 요청 적체 원인 분석** — 주기적 "멈춤" 현상을 로그로 추적. 개별
   요청 지연이 아니라 요청 총량이 처리 용량을 넘어 내부 큐가 적체되고, 상위
   timeout이 만료되던 구조를 규명하고 근거 지표와 권고안을 정리. `로그분석` `Tomcat` `용량산정`
2. **WAS 스레드 누수로 인한 OOM/행 장애 분석** — 반복 재기동 징후와 스레드
   누수를 로그·덤프로 연결해 원인을 특정. `JVM` `스레드덤프` `Tomcat`
3. **대용량 로그 분석 웹 도구** — 수 GB 로그를 한 번만 인덱싱해 타임라인, 요청
   추적, 예외 군집화, 성능·트래픽 분석을 제공하는 로컬 도구. 외부 의존성 없이
   오프라인 동작. `Python` `JavaScript` `로그분석`
4. **DB 커넥션 풀 누수 재현 데모** — 커넥션 누수 증상을 재현해 원인과 관찰
   방법을 보여주는 데모. `Node.js` `DB` `pgpool`
5. **스레드 덤프 수집·분석 스크립트** — 장애 시점의 jstack 덤프를 일정 간격으로
   수집하고 요약하는 스크립트. `PowerShell` `JVM`

**Contact**: GitHub → `https://github.com/ShinHeeYoun`

## Testing

- `npm run test` (CI gate): existing 14 tests plus `resolveInitialTheme`
  tests (stored `'light'` → light, stored `'dark'` → dark, `null` → dark).
- `npm run build` as the type-check/build gate.
- Manual browser checks, per page, in dark and light themes and at a phone
  width (~375px): Home, `/projects`, `/about`, `/blog`, `/write`, `/tools`,
  `/tools/calculator`, a post detail page. Confirm theme toggle persists across
  reload, that first load with no stored theme is dark, and that the cursor
  animation stops with `prefers-reduced-motion`.
- UI components remain manually verified (no component-test library), as in
  earlier phases.

## Open items

- Korean name display in the hero (see Copy drafts).
- Tech-stack list accuracy (owner to confirm).
- Future: more tools, blog tags/search — not part of this phase.
