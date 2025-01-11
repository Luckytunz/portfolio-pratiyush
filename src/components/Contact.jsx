import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Let's Create Something Amazing</h2>
        <p className="text-gray-300 mb-12">
          Feel free to reach out if you're looking for a collaborator, have a question, or just want to connect.
        </p>
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-white/10 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-white/10 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
