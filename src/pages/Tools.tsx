import { Link } from 'react-router-dom'
import { tools } from '../tools/registry'

export default function Tools() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Tools</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
            <article className="rounded-lg border border-border bg-surface p-4 shadow-sm transition-colors hover:border-accent">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="mt-2 text-foreground/80">{tool.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
