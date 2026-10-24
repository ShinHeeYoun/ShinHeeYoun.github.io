import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'
import { useAdmin } from './AdminContext'

// Shows its page only to a signed-in admin; everyone else is sent home.
export default function RequireAdmin({ children }: { children: ReactNode }) {
  const { status } = useAdmin()
  if (status === 'checking') {
    return (
      <main className="page-width py-12" aria-busy="true">
        <p className="sr-only">관리자 확인 중...</p>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-6 h-40 w-full" />
      </main>
    )
  }
  if (status === 'locked') return <Navigate to="/" replace />
  return <>{children}</>
}
