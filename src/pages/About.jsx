import { useEffect } from 'react'

function About() {
  useEffect(() => {
    document.title = 'Mission'
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h1 className="text-[56px] font-bold text-white mb-6">About Ruebok Ventures</h1>
        <p className="subheadline text-[20px] text-gray-300 max-w-3xl mb-12">
          We're on a mission to empower the next generation of innovators building solutions for emerging markets.
        </p>

        {/* Mission Section */}
        <div className="bg-gray-900 rounded-xl p-12 shadow-lg mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4">Our Mission</h2>
          <p className="text-[18px] text-gray-300 leading-relaxed">
            Ruebok exists to solve the execution gap. We believe the biggest barrier to innovation is not a lack of ideas but a lack of structure. Our mission is to provide the high-performance environment and operational infrastructure founders need to turn raw ambition into a scalable business. We strip away the legal, financial, and technical friction so you can focus entirely on building a product people want.
          </p>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold text-white mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Founder-First",
                description: "We put founders at the center of everything we do, providing hands-on support beyond just capital."
              },
              {
                title: "Long-Term Partnership",
                description: "We're committed to our portfolio companies for the long haul, through ups and downs."
              },
              {
                title: "Impact-Driven",
                description: "We measure success not just in returns, but in the positive change our companies create."
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-[20px] font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-[32px] font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Sarah Johnson", role: "Managing Partner", background: "Former VP at TechCorp" },
              { name: "David Chen", role: "Investment Director", background: "10+ years in emerging markets" },
              { name: "Amara Okafor", role: "Portfolio Manager", background: "Ex-founder, 2 successful exits" },
              { name: "Marcus Williams", role: "Venture Partner", background: "Serial entrepreneur, mentor" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-[18px] font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-400 mb-1">{member.role}</p>
                <p className="text-xs text-gray-500">{member.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-12">
          <h2 className="text-[32px] font-bold text-white mb-6">Investment Thesis</h2>
          <div className="space-y-4">
            <p className="text-[18px] text-gray-300 leading-relaxed">
              We invest in early-stage companies (Seed to Series A) solving fundamental problems in emerging markets
              across agriculture, fintech, healthcare, education, and infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Check Size</h4>
                  <p className="text-sm text-gray-400">$500K - $3M initial investment</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Stage</h4>
                  <p className="text-sm text-gray-400">Seed to Series A</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Geography</h4>
                  <p className="text-sm text-gray-400">Emerging markets globally</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Follow-on</h4>
                  <p className="text-sm text-gray-400">Reserve for future rounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
