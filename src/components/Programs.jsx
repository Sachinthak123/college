import React from "react";
import {
  FaGraduationCap,
  FaUserGraduate,
  FaBookOpen,
} from "react-icons/fa";

import graduation from "../assets/graduation.png";
import master from "../assets/master.png";
import postgradu from "../assets/postgradu.png";

const programs = [
  {
    image: graduation,
    title: "Bachelor Degree",
    icon: <FaUserGraduate size={35} />,
  },
  {
    image: master,
    title: "Master Degree",
    icon: <FaGraduationCap size={35} />,
  },
  {
    image: postgradu,
    title: "Post Graduate",
    icon: <FaBookOpen size={35} />,
  },
];

const Programs = () => {
  return (
    <section className="w-full flex flex-col gap-5 items-center  py-16 px-5">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-700 font-semibold text-sm tracking-wider uppercase">
          OUR PROGRAMS
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
          What We Offer
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-62.5 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-700/75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="mb-3">{item.icon}</div>

              <h3 className="text-xl md:text-2xl font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;