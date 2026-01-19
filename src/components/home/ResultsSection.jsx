import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Globe from 'react-globe.gl'
import { COLORS, FONTS } from '../../constants'
import { useStatsCounter } from '../../hooks/useStatsCounter'

function StatItem({ value, label, color, subLabel }) {
  return (
    <div className="flex flex-col">
      <div
        className="font-extrabold mb-1.5"
        style={{
          fontSize: '42px',
          color,
          fontFamily: FONTS.mono,
          lineHeight: 1.1,
          fontWeight: 800
        }}
      >
        {value}
      </div>
      <p className="text-white text-[15px] leading-[1.3]" style={{ fontFamily: FONTS.mono, letterSpacing: '0.5px' }}>
        {label}
      </p>
      {subLabel ? (
        <p className="text-[13px] font-medium mt-1" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
          {subLabel}
        </p>
      ) : (
        <div className="w-[60%] h-[1px] bg-[#333333] mt-3"></div>
      )}
    </div>
  )
}

function DesktopStatColumn({ value, label, animValue }) {
  return (
    <div className="flex flex-col" style={{
      opacity: animValue > 0 ? 1 : 0.7,
      transform: `scale(${animValue > 0 ? 1 : 0.98})`,
      transition: 'all 0.3s ease-out'
    }}>
      <div
        className="font-bold mb-2"
        style={{
          fontSize: '52px',
          color: 'white',
          fontFamily: FONTS.heading,
          lineHeight: 1
        }}
      >
        {value}
      </div>
      <p className="text-[14px] leading-[1.4]" style={{ fontFamily: FONTS.mono, fontWeight: 400, color: COLORS.primary }}>
        {label}
      </p>
    </div>
  )
}

// Arc color - orange for all flight paths
const ARC_COLOR = '#ff6700'

// Investment flight paths - simplified, fewer connections
const arcsData = [
  // From San Francisco (US West Coast)
  { startLat: 37.7749, startLng: -122.4194, endLat: -1.2921, endLng: 36.8219 },    // SF → Nairobi
  { startLat: 37.7749, startLng: -122.4194, endLat: 1.3521, endLng: 103.8198 },    // SF → Singapore

  // From London (Europe hub)
  { startLat: 51.5074, startLng: -0.1278, endLat: -1.2921, endLng: 36.8219 },      // London → Nairobi
  { startLat: 51.5074, startLng: -0.1278, endLat: 19.0760, endLng: 72.8777 },      // London → Mumbai

  // From New York (US East Coast)
  { startLat: 40.7128, startLng: -74.0060, endLat: -23.5505, endLng: -46.6333 },   // NYC → São Paulo

  // From Dubai (Middle East hub)
  { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198 },      // Dubai → Singapore
]

function InteractiveGlobe() {
  const globeRef = useRef()
  const [globeReady, setGlobeReady] = useState(false)

  useEffect(() => {
    if (globeRef.current && globeReady) {
      // Set initial camera position
      globeRef.current.pointOfView({ lat: 20, lng: -30, altitude: 2.0 }, 0)

      // Enable auto-rotation - slower speed
      const controls = globeRef.current.controls()
      if (controls) {
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.2
        controls.enableZoom = false
      }
    }
  }, [globeReady])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow effect behind globe */}
      <div
        className="absolute w-[550px] h-[550px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 103, 0, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <Globe
        ref={globeRef}
        onGlobeReady={() => setGlobeReady(true)}
        width={600}
        height={600}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

        // Arcs (flight paths) - orange colored, slower animation
        arcsData={arcsData}
        arcColor={() => ARC_COLOR}
        arcAltitude={0.25}
        arcStroke={0.5}
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={4000}

        // Atmosphere - subtle grey
        atmosphereColor="#555555"
        atmosphereAltitude={0.12}

        showGlobe={true}
        showAtmosphere={true}
      />
    </div>
  )
}

function ResultsSection() {
  const totalRaised = useStatsCounter(850, 2500, 0, 'easeOut')
  const successRate = useStatsCounter(87, 2500, 300, 'easeOut')
  const spotsLeft = useStatsCounter(14, 2500, 600, 'easeOut')

  return (
    <section className="snap-center relative h-screen bg-[#0a0a0a] dark-grid pt-[70px] flex flex-col overflow-hidden">
      <div className="flex-1 max-w-[1400px] mx-auto px-8 lg:px-20 pt-8 pb-4 w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col">
          <h2 className="text-[32px] font-bold text-white leading-[1.15] mb-4 text-left" style={{ fontFamily: FONTS.heading }}>
            Build Locally. Raise Globally.
          </h2>

          <p className="text-[16px] text-[#b0b0b0] leading-[1.5] mb-8 text-left max-w-[92%]" style={{ fontFamily: FONTS.mono }}>
            You have the local market insight. We have the global capital network. Ruebok bridges the gap between where you build and where you scale. From finding a technical co-founder in a different time zone to pitching investors on a different continent—we make the world feel small.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            <StatItem value={`$${totalRaised}K+`} label="Raised by Founders" color={COLORS.primary} />
            <StatItem value={`${successRate}%`} label="Get Investor Meetings" color="#50c878" />
            <StatItem value={spotsLeft} label="Spots Left This Cohort" color="#ffffff" subLabel="Applications closing soon" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 h-full">
          {/* Left Column - Header, Description, Stats */}
          <div className="flex flex-col justify-start py-8 gap-16">
            <div className="space-y-6">
              <h2 className="text-[44px] xl:text-[52px] font-bold text-white leading-[1.1] max-w-[480px]" style={{ fontFamily: FONTS.heading }}>
                Build Locally. Raise Globally.
              </h2>

              <p className="text-[17px] xl:text-[18px] text-gray-400 leading-[1.7] max-w-[480px]" style={{ fontFamily: FONTS.mono }}>
                You have the local market insight. We have the global capital network. Ruebok bridges the gap between where you build and where you scale. From finding a technical co-founder in a different time zone to pitching investors on a different continent—we make the world feel small.
              </p>
            </div>

            {/* Stats in 3 columns */}
            <div className="grid grid-cols-3 gap-8 max-w-[520px]">
              <DesktopStatColumn
                value={`$${totalRaised}K+`}
                label="Raised by Founders"
                animValue={totalRaised}
              />
              <DesktopStatColumn
                value={`${successRate}%`}
                label="Get Investor Meetings"
                animValue={successRate}
              />
              <DesktopStatColumn
                value={`${spotsLeft}`}
                label="Spots Available"
                animValue={spotsLeft}
              />
            </div>
          </div>

          {/* Right Column - Globe */}
          <div className="flex items-center justify-center h-full">
            <InteractiveGlobe />
          </div>
        </div>
      </div>

    </section>
  )
}

export default ResultsSection
