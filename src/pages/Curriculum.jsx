import { useState, useEffect } from 'react'

function Curriculum() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.title = 'Curriculum'
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const weeks = [
    {
      week: 1,
      title: 'PROVE IT OR PIVOT',
      description: "You'll interview 20+ potential customers, map the problem space, and identify whether your solution addresses a genuine pain point or just a nice-to-have. By the end of the week, you'll know if you're onto something real."
    },
    {
      week: 2,
      title: 'MVP & EARLY TRACTION',
      description: "Build a lean MVP using no-code tools and lightweight experiments. Learn to generate Letters of Intent (LOIs) from real prospects and get users to commit before writing production code. We'll show you how to validate with minimum resources."
    },
    {
      week: 3,
      title: 'UNIT ECONOMICS',
      description: "Build a financial model that investors actually care about. Learn to calculate Customer Acquisition Cost (CAC), Lifetime Value (LTV), burn rate, and runway. We'll teach you how to project revenue realistically and identify the metrics that matter for your sector."
    },
    {
      week: 4,
      title: 'GO-TO-MARKET',
      description: "Map out your path from your first 10 customers to your first 100. You'll identify acquisition channels, test messaging, design a sales or growth playbook, and build a repeatable system for customer acquisition that doesn't rely on luck."
    },
    {
      week: 5,
      title: 'NARRATIVE & DESIGN',
      description: "Transform your business into a story that resonates. Learn how to frame the problem, position your solution, and articulate your vision in a way that captures attention. You'll design a pitch deck that's visually compelling and built to close deals."
    },
    {
      week: 6,
      title: 'THE CLOSE',
      description: "Prepare for the hardest questions investors will ask. Through live roast sessions, Q&A drills, and a final Demo Day showcase in front of real investors, you'll refine your delivery, sharpen your responses, and walk away ready to close funding."
    }
  ]

  const faqs = [
    {
      question: "Do you take equity?",
      answer: "No, we are fee-based. You keep 100% ownership of your company. Our business model is built on your success through education, not equity dilution."
    },
    {
      question: "Can I join if I have a full-time job?",
      answer: "Yes, but expect to commit 10 hours per week of focused work. The program is designed to be intensive but manageable for working founders. Most sessions are recorded for flexibility."
    },
    {
      question: "What if I don't have a technical co-founder?",
      answer: "Phase 2 covers no-code tools and strategies for non-technical founders. We'll show you how to validate and build without writing a single line of code, and help you determine when (and if) you actually need a technical co-founder."
    }
  ]

  return (
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Headline */}
        <h1 className="text-[56px] font-bold text-white mb-6">6 Weeks to Investor-Ready.</h1>
        <p className="subheadline text-[20px] text-gray-300 max-w-3xl mb-16">
          A high-intensity sprint designed to kill bad assumptions, build a business engine, and refine your pitch. No fluff, just deliverables.
        </p>

        {/* Week Flow - First Row (Weeks 1-3) */}
        <div className="mb-32 relative">
          <div className="grid grid-cols-3 gap-8">
            {weeks.slice(0, 3).map((week, index) => (
              <div key={week.week} className="relative">
                {/* Week Content */}
                <div className="space-y-3 pr-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ff6700] font-bold text-lg">WEEK {week.week}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    {week.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {week.description}
                  </p>
                </div>

                {/* Arrow to next week (except last in row) */}
                {index < 2 && (
                  <div className="absolute top-24 -right-6 flex items-center">
                    <svg className="w-12 h-6 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Curved arrow from Week 3 to Week 4 */}
          <div className="absolute -bottom-24 right-0 left-0">
            <svg className="w-full h-24" viewBox="0 0 1000 100" preserveAspectRatio="xMidYMid meet">
              <defs>
                <marker id="curved-arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <path d="M10,0 L10,7 L0,3.5 z" fill="#ff6700" />
                </marker>
              </defs>
              <path
                d="M 870 10 L 870 50 Q 870 70, 850 70 L 150 70 Q 130 70, 130 90"
                stroke="#ff6700"
                strokeWidth="2"
                fill="none"
                markerEnd="url(#curved-arrowhead)"
              />
            </svg>
          </div>
        </div>

        {/* Week Flow - Second Row (Weeks 4-6) */}
        <div className="mb-12">
          <div className="grid grid-cols-3 gap-8">
            {weeks.slice(3, 6).map((week, index) => (
              <div key={week.week} className="relative">
                {/* Week Content */}
                <div className="space-y-3 pr-8">
                  <div className="flex items-center gap-2">
                    <span className="text-[#ff6700] font-bold text-lg">WEEK {week.week}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase">
                    {week.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {week.description}
                  </p>
                </div>

                {/* Arrow to next week (except last) */}
                {index < 2 && (
                  <div className="absolute top-24 -right-6 flex items-center">
                    <svg className="w-12 h-6 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-gray-900 rounded-xl p-12 shadow-lg mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4 text-center">The Program Pays for Itself</h2>
          <p className="text-[18px] text-gray-300 leading-relaxed text-center mb-8">
            Every member gets access to $10,000+ in negotiated partner credits.
          </p>

          {/* Value Badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 rounded-lg px-8 py-6">
              <div className="text-xs text-blue-400 mb-2 font-bold uppercase tracking-wider">Total Value</div>
              <div className="text-5xl font-bold text-white">&gt;$10,000</div>
            </div>
          </div>

          {/* Partner Logos with Individual Pricing */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'AWS', credits: '$5,000' },
              { name: 'HubSpot', credits: '$2,000' },
              { name: 'Notion', credits: '$1,000' },
              { name: 'Stripe', credits: '$1,500' },
              { name: 'Google Cloud', credits: '$2,500' }
            ].map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-3">
                <div className="w-32 h-16 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:border-blue-500 transition-colors">
                  <span className="text-gray-300 font-semibold text-sm">{partner.name}</span>
                </div>
                <span className="text-blue-400 font-bold text-sm">{partner.credits} Credits</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <h2 className="text-[32px] font-bold text-white mb-8">Choose Your Path</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Community Card - Phases 1 & 2 */}
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-white mb-2">The Foundation</h3>
              <p className="text-gray-400 mb-6">Phases 1 & 2 • Weeks 1-4</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-400">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">The Audit: Customer Discovery & MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">The Engine: Unit Economics & GTM</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Access to video library & templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Slack community access</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition-all">
                Join Foundation
              </button>
            </div>

            {/* Premium Card - Phase 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500 rounded-xl p-8 shadow-2xl relative transform hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider rounded">
                PREMIUM ACCESS
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">The Complete Program</h3>
              <p className="text-gray-400 mb-6">All Phases • Weeks 1-6</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$1,000</span>
                  <span className="text-gray-400">one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white font-semibold">Everything in Foundation, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">The Pitch: Investor Presentation Training</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Weekly Live Coaching Sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Pitch Deck Review & 1:1 Office Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Guaranteed Demo Day Spot</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all">
                Apply for Premium
              </button>
            </div>
          </div>
        </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-[32px] font-bold text-white mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-gray-300 bg-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Curriculum
