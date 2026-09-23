import { Link } from 'react-router-dom'
import type { Post } from '../lib/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="rounded-lg border border-border bg-surface p-4 shadow-sm transition-colors hover:border-accent">
        <h3 className="text-lg font-semibold">{post.title}</h3>
        <p className="mt-1 text-sm text-muted">{post.date}</p>
        <p className="mt-2 text-foreground/80">{post.excerpt}</p>
      </article>
    </Link>
  )
}
