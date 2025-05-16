"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

interface PreloaderProps {
  onLoadingComplete: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const numberRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onLoadingComplete()
      },
    })

    // Animate the logo
    tl.fromTo(logoRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" })

    // Count up from 0 to 100
    const obj = { value: 0 }
    tl.to(
      obj,
      {
        value: 100,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.textContent = `${Math.round(obj.value)}%`
          }
        },
      },
      "-=0.5",
    )

    // Animate out
    tl.to([logoRef.current, numberRef.current], { opacity: 0, duration: 0.5, ease: "power2.in" })

    tl.to(preloaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power3.inOut",
    })

    return () => {
      tl.kill()
    }
  }, [onLoadingComplete])

  return (
    <div ref={preloaderRef} className="preloader dark:bg-secondary-900">
      <div className="w-full h-full bg-white dark:bg-secondary-900 flex flex-col items-center justify-center gap-8">
        <motion.div
          ref={logoRef}
          className="w-32 h-auto md:w-48"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/logo.png" alt="KM Tech Co. Logo" className="w-full h-auto" />
        </motion.div>

        <div
          ref={numberRef}
          className="text-4xl md:text-6xl font-display font-bold text-primary-700 dark:text-primary-400"
        >
          0%
        </div>
      </div>
    </div>
  )
}

export default Preloader
