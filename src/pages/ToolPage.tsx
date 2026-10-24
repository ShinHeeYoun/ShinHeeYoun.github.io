import { useParams, Link } from 'react-router-dom'
import type { ComponentType } from 'react'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import CalculatorView from '../tools/calculator/CalculatorView'
import DinoView from '../tools/dino/DinoView'
import LadderView from '../tools/ladder/LadderView'
import MapView from '../tools/map/MapView'
import RouletteView from '../tools/roulette/RouletteView'
import YachtView from '../tools/yacht/YachtView'
import { tools, type ToolId, type ToolMeta } from '../tools/registry'

const toolViews: Record<ToolId, ComponentType> = {
  calculator: CalculatorView,
  dino: DinoView,
  ladder: LadderView,
  roulette: RouletteView,
  map: MapView,
  yacht: YachtView,
}

export default function ToolPage() {
  const { id } = useParams<{ id: string }>()
  const View = id ? toolViews[id as ToolId] : undefined
  const meta = tools.find((tool) => tool.id === id)

  if (!View || !meta) {
    return (
      <main className="page-width py-16 text-center">
        <h1 className="text-2xl font-bold">도구를 찾을 수 없습니다</h1>
        <p className="mt-2 text-muted-foreground">주소가 바뀌었거나 없어진 도구일 수 있어요.</p>
        <Button asChild className="mt-6">
          <Link to="/tools">도구 목록으로</Link>
        </Button>
      </main>
    )
  }

  // Most tools sit in a narrow column; a tool that needs room asks for the full page width.
  const wide = (meta as ToolMeta).wide === true

  return (
    <main className={wide ? 'page-width py-10 sm:py-12' : 'mx-auto max-w-2xl px-4 py-10 sm:py-12'}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/tools">Tools</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{meta.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">{meta.name}</h1>
      <div className="mt-6">
        <View />
      </div>
    </main>
  )
}
