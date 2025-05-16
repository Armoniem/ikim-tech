"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import useCustomCursor from "../../hooks/useCustomCursor"

const CustomCursor: React.FC = () => {
  const { position, hidden, clicked, linkHovered } = useCustomCursor()
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const moveCursor = () => {
      if (cursorRef.current && followerRef.current) {
        // Use transform with translateX/Y for better performance
        cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px) scale(${clicked ? 0.8 : 1})`

        // Follower follows with slight delay
        followerRef.current.style.transform = `translate(${position.x}px, ${position.y}px) scale(${clicked ? 1.2 : 1})`
      }
    }

    // Use requestAnimationFrame for smoother animation
    const animate = () => {
      moveCursor()
      requestAnimationFrame(animate)
    }

    // Start animation loop
    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [position, clicked])

  // Handle cursor visibility
  useEffect(() => {
    if (cursorRef.current && followerRef.current) {
      if (hidden) {
        cursorRef.current.style.opacity = "0"
        followerRef.current.style.opacity = "0"
      } else {
        cursorRef.current.style.opacity = "1"
        followerRef.current.style.opacity = "1"
      }
    }
  }, [hidden])

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-6 h-6 rounded-full bg-primary-700 dark:bg-primary-400 z-[100] pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 ${
          linkHovered ? "scale-[2] bg-white" : ""
        } ${clicked ? "scale-75" : ""}`}
        style={{
          left: 0,
          top: 0,
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s ease, transform 0.1s ease",
        }}
      />
      <div
        ref={followerRef}
        className={`fixed w-12 h-12 rounded-full border-2 border-primary-700 dark:border-primary-400 border-opacity-50 z-[99] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 ${
          linkHovered ? "scale-150 border-opacity-0" : ""
        } ${clicked ? "scale-110" : ""}`}
        style={{
          left: 0,
          top: 0,
          opacity: hidden ? 0 : 1,
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      />
    </>
  )
}

export default CustomCursor
