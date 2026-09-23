import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function Blog() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <article className="rounded-lg border border-border bg-surface p-4 shadow-sm transition-colors hover:border-accent">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm text-muted">{post.date}</p>
              <p className="mt-2 text-foreground/80">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
