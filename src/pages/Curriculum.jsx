import { useState, useEffect } from 'react'
import { COLORS, FONTS } from '../constants'

function Curriculum() {
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTab, setActiveTab] = useState('BUILD')

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
      <div className="max-w-7xl mx-auto px-8 py-8 pt-12">
        {/* Headline */}
        <h1 className="text-[56px] font-bold text-white mb-6">6 Weeks to Investor-Ready.</h1>
        <p className="subheadline text-[20px] text-gray-300 max-w-3xl mb-12">
          A high-intensity sprint designed to kill bad assumptions, build a business engine, and refine your pitch. No fluff, just deliverables.
        </p>

        {/* Interactive Tabbed Curriculum */}
        <div className="mb-12">
          <div className="flex gap-8">
            {/* Left Side - Vertical Tabs */}
            <div className="w-1/4 flex flex-col gap-3">
              {[
                { id: 'BUILD', label: 'BUILD', subtitle: 'Weeks 1-2' },
                { id: 'SHIP', label: 'SHIP', subtitle: 'Weeks 3-4' },
                { id: 'PITCH', label: 'PITCH', subtitle: 'Weeks 5-6' },
                { id: 'FUND', label: 'FUND', subtitle: 'Weeks 7-8' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left py-4 px-5 transition-all duration-300 cursor-pointer border-l-4 ${
                    activeTab === tab.id
                      ? 'border-[#ff6700] bg-[#1a1a1a] text-white'
                      : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-[#151515]'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  <div className="text-xl font-bold">{tab.label}</div>
                  <div className="text-xs mt-1 opacity-70">{tab.subtitle}</div>
                </button>
              ))}
            </div>

            {/* Right Side - Content Cards */}
            <div className="w-3/4 relative overflow-hidden flex items-stretch">
              {/* BUILD Card */}
              <div
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  activeTab === 'BUILD' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-5 z-0'
                }`}
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 h-full overflow-y-auto shadow-2xl">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 1:</span> Foundation & Validation
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Interview 20+ potential customers to validate your problem hypothesis using customer discovery frameworks. Map the problem space and create a value proposition canvas.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Validated problem statement</li>
                        <li>• 20+ customer interview insights</li>
                        <li>• Value proposition canvas</li>
                        <li>• Pivot-or-proceed decision</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 2:</span> MVP Blueprint
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Design your system architecture and choose your tech stack strategically. Learn to leverage no-code tools for rapid prototyping with mentor guidance.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Complete MVP blueprint</li>
                        <li>• Technical architecture diagrams</li>
                        <li>• Resource allocation plan</li>
                        <li>• 4-week development timeline</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* SHIP Card */}
              <div
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  activeTab === 'SHIP' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-5 z-0'
                }`}
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 h-full overflow-y-auto shadow-2xl">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 3:</span> Build & Early Traction
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Build a lean MVP using no-code tools and lightweight experiments. Learn to get Letters of Intent from real prospects and validate product-market fit.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Functional MVP prototype</li>
                        <li>• Letters of Intent (LOIs)</li>
                        <li>• User testing results</li>
                        <li>• First customer commitments</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 4:</span> Unit Economics & GTM
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Build a financial model investors care about. Calculate CAC, LTV, burn rate, and runway. Design a repeatable go-to-market playbook.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Complete financial model</li>
                        <li>• CAC/LTV calculations</li>
                        <li>• Go-to-market strategy doc</li>
                        <li>• Revenue projections</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* PITCH Card */}
              <div
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  activeTab === 'PITCH' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-5 z-0'
                }`}
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 h-full overflow-y-auto shadow-2xl">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 5:</span> Narrative & Design
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Transform your business into a compelling story. Master visual storytelling, investor psychology, and the art of the 3-minute pitch.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Investor-ready pitch deck</li>
                        <li>• Refined narrative framework</li>
                        <li>• Traction slides</li>
                        <li>• Financial projections deck</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 6:</span> The Close
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Prepare for tough investor questions through live roast sessions and mock pitches with experienced VCs. Refine delivery under pressure.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Demo Day pitch performance</li>
                        <li>• Polished Q&A responses</li>
                        <li>• Scheduled investor meetings</li>
                        <li>• Actionable investor feedback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FUND Card */}
              <div
                className={`absolute inset-0 transition-all duration-600 ease-in-out ${
                  activeTab === 'FUND' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-5 z-0'
                }`}
              >
                <div className="bg-[#1a1a1a] rounded-2xl p-8 h-full overflow-y-auto shadow-2xl">
                  <div className="grid grid-cols-2 gap-10">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 7:</span> Investor Outreach
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Launch your fundraising campaign by building a targeted investor list and securing intro meetings through warm connections.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Targeted investor list (50+)</li>
                        <li>• Personalized outreach emails</li>
                        <li>• 90-day fundraising timeline</li>
                        <li>• Scheduled intro meetings</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        <span className="text-[#ff6700]">Week 8:</span> Demo Day & Beyond
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        Present to 50+ VCs and angel investors in a high-stakes Demo Day format. Network with backers and begin term sheet negotiations.
                      </p>
                      <h4 className="text-sm font-bold text-[#ff6700] mb-2.5 uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>Deliverables</h4>
                      <ul className="text-gray-400 text-sm space-y-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                        <li>• Live investor pitch (5 min)</li>
                        <li>• Follow-up meeting schedule</li>
                        <li>• Term sheet negotiations</li>
                        <li>• Clear funding roadmap</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-8 pt-2 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-[40px] lg:text-[48px] font-bold text-white mb-4" style={{ fontFamily: FONTS.heading }}>
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg" style={{ fontFamily: FONTS.mono }}>
            Everything you need to know about the program
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700"
              style={{ backgroundColor: COLORS.darkGray }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between group transition-colors"
                style={{
                  backgroundColor: openFaq === index ? COLORS.darkerGray : 'transparent'
                }}
              >
                <span
                  className="font-semibold text-lg pr-8 transition-colors"
                  style={{
                    color: openFaq === index ? COLORS.primary : '#ffffff',
                    fontFamily: FONTS.heading
                  }}
                >
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 transition-all duration-300"
                    style={{
                      color: openFaq === index ? COLORS.primary : '#9ca3af',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openFaq === index ? '500px' : '0',
                  opacity: openFaq === index ? 1 : 0
                }}
              >
                <div
                  className="px-6 pb-5 pt-2 text-gray-300 leading-relaxed border-t"
                  style={{
                    fontFamily: FONTS.mono,
                    borderColor: COLORS.border
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Curriculum
