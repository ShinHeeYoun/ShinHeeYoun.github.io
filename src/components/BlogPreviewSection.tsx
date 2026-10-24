import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { posts } from '../lib/posts'
import BlogPreviewCard from './BlogPreviewCard'

export default function BlogPreviewSection() {
  return (
    <section aria-labelledby="latest-posts">
      <div className="flex items-end justify-between gap-4">
        <h2 id="latest-posts" className="text-2xl font-bold tracking-tight">
          최신 글
        </h2>
        <Button asChild variant="ghost" size="sm" className="gap-1">
          <Link to="/blog">
            전체 보기
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <BlogPreviewCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
