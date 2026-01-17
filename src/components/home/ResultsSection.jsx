import { Link } from 'react-router-dom'
import { COLORS, FONTS } from '../../constants'
import { useStatsCounter } from '../../hooks/useStatsCounter'

function StatItem({ value, label, color, icon, subLabel }) {
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

function DesktopStatItem({ value, label, color, icon, subLabel, animValue }) {
  return (
    <div className="mb-10" style={{
      opacity: animValue > 0 ? 1 : 0.7,
      transform: `scale(${animValue > 0 ? 1 : 0.95})`,
      transition: 'all 0.3s ease-out'
    }}>
      <div className="flex items-baseline gap-3 mb-3">
        {icon}
        <div
          className="font-bold"
          style={{
            fontSize: '56px',
            color,
            fontFamily: FONTS.heading,
            lineHeight: 1
          }}
        >
          {value}
        </div>
      </div>
      <p className="text-white text-[16px] leading-[1.4]" style={{ fontFamily: FONTS.mono, fontWeight: 400 }}>
        {label}
      </p>
      {subLabel && (
        <p className="text-[14px] mt-1" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
          {subLabel}
        </p>
      )}
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
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight" style={{ fontFamily: FONTS.heading }}>
              Proven Results, Wherever You Are
            </h2>
            <p className="text-[15px] sm:text-[17px] lg:text-[19px] text-gray-400 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
              Your location doesn't limit your potential. With the right guidance and support, we help founders from anywhere build companies that attract real investment and create lasting impact.
            </p>
          </div>

          <div className="flex flex-col justify-start pt-4">
            <DesktopStatItem
              value={`$${totalRaised}K+`}
              label="Raised by Our Founders"
              color={COLORS.primary}
              animValue={totalRaised}
              icon={
                <svg className="w-8 h-8 flex-shrink-0" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <DesktopStatItem
              value={`${successRate}%`}
              label="Get Investor Meetings"
              color="#50c878"
              animValue={successRate}
              icon={
                <svg className="w-8 h-8 flex-shrink-0 text-[#50c878]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            <DesktopStatItem
              value={spotsLeft}
              label="Spots Available"
              color="white"
              animValue={spotsLeft}
              subLabel="Applications closing soon"
              icon={
                <svg className="w-8 h-8 flex-shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
            />
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
