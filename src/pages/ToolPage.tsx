import { useParams } from 'react-router-dom'
import type { ComponentType } from 'react'
import CalculatorView from '../tools/calculator/CalculatorView'

const toolViews: Record<string, ComponentType> = {
  calculator: CalculatorView,
}

export default function ToolPage() {
  const { id } = useParams<{ id: string }>()
  const View = id ? toolViews[id] : undefined

  if (!View) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-12">
        <p>도구를 찾을 수 없습니다.</p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <View />
    </main>
  )
}
