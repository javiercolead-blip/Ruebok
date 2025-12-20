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
        <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
          <div className="max-w-7xl mx-auto px-8 h-[70px] flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 w-64">
              <div className="flex items-center gap-2 ml-0.5">
                <img src="/finallogo.png" alt="Ruebok Ventures" className="h-9 w-auto" />
              </div>
            </Link>

            {/* Navigation Links - Centered */}
            <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              <Link to="/portfolio" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Portfolio</Link>
              <Link to="/sectors" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Sectors</Link>
              <Link to="/curriculum" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Curriculum</Link>
              <Link to="/resources" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">Resources</Link>
              <Link to="/about" className="text-[15px] font-medium font-sans hover:underline underline-offset-4 transition-all">About</Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 w-64 justify-end">
              <a href="#login" className="text-[15px] font-medium font-sans hover:underline underline-offset-4">Founder Login</a>
            </div>
          </div>
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
