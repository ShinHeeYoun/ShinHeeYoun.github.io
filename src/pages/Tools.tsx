import { Link } from 'react-router-dom'
import { tools } from '../tools/registry'

export default function Tools() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Tools</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
            <article className="rounded-lg border border-gray-200 p-4 shadow-sm hover:border-gray-400">
              <h2 className="text-lg font-semibold">{tool.name}</h2>
              <p className="mt-2 text-gray-700">{tool.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
