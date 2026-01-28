import { useState, useRef } from 'react'
import { eventsData } from './eventsData'
import EventCard from './EventCard'
import RegistrationForm from './RegistrationForm'

function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showRegistration, setShowRegistration] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(null)

  const currentEvent = eventsData[currentIndex]
  const canNext = currentIndex < eventsData.length - 1
  const canPrev = currentIndex > 0

  const goNext = () => canNext && setCurrentIndex(i => i + 1)
  const goPrev = () => canPrev && setCurrentIndex(i => i - 1)

  // Drag handlers
  const handleDragStart = (clientX) => {
    if (showRegistration) return
    setIsDragging(true)
    dragStartX.current = clientX
  }

  const handleDragMove = (clientX) => {
    if (!isDragging || dragStartX.current === null) return
    const diff = clientX - dragStartX.current
    if ((currentIndex === 0 && diff > 0) || (currentIndex === eventsData.length - 1 && diff < 0)) {
      setDragOffset(diff * 0.3)
    } else {
      setDragOffset(diff)
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = 80
    if (dragOffset < -threshold && canNext) goNext()
    else if (dragOffset > threshold && canPrev) goPrev()
    setDragOffset(0)
    dragStartX.current = null
  }

  const getCardStyle = (index) => {
    const offset = index - currentIndex
    const baseTranslate = offset * 500
    const dragTranslate = isDragging ? dragOffset : 0
    const stackOffset = offset > 0 ? offset * 25 : 0
    const scale = offset > 0 ? 1 - offset * 0.05 : 1
    const opacity = offset > 0 ? 1 - offset * 0.3 : offset < 0 ? 0 : 1

    return {
      transform: `translateX(${baseTranslate + dragTranslate + stackOffset}px) scale(${scale})`,
      opacity: Math.max(0, opacity),
      filter: `blur(${offset > 0 ? offset * 2 : 0}px)`,
      zIndex: offset === 0 ? 20 : offset > 0 ? 10 - offset : 5,
      transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }

  return (
    <div
      className="relative w-[520px] h-[480px] overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={(e) => { e.preventDefault(); handleDragStart(e.clientX) }}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => isDragging && handleDragEnd()}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
      onTouchEnd={handleDragEnd}
    >
      {eventsData.map((event, index) => (
        <div
          key={event.id}
          className={`absolute top-0 left-0 w-[480px] select-none ${showRegistration && index === currentIndex ? 'opacity-0 scale-95 pointer-events-none' : ''}`}
          style={getCardStyle(index)}
        >
          <EventCard
            event={event}
            showImage={index === 0}
            showNav={index === currentIndex}
            onRegister={() => { setCurrentIndex(index); setShowRegistration(true) }}
            onPrev={goPrev}
            onNext={goNext}
            canPrev={canPrev}
            canNext={canNext}
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-[25]">
        {eventsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-orange-500 w-6' : 'bg-gray-600 hover:bg-gray-500 w-2'}`}
          />
        ))}
      </div>

      {/* Registration Form */}
      <div
        className={`absolute top-0 left-0 w-[480px] transition-all duration-600 ease-out z-[30] ${showRegistration ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <RegistrationForm event={currentEvent} onClose={() => setShowRegistration(false)} />
      </div>
    </div>
  )
}

export default EventCarousel
