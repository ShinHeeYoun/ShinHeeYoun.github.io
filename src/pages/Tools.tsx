import { ArrowRight, Calculator, Database, Dices, Gamepad2, Globe2, Shuffle, Target, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import PageHeader from '../components/PageHeader'
import { tools, type ToolIcon } from '../tools/registry'

export const TOOL_ICONS: Record<ToolIcon, LucideIcon> = {
  calculator: Calculator,
  gamepad: Gamepad2,
  shuffle: Shuffle,
  dice: Dices,
  roulette: Target,
  map: Globe2,
  database: Database,
}

export default function Tools() {
  return (
    <main className="page-width py-10 sm:py-12">
      <PageHeader title="Tools" description="직접 만든 작은 도구와 게임 모음입니다. 모두 브라우저 안에서 동작합니다." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = TOOL_ICONS[tool.icon]
          return (
            <Link
              key={tool.id}
              to={`/tools/${tool.id}`}
              className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card className="h-full transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-md">
                <CardHeader>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <ArrowRight
                      className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-lg">{tool.name}</CardTitle>
                  <CardDescription className="line-clamp-3">{tool.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>
    </main>
  )
}
