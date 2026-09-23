import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-2xl gap-6 px-4 py-4">
        <Link to="/" className="font-semibold">
          Home
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/write">Write</Link>
        <Link to="/tools">Tools</Link>
      </div>
    </nav>
  )
}
