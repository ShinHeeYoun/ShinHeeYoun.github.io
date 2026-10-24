import { LogOut, ShieldCheck } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { PatCheck } from '../lib/admin'
import { useAdmin } from './AdminContext'

const FAILURE: Record<Exclude<PatCheck, 'ok'>, string> = {
  invalid: '올바른 토큰이 아닙니다.',
  'no-write': '이 저장소에 쓸 수 있는 권한이 없는 토큰입니다. Contents: Read and write 권한이 필요해요.',
  error: 'GitHub에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.',
}

// The ADMIN button in the top bar, and the dialog it opens: a token box when signed out, a sign-out when in.
export default function AdminButton() {
  const { status, login, logout } = useAdmin()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setMessage(null)
    const result = await login(token)
    setBusy(false)
    if (result === 'ok') {
      setToken('')
      setOpen(false)
      navigate('/write')
    } else {
      setMessage(FAILURE[result])
    }
  }

  function signOut() {
    logout()
    setOpen(false)
  }

  const signedIn = status === 'admin'

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setMessage(null)
      }}
    >
      <DialogTrigger asChild>
        <Button variant={signedIn ? 'secondary' : 'outline'} size="sm" className="gap-1.5">
          {signedIn && <ShieldCheck />}
          ADMIN
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>관리자</DialogTitle>
          <DialogDescription>
            {signedIn ? '관리자로 로그인되어 있습니다.' : '글을 쓰고 방명록을 관리하려면 GitHub 토큰으로 로그인하세요.'}
          </DialogDescription>
        </DialogHeader>
        {signedIn ? (
          <DialogFooter>
            <Button type="button" variant="outline" onClick={signOut} className="gap-1.5">
              <LogOut />
              로그아웃
            </Button>
          </DialogFooter>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-pat">Personal Access Token</Label>
              <Input
                id="admin-pat"
                type="password"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            {message && (
              <Alert variant="destructive" role="alert">
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}
            <DialogFooter>
              <Button type="submit" disabled={busy || !token.trim()}>
                {busy ? '확인 중...' : '확인'}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
