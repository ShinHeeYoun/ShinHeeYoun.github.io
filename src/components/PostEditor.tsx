import { useMemo, useState, type ReactNode } from 'react'
import { renderPostHtml } from '../lib/markdown'
import MarkdownBody from './MarkdownBody'

type Props = {
  title: string
  body: string
  date: string // shown in the preview, like on the post page
  onTitleChange: (title: string) => void
  onBodyChange: (body: string) => void
  note?: ReactNode // small text beside the title label, e.g. which post is being edited
  children: ReactNode // the buttons that publish (and cancel), placed after the Preview button
}

// Title and body boxes on the left, and on the right the post as it will look once the Preview button is pressed.
// The preview is a snapshot: typing after it does not change it until the button is pressed again.
export default function PostEditor({ title, body, date, onTitleChange, onBodyChange, note, children }: Props) {
  const [shown, setShown] = useState<{ title: string; body: string; date: string } | null>(null)
  const html = useMemo(() => (shown ? renderPostHtml(shown.body, shown.title) : ''), [shown])
  const outdated = shown !== null && (shown.title !== title || shown.body !== body)

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <div>
        <div>
          <label htmlFor="editor-title" className="block text-sm font-medium">
            제목 {note && <span className="text-xs text-muted">{note}</span>}
          </label>
          <input
            id="editor-title"
            type="text"
            value={title}
            onChange={(event) => onTitleChange(event.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-surface p-2 text-foreground"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="editor-body" className="block text-sm font-medium">
            본문 (Markdown)
          </label>
          <textarea
            id="editor-body"
            value={body}
            onChange={(event) => onBodyChange(event.target.value)}
            rows={20}
            className="mt-1 w-full rounded-md border border-border bg-surface p-2 font-mono text-sm text-foreground"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShown({ title, body, date })}
            disabled={!title && !body}
            className="rounded-md border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background disabled:opacity-50"
          >
            미리보기
          </button>
          {children}
        </div>
      </div>

      <section aria-label="미리보기" className="min-w-0 rounded-md border border-border bg-surface p-5">
        {outdated && (
          <p role="status" className="mb-4 rounded-md bg-amber-50 p-2 text-xs text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
            내용이 바뀌었습니다. 미리보기를 다시 눌러 갱신하세요.
          </p>
        )}
        {shown ? (
          <>
            <h1 className="text-2xl font-bold">{shown.title || '(제목 없음)'}</h1>
            <p className="mt-1 text-sm text-muted">{shown.date}</p>
            <MarkdownBody html={html} className="mt-8" />
          </>
        ) : (
          <p className="text-sm text-muted">미리보기를 누르면 여기에 표시됩니다.</p>
        )}
      </section>
    </div>
  )
}
