"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
    alert("Form submitted! (This is just a demo)")
  }

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-primary-700 dark:text-primary-400" />,
      title: "Email",
      content: "ikimtechco@gmail.com",
      link: "mailto:ikimtechco@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-primary-700 dark:text-primary-400" />,
      title: "Phone",
      content: "+251951207168",
      link: "tel:+251951207168",
    },
    {
      icon: <MapPin size={24} className="text-primary-700 dark:text-primary-400" />,
      title: "Office",
      content: "Jemo, Addis Ababa, Ethiopia",
      link: "https://maps.google.com",
    },
  ]

  const inputVariants = {
    focus: {
      scale: 0.98,
      borderColor: "#033D54",
      boxShadow: "0 0 0 2px rgba(3, 61, 84, 0.2)",
    },
  }

  return (
    <section ref={sectionRef} id="contact" className="section bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            Contact Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Let's start a conversation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-700 dark:text-secondary-300"
          >
            Ready to transform your digital presence? Reach out to us and let's discuss how we can help you achieve your
            goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-1 space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4 p-6 bg-secondary-50 dark:bg-secondary-800 rounded-lg"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-secondary-700 dark:text-secondary-300 hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-300 hover-trigger"
                  >
                    {item.content}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Full Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none text-secondary-900 dark:text-white"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none text-secondary-900 dark:text-white"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none text-secondary-900 dark:text-white"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-secondary-50 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 rounded-lg focus:outline-none resize-none text-secondary-900 dark:text-white"
                  whileFocus="focus"
                  variants={inputVariants}
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button type="submit" className="btn btn-primary w-full hover-trigger">
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
