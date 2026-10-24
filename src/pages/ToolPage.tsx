import { useParams, Link } from 'react-router-dom'
import type { ComponentType } from 'react'
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
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>도구를 찾을 수 없습니다.</p>
        <Link to="/tools" className="text-accent underline">
          목록으로
        </Link>
      </main>
    )
  }

  // Most tools sit in a narrow column; a tool that needs room asks for the full page width.
  const wide = (meta as ToolMeta).wide === true

  return (
    <main className={wide ? 'page-width py-12' : 'mx-auto max-w-2xl px-4 py-12'}>
      <Link to="/tools" className="text-sm text-accent underline">
        ← 목록으로
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{meta.name}</h1>
      <div className="mt-6">
        <View />
      </div>
    </main>
  )
}
