import { Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import PageHeader from '../components/PageHeader'
import StatusAlert, { type Status } from '../components/StatusAlert'
import { deleteFile, getFile } from '../lib/github'
import { posts, type Post } from '../lib/posts'

export default function Delete() {
  const { pat } = useAdmin()
  const [status, setStatus] = useState<Status | null>(null)
  const [working, setWorking] = useState<string | null>(null)
  const [confirming, setConfirming] = useState<Post | null>(null)
  // The list is built into the site, so a post deleted now stays in it until the next deploy. Hide it meanwhile.
  const [removed, setRemoved] = useState<string[]>([])

  async function remove(post: Post) {
    setConfirming(null)
    setStatus(null)
    setWorking(post.slug)
    try {
      const { sha } = await getFile(post.path, pat)
      await deleteFile(post.path, `post: delete ${post.title}`, sha, pat)
      setRemoved((slugs) => [...slugs, post.slug])
      setStatus({ kind: 'success', text: '삭제됨 — 배포까지 약 1분 정도 걸려요.' })
    } catch (error) {
      setStatus({ kind: 'error', text: error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다.' })
    } finally {
      setWorking(null)
    }
  }

  const remaining = posts.filter((post) => !removed.includes(post.slug))

  return (
    <main className="page-width py-10 sm:py-12">
      <PageHeader title="Delete" description="글을 삭제하면 저장소에서 파일이 지워집니다. 되돌릴 수 없어요." />
      <AdminNotice />

      <ul className="mt-6 space-y-2">
        {remaining.map((post) => (
          <li key={post.slug}>
            <Card className="flex items-center justify-between gap-3 p-4">
              <span className="min-w-0 break-words">
                {post.title} <span className="text-sm text-muted-foreground">({post.date})</span>
                {post.format === 'html' && (
                  <Badge variant="secondary" className="ml-2">
                    HTML
                  </Badge>
                )}
                {post.video && (
                  <Badge variant="secondary" className="ml-2">
                    영상
                  </Badge>
                )}
              </span>
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="gap-1.5"
                onClick={() => setConfirming(post)}
                disabled={working !== null}
              >
                <Trash2 />
                {working === post.slug ? '삭제 중...' : 'Delete'}
              </Button>
            </Card>
          </li>
        ))}
      </ul>
      {remaining.length === 0 && <p className="mt-6 text-sm text-muted-foreground">남은 글이 없습니다.</p>}

      <StatusAlert status={status} className="mt-6" />

      <Dialog open={confirming !== null} onOpenChange={(open) => !open && setConfirming(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>글을 삭제할까요?</DialogTitle>
            <DialogDescription>
              &quot;{confirming?.title}&quot; 글이 저장소에서 지워집니다. 되돌릴 수 없습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setConfirming(null)}>
              취소
            </Button>
            <Button type="button" variant="destructive" onClick={() => confirming && void remove(confirming)}>
              삭제
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}
