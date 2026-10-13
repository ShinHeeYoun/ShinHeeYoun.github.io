import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PatCheck } from '../lib/admin'
import { useAdmin } from './AdminContext'

const FAILURE: Record<Exclude<PatCheck, 'ok'>, string> = {
  invalid: '올바른 토큰이 아닙니다.',
  'no-write': '이 저장소에 쓸 수 있는 권한이 없는 토큰입니다. Contents: Read and write 권한이 필요해요.',
  error: 'GitHub에 연결하지 못했습니다. 잠시 후 다시 시도해 주세요.',
}

// The ADMIN button in the top bar, and the small panel it opens: a token box when signed out, a sign-out when in.
export default function AdminButton() {
  const { status, login, logout } = useAdmin()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [token, setToken] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const box = useRef<HTMLDivElement>(null)
  const input = useRef<HTMLInputElement>(null)

  // Escape closes the panel, and so does a click anywhere outside it.
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

  useEffect(() => {
    if (open && status !== 'admin') input.current?.focus()
  }, [open, status])

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
    <div ref={box} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`rounded-md border px-2 py-1 text-xs tracking-wide hover:border-accent ${
          signedIn ? 'border-accent text-accent' : 'border-border text-muted hover:text-foreground'
        }`}
      >
        ADMIN
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="관리자"
          className="absolute right-0 top-full z-50 mt-2 w-72 max-w-[calc(100vw-3rem)] rounded-md border border-border bg-surface p-4 shadow-lg"
        >
          {signedIn ? (
            <div className="space-y-3">
              <p className="text-sm">관리자로 로그인되어 있습니다.</p>
              <button
                type="button"
                onClick={signOut}
                className="rounded-md border border-border px-3 py-1.5 text-sm hover:border-accent"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <label htmlFor="admin-pat" className="block text-sm font-medium">
                Personal Access Token
              </label>
              <input
                id="admin-pat"
                ref={input}
                type="password"
                value={token}
                onChange={(event) => setToken(event.target.value)}
                autoComplete="off"
                spellCheck={false}
                className="w-full rounded-md border border-border bg-background p-2 text-sm text-foreground outline-none focus:border-accent"
              />
              <button
                type="submit"
                disabled={busy || !token.trim()}
                className="rounded-md bg-accent px-3 py-1.5 text-sm text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
              >
                {busy ? '확인 중...' : '확인'}
              </button>
              {message && (
                <p role="alert" className="text-xs text-red-600 dark:text-red-400">
                  {message}
                </p>
              )}
            </form>
          )}
        </div>
      )}
    </div>
  )
}
