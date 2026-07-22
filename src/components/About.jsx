import React from "react";
import aboutImage from "../assets/about.png";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="w-full bg-white py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={aboutImage}
            alt="About University"
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-8 text-center lg:text-left space-y-6">
          <div>
            <p className="text-blue-800 uppercase text-xl font-extrabold">
            ABOUT UNIVERSITY
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Empowering Minds, <br /> Shaping Futures
          </h2>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-gray-600">
            Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
          </p>

          <p className="text-gray-600">
            With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
          </p>

          <p className="text-gray-600">
            Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
