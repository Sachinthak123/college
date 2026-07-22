import React from 'react'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <>
   <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:id" element={<CourseDetails />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
