function Sectors() {
  return (
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-white mb-6">Sectors We Invest In</h1>
        <p className="subheadline text-[20px] text-gray-300 max-w-3xl mb-12">
          We focus on high-impact sectors that are transforming economies and improving lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Sector Cards */}
          {[
            {
              name: "Agriculture & AgTech",
              icon: "🌾",
              description: "Modernizing farming with technology to increase yields and sustainability",
              focus: ["Precision agriculture", "Supply chain optimization", "Farm management software", "Crop monitoring"],
              gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            },
            {
              name: "Financial Technology",
              icon: "💳",
              description: "Building inclusive financial services for underserved markets",
              focus: ["Mobile payments", "Digital banking", "Lending platforms", "Insurance tech"],
              gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            },
            {
              name: "Healthcare & MedTech",
              icon: "🏥",
              description: "Expanding access to quality healthcare through innovation",
              focus: ["Telemedicine", "Health records", "Diagnostics", "Pharmacy tech"],
              gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            },
            {
              name: "Education Technology",
              icon: "📚",
              description: "Democratizing education with scalable learning solutions",
              focus: ["Online learning", "Skill development", "Educational content", "Student tools"],
              gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
              name: "Clean Energy",
              icon: "⚡",
              description: "Powering sustainable growth with renewable energy solutions",
              focus: ["Solar systems", "Energy storage", "Grid solutions", "Clean cooking"],
              gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
            },
            {
              name: "Logistics & Supply Chain",
              icon: "🚚",
              description: "Optimizing movement of goods and services across regions",
              focus: ["Last-mile delivery", "Warehousing", "Freight tech", "Route optimization"],
              gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
            },
          ].map((sector, index) => (
            <div key={index} className="bg-white rounded-xl p-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div
                className="relative rounded-lg p-6 h-full overflow-hidden min-h-[320px] flex flex-col"
                style={{
                  background: sector.gradient
                }}
              >
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-5xl mb-4">{sector.icon}</div>
                  <h3 className="text-[20px] font-bold mb-3 text-white">{sector.name}</h3>
                  <p className="text-white mb-4 flex-grow">{sector.description}</p>
                  <div className="border-t border-white/30 pt-4">
                    <h4 className="font-semibold mb-2 text-sm text-white/90">Key Focus Areas:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {sector.focus.map((item, i) => (
                        <li key={i} className="text-sm text-white flex items-center">
                          <span className="text-white mr-2">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sectors
