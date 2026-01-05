import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Resources() {
  useEffect(() => {
    document.title = 'Resources'
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-white mb-6">Resources for Founders</h1>
        <p className="subheadline text-[20px] text-gray-300 max-w-3xl mb-12">
          Access valuable insights, tools, and guidance to help you build and scale your business.
        </p>

        {/* Resource Categories */}
        <div className="space-y-12 mt-12">
          {/* Guides & Articles */}
          <div>
            <h2 className="text-[32px] font-bold text-white mb-6">Guides & Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Fundraising 101", description: "Essential strategies for raising your first round", category: "Funding" },
                { title: "Building in Emerging Markets", description: "Navigating unique challenges and opportunities", category: "Strategy" },
                { title: "Scaling Your Team", description: "Hiring and managing remote teams effectively", category: "Operations" },
              ].map((article, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <span className="inline-block px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">{article.title}</h3>
                  <p className="text-gray-400 text-sm">{article.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Templates */}
          <div>
            <h2 className="text-[32px] font-bold text-white mb-6">Tools & Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Financial Model Card */}
              <Link to="/resources/financial-model" className="bg-[#1a1a1a] border border-gray-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all group relative">
                <div className="bg-[#1a1a1a] p-6 border-t border-gray-800 flex-1 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Financial Model Template</h3>
                    <span className="text-xs text-gray-400">Excel/Sheets</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">Default Alive or Default Dead?</p>
                  <p className="text-base text-gray-300 leading-relaxed mb-12">
                    Pre-built financial projection model for startups
                  </p>

                  {/* Learn More Link */}
                  <div className="absolute bottom-8 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#ff6700] text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Pitch Deck Framework Card */}
              <Link to="/resources/pitch-deck-framework" className="bg-[#1a1a1a] border border-gray-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all group relative">
                <div className="bg-[#1a1a1a] p-6 border-t border-gray-800 flex-1 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Pitch Deck Framework</h3>
                    <span className="text-xs text-gray-400">PowerPoint/Keynote</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">10 Slides. 3 Minutes. Pure Clarity.</p>
                  <p className="text-base text-gray-300 leading-relaxed mb-12">
                    Proven pitch deck structure with examples
                  </p>

                  {/* Learn More Link */}
                  <div className="absolute bottom-8 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#ff6700] text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* OKR Guide Card */}
              <Link to="/resources/okr-guide" className="bg-[#1a1a1a] border border-gray-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all group relative">
                <div className="bg-[#1a1a1a] p-6 border-t border-gray-800 flex-1 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">OKR Planning Template</h3>
                    <span className="text-xs text-gray-400">Notion/Docs</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">How to Manage Execution Without Micro-Managing People</p>
                  <p className="text-base text-gray-300 leading-relaxed mb-12">
                    Set and track objectives and key results
                  </p>

                  {/* Learn More Link */}
                  <div className="absolute bottom-8 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#ff6700] text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Due Diligence Checklist Card */}
              <Link to="/resources/due-diligence-checklist" className="bg-[#1a1a1a] border border-gray-800 shadow-2xl flex flex-col rounded-xl overflow-hidden hover:border-[#ff6700] transition-all group relative">
                <div className="bg-[#1a1a1a] p-6 border-t border-gray-800 flex-1 relative">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white">Due Diligence Checklist</h3>
                    <span className="text-xs text-gray-400">PDF</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">The Exam You Can Study For</p>
                  <p className="text-base text-gray-300 leading-relaxed mb-12">
                    Prepare for investor due diligence
                  </p>

                  {/* Learn More Link */}
                  <div className="absolute bottom-8 left-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#ff6700] text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 text-[#ff6700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Video Library */}
          <div>
            <h2 className="text-[32px] font-bold text-white mb-6">Video Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Founder Fundamentals", duration: "45 min", topic: "Getting Started" },
                { title: "Product-Market Fit", duration: "32 min", topic: "Growth" },
                { title: "Investor Relations", duration: "28 min", topic: "Fundraising" },
              ].map((video, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white text-3xl">▶</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-400">{video.topic}</span>
                    <h3 className="text-[16px] font-bold text-white mt-1 mb-2">{video.title}</h3>
                    <span className="text-sm text-gray-400">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources
