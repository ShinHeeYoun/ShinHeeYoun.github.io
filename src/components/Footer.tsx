import { Link } from 'react-router-dom'
import { Separator } from '@/components/ui/separator'

// lucide-react has no brand icons, so the GitHub mark is drawn here.
function GithubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

const REPO = 'https://github.com/ShinHeeYoun/ShinHeeYoun.github.io'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-muted/40">
      <div className="page-width flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} ShinHeeYoun</p>
        <nav className="flex items-center gap-4" aria-label="바닥글">
          <Link to="/about" className="hover:text-foreground">
            About
          </Link>
          <Separator orientation="vertical" className="h-4" />
          <a href={REPO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
            <GithubMark className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  )
}
