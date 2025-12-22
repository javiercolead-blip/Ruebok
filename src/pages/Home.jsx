import { useState, useEffect } from 'react'

function Home() {
  const [count, setCount] = useState(0)
  const [agriProgress, setAgriProgress] = useState(0)
  const [agriGrowth, setAgriGrowth] = useState(0)
  const [fintechProgress, setFintechProgress] = useState(0)
  const [fintechGrowth, setFintechGrowth] = useState(0)

  useEffect(() => {
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
      {/* Hero Section */}
      <section className="snap-start relative min-h-screen bg-black lg:bg-gray-50 lg:paper-grid pt-[70px] flex items-center justify-center overflow-hidden">
      {/* Sticky Note - Top Left */}
      <div className="hidden lg:block absolute top-[9.25rem] left-12 w-[230px] z-10 rotate-initial-n8" style={{ animation: 'float-rotate-n8 10s ease-in-out infinite', animationDelay: '0s' }}>
        <div className="bg-yellow-100 rounded-2xl p-6 shadow-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="w-6 h-6 bg-red-500 rounded-full shadow-md"></div>
          </div>
          <p className="font-handwritten text-gray-800 text-[24px] leading-relaxed">
            Learn what it takes<br />
            to build a startup<br />
            that lasts :)
          </p>
        </div>
      </div>

      {/* Criteria Image - Bottom Right */}
      <div className="hidden lg:block absolute bottom-[5%] right-[3%] z-5 rotate-6">
        <img src="/criteria.png" alt="Investment Criteria" className="w-auto h-auto max-w-[420px] max-h-[370px] object-contain" />
      </div>

      {/* Checkmark Badge */}
      <div className="hidden lg:block absolute top-[25rem] left-56 w-[60px] h-[60px] z-10 rotate-initial-n4" style={{ animation: 'float-rotate-n4 10s ease-in-out infinite', animationDelay: '0.5s' }}>
        <div className="bg-white rounded-xl shadow-lg flex items-center justify-center w-full h-full">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Startups Mentored Card - Top Right */}
      <div className="hidden lg:block absolute top-32 right-12 w-[230px] z-10 rotate-initial-5" style={{ animation: 'float-rotate-5 10s ease-in-out infinite', animationDelay: '1s' }}>
        <div className="bg-white rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-[15px] font-bold">Startups Mentored</h3>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="flex items-start gap-4">
              <p className="text-[48px] font-bold text-black leading-none mt-1" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{count}+</p>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-[13px] text-gray-600 leading-tight font-medium">Growing<br />Every<br />Quarter</span>
                <svg className="w-5 h-5 text-gray-600 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Capital Raised Card - Bottom Left */}
      <div className="hidden lg:block absolute bottom-24 left-12 w-[330px] z-10 rotate-initial-n5" style={{ animation: 'float-rotate-n5 10s ease-in-out infinite', animationDelay: '1.5s' }}>
        <div className="bg-white rounded-2xl p-5 shadow-xl">
          <div className="mb-4">
            <h3 className="text-[15px] font-bold text-gray-900">Capital Raised</h3>
            <p className="text-[11px] text-gray-500">By Ruebok Founders</p>
          </div>

          {/* Graph Container */}
          <div className="relative h-[140px] mt-6">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-gray-500">
              <span>$1M</span>
              <span>$750K</span>
              <span>$500K</span>
              <span>$250K</span>
              <span>$0</span>
            </div>

            {/* Grid lines */}
            <div className="absolute left-12 right-0 top-0 bottom-6 flex flex-col justify-between">
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
              <div className="border-t border-gray-100"></div>
            </div>

            {/* SVG Line Graph */}
            <svg className="absolute left-12 right-0 top-0 bottom-6" viewBox="0 0 280 140" preserveAspectRatio="none">
              {/* Line path - exponential growth curve */}
              <polyline
                points="0,130 23,128 46,124 69,118 92,108 115,95 138,78 161,58 184,42 207,28 230,18 253,10"
                fill="none"
                stroke="#86EFAC"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data point circles */}
              <circle cx="0" cy="130" r="3" fill="#22C55E" />
              <circle cx="23" cy="128" r="3" fill="#22C55E" />
              <circle cx="46" cy="124" r="3" fill="#22C55E" />
              <circle cx="69" cy="118" r="3" fill="#22C55E" />
              <circle cx="92" cy="108" r="3" fill="#22C55E" />
              <circle cx="115" cy="95" r="3" fill="#22C55E" />
              <circle cx="138" cy="78" r="3" fill="#22C55E" />
              <circle cx="161" cy="58" r="3" fill="#22C55E" />
              <circle cx="184" cy="42" r="3" fill="#22C55E" />
              <circle cx="207" cy="28" r="3" fill="#22C55E" />
              <circle cx="230" cy="18" r="3" fill="#22C55E" />

              {/* Larger circle at the end */}
              <circle cx="253" cy="10" r="5" fill="#22C55E" />
            </svg>

            {/* X-axis labels */}
            <div className="absolute left-12 right-0 bottom-0 flex justify-between text-[10px] text-gray-500">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Background Image - Only visible on mobile */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/frontphoto.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.5'
          }}
        ></div>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0, 0, 0, 0.4)'
          }}
        ></div>
        {/* Gradient overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(249, 250, 251, 0), rgba(249, 250, 251, 1))'
          }}
        ></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="text-center px-6 max-w-3xl mx-auto relative z-20 -mt-20">
        {/* Main Headline */}
        <h1 className="mb-4 leading-tight">
          <div className="text-[48px] sm:text-[56px] md:text-[72px] font-bold text-white lg:text-black">
            Fund, mentor, scale.
          </div>
        </h1>

        {/* Subheadline */}
        <p className="subheadline text-[20px] sm:text-[22px] md:text-[20px] text-white lg:text-gray-600 max-w-[500px] mx-auto mb-16 leading-relaxed">
          Empowering visionary founders across agriculture, fintech, and emerging sectors.
        </p>

        {/* CTA Button */}
        <a href="/apply" className="inline-block px-6 py-3 sm:px-8 sm:py-4 bg-orange-600 text-white rounded-lg font-semibold text-[16px] sm:text-[18px] md:text-[20px] shadow-lg hover:bg-orange-700 hover:shadow-xl hover:scale-105 transition-all duration-300" style={{ fontFamily: 'Playfair Display, Georgia, serif', letterSpacing: '0.5px' }}>
          Join Wait List
        </a>

        {/* Scroll Down Arrow - Mobile Only */}
        <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-30" style={{ animation: 'bounce-arrow 3s ease-in-out infinite' }}>
          <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 16l-6-6h12z" />
          </svg>
        </div>
      </div>
    </section>

      {/* Backing Founders Section */}
      <section className="snap-start relative min-h-screen bg-black lg:bg-gray-50 paper-grid pt-[70px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-lg aspect-[4/3] lg:aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <img src="/imageforcreative.png" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white lg:text-black leading-tight">
              Backing founders with purpose
            </h2>
            <div className="space-y-2 sm:space-y-3 lg:space-y-4 text-[14px] sm:text-[16px] lg:text-[18px] text-gray-300 lg:text-gray-700 leading-relaxed">
              <p>
                At Ruebok Ventures, we invest in more than just ideas—we invest in people with vision,
                resilience, and a deep understanding of the markets they serve.
              </p>
              <p>
                Our approach combines hands-on mentorship, strategic capital, and a network of industry
                experts to help transform bold ideas into sustainable businesses.
              </p>
            </div>
            <button className="mt-4 sm:mt-6 lg:mt-8 px-6 py-3 sm:px-8 sm:py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="snap-start relative h-screen bg-black lg:bg-gray-50 paper-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 lg:py-12 w-full">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-[28px] sm:text-[40px] lg:text-[56px] font-bold text-white lg:text-black leading-tight mb-2 sm:mb-3 lg:mb-4">
              How we help you succeed
            </h2>
            <p className="text-[13px] sm:text-[16px] lg:text-[18px] text-gray-300 lg:text-gray-600 max-w-2xl mx-auto px-4">
              Beyond capital, we provide the support and resources you need to build a sustainable business.
            </p>
          </div>

          {/* Support Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 flex-1">
            {/* Card 1 - Mentorship */}
            <div className="bg-gray-900 lg:bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white lg:text-black">Expert Mentorship</h3>
              <p className="text-gray-400 lg:text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug">
                One-on-one guidance from experienced founders and industry leaders who've built successful companies.
              </p>
            </div>

            {/* Card 2 - Network Access */}
            <div className="bg-gray-900 lg:bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white lg:text-black">Network Access</h3>
              <p className="text-gray-400 lg:text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug">
                Connect with strategic partners, customers, and other founders in our global portfolio community.
              </p>
            </div>

            {/* Card 3 - Operational Support */}
            <div className="bg-gray-900 lg:bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-green-100 rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white lg:text-black">Operational Tools</h3>
              <p className="text-gray-400 lg:text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug">
                Access to business management platforms, financial planning tools, and growth analytics software.
              </p>
            </div>

            {/* Card 4 - Funding Support */}
            <div className="bg-gray-900 lg:bg-white rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-1 sm:mb-2 text-white lg:text-black">Follow-On Funding</h3>
              <p className="text-gray-400 lg:text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px] leading-snug">
                Continued capital support through Series A and beyond, plus introductions to leading investors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="w-full bg-gray-900 lg:bg-white border-t border-gray-800 lg:border-gray-200 px-4 sm:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[18px] sm:text-[20px] md:text-[24px] font-bold text-orange-600 text-center sm:text-left">
              Ready to build something remarkable?
            </span>
            <a href="/apply" className="px-6 py-3 sm:px-8 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[14px] sm:text-[16px] hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap">
              Start Your Application
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
