const REPO_URL = 'https://github.com/ShinHeeYoun/ShinHeeYoun.github.io'

export default function SourceSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Source</h2>
      <p className="mt-3 font-mono text-sm">
        <span className="text-muted">$ open </span>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          github.com/ShinHeeYoun/ShinHeeYoun.github.io
        </a>
      </p>
    </section>
  )
}
