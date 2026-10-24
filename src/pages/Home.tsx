import BlogPreviewSection from '../components/BlogPreviewSection'
import QuickLinks from '../components/QuickLinks'
import ServerStatusSection from '../components/ServerStatusSection'

export default function Home() {
  return (
    <main className="page-width space-y-14 py-8 sm:py-10">
      <ServerStatusSection />
      <QuickLinks />
      <BlogPreviewSection />
    </main>
  )
}
