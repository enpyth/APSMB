import Hero from "@/features/home/hero"
import AboutPage from "@/features/about/components/AboutPage"

export default function About() {
  return (
    <main className="flex-grow">
      <Hero imageSrc="/banner/placeholder_banner.jpg" title="About" />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <AboutPage />
        </div>
      </div>
    </main>
  )
}

