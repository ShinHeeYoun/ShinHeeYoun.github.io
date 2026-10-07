import type { Highlighted } from '../lib/search'

// Text with its matched part painted red. It is built from React elements, not HTML, so nothing in a post
// can inject markup through the search results.
export default function Highlight({ text }: { text: Highlighted }) {
  return (
    <>
      {text.before}
      <mark className="search-match">{text.match}</mark>
      {text.after}
    </>
  )
}
