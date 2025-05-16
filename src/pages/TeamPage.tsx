"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Team from "../components/sections/Team"

const TeamPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section className="pt-32 pb-16 px-6 bg-white dark:bg-secondary-900">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Meet Our Team</h1>
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              Our talented team of designers, developers, and strategists work together to bring your digital vision to
              life. With diverse skills and a shared passion for excellence, we're committed to delivering exceptional
              results.
            </p>
          </motion.div>
        </div>
      </section>

      <Team />

      <section className="py-20 px-6 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Team</h2>
            <p className="text-secondary-700 dark:text-secondary-300 mb-8">
              We're always looking for talented individuals to join our growing team. If you're passionate about digital
              innovation and want to work in a collaborative, creative environment, we'd love to hear from you.
            </p>
            <a href="#contact" className="btn btn-primary hover-trigger">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default TeamPage
