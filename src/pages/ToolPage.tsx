import { useParams, Link } from 'react-router-dom'
import type { ComponentType } from 'react'
import CalculatorView from '../tools/calculator/CalculatorView'
import { tools, type ToolId } from '../tools/registry'

const toolViews: Record<ToolId, ComponentType> = {
  calculator: CalculatorView,
}

export default function ToolPage() {
  const { id } = useParams<{ id: string }>()
  const View = id ? toolViews[id as ToolId] : undefined
  const meta = tools.find((tool) => tool.id === id)

  if (!View || !meta) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>도구를 찾을 수 없습니다.</p>
        <Link to="/tools" className="text-blue-600 underline">
          목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <Link to="/tools" className="text-sm text-blue-600 underline">
        ← 목록으로
      </Link>
      <h1 className="mt-4 text-2xl font-bold">{meta.name}</h1>
      <div className="mt-6">
        <View />
      </div>
    </main>
  )
}
