import { useState, useEffect, useRef } from 'react'
import { COLORS, FONTS } from '../../constants'

const cardDetails = {
  build: {
    title: "Build",
    subtitle: "Weeks 1-4",
    description: "Transform your idea into a working product with hands-on guidance and weekly milestones.",
    features: [
      "Customer discovery and validation",
      "MVP blueprint and architecture",
      "No-code prototyping tools",
      "Weekly mentor feedback sessions"
    ]
  },
  mentorship: {
    title: "Mentorship",
    subtitle: "Ongoing Support",
    description: "Get personalized feedback from founders who've scaled startups and VCs who've funded successful companies.",
    features: [
      "1-on-1 mentor sessions",
      "Industry expert office hours",
      "Peer learning community",
      "Real-world case studies"
    ]
  },
  funding: {
    title: "Funding",
    subtitle: "Investor Connections",
    description: "Refine your pitch and connect directly with global investors actively seeking deals.",
    features: [
      "Pitch deck development",
      "Investor intro workshops",
      "Demo day presentation",
      "Term sheet negotiations support"
    ]
  },
  network: {
    title: "Network",
    subtitle: "Lifetime Access",
    description: "Join a global community of founders, mentors, and investors building together.",
    features: [
      "Alumni community access",
      "Co-founder matching",
      "Partnership opportunities",
      "Exclusive events and summits"
    ]
  }
}

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const ImagePlaceholder = ({ name }) => (
  <div className="w-[520px] h-[322px] bg-[#0a0a0a] border border-gray-800 rounded-xl p-4">
    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-gray-700 flex items-center justify-center">
      <div className="text-center p-6">
        <svg className="w-14 h-14 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="text-xs text-gray-500 font-mono">{name}</span>
      </div>
    </div>
  </div>
)

const FeatureList = ({ features }) => (
  <ul className="space-y-1.5">
    {features.map((feature, index) => (
      <li key={index} className="flex items-start gap-2">
        <CheckIcon />
        <span className="text-[16px] text-white" style={{ fontFamily: FONTS.mono }}>{feature}</span>
      </li>
    ))}
  </ul>
)

const TabButton = ({ tab, activeTab, onClick }) => (
  <button
    role="tab"
    aria-selected={activeTab === tab}
    aria-controls={`${tab}-panel`}
    onClick={() => onClick(tab)}
    className="relative py-4 text-[16px] md:text-[20px] font-medium transition-colors duration-300 cursor-pointer capitalize"
    style={{
      color: activeTab === tab ? '#ffffff' : '#999999',
      fontFamily: FONTS.mono
    }}
    onMouseEnter={(e) => {
      if (activeTab !== tab) e.currentTarget.style.color = '#cccccc'
    }}
    onMouseLeave={(e) => {
      if (activeTab !== tab) e.currentTarget.style.color = '#999999'
    }}
  >
    {tab}
    <span
      className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
      style={{
        backgroundColor: COLORS.primary,
        transform: activeTab === tab ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'center'
      }}
    />
  </button>
)

const TabPanel = ({ id, activeTab, title, paragraphs, imageName }) => (
  <div
    id={`${id}-panel`}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
    className={`transition-all duration-700 ease-in-out ${activeTab === id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 absolute inset-0 pointer-events-none'}`}
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[calc(100vh-220px)]">
      <div className="flex flex-col justify-start px-8 lg:px-20 pt-8 lg:pt-12 pb-8" style={{ backgroundColor: '#111111' }}>
        <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-tight mb-4 max-w-[550px]" style={{ fontFamily: FONTS.heading }}>
          {title}
        </h2>
        {paragraphs.map((text, i) => (
          <p key={i} className="text-[14px] md:text-[16px] text-[#cccccc] leading-[1.6] max-w-[550px] mb-4" style={{ fontFamily: FONTS.mono }}>
            {text}
          </p>
        ))}
      </div>
      <div className="hidden lg:flex items-start justify-end pr-[100px] pt-[60px]">
        <ImagePlaceholder name={imageName} />
      </div>
    </div>
  </div>
)

