import { useState, useEffect } from 'react'

/**
 * Custom hook for animating counter values with easing
 * @param {number} target - The target value to count to
 * @param {number} duration - Animation duration in milliseconds (default: 2000ms)
 * @param {string} easing - Easing function: 'easeOut' | 'easeInOut' (default: 'easeOut')
 * @returns {number} - Current animated value
 */
export function useCounterAnimation(target, duration = 2000, easing = 'easeOut') {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        const progress = currentStep / steps

        // Apply easing function
        let easedProgress
        if (easing === 'easeInOut') {
          easedProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2
        } else {
          // Default to easeOut
          easedProgress = 1 - Math.pow(1 - progress, 3)
        }

        setValue(Math.floor(easedProgress * target))
      } else {
        setValue(target)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target, duration, easing])

  return value
}
