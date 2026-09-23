import { Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function Blog() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Blog</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <article className="rounded-lg border border-gray-200 p-4 shadow-sm hover:border-gray-400">
              <h2 className="text-lg font-semibold">{post.title}</h2>
              <p className="mt-1 text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