const tabPanelContent = {
  build: {
    title: "Transform your idea into reality",
    paragraphs: [
      "In the first four weeks, you'll validate your concept with real customers, define your ideal customer profile, and build a working MVP through live workshops and hands-on building time.",
      "You'll get weekly feedback from experienced founders, access to no-code tools, and templates for user interviews to landing pages. By the end, you'll have a live product with early users."
    ],
    imageName: "build-workspace.jpg"
  },
  mentorship: {
    title: "Learn from founders who've been there",
    paragraphs: [
      "Connect with mentors who have scaled startups from idea to exit—founders who've raised Series A+, operators from Google and Stripe, and industry experts across fintech to healthcare.",
      "You'll get matched with 2-3 mentors based on your industry. Expect bi-weekly 1-on-1s, weekly office hours, and async support for everything from product strategy to hiring."
    ],
    imageName: "mentorship-session.jpg"
  },
  funding: {
    title: "Access capital to fuel your growth",
    paragraphs: [
      "Eligible startups can receive up to $100K in pre-seed funding on founder-friendly terms. We invest in startups with validated demand and founders who demonstrate exceptional execution.",
      "You'll get intensive pitch coaching, financial modeling workshops, and warm introductions to 100+ angels and VCs. Demo Day puts you in front of investors actively seeking pre-seed deals."
    ],
    imageName: "funding-pitch.jpg"
  },
  network: {
    title: "Join a global founder community",
    paragraphs: [
      "Join 500+ founders building across 30+ countries. Our alumni have raised over $50M collectively, with several exits. This network becomes your lifelong resource for advice and partnerships.",
      "Get access to our private Slack, quarterly summits, regional meetups, and perks from AWS, Notion, and Stripe. Many of our best collaborations have come from within the network."
    ],
    imageName: "network-event.jpg"
  }
}

