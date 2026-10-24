import { Search } from 'lucide-react'
import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import BlogPreviewCard from '../components/BlogPreviewCard'
import Highlight from '../components/Highlight'
import PageHeader from '../components/PageHeader'
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
    <main className="page-width py-10 sm:py-12">
      <PageHeader title="Blog" description="마크다운과 HTML로 쓴 글입니다. 제목과 본문에서 찾을 수 있어요." />

      <form role="search" className="max-w-xl" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="blog-search" className="sr-only">
          글 검색
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            id="blog-search"
            type="search"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="제목과 본문에서 검색"
            autoComplete="off"
            className="h-11 pl-9"
          />
        </div>
      </form>

      {searching && (
        <p role="status" className="mt-4 text-sm text-muted-foreground">
          {results.length > 0 ? `검색 결과 ${results.length}건` : `'${query}' 검색 결과가 없습니다.`}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map(({ post, title, snippet }) => (
          <BlogPreviewCard
            key={post.slug}
            post={post}
            title={title ? <Highlight text={title} /> : undefined}
            snippet={snippet ? <Highlight text={snippet} /> : undefined}
          />
        ))}
      </div>
    </main>
  )
}
