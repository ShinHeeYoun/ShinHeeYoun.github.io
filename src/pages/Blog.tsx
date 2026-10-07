import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Highlight from '../components/Highlight'
import { posts } from '../lib/posts'
import { searchPosts, type SearchResult } from '../lib/search'

const allPosts: SearchResult[] = posts.map((post) => ({ post, title: null, snippet: null }))

export default function Blog() {
  const [params, setParams] = useSearchParams()
  const [text, setText] = useState(params.get('q') ?? '')
  // The results trail the typing slightly, so a key press never waits for the list to be redrawn.
  const query = useDeferredValue(text).trim()
  const results = useMemo(() => searchPosts(posts, query), [query])
  const searching = query !== ''

  // The search lives in the address (#/blog?q=...), so Back from a post returns to the same results.
  useEffect(() => {
    if ((params.get('q') ?? '') !== text) setParams(text.trim() ? { q: text } : {}, { replace: true })
  }, [text, params, setParams])

  const shown = searching ? results : allPosts

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Blog</h1>

      <form role="search" className="mt-6 max-w-xl" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="blog-search" className="sr-only">
          글 검색
        </label>
        <input
          id="blog-search"
          type="search"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="제목과 본문에서 검색"
          autoComplete="off"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 font-mono text-sm outline-none focus:border-accent"
        />
      </form>

      {searching && (
        <p role="status" className="mt-4 text-sm text-muted">
          {results.length > 0 ? `검색 결과 ${results.length}건` : `'${query}' 검색 결과가 없습니다.`}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {shown.map(({ post, title, snippet }) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
            <article className="card">
              <h2 className="card-title">{title ? <Highlight text={title} /> : post.title}</h2>
              <p className="mt-1 text-sm text-muted">{post.date}</p>
              <p className="mt-2 break-words text-foreground/80">
                {snippet ? <Highlight text={snippet} /> : post.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
