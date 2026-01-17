import { useEffect } from 'react'
import {
  HeroSection,
  LaunchTimelineSection,
  WhoShouldApplySection,
  ResultsSection
} from '../components/home'

function Home() {
  useEffect(() => {
    document.title = 'Ruebok'
  }, [])

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ scrollBehavior: 'smooth' }}>
      <HeroSection />
      <LaunchTimelineSection />
      <WhoShouldApplySection />
      <ResultsSection />
    </div>
  )
}

export default Home
