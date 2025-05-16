"use client"

import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Work from "../components/sections/Work"
import Contact from "../components/sections/Contact"
import WhyChooseUs from "../components/sections/WhyChooseUs"

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Work />
      <Contact />
    </main>
  )
}

export default HomePage
