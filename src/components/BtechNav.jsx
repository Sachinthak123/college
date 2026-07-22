import React from 'react'
import { Link } from 'react-router-dom'

const BtechNav = () => {
  return (
    <nav className="bg-black text-white py-4 mt-1">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-4">
         <Link
          to="/courses"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Computer Science)
        </Link>

        <Link
          to="/courses/"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Information Technology)
        </Link>

        <Link
          to="/courses/"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Electronics & Communication)
        </Link>

        <Link
          to="/courses/"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Electrical Engineering)
        </Link>

        <Link
          to="/courses/"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Mechanical Engineering)
        </Link>

        <Link
          to="/courses/"
          className="hover:text-blue-400 transition"
        >
          B.Tech (Civil Engineering)
        </Link>
      </div>
    </nav>
  )
}

export default BtechNav
