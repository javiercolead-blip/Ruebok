import { useEffect } from 'react'
import { COLORS, FONTS } from '../constants'

function OKRGuide() {
  useEffect(() => {
    document.title = 'OKR Guide - Ruebok'
  }, [])

  return (
    <div className="min-h-screen dark-grid pt-[70px]" style={{ backgroundColor: COLORS.dark }}>
      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[56px] font-bold text-white mb-6">The Founder's Guide to OKRs</h1>
          <p className="text-[24px] mb-8" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            How to Manage Execution Without Micro-Managing People
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
            In the early days, "survival" is the only goal. But as you hire your first employees, you lose the ability to know what everyone is doing every hour of the day.
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            You need a system that creates alignment without creating bureaucracy. That system is OKRs (Objectives and Key Results)—the framework used by Google, Intel, and Spotify to keep thousands of employees moving in the same direction.
          </p>
        </div>
      </section>

      {/* The Anatomy Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The Anatomy of an OKR</h2>

          <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: FONTS.mono }}>
            The framework is simple. It consists of two parts:
          </p>

          <div className="space-y-8">
            {/* Part 1 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">1. The Objective (The "What")</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                This is a qualitative, ambitious goal for a specific period (usually a Quarter).
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  <span className="text-green-500 font-bold">It must be:</span> Aggressive, inspiring, and time-bound.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  <span className="text-red-500 font-bold">It must NOT be:</span> A metric or a task list.
                </p>
              </div>
              <p className="text-gray-400 text-sm italic" style={{ fontFamily: FONTS.mono }}>
                Example: "Become the most trusted educational app in East Africa."
              </p>
            </div>

            {/* Part 2 */}
            <div className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
              <h3 className="text-[24px] font-bold text-white mb-3">2. The Key Results (The "How")</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
                These are the 3-5 measurable outcomes that define whether you achieved the Objective.
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  <span className="text-green-500 font-bold">It must be:</span> Quantitative (a number). If you can't measure it, it's not a Key Result.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  <span className="text-red-500 font-bold">It must NOT be:</span> An activity (e.g., "Send emails"). It must be an outcome (e.g., "Get 5 replies").
                </p>
              </div>
              <p className="text-gray-400 text-sm italic" style={{ fontFamily: FONTS.mono }}>
                The Litmus Test: At the end of the quarter, you should be able to look at this number and say "Yes" or "No" without arguing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Formula Section */}
      <section className="px-8 py-12" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The Formula</h2>
          <div className="border-l-4 p-6 rounded" style={{ backgroundColor: COLORS.darkGray, borderColor: COLORS.primary }}>
            <p className="text-gray-300 text-xl leading-relaxed" style={{ fontFamily: FONTS.mono }}>
              "We will <span className="font-bold" style={{ color: COLORS.primary }}>[ OBJECTIVE ]</span> as measured by <span className="font-bold" style={{ color: COLORS.primary }}>[ KEY RESULTS ]</span>."
            </p>
          </div>
        </div>
      </section>

      {/* Good vs Bad Examples Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">Good vs. Bad Examples</h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            Most startups get this wrong by listing "Task Lists" as OKRs. Here is the difference.
          </p>

          <div className="space-y-8">
            {/* Bad Example */}
            <div className="border-l-4 border-red-500 p-6 rounded" style={{ backgroundColor: COLORS.darkGray }}>
              <h3 className="text-[20px] font-bold text-red-500 mb-4">❌ The "Activity" Trap (Bad)</h3>
              <div className="space-y-3 mb-4">
                <p className="text-gray-300 text-base" style={{ fontFamily: FONTS.mono }}>
                  <span className="font-bold">Objective:</span> Launch the new website.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 1: Write the code.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 2: Design the logo.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 3: Fix the bugs.
                </p>
              </div>
              <p className="text-gray-400 text-sm italic" style={{ fontFamily: FONTS.mono }}>
                Why it fails: You can do all these things and still have zero customers. This is a To-Do list, not an OKR.
              </p>
            </div>

            {/* Good Example */}
            <div className="border-l-4 border-green-500 p-6 rounded" style={{ backgroundColor: COLORS.darkGray }}>
              <h3 className="text-[20px] font-bold text-green-500 mb-4">✅ The "Outcome" Focus (Good)</h3>
              <div className="space-y-3 mb-4">
                <p className="text-gray-300 text-base" style={{ fontFamily: FONTS.mono }}>
                  <span className="font-bold">Objective:</span> Successfully launch the new website to drive user growth.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 1: Acquire 1,000 signups within 30 days of launch.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 2: Achieve a landing page conversion rate of 5%.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • Key Result 3: Reduce page load time to under 2 seconds.
                </p>
              </div>
              <p className="text-gray-400 text-sm italic" style={{ fontFamily: FONTS.mono }}>
                Why it works: It focuses on the result of the work, not the work itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ruebok Rules Section */}
      <section className="px-8 py-12" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The Ruebok Rules of Execution</h2>
          <p className="text-gray-300 text-base mb-8 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            To make this work for a startup (and not a giant corporation), follow these 3 rules:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>1. The "Stretch Goal" Philosophy (The 70% Rule)</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-3" style={{ fontFamily: FONTS.mono }}>
                If you achieve 100% of your Key Results, your goal was too easy.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>The Sweet Spot:</span> You should aim to hit 60-70%.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>Why:</span> This encourages your team to take big risks ("Moonshots"). If they are afraid of "failing," they will set safe, boring goals.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>2. Cascade, Don't Dictate</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>Top-Down:</span> The Founders set the Company Objectives.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-2" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>Bottom-Up:</span> The Teams (Sales, Engineering) write their own Key Results to support that Objective.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                <span className="font-bold" style={{ color: COLORS.primary }}>Result:</span> This gives your team ownership. They aren't being told what to do; they are telling you how they will help the company win.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>3. Quarterly Cadence</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-3" style={{ fontFamily: FONTS.mono }}>
                Startups move too fast for annual planning.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • <span className="font-bold" style={{ color: COLORS.primary }}>Week 1:</span> Set OKRs.
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • <span className="font-bold" style={{ color: COLORS.primary }}>Weeks 2-11:</span> Weekly "Pulse Checks" (15 mins) to grade progress (Green/Yellow/Red).
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: FONTS.mono }}>
                  • <span className="font-bold" style={{ color: COLORS.primary }}>Week 12:</span> Grade and Reset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-white mb-4">Ready to Set Your OKRs?</h2>
          <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: FONTS.mono }}>
            Download the free template to start building your execution system.
          </p>
          <button
            className="px-10 py-4 text-white font-bold uppercase text-base transition-colors rounded"
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.primaryHover}
            onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.primary}
          >
            DOWNLOAD TEMPLATE
          </button>
        </div>
      </section>

      {/* Bottom padding */}
      <div className="h-16"></div>
    </div>
  )
}

export default OKRGuide
