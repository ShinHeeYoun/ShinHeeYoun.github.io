import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  applyTheme,
  getStoredTheme,
  resolveInitialTheme,
  setStoredTheme,
  systemPrefersDark,
  type Theme,
} from '@/lib/theme'

// Switches between the light and the dark theme, and remembers the choice for the next visit.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => resolveInitialTheme(getStoredTheme(), systemPrefersDark()))

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    setStoredTheme(next)
  }

  return (
    <Button type="button" variant="ghost" size="icon" onClick={toggle} aria-label="테마 전환">
      {theme === 'dark' ? <Moon /> : <Sun />}
    </Button>
  )
}
