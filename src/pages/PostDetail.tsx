import { ArrowLeft, CalendarDays } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import HtmlFrame from '../components/HtmlFrame'
import MarkdownBody from '../components/MarkdownBody'
import { renderPostHtml } from '../lib/markdown'
import { posts } from '../lib/posts'

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="page-width py-16 text-center">
        <h1 className="text-2xl font-bold">글을 찾을 수 없습니다</h1>
        <p className="mt-2 text-muted-foreground">주소가 바뀌었거나 삭제된 글일 수 있어요.</p>
        <Button asChild className="mt-6 gap-2">
          <Link to="/blog">
            <ArrowLeft />
            목록으로
          </Link>
        </Button>
      </main>
    )
  }

  const isHtml = post.format === 'html'
  const html = isHtml ? '' : renderPostHtml(post.body, post.title)

  return (
    <main className="page-width py-10 sm:py-12">
      <div className={`mx-auto ${isHtml ? 'max-w-5xl' : 'max-w-3xl'}`}>
        <Button asChild variant="ghost" size="sm" className="-ml-3 gap-1.5 text-muted-foreground">
          <Link to="/blog">
            <ArrowLeft />
            목록으로
          </Link>
        </Button>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{post.title}</h1>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" aria-hidden="true" />
          {post.date}
          {isHtml && <Badge variant="secondary">HTML</Badge>}
        </p>
        <Separator className="my-8" />
        {/* No HTML sanitization: post bodies come only from files in this repo, writable only via a PAT with Contents: write access — same trust level as any other source file. */}
        {isHtml ? <HtmlFrame html={post.body} title={post.title} /> : <MarkdownBody html={html} />}
      </div>
    </main>
  )
}
