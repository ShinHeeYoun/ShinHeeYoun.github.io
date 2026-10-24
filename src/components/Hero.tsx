import { ArrowRight, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const STACK = ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Java', 'Oracle']

// The top of the home page: who this is, and where to go first.
export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-secondary via-background to-background px-6 py-14 sm:px-12 sm:py-20">
      {/* a soft gold glow in the corner, from the palette */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-highlight/25 blur-3xl" />
      <div className="relative max-w-2xl">
        <Badge variant="secondary" className="mb-5">
          개발 연습 페이지
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          안녕하세요,
          <br />
          <span className="text-primary">ShinHeeYoun</span>입니다
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          github homepage with Claude. 글을 쓰고, 도구를 만들고, 서버와 데이터베이스까지 직접 연결해 보는 연습장입니다.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link to="/blog">
              블로그 읽기
              <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link to="/tools">
              <Wrench />
              도구 둘러보기
            </Link>
          </Button>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="사용한 기술">
          {STACK.map((name) => (
            <li key={name}>
              <Badge variant="outline">{name}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
