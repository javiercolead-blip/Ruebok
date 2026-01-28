import { useState } from 'react'
import { COLORS } from '../constants'

function TheStack() {
  const [isHovered, setIsHovered] = useState(false)

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
          <div className="px-4 py-3 flex items-center gap-2 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray, borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <span className="text-xs text-gray-400 ml-2 font-mono">startup_config.ts</span>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-xs leading-relaxed flex-1 flex items-center overflow-hidden">
            <div className="space-y-1">
              <div>
                <span className="text-purple-400">const</span>
                <span className="text-white"> config = {'{'}</span>
              </div>
              <div className="pl-4">
                <span className="text-white">region: </span>
                <span style={{ color: COLORS.primary }}>"global"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-white">mode: </span>
                <span style={{ color: COLORS.primary }}>"prod"</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-white">scale: </span>
                <span className="text-purple-400">true</span>
              </div>
              <div>
                <span className="text-white">{'}'}</span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500">// Deploy</span>
              </div>
              <div>
                <span className="text-blue-400">init</span>
                <span className="text-white">(config)</span>
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
        <div className="bg-[#0F0F0F] border border-gray-800 shadow-2xl relative overflow-hidden h-full p-3" style={{ borderRadius: '8px' }}>
          {/* Mentor Image with border and rounded corners */}
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-gray-700">
            <img
              src="/mentorpic.png"
              alt="Mentor"
              className="absolute inset-0 w-full h-full object-cover brightness-125"
            />

            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content Container - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* Play Button */}
              <button className="relative z-10 w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>

            {/* Top Left Overlay */}
            <div className="absolute top-4 left-4">
              {/* Mentor Review Badge */}
              <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20" style={{ borderRadius: '6px' }}>
                <span className="text-xs text-white font-semibold uppercase tracking-wider">Mentor Review</span>
              </div>
            </div>

            {/* Bottom Overlay - Progress Bar */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-[40%] rounded-full" style={{ backgroundColor: COLORS.primary }}></div>
              </div>
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
          className="bg-white shadow-2xl relative overflow-hidden h-full flex flex-col"
          style={{ borderRadius: '8px' }}
        >
          <div className="p-5 flex-1 flex flex-col">
            {/* Y-Axis Label */}
            <div className="text-[10px] text-gray-600 font-semibold mb-2">REVENUE ($)</div>

            {/* Chart Area */}
            <div className="flex-1 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
              </div>

              {/* Histogram Bars */}
              <div className="absolute inset-0 flex items-end justify-around px-4 pb-1">
                <div className="w-8 rounded-t" style={{ backgroundColor: COLORS.primary, height: '35%' }}></div>
                <div className="w-8 rounded-t" style={{ backgroundColor: COLORS.primary, height: '48%' }}></div>
                <div className="w-8 rounded-t" style={{ backgroundColor: COLORS.primary, height: '62%' }}></div>
                <div className="w-8 rounded-t" style={{ backgroundColor: COLORS.primary, height: '71%' }}></div>
                <div className="w-8 rounded-t" style={{ backgroundColor: COLORS.primary, height: '88%' }}></div>
              </div>
            </div>

            {/* X-Axis Label */}
            <div className="text-[10px] text-gray-600 font-semibold text-center mt-2">USERS</div>
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
