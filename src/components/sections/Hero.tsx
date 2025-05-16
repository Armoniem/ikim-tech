"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      headline: "We turn your concepts into reality",
      description:
        "Our team delivers innovative design and exceptional results in branding, digital experiences, and custom projects. Let us transform your vision into a lasting masterpiece.",
      image:
        "/main.jpg",
      alt: "Creative team working together",
    },
    {
      headline: "Video Editing Excellence",
      description:
        "Producing engaging video content that tells your story effectively. We combine compelling visuals, clear messaging, and creative storytelling to captivate your audience and leave a lasting impression.",
      image:
        "/video-editing.jpg",
      alt: "Video editing workspace",
    },
    {
      headline: "Mobile App & Web Development",
      description:
        "We create captivating visuals and functional mobile and web applications to enhance your online presence. Our designs feature intuitive Interfaces and stunning graphics, ensuring a memorable experience that stands out across all platforms.",
      image:
        "/mobile.jpg",
      alt: "Web development coding",
    },
    {
      headline: "Stunning 3D Design",
      description:
        "Creating stunning three-dimensional visuals to elevate your projects. We bring depth, realism, and creativity to your ideas, transforming them into immersive experiences that captivate and inspire.",
      image:
        "/3d.jpg",
      alt: "3D design visualization",
    },
  ]

  useEffect(() => {
    if (circleRef.current) {
      gsap.to(circleRef.current, {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => {
      gsap.killTweensOf(circleRef.current)
      clearInterval(interval)
    }
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const animateWords = (text: string) => {
    const words = text.split(" ")
    return words.map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        className="word inline-block"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: i * 0.08 + 0.1 }}
      >
        {word}{" "}
      </motion.span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden dark:bg-secondary-900"
    >
      <div className="container-custom mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-primary-700 dark:text-primary-400 text-lg font-medium mb-4"
          >
            IKIM Tech Co.
          </motion.p>

          <div className="h-[180px] md:h-[220px] lg:h-[260px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 dark:text-white">
                  {animateWords(carouselItems[currentSlide].headline)}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-secondary-700 dark:text-secondary-300 text-lg mb-8 max-w-lg"
                >
                  {carouselItems[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a href="#work" className="btn btn-primary hover-trigger">
              Our Projects
            </a>
            <a href="#contact" className="btn btn-outline hover-trigger">
              Get In Touch
            </a>

            <div className="flex gap-2 ml-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-300 hover-trigger"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900 flex items-center justify-center text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors duration-300 hover-trigger"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          <div className="flex justify-start gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 hover-trigger ${
                  currentSlide === index ? "bg-primary-700 dark:bg-primary-400" : "bg-primary-200 dark:bg-primary-800"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-accent-200 dark:bg-accent-900 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src={carouselItems[currentSlide].image}
                  alt={carouselItems[currentSlide].alt}
                  className="w-full h-auto rounded-xl object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            ref={circleRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-primary-700 dark:bg-primary-600"
          ></motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.a
          href="#about"
          className="flex flex-col items-center hover-trigger"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <span className="text-sm text-secondary-600 dark:text-secondary-400 mb-2">Discover More</span>
          <ChevronDown size={24} className="text-primary-700 dark:text-primary-400 animate-bounce" />
        </motion.a>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary-50 dark:bg-secondary-800 -z-10"></div>
    </section>
  )
}

export default Hero
