import React from 'react'
import { Nav } from './Nav'
import { Specials } from './Specials'
import { Hero } from './Hero'
import { Testimonials } from './Testimonials'
import { About } from './About'
import { Footer } from './Footer'


export const HomePage = () => {
  return (
    <>
       <Nav />
       <Hero />
       <Specials />
       <Testimonials />
       <About />
       <Footer />
    </>
  )
}
