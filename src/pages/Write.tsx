import { useState } from 'react'
import { generateSlug } from '../lib/posts'
import { serializeFrontmatter } from '../lib/frontmatter'
import { createOrUpdateFile } from '../lib/github'
import { getStoredPat, setStoredPat } from '../lib/pat'

export default function Write() {
  const [pat, setPat] = useState(getStoredPat())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)

  async function handlePublish() {
    setStatus(null)
    setIsPublishing(true)
    try {
      setStoredPat(pat)
      const date = new Date().toISOString().slice(0, 10)
      const slug = generateSlug(date)
      const fileContent = serializeFrontmatter({ title, date }, body)
      await createOrUpdateFile(`src/content/posts/${slug}.md`, fileContent, `post: ${title}`, pat)
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
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Write</h1>

      <p className="mt-4 rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
        이 저장소(ShinHeeYoun/ShinHeeYoun.github.io) 전용, Contents: Read and write 권한만 있는
        fine-grained PAT를 사용하세요. 이 토큰은 브라우저 localStorage에 저장되며, 이 브라우저에서
        스크립트를 실행할 수 있는 누구나 읽을 수 있습니다.
      </p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Personal Access Token</label>
        <input
          type="password"
          value={pat}
          onChange={(e) => setPat(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">제목</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium">본문 (Markdown)</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={12}
          className="mt-1 w-full rounded-md border border-gray-300 p-2 font-mono text-sm"
        />
      </div>

      <button
        type="button"
        onClick={handlePublish}
        disabled={isPublishing || !pat || !title || !body}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
      >
        {isPublishing ? '게시 중...' : '게시'}
      </button>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </main>
  )
}
