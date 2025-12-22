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
      const { data, error } = await supabase
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
      setMessage({ type: 'error', text: 'Error submitting application. Please try again.' })
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 paper-grid pt-[70px]">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {message.type === 'success' ? (
          // Success Message - Centered
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="bg-white rounded-2xl p-12 shadow-2xl text-center max-w-2xl">
              <div className="mb-6">
                <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Submitted!</h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for applying. We've received your application and will be in touch soon.
              </p>
              <p className="text-sm text-gray-500">
                We typically respond within 2-3 weeks
              </p>

              {/* Back to Home Button - Fades in after 2 seconds */}
              <button
                onClick={() => navigate('/')}
                className={`mt-8 flex items-center gap-2 mx-auto text-orange-600 hover:text-orange-700 transition-all duration-300 ${
                  showBackButton ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home Page
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <h1 className="text-[56px] font-bold text-black mb-6">Apply for Funding</h1>
              <p className="subheadline text-[20px] text-gray-600 max-w-2xl mx-auto">
                Join our portfolio of exceptional founders building the future of emerging markets.
              </p>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              {message.text && message.type === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-100 text-red-700">
                  {message.text}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Information */}
            <div>
              <h2 className="text-[24px] font-bold mb-4">Company Information</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="start_up_name"
                    value={formData.start_up_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Website
                  </label>
                  <input
                    type="text"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://yourcompany.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    One-line description *
                  </label>
                  <input
                    type="text"
                    id="one_line_description"
                    value={formData.one_line_description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What does your company do in one sentence?"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Founder Information */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-[24px] font-bold mb-4">Founder Information</h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin_profile"
                    value={formData.linkedin_profile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-[24px] font-bold mb-4">Tell Us More</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What problem are you solving? *
                  </label>
                  <textarea
                    rows="4"
                    id="what_problem_are_you_solving"
                    value={formData.what_problem_are_you_solving}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Describe the problem your company is addressing..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What makes your solution unique?
                  </label>
                  <textarea
                    rows="4"
                    id="what_makes_your_solution_unique"
                    value={formData.what_makes_your_solution_unique}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="What sets you apart from competitors?"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What's your biggest challenge at the moment? *
                  </label>
                  <textarea
                    rows="4"
                    id="biggest_challenge"
                    value={formData.biggest_challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about the main challenge you're facing right now..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-black text-white rounded-lg font-semibold text-[16px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                We typically respond within 2-3 weeks
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
