import { useState } from 'react'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import { deleteFile, getFile } from '../lib/github'
import { posts, type Post } from '../lib/posts'

export default function Delete() {
  const { pat } = useAdmin()
  const [status, setStatus] = useState<string | null>(null)
  const [working, setWorking] = useState<string | null>(null)
  // The list is built into the site, so a post deleted now stays in it until the next deploy. Hide it meanwhile.
  const [removed, setRemoved] = useState<string[]>([])

  async function remove(post: Post) {
    if (!window.confirm(`"${post.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)) return
    setStatus(null)
    setWorking(post.slug)
    try {
      const { sha } = await getFile(post.path, pat)
      await deleteFile(post.path, `post: delete ${post.title}`, sha, pat)
      setRemoved((slugs) => [...slugs, post.slug])
      setStatus('삭제됨 — 배포까지 약 1분 정도 걸려요.')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다.')
    } finally {
      setWorking(null)
    }
  }

  const remaining = posts.filter((post) => !removed.includes(post.slug))

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Delete</h1>
      <AdminNotice />

      <ul className="mt-6 space-y-2">
        {remaining.map((post) => (
          <li key={post.slug} className="flex items-center justify-between gap-3 rounded-md border border-border p-3">
            <span className="min-w-0 break-words">
              {post.title} <span className="text-xs text-muted">({post.date})</span>
              {post.format === 'html' && <span className="tag ml-2">HTML</span>}
            </span>
            <button
              type="button"
              onClick={() => remove(post)}
              disabled={working !== null}
              className="shrink-0 text-sm text-red-600 underline disabled:opacity-50 dark:text-red-400"
            >
              {working === post.slug ? '삭제 중...' : 'Delete'}
            </button>
          </li>
        ))}
      </ul>
      {remaining.length === 0 && <p className="mt-6 text-sm text-muted">남은 글이 없습니다.</p>}

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  )
}
