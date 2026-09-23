import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme, getSystemTheme, setStoredTheme, type Theme } from '../lib/theme'

export default function NavBar() {
  const [theme, setTheme] = useState<Theme>(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setStoredTheme(next)
  }

  return (
    <nav className="border-b border-border">
      <div className="mx-auto flex max-w-2xl items-center gap-6 px-4 py-4">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/blog" className="hover:text-accent">
          Blog
        </Link>
        <Link to="/write" className="hover:text-accent">
          Write
        </Link>
        <Link to="/tools" className="hover:text-accent">
          Tools
        </Link>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="테마 전환"
          className="ml-auto rounded-md border border-border px-2 py-1 text-sm hover:border-accent"
        >
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  )
}
