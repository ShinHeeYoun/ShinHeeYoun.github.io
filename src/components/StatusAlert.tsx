import { CircleAlert, CircleCheck } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

// What happened after a button was pressed: it worked, or it did not.
export type Status = { kind: 'success' | 'error'; text: string }

export default function StatusAlert({ status, className }: { status: Status | null; className?: string }) {
  if (!status) return null
  const error = status.kind === 'error'
  return (
    <Alert variant={error ? 'destructive' : 'default'} role={error ? 'alert' : 'status'} className={className}>
      {error ? <CircleAlert /> : <CircleCheck />}
      <AlertDescription>{status.text}</AlertDescription>
    </Alert>
  )
}
