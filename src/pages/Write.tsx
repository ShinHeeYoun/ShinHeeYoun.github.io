import { useState } from 'react'
import AdminNotice from '../components/AdminNotice'
import { useAdmin } from '../components/AdminContext'
import PostEditor from '../components/PostEditor'
import { createOrUpdateFile } from '../lib/github'
import { serializeFrontmatter } from '../lib/frontmatter'
import { generateSlug, getLocalDateString } from '../lib/posts'

export default function Write() {
  const { pat } = useAdmin()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)

  async function handlePublish() {
    setStatus(null)
    setIsPublishing(true)
    try {
      const date = getLocalDateString()
      const slug = generateSlug(date)
      await createOrUpdateFile(
        `src/content/posts/${slug}.md`,
        serializeFrontmatter({ title, date }, body),
        `post: ${title}`,
        pat,
      )
      setStatus('게시됨 — 배포까지 약 1분 정도 걸려요.')
      setTitle('')
      setBody('')
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '게시 중 오류가 발생했습니다.')
    } finally {
      setIsPublishing(false)
    }
  }

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Write</h1>
      <AdminNotice />

      <PostEditor
        title={title}
        body={body}
        date={getLocalDateString()}
        onTitleChange={setTitle}
        onBodyChange={setBody}
      >
        <button
          type="button"
          onClick={handlePublish}
          disabled={isPublishing || !title || !body}
          className="rounded-md bg-accent px-4 py-2 text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {isPublishing ? '게시 중...' : '게시'}
        </button>
      </PostEditor>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  )
}
