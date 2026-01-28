import { COLORS, FONTS } from '../../../constants'

function EventCard({ event, showImage, onRegister, showNav, onPrev, onNext, canPrev, canNext }) {
  if (showImage) {
    return (
      <>
        <div className="relative w-full h-[280px] rounded-t-lg overflow-hidden">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover pointer-events-none" />
          <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded">
            <span className="text-[12px] uppercase tracking-wider text-black font-medium font-mono">
              Upcoming Events
            </span>
          </div>
          {showNav && canPrev && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {showNav && canNext && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        <EventCardContent event={event} onRegister={onRegister} hasImage />
      </>
    )
  }

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-5 relative">
      <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded">
        <span className="text-[12px] uppercase tracking-wider text-black font-medium font-mono">
          Upcoming Events
        </span>
      </div>
      <div className="flex items-start gap-4 mt-12">
        <DateBadge month={event.date.month} day={event.date.day} />
        <EventDetails event={event} />
      </div>
      <RegisterButton onClick={onRegister} />
    </div>
  )
}

function EventCardContent({ event, onRegister, hasImage }) {
  return (
    <div className={`bg-[#0a0a0a] border border-gray-800 ${hasImage ? 'border-t-0 rounded-b-lg' : 'rounded-lg'} p-5`}>
      <div className="flex items-start gap-4">
        <DateBadge month={event.date.month} day={event.date.day} />
        <EventDetails event={event} />
      </div>
      <RegisterButton onClick={onRegister} />
    </div>
  )
}

function DateBadge({ month, day }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-lg px-4 py-3 min-w-[70px]">
      <span className="text-[12px] uppercase text-gray-400 font-mono">{month}</span>
      <span className="text-[28px] font-bold text-white font-heading">{day}</span>
    </div>
  )
}

function EventDetails({ event }) {
  return (
    <div className="flex-1">
      <h4 className="text-[20px] font-bold text-white mb-1 font-heading">
        {event.title}
      </h4>
      <p className="text-[14px] text-gray-400 leading-[1.4] mb-2 font-mono">
        {event.description}
      </p>
      <div className="flex items-center gap-2 text-[13px] text-orange-500 font-mono">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{event.location}</span>
      </div>
    </div>
  )
}

function RegisterButton({ onClick }) {
  return (
    <button
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className="w-full px-5 py-3 bg-[#2a2a2a] text-white font-bold uppercase text-sm hover:bg-[#3a3a3a] transition-colors mt-3"
      style={{ borderRadius: 0 }}
    >
      REGISTER
    </button>
  )
}

export default EventCard
