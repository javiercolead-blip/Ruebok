import { useState } from 'react'

function RegistrationForm({ event, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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
    onClose()
    setSubmitted(false)
    setFormData({ name: '', email: '', role: '' })
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-[24px] font-bold text-white mb-3 font-heading">
          You're Registered!
        </h4>
        <p className="text-[15px] text-gray-400 leading-[1.6] mb-6 font-mono">
          We've sent a confirmation email to {formData.email}. See you at {event.title}!
        </p>
        <button
          onClick={handleClose}
          className="inline-block px-8 py-4 bg-white text-orange-600 font-bold uppercase text-base hover:bg-gray-100 transition-colors"
          style={{ borderRadius: 0 }}
        >
          BACK TO EVENTS
        </button>
      </div>
    )
  }

  return (
    <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-7">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h4 className="text-[20px] font-bold text-white mb-1 font-heading">{event.title}</h4>
          <p className="text-[13px] text-gray-400 font-mono">{event.formDate}</p>
        </div>
        <button onClick={handleClose} className="text-gray-500 hover:text-white transition-colors p-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="w-full h-[1px] bg-gray-800 mb-5" />

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Full Name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" />
        <FormField label="Email Address" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" />

        <div>
          <label className="block text-[13px] uppercase tracking-wider text-gray-400 mb-2 font-mono">
            I am a... <span className="text-orange-500">*</span>
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
            className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none cursor-pointer font-mono text-[15px]"
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
  )
}

function FormField({ label, name, type, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-[13px] uppercase tracking-wider text-gray-400 mb-2 font-mono">
        {label} <span className="text-orange-500">*</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors font-mono text-[15px]"
      />
    </div>
  )
}

export default RegistrationForm
