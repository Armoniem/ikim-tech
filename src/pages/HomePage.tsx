"use client"

import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Work from "../components/sections/Work"
import Contact from "../components/sections/Contact"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import ScrollAnimation from "../components/ScrollAnimation"
import ParallaxElement from "../components/ParallaxElement"

const HomePage = () => {
  return (
    <main>
      <Hero />

      <ScrollAnimation animation="fade-up">
        <About />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <Services />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <WhyChooseUs />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <Work />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up">
        <Contact />
      </ScrollAnimation>

      {/* Floating elements with parallax effect */}
      <ParallaxElement
        speed={0.05}
        className="fixed top-[20%] right-[5%] w-32 h-32 rounded-full bg-primary-100 dark:bg-primary-900/20 opacity-30 blur-xl -z-10"
      />
      <ParallaxElement
        speed={0.08}
        className="fixed bottom-[30%] left-[8%] w-24 h-24 rounded-full bg-accent-200 dark:bg-accent-900/30 opacity-20 blur-xl -z-10"
      />
    </main>
  )
}

export default HomePage
