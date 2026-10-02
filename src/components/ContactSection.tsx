const GITHUB_URL = 'https://github.com/ShinHeeYoun'

export default function ContactSection() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-3 font-mono text-sm">
        <span className="text-muted">$ open </span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline-offset-4 hover:underline"
        >
          github.com/ShinHeeYoun
        </a>
      </p>
    </section>
  )
}
