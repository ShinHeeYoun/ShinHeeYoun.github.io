import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from './AdminContext'

// Shows its page only to a signed-in admin; everyone else is sent home.
export default function RequireAdmin({ children }: { children: ReactNode }) {
  const { status } = useAdmin()
  if (status === 'checking') {
    return (
      <main className="w-full px-6 py-12 md:px-12">
        <p className="font-mono text-sm text-muted">관리자 확인 중...</p>
      </main>
    )
  }
  if (status === 'locked') return <Navigate to="/" replace />
  return <>{children}</>
}
