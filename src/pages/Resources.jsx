function Resources() {
  return (
    <div className="min-h-screen bg-gray-50 paper-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-black mb-6">Resources for Founders</h1>
        <p className="subheadline text-[20px] text-gray-600 max-w-3xl mb-12">
          Access valuable insights, tools, and guidance to help you build and scale your business.
        </p>

        {/* Resource Categories */}
        <div className="space-y-12 mt-12">
          {/* Guides & Articles */}
          <div>
            <h2 className="text-[32px] font-bold mb-6">Guides & Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Fundraising 101", description: "Essential strategies for raising your first round", category: "Funding" },
                { title: "Building in Emerging Markets", description: "Navigating unique challenges and opportunities", category: "Strategy" },
                { title: "Scaling Your Team", description: "Hiring and managing remote teams effectively", category: "Operations" },
              ].map((article, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-[18px] font-bold mb-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm">{article.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Templates */}
          <div>
            <h2 className="text-[32px] font-bold mb-6">Tools & Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Financial Model Template", type: "Excel/Google Sheets", description: "Pre-built financial projection model for startups" },
                { name: "Pitch Deck Framework", type: "PowerPoint/Keynote", description: "Proven pitch deck structure with examples" },
                { name: "OKR Planning Template", type: "Notion/Docs", description: "Set and track objectives and key results" },
                { name: "Due Diligence Checklist", type: "PDF", description: "Prepare for investor due diligence" },
              ].map((tool, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[18px] font-bold">{tool.name}</h3>
                    <span className="text-xs text-gray-500">{tool.type}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700">
                    Download →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Video Library */}
          <div>
            <h2 className="text-[32px] font-bold mb-6">Video Library</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Founder Fundamentals", duration: "45 min", topic: "Getting Started" },
                { title: "Product-Market Fit", duration: "32 min", topic: "Growth" },
                { title: "Investor Relations", duration: "28 min", topic: "Fundraising" },
              ].map((video, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white text-3xl">▶</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-gray-500">{video.topic}</span>
                    <h3 className="text-[16px] font-bold mt-1 mb-2">{video.title}</h3>
                    <span className="text-sm text-gray-600">{video.duration}</span>
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
