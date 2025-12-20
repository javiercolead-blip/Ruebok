function Sectors() {
  return (
    <div className="min-h-screen bg-gray-50 paper-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-black mb-6">Sectors We Invest In</h1>
        <p className="subheadline text-[20px] text-gray-600 max-w-3xl mb-12">
          We focus on high-impact sectors that are transforming economies and improving lives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Sector Cards */}
          {[
            {
              name: "Agriculture & AgTech",
              icon: "🌾",
              description: "Modernizing farming with technology to increase yields and sustainability",
              focus: ["Precision agriculture", "Supply chain optimization", "Farm management software", "Crop monitoring"]
            },
            {
              name: "Financial Technology",
              icon: "💳",
              description: "Building inclusive financial services for underserved markets",
              focus: ["Mobile payments", "Digital banking", "Lending platforms", "Insurance tech"]
            },
            {
              name: "Healthcare & MedTech",
              icon: "🏥",
              description: "Expanding access to quality healthcare through innovation",
              focus: ["Telemedicine", "Health records", "Diagnostics", "Pharmacy tech"]
            },
            {
              name: "Education Technology",
              icon: "📚",
              description: "Democratizing education with scalable learning solutions",
              focus: ["Online learning", "Skill development", "Educational content", "Student tools"]
            },
            {
              name: "Clean Energy",
              icon: "⚡",
              description: "Powering sustainable growth with renewable energy solutions",
              focus: ["Solar systems", "Energy storage", "Grid solutions", "Clean cooking"]
            },
            {
              name: "Logistics & Supply Chain",
              icon: "🚚",
              description: "Optimizing movement of goods and services across regions",
              focus: ["Last-mile delivery", "Warehousing", "Freight tech", "Route optimization"]
            },
          ].map((sector, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{sector.icon}</div>
              <h3 className="text-[24px] font-bold mb-3">{sector.name}</h3>
              <p className="text-gray-600 mb-4">{sector.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold mb-2 text-sm text-gray-700">Key Focus Areas:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {sector.focus.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sectors
