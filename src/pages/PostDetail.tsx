import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { posts } from '../lib/posts'
import { stripLeadingTitle } from '../lib/markdown'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="w-full px-6 py-12 md:px-12">
        <p>글을 찾을 수 없습니다.</p>
        <Link to="/blog" className="text-accent underline">
          목록으로
        </Link>
      </main>
    )
  }

  const html = marked.parse(stripLeadingTitle(post.body, post.title), { async: false }) as string

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <div className="max-w-3xl">
        <Link to="/blog" className="text-sm text-accent underline">
          ← 목록으로
        </Link>
        <h1 className="mt-4 text-2xl font-bold">{post.title}</h1>
        <p className="mt-1 text-sm text-muted">{post.date}</p>
        {/* No HTML sanitization: post bodies come only from files in this repo, writable only via a PAT with Contents: write access — same trust level as any other source file. */}
        <div className="markdown-body mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  )
}
