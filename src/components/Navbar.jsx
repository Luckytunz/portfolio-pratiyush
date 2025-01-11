import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#0f172a]/80 backdrop-blur-md' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="relative group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                Lucky
              </span>
              <span className="text-purple-400">.</span>
            </motion.div>
            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            {['Gallery', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group overflow-hidden px-4 py-2 text-gray-400 hover:text-white"
              >
                <div className="relative">
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </button>
            ))}
            
            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group px-5 py-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-[1px] bg-[#0f172a] rounded-[7px]" />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-medium">
                Let's Talk
              </span>
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="block md:hidden text-white p-2 hover:text-purple-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
