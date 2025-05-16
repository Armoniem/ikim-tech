"use client"

import type React from "react"
import { useRef, useEffect } from "react"

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({ children, speed = 0.1, className = "" }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set data attribute for speed
    element.setAttribute("data-speed", speed.toString())

    return () => {
      // Cleanup if needed
    }
  }, [speed])

  return (
    <div ref={elementRef} className={`parallax ${className}`} data-speed={speed}>
      {children}
    </div>
  )
}

export default ParallaxElement
