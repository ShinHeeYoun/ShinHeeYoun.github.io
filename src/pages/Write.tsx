import { useState } from 'react'
import { generateSlug, posts, type Post } from '../lib/posts'
import { parseFrontmatter, serializeFrontmatter } from '../lib/frontmatter'
import { createOrUpdateFile, deleteFile, getFile } from '../lib/github'
import { getStoredPat, setStoredPat } from '../lib/pat'

function getLocalDateString(): string {
  const d = new Date()
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function Write() {
  const [pat, setPat] = useState(getStoredPat())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const [isPublishing, setIsPublishing] = useState(false)
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [editingSha, setEditingSha] = useState<string | null>(null)
  const [editingDate, setEditingDate] = useState<string | null>(null)
  const [isLoadingPost, setIsLoadingPost] = useState<string | null>(null)

  function resetForm() {
    setTitle('')
    setBody('')
    setEditingSlug(null)
    setEditingSha(null)
    setEditingDate(null)
  }

  async function handlePublish() {
    setStatus(null)
    setIsPublishing(true)
    try {
      setStoredPat(pat)
      const date = editingDate ?? getLocalDateString()
      const slug = editingSlug ?? generateSlug(date)
      const fileContent = serializeFrontmatter({ title, date }, body)
      const message = editingSlug ? `post: update ${title}` : `post: ${title}`
      await createOrUpdateFile(
        `src/content/posts/${slug}.md`,
        fileContent,
        message,
        pat,
        editingSha ?? undefined,
      )
      setStatus('게시됨 — 배포까지 약 1분 정도 걸려요.')
      resetForm()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '게시 중 오류가 발생했습니다.')
    } finally {
      setIsPublishing(false)
    }
  }

  async function handleEdit(post: Post) {
    setStatus(null)
    setIsLoadingPost(post.slug)
    try {
      setStoredPat(pat)
      const path = `src/content/posts/${post.slug}.md`
      const { content, sha } = await getFile(path, pat)
      const { frontmatter, body: parsedBody } = parseFrontmatter(content)
      setTitle(frontmatter.title)
      setBody(parsedBody)
      setEditingDate(frontmatter.date)
      setEditingSlug(post.slug)
      setEditingSha(sha)
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '글을 불러오지 못했습니다.')
    } finally {
      setIsLoadingPost(null)
    }
  }

  async function handleDelete(post: Post) {
    if (!window.confirm(`"${post.title}" 글을 삭제할까요? 되돌릴 수 없습니다.`)) {
      return
    }
    setStatus(null)
    setIsLoadingPost(post.slug)
    try {
      setStoredPat(pat)
      const path = `src/content/posts/${post.slug}.md`
      const { sha } = await getFile(path, pat)
      await deleteFile(path, `post: delete ${post.title}`, sha, pat)
      setStatus('삭제됨 — 배포까지 약 1분 정도 걸려요.')
      if (editingSlug === post.slug) {
        resetForm()
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다.')
    } finally {
      setIsLoadingPost(null)
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
        <label className="block text-sm font-medium">
          제목 {editingSlug && <span className="text-xs text-gray-500">(수정 중: {editingSlug})</span>}
        </label>
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

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handlePublish}
          disabled={isPublishing || !pat || !title || !body}
          className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {isPublishing ? '게시 중...' : editingSlug ? '수정 게시' : '게시'}
        </button>
        {editingSlug && (
          <button
            type="button"
            onClick={resetForm}
            className="rounded-md border border-gray-300 px-4 py-2"
          >
            취소
          </button>
        )}
      </div>

      {status && <p className="mt-4 text-sm">{status}</p>}

      <h2 className="mt-12 text-xl font-semibold">내 글 목록</h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="flex items-center justify-between rounded-md border border-gray-200 p-3"
          >
            <span>
              {post.title} <span className="text-xs text-gray-500">({post.date})</span>
            </span>
            <span className="flex gap-3">
              <button
                type="button"
                onClick={() => handleEdit(post)}
                disabled={isLoadingPost !== null || !pat}
                className="text-sm text-blue-600 underline disabled:opacity-50"
              >
                {isLoadingPost === post.slug ? '불러오는 중...' : '수정'}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(post)}
                disabled={isLoadingPost !== null || !pat}
                className="text-sm text-red-600 underline disabled:opacity-50"
              >
                삭제
              </button>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
