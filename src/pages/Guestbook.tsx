import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import { useAdmin } from '../components/AdminContext'
import { SERVER_API_BASE, scoresBase } from '../lib/serverApi'
import { GuestbookApi, GuestbookError, type Entry } from '../guestbook/api'
import EntryForm from '../guestbook/EntryForm'
import GuestbookMarkdown from '../guestbook/GuestbookMarkdown'

function formatDate(iso: string): string {
  const date = new Date(iso)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function deleteError(error: unknown): string {
  if (error instanceof GuestbookError) {
    if (error.status === 403) return '비밀번호가 맞지 않습니다.'
    if (error.status === 404) return '이미 삭제된 글입니다.'
    if (error.status === 429) return '시도가 너무 많습니다. 잠시 후 다시 시도하세요.'
  }
  return '서버에 연결하지 못했습니다. 잠시 후 다시 시도하세요.'
}

type Remove = (id: number, password?: string) => Promise<void>

const smallButton =
  'rounded-md border border-border bg-background px-2 py-1 text-xs transition-colors hover:border-accent'

// The delete button of one entry. The writer types the password; the admin, who is signed in, does not need one.
function DeleteControl({ id, admin, remove }: { id: number; admin: boolean; remove: Remove }) {
  const [asking, setAsking] = useState(false)
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function run(typed?: string) {
    if (busy) return
    setBusy(true)
    setError(null)
    try {
      await remove(id, typed)
    } catch (failure) {
      setError(deleteError(failure))
      setBusy(false)
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (password !== '') void run(password)
  }

  if (admin) {
    return (
      <>
        <button
          type="button"
          disabled={busy}
          onClick={() => {
            if (window.confirm('관리자 권한으로 이 글을 삭제할까요? 달린 답글도 함께 삭제됩니다.')) void run()
          }}
          className={smallButton}
        >
          삭제 (관리자)
        </button>
        {error && <span role="alert" className="text-xs text-red-500">{error}</span>}
      </>
    )
  }
  if (!asking) {
    return (
      <button type="button" onClick={() => setAsking(true)} className={smallButton}>
        삭제
      </button>
    )
  }
  return (
    <form onSubmit={onSubmit} className="flex flex-wrap items-center gap-2">
      <input
        type="password"
        value={password}
        autoComplete="off"
        placeholder="비밀번호"
        aria-label="삭제할 글의 비밀번호"
        onChange={(event) => setPassword(event.target.value)}
        className="w-32 rounded-md border border-border bg-background px-2 py-1 text-xs focus:border-accent focus:outline-none"
      />
      <button type="submit" disabled={busy || password === ''} className={`${smallButton} disabled:opacity-50`}>
        삭제 확인
      </button>
      <button type="button" onClick={() => { setAsking(false); setPassword(''); setError(null) }} className={smallButton}>
        취소
      </button>
      {error && <span role="alert" className="text-xs text-red-500">{error}</span>}
    </form>
  )
}

function Header({ entry }: { entry: Entry }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 text-xs text-muted">
      <span className="font-semibold text-foreground">{entry.author}</span>
      <time dateTime={entry.createdAt}>{formatDate(entry.createdAt)}</time>
    </p>
  )
}

type ItemProps = { api: GuestbookApi; admin: boolean; remove: Remove }

function Reply({ entry, admin, remove }: { entry: Entry; admin: boolean; remove: Remove }) {
  return (
    <li className="rounded-md border border-border/60 bg-background px-3 py-2">
      <Header entry={entry} />
      <GuestbookMarkdown source={entry.body} />
      <div className="mt-1 flex flex-wrap items-center gap-2">
        <DeleteControl id={entry.id} admin={admin} remove={remove} />
      </div>
    </li>
  )
}

function Comment({
  entry,
  api,
  admin,
  remove,
  onDeleted,
  onReplyCountChange,
}: ItemProps & {
  entry: Entry
  onDeleted: (id: number) => void
  onReplyCountChange: (id: number, count: number) => void
}) {
  const [replying, setReplying] = useState(false)
  const [replies, setReplies] = useState<Entry[] | null>(null) // null: not opened
  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)

  const loadReplies = useCallback(async () => {
    setLoading(true)
    setFailed(false)
    try {
      setReplies(await api.replies(entry.id))
    } catch {
      setFailed(true)
    } finally {
      setLoading(false)
    }
  }, [api, entry.id])

  async function removeReply(id: number, password?: string) {
    await remove(id, password)
    const next = (replies ?? []).filter((reply) => reply.id !== id)
    setReplies(next)
    onReplyCountChange(entry.id, next.length)
  }

  async function removeSelf(id: number, password?: string) {
    await remove(id, password)
    onDeleted(id)
  }

  return (
    <li className="rounded-lg border border-border bg-surface p-4">
      <Header entry={entry} />
      <GuestbookMarkdown source={entry.body} />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setReplying((open) => !open)} aria-expanded={replying} className={smallButton}>
          답글
        </button>
        <DeleteControl id={entry.id} admin={admin} remove={removeSelf} />
        {entry.replyCount > 0 && (
          <button
            type="button"
            disabled={loading}
            onClick={() => (replies === null ? void loadReplies() : setReplies(null))}
            aria-expanded={replies !== null}
            className={smallButton}
          >
            {replies === null ? `답글 ${entry.replyCount}개 더보기` : '답글 접기'}
          </button>
        )}
      </div>

      {failed && <p role="alert" className="mt-2 text-xs text-red-500">답글을 불러오지 못했습니다.</p>}
      {loading && <p className="mt-2 text-xs text-muted">불러오는 중...</p>}

      {replies !== null && replies.length > 0 && (
        <ul className="mt-3 space-y-2 border-l-2 border-border pl-3">
          {replies.map((reply) => (
            <Reply key={reply.id} entry={reply} admin={admin} remove={removeReply} />
          ))}
        </ul>
      )}

      {replying && (
        <div className="mt-3">
          <EntryForm
            submitLabel="답글 등록"
            bodyLabel="답글"
            send={(input) => api.write({ ...input, parentId: entry.id })}
            onCancel={() => setReplying(false)}
            onDone={(reply) => {
              setReplying(false)
              // Show the replies with the new one at the end; if they were not open yet, open them.
              if (replies === null) {
                onReplyCountChange(entry.id, entry.replyCount + 1)
                void loadReplies()
              } else {
                setReplies([...replies, reply])
                onReplyCountChange(entry.id, replies.length + 1)
              }
            }}
          />
        </div>
      )}
    </li>
  )
}

