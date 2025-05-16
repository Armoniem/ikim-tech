"use client"

import { useState, useEffect } from "react"

type Position = {
  x: number
  y: number
}

const useCustomCursor = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Cache mouse position for performance
    let mouseX = 0
    let mouseY = 0
    let rafId: number | null = null

    const onMouseMove = (e: MouseEvent) => {
      // Update cached mouse position
      mouseX = e.clientX
      mouseY = e.clientY

      // Ensure cursor is visible when mouse moves
      setHidden(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    // Use RAF for smoother updates
    const updatePosition = () => {
      setPosition({ x: mouseX, y: mouseY })
      rafId = requestAnimationFrame(updatePosition)
    }

    rafId = requestAnimationFrame(updatePosition)

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)

    // Handle hover events for interactive elements
    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, .hover-trigger, input, textarea, select, [role='button']",
      )

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => setLinkHovered(true))
        element.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    // Initial setup
    addHoverEvents()

    // Setup mutation observer to handle dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          addHoverEvents()
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)

      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      observer.disconnect()
    }
  }, [])

  return {
    position,
    hidden,
    clicked,
    linkHovered,
  }
}

export default useCustomCursor
