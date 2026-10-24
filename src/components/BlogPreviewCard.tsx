import { CalendarDays } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '../lib/posts'

type Props = {
  post: Post
  title?: ReactNode // the title with search matches marked, instead of the plain one
  snippet?: ReactNode // the part of the text that matched the search, instead of the first lines
}

// One post in a list: its title, date and the first lines. The whole card is the link.
export default function BlogPreviewCard({ post, title, snippet }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
        <CardHeader className="pb-3">
          <CardTitle className="line-clamp-2 text-lg leading-snug">{title ?? post.title}</CardTitle>
          <CardDescription className="flex items-center gap-2">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            {post.date}
            {post.format === 'html' && <Badge variant="secondary">HTML</Badge>}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 break-words text-sm text-muted-foreground">{snippet ?? post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