export default function Guestbook() {
  const { status, pat } = useAdmin()
  const admin = status === 'admin'
  const api = useMemo(() => {
    const base = scoresBase(SERVER_API_BASE, window.location.protocol, import.meta.env.DEV)
    return base === null ? null : new GuestbookApi(base)
  }, [])

  const [comments, setComments] = useState<Entry[]>([])
  const [hasMore, setHasMore] = useState(false)
  const [state, setState] = useState<'loading' | 'ready' | 'error'>('loading')
  const [loadingMore, setLoadingMore] = useState(false)
  const [writing, setWriting] = useState(false)

  useEffect(() => {
    if (!api) {
      setState('error')
      return
    }
    let alive = true
    api.list().then(
      (page) => {
        if (!alive) return
        setComments(page.comments)
        setHasMore(page.hasMore)
        setState('ready')
      },
      () => alive && setState('error'),
    )
    return () => {
      alive = false
    }
  }, [api])

  async function loadMore() {
    if (!api || loadingMore || comments.length === 0) return
    setLoadingMore(true)
    try {
      const page = await api.list(comments[comments.length - 1].id)
      setComments((current) => [...current, ...page.comments.filter((c) => !current.some((o) => o.id === c.id))])
      setHasMore(page.hasMore)
    } catch {
      setHasMore(true) // the button stays, to try again
    } finally {
      setLoadingMore(false)
    }
  }

  const remove: Remove = useCallback(
    async (id, password) => {
      if (!api) throw new Error('The guestbook is not reachable')
      await api.remove(id, password === undefined ? { adminToken: pat } : { password })
    },
    [api, pat],
  )

  function setReplyCount(id: number, count: number) {
    setComments((current) => current.map((comment) => (comment.id === id ? { ...comment, replyCount: count } : comment)))
  }

  return (
    <main className="page-width py-12">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold">Guestbook</h1>
        {api && !writing && (
          <button
            type="button"
            onClick={() => setWriting(true)}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            작성
          </button>
        )}
      </div>
      <p className="mt-2 text-sm text-muted">
        누구나 남길 수 있는 방명록입니다. 비밀번호를 입력하면 쓴 글을 삭제할 수 있고, Markdown 문법이 적용됩니다.
      </p>

      {api && writing && (
        <div className="mt-6">
          <EntryForm
            submitLabel="등록"
            bodyLabel="댓글"
            send={(input) => api.write(input)}
            onCancel={() => setWriting(false)}
            onDone={(entry) => {
              setWriting(false)
              setComments((current) => [entry, ...current.filter((c) => c.id !== entry.id)])
            }}
          />
        </div>
      )}

      <div className="mt-8">
        {state === 'loading' && <p className="text-sm text-muted">불러오는 중...</p>}
        {state === 'error' && (
          <p className="text-sm text-muted">방명록을 불러오지 못했습니다. 서버가 준비되지 않았거나 잠시 응답하지 않는 중일 수 있습니다.</p>
        )}
        {state === 'ready' && comments.length === 0 && (
          <p className="text-sm text-muted">아직 글이 없습니다. 첫 번째 글을 남겨 보세요.</p>
        )}
        {state === 'ready' && api && (
          <ul className="space-y-3">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                entry={comment}
                api={api}
                admin={admin}
                remove={remove}
                onDeleted={(id) => setComments((current) => current.filter((c) => c.id !== id))}
                onReplyCountChange={setReplyCount}
              />
            ))}
          </ul>
        )}
        {state === 'ready' && hasMore && (
          <button
            type="button"
            disabled={loadingMore}
            onClick={() => void loadMore()}
            className="mt-4 rounded-md border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-accent disabled:opacity-50"
          >
            {loadingMore ? '불러오는 중...' : '이전 글 더 보기'}
          </button>
        )}
      </div>
    </main>
  )
}
