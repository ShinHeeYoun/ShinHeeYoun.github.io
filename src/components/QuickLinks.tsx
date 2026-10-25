import { BookOpen, FileSpreadsheet, MessagesSquare, Wrench, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type Item = { to: string; title: string; text: string; icon: LucideIcon }

const ITEMS: Item[] = [
  { to: '/blog', title: 'Blog', text: '글과 영상을 검색하며 보고 읽습니다.', icon: BookOpen },
  { to: '/tools', title: 'Tools', text: '계산기, 게임, 룰렛, 세계 지도 같은 작은 도구 모음입니다.', icon: Wrench },
  { to: '/guestbook', title: 'Guestbook', text: '누구나 글과 답글을 남길 수 있는 방명록입니다.', icon: MessagesSquare },
  { to: '/ers', title: 'ERS', text: '따로 운영하는 보고서 서버(ERS) 화면을 이 사이트 안에서 봅니다.', icon: FileSpreadsheet },
]

// Four cards that lead to the main parts of the site.
export default function QuickLinks() {
  return (
    <section aria-label="바로가기">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ to, title, text, icon: Icon }) => (
          <Link key={to} to={to} className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
              <CardHeader>
                <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
