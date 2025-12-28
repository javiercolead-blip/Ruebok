import { useState, useEffect } from 'react'

function Curriculum() {
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedPhase, setSelectedPhase] = useState(0)

  useEffect(() => {
    document.title = 'Ruebok Ventures | Curriculum'
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const phases = [
    {
      id: 0,
      title: 'PHASE 01 // BUILD',
      subtitle: 'THE AUDIT',
      duration: 'WEEKS 1-2',
      weeks: [
        {
          title: 'WEEK 01: PROVE IT OR PIVOT',
          description: "You'll interview 20+ potential customers, map the problem space, and identify whether your solution addresses a genuine pain point or just a nice-to-have. By the end of the week, you'll know if you're onto something real.",
          output: '[ OUTPUT: EXECUTIVE SUMMARY ]'
        },
        {
          title: 'WEEK 02: MVP & EARLY TRACTION',
          description: "Build a lean MVP using no-code tools and lightweight experiments. Learn to generate Letters of Intent (LOIs) from real prospects and get users to commit before writing production code. We'll show you how to validate with minimum resources.",
          output: '[ OUTPUT: MVP + 10 LOIs ]'
        }
      ]
    },
    {
      id: 1,
      title: 'PHASE 02 // SHIP',
      subtitle: 'THE ENGINE',
      duration: 'WEEKS 3-4',
      weeks: [
        {
          title: 'WEEK 03: UNIT ECONOMICS',
          description: "Build a financial model that investors actually care about. Learn to calculate Customer Acquisition Cost (CAC), Lifetime Value (LTV), burn rate, and runway. We'll teach you how to project revenue realistically and identify the metrics that matter for your sector.",
          output: '[ OUTPUT: 2-YEAR PROJECTIONS ]'
        },
        {
          title: 'WEEK 04: GO-TO-MARKET',
          description: "Map out your path from your first 10 customers to your first 100. You'll identify acquisition channels, test messaging, design a sales or growth playbook, and build a repeatable system for customer acquisition that doesn't rely on luck.",
          output: '[ OUTPUT: GTM STRATEGY DOC ]'
        }
      ]
    },
    {
      id: 2,
      title: 'PHASE 03 // PITCH',
      subtitle: 'THE PITCH',
      duration: 'WEEKS 5-6',
      isPremium: true,
      weeks: [
        {
          title: 'WEEK 05: NARRATIVE & DESIGN',
          description: "Transform your business into a story that resonates. Learn how to frame the problem, position your solution, and articulate your vision in a way that captures attention. You'll design a pitch deck that's visually compelling and built to close deals.",
          output: '[ OUTPUT: PITCH DECK V1 ]'
        },
        {
          title: 'WEEK 06: THE CLOSE',
          description: "Prepare for the hardest questions investors will ask. Through live roast sessions, Q&A drills, and a final Demo Day showcase in front of real investors, you'll refine your delivery, sharpen your responses, and walk away ready to close funding.",
          output: '[ OUTPUT: INVESTOR MEETING ]'
        }
      ]
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
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16 overflow-x-hidden">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h1 className="text-[56px] font-bold text-white mb-6">
              6 Weeks to Investor-Ready.
            </h1>
            <p className="subheadline text-[20px] text-gray-300 max-w-3xl mx-auto mb-12">
              A high-intensity sprint designed to kill bad assumptions, build a business engine, and refine your pitch. No fluff, just deliverables.
            </p>
          </div>

          {/* Server Rack Accordion */}
          <div className="max-w-4xl mx-auto space-y-4">
            {phases.map((phase) => (
              <div key={phase.id}>
                {/* The Blade (Closed State) */}
                <button
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                  className={`w-full h-24 bg-[#1a1a1a] border transition-all flex items-center justify-between px-8 ${
                    selectedPhase === phase.id
                      ? 'border-l-4 border-l-[#ff6700] border-r border-r-neutral-800 border-t border-t-neutral-800 border-b border-b-neutral-800'
                      : 'border-neutral-800 hover:border-[#ff6700]'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex items-center gap-6">
                    <h2
                      className={`text-2xl font-bold uppercase transition-all ${
                        selectedPhase === phase.id ? 'text-white' : 'text-white hover:text-[#ff6700]'
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}
                    >
                      {phase.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* System ID */}
                    <span
                      className="text-6xl font-bold text-neutral-800 select-none"
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {String(phase.id + 1).padStart(2, '0')}
                    </span>

                    {/* Chevron Icon */}
                    <svg
                      className={`w-6 h-6 text-[#ff6700] transition-transform ${
                        selectedPhase === phase.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* The Drawer (Open State) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    selectedPhase === phase.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-[#0d0d0d] border-l-4 border-l-[#ff6700] border-r border-r-neutral-800 border-b border-b-neutral-800 p-8" style={{ borderRadius: 0 }}>
                    {/* 2-Column Grid for Weeks */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {phase.weeks.map((week, index) => (
                        <div key={index} className="space-y-4">
                          <h3
                            className="text-xl font-bold text-[#ff6700] uppercase"
                            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: '0.05em' }}
                          >
                            {week.title}
                          </h3>
                          <p
                            className="text-gray-400 text-sm leading-relaxed"
                            style={{ fontFamily: "'Roboto Mono', monospace" }}
                          >
                            {week.description}
                          </p>
                          <div
                            className="inline-block bg-[#1a1a1a] border border-neutral-800 text-[#ff6700] px-3 py-2 text-xs font-bold uppercase"
                            style={{ fontFamily: "'Roboto Mono', monospace", borderRadius: 0 }}
                          >
                            {week.output}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Premium Badge if applicable */}
                    {phase.isPremium && (
                      <div className="mt-6 pt-6 border-t border-neutral-800">
                        <div className="inline-block bg-[#ff6700] text-white px-4 py-2 text-sm font-bold uppercase" style={{ fontFamily: "'Roboto Mono', monospace", borderRadius: 0 }}>
                          [ ACCESS LEVEL: PREMIUM ]
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Perks Section */}
      <section className="py-20 px-8 bg-[#0d0d0d] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>// THE PROGRAM PAYS FOR ITSELF</h2>
          <p className="text-lg text-gray-400 mb-12" style={{ fontFamily: "'Roboto Mono', monospace" }}>
            Every member gets access to $10,000+ in negotiated partner credits.
          </p>

          {/* Value Badge */}
          <div className="inline-block bg-[#1a1a1a] border-2 border-orange-600 px-8 py-6 mb-12" style={{ borderRadius: 0 }}>
            <div className="text-xs text-orange-600 mb-2 font-bold uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>[ TOTAL VALUE ]</div>
            <div className="text-5xl font-bold text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>&gt;$10,000</div>
          </div>

          {/* Partner Logos with Individual Pricing */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start justify-items-center">
            {[
              { name: 'AWS', credits: '$5,000' },
              { name: 'HubSpot', credits: '$2,000' },
              { name: 'Notion', credits: '$1,000' },
              { name: 'Stripe', credits: '$1,500' },
              { name: 'Google Cloud', credits: '$2,500' }
            ].map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-3">
                <div className="w-32 h-16 bg-[#1a1a1a] border border-gray-700 flex items-center justify-center hover:border-orange-600 transition-colors" style={{ borderRadius: 0 }}>
                  <span className="text-gray-400 font-semibold text-sm">{partner.name}</span>
                </div>
                <span className="text-orange-600 font-bold text-sm" style={{ fontFamily: "'Roboto Mono', monospace" }}>{partner.credits} Credits</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-8 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Choose Your Path</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Community Card - Phases 1 & 2 */}
            <div className="bg-gray-900 border-2 border-gray-700 p-8 hover:border-gray-600 transition-all" style={{ borderRadius: 0 }}>
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

              <button className="w-full py-3 px-6 border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-all" style={{ borderRadius: 0 }}>
                Join Foundation
              </button>
            </div>

            {/* Premium Card - Phase 3 */}
            <div className="bg-[#1a1a1a] border-2 border-orange-500 p-8 shadow-2xl shadow-orange-500/20 relative transform hover:scale-105 transition-all" style={{ borderRadius: 0 }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-4 py-1 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                [ ACCESS LEVEL: UNLOCKED ]
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

              <button className="w-full py-3 px-6 bg-orange-600 text-white font-semibold hover:bg-orange-700 shadow-lg hover:shadow-xl transition-all" style={{ borderRadius: 0 }}>
                Apply for Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
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
                  <div className="px-6 pb-4 text-gray-300">
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
