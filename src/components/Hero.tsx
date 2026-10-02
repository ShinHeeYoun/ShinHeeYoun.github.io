import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="py-10 font-mono">
      <p className="text-sm text-muted">$ whoami</p>
      <h1 className="mt-2 text-4xl font-bold md:text-5xl">
        ShinHeeYoun
        <span className="cursor-blink text-accent" aria-hidden="true">
          _
        </span>
      </h1>
      <p className="mt-3 text-lg text-foreground/90">백엔드 / 인프라 엔지니어</p>
      <p className="mt-2 max-w-xl font-sans text-muted">장애의 원인을 로그에서 끝까지 추적합니다.</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <Link
          to="/projects"
          className="rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent hover:text-background"
        >
          view projects
        </Link>
        <Link
          to="/blog"
          className="rounded border border-border px-4 py-2 text-muted transition-colors hover:border-accent hover:text-accent"
        >
          read blog
        </Link>
      </div>
    </section>
  )
}
