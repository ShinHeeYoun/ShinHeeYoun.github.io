import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import BlogPreviewSection from '../components/BlogPreviewSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <main className="w-full px-6 py-8 md:px-12">
      <Hero />
      <div className="mt-12 space-y-14">
        <FeaturedProjects />
        <BlogPreviewSection />
        <ContactSection />
      </div>
    </main>
  )
}
