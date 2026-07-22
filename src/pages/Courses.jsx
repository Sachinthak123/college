import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import BgBlackNav from "../components/BgBlackNav";

const Courses = () => {
  return (
    <>

    <BgBlackNav />
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-900 text-xl  font-semibold uppercase tracking-wider">
            Our Courses
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Explore Our Academic Programs
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We provide industry-focused programs designed to prepare students
            for successful careers and lifelong learning.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {courses.map((course) => {
    const Icon = course.icon;

    return (
      <div
        key={course.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-2"
      >
        <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
          <Icon size={40} />
        </div>

        <h3 className="text-2xl font-semibold text-slate-800 mb-4">
          {course.title}
        </h3>

        <p className="text-gray-600 leading-7">
          {course.description}
        </p>

        <Link
          to={`/courses/${course.id}`}
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    );
  })}
</div>
      </div>
    </section>
    </>
  );
};

export default Courses;
