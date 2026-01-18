import { Link } from 'react-router-dom'
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

function DesktopStatRow({ value, label, color, animValue }) {
  return (
    <div className="flex items-center gap-4" style={{
      opacity: animValue > 0 ? 1 : 0.7,
      transform: `scale(${animValue > 0 ? 1 : 0.98})`,
      transition: 'all 0.3s ease-out'
    }}>
      <div
        className="font-bold"
        style={{
          fontSize: '40px',
          color,
          fontFamily: FONTS.heading,
          lineHeight: 1,
          minWidth: '140px'
        }}
      >
        {value}
      </div>
      <p className="text-white text-[15px] leading-[1.4]" style={{ fontFamily: FONTS.mono, fontWeight: 400 }}>
        {label}
      </p>
    </div>
  )
}

function RotatingGlobe() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Globe Container */}
      <div
        className="relative w-[320px] h-[320px]"
        style={{
          animation: 'spin 30s linear infinite'
        }}
      >
        {/* Globe Circle */}
        <div
          className="absolute inset-0 rounded-full border-2 border-gray-700"
          style={{
            background: 'radial-gradient(circle at 30% 30%, #1a1a2e 0%, #0a0a0f 100%)',
            boxShadow: 'inset 0 0 60px rgba(255, 103, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.5)'
          }}
        />

        {/* Latitude Lines */}
        <div className="absolute inset-0 rounded-full border border-gray-800 scale-[0.85]" />
        <div className="absolute inset-0 rounded-full border border-gray-800 scale-[0.65]" />
        <div className="absolute inset-0 rounded-full border border-gray-800 scale-[0.45]" />

        {/* Equator */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-700 -translate-y-1/2" />

        {/* Meridian */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-700 -translate-x-1/2" />

        {/* Location Dots */}
        {/* San Francisco */}
        <div className="absolute w-3 h-3 rounded-full bg-orange-500 shadow-lg" style={{ top: '35%', left: '18%', boxShadow: '0 0 10px rgba(255, 103, 0, 0.8)' }}>
          <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75" />
        </div>

        {/* Kenya */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg" style={{ top: '52%', left: '62%', boxShadow: '0 0 8px rgba(34, 197, 94, 0.8)' }} />

        {/* India */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-500 shadow-lg" style={{ top: '42%', left: '72%', boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)' }} />

        {/* UK */}
        <div className="absolute w-2 h-2 rounded-full bg-purple-500 shadow-lg" style={{ top: '30%', left: '48%', boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }} />

        {/* Brazil */}
        <div className="absolute w-2 h-2 rounded-full bg-yellow-500 shadow-lg" style={{ top: '60%', left: '32%', boxShadow: '0 0 8px rgba(234, 179, 8, 0.8)' }} />

        {/* Singapore */}
        <div className="absolute w-2 h-2 rounded-full bg-pink-500 shadow-lg" style={{ top: '53%', left: '78%', boxShadow: '0 0 8px rgba(236, 72, 153, 0.8)' }} />
      </div>

      {/* Flight Path Arcs - These don't rotate */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
        style={{ transform: 'translateZ(0)' }}
      >
        {/* SF to Kenya */}
        <path
          d="M 95 150 Q 200 50 270 195"
          fill="none"
          stroke="url(#arcGradient1)"
          strokeWidth="2"
          strokeDasharray="8,4"
          className="animate-dash"
          opacity="0.8"
        />

        {/* SF to India */}
        <path
          d="M 95 150 Q 220 30 300 170"
          fill="none"
          stroke="url(#arcGradient2)"
          strokeWidth="2"
          strokeDasharray="8,4"
          className="animate-dash"
          opacity="0.7"
        />

        {/* SF to UK */}
        <path
          d="M 95 150 Q 160 80 215 130"
          fill="none"
          stroke="url(#arcGradient3)"
          strokeWidth="1.5"
          strokeDasharray="6,3"
          className="animate-dash"
          opacity="0.6"
        />

        {/* SF to Brazil */}
        <path
          d="M 95 150 Q 130 220 155 240"
          fill="none"
          stroke="url(#arcGradient4)"
          strokeWidth="1.5"
          strokeDasharray="6,3"
          className="animate-dash"
          opacity="0.6"
        />

        {/* SF to Singapore */}
        <path
          d="M 95 150 Q 200 80 325 210"
          fill="none"
          stroke="url(#arcGradient5)"
          strokeWidth="1.5"
          strokeDasharray="6,3"
          className="animate-dash"
          opacity="0.5"
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="arcGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="arcGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="arcGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <linearGradient id="arcGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="arcGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6700" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Glow effect behind globe */}
      <div
        className="absolute w-[280px] h-[280px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(255, 103, 0, 0.4) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes dash {
          to { stroke-dashoffset: -24; }
        }
        .animate-dash {
          animation: dash 2s linear infinite;
        }
      `}</style>
    </div>
  )
}

function ResultsSection() {
  const totalRaised = useStatsCounter(850, 2500, 0, 'easeOut')
  const successRate = useStatsCounter(87, 2500, 300, 'easeOut')
  const spotsLeft = useStatsCounter(14, 2500, 600, 'easeOut')

  return (
    <section className="snap-center relative h-screen bg-[#0a0a0a] dark-grid pt-[70px] flex flex-col overflow-hidden">
      <div className="flex-1 max-w-7xl mx-auto px-6 pt-8 sm:pt-10 lg:pt-12 pb-4 w-full">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col">
          <h2 className="text-[32px] font-bold text-white leading-[1.15] mb-4 text-left" style={{ fontFamily: FONTS.heading }}>
            Proven Results, Wherever You Are
          </h2>

          <p className="text-[16px] text-[#b0b0b0] leading-[1.5] mb-8 text-left max-w-[92%]" style={{ fontFamily: FONTS.mono }}>
            Your location doesn't limit your potential. With the right guidance and support, we help founders from anywhere build companies that attract real investment and create lasting impact.
          </p>

          <div className="flex flex-col gap-6 mb-8">
            <StatItem value={`$${totalRaised}K+`} label="Raised by Founders" color={COLORS.primary} />
            <StatItem value={`${successRate}%`} label="Get Investor Meetings" color="#50c878" />
            <StatItem value={spotsLeft} label="Spots Left This Cohort" color="#ffffff" subLabel="Applications closing soon" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center h-full">
          {/* Left Column - Content + Stats */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] xl:text-[48px] font-bold text-white leading-tight mb-4" style={{ fontFamily: FONTS.heading }}>
              Proven Results, Wherever You Are
            </h2>
            <p className="text-[16px] xl:text-[17px] text-gray-400 leading-relaxed mb-8" style={{ fontFamily: FONTS.mono }}>
              Your location doesn't limit your potential. With the right guidance and support, we help founders from anywhere build companies that attract real investment and create lasting impact.
            </p>

            {/* Stats Row */}
            <div className="flex flex-col gap-5">
              <DesktopStatRow
                value={`$${totalRaised}K+`}
                label="Raised by Our Founders"
                color={COLORS.primary}
                animValue={totalRaised}
              />
              <DesktopStatRow
                value={`${successRate}%`}
                label="Get Investor Meetings"
                color="#50c878"
                animValue={successRate}
              />
              <DesktopStatRow
                value={`${spotsLeft}`}
                label="Spots Available"
                color="white"
                animValue={spotsLeft}
              />
            </div>
          </div>

          {/* Right Column - Rotating Globe */}
          <div className="flex items-center justify-center h-full">
            <RotatingGlobe />
          </div>
        </div>
      </div>

      {/* Footer */}
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
  )
}

export default ResultsSection
