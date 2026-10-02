import { Link } from 'react-router-dom'
import type { Post } from '../lib/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="card">
        <h3 className="card-title">{post.title}</h3>
        <p className="mt-1 text-sm text-muted">{post.date}</p>
        <p className="mt-2 text-foreground/80">{post.excerpt}</p>
      </article>
    </Link>
  )
}
