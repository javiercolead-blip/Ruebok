import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TheStack from '../components/TheStack'
import { COLORS, FONTS } from '../constants'
import { useCounterAnimation } from '../hooks/useCounterAnimation'

function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])

  // Use counter animation hook for all animated numbers
  const count = useCounterAnimation(50, 2000, 'easeOut')
  const agriProgress = useCounterAnimation(60, 2000, 'easeInOut')
  const agriGrowth = useCounterAnimation(340, 2000, 'easeInOut')
  const fintechProgress = useCounterAnimation(85, 2000, 'easeInOut')
  const fintechGrowth = useCounterAnimation(220, 2000, 'easeInOut')

  // Helper functions for card selection
  const toggleCard = (cardId) => {
    setSelectedCards(prev =>
      prev.includes(cardId)
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    )
  }

  const isCardSelected = (cardId) => selectedCards.includes(cardId)

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

    // Carousel rotation timer - cycles every 4 seconds
    const carouselTimer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 4)
    }, 4000)

    return () => {
      clearInterval(carouselTimer)
    }
  }, [])

  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      {/* Hero Section - Industrial Design */}
      <section className="snap-start relative min-h-screen dark-grid pt-[70px] flex items-center justify-center overflow-hidden">
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
          <p className="text-lg max-w-lg" style={{ color: COLORS.textLight, fontFamily: FONTS.mono, fontWeight: 300 }}>
            Turn your SaaS idea into a startup in 8 weeks, then pitch it to real investors. Global founders welcome. No equity taken.
          </p>

          {/* Primary Button */}
          <div className="space-y-4">
            <Link
              to="/apply"
              className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
              style={{ borderRadius: 0 }}
            >
              START BUILDING
            </Link>

            {/* Trust Signal */}
            <p className="text-sm text-neutral-500" style={{ fontFamily: FONTS.mono }}>
              Applications closing for Cohort 2026.
            </p>
          </div>
        </div>

      </div>
    </section>

      {/* How We Help Section */}
      <section className="snap-start relative h-screen bg-[#111111] dark-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-6 lg:py-10 w-full">
          <div className="text-center mb-3 sm:mb-6 lg:mb-8">
            <h2 className="text-[24px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight mb-1 sm:mb-3 lg:mb-4">
              How we help you succeed
            </h2>
            <p className="text-[11px] sm:text-[16px] lg:text-[18px] text-gray-300 max-w-2xl mx-auto px-4">
              From idea to investment in four focused phases
            </p>
          </div>

          {/* Phase Cards Grid - Horizontal Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {/* Card 1 - Build */}
            <div className="border border-gray-800 shadow-2xl rounded-xl overflow-hidden transition-all h-[280px] md:min-h-[420px] group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray, borderColor: COLORS.border }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.primary} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}>

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

              {/* Mobile: Two-column grid layout */}
              <div className="grid grid-cols-2 gap-2 h-full md:hidden p-2">
                {/* Left Column - Text Content */}
                <div className="flex flex-col justify-between">
                  {/* Badge */}
                  <div className="mb-2">
                    <div className="inline-block px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[9px] text-white font-semibold uppercase tracking-wider">Build</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-white mb-1">Build</h3>
                    <p className="text-[9px] text-gray-400 mb-2">Weeks 1-4</p>
                    <p className="text-[10px] text-gray-300 leading-relaxed mb-3">
                      Turn your idea into a working product with hands-on guidance
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('build')}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <span className="text-[10px] font-medium" style={{ color: COLORS.primary }}>
                      Learn More
                    </span>
                    <svg className="w-3 h-3" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Right Column - Code Editor Visual */}
                <div className="relative rounded-lg overflow-hidden" style={{ backgroundColor: COLORS.darkSection }}>
                  <div className="h-full flex flex-col">
                    <div className="px-2 py-1.5 flex items-center gap-1.5 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray }}>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-[8px] text-gray-400 font-mono">startup.ts</span>
                    </div>
                    <div className="p-2 font-mono text-[8px] leading-relaxed flex-1">
                      <div className="space-y-0.5">
                        <div><span className="text-purple-400">const</span><span className="text-white"> mvp = {'{'}</span></div>
                        <div className="pl-2"><span className="text-white">build: </span><span style={{ color: COLORS.primary }}>"fast"</span></div>
                        <div className="pl-2"><span className="text-white">launch: </span><span className="text-purple-400">true</span></div>
                        <div className="pl-2"><span className="text-white">status: </span><span style={{ color: COLORS.primary }}>"ready"</span></div>
                        <div><span className="text-white">{'}'}</span></div>
                      </div>
                    </div>
                  </div>
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
            <div className="border border-gray-700 shadow-2xl rounded-xl overflow-hidden hover:border-orange-600 transition-all h-[280px] md:min-h-[420px] group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

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
                <div className="flex flex-col justify-between">
                  {/* Badge */}
                  <div className="mb-2">
                    <div className="inline-block px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[9px] text-white font-semibold uppercase tracking-wider">Mentorship</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-white mb-1">Mentorship</h3>
                    <p className="text-[9px] text-gray-400 mb-2">Ongoing Support</p>
                    <p className="text-[10px] text-gray-300 leading-relaxed mb-3">
                      Get personalized feedback from founders who've scaled startups
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('mentorship')}
                    className="flex items-center gap-1 cursor-pointer"
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
            <div className="shadow-2xl rounded-xl overflow-hidden hover:border hover:border-orange-600 transition-all h-[280px] md:min-h-[420px] border border-gray-800 group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

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
                <div className="flex flex-col justify-between">
                  {/* Badge */}
                  <div className="mb-2">
                    <div className="inline-block px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[9px] text-white font-semibold uppercase tracking-wider">Funding</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-white mb-1">Funding</h3>
                    <p className="text-[9px] text-gray-400 mb-2">Investor Connections</p>
                    <p className="text-[10px] text-gray-300 leading-relaxed mb-3">
                      Refine your pitch and connect with global investors seeking deals
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('funding')}
                    className="flex items-center gap-1 cursor-pointer"
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
            <div className="border border-neutral-800 shadow-2xl rounded-xl overflow-hidden hover:border-orange-600 transition-all h-[280px] md:min-h-[420px] group relative md:flex md:flex-col" style={{ backgroundColor: COLORS.darkGray }}>

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
                <div className="flex flex-col justify-between">
                  {/* Badge */}
                  <div className="mb-2">
                    <div className="inline-block px-2 py-0.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                      <span className="text-[9px] text-white font-semibold uppercase tracking-wider">Network</span>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-sm font-bold text-white mb-1">Network</h3>
                    <p className="text-[9px] text-gray-400 mb-2">Lifetime Access</p>
                    <p className="text-[10px] text-gray-300 leading-relaxed mb-3">
                      Join a global community of founders and investors building together
                    </p>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard('network')}
                    className="flex items-center gap-1 cursor-pointer"
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

      {/* Backing Founders Section */}
      <section className="snap-start relative min-h-screen bg-[#111111] dark-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 max-w-7xl mx-auto px-12 pt-8 sm:pt-10 lg:pt-12 w-full">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col space-y-4">
            {/* Title */}
            <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-tight pl-7" style={{ fontFamily: FONTS.heading }}>
              Backing Founders With Purpose
            </h2>

            {/* Image */}
            <div className="relative flex items-center justify-start pl-7 -mt-4">
              <div className="relative w-3/5 max-w-xs">
                <div className="aspect-[2/3] rounded-2xl shadow-2xl overflow-hidden">
                  <img src="/ruebokguy.png" alt="Ruebok Founder" className="w-full h-[120%] object-cover object-top" />
                </div>
                {/* Floating Description */}
                <div className="absolute -bottom-3 left-0 right-0 px-4">
                  <p className="text-white font-semibold text-sm">
                    Rajesh Patel <span className="text-[#4a9eff]">SwiftLogix</span> <span className="text-gray-400">— Raised $2.5M Series A</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 pl-7">
              <p className="text-[15px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                We invest in people with vision and resilience who deeply understand their markets.
              </p>
              <p className="text-[15px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                No matter who you are or where you're at—we'll help you build.
              </p>
              <Link to="/apply" className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: 0 }}>
                APPLY TODAY
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-4 sm:space-y-6 max-w-lg pt-0 lg:pt-4 pl-7">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight" style={{ fontFamily: FONTS.heading }}>
                Backing Founders With Purpose
              </h2>
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                We invest in people with vision and resilience who deeply understand their markets.
              </p>
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                No matter who you are or where you're at—we'll help you build.
              </p>
              <Link to="/apply" className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: 0 }}>
                APPLY TODAY
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex items-end justify-start lg:justify-start pl-10">
              <div className="relative w-2/3 max-w-sm">
                <div className="aspect-[2/3] rounded-2xl shadow-2xl overflow-hidden">
                  <img src="/ruebokguy.png" alt="Ruebok Founder" className="w-full h-[120%] object-cover object-top" />
                </div>
                {/* Floating Description */}
                <div className="absolute -bottom-4 left-0 right-0 px-6">
                  <p className="text-white font-semibold text-base">
                    Rajesh Patel <span className="text-[#4a9eff]">SwiftLogix</span> <span className="text-gray-400">— Raised $2.5M Series A</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="w-full bg-black border-t border-gray-800 px-4 sm:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400">
            <Link to="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link to="/faq" className="hover:text-orange-600 transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
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
