import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const FeaturedWorks = () => {
  const navigate = useNavigate();
  const videos = [
    { url: '/videos/1.mkv', gradient: 'from-blue-500/20 to-purple-500/20' },
    { url: '/videos/2.mkv', gradient: 'from-purple-500/20 to-pink-500/20' },
    { url: '/videos/3.mp4', gradient: 'from-pink-500/20 to-blue-500/20' }
  ]

  return (
    <section id="works" className="py-20 relative overflow-hidden">
      {/* Enhanced Header Section */}
      <div className="text-center mb-20 relative">
        {/* Decorative lines */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[150px] h-[1px] top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[1px] top-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <motion.span
            className="text-sm tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 uppercase relative z-10"
          >
            Showcase
          </motion.span>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mt-6 relative"
        >
          <span className="absolute -inset-x-40 inset-y-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
            Recent Creations
          </span>
        </motion.h2>

        {/* Bottom decorative lines */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[150px] h-[1px] bottom-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[1px] bottom-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </div>

      {/* Videos Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 md:gap-6 relative">
          {/* First Video - Larger */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-8 relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${videos[0].gradient} blur-[50px] opacity-30 group-hover:opacity-50 transition-opacity`} />
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <video
                src={videos[0].url}
                className="w-full h-full object-cover transform transition-transform duration-700"
                loop
                muted
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
            </motion.div>
          </motion.div>

          {/* Second and Third Videos - Smaller and Stacked */}
          <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-6">
            {videos.slice(1).map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${video.gradient} blur-[30px] opacity-30 group-hover:opacity-50 transition-opacity`} />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <video
                    src={video.url}
                    className="w-full h-full object-cover transform transition-transform duration-700"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <motion.button
            onClick={() => navigate('/gallery')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-[1px] bg-[#0f172a] rounded-[7px]" />
            <span className="relative flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-medium">
              Explore Full Gallery
              <svg 
                className="w-4 h-4 stroke-purple-400 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWorks
