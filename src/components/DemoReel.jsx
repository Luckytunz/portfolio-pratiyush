import React from 'react'
import { motion } from 'framer-motion'

// DemoReel: Displays an autoplaying, looping (simulated), muted YouTube embed.
// Notes:
// - Autoplay on most browsers requires the video to be muted.
// - loop=1 on YouTube requires playlist param containing the same video id.
// - playsInline helps iOS show inline instead of forcing fullscreen.
// - We wrap iframe in a responsive aspect container with subtle glow styling.

const YT_ID = 'vtyS3L4Ivq8'
const embedUrl = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&rel=0&showinfo=0&controls=1&loop=1&playlist=${YT_ID}&modestbranding=1&playsinline=1`;

const DemoReel = () => {
  return (
    <section id="demo-reel" className="py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -inset-32 bg-gradient-to-tr from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
  <div className="text-center mb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <span className="text-sm tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 uppercase">Demo Reel</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur" />
          </motion.div>
        </div>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative aspect-video rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]">
            <iframe
              src={embedUrl}
              title="Demo Reel"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
            {/* Subtle top gradient overlay for text readability if added later */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/10 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoReel
