import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const ITEMS = [
  { to: '/write', label: 'Write' },
  { to: '/edit', label: 'Edit' },
  { to: '/delete', label: 'Delete' },
]

// The "Admin" tab of the top bar (shown only to a signed-in admin): a drop-down with Write, Edit and Delete.
export default function AdminMenu() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const active = ITEMS.some((item) => item.to === pathname)

  // Choosing an item (or any other navigation) closes the menu.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Escape closes it, and so does a click anywhere outside it.
  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onClick = (event: MouseEvent) => {
      if (box.current && !box.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={active ? 'text-accent' : 'text-muted transition-colors hover:text-foreground'}
      >
        <span className={active ? '' : 'invisible'} aria-hidden="true">
          &gt;
        </span>{' '}
        Admin <span aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul
          role="menu"
          aria-label="Admin"
          className="absolute left-0 top-full z-50 mt-2 min-w-36 rounded-md border border-border bg-surface py-1 shadow-lg"
        >
          {ITEMS.map((item) => (
            <li key={item.to} role="none">
              <Link
                to={item.to}
                role="menuitem"
                className={`block px-4 py-2 hover:bg-background ${
                  pathname === item.to ? 'text-accent' : 'text-foreground'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
