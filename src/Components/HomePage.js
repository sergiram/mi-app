import React from 'react'
import { Specials } from './Specials'
import { Hero } from './Hero'
import { Testimonials } from './Testimonials'
import { About } from './About'


export const HomePage = () => {
  return (
    <>
       <Hero />
       <Specials />
       <Testimonials />
       <About />
    </>
  )
}
