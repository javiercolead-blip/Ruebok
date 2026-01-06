import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for animating number counters with staggered delays
 * @param {number} endValue - The final value to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Delay before starting animation in milliseconds
 * @param {string} easing - Easing function: 'linear', 'easeOut', 'easeInOut'
 * @returns {number} Current animated value
 */
export const useStatsCounter = (endValue, duration = 2000, delay = 0, easing = 'easeOut') => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const frameRef = useRef()
  const startTimeRef = useRef()

  useEffect(() => {
    // Prevent re-animation on re-renders
    if (hasAnimated) return

    const easingFunctions = {
      linear: (t) => t,
      easeOut: (t) => 1 - Math.pow(1 - t, 3),
      easeInOut: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const easeFn = easingFunctions[easing] || easingFunctions.easeOut

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current - delay

      if (elapsed < 0) {
        // Still in delay period
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeFn(progress)
      const currentCount = Math.floor(easedProgress * endValue)

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        setHasAnimated(true)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [endValue, duration, delay, easing, hasAnimated])

  return count
}

/**
 * Hook with intersection observer to trigger animation on scroll
 * @param {number} endValue - The final value to count to
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} delay - Delay before starting animation in milliseconds
 * @param {number} threshold - Intersection observer threshold (0-1)
 * @returns {Object} { count, ref } - Current count and ref to attach to element
 */
export const useStatsCounterOnView = (endValue, duration = 2000, delay = 0, threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)
  const frameRef = useRef()
  const startTimeRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
        }
      },
      { threshold }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, hasAnimated])

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    const easeOut = (t) => 1 - Math.pow(1 - t, 3)

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const elapsed = currentTime - startTimeRef.current - delay

      if (elapsed < 0) {
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)
      const currentCount = Math.floor(easedProgress * endValue)

      setCount(currentCount)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        setHasAnimated(true)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isVisible, endValue, duration, delay, hasAnimated])

  return { count, ref: elementRef }
}
