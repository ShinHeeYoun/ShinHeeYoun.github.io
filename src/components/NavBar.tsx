import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import AdminButton from './AdminButton'
import AdminMenu, { ADMIN_LINKS } from './AdminMenu'
import { useAdmin } from './AdminContext'
import ThemeToggle from './ThemeToggle'

export const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog', end: false },
  { to: '/tools', label: 'Tools', end: false },
  { to: '/ers', label: 'ERS', end: false },
  { to: '/guestbook', label: 'Guestbook', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function NavBar() {
  const { status } = useAdmin()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  // Going to another page closes the menu of the small screen.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="page-width flex h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <img src="/favicon.svg" alt="" className="h-8 w-8 rounded-lg" />
          <span className="text-lg">ShinHeeYoun</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주 메뉴">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  // the gold bar under the page that is open
                  isActive && 'after:absolute after:inset-x-3 after:-bottom-[17px] after:h-0.5 after:rounded-full after:bg-highlight',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          {status === 'admin' && <AdminMenu />}
        </nav>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <AdminButton />
          <ThemeToggle />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="메뉴 열기">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader className="text-left">
                <SheetTitle>메뉴</SheetTitle>
                <SheetDescription className="sr-only">사이트의 페이지로 이동합니다.</SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="모바일 메뉴">
                {LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) =>
                      cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                {status === 'admin' && (
                  <>
                    <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Admin</p>
                    {ADMIN_LINKS.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                          cn(
                            'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                            isActive ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
