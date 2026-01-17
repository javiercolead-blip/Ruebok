import { COLORS, FONTS } from '../../constants'

const founderTypes = [
  {
    title: "First-Time Founders",
    description: "You have a validated idea and technical skills but need guidance on go-to-market strategy, fundraising, and scaling.",
    requirements: [
      "Technical background preferred",
      "Ready to commit 20+ hrs/week"
    ],
    imageName: "founder-image-1.jpg"
  },
  {
    title: "International Founders",
    description: "Based outside the US but building for global markets. We help you navigate cross-border challenges and connect with US investors.",
    requirements: [
      "Any country welcome",
      "English proficiency required"
    ],
    imageName: "founder-image-2.jpg"
  },
  {
    title: "Career Switchers",
    description: "Leaving corporate or another industry to pursue your startup dream. Your domain expertise is your unfair advantage.",
    requirements: [
      "Industry experience valued",
      "Passion over pedigree"
    ],
    imageName: "founder-image-3.jpg"
  }
]

const ImagePlaceholder = ({ name }) => (
  <div className="h-48 md:h-56 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
    <div className="text-center">
      <svg className="w-16 h-16 mx-auto mb-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-xs text-gray-500 font-mono">{name}</span>
    </div>
  </div>
)

function FounderCard({ title, description, requirements, imageName }) {
  return (
    <div className="border border-gray-800 rounded-lg overflow-hidden flex flex-col" style={{ backgroundColor: COLORS.darkGray }}>
      <ImagePlaceholder name={imageName} />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 flex-1" style={{ fontFamily: FONTS.mono }}>
          {description}
        </p>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-gray-300">
              <span style={{ color: COLORS.primary }}>✓</span> {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function WhoShouldApplySection() {
  return (
    <section className="snap-center relative h-screen bg-[#111111] dark-grid pt-[70px] pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 pt-6 md:pt-12 h-full flex flex-col">
        <h2 className="text-[34px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight mb-8 md:mb-12">
          Who Should Apply<span style={{ color: COLORS.primary }}>?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 flex-1">
          {founderTypes.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoShouldApplySection
