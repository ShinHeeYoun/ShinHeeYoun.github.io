import { ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export const ADMIN_LINKS = [
  { to: '/write', label: 'Write' },
  { to: '/edit', label: 'Edit' },
  { to: '/delete', label: 'Delete' },
]

// The "Admin" menu of the top bar (shown only to a signed-in admin): Write, Edit and Delete.
export default function AdminMenu() {
  const { pathname } = useLocation()
  const active = ADMIN_LINKS.some((item) => item.to === pathname)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn('h-auto gap-1 px-3 py-2 text-sm font-medium', active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}
        >
          Admin
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-36">
        {ADMIN_LINKS.map((item) => (
          <DropdownMenuItem key={item.to} asChild className={cn(pathname === item.to && 'bg-accent text-accent-foreground')}>
            <Link to={item.to}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
