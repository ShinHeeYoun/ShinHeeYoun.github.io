import { useState } from 'react'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import PostEditor from '../components/PostEditor'
import { createOrUpdateFile, getFile } from '../lib/github'
import { parseFrontmatter, serializeFrontmatter } from '../lib/frontmatter'
import { posts, type Post } from '../lib/posts'

type Editing = { slug: string; sha: string; date: string; title: string; body: string }

export default function Edit() {
  const { pat } = useAdmin()
  const [editing, setEditing] = useState<Editing | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  // The list comes from the files built into the site, but the text to edit is fetched from the repository, so it
  // is always the latest committed version.
  async function open(post: Post) {
    setStatus(null)
    setLoading(post.slug)
    try {
      const { content, sha } = await getFile(`src/content/posts/${post.slug}.md`, pat)
      const { frontmatter, body } = parseFrontmatter(content)
      setEditing({ slug: post.slug, sha, date: frontmatter.date, title: frontmatter.title, body })
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '글을 불러오지 못했습니다.')
    } finally {
      setLoading(null)
    }
  }

  async function save() {
    if (!editing) return
    setStatus(null)
    setIsSaving(true)
    try {
      await createOrUpdateFile(
        `src/content/posts/${editing.slug}.md`,
        serializeFrontmatter({ title: editing.title, date: editing.date }, editing.body),
        `post: update ${editing.title}`,
        pat,
        editing.sha,
      )
      setStatus('수정됨 — 배포까지 약 1분 정도 걸려요.')
      setEditing(null)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '수정 중 오류가 발생했습니다.')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Edit</h1>
      <AdminNotice />

      {editing ? (
        <PostEditor
          title={editing.title}
          body={editing.body}
          date={editing.date}
          note={`(수정 중: ${editing.slug})`}
          onTitleChange={(title) => setEditing({ ...editing, title })}
          onBodyChange={(body) => setEditing({ ...editing, body })}
        >
          <button
            type="button"
            onClick={save}
            disabled={isSaving || !editing.title || !editing.body}
            className="rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
          >
            {isSaving ? '저장 중...' : 'Update'}
          </button>
          <button
            type="button"
            onClick={() => setEditing(null)}
            className="rounded-md border border-border px-4 py-2 hover:bg-surface"
          >
            취소
          </button>
        </PostEditor>
      ) : (
        <ul className="mt-6 space-y-2">
          {posts.map((post) => (
            <li key={post.slug} className="flex items-center justify-between gap-3 rounded-md border border-border p-3">
              <span className="min-w-0 break-words">
                {post.title} <span className="text-xs text-muted">({post.date})</span>
              </span>
              <button
                type="button"
                onClick={() => open(post)}
                disabled={loading !== null}
                className="shrink-0 text-sm text-accent underline disabled:opacity-50"
              >
                {loading === post.slug ? '불러오는 중...' : 'Edit'}
              </button>
            </li>
          ))}
        </ul>
      )}

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  )
}
