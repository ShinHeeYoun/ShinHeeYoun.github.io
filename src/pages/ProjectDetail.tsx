import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <main className="w-full px-6 py-12 md:px-12">
        <p>프로젝트를 찾을 수 없습니다.</p>
        <Link to="/projects" className="text-accent underline-offset-4 hover:underline">
          목록으로
        </Link>
      </main>
    )
  }

  return (
    <main className="w-full px-6 py-12 md:px-12">
      <div className="max-w-2xl">
        <Link to="/projects" className="text-sm text-accent underline-offset-4 hover:underline">
          ← 목록으로
        </Link>
        <h1 className="mt-4 text-2xl font-bold">{project.title}</h1>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed text-foreground/90">{project.overview}</p>

        <h2 className="mt-8 text-lg font-semibold">핵심 포인트</h2>
        <ul className="mt-3 list-inside list-disc space-y-2 leading-relaxed text-foreground/90">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}
