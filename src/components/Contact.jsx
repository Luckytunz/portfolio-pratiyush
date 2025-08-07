import React from 'react'
import { motion } from 'framer-motion'
import { SiUpwork } from 'react-icons/si'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01f489b463c53082c9?mp_source=share",
      color: "from-green-400 to-teal-400",
      icon: <SiUpwork size={24} />
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/pratiyush._gautam/",
      color: "from-pink-500 via-purple-500 to-orange-500",
      icon: <FaInstagram size={24} />
    }
  ]

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Digital Business Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group mb-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
          <div className="relative bg-black/90 backdrop-blur-xl rounded-xl p-8 space-y-6">
            {/* Card Header */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Pratiyush Gautam
                </h3>
                <p className="text-gray-400 mt-1">3D Artist & Visual Designer</p>
              </div>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[1px]">
                <div className="h-full w-full rounded-xl bg-black" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-300">gautamyush7@gmail.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-gray-300">Whatsapp: +91 9491810795</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-300">Banglore, Karnataka</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links - Simplified */}
        <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${link.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-lg`} />
              <div className="relative flex flex-col items-center gap-3">
                <div className={`text-gray-400 group-hover:text-white transition-colors`}>
                  {link.icon}
                </div>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
