import { posts } from '../lib/posts'
import BlogPreviewCard from './BlogPreviewCard'

export default function BlogPreviewSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold">최신 글</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogPreviewCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
