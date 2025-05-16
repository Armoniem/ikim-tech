"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, GitlabIcon as GitHub, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Twitter size={20} />, url: "https://twitter.com/kmtechco" },
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/company/kmtechco" },
    { icon: <Instagram size={20} />, url: "https://instagram.com/kmtechco" },
    { icon: <GitHub size={20} />, url: "https://github.com/kmtechco" },
  ]

  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About", url: "/#about" },
        { name: "Services", url: "/#services" },
        { name: "Team", url: "/team" },
        { name: "Case Study", url: "/case-study" },
        { name: "Contact", url: "/#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", url: "/#services" },
        { name: "Mobile Apps", url: "/#services" },
        { name: "UI/UX Design", url: "/#services" },
        { name: "3D Design", url: "/#services" },
        { name: "Video Editing", url: "/#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Portfolio", url: "/#work" },
        { name: "Case Studies", url: "/case-study" },
        { name: "Testimonials", url: "/#" },
        { name: "FAQ", url: "/#" },
        { name: "Privacy Policy", url: "/#" },
      ],
    },
  ]

  return (
    <footer className="bg-primary-800 dark:bg-primary-900 text-white">
      <div className="container-custom py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
          <div className="md:col-span-2">
            <a href="#home" className="inline-block mb-6 hover-trigger">
              <div className="w-12 h-12">
                <img src="/logo.png" alt="KM Tech Co. Logo" className="w-full h-auto" />
              </div>
            </a>
            <p className="text-white/80 mb-6 max-w-xs">
              KM Tech Co. is a leading digital innovation agency based in Addis Ababa, Ethiopia. We help businesses
              transform and thrive in the digital age through creative solutions and technical excellence.
            </p>
            <div className="flex items-center gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-white/80 hover:text-white transition-colors duration-300 hover-trigger"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="md:col-span-1">
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover-trigger"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-white/70" />
                <a
                  href="mailto:ikimtechco@gmail.com"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover-trigger"
                >
                  ikimtechco@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-white/70" />
                <a
                  href="tel:+251951207168"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover-trigger"
                >
                  +251 951 207 168
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-white/70" />
                <span className="text-white/70">
                  Jemo,
                  <br />
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">&copy; {currentYear} KM Tech co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300 hover-trigger">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300 hover-trigger">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
