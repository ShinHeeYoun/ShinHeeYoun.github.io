import { useId, useState, type FormEvent, type KeyboardEvent } from 'react'
import { GuestbookError, type Entry } from './api'
import { MAX_PASSWORD, MAX_TEXT, countChars, checkEntry } from './rules'
import { MAX_NICKNAME } from '../tools/yacht/nickname'

const AUTHOR_KEY = 'guestbook_author'

function storedAuthor(): string {
  try {
    return localStorage.getItem(AUTHOR_KEY) ?? ''
  } catch {
    return ''
  }
}

export function writeError(error: unknown): string {
  if (error instanceof GuestbookError) {
    if (error.status === 429) return '짧은 시간에 너무 많이 작성했습니다. 잠시 후 다시 시도하세요.'
    if (error.status === 404) return '답글을 달려던 댓글이 이미 삭제되었습니다.'
    if (error.status === 400 || error.status === 413 || error.status === 415) return '서버가 이 내용을 받아들이지 않았습니다.'
  }
  return '서버에 연결하지 못했습니다. 잠시 후 다시 시도하세요.'
}

type Props = {
  // What the button says, and what the text box is called.
  submitLabel: string
  bodyLabel: string
  // Sends the entry; resolves with the entry the server kept.
  send: (input: { author: string; password: string; body: string }) => Promise<Entry>
  onDone: (entry: Entry) => void
  onCancel: () => void
}

// Name, password and text. Submitted with the button or with Ctrl+Enter (Cmd+Enter on a Mac) in the text box.
export default function EntryForm({ submitLabel, bodyLabel, send, onDone, onCancel }: Props) {
  const ids = { author: useId(), password: useId(), body: useId() }
  const [author, setAuthor] = useState(storedAuthor)
  const [password, setPassword] = useState('')
  const [body, setBody] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [badField, setBadField] = useState<'author' | 'password' | 'body' | null>(null)

  async function submit() {
    if (sending) return
    const checked = checkEntry({ author, password, body })
    if (!checked.ok) {
      setError(checked.message)
      setBadField(checked.field)
      return
    }
    setError(null)
    setBadField(null)
    setSending(true)
    try {
      const entry = await send({ author: checked.author, password: checked.password, body: checked.body })
      try {
        localStorage.setItem(AUTHOR_KEY, checked.author) // the name is remembered; the password never is
      } catch {
        // storage unavailable: the name is just not remembered
      }
      onDone(entry)
    } catch (failure) {
      setError(writeError(failure))
    } finally {
      setSending(false)
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    void submit()
  }

  function onKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault()
      void submit()
    }
  }

  const input =
    'w-full rounded-md border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none'
  const border = (field: string) => (badField === field ? 'border-red-500' : 'border-border')
  const length = countChars(body)

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-lg border border-border bg-surface p-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor={ids.author} className="block text-xs text-muted">
            아이디
          </label>
          <input
            id={ids.author}
            type="text"
            value={author}
            autoComplete="nickname"
            maxLength={MAX_NICKNAME * 2}
            onChange={(event) => setAuthor(event.target.value)}
            aria-invalid={badField === 'author'}
            className={`${input} ${border('author')}`}
          />
        </div>
        <div>
          <label htmlFor={ids.password} className="block text-xs text-muted">
            비밀번호 (삭제할 때 필요)
          </label>
          <input
            id={ids.password}
            type="password"
            value={password}
            autoComplete="new-password"
            maxLength={MAX_PASSWORD * 2}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={badField === 'password'}
            className={`${input} ${border('password')}`}
          />
        </div>
      </div>
      <div>
        <label htmlFor={ids.body} className="block text-xs text-muted">
          {bodyLabel}
        </label>
        <textarea
          id={ids.body}
          value={body}
          rows={4}
          onChange={(event) => setBody(event.target.value)}
          onKeyDown={onKeyDown}
          aria-invalid={badField === 'body'}
          className={`${input} ${border('body')} resize-y`}
        />
        <p className="mt-1 flex justify-between text-xs text-muted">
          <span>Markdown을 쓸 수 있습니다. Ctrl+Enter로 등록합니다.</span>
          <span className={length > MAX_TEXT ? 'font-semibold text-red-500' : ''}>
            {length} / {MAX_TEXT}
          </span>
        </p>
      </div>
      <p className="text-xs text-muted">등록하면 IP 주소와 작성 시간이 서버에 기록됩니다. IP 주소는 화면에 보이지 않습니다.</p>
      {error && (
        <p role="alert" className="text-sm text-red-500">
          {error}
        </p>
      )}
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={sending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {sending ? '등록 중...' : submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-border bg-background px-3 py-2 text-sm transition-colors hover:border-accent"
        >
          취소
        </button>
      </div>
    </form>
  )
}
