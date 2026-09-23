import type { Post } from '../lib/posts'

type Props = {
  post: Post
}

export default function BlogPreviewCard({ post }: Props) {
  return (
    <article className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{post.date}</p>
      <p className="mt-2 text-gray-700">{post.excerpt}</p>
    </article>
  )
}
