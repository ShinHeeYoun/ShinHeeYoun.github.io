import BlogPreviewSection from '../components/BlogPreviewSection'

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="mt-8">
        <BlogPreviewSection />
      </div>
    </main>
  )
}
