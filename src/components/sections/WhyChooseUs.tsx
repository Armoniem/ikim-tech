"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Clock, Users, Sparkles, Shield, HeartHandshake } from "lucide-react"
import ScrollAnimation from "../ScrollAnimation"

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const reasons = [
    {
      icon: <Award size={40} />,
      title: "Award-Winning Expertise",
      description:
        "Our team has been recognized for excellence in design and development, bringing industry-leading expertise to every project.",
    },
    {
      icon: <Clock size={40} />,
      title: "Timely Delivery",
      description: "We understand the importance of deadlines and consistently deliver high-quality work on schedule.",
    },
    {
      icon: <Users size={40} />,
      title: "Collaborative Approach",
      description:
        "We work closely with you throughout the process, ensuring your vision is realized through open communication and partnership.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Innovative Solutions",
      description:
        "We stay ahead of industry trends to provide cutting-edge solutions that give your business a competitive advantage.",
    },
    {
      icon: <Shield size={40} />,
      title: "Quality Assurance",
      description:
        "Every project undergoes rigorous testing and quality checks to ensure flawless performance and user experience.",
    },
    {
      icon: <HeartHandshake size={40} />,
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch—we provide continued support to ensure long-term success.",
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
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="section bg-white dark:bg-secondary-900 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 dark:bg-primary-900/20 rounded-bl-full opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 dark:bg-accent-900/20 rounded-tr-full opacity-40 -z-10"></div>

      <div className="container-custom">
        <ScrollAnimation animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            What sets us apart
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-700 dark:text-secondary-300"
          >
            We combine technical expertise with creative excellence to deliver exceptional results that exceed
            expectations and drive business growth.
          </motion.p>
        </ScrollAnimation>

        <ScrollAnimation animation="stagger-children" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-secondary-50 dark:bg-secondary-800 p-8 rounded-lg hover:shadow-xl transition-all duration-500 border-b-4 border-transparent hover:border-primary-700 dark:hover:border-primary-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-400 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{reason.title}</h3>
              <p className="text-secondary-700 dark:text-secondary-300">{reason.description}</p>
            </div>
          ))}
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={0.4} className="mt-16 text-center">
          <div className="inline-block bg-primary-50 dark:bg-primary-900/30 px-8 py-6 rounded-lg">
            <p className="text-xl md:text-2xl font-display font-bold text-primary-700 dark:text-primary-400 mb-2">
              Ready to start your project?
            </p>
            <p className="text-secondary-700 dark:text-secondary-300 mb-6">Let's create something amazing together.</p>
            <a href="#contact" className="btn btn-primary hover-trigger">
              Get in Touch
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default WhyChooseUs
