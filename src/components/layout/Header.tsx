"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import ThemeToggle from "../ThemeToggle"
import { Link, useLocation } from "react-router-dom"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Team", href: "/team" },
    { name: "Case Study", href: "/case-study" },
    { name: "Contact", href: "/#contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Toggle body scroll
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/"
    }
    return location.pathname === path || location.hash === path.substring(1)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-white dark:bg-secondary-900 shadow-lg dark:shadow-secondary-900/50"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container-custom px-6 mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="hover-trigger"
        >
          <Link to="/">
            <div className="w-16 h-auto">
              <img src="/logo.png" alt="KM Tech Co. Logo" className="w-full h-auto" />
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const isHashLink = link.href.includes("#")
            const Component = isHashLink ? "a" : Link
            const props = isHashLink ? { href: link.href } : { to: link.href }

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Component
                  {...props}
                  className={`relative text-secondary-900 dark:text-white font-medium hover:text-primary-700 dark:hover:text-primary-400 transition-colors duration-300 hover-trigger ${
                    isActive(link.href) ? "text-primary-700 dark:text-primary-400" : ""
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-primary-700 dark:bg-primary-400 transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0"
                    }`}
                  ></span>
                </Component>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1, ease: "easeOut" }}
          >
            <ThemeToggle />
          </motion.div>

          <motion.a
            href="/#contact"
            className="btn btn-primary hover-trigger"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navLinks.length * 0.1 + 0.1, ease: "easeOut" }}
          >
            Get in Touch
          </motion.a>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />

          <motion.button
            className="hover-trigger"
            onClick={toggleMenu}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Menu size={28} className="text-primary-700 dark:text-primary-400" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-white dark:bg-secondary-900 z-50 flex flex-col"
          >
            <div className="container mx-auto px-6 py-6 flex justify-between items-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover-trigger">
                <div className="w-16 h-auto">
                  <img src="/logo.png" alt="KM Tech Co. Logo" className="w-full h-auto" />
                </div>
              </Link>
              <button onClick={toggleMenu} className="hover-trigger">
                <X size={28} className="text-primary-700 dark:text-primary-400" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link, index) => {
                const isHashLink = link.href.includes("#")
                const Component = isHashLink ? "a" : Link
                const props = isHashLink
                  ? { href: link.href, onClick: toggleMenu }
                  : { to: link.href, onClick: toggleMenu }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Component
                      {...props}
                      className={`text-3xl font-display font-bold hover-trigger ${
                        isActive(link.href)
                          ? "text-primary-700 dark:text-primary-400"
                          : "text-secondary-900 dark:text-white"
                      }`}
                    >
                      {link.name}
                    </Component>
                  </motion.div>
                )
              })}
              <motion.a
                href="/#contact"
                className="mt-8 btn btn-primary hover-trigger"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
                onClick={toggleMenu}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
