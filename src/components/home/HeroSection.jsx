import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { COLORS, FONTS } from '../../constants'

const eventsData = [
  {
    id: 1,
    title: "Founder's Meet",
    description: "Connect with fellow founders and get feedback from mentors.",
    date: { month: 'Feb', day: '15' },
    location: "Virtual Event",
    image: "/Networkingimage.png",
    formDate: "February 15, 2026 • Virtual Event"
  },
  {
    id: 2,
    title: "Pitch Practice Night",
    description: "Refine your investor pitch with live feedback from VCs and angels.",
    date: { month: 'Mar', day: '08' },
    location: "San Francisco, CA",
    image: "/Networkingimage.png",
    formDate: "March 8, 2026 • San Francisco, CA"
  },
  {
    id: 3,
    title: "Demo Day Prep",
    description: "Final rehearsals before Demo Day with industry experts.",
    date: { month: 'Mar', day: '22' },
    location: "Virtual Event",
    image: "/Networkingimage.png",
    formDate: "March 22, 2026 • Virtual Event"
  }
]

function HeroSection() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0)
  const [showRegistration, setShowRegistration] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(null)
  const carouselRef = useRef(null)

  const currentEvent = eventsData[currentEventIndex]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    setShowRegistration(false)
    setSubmitted(false)
    setFormData({ name: '', email: '', role: '' })
  }

  const goToNextEvent = () => {
    if (currentEventIndex < eventsData.length - 1) {
      setCurrentEventIndex(prev => prev + 1)
    }
  }

  const goToPrevEvent = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(prev => prev - 1)
    }
  }

  // Mouse/Touch drag handlers
  const handleDragStart = (clientX) => {
    if (showRegistration) return
    setIsDragging(true)
    dragStartX.current = clientX
  }

  const handleDragMove = (clientX) => {
    if (!isDragging || dragStartX.current === null) return
    const diff = clientX - dragStartX.current
    // Limit drag when at edges
    if ((currentEventIndex === 0 && diff > 0) ||
        (currentEventIndex === eventsData.length - 1 && diff < 0)) {
      setDragOffset(diff * 0.3) // Resistance at edges
    } else {
      setDragOffset(diff)
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 80
    if (dragOffset < -threshold && currentEventIndex < eventsData.length - 1) {
      goToNextEvent()
    } else if (dragOffset > threshold && currentEventIndex > 0) {
      goToPrevEvent()
    }

    setDragOffset(0)
    dragStartX.current = null
  }

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  // Touch events
  const handleTouchStart = (e) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  // Calculate card position based on index relative to current
  const getCardStyle = (index) => {
    const offset = index - currentEventIndex
    const baseTranslate = offset * 500 // Card width + gap
    const dragTranslate = isDragging ? dragOffset : 0

    // Stack effect for cards behind
    const stackOffset = offset > 0 ? offset * 25 : 0
    const scale = offset > 0 ? 1 - offset * 0.05 : 1
    const opacity = offset > 0 ? 1 - offset * 0.3 : offset < 0 ? 0 : 1
    const blur = offset > 0 ? offset * 2 : 0

    return {
      transform: `translateX(${baseTranslate + dragTranslate + stackOffset}px) scale(${scale})`,
      opacity: Math.max(0, opacity),
      filter: `blur(${blur}px)`,
      zIndex: offset === 0 ? 20 : offset > 0 ? 10 - offset : 5,
      transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }

  return (
    <section className="snap-center relative h-screen dark-grid pt-[70px] flex items-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div className="space-y-8">
          <h1 className="uppercase leading-none" style={{ fontFamily: FONTS.heading }}>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              BUILD<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              SHIP<span style={{ color: COLORS.primary }}>.</span>
            </span>
            <span className="block text-[72px] lg:text-[96px] font-black text-white leading-[1.1]">
              PITCH<span style={{ color: COLORS.primary }}>.</span>
            </span>
          </h1>

          <p className="text-lg max-w-lg text-white" style={{ fontFamily: FONTS.mono, fontWeight: 300 }}>
            Turn your SaaS idea into a startup in 8 weeks, then pitch it to real investors. Global founders welcome. No equity taken.
          </p>

          <div className="space-y-4">
            <Link
              to="/apply"
              className="inline-block px-10 py-5 bg-white text-orange-600 font-bold uppercase text-lg hover:bg-gray-100 transition-colors"
              style={{ borderRadius: 0 }}
            >
              APPLY TO 2026 Q1 COHORT
            </Link>

            <p className="text-sm text-neutral-500" style={{ fontFamily: FONTS.mono }}>
              Applications closing for Cohort 2026.
            </p>
          </div>
        </div>

        {/* Upcoming Events - Desktop Only */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          {/* Container for smooth transitions */}
          <div
            ref={carouselRef}
            className="relative w-[520px] h-[480px] overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* All Event Cards */}
            {eventsData.map((event, index) => {
              const isActive = index === currentEventIndex
              const cardStyle = getCardStyle(index)

              return (
                <div
                  key={event.id}
                  className={`absolute top-0 left-0 w-[480px] select-none ${
                    showRegistration && isActive ? 'opacity-0 scale-95 pointer-events-none' : ''
                  }`}
                  style={cardStyle}
                >
                  {/* Card with Image (only for first/active card) or without */}
                  {index === 0 ? (
                    <>
                      {/* Top Half - Image */}
                      <div className="relative w-full h-[280px] rounded-t-lg overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover pointer-events-none" />
                        {/* Text bubble overlay */}
                        <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded">
                          <span className="text-[12px] uppercase tracking-wider text-black font-medium" style={{ fontFamily: FONTS.mono }}>
                            Upcoming Events
                          </span>
                        </div>
                        {/* Navigation arrows */}
                        {currentEventIndex > 0 && isActive && (
                          <button
                            onClick={(e) => { e.stopPropagation(); goToPrevEvent(); }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}
                        {currentEventIndex < eventsData.length - 1 && isActive && (
                          <button
                            onClick={(e) => { e.stopPropagation(); goToNextEvent(); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* Bottom Half - Content */}
                      <div className="bg-[#0a0a0a] border border-gray-800 border-t-0 rounded-b-lg p-5">
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3 min-w-[70px]">
                            <span className="text-[12px] uppercase text-gray-400" style={{ fontFamily: FONTS.mono }}>{event.date.month}</span>
                            <span className="text-[28px] font-bold text-white" style={{ fontFamily: FONTS.heading }}>{event.date.day}</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[20px] font-bold text-white mb-1" style={{ fontFamily: FONTS.heading }}>
                              {event.title}
                            </h4>
                            <p className="text-[14px] text-gray-400 leading-[1.4] mb-2" style={{ fontFamily: FONTS.mono }}>
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-[13px]" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); setShowRegistration(true); }}
                          className="w-full px-5 py-3 bg-[#2a2a2a] text-white font-bold uppercase text-sm hover:bg-[#3a3a3a] transition-colors mt-3"
                          style={{ borderRadius: 0 }}
                        >
                          REGISTER
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Cards without image */
                    <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5 relative">
                      <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded">
                        <span className="text-[12px] uppercase tracking-wider text-black font-medium" style={{ fontFamily: FONTS.mono }}>
                          Upcoming Events
                        </span>
                      </div>
                      <div className="flex items-start gap-4 mt-12">
                        <div className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3 min-w-[70px]">
                          <span className="text-[12px] uppercase text-gray-400" style={{ fontFamily: FONTS.mono }}>{event.date.month}</span>
                          <span className="text-[28px] font-bold text-white" style={{ fontFamily: FONTS.heading }}>{event.date.day}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-[20px] font-bold text-white mb-1" style={{ fontFamily: FONTS.heading }}>
                            {event.title}
                          </h4>
                          <p className="text-[14px] text-gray-400 leading-[1.4] mb-2" style={{ fontFamily: FONTS.mono }}>
                            {event.description}
                          </p>
                          <div className="flex items-center gap-2 text-[13px]" style={{ color: COLORS.primary, fontFamily: FONTS.mono }}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); setCurrentEventIndex(index); setShowRegistration(true); }}
                        className="w-full px-5 py-3 bg-[#2a2a2a] text-white font-bold uppercase text-sm hover:bg-[#3a3a3a] transition-colors mt-4"
                        style={{ borderRadius: 0 }}
                      >
                        REGISTER
                      </button>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Dots indicator */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2" style={{ zIndex: 25 }}>
              {eventsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    index === currentEventIndex
                      ? 'bg-orange-500 w-6'
                      : 'bg-gray-600 hover:bg-gray-500 w-2'
                  }`}
                />
              ))}
            </div>

            {/* Registration Form */}
            <div
              className={`absolute top-0 left-0 w-[480px] transition-all duration-600 ease-out ${
                showRegistration ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ zIndex: 30 }}
            >
              {!submitted ? (
                <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-7">
                  {/* Form Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h4 className="text-[20px] font-bold text-white mb-1" style={{ fontFamily: FONTS.heading }}>
                        {currentEvent.title}
                      </h4>
                      <p className="text-[13px] text-gray-400" style={{ fontFamily: FONTS.mono }}>
                        {currentEvent.formDate}
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="text-gray-500 hover:text-white transition-colors p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="w-full h-[1px] bg-gray-800 mb-5"></div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-[13px] uppercase tracking-wider text-gray-400 mb-2" style={{ fontFamily: FONTS.mono }}>
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        style={{ fontFamily: FONTS.mono, fontSize: '15px' }}
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-[13px] uppercase tracking-wider text-gray-400 mb-2" style={{ fontFamily: FONTS.mono }}>
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                        style={{ fontFamily: FONTS.mono, fontSize: '15px' }}
                      />
                    </div>

                    {/* Role Dropdown */}
                    <div>
                      <label className="block text-[13px] uppercase tracking-wider text-gray-400 mb-2" style={{ fontFamily: FONTS.mono }}>
                        I am a... <span className="text-orange-500">*</span>
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer"
                        style={{ fontFamily: FONTS.mono, fontSize: '15px' }}
                      >
                        <option value="" disabled>Select your role</option>
                        <option value="founder">Founder</option>
                        <option value="student">Student</option>
                        <option value="mentor">Mentor</option>
                        <option value="technical_lead">Technical Lead</option>
                        <option value="investor">Investor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-white text-orange-600 font-bold uppercase text-base hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                      style={{ borderRadius: 0 }}
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'CONFIRM REGISTRATION'}
                    </button>
                  </form>
                </div>
              ) : (
                // Success State
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-[24px] font-bold text-white mb-3" style={{ fontFamily: FONTS.heading }}>
                    You're Registered!
                  </h4>
                  <p className="text-[15px] text-gray-400 leading-[1.6] mb-6" style={{ fontFamily: FONTS.mono }}>
                    We've sent a confirmation email to {formData.email}. See you at {currentEvent.title}!
                  </p>
                  <button
                    onClick={handleClose}
                    className="inline-block px-8 py-4 bg-white text-orange-600 font-bold uppercase text-base hover:bg-gray-100 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    BACK TO EVENTS
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
