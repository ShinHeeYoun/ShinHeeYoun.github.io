// The name shown beside a score in the ranking. What a nickname may be is decided here and, in the same way, by the
// score server (server/scores): the two read the same test cases (server/scores/fixtures/nicknames.json).
//
// - letters (any language), digits, "_" and "-", with single spaces between words;
// - 1 to 12 characters;
// - the only kind of white space is the plain space; tabs, line breaks and the look-alike spaces are refused.

export const MAX_NICKNAME = 12

const NICKNAME = /^[\p{L}\p{Nd}_-]+(?: [\p{L}\p{Nd}_-]+)*$/u

// The nickname with its spaces tidied (runs of spaces become one, none at the ends), or null if it may not be used.
export function normalizeNickname(input: string): string | null {
  if (typeof input !== 'string') return null
  const tidy = input.replace(/ +/g, ' ').replace(/^ | $/g, '')
  if (tidy === '' || [...tidy].length > MAX_NICKNAME) return null
  return NICKNAME.test(tidy) ? tidy : null
}
