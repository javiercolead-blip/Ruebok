import { useState } from 'react'

function Curriculum() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
    <div className="min-h-screen bg-gray-50 paper-grid">
      {/* Hero Section with Timeline Overview */}
      <section className="pt-24 pb-12 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              6 Weeks to Investor-Ready.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A high-intensity sprint designed to kill bad assumptions, build a business engine, and refine your pitch. No fluff, just deliverables.
            </p>
          </div>

          {/* Timeline Overview - 3 Phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Phase 1 Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>The Audit</h3>
                <p className="text-sm text-gray-500">Weeks 1-2</p>
              </div>

              {/* Week 1 */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 1: Prove it or Pivot</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  You'll interview 20+ potential customers, map the problem space, and identify whether your solution addresses a genuine pain point or just a nice-to-have. By the end of the week, you'll know if you're onto something real.
                </p>
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: Executive Summary
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Week 2 */}
              <div>
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 2: MVP & Early Traction</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  Build a lean MVP using no-code tools and lightweight experiments. Learn to generate Letters of Intent (LOIs) from real prospects and get users to commit before writing production code. We'll show you how to validate with minimum resources.
                </p>
                <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: MVP + 10 LOIs
                </div>
              </div>
            </div>

            {/* Phase 2 Card */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>The Engine</h3>
                <p className="text-sm text-gray-500">Weeks 3-4</p>
              </div>

              {/* Week 3 */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 3: Unit Economics</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  Build a financial model that investors actually care about. Learn to calculate Customer Acquisition Cost (CAC), Lifetime Value (LTV), burn rate, and runway. We'll teach you how to project revenue realistically and identify the metrics that matter for your sector.
                </p>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: 2-Year Projections
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Week 4 */}
              <div>
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 4: Go-To-Market</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  Map out your path from your first 10 customers to your first 100. You'll identify acquisition channels, test messaging, design a sales or growth playbook, and build a repeatable system for customer acquisition that doesn't rely on luck.
                </p>
                <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: GTM Strategy Doc
                </div>
              </div>
            </div>

            {/* Phase 3 Card - Premium */}
            <div className="bg-white border-4 border-indigo-600 rounded-xl p-6 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Premium Members
              </div>
              <div className="text-center mb-6 mt-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>The Pitch</h3>
                <p className="text-sm text-gray-500">Weeks 5-6</p>
              </div>

              {/* Week 5 */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 5: Narrative & Design</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  Transform your business into a story that resonates. Learn how to frame the problem, position your solution, and articulate your vision in a way that captures attention. You'll design a pitch deck that's visually compelling and built to close deals.
                </p>
                <div className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: Pitch Deck V1
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300 my-4"></div>

              {/* Week 6 */}
              <div>
                <h4 className="text-lg font-bold text-black mb-2" style={{ fontFamily: 'Cambria, Georgia, serif' }}>Week 6: The Close</h4>
                <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                  Prepare for the hardest questions investors will ask. Through live roast sessions, Q&A drills, and a final Demo Day showcase in front of real investors, you'll refine your delivery, sharpen your responses, and walk away ready to close funding.
                </p>
                <div className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-2.5 py-1 rounded">
                  Output: Investor Meeting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-20 px-8 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">The Program Pays for Itself.</h2>
          <p className="text-xl text-slate-300 mb-12">
            Every member gets access to $10,000+ in negotiated partner credits.
          </p>

          {/* Value Badge */}
          <div className="inline-block bg-slate-800 border-2 border-indigo-500 rounded-2xl px-8 py-6 mb-12">
            <div className="text-sm text-slate-400 mb-2">TOTAL VALUE</div>
            <div className="text-5xl font-bold text-indigo-400">&gt;$10,000</div>
          </div>

          {/* Partner Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            {['AWS', 'HubSpot', 'Notion', 'Stripe', 'Google Cloud'].map((partner) => (
              <div key={partner} className="w-32 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-slate-400 font-semibold text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Choose Your Path</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Community Card - Phases 1 & 2 */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Foundation</h3>
              <p className="text-gray-600 mb-6">Phases 1 & 2 • Weeks 1-4</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">The Audit: Customer Discovery & MVP</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">The Engine: Unit Economics & GTM</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Access to video library & templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Slack community access</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all">
                Join Foundation
              </button>
            </div>

            {/* Premium Card - Phase 3 */}
            <div className="bg-white border-4 border-indigo-600 rounded-2xl p-8 shadow-2xl relative transform hover:scale-105 transition-all">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Premium Members
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Complete Program</h3>
              <p className="text-gray-600 mb-6">All Phases • Weeks 1-6</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">$1,000</span>
                  <span className="text-gray-600">one-time</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-semibold">Everything in Foundation, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">The Pitch: Investor Presentation Training</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Weekly Live Coaching Sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Pitch Deck Review & 1:1 Office Hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Guaranteed Demo Day Spot</span>
                </li>
              </ul>

              <button className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all">
                Apply for Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Curriculum
