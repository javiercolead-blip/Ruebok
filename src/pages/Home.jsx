import { useEffect, useRef } from 'react'
import {
  HeroSection,
  LaunchTimelineSection,
  WhoShouldApplySection,
  ResultsSection
} from '../components/home'

function Home() {
  const containerRef = useRef(null)
  const lastScrollTime = useRef(0)

  useEffect(() => {
    document.title = 'Ruebok'
  }, [])

  // Throttle vertical scrolling between pages
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      const absY = Math.abs(e.deltaY)
      const absX = Math.abs(e.deltaX)

      // Only throttle vertical scrolling (not horizontal which is for the carousel)
      if (absY > absX && absY > 30) {
        const now = Date.now()
        // 1200ms throttle between page scrolls
        if (now - lastScrollTime.current < 1200) {
          e.preventDefault()
          return
        }
        lastScrollTime.current = now
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => container.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <div
      ref={containerRef}
      className="snap-y snap-mandatory h-screen overflow-y-scroll"
      style={{ scrollBehavior: 'smooth' }}
    >
      <HeroSection />
      <LaunchTimelineSection />
      <ResultsSection />
      <WhoShouldApplySection />
    </div>
  )
}

export default Home
