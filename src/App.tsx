import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { AdminProvider } from './components/AdminContext'
import RequireAdmin from './components/RequireAdmin'
import Home from './pages/Home'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'
import Write from './pages/Write'
import Edit from './pages/Edit'
import Delete from './pages/Delete'
import Tools from './pages/Tools'
import ToolPage from './pages/ToolPage'
import About from './pages/About'

export default function App() {
  return (
    <AdminProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<PostDetail />} />
        <Route
          path="/write"
          element={
            <RequireAdmin>
              <Write />
            </RequireAdmin>
          }
        />
        <Route
          path="/edit"
          element={
            <RequireAdmin>
              <Edit />
            </RequireAdmin>
          }
        />
        <Route
          path="/delete"
          element={
            <RequireAdmin>
              <Delete />
            </RequireAdmin>
          }
        />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:id" element={<ToolPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AdminProvider>
  )
}
