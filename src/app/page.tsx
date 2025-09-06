import Hero from '@/features/home/hero'
import Conference from '@/features/home/Conference'
import SpecialIssue from '@/features/home/SpecialIssue'
import Chairman from '@/features/home/Chairman'
import Roundtables from '@/features/home/Roundtables'
import Partners from '@/features/home/Partners'
import AboutMembership from '@/features/home/AboutMembership'
import Notification from '@/features/home/Notification'

export default function HomePage() {
  return (
    <main>
      <Hero 
        imageSrc="/banner/banner-about.jpeg" 
        title="Asia-Pacific Marine Biotechnology Association"
        subtitle="Advancing marine biotechnology research and industry development across the Asia-Pacific region"
        showCTA={true}
      />
      <Notification />
      <Conference />
      <SpecialIssue />
      <Chairman />
      <Roundtables />
      <Partners />
      <AboutMembership />
    </main>
  )
}
