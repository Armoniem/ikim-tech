"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, ExternalLink, Plus } from "lucide-react"
import ScrollAnimation from "../ScrollAnimation"

const Work: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 6

  const categories = ["All", "Web Development", "Mobile App", "E-commerce", "UI/UX Design", "Branding"]

  const projects = [
    {
      title: "Nawla Trading PLC",
      category: "Web Development",
      image: "/Nawla.jpg",
      description: "This Nawla Trading website showcases products and services with a clean, responsive design.",
      technologies: ["React", "Tailwind CSS", "Node.js"],
      link: "#",
      featured: true,
    },
    {
      title: "Gojo Guest House",
      category: "Web Development",
      image: "/gojoHouse.jpg",
      description: "A guesthouse website highlighting services, room options, and amenities.",
      technologies: ["Next.js", "GSAP", "Framer Motion"],
      link: "#",
      featured: false,
    },
    {
      title: "Brand Clothing",
      category: "E-commerce",
      image: "Brand.png",
      description: "An online presence for a fashion brand offering timeless styles with a modern touch.",
      technologies: ["Shopify", "Custom Theme", "Payment Integration"],
      link: "#",
      featured: true,
    },
    {
      title: "Heiver Tech",
      category: "Web Development",
      image: "Heiver.jpg",
      description: "A technology services provider recognized for innovations and cutting-edge solutions.",
      technologies: ["Vue.js", "Express", "MongoDB"],
      link: "#",
      featured: false,
    },
    {
      title: "ShoeIT",
      category: "Mobile App",
      image: "sho.jpg",
      description: "A mobile app dedicated to shoe sales with user-friendly design and enhanced navigation.",
      technologies: ["React Native", "Firebase", "Stripe"],
      link: "#",
      featured: false,
    },
    {
      title: "Gojo Guest House Logo",
      category: "Branding",
      image: "gojo.jpg",
      description: "A versatile logo representing a guesthouse offering various services.",
      technologies: ["Illustrator", "Brand Design"],
      link: "#",
      featured: false,
    },
    {
      title: "Habesha Crowd",
      category: "Branding",
      image: "/habesha.jpg",
      description: "Logo design for a company offering a range of services, showcasing professionalism.",
      technologies: ["Photoshop", "Illustrator"],
      link: "#",
      featured: false,
    },
    {
      title: "Eromica",
      category: "Branding",
      image: "/Eromica.jpg",
      description: "A logo symbolizing a woman, incorporating elements representing Ethiopia and Africa.",
      technologies: ["Illustrator", "Vector Art"],
      link: "#",
      featured: true,
    },
    {
      title: "ነጋሪት Marketing Agency",
      category: "Web Development",
      image: "/negarit.jpg",
      description: "Offers a wide range of digital services, modernizing marketing with innovative solutions.",
      technologies: ["WordPress", "Custom Plugins", "SEO"],
      link: "#",
      featured: false,
    },
    {
      title: "Hany Beauty",
      category: "Branding",
      image: "/hanybeauty.jpg",
      description: "Logo for a beauty salon offering various services with a focus on versatility and elegance.",
      technologies: ["Illustrator", "Figma"],
      link: "#",
      featured: false,
    },
    {
      title: "Yegna Dirsha",
      category: "Branding",
      image: "/yegna.jpg",
      description: "A logo for a company focused on YouTube and social media channels.",
      technologies: ["Figma", "Adobe XD"],
      link: "#",
      featured: false,
    },
    {
      title: "Adape Leather Design",
      category: "E-commerce",
      image: "/adape.jpg",
      description: "Specializes in crafting high-quality leather products with expert craftsmanship.",
      technologies: ["WooCommerce", "Custom Theme"],
      link: "#",
      featured: true,
    },
    {
      title: "Heiver Tech Logo",
      category: "Branding",
      image: "/Heiver.jpg",
      description: "Branding and logo work for a global tech company known for innovation.",
      technologies: ["Illustrator", "Typography"],
      link: "#",
      featured: false,
    },
    {
      title: "ነጋሪት Marketing Logo",
      category: "Branding",
      image: "/negarit.jpg",
      description: "Logo design to align with modern digital marketing services.",
      technologies: ["Adobe Illustrator", "Concept Sketching"],
      link: "#",
      featured: false,
    },
  ];
  
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const paginatedProjects = filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage)

  const pageCount = Math.ceil(filteredProjects.length / projectsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1))
  }

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section ref={sectionRef} id="work" className="section bg-white dark:bg-secondary-900 overflow-hidden">
      <div className="container-custom">
        <ScrollAnimation animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            Our Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Recent projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary-700 dark:text-secondary-300"
          >
            Explore some of our recent work and see how we bring ideas to life.
          </motion.p>
        </ScrollAnimation>

        {/* Featured Projects Showcase */}
        <ScrollAnimation animation="fade-up" delay={0.2} className="mb-20">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-100 dark:bg-primary-900/30 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent-200 dark:bg-accent-900/30 rounded-full blur-3xl opacity-30"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold mb-8 inline-block border-b-2 border-primary-700 dark:border-primary-400 pb-2">
                Featured Projects
              </h3>

              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                    className="featured-project group relative overflow-hidden rounded-xl shadow-lg"
                  >
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-primary-700 dark:bg-primary-600 text-white text-xs rounded-full mb-4">
                        {project.category}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-white/80 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-white/20 text-white rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        className="inline-flex items-center text-white hover:text-primary-300 transition-colors duration-300 hover-trigger"
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Project Categories */}
        <ScrollAnimation animation="fade-up" delay={0.3} className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(category)
                  setCurrentPage(0)
                }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary-700 dark:bg-primary-600 text-white"
                    : "bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Projects Grid with Masonry Layout */}
        <ScrollAnimation animation="stagger-children" className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {paginatedProjects.map((project, index) => (
              <div
                key={index}
                className={`project-card group cursor-pointer hover-trigger overflow-hidden rounded-lg shadow-md transition-all duration-500 hover:shadow-xl ${
                  index % 3 === 0 ? "md:row-span-2" : ""
                }`}
                onClick={() => setSelectedProject(projects.indexOf(project))}
              >
                <div className={`relative ${index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="inline-block px-3 py-1 bg-primary-700 text-white text-xs rounded-full mb-2">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-display font-bold text-white mb-2">{project.title}</h4>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-white/20 text-white rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs px-2 py-1 bg-white/20 text-white rounded flex items-center">
                            <Plus size={12} className="mr-1" /> {project.technologies.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white">
                        <Plus size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Pagination */}
        {pageCount > 1 && (
          <ScrollAnimation animation="fade-up" delay={0.4} className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === 0
                  ? "bg-secondary-100 dark:bg-secondary-800 text-secondary-400 dark:text-secondary-600 cursor-not-allowed"
                  : "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 hover-trigger"
              }`}
            >
              <ArrowLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentPage === index
                      ? "bg-primary-700 dark:bg-primary-600 text-white"
                      : "bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700 hover-trigger"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === pageCount - 1}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentPage === pageCount - 1
                  ? "bg-secondary-100 dark:bg-secondary-800 text-secondary-400 dark:text-secondary-600 cursor-not-allowed"
                  : "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 hover-trigger"
              }`}
            >
              <ArrowRight size={20} />
            </button>
          </ScrollAnimation>
        )}

        {/* Call to Action */}
        <ScrollAnimation animation="fade-up" delay={0.5} className="text-center mt-16">
          <a href="#contact" className="btn btn-primary hover-trigger">
            Start Your Project
          </a>
        </ScrollAnimation>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-secondary-800 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-300 hover-trigger"
                >
                  ✕
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 text-sm rounded-full">
                    {projects[selectedProject].category}
                  </span>

                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl font-display font-bold mb-4">{projects[selectedProject].title}</h3>
                <p className="text-secondary-700 dark:text-secondary-300 mb-6">
                  {projects[selectedProject].description}
                </p>

                <a
                  href={projects[selectedProject].link}
                  className="inline-flex items-center btn btn-primary hover-trigger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
