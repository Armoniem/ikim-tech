"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  animation: "fade-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right" | "stagger-children"
  delay?: number
  threshold?: number
  className?: string
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  animation,
  delay = 0,
  threshold = 0.1,
  className = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Apply delay if specified
    if (delay > 0) {
      element.style.transitionDelay = `${delay}s`
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible")
            // Once the animation has played, we can stop observing
            observer.unobserve(element)
          }
        })
      },
      { threshold },
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [delay, threshold])

  return (
    <div ref={elementRef} className={`${animation} ${className}`}>
      {children}
    </div>
  )
}

export default ScrollAnimation
