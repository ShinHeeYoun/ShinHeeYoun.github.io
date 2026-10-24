import { ChevronDown, CornerDownRight, MessageSquarePlus, Reply as ReplyIcon, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useMemo, useState, type FormEvent } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import { useAdmin } from '../components/AdminContext'
import PageHeader from '../components/PageHeader'
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

// The delete button of one entry. The writer types the password; the admin, who is signed in, does not need one.
function DeleteControl({ id, admin, remove }: { id: number; admin: boolean; remove: Remove }) {
  const [open, setOpen] = useState(false)
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

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) {
          setPassword('')
          setError(null)
        }
      }}
    >
      <PopoverTrigger asChild>
        <Button type="button" variant="ghost" size="sm" className="gap-1.5 text-muted-foreground hover:text-destructive">
          <Trash2 />
          {admin ? '삭제 (관리자)' : '삭제'}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-72">
        {admin ? (
          <div className="space-y-3">
            <p className="text-sm">관리자 권한으로 이 글을 삭제할까요? 달린 답글도 함께 삭제됩니다.</p>
            <Button type="button" variant="destructive" size="sm" disabled={busy} onClick={() => void run()}>
              {busy ? '삭제 중...' : '삭제'}
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <p className="text-sm">글을 쓸 때 정한 비밀번호를 입력하세요.</p>
            <Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="비밀번호"
              aria-label="삭제할 글의 비밀번호"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button type="submit" variant="destructive" size="sm" disabled={busy || password === ''}>
              {busy ? '삭제 중...' : '삭제 확인'}
            </Button>
          </form>
        )}
        {error && (
          <p role="alert" className="mt-3 text-xs text-destructive">
            {error}
          </p>
        )}
      </PopoverContent>
    </Popover>
  )
}

// The round picture of a writer: the first letter of the name.
function Initial({ name }: { name: string }) {
  return (
    <Avatar className="h-9 w-9">
      <AvatarFallback className="bg-primary/10 text-sm font-semibold text-primary">{[...name][0]?.toUpperCase() ?? '?'}</AvatarFallback>
    </Avatar>
  )
}

function Header({ entry }: { entry: Entry }) {
  return (
    <div className="flex items-center gap-3">
      <Initial name={entry.author} />
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold leading-tight">{entry.author}</p>
        <time dateTime={entry.createdAt} className="text-xs text-muted-foreground">
          {formatDate(entry.createdAt)}
        </time>
      </div>
    </div>
  )
}

type ItemProps = { api: GuestbookApi; admin: boolean; remove: Remove }

function Reply({ entry, admin, remove }: { entry: Entry; admin: boolean; remove: Remove }) {
  return (
    <li className="rounded-lg bg-muted/60 p-3">
      <Header entry={entry} />
      <div className="mt-2 pl-12">
        <GuestbookMarkdown source={entry.body} />
        <div className="-ml-3 mt-1">
          <DeleteControl id={entry.id} admin={admin} remove={remove} />
        </div>
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
    <li>
      <Card>
        <CardContent className="p-5">
          <Header entry={entry} />
          <div className="mt-3 pl-12">
            <GuestbookMarkdown source={entry.body} />
            <div className="-ml-3 mt-2 flex flex-wrap items-center gap-1">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="gap-1.5 text-muted-foreground"
                onClick={() => setReplying((open) => !open)}
                aria-expanded={replying}
              >
                <ReplyIcon />
                답글
              </Button>
              <DeleteControl id={entry.id} admin={admin} remove={removeSelf} />
              {entry.replyCount > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-primary"
                  disabled={loading}
                  onClick={() => (replies === null ? void loadReplies() : setReplies(null))}
                  aria-expanded={replies !== null}
                >
                  <ChevronDown className={replies !== null ? 'rotate-180' : ''} />
                  {replies === null ? `답글 ${entry.replyCount}개 더보기` : '답글 접기'}
                </Button>
              )}
            </div>
          </div>

          {failed && (
            <p role="alert" className="mt-3 pl-12 text-xs text-destructive">
              답글을 불러오지 못했습니다.
            </p>
          )}
          {loading && (
            <div className="mt-3 space-y-2 pl-12" aria-busy="true">
              <Skeleton className="h-14 w-full" />
            </div>
          )}

          {replies !== null && replies.length > 0 && (
            <ul className="mt-3 space-y-2 pl-4 sm:pl-12">
              {replies.map((reply) => (
                <Reply key={reply.id} entry={reply} admin={admin} remove={removeReply} />
              ))}
            </ul>
          )}

          {replying && (
            <div className="mt-4 rounded-lg border bg-muted/40 p-4 sm:ml-12">
              <p className="mb-3 flex items-center gap-1.5 text-sm font-medium">
                <CornerDownRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                {entry.author}님에게 답글
              </p>
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
        </CardContent>
      </Card>
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
    <main className="page-width max-w-4xl py-10 sm:py-12">
      <PageHeader title="Guestbook" description="누구나 남길 수 있는 방명록입니다. 비밀번호를 입력하면 쓴 글을 삭제할 수 있고, Markdown 문법이 적용됩니다.">
        {api && (
          <Button type="button" className="gap-2" onClick={() => setWriting(true)}>
            <MessageSquarePlus />
            글 남기기
          </Button>
        )}
      </PageHeader>

      {api && (
        <Dialog open={writing} onOpenChange={setWriting}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>글 남기기</DialogTitle>
              <DialogDescription>아이디, 비밀번호, 내용을 적어 주세요.</DialogDescription>
            </DialogHeader>
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
          </DialogContent>
        </Dialog>
      )}

      <div>
        {state === 'loading' && (
          <div className="space-y-3" aria-busy="true">
            <p className="sr-only">불러오는 중...</p>
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
          </div>
        )}
        {state === 'error' && (
          <Alert>
            <AlertDescription>방명록을 불러오지 못했습니다. 서버가 준비되지 않았거나 잠시 응답하지 않는 중일 수 있습니다.</AlertDescription>
          </Alert>
        )}
        {state === 'ready' && comments.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">아직 글이 없습니다. 첫 번째 글을 남겨 보세요.</CardContent>
          </Card>
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
          <div className="mt-6 text-center">
            <Button type="button" variant="outline" disabled={loadingMore} onClick={() => void loadMore()}>
              {loadingMore ? '불러오는 중...' : '이전 글 더 보기'}
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
