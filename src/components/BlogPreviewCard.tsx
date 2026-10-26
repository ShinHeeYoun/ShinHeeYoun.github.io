import { CalendarDays, Play } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '../lib/posts'
import { thumbnailUrl } from '../lib/youtube'

type Props = {
  post: Post
  title?: ReactNode // the title with search matches marked, instead of the plain one
  snippet?: ReactNode // the part of the text that matched the search, instead of the first lines
}

const LINK = 'group block h-60 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
const CARD = 'h-full overflow-hidden transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md'

// One post in a list; the whole card is the link, and every card is the same size.
// A text post shows its title and date, and under them as much of the text as fits the box: the text is cut where the
// box ends, at a whole line, with nothing added. A video post shows only its thumbnail (the search marks, when there
// is a search, sit in a strip at the bottom, so that a match can still be seen).
export default function BlogPreviewCard({ post, title, snippet }: Props) {
  if (post.video) {
    const searching = title !== undefined || snippet !== undefined
    return (
      <Link to={`/blog/${post.slug}`} className={LINK}>
        <Card className={`${CARD} relative bg-muted`}>
          <img src={thumbnailUrl(post.video)} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 flex items-center justify-center bg-black/10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white">
              <Play className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
          </span>
          {searching && (
            <p className="absolute inset-x-0 bottom-0 line-clamp-2 bg-black/70 px-4 py-2 text-sm text-white">{title ?? snippet}</p>
          )}
        </Card>
      </Link>
    )
  }

  return (
    <Link to={`/blog/${post.slug}`} className={LINK}>
      <Card className={`${CARD} flex flex-col`}>
        <CardHeader className="shrink-0 pb-3">
          <CardTitle className="line-clamp-2 text-lg leading-snug">{title ?? post.title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
            {post.format === 'html' && <Badge variant="secondary">HTML</Badge>}
          </CardDescription>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-hidden pb-4">
          {/* The height is the box's, rounded down to whole lines (text-sm: 1.25rem), so no line is cut in half. */}
          <p className="h-full overflow-hidden break-words text-sm text-muted-foreground" style={{ height: 'round(down, 100%, 1.25rem)' }}>
            {snippet ?? post.excerpt}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}
