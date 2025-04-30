import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  
  // Update the image generation to handle different extensions
  const items = Array.from({ length: 37 }, (_, i) => {
    const id = i + 1;
    // Use .jpg extension for images 6, 7, and 8, .png for others, and .mkv for specific files
    let extension;
    let type;
    if ([6, 7, 8].includes(id)) {
      extension = 'jpg';
      type = 'image';
    } else if ([25, 31, 32, 34, 35].includes(id)) {
      extension = 'mkv';
      type = 'video';
    } else {
      extension = 'png';
      type = 'image';
    }
    return {
      id,
      src: `/work/${id}.${extension}`,
      span: Math.random() > 0.5 ? 2 : 1,
      type
    };
  });

  return (
    <div className="min-h-screen bg-[#0F1624] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F1624]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </motion.button>
          
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Gallery
          </h1>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
              className="relative group break-inside-avoid cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full rounded-xl"
                  style={{ 
                    gridRow: `span ${item.span}`,
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)' // Fix rounded corners in Safari
                  }}
                  preload="metadata"
                  muted
                  autoPlay
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Work ${item.id}`}
                  className="w-full rounded-xl"
                  style={{ 
                    gridRow: `span ${item.span}`,
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)' // Fix rounded corners in Safari
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
        >
          {selectedItem.type === 'video' ? (
            <motion.video
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedItem.src}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              controls
              autoPlay
            />
          ) : (
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedItem.src}
              alt={`Work ${selectedItem.id}`}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
            />
          )}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default Gallery
