function Portfolio() {
  const companies = [
    {
      name: "Cassava Kenya",
      sector: "Agriculture",
      stage: "Seed",
      description: "Connecting smallholder farmers to markets through a digital platform that streamlines cassava supply chains across East Africa",
      website: "https://www.linkedin.com/company/cassava-kenya/",
      image: "/cassavaimage.jpg"
    },
    {
      name: "Phantasy Studios",
      sector: "Marketing",
      stage: "Seed",
      description: "Creating compelling digital marketing materials for companies and artists, bringing creative visions to life through innovative design",
      website: "https://www.phantasystudios.com",
      image: "/phantasy.png"
    },
    { name: "HealthConnect", sector: "Healthcare", stage: "Series B", description: "Telemedicine platform connecting rural patients with doctors" },
    { name: "EduLearn", sector: "Education", stage: "Seed", description: "Adaptive learning platform for African students" },
    { name: "CleanEnergy Co", sector: "Energy", stage: "Series A", description: "Solar power solutions for off-grid communities" },
    { name: "LogiTrack", sector: "Logistics", stage: "Seed", description: "Last-mile delivery optimization platform" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 paper-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-black mb-6">Our Portfolio</h1>
        <p className="subheadline text-[20px] text-gray-600 max-w-3xl mb-12">
          Discover the innovative companies we've partnered with across agriculture, fintech, and emerging sectors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Portfolio Company Cards */}
          {companies.map((company, index) => {
            // Special styling for Cassava Kenya and Phantasy Studios (first two cards)
            if (index === 0 || index === 1) {
              return (
                <a
                  key={index}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-2 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className="relative rounded-lg p-6 h-full overflow-hidden"
                    style={{
                      backgroundImage: `url(${company.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-[20px] font-bold mb-2 text-white">{company.name}</h3>
                      <div className="flex gap-2 mb-3">
                        <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">{company.sector}</span>
                        <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">{company.stage}</span>
                      </div>
                      <p className="text-white">{company.description}</p>
                    </div>
                  </div>
                </a>
              )
            }

            // Regular cards for other companies
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-[20px] font-bold mb-2">{company.name}</h3>
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{company.sector}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">{company.stage}</span>
                </div>
                <p className="text-gray-600">{company.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
