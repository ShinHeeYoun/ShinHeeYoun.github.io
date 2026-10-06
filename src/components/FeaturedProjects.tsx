import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">주요 구성</h2>
        <Link to="/projects" className="font-mono text-sm text-accent hover:text-accent-hover">
          전체 보기 →
        </Link>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
