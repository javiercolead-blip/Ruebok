import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Sectors from './pages/Sectors'
import Resources from './pages/Resources'
import About from './pages/About'
import Apply from './pages/Apply'
import Curriculum from './pages/Curriculum'
import PitchDeckFramework from './pages/PitchDeckFramework'
import FinancialModel from './pages/FinancialModel'
import OKRGuide from './pages/OKRGuide'
import DueDiligenceChecklist from './pages/DueDiligenceChecklist'
import ScrollToTop from './components/ScrollToTop'

function NavBar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 border-b border-[#333333]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-[70px] flex items-center justify-between">
        {/* Home Button - Top Left */}
        <Link to="/" className={`text-[13px] font-medium uppercase transition-all tracking-wider ${isActive('/') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}>
          Home
        </Link>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          <Link to="/about" className={`text-[13px] font-medium uppercase transition-all tracking-wider ${isActive('/about') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}>Mission</Link>
          <Link to="/curriculum" className={`text-[13px] font-medium uppercase transition-all tracking-wider ${isActive('/curriculum') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}>Curriculum</Link>
          <Link to="/resources" className={`text-[13px] font-medium uppercase transition-all tracking-wider ${isActive('/resources') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}>Our Resources</Link>
        </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center gap-4 w-64 justify-end">
              <a href="#login" className="text-[13px] font-medium uppercase text-white underline hover:text-[#ff6700] transition-all tracking-wider">Founder Login</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#ff6700] transition-colors"
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
          <div className="md:hidden bg-[#111111] border-t border-[#333333] shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/about"
                className={`block py-2 text-[13px] font-medium uppercase transition-colors tracking-wider ${isActive('/about') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                to="/curriculum"
                className={`block py-2 text-[13px] font-medium uppercase transition-colors tracking-wider ${isActive('/curriculum') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Curriculum
              </Link>
              <Link
                to="/resources"
                className={`block py-2 text-[13px] font-medium uppercase transition-colors tracking-wider ${isActive('/resources') ? 'text-[#ff6700]' : 'text-white hover:text-[#ff6700]'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Resources
              </Link>
              <a
                href="#login"
                className="block py-2 text-[13px] font-medium uppercase text-[#ff6700] hover:text-[#ff7f1f] transition-colors border-t border-[#333333] mt-2 pt-4 tracking-wider underline"
                onClick={() => setMobileMenuOpen(false)}
              >
                Founder Login
              </a>
            </div>
          </div>
        )}
      </nav>
    )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#111111] font-sans">
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/resources/pitch-deck-framework" element={<PitchDeckFramework />} />
          <Route path="/resources/financial-model" element={<FinancialModel />} />
          <Route path="/resources/okr-guide" element={<OKRGuide />} />
          <Route path="/resources/due-diligence-checklist" element={<DueDiligenceChecklist />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
