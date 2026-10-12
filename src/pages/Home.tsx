import Hero from '../components/Hero'
import BlogPreviewSection from '../components/BlogPreviewSection'
import ServerStatusSection from '../components/ServerStatusSection'
import SourceSection from '../components/SourceSection'

export default function Home() {
  return (
    <main className="w-full px-6 py-8 md:px-12">
      <Hero />
      <div className="mt-12 space-y-14">
        <ServerStatusSection />
        <BlogPreviewSection />
        <SourceSection />
      </div>
    </main>
  )
}
