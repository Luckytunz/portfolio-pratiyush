import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Generate gallery items, skipping deleted/missing assets (e.g., 38 removed)
  const missingIds = new Set([38])
  const videoIds = new Set([25, 31, 32, 34, 35, 41, 42])
  const jpgIds = new Set([6, 7, 8])

  const items = []
  for (let id = 1; id <= 46; id++) {
    if (missingIds.has(id)) continue
    let extension, type
    if (jpgIds.has(id)) {
      extension = 'jpg'
      type = 'image'
    } else if (videoIds.has(id)) {
      extension = 'mkv'
      type = 'video'
    } else {
      extension = 'png'
      type = 'image'
    }
    items.push({ id, src: `/work/${id}.${extension}`, type })
  }

  // Deterministic layout classes for a masonry-esque staggered feel
  const getLayoutClasses = (id, type) => {
    // Adjust logic for better packing (fewer vertical holes) in dense grid
    if (id % 19 === 0) return 'row-span-3 col-span-2'
    if (id % 13 === 0) return 'row-span-2 col-span-2'
    if (type === 'video' && id % 2 === 0) return 'row-span-2'
    if (id % 7 === 0) return 'row-span-2'
    if (id % 5 === 0) return 'col-span-2'
    return 'row-span-1'
  }

  return (
    <div className="min-h-screen bg-[#0F1624] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F1624]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-4">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m7 7h11" />
            </svg>
            Home
          </motion.button>
          <h1 className="text-lg md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Gallery Showcase
          </h1>
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-400">
            <span className="hidden sm:inline">{items.length} items</span>
            <span className="h-4 w-px bg-white/15" />
            <span className="uppercase tracking-wider bg-white/5 px-2 py-1 rounded-md border border-white/10">Interactive</span>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-28 pb-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] md:auto-rows-[140px] gap-4 grid-flow-dense">
          {items.map(item => {
            const layout = getLayoutClasses(item.id, item.type)
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedItem(item)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-xl ${layout} bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_8px_25px_-6px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/40`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_60%)]" />
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[1800ms] ease-[cubic-bezier(.19,1,.22,1)]"
                  />
                ) : (
                  <img
                    src={item.src}
                    loading="lazy"
                    alt={`Work ${item.id}`}
                    className="h-full w-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-[cubic-bezier(.19,1,.22,1)]"
                  />
                )}
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
                <div className="absolute bottom-2 left-2 flex items-center gap-2 text-[10px] font-medium tracking-wide text-white/80">
                  <span className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur border border-white/10">#{item.id}</span>
                  {item.type === 'video' && (
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/30 border border-blue-400/30 text-[10px]">VIDEO</span>
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              transition={{ type: 'spring', stiffness: 160, damping: 20 }}
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  className="w-full max-h-[78vh] object-contain rounded-xl border border-white/15 shadow-2xl"
                  controls
                  autoPlay
                  muted={false}
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={`Work ${selectedItem.id}`}
                  className="w-full max-h-[78vh] object-contain rounded-xl border border-white/15 shadow-2xl"
                  loading="lazy"
                />
              )}
              <div className="flex w-full items-center justify-between mt-4 px-1 text-xs text-white/60">
                <span>Item #{selectedItem.id}</span>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
