"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

const CaseStudyPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const colorRef = useRef<HTMLDivElement>(null)
  const typographyRef = useRef<HTMLDivElement>(null)
  const designSystemRef = useRef<HTMLDivElement>(null)

  const isColorInView = useInView(colorRef, { once: true, amount: 0.3 })
  const isTypographyInView = useInView(typographyRef, { once: true, amount: 0.3 })
  const isDesignSystemInView = useInView(designSystemRef, { once: true, amount: 0.3 })

  const colors = [
    {
      name: "Primary 700",
      hex: "#033D54",
      class: "bg-primary-700",
      description: "Our main brand color represents trust, professionalism, and stability.",
    },
    {
      name: "Primary 400",
      hex: "#3385A7",
      class: "bg-primary-400",
      description: "Used for accents and interactive elements to create visual interest.",
    },
    {
      name: "Secondary 900",
      hex: "#1F1F1F",
      class: "bg-secondary-900",
      description: "Used for text and dark backgrounds, providing strong contrast.",
    },
    {
      name: "Secondary 50",
      hex: "#F5F5F5",
      class: "bg-secondary-50",
      description: "Used for light backgrounds and subtle separations.",
    },
    {
      name: "Accent 300",
      hex: "#FCD666",
      class: "bg-accent-300",
      description: "Used sparingly to draw attention to key elements.",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">Design Case Study</h1>
            <p className="text-lg text-secondary-700 dark:text-secondary-300">
              An in-depth look at the design decisions behind our brand identity, including color psychology,
              typography, and our Swiss/International design system approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section ref={colorRef} className="py-20 px-6 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isColorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Color Palette & Psychology</h2>
            <p className="text-secondary-700 dark:text-secondary-300 max-w-3xl">
              Our color palette was carefully selected to evoke specific emotional responses and align with our brand
              values. The primary blue tones convey trust, reliability, and professionalism, while our accent colors add
              energy and approachability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isColorInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-secondary-700 rounded-lg overflow-hidden shadow-md"
              >
                <div className={`h-32 ${color.class}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{color.name}</h3>
                    <span className="text-secondary-600 dark:text-secondary-300 font-mono">{color.hex}</span>
                  </div>
                  <p className="text-secondary-700 dark:text-secondary-300">{color.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isColorInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-4">Color Psychology</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary-700 dark:text-primary-400 mb-2">Blue Tones (Primary)</h4>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Blue evokes feelings of trust, reliability, and professionalism. It's often associated with depth,
                  stability, and expertise—qualities that are essential to our brand identity. The deep blue (#033D54)
                  serves as our primary brand color, creating a strong foundation for our visual identity.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-accent-500 dark:text-accent-400 mb-2">Yellow Accents</h4>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Yellow represents optimism, creativity, and energy. We use it sparingly as an accent color to
                  highlight important elements and create visual interest. This creates a balanced contrast with our
                  blue tones, adding warmth and approachability to our professional appearance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Section */}
      <section ref={typographyRef} className="py-20 px-6 bg-white dark:bg-secondary-900">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTypographyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Typography</h2>
            <p className="text-secondary-700 dark:text-secondary-300 max-w-3xl">
              Our typography choices reflect our brand personality—modern, professional, and approachable. We use a
              carefully selected combination of fonts to create visual hierarchy and enhance readability across all
              platforms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTypographyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-secondary-700 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Space Grotesk</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">Display & Headings</p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">H1 - 48px/Bold</p>
                  <p className="text-5xl font-display font-bold">Main Heading</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">H2 - 36px/Bold</p>
                  <p className="text-4xl font-display font-bold">Section Heading</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">H3 - 24px/Bold</p>
                  <p className="text-2xl font-display font-bold">Subsection Heading</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-secondary-700 dark:text-secondary-300">
                  Space Grotesk is a modern sans-serif with distinctive character, used for headings to create visual
                  impact and establish our brand's contemporary voice. Its geometric forms and subtle quirks add
                  personality while maintaining excellent readability.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isTypographyInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-secondary-700 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-6">Inter</h3>
              <p className="text-secondary-600 dark:text-secondary-400 mb-6">Body Text & UI Elements</p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">Body - 16px/Regular</p>
                  <p className="text-base">
                    This is our standard body text used for most content. It's highly readable across different screen
                    sizes and provides a clean, professional appearance.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">Small - 14px/Regular</p>
                  <p className="text-sm">
                    Used for secondary information, captions, and UI elements where space is limited but readability
                    remains important.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mb-2">
                    Button - 14px/Medium/Uppercase
                  </p>
                  <p className="text-sm font-medium uppercase tracking-wider">Call to action</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-secondary-700 dark:text-secondary-300">
                  Inter is a versatile sans-serif designed for screen readability. Its neutral appearance and excellent
                  legibility make it perfect for body text and interface elements, ensuring content remains accessible
                  and easy to read at various sizes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System Section */}
      <section ref={designSystemRef} className="py-20 px-6 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-custom mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isDesignSystemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Swiss/International Design System</h2>
            <p className="text-secondary-700 dark:text-secondary-300 max-w-3xl">
              Our design approach is heavily influenced by the Swiss/International design style, known for its clarity,
              objectivity, and systematic approach. This design philosophy emphasizes clean layouts, strong typography,
              and functional aesthetics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDesignSystemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Key Principles</h3>

              <div className="space-y-8">
                <div className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Grid-Based Layout</h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    We employ a structured grid system that creates visual order and consistency across all our designs.
                    This mathematical approach to layout ensures proper alignment, spacing, and hierarchy, making our
                    interfaces both aesthetically pleasing and functionally effective.
                  </p>
                </div>

                <div className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Minimalist Approach</h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    We embrace the "less is more" philosophy, focusing on essential elements and removing unnecessary
                    decorations. This creates clean, uncluttered interfaces that communicate clearly and allow content
                    to take center stage.
                  </p>
                </div>

                <div className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-3">Objective Imagery</h4>
                  <p className="text-secondary-700 dark:text-secondary-300">
                    Our visual content is purposeful and communicative rather than purely decorative. We use photography
                    and illustrations that convey clear messages and support our content objectives, maintaining a
                    balance between form and function.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isDesignSystemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Brand Identity</h3>

              <div className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md mb-8">
                <h4 className="text-xl font-bold mb-3">Logo Design</h4>
                <div className="flex justify-center mb-6">
                  <img src="/logo.png" alt="KM Tech Co. Logo" className="w-48 h-auto" />
                </div>
                <p className="text-secondary-700 dark:text-secondary-300">
                  Our logo embodies the Swiss design principles with its clean, geometric forms and thoughtful negative
                  space. The minimalist approach creates a timeless mark that works effectively across all applications
                  while maintaining strong brand recognition.
                </p>
              </div>

              <div className="bg-white dark:bg-secondary-700 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-3">Visual Language</h4>
                <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                  Our visual language extends the Swiss design principles through:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-secondary-700 dark:text-secondary-300">
                  <li>Consistent use of white space to create breathing room and focus</li>
                  <li>Strong typographic hierarchy that guides users through content</li>
                  <li>Purposeful use of color to create meaning and direct attention</li>
                  <li>Geometric shapes and clean lines that reinforce our modern identity</li>
                  <li>Systematic component design that ensures consistency across platforms</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-primary-700 dark:bg-primary-800 text-white">
        <div className="container-custom mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Build Your Brand?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Let us help you create a cohesive brand identity and digital presence that resonates with your audience
              and achieves your business goals.
            </p>
            <a href="/contact" className="btn bg-white text-primary-700 hover:bg-secondary-100 hover-trigger">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudyPage
