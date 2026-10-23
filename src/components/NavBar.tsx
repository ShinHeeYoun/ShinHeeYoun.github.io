import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { applyTheme, getStoredTheme, resolveInitialTheme, setStoredTheme, type Theme } from '../lib/theme'
import AdminButton from './AdminButton'
import AdminMenu from './AdminMenu'
import { useAdmin } from './AdminContext'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/tools', label: 'Tools', end: false },
  { to: '/ers', label: 'ERS', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function NavBar() {
  const { status } = useAdmin()
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme(getStoredTheme()))

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setStoredTheme(next)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background font-mono text-sm">
      <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 md:px-12">
        <Link to="/" className="mr-2 font-bold text-accent">
          ~/shinheeyoun
        </Link>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'text-muted transition-colors hover:text-foreground'
            }
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? '' : 'invisible'} aria-hidden="true">&gt;</span> {link.label}
              </>
            )}
          </NavLink>
        ))}
        {status === 'admin' && <AdminMenu />}
        <div className="ml-auto flex items-center gap-2">
          <AdminButton />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="테마 전환"
            className="rounded-md border border-border px-2 py-1 text-sm hover:border-accent"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  )
}
