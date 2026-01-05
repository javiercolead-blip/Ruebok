import { useEffect } from 'react'
import { COLORS, FONTS } from '../constants'

function PitchDeckFramework() {
  useEffect(() => {
    document.title = 'Pitch Deck Framework - Ruebok'
  }, [])

  const slides = [
    {
      title: "The Title Card",
      content: "Start strong. Include your Company Name, a high-resolution logo, and a one-sentence tagline.",
      tip: "Your tagline should be simple enough for anyone to understand instantly. Clarity conveys confidence.",
      visual: "A minimal, dark-mode slide featuring a bold white logo and a crisp one-sentence tagline in the center."
    },
    {
      title: "The Problem",
      content: "What is the specific gap in the market? Describe the pain point your customer faces every day.",
      narrative: "Describe the problem, gap, or need, and indicate how it will be solved.",
      validation: "Show that this is a real problem for real people, not just a minor inconvenience.",
      visual: "A slide showing a large, red statistic (e.g., '78% of users fail...') or a stark image representing the 'Gap' in the market."
    },
    {
      title: "The Solution",
      content: "How do you fix it? This is where your product shines.",
      visuals: "Show, don't just tell. Use screenshots or renderings.",
      specifics: "Include specific details on how your business will address what was outlined in the statement of need.",
      visual: "A clean product mockup (mobile phone or laptop screen) displaying the UI of the solution."
    },
    {
      title: "Traction",
      content: "Prove that the market is responding.",
      metrics: "Highlight revenue, active users, or a growing waitlist.",
      momentum: "Goals are broad, while objectives are measurable. Show the measurable objectives you have already hit to prove you can execute.",
      visual: "A slide with a line graph trending 'up and to the right' with 3 key metric bullets (e.g., MRR, Users, Retention) highlighted."
    },
    {
      title: "The Market",
      content: "How big can this opportunity grow?",
      scope: "Investors want to partner with companies that can scale. Define your Total Addressable Market (TAM).",
      focus: "Start with your initial niche, then show your expansion plan.",
      visual: "A slide featuring three concentric circles (TAM / SAM / SOM) with dollar amounts in each bubble."
    },
    {
      title: "Competition",
      content: "Who else is doing this, and why do you win?",
      difference: "Clearly setting yourself apart from the competition is essential.",
      edge: "Highlight your unique advantage—whether it is speed, price, technology, or exclusive partnerships.",
      visual: "A 'Magic Quadrant' style grid or a checkmark comparison table showing 'Us' vs. 'Them'."
    },
    {
      title: "Business Model",
      content: "How does the business thrive financially?",
      economics: "Explain your pricing and margins.",
      strategy: "Outline your strategies for marketing or go-to-market. How will you find and keep customers?",
      visual: "A simple flow chart showing Customer -> $$ -> Product, or a Unit Economics breakdown (LTV vs. CAC)."
    },
    {
      title: "The Team",
      content: "Why are you the right people to build this?",
      credibility: "Demonstrating credibility builds trust. You can use the names of your biggest customers, investors, or mentors to show you have strong backing.",
      fit: "Highlight the specific experience that makes your team uniquely qualified.",
      visual: "A slide with 2-3 Founder headshots, their titles, and logos of prestigious former employers or universities underneath."
    },
    {
      title: "Financials",
      content: "Current health and future projections.",
      breakdown: "Detail the project cost, broken down line by line regarding your current spending.",
      forecast: "A high-level view of your financial goals for the next 18–24 months.",
      visual: "A simplified bar chart showing revenue growth over 2 years, with a 'Break Even' line indicated."
    },
    {
      title: "The Ask",
      content: "What resources do you need to accelerate?",
      impact: "Address the impact the money will have on your business. Don't just ask for capital; explain how it unlocks growth.",
      returnText: "Explain how this investment will increase your efficiency or expand your reach.",
      visual: "A slide with one massive number (e.g., '$2M Seed') and 3 buckets showing allocation (Engineering, Sales, Product)."
    }
  ]

  return (
    <div className="min-h-screen dark-grid pt-[70px]" style={{ backgroundColor: COLORS.dark }}>
      {/* Hero Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[56px] font-bold text-white mb-6">Pitch Deck Framework</h1>
          <p className="text-[24px] mb-8" style={{ color: COLORS.primary, fontFamily: FONTS.heading }}>
            10 Slides. 3 Minutes. Pure Clarity.
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed mb-4" style={{ fontFamily: FONTS.mono }}>
            Investors see thousands of decks a year. They value clarity above all else.
          </p>
          <p className="text-[18px] text-gray-300 leading-relaxed" style={{ fontFamily: FONTS.mono }}>
            This framework structures your vision into the exact format that decision-makers expect, ensuring your idea doesn't get lost in translation.
          </p>
        </div>
      </section>

      {/* The 10 Slides Section */}
      <section className="px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">The 10-Slide Blueprint</h2>

          <div className="space-y-10">
            {slides.map((slide, index) => (
              <div key={index} className="border-l-4 pl-6" style={{ borderColor: COLORS.primary }}>
                <h3 className="text-[24px] font-bold text-white mb-3">
                  <span style={{ color: COLORS.primary }}>Slide {index + 1}:</span> {slide.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mb-3" style={{ fontFamily: FONTS.mono }}>
                  {slide.content}
                </p>

                {slide.tip && (
                  <p className="text-gray-400 text-sm leading-relaxed italic" style={{ fontFamily: FONTS.mono }}>
                    Tip: {slide.tip}
                  </p>
                )}
                {slide.narrative && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.narrative}
                  </p>
                )}
                {slide.validation && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.validation}
                  </p>
                )}
                {slide.visuals && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.visuals}
                  </p>
                )}
                {slide.specifics && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.specifics}
                  </p>
                )}
                {slide.metrics && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.metrics}
                  </p>
                )}
                {slide.momentum && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.momentum}
                  </p>
                )}
                {slide.scope && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.scope}
                  </p>
                )}
                {slide.focus && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.focus}
                  </p>
                )}
                {slide.difference && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.difference}
                  </p>
                )}
                {slide.edge && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.edge}
                  </p>
                )}
                {slide.economics && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.economics}
                  </p>
                )}
                {slide.strategy && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.strategy}
                  </p>
                )}
                {slide.credibility && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.credibility}
                  </p>
                )}
                {slide.fit && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.fit}
                  </p>
                )}
                {slide.breakdown && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.breakdown}
                  </p>
                )}
                {slide.forecast && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.forecast}
                  </p>
                )}
                {slide.impact && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.impact}
                  </p>
                )}
                {slide.returnText && (
                  <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                    {slide.returnText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before You Export Section */}
      <section className="px-8 py-12" style={{ backgroundColor: COLORS.darkerGray }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[40px] font-bold text-white mb-8">Before You Export</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Is it Readable?</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Avoid walls of text. Make it easy to scan. Use clear, simple language that anyone can understand.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Is it Customized?</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Tailor your deck to the specific values and focus areas of the investors you're meeting with.
              </p>
            </div>

            <div>
              <h3 className="text-[20px] font-bold mb-2" style={{ color: COLORS.primary }}>Is it Credible?</h3>
              <p className="text-gray-400 text-base leading-relaxed" style={{ fontFamily: FONTS.mono }}>
                Ensure your data is accurate and your plan is realistic. Credibility de-risks the opportunity for investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[32px] font-bold text-white mb-4">Ready to Build Your Deck?</h2>
          <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: FONTS.mono }}>
            Download the free template with all 10 slide layouts pre-formatted.
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

export default PitchDeckFramework
