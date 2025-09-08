import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import FeaturedWorks from '../components/FeaturedWorks'
import DemoReel from '../components/DemoReel'
import Contact from '../components/Contact'
import ParticleField from '../components/ParticleField'

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen">
      <ParticleField />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform-origin-0"
        style={{ scaleX }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
  <Hero />
  <DemoReel />
        <About />
        <FeaturedWorks />
        <Contact />
      </div>
    </div>
  )
}

export default Homepage
