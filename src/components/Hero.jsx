import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWorks = () => {
    const worksSection = document.getElementById('works');
    worksSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const letterAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center relative z-10">
        {/* Role/Title with gradient underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="relative inline-block mb-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm md:text-base font-mono tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
          >
            3D ARTIST & VISUAL DESIGNER
          </motion.span>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        {/* Main heading with letter animation */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            className="text-7xl md:text-9xl font-bold relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="absolute -top-1 left-0 right-0 blur-2xl opacity-50 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              LUCKY
            </span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white">
              LUCKY
            </span>
          </motion.h1>
        </div>

        {/* Description with animated gradient border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-2xl mx-auto mb-12 p-6"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg" />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg" />
          <p className="relative text-lg md:text-xl text-gray-300 leading-relaxed">
            Creating immersive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              3D experiences
            </span>{" "}
            and bringing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
              imagination
            </span>{" "}
            to life through digital artistry.
          </p>
        </motion.div>

        {/* Animated buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          <motion.button
            onClick={scrollToWorks}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group px-8 py-3"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-[1px] bg-[#0f172a] rounded-[7px]" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-medium">
              Explore Portfolio
            </span>
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 text-gray-400 hover:text-white transition-all"
          >
            Get in Touch{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
