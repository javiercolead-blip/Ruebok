import { useEffect } from 'react'
import { COLORS, FONTS } from '../constants'

function FinancialModel() {
  useEffect(() => {
    document.title = 'Financial Model Template - Ruebok'
  }, [])

  return (
    <div className="min-h-screen dark-grid pt-[70px]" style={{ backgroundColor: COLORS.dark }}>
      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[56px] font-bold text-white mb-6">Financial Model Template</h1>
          <p className="text-[24px] mb-8" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            Default Alive or Default Dead?
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
            Paul Graham asks one question: "If you keep spending the way you are, and growing the way you are, do you make it?"
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            This model is built to answer that. It's not a projection tool—it's a survival tool that forces you to build revenue from the bottom up and expenses from the top down.
          </p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">What's Inside</h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Runway Calculator</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Calculate your exact "Zero Cash Date." Track how every hire and expense impacts your runway in real-time. Know if you're in the danger zone before it's too late.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Headcount Planning</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Toggle hires on and off to see their impact on burn. Automatically includes ~20% for payroll taxes and benefits so you don't underestimate costs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Bottom-Up Revenue Model</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Build revenue projections the right way: Traffic × Conversion × Price. No more top-down guessing about market share percentages.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">Scenario Planning</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Test "what if" scenarios instantly. Change one assumption and watch your entire Income Statement, Cash Flow, and Balance Sheet update in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="px-8 py-12" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">Why It Matters</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Focus on Cash, Not Profit</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Amazon wasn't profitable for years, but they were "Default Alive" because they managed cash flow. This model helps you do the same.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Weekly Resolution</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Track cash weekly or monthly, not just quarterly. Catch problems early when you can still fix them.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Investor Grade</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                This is the format Series A investors expect. Show them you have a grip on the levers of your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: FONTS.mono }}>
            Download the free template and take control of your runway.
          </p>
          <button
            className="px-10 py-4 text-white font-bold uppercase text-base transition-colors rounded"
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.primaryHover}
            onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.primary}
          >
            DOWNLOAD FREE TEMPLATE
          </button>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-16"></div>
    </div>
  )
}

export default FinancialModel
