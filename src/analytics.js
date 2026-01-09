import posthog from 'posthog-js'

// Initialize PostHog
// IMPORTANT: Replace these with your actual PostHog credentials
// Sign up at https://posthog.com to get your API key and host
export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    posthog.init(
      // TODO: Replace 'YOUR_POSTHOG_API_KEY' with your actual PostHog API key
      import.meta.env.VITE_POSTHOG_API_KEY || 'YOUR_POSTHOG_API_KEY',
      {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // Only create profiles for identified users
        capture_pageview: true, // Automatically capture pageviews
        capture_pageleave: true, // Track when users leave pages
        autocapture: true, // Automatically capture clicks and interactions

        // Track UTM parameters and referrers automatically
        persistence: 'localStorage',

        // Privacy settings
        respect_dnt: true, // Respect Do Not Track

        // Session recording (optional - enable if you want to see user sessions)
        session_recording: {
          recordCrossOriginIframes: false,
        },

        // Capture custom properties
        loaded: (posthog) => {
          // Capture initial referrer and UTM parameters
          const referrer = document.referrer
          const urlParams = new URLSearchParams(window.location.search)

          // Track source information
          if (referrer) {
            posthog.register({
              initial_referrer: referrer,
              initial_referring_domain: new URL(referrer).hostname
            })
          }

          // Track UTM parameters
          const utmParams = {}
          for (const [key, value] of urlParams) {
            if (key.startsWith('utm_')) {
              utmParams[key] = value
            }
          }

          if (Object.keys(utmParams).length > 0) {
            posthog.register(utmParams)
          }
        }
      }
    )
  }
}

// Track custom events
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined') {
    posthog.capture(eventName, properties)
  }
}

// Track page views manually if needed
export const trackPageView = () => {
  if (typeof window !== 'undefined') {
    posthog.capture('$pageview')
  }
}

// Identify users (call this when someone signs up or logs in)
export const identifyUser = (userId, properties = {}) => {
  if (typeof window !== 'undefined') {
    posthog.identify(userId, properties)
  }
}

export default posthog
