import { Link } from 'react-router-dom'
import { COLORS, FONTS } from '../../constants'
import EventCarousel from './events/EventCarousel'

function HeroSection() {
  return (
    <section className="snap-center relative h-screen dark-grid pt-[70px] flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <h1 className="uppercase leading-none" style={{ fontFamily: FONTS.heading }}>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              BUILD<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              SHIP<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              PITCH<span style={{ color: COLORS.primary }}>.</span>
            </span>
          </h1>

          <p className="text-lg max-w-lg text-white" style={{ fontFamily: FONTS.mono, fontWeight: 300 }}>
            Turn your SaaS idea into a startup in 8 weeks, then pitch it to real investors. Global founders welcome. No equity taken.
          </p>

          <div className="space-y-4">
            <Link
              to="/apply"
              className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
              style={{ borderRadius: 0 }}
            >
              APPLY TO 2026 Q1 COHORT
            </Link>

            <p className="text-sm text-neutral-500" style={{ fontFamily: FONTS.mono }}>
              Applications closing for Cohort 2026.
            </p>
          </div>
        </div>

        {/* Upcoming Events - Desktop Only */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <EventCarousel />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
