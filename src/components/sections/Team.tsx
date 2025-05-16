"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"

const Team: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const team = [
    {
      name: "Mikiyas Taye",
      role: "CEO & Website Developer",
      image:
        "/miki.jpg",
    },
    {
      name: "Amen Dereje",
      role: "Website Developer",
      image:
        "/aman2.jpg",
    },
    {
      name: "Betselot Bezuayehu",
      role: "Software Developer",
      image:
        "/betse.jpg",
    },
    {
      name: "Jecoliah Menberu",
      role: "Sales Agent",
      image:
        "/Jecoliah.jpg",
    },
    {
      name: "Bisrat Kifle",
      role: "Graphics Designer and Video Editor",
      image:
        "/bisrat.jpg",
    },
    {
      name: "Tesfahun Gibitan",
      role: "3D and VFX Artist",
      image:
        "/tesfahun.jpg",
    },
    {
      name: "Mikyas Seffi",
      role: "Marketing Consultant",
      image:
        "/userpic.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} id="team" className="section bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            Our Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            The people behind our work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-700 dark:text-secondary-300"
          >
            Meet our talented team of designers, developers, and strategists who bring your digital vision to life.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="team-member hover-trigger rounded-lg overflow-hidden shadow-md"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <div className="team-member-info">
                <h3 className="text-xl font-display font-bold text-white mb-1">{member.name}</h3>
                <p className="text-white opacity-80 mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-accent-300 transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent-300 transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-accent-300 transition-colors duration-300">
                    <GitHub size={20} />
                  </a>
                </div>
              </div>
              <div className="p-4 dark:bg-secondary-700">
                <h3 className="text-xl font-display font-bold mb-1">{member.name}</h3>
                <p className="text-secondary-600 dark:text-secondary-300">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
