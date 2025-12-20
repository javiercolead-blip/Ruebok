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
      <section className="snap-start relative min-h-screen bg-gray-50 paper-grid pt-[70px] flex items-center justify-center overflow-hidden">
      {/* Sticky Note - Top Left */}
      <div className="hidden lg:block absolute top-[9.25rem] left-12 w-[230px] z-10 rotate-initial-n8" style={{ animation: 'float-rotate-n8 10s ease-in-out infinite', animationDelay: '0s' }}>
        <div className="bg-yellow-100 rounded-2xl p-6 shadow-lg relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <div className="w-6 h-6 bg-red-500 rounded-full shadow-md"></div>
          </div>
          <p className="font-handwritten text-gray-800 text-[17px] leading-relaxed">
            Partner with founders<br />
            who understand local<br />
            markets and global<br />
            ambition.
          </p>
        </div>
      </div>

      {/* Criteria Image - Bottom Right */}
      <div className="hidden lg:block absolute bottom-[5%] right-[6%] z-5 rotate-6">
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
      <div className="hidden lg:block absolute top-32 right-12 w-[250px] z-10 rotate-initial-5" style={{ animation: 'float-rotate-5 10s ease-in-out infinite', animationDelay: '1s' }}>
        <div className="bg-white rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-[15px] font-bold">Startups Mentored</h3>
          </div>
          <div className="border-t border-gray-200 pt-3">
            <div className="text-center mb-2">
              <p className="text-[48px] font-bold text-black">{count}+</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Growing Every Quarter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Growth Card - Bottom Left */}
      <div className="hidden lg:block absolute bottom-24 left-12 w-[330px] z-10 rotate-initial-n5" style={{ animation: 'float-rotate-n5 10s ease-in-out infinite', animationDelay: '1.5s' }}>
        <div className="bg-white rounded-2xl p-5 shadow-xl">
          <h3 className="text-[15px] font-bold mb-4">Portfolio Growth</h3>

          {/* Company 1 */}
          <div className="mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-[13px] font-semibold">AgriTech Startup Alpha</p>
              </div>
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-gray-500">Seed Round</span>
              <span className="text-[11px] font-bold text-green-600">{agriGrowth}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${agriProgress}%` }}></div>
            </div>
          </div>

          {/* Company 2 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-[13px] font-semibold">FinTech Beta</p>
              </div>
              <div className="flex items-center -space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-gray-500">Series A</span>
              <span className="text-[11px] font-bold text-green-600">{fintechGrowth}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-1.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${fintechProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content - Centered */}
      <div className="text-center px-6 max-w-3xl mx-auto relative z-20 -mt-32">
        {/* Main Headline */}
        <h1 className="mb-4 leading-tight">
          <div className="text-[64px] md:text-[72px] font-bold text-black">
            Fund, mentor, scale.
          </div>
        </h1>

        {/* Subheadline */}
        <p className="subheadline text-[18px] md:text-[20px] text-gray-600 max-w-[500px] mx-auto mb-6 leading-relaxed">
          Empowering visionary founders across agriculture, fintech, and emerging sectors.
        </p>

        {/* CTA Button */}
        <a href="/apply" className="inline-block px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[16px] shadow-lg hover:bg-orange-600 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300">
          Partner With Us
        </a>
      </div>
    </section>

      {/* Backing Founders Section */}
      <section className="snap-start relative min-h-screen bg-gray-50 paper-grid pt-[70px] flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-lg aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden">
              <img src="/imageforcreative.png" alt="Founder" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-[56px] font-bold text-black leading-tight">
              Backing founders with purpose
            </h2>
            <div className="space-y-4 text-[18px] text-gray-700 leading-relaxed">
              <p>
                At Ruebok Ventures, we invest in more than just ideas—we invest in people with vision,
                resilience, and a deep understanding of the markets they serve.
              </p>
              <p>
                Our approach combines hands-on mentorship, strategic capital, and a network of industry
                experts to help transform bold ideas into sustainable businesses.
              </p>
            </div>
            <button className="mt-8 px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[16px] hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="snap-start relative h-screen bg-gray-50 paper-grid pt-[70px] flex flex-col overflow-hidden">
        <div className="flex-1 flex flex-col max-w-6xl mx-auto px-8 py-12 w-full">
          <div className="text-center mb-12">
            <h2 className="text-[56px] font-bold text-black leading-tight mb-4">
              How we help you succeed
            </h2>
            <p className="text-[18px] text-gray-600 max-w-2xl mx-auto">
              Beyond capital, we provide the support and resources you need to build a sustainable business.
            </p>
          </div>

          {/* Support Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            {/* Card 1 - Mentorship */}
            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-2">Expert Mentorship</h3>
              <p className="text-gray-600 text-[14px]">
                One-on-one guidance from experienced founders and industry leaders who've built successful companies.
              </p>
            </div>

            {/* Card 2 - Network Access */}
            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-2">Network Access</h3>
              <p className="text-gray-600 text-[14px]">
                Connect with strategic partners, customers, and other founders in our global portfolio community.
              </p>
            </div>

            {/* Card 3 - Operational Support */}
            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-2">Operational Tools</h3>
              <p className="text-gray-600 text-[14px]">
                Access to business management platforms, financial planning tools, and growth analytics software.
              </p>
            </div>

            {/* Card 4 - Funding Support */}
            <div className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold mb-2">Follow-On Funding</h3>
              <p className="text-gray-600 text-[14px]">
                Continued capital support through Series A and beyond, plus introductions to leading investors.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="w-full bg-white border-t border-gray-200 px-8 py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-[24px] font-bold text-orange-600">
              Ready to build something remarkable?
            </span>
            <a href="/apply" className="px-8 py-3 border-2 border-orange-600 text-orange-600 rounded-lg font-semibold text-[16px] hover:bg-orange-600 hover:text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Start Your Application
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
