import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import TheStack from '../components/TheStack'
import { COLORS, FONTS } from '../constants'
import { useCounterAnimation } from '../hooks/useCounterAnimation'
import { useStatsCounter } from '../hooks/useStatsCounter'

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false)
  const [selectedCards, setSelectedCards] = useState([])
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const carouselSectionRef = useRef(null)

  // Use counter animation hook for all animated numbers
  const count = useCounterAnimation(50, 2000, 'easeOut')
  const agriProgress = useCounterAnimation(60, 2000, 'easeInOut')
  const agriGrowth = useCounterAnimation(340, 2000, 'easeInOut')
  const fintechProgress = useCounterAnimation(85, 2000, 'easeInOut')
  const fintechGrowth = useCounterAnimation(220, 2000, 'easeInOut')

  // Hero stats counters with staggered delays
  const totalRaised = useStatsCounter(850, 2500, 0, 'easeOut')
  const successRate = useStatsCounter(87, 2500, 300, 'easeOut')
  const spotsLeft = useStatsCounter(14, 2500, 600, 'easeOut')

  // Carousel navigation
  const totalCards = 4

  const nextCard = () => {
    setCarouselIndex((prev) => (prev + 1) % totalCards)
  }

  const prevCard = () => {
    setCarouselIndex((prev) => (prev - 1 + totalCards) % totalCards)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setAutoScrollEnabled(false) // Disable auto-scroll when user interacts
    setIsDragging(true)
    setIsHorizontalSwipe(false)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return

    const currentTouchX = e.targetTouches[0].clientX
    const currentTouchY = e.targetTouches[0].clientY

    const deltaX = Math.abs(currentTouchX - touchStart)
    const deltaY = Math.abs(currentTouchY - touchStartY)

    // Determine if this is a horizontal swipe (only on first significant movement)
    // Horizontal swipes should be easy and sensitive
    // Vertical scrolling should require more intentional movement with a dead zone
    if (!isHorizontalSwipe && (deltaX > 5 || deltaY > 5)) {
      // Only allow vertical scroll if it's clearly vertical AND exceeds dead zone threshold
      if (deltaY > deltaX * 2 && deltaY > 30) {
        // This is a clearly vertical scroll with enough movement, allow it
      } else {
        // Default to horizontal swipe for everything else
        setIsHorizontalSwipe(true)
      }
    }

    // Only prevent default and handle horizontal drag if it's a horizontal swipe
    if (isHorizontalSwipe) {
      e.preventDefault()
      setTouchEnd(currentTouchX)

      // Calculate drag offset (multiply by 0.6 to add some resistance)
      const offset = (currentTouchX - touchStart) * 0.6
      setDragOffset(offset)
    }
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    setIsDragging(false)

    // Only change slides if it was a horizontal swipe
    if (isHorizontalSwipe) {
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > 50
      const isRightSwipe = distance < -50

      if (isLeftSwipe) {
        nextCard()
      }
      if (isRightSwipe) {
        prevCard()
      }
    }

    setDragOffset(0)
    setTouchStart(0)
    setTouchEnd(0)
    setTouchStartY(0)
    setIsHorizontalSwipe(false)
  }

  // Desktop card overlay functions
  const toggleCard = (cardName) => {
    setSelectedCards(prev =>
      prev.includes(cardName)
        ? prev.filter(name => name !== cardName)
        : [...prev, cardName]
    )
  }

  const isCardSelected = (cardName) => {
    return selectedCards.includes(cardName)
  }

  const cardDetails = {
    build: {
      title: "Build",
      subtitle: "Weeks 1-4",
      description: "Transform your idea into a working product with hands-on guidance and weekly milestones. Our structured approach helps you validate your concept, design your MVP, and start building with confidence.",
      features: [
        "Customer discovery and validation",
        "MVP blueprint and architecture",
        "No-code prototyping tools",
        "Weekly mentor feedback sessions"
      ],
      image: "/build-detail.png"
    },
    mentorship: {
      title: "Mentorship",
      subtitle: "Ongoing Support",
      description: "Get personalized feedback from founders who've scaled startups and VCs who've funded successful companies. Our mentors provide strategic guidance tailored to your specific challenges.",
      features: [
        "1-on-1 mentor sessions",
        "Industry expert office hours",
        "Peer learning community",
        "Real-world case studies"
      ],
      image: "/mentorpic.png"
    },
    funding: {
      title: "Funding",
      subtitle: "Investor Connections",
      description: "Refine your pitch and connect directly with global investors actively seeking deals. We help you build the materials and relationships needed to secure funding.",
      features: [
        "Pitch deck development",
        "Investor intro workshops",
        "Demo day presentation",
        "Term sheet negotiations support"
      ],
      image: "/funding-detail.png"
    },
    network: {
      title: "Network",
      subtitle: "Lifetime Access",
      description: "Join a global community of founders, mentors, and investors building together. Our network becomes your most valuable asset long after the program ends.",
      features: [
        "Alumni community access",
        "Co-founder matching",
        "Partnership opportunities",
        "Exclusive events and summits"
      ],
      image: "/Network.png"
    }
  }

  useEffect(() => {
    // Set page title
    document.title = 'Ruebok'
  }, [])

  // Intersection Observer to detect when carousel section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsCarouselVisible(entry.isIntersecting)
        })
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    )

    if (carouselSectionRef.current) {
      observer.observe(carouselSectionRef.current)
    }

    return () => {
      if (carouselSectionRef.current) {
        observer.unobserve(carouselSectionRef.current)
      }
    }
  }, [])

  // Auto-scroll carousel every 3 seconds when section is visible
  useEffect(() => {
    if (!autoScrollEnabled || !isCarouselVisible) return

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % totalCards)
    }, 3000)

    return () => clearInterval(interval)
  }, [autoScrollEnabled, isCarouselVisible, totalCards])

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll" style={{ scrollBehavior: 'smooth' }}>
      {/* Hero Section - Industrial Design */}
      <section className="snap-center relative h-screen dark-grid pt-[70px] flex items-center justify-center overflow-hidden">
      {/* Two-Column Industrial Layout */}
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN - Copy/CTA */}
        <div className="space-y-8">
          {/* Main Headline */}
          <h1 className="uppercase leading-none" style={{ fontFamily: FONTS.heading }}>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              BUILD<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              SHIP<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              PITCH<span style={{ color: COLORS.primary }}>.</span>
            </span>
          </h1>

          {/* Sub-Header */}
          <p className="text-lg max-w-lg text-white" style={{ fontFamily: FONTS.mono, fontWeight: 300 }}>
            Turn your SaaS idea into a startup in 8 weeks, then pitch it to real investors. Global founders welcome. No equity taken.
          </p>

          {/* Primary Button */}
          <div className="space-y-4">
            <Link
              to="/apply"
              className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
              style={{ borderRadius: 0 }}
            >
              APPLY TO 2026 Q1 COHORT
            </Link>

            {/* Trust Signal */}
            <p className="text-sm text-neutral-500" style={{ fontFamily: FONTS.mono }}>
              Applications closing for Cohort 2026.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Social Proof Statistics */}
        <div className="hidden lg:flex flex-col justify-center pl-32">
          {/* Stat 1 - Investment Raised */}
          <div className="mb-12" style={{
            opacity: totalRaised > 0 ? 1 : 0.7,
            transform: `scale(${totalRaised > 0 ? 1 : 0.95})`,
            transition: 'all 0.3s ease-out'
          }}>
            <div className="flex items-baseline gap-3 mb-4">
              {/* Dollar Icon */}
              <svg className="w-9 h-9 flex-shrink-0" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div
                className="font-bold"
                style={{
                  fontSize: '64px',
                  color: COLORS.primary,
                  fontFamily: FONTS.heading,
                  textShadow: totalRaised > 840 ? '0 0 20px rgba(255, 103, 0, 0.3)' : 'none',
                  lineHeight: 1
                }}
              >
                ${totalRaised}K+
              </div>
            </div>
            <p className="text-white text-[18px] leading-[1.4]" style={{ fontFamily: FONTS.mono, fontWeight: 400 }}>
              Raised by Our Founders
            </p>
          </div>

          {/* Stat 2 - Success Metric */}
          <div className="mb-12" style={{
            opacity: successRate > 0 ? 1 : 0.7,
            transform: `scale(${successRate > 0 ? 1 : 0.95})`,
            transition: 'all 0.3s ease-out'
          }}>
            <div className="flex items-baseline gap-3 mb-4">
              {/* Check/Success Icon */}
              <svg className="w-9 h-9 flex-shrink-0 text-[#50c878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div
                className="font-bold"
                style={{
                  fontSize: '64px',
                  color: '#50c878',
                  fontFamily: FONTS.heading,
                  textShadow: successRate > 85 ? '0 0 20px rgba(80, 200, 120, 0.2)' : 'none',
                  lineHeight: 1
                }}
              >
                {successRate}%
              </div>
            </div>
            <p className="text-white text-[18px] leading-[1.4]" style={{ fontFamily: FONTS.mono, fontWeight: 400 }}>
              Get Investor Meetings
            </p>
          </div>

          {/* Stat 3 - Scarcity */}
          <div style={{
            opacity: spotsLeft > 0 ? 1 : 0.7,
            transform: `scale(${spotsLeft > 0 ? 1 : 0.95})`,
            transition: 'all 0.3s ease-out'
          }}>
            <div className="flex items-baseline gap-3 mb-4">
              {/* Users Icon */}
              <svg className="w-9 h-9 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div
                className="font-bold relative"
                style={{
                  fontSize: '64px',
                  color: 'white',
                  fontFamily: FONTS.heading,
                  lineHeight: 1
                }}
              >
                {spotsLeft}
                <div
                  className="absolute -bottom-1 left-0 right-0 h-1 rounded-full"
                  style={{
                    backgroundColor: COLORS.primary,
                    width: spotsLeft > 45 ? '100%' : '0%',
                    transition: 'width 0.5s ease-out 1s'
                  }}
                />
              </div>
            </div>
            <p className="text-white text-[18px] leading-[1.4] mb-2" style={{ fontFamily: FONTS.mono, fontWeight: 400 }}>
              Spots Available
            </p>
            <p className="text-[16px]" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
              Applications closing soon
            </p>
          </div>
        </div>

      </div>

    </section>

      {/* How We Help Section */}
      <section ref={carouselSectionRef} className="snap-center relative h-screen bg-[#111111] dark-grid pt-[70px] pb-12 overflow-hidden">
        {/* Header */}
        <div className="mb-6 px-8 pt-6">
          <h2 className="text-[34px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight">
            Launch Timeline<span style={{ color: COLORS.primary }}>:</span>
          </h2>
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          {/* Progress Bar */}
          <div className="flex mb-6 px-8 justify-center" style={{ gap: '44px' }}>
              <div className="relative py-3 text-center">
                <span
                  className="text-[16px] font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#fff'
                  }}
                >
                  Build
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.primary,
                    transform: carouselIndex === 0 ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
              <div className="relative py-3 text-center">
                <span
                  className="text-[16px] font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#fff'
                  }}
                >
                  Ship
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.primary,
                    transform: carouselIndex === 1 ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
              <div className="relative py-3 text-center">
                <span
                  className="text-[16px] font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#fff'
                  }}
                >
                  Pitch
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.primary,
                    transform: carouselIndex === 2 ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
              <div className="relative py-3 text-center">
                <span
                  className="text-[16px] font-bold uppercase tracking-wide transition-all duration-300"
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#fff'
                  }}
                >
                  Scale
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                  style={{
                    backgroundColor: COLORS.primary,
                    transform: carouselIndex === 3 ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                />
              </div>
            </div>

            {/* Carousel Container */}
            <div
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex"
                style={{
                  transform: `translateX(calc(-${carouselIndex * 100}vw + ${dragOffset}px))`,
                  transition: isDragging ? 'none' : 'transform 500ms ease-out',
                  scrollSnapType: 'x mandatory'
                }}
              >
                {/* Build Card */}
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center', width: '100vw' }}>
                  <div className="overflow-hidden h-[520px] flex flex-col px-8">
                    {/* Code Editor Visual - LARGER */}
                    <div className="relative h-[240px] mb-3 overflow-hidden bg-[#0d0d0d]">
                      <div className="h-full flex flex-col">
                        <div className="px-3 py-2 flex items-center gap-2 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray }}>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-[12px] text-gray-400 font-mono">startup.ts</span>
                        </div>
                        <div className="p-6 font-mono text-[16px] leading-relaxed flex-1">
                          <div className="space-y-2">
                            <div><span className="text-purple-400">const</span><span className="text-white"> mvp = {'{'}</span></div>
                            <div className="pl-4"><span className="text-white">build: </span><span style={{ color: COLORS.primary }}>"fast"</span><span className="text-gray-500">,</span></div>
                            <div className="pl-4"><span className="text-white">launch: </span><span className="text-purple-400">true</span><span className="text-gray-500">,</span></div>
                            <div className="pl-4"><span className="text-white">status: </span><span style={{ color: COLORS.primary }}>"ready"</span></div>
                            <div><span className="text-white">{'}'}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="mb-3"></div>

                    {/* Text Content Below Visual - Tighter */}
                    <div className="pb-5 flex-1">
                      <p className="text-[19px] text-white leading-[1.5] mb-3">
                        Ship your MVP in 4 weeks with expert guidance.
                      </p>

                      {/* Features List */}
                      <ul className="space-y-1.5">
                        {cardDetails.build.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[16px] text-white" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mentorship Card */}
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center', width: '100vw' }}>
                  <div className="overflow-hidden h-[520px] flex flex-col px-8">
                    {/* Mentorship Visual - Icon-based */}
                    <div className="relative h-[240px] mb-3 overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                      {/* Mentor-Founder Connection Diagram */}
                      <div className="relative w-full h-full flex items-center justify-center p-8">
                        {/* Center Founder Icon */}
                        <div className="relative z-10">
                          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-orange-500 whitespace-nowrap" style={{ fontFamily: FONTS.mono }}>
                            YOU
                          </div>
                        </div>

                        {/* Connecting Lines and Mentor Icons */}
                        {/* Top Left Mentor */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                            </svg>
                          </div>
                          <svg className="absolute top-6 left-6 w-16 h-16 text-blue-500/30" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="8" y1="8" x2="36" y2="36" strokeDasharray="2,2"/>
                          </svg>
                        </div>

                        {/* Top Right Mentor */}
                        <div className="absolute top-4 right-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                          </div>
                          <svg className="absolute top-6 right-6 w-16 h-16 text-purple-500/30" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="48" y1="8" x2="20" y2="36" strokeDasharray="2,2"/>
                          </svg>
                        </div>

                        {/* Bottom Left Mentor */}
                        <div className="absolute bottom-4 left-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                            </svg>
                          </div>
                          <svg className="absolute bottom-6 left-6 w-16 h-16 text-green-500/30" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="8" y1="48" x2="36" y2="20" strokeDasharray="2,2"/>
                          </svg>
                        </div>

                        {/* Bottom Right Mentor */}
                        <div className="absolute bottom-4 right-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                          <svg className="absolute bottom-6 right-6 w-16 h-16 text-pink-500/30" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="48" y1="48" x2="20" y2="20" strokeDasharray="2,2"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="mb-3"></div>

                    {/* Text Content Below Visual - Tighter */}
                    <div className="pb-5 flex-1">
                      <p className="text-[19px] text-white leading-[1.5] mb-3">
                        Learn from founders who've built and scaled companies.
                      </p>

                      {/* Features List */}
                      <ul className="space-y-1.5">
                        {cardDetails.mentorship.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[16px] text-white" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Funding Card */}
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center', width: '100vw' }}>
                  <div className="overflow-hidden h-[520px] flex flex-col px-8">
                    {/* Chart Visual - LARGER */}
                    <div className="relative h-[240px] mb-3 bg-[#0d0d0d] p-7 flex flex-col">
                      <div className="text-[12px] text-gray-400 font-semibold mb-3 uppercase tracking-wide">Traction Growth</div>
                      <div className="flex-1 relative flex items-end justify-between gap-4 pb-7">
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-full rounded-t" style={{ height: '60px', backgroundColor: COLORS.primary }}></div>
                          <span className="text-[12px] text-gray-400 font-medium">Q1</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-full rounded-t" style={{ height: '85px', backgroundColor: COLORS.primary }}></div>
                          <span className="text-[12px] text-gray-400 font-medium">Q2</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1">
                          <div className="w-full rounded-t" style={{ height: '115px', backgroundColor: COLORS.primary }}></div>
                          <span className="text-[12px] text-gray-400 font-medium">Q3</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 flex-1 relative">
                          <div className="w-full rounded-t relative" style={{ height: '145px', backgroundColor: COLORS.primary }}>
                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[16px] font-bold text-white whitespace-nowrap">
                              2.5x
                            </div>
                          </div>
                          <span className="text-[12px] text-gray-400 font-medium">Q4</span>
                        </div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="mb-3"></div>

                    {/* Text Content Below Visual - Tighter */}
                    <div className="pb-5 flex-1">
                      <p className="text-[19px] text-white leading-[1.5] mb-3">
                        Connect with investors actively seeking deals.
                      </p>

                      {/* Features List */}
                      <ul className="space-y-1.5">
                        {cardDetails.funding.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[16px] text-white" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Network Card */}
                <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center', width: '100vw' }}>
                  <div className="overflow-hidden h-[520px] flex flex-col px-8">
                    {/* Network Visual - LARGER */}
                    <div className="relative h-[240px] mb-3 overflow-hidden bg-gradient-to-br from-gray-900 to-black p-10 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-5">
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-lg"></div>
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"></div>
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-lg"></div>
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg"></div>
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 ring-2 ring-white shadow-lg"></div>
                        <div className="w-18 h-18 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 shadow-lg"></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="mb-3"></div>

                    {/* Text Content Below Visual - Tighter */}
                    <div className="pb-5 flex-1">
                      <p className="text-[19px] text-white leading-[1.5] mb-3">
                        Lifetime access to our community of founders and mentors.
                      </p>

                      {/* Features List */}
                      <ul className="space-y-1.5">
                        {cardDetails.network.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-[16px] text-white" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        {/* Desktop: Grid - Vertical stack on mobile, horizontal on desktop */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-5">
            {/* Card 1 - Build */}
            <div className="border border-gray-800 shadow-2xl rounded-lg overflow-hidden transition-all group relative flex flex-col" style={{ backgroundColor: COLORS.darkGray, borderColor: COLORS.border }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.primary} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}>

              {/* Detail Overlay - slides from left on mobile, bottom on desktop */}
              <div
                className="absolute inset-0 z-20 flex flex-col rounded-xl transition-all duration-500 ease-out"
                style={{
                  backgroundColor: COLORS.darkGray,
                  transform: isCardSelected('build')
                    ? 'translate(0, 0)'
                    : window.innerWidth < 768
                      ? 'translateX(-100%)'
                      : 'translateY(100%)',
                  opacity: isCardSelected('build') ? 1 : 0
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => toggleCard('build')}
                  className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Detail Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: FONTS.heading }}>
                    {cardDetails.build.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                    {cardDetails.build.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {cardDetails.build.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px] md:text-xs text-gray-300" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile: Vertical stack layout */}
              <div className="flex flex-col md:hidden">
                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-[26px] font-bold text-white mb-2 leading-tight">Build</h3>
                  <p className="text-[15px] text-gray-400 mb-4">Weeks 1-4</p>
                  <p className="text-[16px] text-gray-300 leading-[1.6] mb-6">
                    Turn your idea into a working product with hands-on guidance
                  </p>
                </div>

                {/* Code Editor Visual */}
                <div className="relative h-[220px] mx-6 mb-6 rounded-lg overflow-hidden" style={{ backgroundColor: COLORS.darkSection }}>
                  <div className="h-full flex flex-col">
                    <div className="px-3 py-2 flex items-center gap-2 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray }}>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[11px] text-gray-400 font-mono">startup.ts</span>
                    </div>
                    <div className="p-4 font-mono text-[14px] leading-relaxed flex-1">
                      <div className="space-y-1">
                        <div><span className="text-purple-400">const</span><span className="text-white"> mvp = {'{'}</span></div>
                        <div className="pl-4"><span className="text-white">build: </span><span style={{ color: COLORS.primary }}>"fast"</span><span className="text-gray-500">,</span></div>
                        <div className="pl-4"><span className="text-white">launch: </span><span className="text-purple-400">true</span><span className="text-gray-500">,</span></div>
                        <div className="pl-4"><span className="text-white">status: </span><span style={{ color: COLORS.primary }}>"ready"</span></div>
                        <div><span className="text-white">{'}'}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => toggleCard('build')}
                    className="w-full h-[52px] flex items-center justify-center gap-2 cursor-pointer rounded-lg transition-all active:scale-[0.98]"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    <span className="text-[16px] font-semibold text-white">
                      Learn More
                    </span>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Desktop: Original vertical layout */}
              <div className="hidden md:flex md:flex-col md:h-full">
                {/* Visual Area - Code Editor */}
                <div className="relative h-64" style={{ backgroundColor: COLORS.darkSection }}>
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Build</span>
                    </div>
                  </div>

                  {/* Code Editor */}
                  <div className="h-full flex flex-col">
                    <div className="px-4 py-2.5 flex items-center gap-2 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray }}>
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">startup.ts</span>
                    </div>
                    <div className="p-6 font-mono text-sm leading-relaxed flex-1">
                      <div className="space-y-1.5">
                        <div><span className="text-purple-400">const</span><span className="text-white"> mvp = {'{'}</span></div>
                        <div className="pl-4"><span className="text-white">build: </span><span style={{ color: COLORS.primary }}>"fast"</span><span className="text-gray-500">,</span></div>
                        <div className="pl-4"><span className="text-white">launch: </span><span className="text-purple-400">true</span><span className="text-gray-500">,</span></div>
                        <div className="pl-4"><span className="text-white">status: </span><span style={{ color: COLORS.primary }}>"ready"</span></div>
                        <div><span className="text-white">{'}'}</span></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 border-t border-gray-800 flex-1 relative" style={{ backgroundColor: COLORS.darkGray }}>
                  <h3 className="text-lg font-bold text-white mb-1">Build</h3>
                  <p className="text-xs text-gray-400 mb-2">Weeks 1-4</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Turn your idea into a working product with hands-on guidance
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => toggleCard('build')}
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="text-sm font-medium relative group/link" style={{ color: COLORS.primary }}>
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Mentorship */}
            <div className="border border-gray-700 shadow-2xl rounded-xl overflow-hidden hover:border-orange-600 transition-all h-[140px] md:min-h-[420px] group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

              {/* Detail Overlay - slides from left on mobile, bottom on desktop */}
              <div
                className="absolute inset-0 z-20 flex flex-col rounded-xl transition-all duration-500 ease-out"
                style={{
                  backgroundColor: COLORS.darkGray,
                  transform: isCardSelected('mentorship')
                    ? 'translate(0, 0)'
                    : window.innerWidth < 768
                      ? 'translateX(-100%)'
                      : 'translateY(100%)',
                  opacity: isCardSelected('mentorship') ? 1 : 0
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => toggleCard('mentorship')}
                  className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Detail Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: FONTS.heading }}>
                    {cardDetails.mentorship.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                    {cardDetails.mentorship.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {cardDetails.mentorship.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px] md:text-xs text-gray-300" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile: Two-column grid layout */}
              <div className="grid grid-cols-2 gap-2 h-full md:hidden p-2">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-start pt-1">
                  <h3 className="text-sm font-bold text-white mb-1">Mentorship</h3>
                  <p className="text-[9px] text-gray-400 mb-2">Ongoing Support</p>
                  <p className="text-[10px] text-gray-300 leading-relaxed mb-2">
                    Get personalized feedback from founders who've scaled startups
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('mentorship')}
                    className="flex items-center gap-1 cursor-pointer mt-auto"
                  >
                    <span className="text-[10px] font-medium text-orange-600">
                      Learn More
                    </span>
                    <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Right Column - Mentor Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/mentorpic.png"
                    alt="Mentor"
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Desktop: Original vertical layout */}
              <div className="hidden md:flex md:flex-col md:h-full">
                {/* Visual Area - Mentor */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/mentorpic.png"
                    alt="Mentor"
                    className="absolute inset-0 w-full h-full object-cover object-center brightness-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Mentorship</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 border-t border-gray-800 flex-1 relative" style={{ backgroundColor: COLORS.darkGray }}>
                  <h3 className="text-lg font-bold text-white mb-1">Mentorship</h3>
                  <p className="text-xs text-gray-400 mb-2">Ongoing Support</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Get personalized feedback from founders who've scaled startups
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => toggleCard('mentorship')}
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="text-orange-600 text-sm font-medium relative group/link">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg className="w-4 h-4 text-orange-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - Funding */}
            <div className="shadow-2xl rounded-xl overflow-hidden hover:border hover:border-orange-600 transition-all h-[140px] md:min-h-[420px] border border-gray-800 group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

              {/* Detail Overlay - slides from left on mobile, bottom on desktop */}
              <div
                className="absolute inset-0 z-20 flex flex-col rounded-xl transition-all duration-500 ease-out"
                style={{
                  backgroundColor: COLORS.darkGray,
                  transform: isCardSelected('funding')
                    ? 'translate(0, 0)'
                    : window.innerWidth < 768
                      ? 'translateX(-100%)'
                      : 'translateY(100%)',
                  opacity: isCardSelected('funding') ? 1 : 0
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => toggleCard('funding')}
                  className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Detail Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: FONTS.heading }}>
                    {cardDetails.funding.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                    {cardDetails.funding.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {cardDetails.funding.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px] md:text-xs text-gray-300" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile: Two-column grid layout */}
              <div className="grid grid-cols-2 gap-2 h-full md:hidden p-2">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-start pt-1">
                  <h3 className="text-sm font-bold text-white mb-1">Funding</h3>
                  <p className="text-[9px] text-gray-400 mb-2">Investor Connections</p>
                  <p className="text-[10px] text-gray-300 leading-relaxed mb-2">
                    Refine your pitch and connect with global investors seeking deals
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('funding')}
                    className="flex items-center gap-1 cursor-pointer mt-auto"
                  >
                    <span className="text-[10px] font-medium text-orange-600">
                      Learn More
                    </span>
                    <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Right Column - Chart */}
                <div className="relative bg-neutral-950 rounded-lg p-2 flex flex-col">
                  <div className="text-[7px] text-gray-400 font-semibold mb-2 uppercase tracking-wide">Traction</div>
                  <div className="flex-1 relative">
                    <div className="absolute inset-0 flex flex-col justify-between py-0.5">
                      <div className="border-t border-gray-700"></div>
                      <div className="border-t border-gray-700"></div>
                      <div className="border-t border-gray-700"></div>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-around px-2">
                      <div className="w-4 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '35%' }}></div>
                      <div className="w-4 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '52%' }}></div>
                      <div className="w-4 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '68%' }}></div>
                      <div className="w-4 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Original vertical layout */}
              <div className="hidden md:flex md:flex-col md:h-full">
                {/* Visual Area - Chart */}
                <div className="relative h-64 bg-neutral-950 p-5 flex flex-col">
                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Funding</span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="pt-10 h-full flex flex-col">
                    <div className="text-[10px] text-gray-400 font-semibold mb-3 uppercase tracking-wide">Traction</div>
                    <div className="flex-1 relative">
                      <div className="absolute inset-0 flex flex-col justify-between py-1">
                        <div className="border-t border-gray-700"></div>
                        <div className="border-t border-gray-700"></div>
                        <div className="border-t border-gray-700"></div>
                        <div className="border-t border-gray-700"></div>
                      </div>
                      <div className="absolute inset-0 flex items-end justify-around px-3">
                        <div className="w-8 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '35%' }}></div>
                        <div className="w-8 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '52%' }}></div>
                        <div className="w-8 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '68%' }}></div>
                        <div className="w-8 rounded-t-sm" style={{ backgroundColor: COLORS.primary, height: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 border-t border-gray-800 flex-1 relative" style={{ backgroundColor: COLORS.darkGray }}>
                  <h3 className="text-lg font-bold text-white mb-1">Funding</h3>
                  <p className="text-xs text-gray-400 mb-2">Investor Connections</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Refine your pitch and connect with global investors seeking deals
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => toggleCard('funding')}
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="text-orange-600 text-sm font-medium relative group/link">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg className="w-4 h-4 text-orange-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 - Network */}
            <div className="border border-neutral-800 shadow-2xl rounded-xl overflow-hidden hover:border-orange-600 transition-all h-[140px] md:min-h-[420px] group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

              {/* Detail Overlay - slides from left on mobile, bottom on desktop */}
              <div
                className="absolute inset-0 z-20 flex flex-col rounded-xl transition-all duration-500 ease-out"
                style={{
                  backgroundColor: COLORS.darkGray,
                  transform: isCardSelected('network')
                    ? 'translate(0, 0)'
                    : window.innerWidth < 768
                      ? 'translateX(-100%)'
                      : 'translateY(100%)',
                  opacity: isCardSelected('network') ? 1 : 0
                }}
              >
                {/* Close Button */}
                <button
                  onClick={() => toggleCard('network')}
                  className="absolute top-3 right-3 z-30 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Detail Content */}
                <div className="p-4 md:p-6 flex flex-col justify-center h-full">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: FONTS.heading }}>
                    {cardDetails.network.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                    {cardDetails.network.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {cardDetails.network.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[10px] md:text-xs text-gray-300" style={{ fontFamily: FONTS.mono }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile: Two-column grid layout */}
              <div className="grid grid-cols-2 gap-2 h-full md:hidden p-2">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-start pt-1">
                  <h3 className="text-sm font-bold text-white mb-1">Network</h3>
                  <p className="text-[9px] text-gray-400 mb-2">Lifetime Access</p>
                  <p className="text-[10px] text-gray-300 leading-relaxed mb-2">
                    Join a global community of founders and investors building together
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('network')}
                    className="flex items-center gap-1 cursor-pointer mt-auto"
                  >
                    <span className="text-[10px] font-medium text-orange-600">
                      Learn More
                    </span>
                    <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Right Column - Network Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src="/Network.png"
                    alt="Network"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Desktop: Original vertical layout */}
              <div className="hidden md:flex md:flex-col md:h-full">
                {/* Visual Area - Network */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src="/Network.png"
                    alt="Network"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Network</span>
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-4 border-t border-gray-800 flex-1 relative" style={{ backgroundColor: COLORS.darkGray }}>
                  <h3 className="text-lg font-bold text-white mb-1">Network</h3>
                  <p className="text-xs text-gray-400 mb-2">Lifetime Access</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    Join a global community of founders and investors building together
                  </p>

                  {/* Learn More Link */}
                  <button
                    onClick={() => toggleCard('network')}
                    className="absolute bottom-4 left-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <span className="text-orange-600 text-sm font-medium relative group/link">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/link:w-full"></span>
                    </span>
                    <svg className="w-4 h-4 text-orange-600 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results-Focused Section */}
      <section className="snap-center relative h-screen bg-[#0a0a0a] dark-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 max-w-7xl mx-auto px-6 pt-8 sm:pt-10 lg:pt-12 pb-4 w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col">
            {/* Main Headline */}
            <h2 className="text-[32px] font-bold text-white leading-[1.15] mb-4 text-left" style={{ fontFamily: FONTS.heading }}>
              Proven Results, Wherever You Are
            </h2>

            {/* Subheading Paragraph */}
            <p className="text-[16px] text-[#b0b0b0] leading-[1.5] mb-8 text-left max-w-[92%]" style={{ fontFamily: FONTS.mono }}>
              Your location doesn't limit your potential. With the right guidance and support, we help founders from anywhere build companies that attract real investment and create lasting impact.
            </p>

            {/* Stats Section - Vertical Stack */}
            <div className="flex flex-col gap-6 mb-8">
              {/* Stat 1 - Capital Raised */}
              <div className="flex flex-col">
                <div
                  className="font-extrabold mb-1.5"
                  style={{
                    fontSize: '42px',
                    color: COLORS.primary,
                    fontFamily: FONTS.mono,
                    lineHeight: 1.1,
                    fontWeight: 800
                  }}
                >
                  ${totalRaised}K+
                </div>
                <p className="text-white text-[15px] leading-[1.3]" style={{ fontFamily: FONTS.mono, letterSpacing: '0.5px' }}>
                  Raised by Founders
                </p>
                <div className="w-[60%] h-[1px] bg-[#333333] mt-3"></div>
              </div>

              {/* Stat 2 - Success Rate */}
              <div className="flex flex-col">
                <div
                  className="font-extrabold mb-1.5"
                  style={{
                    fontSize: '42px',
                    color: '#50c878',
                    fontFamily: FONTS.mono,
                    lineHeight: 1.1,
                    fontWeight: 800
                  }}
                >
                  {successRate}%
                </div>
                <p className="text-white text-[15px] leading-[1.3]" style={{ fontFamily: FONTS.mono, letterSpacing: '0.5px' }}>
                  Get Investor Meetings
                </p>
                <div className="w-[60%] h-[1px] bg-[#333333] mt-3"></div>
              </div>

              {/* Stat 3 - Scarcity */}
              <div className="flex flex-col">
                <div
                  className="font-extrabold mb-1.5"
                  style={{
                    fontSize: '42px',
                    color: '#ffffff',
                    fontFamily: FONTS.mono,
                    lineHeight: 1.1,
                    fontWeight: 800
                  }}
                >
                  {spotsLeft}
                </div>
                <p className="text-white text-[15px] leading-[1.3]" style={{ fontFamily: FONTS.mono, letterSpacing: '0.5px' }}>
                  Spots Left This Cohort
                </p>
                <p className="text-[13px] font-medium mt-1" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
                  Applications closing soon
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex lg:flex-col">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 max-w-2xl">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight" style={{ fontFamily: FONTS.heading }}>
                Proven Results, Wherever You Are
              </h2>
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Your location doesn't limit your potential. With the right guidance and support, we help founders from anywhere build companies that attract real investment and create lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="w-full mt-auto bg-black border-t border-gray-800 px-4 sm:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400">
            <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link to="/faq" className="hover:text-orange-600 transition-colors">FAQ</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
