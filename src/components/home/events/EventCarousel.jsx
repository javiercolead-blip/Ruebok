import { useState, useRef, useEffect } from 'react'
import { eventsData } from './eventsData'
import EventCard from './EventCard'
import RegistrationForm from './RegistrationForm'

function EventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showRegistration, setShowRegistration] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(null)
  const carouselRef = useRef(null)
  const lastWheelTime = useRef(0)

  const currentEvent = eventsData[currentIndex]
  const canNext = currentIndex < eventsData.length - 1
  const canPrev = currentIndex > 0

  const goNext = () => canNext && setCurrentIndex(i => i + 1)
  const goPrev = () => canPrev && setCurrentIndex(i => i - 1)

  // Wheel/scroll handler for two-finger swipe
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleWheel = (e) => {
      if (showRegistration) return

      const absX = Math.abs(e.deltaX)
      const absY = Math.abs(e.deltaY)

      // More sensitive horizontal detection - trigger on smaller deltaX
      // and require vertical scroll to be much larger to pass through
      const isHorizontalScroll = absX > 3 && absX > absY * 0.3

      if (isHorizontalScroll) {
        e.preventDefault()
        e.stopPropagation()

        // Throttle to only allow one card switch per swipe gesture
        const now = Date.now()
        if (now - lastWheelTime.current < 800) return
        lastWheelTime.current = now

        if (e.deltaX > 0 && canNext) {
          goNext()
        } else if (e.deltaX < 0 && canPrev) {
          goPrev()
        }
      }
    }

    carousel.addEventListener('wheel', handleWheel, { passive: false })
    return () => carousel.removeEventListener('wheel', handleWheel)
  }, [canNext, canPrev, showRegistration])

  // Mouse drag handlers (keep for click-drag support)
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
    const dragTranslate = isDragging ? dragOffset : 0

    // Stacked card effect - cards stack to the right with slight offset
    if (offset > 0) {
      // Cards behind (to the right) - stacked effect
      const stackX = offset * 40 // Horizontal offset for stacking
      const stackY = offset * 8 // Slight vertical offset
      const scale = 1 - offset * 0.06
      const opacity = 1 - offset * 0.35

      return {
        transform: `translateX(${stackX + dragTranslate}px) translateY(${stackY}px) scale(${scale})`,
        opacity: Math.max(0, opacity),
        filter: `blur(${offset * 3}px)`,
        zIndex: 10 - offset,
        transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    } else if (offset < 0) {
      // Cards that have been swiped past (to the left) - hide them
      return {
        transform: `translateX(${-500 + dragTranslate}px) scale(0.9)`,
        opacity: 0,
        zIndex: 5,
        transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    } else {
      // Current card (front)
      return {
        transform: `translateX(${dragTranslate}px) scale(1)`,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 20,
        transition: isDragging ? 'none' : 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  }

  return (
    <div
      ref={carouselRef}
      className="relative w-[560px] h-[580px] overflow-hidden cursor-grab active:cursor-grabbing"
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
          className={`absolute top-[20px] left-0 w-[480px] select-none ${showRegistration && index === currentIndex ? 'opacity-0 scale-95 pointer-events-none' : ''}`}
          style={getCardStyle(index)}
        >
          <EventCard
            event={event}
            isActive={index === currentIndex}
            onRegister={() => { setCurrentIndex(index); setShowRegistration(true) }}
          />
        </div>
      ))}


      {/* Registration Form */}
      <div
        className={`absolute top-[20px] left-0 w-[480px] transition-all duration-600 ease-out z-[30] ${showRegistration ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
      >
        <RegistrationForm event={currentEvent} onClose={() => setShowRegistration(false)} />
      </div>
    </div>
  )
}

export default EventCarousel
