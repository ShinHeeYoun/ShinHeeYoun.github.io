import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { verifyPat, type PatCheck } from '../lib/admin'
import { clearStoredPat, getStoredPat, setStoredPat } from '../lib/pat'

// checking: a saved token is being verified | locked: not signed in | admin: signed in
type Status = 'checking' | 'locked' | 'admin'

type Admin = {
  status: Status
  pat: string
  login: (pat: string) => Promise<PatCheck>
  logout: () => void
}

const AdminContext = createContext<Admin | null>(null)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [saved] = useState(getStoredPat)
  const [status, setStatus] = useState<Status>(saved ? 'checking' : 'locked')
  const [pat, setPat] = useState('')

  // A token saved on an earlier visit is verified again, so Write is shown only while it still works.
  useEffect(() => {
    if (!saved) return
    let stale = false
    void verifyPat(saved).then((result) => {
      if (stale) return
      if (result === 'ok') {
        setPat(saved)
        setStatus('admin')
      } else {
        // Forget a token GitHub rejected; keep one that merely could not be checked (offline).
        if (result === 'invalid') clearStoredPat()
        setStatus('locked')
      }
    })
    return () => {
      stale = true
    }
  }, [saved])

  const login = useCallback(async (typed: string) => {
    const result = await verifyPat(typed)
    if (result === 'ok') {
      const token = typed.trim()
      setStoredPat(token)
      setPat(token)
      setStatus('admin')
    }
    return result
  }, [])

  const logout = useCallback(() => {
    clearStoredPat()
    setPat('')
    setStatus('locked')
  }, [])

  const value = useMemo(() => ({ status, pat, login, logout }), [status, pat, login, logout])
  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
}

export function useAdmin(): Admin {
  const admin = useContext(AdminContext)
  if (!admin) throw new Error('useAdmin must be used inside AdminProvider')
  return admin
}
