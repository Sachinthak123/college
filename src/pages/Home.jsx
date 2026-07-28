import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import About from '../components/About'
import Campus from '../components/Campus'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div >
        <section id="home">
        <Hero />
      </section>

      <section id="programs">
        <Programs/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="campus">
        <Campus/>
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>
      </div>


    </>
  )
}

export default Home
