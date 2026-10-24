import BlogPreviewSection from '../components/BlogPreviewSection'
import Hero from '../components/Hero'
import QuickLinks from '../components/QuickLinks'
import ServerStatusSection from '../components/ServerStatusSection'

export default function Home() {
  return (
    <main className="page-width space-y-14 py-8 sm:py-10">
      <Hero />
      <QuickLinks />
      <BlogPreviewSection />
      <ServerStatusSection />
    </main>
  )
}
