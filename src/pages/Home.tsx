import BlogPreviewSection from '../components/BlogPreviewSection'

export default function Home() {
  return (
    <main className="w-full px-6 py-12 md:px-12">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-8">
        <BlogPreviewSection />
      </div>
    </main>
  )
}