function LaunchTimelineSection() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [touchStartY, setTouchStartY] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false)
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const [isCarouselVisible, setIsCarouselVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('build')
  const carouselSectionRef = useRef(null)
  const totalCards = 4

  const handleTouchStart = (e) => {
    setAutoScrollEnabled(false)
    setIsDragging(true)
    setIsHorizontalSwipe(false)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
    setTouchStartY(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentTouchX = e.targetTouches[0].clientX
    const currentTouchY = e.targetTouches[0].clientY
    const deltaX = Math.abs(currentTouchX - touchStart)
    const deltaY = Math.abs(currentTouchY - touchStartY)

    if (!isHorizontalSwipe && (deltaX > 5 || deltaY > 5)) {
      if (!(deltaY > deltaX * 2 && deltaY > 30)) {
        setIsHorizontalSwipe(true)
      }
    }

    if (isHorizontalSwipe) {
      e.preventDefault()
      setTouchEnd(currentTouchX)
      setDragOffset((currentTouchX - touchStart) * 0.6)
    }
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    setIsDragging(false)

    if (isHorizontalSwipe) {
      const distance = touchStart - touchEnd
      if (distance > 50) setCarouselIndex((prev) => (prev + 1) % totalCards)
      if (distance < -50) setCarouselIndex((prev) => (prev - 1 + totalCards) % totalCards)
    }

    setDragOffset(0)
    setTouchStart(0)
    setTouchEnd(0)
    setTouchStartY(0)
    setIsHorizontalSwipe(false)
  }

  useEffect(() => {
    const currentRef = carouselSectionRef.current
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setIsCarouselVisible(entry.isIntersecting)),
      { threshold: 0.5 }
    )
    if (currentRef) observer.observe(currentRef)
    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [])

  useEffect(() => {
    if (!autoScrollEnabled || !isCarouselVisible) return
    const interval = setInterval(() => setCarouselIndex((prev) => (prev + 1) % totalCards), 3000)
    return () => clearInterval(interval)
  }, [autoScrollEnabled, isCarouselVisible])

  const mobileTabLabels = ['Build', 'Ship', 'Pitch', 'Scale']

  return (
    <section ref={carouselSectionRef} className="snap-center relative h-screen bg-[#111111] pt-[70px] overflow-hidden">
      <div className="px-8 lg:px-20 pt-10 md:pt-16">
        <h2 className="text-[34px] sm:text-[40px] lg:text-[56px] font-bold text-white leading-tight max-w-[1400px] mx-auto">
          Launch Timeline
        </h2>
      </div>

      {/* Mobile: Carousel */}
      <div className="md:hidden">
        <div className="flex mb-6 px-8 justify-center" style={{ gap: '48px' }}>
          {mobileTabLabels.map((label, index) => (
            <div key={label} className="relative py-3 text-center">
              <span
                className="text-[18px] font-bold uppercase tracking-wide transition-all duration-300"
                style={{ fontFamily: "'Roboto Mono', monospace", color: '#fff' }}
              >
                {label}
              </span>
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-300"
                style={{
                  backgroundColor: COLORS.primary,
                  transform: carouselIndex === index ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left'
                }}
              />
            </div>
          ))}
        </div>

        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex"
            style={{
              transform: `translateX(calc(-${carouselIndex * 100}vw + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 500ms ease-out',
              scrollSnapType: 'x mandatory'
            }}
          >
            {/* Build Card */}
            <MobileCard type="build" cardDetails={cardDetails} />
            {/* Mentorship Card */}
            <MobileCard type="mentorship" cardDetails={cardDetails} />
            {/* Funding Card */}
            <MobileCard type="funding" cardDetails={cardDetails} />
            {/* Network Card */}
            <MobileCard type="network" cardDetails={cardDetails} />
          </div>
        </div>
      </div>

      {/* Desktop: Tab Navigation */}
      <nav
        className="hidden md:block border-b border-gray-800 mt-6"
        style={{ backgroundColor: '#111111' }}
        role="tablist"
        aria-label="Program offerings"
      >
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          <div className="flex justify-start gap-8 md:gap-12">
            {['build', 'mentorship', 'funding', 'network'].map((tab) => (
              <TabButton key={tab} tab={tab} activeTab={activeTab} onClick={setActiveTab} />
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop Tab Panels */}
      <div className="hidden md:block relative flex-1">
        {Object.entries(tabPanelContent).map(([id, content]) => (
          <TabPanel key={id} id={id} activeTab={activeTab} {...content} />
        ))}
      </div>
    </section>
  )
}

function MobileCard({ type, cardDetails }) {
  const details = cardDetails[type]

  return (
    <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center', width: '100vw' }}>
      <div className="overflow-hidden h-[520px] flex flex-col px-8">
        <MobileCardVisual type={type} />
        <div className="mb-3"></div>
        <div className="pb-5 flex-1">
          <p className="text-[19px] text-white leading-[1.5] mb-3">
            {type === 'build' && "Ship your MVP in 4 weeks with expert guidance."}
            {type === 'mentorship' && "Learn from founders who've built and scaled companies."}
            {type === 'funding' && "Connect with investors actively seeking deals."}
            {type === 'network' && "Lifetime access to our community of founders and mentors."}
          </p>
          <FeatureList features={details.features} />
        </div>
      </div>
    </div>
  )
}

function MobileCardVisual({ type }) {
  if (type === 'build') {
    return (
      <div className="relative h-[240px] mb-3 overflow-hidden bg-[#0d0d0d]">
        <div className="h-full flex flex-col">
          <div className="px-3 py-2 flex items-center gap-2 border-b border-gray-800" style={{ backgroundColor: COLORS.darkGray }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>
            <span className="text-[12px] text-gray-400 font-mono">startup.ts</span>
          </div>
          <div className="p-6 font-mono text-[16px] leading-relaxed flex-1">
            <div className="space-y-2">
              <div><span className="text-purple-400">const</span><span className="text-white"> mvp = {'{'}</span></div>
              <div className="pl-4"><span className="text-white">build: </span><span style={{ color: COLORS.primary }}>"fast"</span><span className="text-gray-500">,</span></div>
              <div className="pl-4"><span className="text-white">launch: </span><span className="text-purple-400">true</span><span className="text-gray-500">,</span></div>
              <div className="pl-4"><span className="text-white">status: </span><span style={{ color: COLORS.primary }}>"ready"</span></div>
              <div><span className="text-white">{'}'}</span></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === 'mentorship') {
    return (
      <div className="relative h-[240px] mb-3 overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
        <div className="relative w-full h-full flex items-center justify-center p-8">
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-orange-500 whitespace-nowrap" style={{ fontFamily: FONTS.mono }}>
              YOU
            </div>
          </div>
          {[
            { pos: 'top-4 left-4', color: 'blue' },
            { pos: 'top-4 right-4', color: 'purple' },
            { pos: 'bottom-4 left-4', color: 'green' },
            { pos: 'bottom-4 right-4', color: 'pink' }
          ].map(({ pos, color }) => (
            <div key={pos} className={`absolute ${pos}`}>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${color}-500 to-${color}-600 flex items-center justify-center shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'funding') {
    return (
      <div className="relative h-[240px] mb-3 bg-[#0d0d0d] p-7 flex flex-col">
        <div className="text-[12px] text-gray-400 font-semibold mb-3 uppercase tracking-wide">Traction Growth</div>
        <div className="flex-1 relative flex items-end justify-between gap-4 pb-7">
          {[60, 85, 115, 145].map((height, i) => (
            <div key={i} className="flex flex-col items-center gap-2 flex-1 relative">
              <div className="w-full rounded-t relative" style={{ height: `${height}px`, backgroundColor: COLORS.primary }}>
                {i === 3 && (
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[16px] font-bold text-white whitespace-nowrap">
                    2.5x
                  </div>
                )}
              </div>
              <span className="text-[12px] text-gray-400 font-medium">Q{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (type === 'network') {
    return (
      <div className="relative h-[240px] mb-3 overflow-hidden bg-gradient-to-br from-gray-900 to-black p-10 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-5">
          {['orange-500 to-red-600', 'blue-500 to-purple-600', 'green-500 to-teal-600', 'yellow-500 to-orange-600', 'pink-500 to-rose-600 ring-2 ring-white', 'indigo-500 to-blue-600'].map((gradient, i) => (
            <div key={i} className={`w-18 h-18 rounded-full bg-gradient-to-br from-${gradient} shadow-lg`}></div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default LaunchTimelineSection
