import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Sectors from './pages/Sectors'
import Resources from './pages/Resources'
import About from './pages/About'
import Apply from './pages/Apply'
import Curriculum from './pages/Curriculum'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Navigation Bar */}
        <nav className={`fixed top-0 left-0 right-0 bg-white lg:bg-white bg-black z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[70px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center gap-2 sm:ml-4">
                <img src="/finallogo.png" alt="Ruebok Ventures" className="h-[36px] sm:h-[44px] w-auto brightness-0 invert lg:brightness-100 lg:invert-0" />
              </div>
            </Link>

            {/* Desktop Navigation Links - Centered */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              <Link to="/portfolio" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Portfolio</Link>
              <Link to="/sectors" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Sectors</Link>
              <Link to="/curriculum" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Curriculum</Link>
              <Link to="/resources" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Resources</Link>
              <Link to="/about" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">About</Link>
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-4 w-64 justify-end">
              <a href="#login" className="text-[15px] font-medium font-sans hover:underline underline-offset-4">Founder Login</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800 shadow-lg">
              <div className="px-4 py-4 space-y-3">
                <Link
                  to="/portfolio"
                  className="block py-2 text-[15px] font-medium text-white hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/sectors"
                  className="block py-2 text-[15px] font-medium text-white hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sectors
                </Link>
                <Link
                  to="/curriculum"
                  className="block py-2 text-[15px] font-medium text-white hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Curriculum
                </Link>
                <Link
                  to="/resources"
                  className="block py-2 text-[15px] font-medium text-white hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link
                  to="/about"
                  className="block py-2 text-[15px] font-medium text-white hover:text-orange-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <a
                  href="#login"
                  className="block py-2 text-[15px] font-medium text-orange-600 hover:text-orange-700 transition-colors border-t border-gray-800 mt-2 pt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Founder Login
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
