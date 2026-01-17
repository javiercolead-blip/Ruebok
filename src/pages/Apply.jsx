import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Apply() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    linkedin_profile: '',
    start_up_name: '',
    website: '',
    one_line_description: '',
    what_problem_are_you_solving: '',
    what_makes_your_solution_unique: '',
    biggest_challenge: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [showBackButton, setShowBackButton] = useState(false)

  useEffect(() => {
    document.title = 'Application'
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const { error } = await supabase
        .from('applicants')
        .insert([formData])

      if (error) throw error

      setMessage({ type: 'success', text: 'Application submitted successfully! We\'ll be in touch soon.' })
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        linkedin_profile: '',
        start_up_name: '',
        website: '',
        one_line_description: '',
        what_problem_are_you_solving: '',
        what_makes_your_solution_unique: '',
        biggest_challenge: ''
      })
      // Show back button after 2 seconds
      setTimeout(() => setShowBackButton(true), 2000)
    } catch (error) {
      setMessage({
        type: 'error',
        text: `Error submitting application: ${error.message || 'Please try again.'}`
      })
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#111111] dark-grid pt-[70px]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        {message.type === 'success' ? (
          // Success Message - Centered with Industrial Style
          <div className="flex items-center justify-center min-h-[60vh] animate-[fadeIn_0.6s_ease-out]">
            <div className="bg-[#1a1a1a] border-2 border-[#ff6700] p-12 shadow-2xl text-center max-w-2xl" style={{ borderRadius: 0 }}>
              <div className="mb-6">
                <div className="w-20 h-20 border-4 border-[#00ff00] mx-auto flex items-center justify-center" style={{ borderRadius: '50%' }}>
                  <svg className="w-12 h-12 text-[#00ff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                APPLICATION SUBMITTED
              </h1>
              <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                Thank you for applying. We've received your application and will be in touch soon.
              </p>
              <div className="inline-block bg-[#0d0d0d] border border-neutral-800 px-4 py-2 mb-6" style={{ borderRadius: 0 }}>
                <p className="text-sm text-[#ff6700] font-bold uppercase" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                  [ RESPONSE TIME: 2-3 WEEKS ]
                </p>
              </div>

              {/* Back to Home Button - Fades in after 2 seconds */}
              <button
                onClick={() => navigate('/')}
                className={`mt-8 flex items-center gap-2 mx-auto text-[#ff6700] hover:text-white border-2 border-[#ff6700] px-6 py-3 hover:bg-[#ff6700] transition-all duration-300 ${
                  showBackButton ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ fontFamily: "'Roboto Mono', monospace", borderRadius: 0 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                BACK TO HOME
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12 animate-[fadeIn_0.6s_ease-out]">
              <h1 className="text-[48px] lg:text-[64px] font-bold text-white mb-6 uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                APPLICATION<span className="text-[#ff6700]">.</span>
              </h1>
              <p className="text-[18px] text-[#a1a1a1] max-w-2xl mx-auto" style={{ fontFamily: "'Roboto Mono', monospace", fontWeight: 300 }}>
                Join our portfolio of exceptional founders building the future of emerging markets.
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-[#1a1a1a] border border-neutral-800 p-4 sm:p-8 shadow-xl animate-[slideUp_0.8s_ease-out]" style={{ borderRadius: 0 }}>
              {message.text && message.type === 'error' && (
                <div className="mb-6 p-4 border-l-4 border-l-red-600 bg-red-950/30 text-red-400" style={{ borderRadius: 0 }}>
                  <p style={{ fontFamily: "'Roboto Mono', monospace" }}>{message.text}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div className="animate-[slideRight_0.8s_ease-out_0.1s_both]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#ff6700]" style={{ borderRadius: 0 }}></div>
                <h2 className="text-[24px] font-bold text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  COMPANY INFORMATION
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="start_up_name"
                    value={formData.start_up_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    One-line description *
                  </label>
                  <textarea
                    rows="2"
                    id="one_line_description"
                    value={formData.one_line_description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="What does your company do in one sentence?"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="pt-6 border-t border-neutral-800 animate-[slideRight_0.8s_ease-out_0.2s_both]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#ff6700]" style={{ borderRadius: 0 }}></div>
                <h2 className="text-[24px] font-bold text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  FOUNDER INFORMATION
                </h2>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                      style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                      style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin_profile"
                    value={formData.linkedin_profile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="Link to profile"
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="pt-6 border-t border-neutral-800 animate-[slideRight_0.8s_ease-out_0.3s_both]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-[#ff6700]" style={{ borderRadius: 0 }}></div>
                <h2 className="text-[24px] font-bold text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>
                  TELL US MORE
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    What problem are you solving? *
                  </label>
                  <textarea
                    rows="4"
                    id="what_problem_are_you_solving"
                    value={formData.what_problem_are_you_solving}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="Describe the problem your company is addressing..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    What makes your solution unique?
                  </label>
                  <textarea
                    rows="4"
                    id="what_makes_your_solution_unique"
                    value={formData.what_makes_your_solution_unique}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="What sets you apart from competitors?"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                    What's your biggest challenge at the moment? *
                  </label>
                  <textarea
                    rows="4"
                    id="biggest_challenge"
                    value={formData.biggest_challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0d0d0d] text-white border border-neutral-800 focus:border-white focus:outline-none transition-colors resize-none"
                    style={{ borderRadius: 0, fontFamily: "'Roboto Mono', monospace" }}
                    placeholder="Tell us about the main challenge you're facing right now..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 animate-[slideUp_0.8s_ease-out_0.4s_both]">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-[#ff6700] text-white font-bold text-[16px] uppercase shadow-lg hover:bg-white hover:text-[#ff6700] border-2 border-[#ff6700] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ borderRadius: 0, fontFamily: "'Oswald', sans-serif", letterSpacing: '0.1em' }}
              >
                {loading ? '[ SUBMITTING... ]' : '[ SUBMIT APPLICATION ]'}
              </button>
              <p className="text-xs text-gray-500 text-center mt-4 uppercase tracking-wider" style={{ fontFamily: "'Roboto Mono', monospace" }}>
                Response time: 2-3 weeks
              </p>
              </div>
            </form>
          </div>
        </>
        )}
      </div>
    </div>
  )
}

export default Apply
