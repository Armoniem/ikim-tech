"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import gsap from "gsap"
import { Code, Lightbulb, Zap } from "lucide-react"

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView && headingRef.current) {
      const text = headingRef.current.innerText
      const chars = text.split("")

      headingRef.current.innerHTML = chars
        .map((char) => (char === " " ? " " : `<span class="char">${char}</span>`))
        .join("")

      const charElements = headingRef.current.querySelectorAll(".char")

      gsap.fromTo(
        charElements,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.5,
          ease: "power3.out",
        },
      )
    }
  }, [isInView])

  const values = [
    {
      icon: <Lightbulb size={32} className="text-white" />,
      title: "Innovation",
      description: "We embrace innovative thinking to solve complex digital challenges.",
    },
    {
      icon: <Code size={32} className="text-white" />,
      title: "Expertise",
      description: "Our team brings deep expertise across strategy, design, and development.",
    },
    {
      icon: <Zap size={32} className="text-white" />,
      title: "Impact",
      description: "We measure success by the tangible impact we create for our clients.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section ref={sectionRef} id="about" className="section relative bg-white dark:bg-secondary-900 overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative mb-12">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
              >
                About Us
              </motion.span>

              <h2 ref={headingRef} className="text-4xl md:text-5xl font-display font-bold mb-8 split-chars">
                We're a team of digital craftspeople
              </h2>

              <div ref={textRef} className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-secondary-700 dark:text-secondary-300"
                >
                  Founded in 2020, KM Tech co. has quickly established itself as a leading digital innovation agency. We
                  partner with forward-thinking companies to create meaningful digital experiences that drive business
                  growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-secondary-700 dark:text-secondary-300"
                >
                  Our interdisciplinary team brings together expertise in strategy, design, and technology to deliver
                  holistic solutions that meet the complex demands of today's digital landscape.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-8"
              >
                <a href="#services" className="btn btn-primary hover-trigger">
                  Our Services
                </a>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="overflow-hidden rounded-xl"
              >
                <motion.img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover rounded-xl"
                  initial={{ scale: 1.2 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-12 -left-12 z-20 bg-white dark:bg-secondary-800 p-6 rounded-xl shadow-xl dark:shadow-secondary-900/50 max-w-xs"
            >
              <h3 className="text-xl font-display font-bold mb-2">10+</h3>
              <p className="text-secondary-700 dark:text-secondary-300">
                Years of combined experience in digital innovation
              </p>
            </motion.div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-200 dark:bg-accent-800 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mt-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-700 dark:bg-primary-800 p-8 rounded-lg transform transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-600 dark:bg-primary-700 rounded-lg flex items-center justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{value.title}</h3>
              <p className="text-white opacity-80">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
