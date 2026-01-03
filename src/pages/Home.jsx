import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TheStack from '../components/TheStack'

function Home() {
  const [count, setCount] = useState(0)
  const [agriProgress, setAgriProgress] = useState(0)
  const [agriGrowth, setAgriGrowth] = useState(0)
  const [fintechProgress, setFintechProgress] = useState(0)
  const [fintechGrowth, setFintechGrowth] = useState(0)

  useEffect(() => {
    // Set page title
    document.title = 'Ruebok'

    // Startups Mentored counter animation
    const targetCount = 50
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        const progress = currentStep / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(easeOut * targetCount))
      } else {
        setCount(targetCount)
        clearInterval(timer)
      }
    }, stepDuration)

    // Portfolio Growth animations with ease-in-out
    const portfolioDuration = 2000 // 2 seconds
    const portfolioSteps = 60
    const portfolioStepDuration = portfolioDuration / portfolioSteps

    let portfolioStep = 0
    const portfolioTimer = setInterval(() => {
      portfolioStep++
      if (portfolioStep <= portfolioSteps) {
        const progress = portfolioStep / portfolioSteps
        // Ease-in-out effect: slow start, fast middle, slow end
        const easeInOut = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2

        setAgriProgress(Math.floor(easeInOut * 60))
        setAgriGrowth(Math.floor(easeInOut * 340))
        setFintechProgress(Math.floor(easeInOut * 85))
        setFintechGrowth(Math.floor(easeInOut * 220))
      } else {
        setAgriProgress(60)
        setAgriGrowth(340)
        setFintechProgress(85)
        setFintechGrowth(220)
        clearInterval(portfolioTimer)
      }
    }, portfolioStepDuration)

    return () => {
      clearInterval(timer)
      clearInterval(portfolioTimer)
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
          <h1 className="uppercase leading-none" style={{ fontFamily: "'Oswald', sans-serif" }}>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              BUILD<span className="text-[#ff6700]">.</span>
            </span>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              SHIP<span className="text-[#ff6700]">.</span>
            </span>
            <span className="block text-[64px] lg:text-[96px] font-black text-white">
              PITCH<span className="text-[#ff6700]">.</span>
            </span>
          </h1>

          {/* Sub-Header */}
          <p className="text-lg text-[#a1a1a1] max-w-lg" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 300 }}>
            Turn your SaaS idea into a startup in 8 weeks, then pitch it to real investors. Global founders welcome. No equity taken.
          </p>

          {/* Primary Button */}
          <div className="space-y-4">
            <Link
              to="/apply"
              className="inline-block px-10 py-5 bg-white text-[#ff6700] font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
              style={{ borderRadius: 0 }}
            >
              START BUILDING
            </Link>

            {/* Trust Signal */}
            <p className="text-sm text-[#666666]" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              Applications closing for Cohort 2026.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Upcoming Milestones Carousel */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Upcoming Milestones Card */}
          <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-[#ff6700]/20 rounded-2xl shadow-2xl p-6">
            {/* Header */}
            <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">Upcoming Milestones</p>

            {/* Event Image Placeholder */}
            <div className="relative w-full h-48 bg-gradient-to-br from-[#ff6700]/20 to-orange-900/20 rounded-xl mb-4 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-[#ff6700]/40 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-sm text-gray-500">Event Meetup</p>
                </div>
              </div>
            </div>

            {/* Date & Title */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-bold text-[#ff6700]">AUGUST 15TH</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">WELCOME DAY & FOUNDER MEETUP</h3>
            </div>
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
            <div className="bg-[#1a1a1a] border border-gray-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all min-h-[200px] md:min-h-[420px] group relative">
              {/* Visual Area - Code Editor */}
              <div className="relative h-24 md:h-40 bg-[#0F0F0F]">
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <div className="inline-block px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md">
                    <span className="text-[10px] text-white font-semibold uppercase tracking-wider">Build</span>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="h-full flex flex-col">
                  <div className="bg-[#1a1a1a] px-4 py-2.5 flex items-center gap-2 border-b border-gray-800">
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
                      <div className="pl-4"><span className="text-white">build: </span><span className="text-[#ff6700]">"fast"</span><span className="text-gray-500">,</span></div>
                      <div className="pl-4"><span className="text-white">launch: </span><span className="text-purple-400">true</span><span className="text-gray-500">,</span></div>
                      <div className="pl-4"><span className="text-white">status: </span><span className="text-[#ff6700]">"ready"</span></div>
                      <div><span className="text-white">{'}'}</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-[#1a1a1a] p-3 md:p-6 border-t border-gray-800 flex-1 relative">
                <h3 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1">Build</h3>
                <p className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-3">Weeks 1-4</p>
                <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-6 md:mb-12">
                  Turn your idea into a working product with hands-on guidance and weekly milestones.
                </p>

                {/* Learn More Link */}
                <div className="absolute bottom-3 md:bottom-8 left-3 md:left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#ff6700] text-xs md:text-sm font-medium">Learn More</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2 - Mentorship */}
            <div className="bg-[#1a1a1a] border border-gray-700 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all min-h-[200px] md:min-h-[420px] group relative">
              {/* Visual Area - Mentor */}
              <div className="relative h-24 md:h-40 overflow-hidden">
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
              <div className="bg-[#1a1a1a] p-3 md:p-6 border-t border-gray-800 flex-1 relative">
                <h3 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1">Mentorship</h3>
                <p className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-3">Ongoing Support</p>
                <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-6 md:mb-12">
                  Get personalized feedback from founders who've scaled and VCs who've funded successful startups.
                </p>

                {/* Learn More Link */}
                <div className="absolute bottom-3 md:bottom-8 left-3 md:left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#ff6700] text-xs md:text-sm font-medium">Learn More</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3 - Funding */}
            <div className="bg-[#1a1a1a] shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border hover:border-[#ff6700] transition-all min-h-[200px] md:min-h-[420px] border border-gray-800 group relative">
              {/* Visual Area - Chart */}
              <div className="relative h-24 md:h-40 bg-[#0F0F0F] p-3 md:p-5 flex flex-col">
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
                      <div className="w-8 bg-[#ff6700] rounded-t-sm" style={{ height: '35%' }}></div>
                      <div className="w-8 bg-[#ff6700] rounded-t-sm" style={{ height: '52%' }}></div>
                      <div className="w-8 bg-[#ff6700] rounded-t-sm" style={{ height: '68%' }}></div>
                      <div className="w-8 bg-[#ff6700] rounded-t-sm" style={{ height: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="bg-[#1a1a1a] p-3 md:p-6 border-t border-gray-800 flex-1 relative">
                <h3 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1">Funding</h3>
                <p className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-3">Investor Connections</p>
                <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-6 md:mb-12">
                  Refine your pitch and connect directly with global investors actively seeking deals.
                </p>

                {/* Learn More Link */}
                <div className="absolute bottom-3 md:bottom-8 left-3 md:left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#ff6700] text-xs md:text-sm font-medium">Learn More</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4 - Network */}
            <div className="bg-[#1a1a1a] border border-neutral-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all min-h-[200px] md:min-h-[420px] group relative">
              {/* Visual Area - Network */}
              <div className="relative h-24 md:h-40 overflow-hidden">
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
              <div className="bg-[#1a1a1a] p-3 md:p-6 border-t border-gray-800 flex-1 relative">
                <h3 className="text-sm md:text-lg font-bold text-white mb-0.5 md:mb-1">Network</h3>
                <p className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-3">Lifetime Access</p>
                <p className="text-xs md:text-base text-gray-300 leading-relaxed mb-6 md:mb-12">
                  Join a global community of founders, mentors, and investors building together.
                </p>

                {/* Learn More Link */}
                <div className="absolute bottom-3 md:bottom-8 left-3 md:left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#ff6700] text-xs md:text-sm font-medium">Learn More</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
            <h2 className="text-[32px] sm:text-[40px] font-bold text-white leading-tight pl-7" style={{ fontFamily: "'Oswald', sans-serif" }}>
              Backing Founders With Purpose
            </h2>

            {/* Image */}
            <div className="relative flex items-center justify-center">
              <div className="w-4/5 aspect-square bg-black rounded-2xl shadow-2xl">
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 pl-7">
              <p className="text-[15px] text-gray-400 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                We invest in people with vision and resilience who deeply understand their markets.
              </p>
              <p className="text-[15px] text-gray-400 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                No matter who you are or where you're at—we'll help you build.
              </p>
              <Link to="/apply" className="inline-block px-10 py-5 bg-white text-[#ff6700] font-bold uppercase text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: 0 }}>
                APPLY TODAY
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-4 sm:space-y-6 max-w-lg pt-0 lg:pt-4 pl-7">
              <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>
                Backing Founders With Purpose
              </h2>
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                We invest in people with vision and resilience who deeply understand their markets.
              </p>
              <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                No matter who you are or where you're at—we'll help you build.
              </p>
              <Link to="/apply" className="inline-block px-10 py-5 bg-white text-[#ff6700] font-bold uppercase text-lg hover:bg-gray-100 transition-colors" style={{ borderRadius: 0 }}>
                APPLY TODAY
              </Link>
            </div>

            {/* Right Side - Placeholder */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="w-4/5 aspect-square bg-black rounded-2xl shadow-2xl">
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="w-full bg-black border-t border-gray-800 px-4 sm:px-8 py-4">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400">
            <Link to="/about" className="hover:text-[#ff6700] transition-colors">About</Link>
            <Link to="/faq" className="hover:text-[#ff6700] transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-[#ff6700] transition-colors">Contact</Link>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6700] transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6700] transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6700] transition-colors">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
