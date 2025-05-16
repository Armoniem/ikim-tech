"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Palette, Cloud, PenTool, Printer, Box, Video, TrendingUp } from "lucide-react"

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Globe size={40} />,
      title: "Web Development",
      description:
        "Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description:
        "Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions.",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description:
        "Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts.",
    },
    {
      icon: <Cloud size={40} />,
      title: "Web Hosting",
      description:
        "Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily.",
    },
    {
      icon: <PenTool size={40} />,
      title: "Graphics Design",
      description:
        "Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise.",
    },
    {
      icon: <Printer size={40} />,
      title: "Printing",
      description:
        "Specializes in creating high-quality graphics for print media like brochures, business cards, and posters.",
    },
    {
      icon: <Box size={40} />,
      title: "3D Designing",
      description:
        "Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation.",
    },
    {
      icon: <Video size={40} />,
      title: "Video Editing",
      description:
        "Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Market Consultancy",
      description:
        "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success.",
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
      id="services"
      className="section bg-secondary-50 dark:bg-secondary-800 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-accent-300 dark:bg-accent-700 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-primary-300 dark:bg-primary-700 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            What we do best
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-700 dark:text-secondary-300"
          >
            We offer a comprehensive range of digital services designed to help your business thrive in the digital age.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card group bg-white dark:bg-secondary-700 p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="icon w-16 h-16 bg-primary-50 dark:bg-primary-800 rounded-lg flex items-center justify-center text-primary-700 dark:text-primary-300 mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-700 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-secondary-900 dark:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-secondary-700 dark:text-secondary-200 transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="#work" className="btn btn-primary hover-trigger">
            See Our Projects
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
