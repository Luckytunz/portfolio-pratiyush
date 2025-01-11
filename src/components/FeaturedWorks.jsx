import React from 'react'
import { motion } from 'framer-motion'

const FeaturedWorks = () => {
  const videos = [
    { url: '/videos/1.mkv', gradient: 'from-blue-500/20 to-purple-500/20' },
    { url: '/videos/2.mkv', gradient: 'from-purple-500/20 to-pink-500/20' },
    { url: '/videos/3.mp4', gradient: 'from-pink-500/20 to-blue-500/20' }
  ]

  return (
    <section id="works" className="py-20 relative overflow-hidden">
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
      </div>
    </section>
  )
}

export default FeaturedWorks
