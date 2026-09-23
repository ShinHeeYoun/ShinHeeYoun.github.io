import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { posts } from '../lib/posts'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-blue-600 underline">
          목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link to="/blog" className="text-sm text-blue-600 underline">
        ← 목록으로
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{post.title}</h1>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
      {/* No HTML sanitization: post bodies come only from files in this repo, writable only via a PAT with Contents: write access — same trust level as any other source file. */}
      <div
        className="mt-6"
        dangerouslySetInnerHTML={{ __html: marked.parse(post.body, { async: false }) as string }}
      />
    </main>
  )
}
