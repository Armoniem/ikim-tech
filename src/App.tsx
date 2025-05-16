"use client"

import { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Preloader from "./components/layout/Preloader"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import CustomCursor from "./components/cursor/CustomCursor"
import HomePage from "./pages/HomePage"
import TeamPage from "./pages/TeamPage"
import CaseStudyPage from "./pages/CaseStudyPage"
import Lenis from "@studio-freight/lenis"

// Import styles
import "./index.css"

function App() {
  const [loading, setLoading] = useState(true)
  const lenisRef = useRef<Lenis | null>(null)

  const handleLoadingComplete = () => {
    setLoading(false)
    document.body.style.overflow = "visible"
  }

  // Initialize smooth scrolling
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Set up RAF loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-up, .fade-in, .scale-in, .slide-in-left, .slide-in-right, .stagger-children",
    )
    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    // Initialize parallax effect
    const parallaxElements = document.querySelectorAll(".parallax")

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 2 // -1 to 1
      const y = (clientY / window.innerHeight - 0.5) * 2 // -1 to 1

      parallaxElements.forEach((element) => {
        const el = element as HTMLElement
        const speed = Number.parseFloat(el.dataset.speed || "0.1")
        const rotateX = y * 5 * speed // Rotate based on mouse position
        const rotateY = -x * 5 * speed
        const translateZ = 0

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Add transition class after initial load to enable smooth transitions
    setTimeout(() => {
      document.documentElement.classList.add("transition")
    }, 100)

    return () => {
      lenisRef.current?.destroy()
      observer.disconnect()
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Lock scrolling during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    }
  }, [loading])

  return (
    <Router>
      <div className="relative overflow-x-hidden">
        {/* Custom cursor */}
        <CustomCursor />

        {/* Preloader */}
        {loading && <Preloader onLoadingComplete={handleLoadingComplete} />}

        {/* Main content */}
        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/case-study" element={<CaseStudyPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
