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

        </div>

        {/* Week Flow - Second Row (Weeks 4-6) */}
        <div className="mb-2">
          <div className="grid grid-cols-3 gap-8">
            {weeks.slice(3, 6).map((week, index) => (
              <div key={week.week} className="relative">
                {/* Week Content */}
                <div className="space-y-3 pr-8">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold text-lg ${week.week >= 5 ? 'text-blue-400' : 'text-[#ff6700]'}`}>WEEK {week.week}</span>
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
