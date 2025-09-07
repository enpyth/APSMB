import Hero from "@/features/home/hero"
import Register from "@/components/form/register"

export default function Membership() {
  return (
    <main className="flex-grow">
      <Hero imageSrc="/banner/placeholder_banner.jpg" title="Membership" />
      <Register />
    </main>
  )
}