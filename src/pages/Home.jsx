import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)
  const [agriProgress, setAgriProgress] = useState(0)
  const [agriGrowth, setAgriGrowth] = useState(0)
  const [fintechProgress, setFintechProgress] = useState(0)
  const [fintechGrowth, setFintechGrowth] = useState(0)

  useEffect(() => {
    // Set page title
    document.title = 'Ruebok Ventures | Home'

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

        {/* RIGHT COLUMN - Terminal Window */}
        <div className="terminal-window p-0 overflow-hidden">
          {/* Window Controls Bar */}
          <div className="bg-[#0d0d0d] px-4 py-3 flex items-center gap-2 border-b border-[#333333]">
            <div className="w-3 h-3 rounded-full bg-[#8b0000] opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-[#8b8b00] opacity-70"></div>
            <div className="w-3 h-3 rounded-full bg-[#008b00] opacity-70"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-3" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            <div className="text-[#00ff00] text-sm">
              <span className="text-white">{'>'}</span> INITIALIZING RUEBOK_PROTOCOL...
            </div>
            <div className="text-[#00ff00] text-sm">
              <span className="text-white">{'>'}</span> LOADING MODULES: MVP_BUILDER...
            </div>
            <div className="text-[#00ff00] text-sm">
              <span className="text-white">{'>'}</span> CONNECTING TO MENTOR_NETWORK...
            </div>
            <div className="text-[#00ff00] text-sm">
              <span className="text-white">{'>'}</span> INVESTOR_DATABASE: ONLINE
            </div>
            <div className="text-[#00ff00] text-sm">
              <span className="text-white">{'>'}</span> 8_WEEK_COUNTDOWN: READY
            </div>
            <div className="text-white text-sm mt-6">
              <span className="text-[#00ff00]">{'>'}</span> STATUS: <span className="text-[#ff6700] font-bold">READY TO SHIP<span className="animate-pulse">_</span></span>
            </div>
          </div>
        </div>

      </div>
    </section>

      {/* Backing Founders Section */}
      <section className="snap-start relative min-h-screen bg-[#111111] dark-grid pt-[40px] lg:pt-[70px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center -mt-8 lg:mt-0">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-lg aspect-[1/1] lg:aspect-[1/1] border border-gray-600 shadow-2xl overflow-hidden" style={{ borderRadius: 0 }}>
              <img src="/imageforcreative.png" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
              BACKING FOUNDERS WITH PURPOSE
            </h2>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-[14px] sm:text-[16px] lg:text-[18px] text-gray-400 leading-relaxed" style={{ fontFamily: "'Roboto Mono', monospace" }}>
              <p>
                At Ruebok Ventures, we invest in more than just ideas—we invest in people with vision,
                resilience, and a deep understanding of the markets they serve.
              </p>
              <p>
                Our approach combines hands-on mentorship, strategic capital, and a network of industry
                experts to help transform bold ideas into sustainable businesses.
              </p>
            </div>
            <button className="mt-4 sm:mt-6 lg:mt-8 px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#ff6700] text-[#ff6700] font-bold text-[14px] sm:text-[16px] uppercase hover:bg-[#ff6700] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ borderRadius: 0, fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}>
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="snap-start relative h-screen bg-[#111111] dark-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 lg:py-12 w-full">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight mb-2 sm:mb-3 lg:mb-4">
              How we help you succeed
            </h2>
            <p className="text-[13px] sm:text-[16px] lg:text-[18px] text-gray-300 max-w-2xl mx-auto px-4">
              Beyond capital, we provide the support and resources you need to build a sustainable business.
            </p>
          </div>

          {/* Support Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 flex-1">
            {/* Card 1 - Mentorship */}
            <div className="border border-neutral-800 hover:border-[#ff6700] transition-all p-3 sm:p-4 lg:p-5 relative overflow-hidden group" style={{ borderRadius: 0 }}>
              {/* Layer 1: Background Image */}
              <img
                src="/mentorship.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />

              {/* Layer 2: Dark Overlay */}
              <div className="absolute inset-0 bg-neutral-950/90 group-hover:bg-neutral-950/70 transition-all duration-700"></div>

              {/* Layer 3: Content */}
              <div className="relative z-10">
                {/* Orange Square Icon */}
                <div className="w-3 h-3 bg-[#ff6700] mb-2 sm:mb-3 lg:mb-4" style={{ borderRadius: 0 }}></div>
                {/* Watermark Number */}
                <div className="absolute top-2 right-3 text-[80px] font-bold text-white opacity-5 select-none" style={{ fontFamily: "'Oswald', sans-serif" }}>01</div>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>MENTORSHIP</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-700 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                  One-on-one guidance from experienced founders and industry leaders who've built successful companies.
                </p>
              </div>
            </div>

            {/* Card 2 - Network Access */}
            <div className="border border-neutral-800 hover:border-[#ff6700] transition-all p-3 sm:p-4 lg:p-5 relative overflow-hidden group" style={{ borderRadius: 0 }}>
              {/* Layer 1: Background Image */}
              <img
                src="/Network.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />

              {/* Layer 2: Dark Overlay */}
              <div className="absolute inset-0 bg-neutral-950/90 group-hover:bg-neutral-950/70 transition-all duration-700"></div>

              {/* Layer 3: Content */}
              <div className="relative z-10">
                {/* Orange Square Icon */}
                <div className="w-3 h-3 bg-[#ff6700] mb-2 sm:mb-3 lg:mb-4" style={{ borderRadius: 0 }}></div>
                {/* Watermark Number */}
                <div className="absolute top-2 right-3 text-[80px] font-bold text-white opacity-5 select-none" style={{ fontFamily: "'Oswald', sans-serif" }}>02</div>
                <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>THE NETWORK</h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-700 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                  Connect with strategic partners, customers, and other founders in our global portfolio community.
                </p>
              </div>
            </div>

            {/* Card 3 - Operational Support */}
            <div className="bg-[#1a1a1a] border border-neutral-800 hover:border-[#ff6700] transition-all p-3 sm:p-4 lg:p-5 relative" style={{ borderRadius: 0 }}>
              {/* Orange Square Icon */}
              <div className="w-3 h-3 bg-[#ff6700] mb-2 sm:mb-3 lg:mb-4" style={{ borderRadius: 0 }}></div>
              {/* Watermark Number */}
              <div className="absolute top-2 right-3 text-[80px] font-bold text-white opacity-5 select-none" style={{ fontFamily: "'Oswald', sans-serif" }}>03</div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>THE STACK</h3>
              <p className="text-gray-400 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                Access to business management platforms, financial planning tools, and growth analytics software.
              </p>
            </div>

            {/* Card 4 - Funding Support */}
            <div className="bg-[#1a1a1a] border border-neutral-800 hover:border-[#ff6700] transition-all p-3 sm:p-4 lg:p-5 relative" style={{ borderRadius: 0 }}>
              {/* Orange Square Icon */}
              <div className="w-3 h-3 bg-[#ff6700] mb-2 sm:mb-3 lg:mb-4" style={{ borderRadius: 0 }}></div>
              {/* Watermark Number */}
              <div className="absolute top-2 right-3 text-[80px] font-bold text-white opacity-5 select-none" style={{ fontFamily: "'Oswald', sans-serif" }}>04</div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>FUNDING INJECTION</h3>
              <p className="text-gray-400 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                Continued capital support through Series A and beyond, plus introductions to leading investors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="w-full bg-[#111111] border-t border-gray-800 px-4 sm:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-orange-600 text-center sm:text-left">
              Ready to build something remarkable?
            </span>
            <Link to="/apply" className="px-6 py-3 sm:px-8 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Start Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
