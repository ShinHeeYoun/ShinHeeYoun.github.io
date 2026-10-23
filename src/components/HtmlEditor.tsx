import { useId, type ChangeEvent, type ReactNode } from 'react'
import HtmlFrame from './HtmlFrame'
import {
  MAX_HTML_BYTES,
  byteLength,
  composeDraft,
  draftProblem,
  extractTitle,
  missingFiles,
  type HtmlDraft,
} from '../lib/htmlPost'

type Props = {
  draft: HtmlDraft
  onChange: (draft: HtmlDraft) => void
  note?: ReactNode // small text beside the title label, e.g. which post is being edited
  keptNote?: string // shown when the page already stored with the post is kept unless a new file is chosen
  children: ReactNode // the buttons that publish (and cancel)
}

const kb = (bytes: number) => `${Math.max(1, Math.round(bytes / 1000))}KB`

// Choose an HTML file (and, optionally, stylesheets to go with it) on the left; the page appears on the right
// exactly as it will in the post, in the same sandboxed frame.
export default function HtmlEditor({ draft, onChange, note, keptNote, children }: Props) {
  const id = useId()
  const page = composeDraft(draft)
  const problem = draft.html === null ? null : draftProblem(draft)
  const missing = draft.html === null ? [] : missingFiles(draft.html, draft.css.map((file) => file.name))

  async function chooseHtml(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    event.target.value = '' // so that choosing the same file again still counts as a change
    if (!file) return
    const text = await file.text()
    onChange({
      ...draft,
      html: text,
      htmlName: file.name,
      title: extractTitle(text, file.name.replace(/\.[^.]+$/, '')),
    })
  }

  async function chooseCss(event: ChangeEvent<HTMLInputElement>) {
    const files = [...(event.target.files ?? [])]
    event.target.value = ''
    if (files.length === 0) return
    const css = await Promise.all(files.map(async (file) => ({ name: file.name, text: await file.text() })))
    onChange({ ...draft, css })
  }

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
        <div>
          <label htmlFor={`${id}-title`} className="block text-sm font-medium">
            제목 {note && <span className="text-xs text-muted">{note}</span>}
          </label>
          <input
            id={`${id}-title`}
            type="text"
            value={draft.title}
            onChange={(event) => onChange({ ...draft, title: event.target.value })}
            className="mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"
          />
          <p className="mt-1 text-xs text-muted">HTML 파일을 고르면 파일의 제목으로 채워집니다. 고쳐 쓸 수 있어요.</p>
        </div>

        <div className="mt-4">
          <label htmlFor={`${id}-html`} className="block text-sm font-medium">
            HTML 파일
          </label>
          <input
            id={`${id}-html`}
            type="file"
            accept=".html,.htm,text/html"
            onChange={chooseHtml}
            className="mt-1 block w-full text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:py-1.5 file:text-foreground hover:file:border-accent"
          />
          <p className="mt-1 text-xs text-muted">
            {draft.htmlName
              ? `선택됨: ${draft.htmlName}`
              : draft.html !== null
                ? keptNote
                : '선택된 파일이 없습니다.'}
          </p>
        </div>

        <div className="mt-4">
          <label htmlFor={`${id}-css`} className="block text-sm font-medium">
            CSS 파일 <span className="text-xs font-normal text-muted">(선택, 여러 개 가능)</span>
          </label>
          <input
            id={`${id}-css`}
            type="file"
            accept=".css,text/css"
            multiple
            onChange={chooseCss}
            className="mt-1 block w-full text-sm file:mr-3 file:rounded-md file:border file:border-border file:bg-surface file:px-3 file:py-1.5 file:text-foreground hover:file:border-accent"
          />
          <p className="mt-1 text-xs text-muted">
            {draft.css.length > 0
              ? `선택됨: ${draft.css.map((file) => file.name).join(', ')} — 다시 고르면 바뀝니다.`
              : '고른 CSS는 글 안에 함께 저장됩니다. HTML이 같은 이름의 CSS를 <link>로 부르고 있으면 그 연결은 자동으로 대신합니다.'}
          </p>
        </div>

        {missing.length > 0 && (
          <p role="status" className="mt-4 rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
            이 페이지가 부르는 파일이 함께 올라오지 않았습니다: {missing.join(', ')}. 이 파일들은 글에서 불러와지지 않아요.
            이미지는 data: 주소나 http(s) 주소로 넣고, 스타일은 위의 CSS 파일로 올려 주세요.
          </p>
        )}
        {page !== null && (
          <p className={`mt-3 text-xs ${problem ? 'text-red-600 dark:text-red-400' : 'text-muted'}`}>
            {problem ?? `크기 ${kb(byteLength(page))} / 최대 ${kb(MAX_HTML_BYTES)}`}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">{children}</div>
      </div>

      <section aria-label="미리보기" className="min-w-0 rounded-md border border-border bg-surface p-5">
        {page === null ? (
          <p className="text-sm text-muted">HTML 파일을 선택하면 여기에 표시됩니다.</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{draft.title || '(제목 없음)'}</h1>
            <div className="mt-6">
              <HtmlFrame html={page} title="미리보기" />
            </div>
          </>
        )}
      </section>
    </div>
  )
}
