import { useState, useEffect, useRef } from 'react'

function EventCard({ event, isActive, onRegister }) {
  const [contentVisible, setContentVisible] = useState(isActive)
  const prevActiveRef = useRef(isActive)

  useEffect(() => {
    // Only trigger fade-in when card becomes active (wasn't active before, now is)
    if (isActive && !prevActiveRef.current) {
      // Wait for the card slide animation to complete (600ms), then fade in content
      setContentVisible(false)
      const timer = setTimeout(() => setContentVisible(true), 650)
      return () => clearTimeout(timer)
    } else if (isActive) {
      // Already active on mount, show immediately
      setContentVisible(true)
    } else {
      // Not active, hide content
      setContentVisible(false)
    }
    prevActiveRef.current = isActive
  }, [isActive])

  return (
    <div className="relative w-full h-[540px] rounded-xl overflow-hidden border border-gray-700">
      {/* Full-bleed background image - zoomed and cropped */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover scale-125 pointer-events-none"
      />

      {/* Upcoming Events badge - fades in */}
      <div
        className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded z-10 transition-opacity duration-500 ease-out"
        style={{ opacity: contentVisible ? 1 : 0 }}
      >
        <span className="text-[12px] uppercase tracking-wider text-black font-medium font-mono">
          Upcoming Events
        </span>
      </div>

      {/* Glass blur gradient at bottom - fades in */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60%] transition-opacity duration-500 ease-out"
        style={{
          opacity: contentVisible ? 1 : 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.25) 75%, transparent 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)'
        }}
      />

      {/* Content overlay at bottom - fades in */}
      <div
        className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-500 ease-out"
        style={{ opacity: contentVisible ? 1 : 0 }}
      >
        <div className="flex items-start gap-4">
          {/* Date badge */}
          <div className="flex flex-col items-center justify-center bg-black/60 rounded-lg px-4 py-3 min-w-[70px] border border-white/15">
            <span className="text-[12px] uppercase text-white/80 font-mono">{event.date.month}</span>
            <span className="text-[28px] font-bold text-white font-heading">{event.date.day}</span>
          </div>

          {/* Event details */}
          <div className="flex-1">
            <h4 className="text-[20px] font-bold text-white mb-1 font-heading">
              {event.title}
            </h4>
            <p className="text-[14px] text-white/80 leading-[1.4] mb-2 font-mono">
              {event.description}
            </p>
            <div className="flex items-center gap-2 text-[13px] text-orange-400 font-mono">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        {/* Register button */}
        <button
          onClick={(e) => { e.stopPropagation(); onRegister(); }}
          className="w-full px-5 py-3 bg-black/60 text-white font-bold uppercase text-sm hover:bg-black/70 transition-colors mt-4 border border-white/15 rounded-lg"
        >
          REGISTER
        </button>
      </div>
    </div>
  )
}

export default EventCard
