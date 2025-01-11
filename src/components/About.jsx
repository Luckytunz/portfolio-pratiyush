import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const skillCategories = [
    {
      title: "Software",
      skills: ["Blender", "Maya", "ZBrush", "Substance"],
      gradient: "from-blue-400 to-purple-400",
      delay: 0.2
    },
    {
      title: "Expertise",
      skills: ["Character Design", "Environment Art", "Animation", "Texturing"],
      gradient: "from-purple-400 to-pink-400",
      delay: 0.3
    },
    {
      title: "Rendering",
      skills: ["V-Ray", "Arnold", "Eevee", "Cycles"],
      gradient: "from-pink-400 to-blue-400",
      delay: 0.4
    }
  ]

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.1),transparent_50%)]" />

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12"> {/* Changed from mb-20 to mb-12 */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] text-gray-400 uppercase"
          >
            About Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
          >
            Bringing Ideas to Life
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 relative" /* Changed from mb-16 to mb-12 */
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl" />
          <p className="relative text-gray-300 text-lg md:text-xl leading-relaxed text-center px-6 py-8">
            As a passionate 3D artist, I blend creativity with technical precision to create captivating digital experiences. My work spans from intricate character designs to immersive environmental art, each project bringing unique stories to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: category.delay }}
              className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <h3 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
