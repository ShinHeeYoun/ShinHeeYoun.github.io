// What a guestbook entry may be. The server (GuestbookService.java) checks the same rules, so this is only to tell the
// writer at once what is wrong; it is never what keeps bad text out.

import { MAX_NICKNAME, normalizeNickname } from '../tools/yacht/nickname'

export const MAX_TEXT = 300 // characters in a comment or a reply
export const MIN_PASSWORD = 4
export const MAX_PASSWORD = 32

export type EntryInput = { author: string; password: string; body: string }

export type Checked =
  | { ok: true; author: string; password: string; body: string }
  | { ok: false; field: 'author' | 'password' | 'body'; message: string }

// Characters, not UTF-16 units: an emoji is one.
export function countChars(text: string): number {
  return [...text].length
}

// A control character other than (when allowed) a line break or a tab, or half of a surrogate pair.
function hasProblemCharacters(text: string, allowLineBreaks: boolean): boolean {
  for (const char of text) {
    const code = char.codePointAt(0) ?? 0
    const control = code < 0x20 || (code >= 0x7f && code <= 0x9f)
    const allowed = allowLineBreaks && (code === 10 || code === 9)
    if ((control && !allowed) || (code >= 0xd800 && code <= 0xdfff)) return true
  }
  return false
}

// The text as the server will keep it: line ends made "\n" and no blank space at either end. Null when it cannot be kept.
export function cleanText(raw: string): string | null {
  const text = raw.replace(/\r\n?/g, '\n').trim()
  if (text === '' || countChars(text) > MAX_TEXT) return null
  return hasProblemCharacters(text, true) ? null : text
}

export function checkEntry(input: EntryInput): Checked {
  const author = normalizeNickname(input.author)
  if (author === null) {
    return {
      ok: false,
      field: 'author',
      message: `아이디는 글자(한글 포함), 숫자, _ 와 -, 단어 사이 공백만 쓸 수 있고 1~${MAX_NICKNAME}자입니다.`,
    }
  }
  const length = countChars(input.password)
  if (length < MIN_PASSWORD || length > MAX_PASSWORD || hasProblemCharacters(input.password, false)) {
    return { ok: false, field: 'password', message: `비밀번호는 ${MIN_PASSWORD}~${MAX_PASSWORD}자로 입력하세요.` }
  }
  const body = cleanText(input.body)
  if (body === null) {
    const tooLong = countChars(input.body.trim()) > MAX_TEXT
    return {
      ok: false,
      field: 'body',
      message: tooLong ? `내용은 ${MAX_TEXT}자까지 쓸 수 있습니다.` : '내용을 입력하세요.',
    }
  }
  return { ok: true, author, password: input.password, body }
}
