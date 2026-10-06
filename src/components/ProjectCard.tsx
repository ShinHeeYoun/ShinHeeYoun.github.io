import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <article className="card">
        <h3 className="card-title">{project.title}</h3>
        <p className="mt-2 text-foreground/80">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </article>
    </Link>
  )
}
