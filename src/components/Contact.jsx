import React, { useState } from 'react'
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
      url: "https://www.instagram.com/holy_chaplain/",
      color: "from-pink-500 via-purple-500 to-orange-500",
      icon: <FaInstagram size={24} />
    }
  ]

  const [copied, setCopied] = useState(false)

  const copy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contact" className="relative pt-24 pb-16 px-6 overflow-hidden">
      {/* Ambient Aurora / Gradient Field */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-blue-500/10 via-transparent to-transparent blur-2xl" />
      </div>

      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent)] opacity-[0.18]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:38px_38px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <span className="text-xs tracking-[0.4em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Connect</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur" />
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">Let’s Build Something</h2>
          <p className="mt-4 max-w-xl mx-auto text-sm md:text-base text-gray-400">Open to collaborations, commissions, and creative explorations. Reach out anywhere below.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-stretch">
          {/* Left: Identity & Primary Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 relative group"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-90 blur-md transition" />
            <div className="relative h-full rounded-2xl bg-[#020617]/80 backdrop-blur-xl p-10 flex flex-col">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">Pratiyush Gautam</h3>
                  <p className="mt-2 text-sm tracking-wide text-gray-400">3D Artist • Visual Designer • Motion Generalist</p>
                </div>
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-[2px]">
                    <div className="h-full w-full rounded-xl bg-black flex items-center justify-center text-xs text-gray-500 font-medium tracking-wider">PG</div>
                  </div>
                </div>
              </div>

              {/* Info Blocks */}
              <div className="mt-8 grid sm:grid-cols-3 gap-5">
                <button onClick={() => copy('gautamyush7@gmail.com')} className="group relative text-left">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition" />
                  <div className="relative p-4 flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400">Email</p>
                      <p className="text-sm text-gray-200 break-all">gautamyush7@gmail.com</p>
                    </div>
                    <span className="text-[10px] text-purple-300/70 opacity-0 group-hover:opacity-100 transition">Click to copy</span>
                  </div>
                </button>

                <div className="group relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition" />
                  <div className="relative p-4 flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400">Whatsapp</p>
                      <p className="text-sm text-gray-200">+91 9491810795</p>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 group-hover:from-white/20 group-hover:to-white/10 transition" />
                  <div className="relative p-4 flex flex-col gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-gray-400">Location</p>
                      <p className="text-sm text-gray-200">Bangalore, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA removed as per request */}

              {/* Copied toast */}
              <motion.div
                initial={false}
                animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
                className="pointer-events-none absolute bottom-4 right-4 bg-white/10 backdrop-blur-md text-xs px-4 py-2 rounded-full text-purple-200 shadow-lg"
              >Email copied!</motion.div>
            </div>
          </motion.div>

          {/* Right: Social & Accent Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div className="relative flex-1 group">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-80 blur-md transition" />
              <div className="relative h-full rounded-2xl bg-[#020617]/80 backdrop-blur-xl p-8 flex flex-col justify-between overflow-hidden">
                <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-2xl" />
                <div>
                  <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white">Social Links</h4>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">Find more work, process breakdowns and updates on these platforms.</p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.08 }}
                      className="group relative rounded-xl px-4 py-5 bg-white/[0.04] hover:bg-white/[0.08] transition overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                      <div className="relative flex flex-col items-center gap-3 text-center">
                        <span className="text-gray-300 group-hover:text-white transition-colors">{link.icon}</span>
                        <span className="text-[11px] tracking-wider uppercase text-gray-400 group-hover:text-white transition-colors">{link.name}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <div className="mt-6">
                  <p className="text-[10px] tracking-widest text-gray-500 uppercase">Availability</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    <span className="text-xs text-gray-300">Accepting new freelance & collaborative projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative mini panel removed as per request */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
