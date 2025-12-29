import { useState, useEffect } from 'react'

function TheStack() {
  const [isHovered, setIsHovered] = useState(false)
  const [revenue, setRevenue] = useState(0)
  const [downloads, setDownloads] = useState(0)
  const [users, setUsers] = useState(0)

  useEffect(() => {
    // Animate revenue to $100
    const revenueInterval = setInterval(() => {
      setRevenue(prev => {
        if (prev >= 100) {
          clearInterval(revenueInterval)
          return 100
        }
        return prev + Math.ceil((100 - prev) / 10)
      })
    }, 50)

    // Animate downloads to 1,247
    const downloadsInterval = setInterval(() => {
      setDownloads(prev => {
        if (prev >= 1247) {
          clearInterval(downloadsInterval)
          return 1247
        }
        return prev + Math.ceil((1247 - prev) / 15)
      })
    }, 40)

    // Animate users to 89
    const usersInterval = setInterval(() => {
      setUsers(prev => {
        if (prev >= 89) {
          clearInterval(usersInterval)
          return 89
        }
        return prev + Math.ceil((89 - prev) / 12)
      })
    }, 60)

    return () => {
      clearInterval(revenueInterval)
      clearInterval(downloadsInterval)
      clearInterval(usersInterval)
    }
  }, [])

  return (
    <div
      className="hidden lg:block relative w-[500px] h-[500px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Layer 1: Code Editor (Back Card) */}
      <div
        className={`absolute top-[-48px] left-[28px] w-[380px] h-[220px] transition-all duration-700 ease-out ${
          isHovered ? 'translate-x-[-32px] translate-y-[-48px]' : ''
        }`}
        style={{
          transform: `rotateY(12deg) rotateX(6deg) ${isHovered ? 'translateX(-32px) translateY(-48px)' : ''}`,
          zIndex: 10,
          transformStyle: 'preserve-3d',
          animation: 'float1 12s ease-in-out infinite'
        }}
      >
        <div className="bg-[#0F0F0F] border border-gray-800 shadow-2xl opacity-90 h-full flex flex-col" style={{ borderRadius: '8px' }}>
          {/* Window Header */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-gray-800" style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-xs text-gray-400 ml-2 font-mono">startup_config.ts</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm leading-relaxed flex-1 flex items-center">
            <div className="space-y-1">
              <div>
                <span className="text-purple-400">const</span>
                <span className="text-white"> config = {'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-white">region: </span>
                <span className="text-[#ff6700]">"global"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-white">mode: </span>
                <span className="text-[#ff6700]">"production"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-white">scaling: </span>
                <span className="text-purple-400">true</span>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
                <span className="text-white">;</span>
              </div>
              <div className="mt-3">
                <span className="text-gray-500">// Deploy infrastructure</span>
              </div>
              <div>
                <span className="text-blue-400">init</span>
                <span className="text-white">(config);</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2: Mentor Feedback Player (Middle Card) */}
      <div
        className={`absolute top-[110px] left-[100px] w-[380px] h-[220px] transition-all duration-700 ease-out ${
          isHovered ? 'translate-x-[10px] translate-y-[10px]' : ''
        }`}
        style={{
          transform: `rotateY(6deg) rotateX(3deg) ${isHovered ? 'translateX(10px) translateY(10px)' : ''}`,
          zIndex: 20,
          transformStyle: 'preserve-3d',
          animation: 'float2 14s ease-in-out infinite'
        }}
      >
        <div className="bg-[#0F0F0F] border border-gray-700 shadow-2xl relative overflow-hidden h-full" style={{ borderRadius: '8px' }}>
          {/* Mentor Image Background */}
          <img
            src="/mentorpic.png"
            alt="Mentor"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content Container - Centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Play Button */}
            <button className="relative z-10 w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>

          {/* Bottom Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            {/* Mentor Review Badge */}
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20" style={{ borderRadius: '6px' }}>
              <span className="text-xs text-white font-semibold uppercase tracking-wider">Mentor Review</span>
            </div>

            {/* Progress Bar */}
            <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-[#ff6700] w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Layer 3: Metrics Dashboard (Front Card) */}
      <div
        className={`absolute top-[280px] left-[188px] w-[380px] h-[220px] transition-all duration-700 ease-out ${
          isHovered ? 'translate-x-[48px] translate-y-[64px]' : ''
        }`}
        style={{
          zIndex: 30,
          transformStyle: 'preserve-3d',
          animation: 'float3 16s ease-in-out infinite'
        }}
      >
        <div
          className="bg-gray-900/80 backdrop-blur-md border border-white/10 shadow-2xl ring-1 ring-white/10 relative overflow-hidden h-full flex flex-col justify-center"
          style={{ borderRadius: '8px' }}
        >
          {/* Orange accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6700]"></div>

          <div className="p-6 pl-8 space-y-6">
            {/* Revenue Metric */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium mb-0.5">First Revenue</p>
                <p className="text-2xl text-white font-bold">${revenue.toFixed(2)}</p>
              </div>
            </div>

            {/* Downloads Metric */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium mb-0.5">Downloads</p>
                <p className="text-2xl text-white font-bold">{downloads.toLocaleString()}</p>
              </div>
            </div>

            {/* Active Users Metric */}
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 font-medium mb-0.5">Active Users</p>
                <p className="text-2xl text-white font-bold">{users}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  )
}

export default TheStack
