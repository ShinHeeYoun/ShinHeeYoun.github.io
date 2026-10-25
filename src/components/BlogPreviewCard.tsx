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

// One post in a list: its title, date and the first lines. The whole card is the link.
export default function BlogPreviewCard({ post, title, snippet }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Card className="h-full overflow-hidden transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
        {post.video && (
          <div className="relative aspect-video bg-muted">
            <img src={thumbnailUrl(post.video)} alt="" loading="lazy" className="h-full w-full object-cover" />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white">
                <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
            </span>
          </div>
        )}
        <CardHeader className="pb-3">
          <CardTitle className="line-clamp-2 text-lg leading-snug">{title ?? post.title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
            {post.format === 'html' && <Badge variant="secondary">HTML</Badge>}
            {post.video && <Badge variant="secondary">영상</Badge>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 break-words text-sm text-muted-foreground">{snippet ?? post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
