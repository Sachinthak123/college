import React from "react";
import { FaLaptopCode, FaDatabase, FaRobot, FaShieldAlt } from "react-icons/fa";

import hereBg from '../assets/heroComputer.jfif'
import BgBlackNav from "../components/BgBlackNav";
import { Link } from "react-router-dom";

const ComputerScience = () => {
  return (
    <>
    <BgBlackNav/>
    <section className="min-h-screen  py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero */}
        <div
  className="relative text-center py-28 px-6 mb-16 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${hereBg})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative z-10">
    <div className="w-24 h-24 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
      <FaLaptopCode size={50} />
    </div>

    <h1 className="text-5xl font-bold text-white">
      Bachelor of Computer Science
    </h1>

    <p className="text-gray-200 text-lg mt-6 max-w-3xl mx-auto">
      Build a strong foundation in programming, software engineering,
      artificial intelligence, cybersecurity, and modern computing
      technologies with our industry-oriented Computer Science program.
    </p>
  </div>
</div>

        

        {/* Course Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Course Overview</h2>

            <p className="text-gray-800 leading-8">
              The Computer Science program prepares students with technical,
              analytical, and problem-solving skills required in today's
              technology-driven world. Students gain practical experience
              through projects, coding labs, internships, and industry
              collaborations.
            </p>

            <div className="mt-8 space-y-4">
              <p><strong>Duration:</strong> 4 Years</p>
              <p><strong>Degree:</strong> Bachelor of Technology (B.Tech)</p>
              <p><strong>Mode:</strong> Full Time</p>
              <p><strong>Eligibility:</strong> 10+2 with PCM</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">
              Why Choose This Course?
            </h3>

            <ul className="space-y-5 text-gray-700">
              <li>✔ Industry-focused curriculum</li>
              <li>✔ Experienced faculty members</li>
              <li>✔ Modern computer laboratories</li>
              <li>✔ Internship opportunities</li>
              <li>✔ Placement assistance</li>
              <li>✔ Live projects & hackathons</li>
            </ul>
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Core Subjects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <FaLaptopCode className="mx-auto text-blue-600 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Programming</h3>
              <p className="text-gray-600 mt-3">
                C, C++, Java, Python
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <FaDatabase className="mx-auto text-blue-600 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Database</h3>
              <p className="text-gray-600 mt-3">
                SQL, MongoDB, Database Design
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <FaRobot className="mx-auto text-blue-600 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Artificial Intelligence</h3>
              <p className="text-gray-600 mt-3">
                Machine Learning & AI Basics
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <FaShieldAlt className="mx-auto text-blue-600 text-4xl mb-4" />
              <h3 className="font-bold text-xl">Cyber Security</h3>
              <p className="text-gray-600 mt-3">
                Ethical Hacking & Network Security
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl text-white text-center py-14 px-8">
  <h2 className="text-4xl font-bold">
    Start Your Career in Computer Science
  </h2>

  <p className="mt-4 text-lg">
    Join our Computer Science program and become a future software engineer,
    AI specialist, or cybersecurity expert.
  </p>

  <Link
    to="/apply"
    className="inline-block mt-10 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
  >
    Apply Now
  </Link>
</div>

      </div>
    </section>

    </>
  );
};

export default ComputerScience;