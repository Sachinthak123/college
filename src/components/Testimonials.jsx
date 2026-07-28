import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialsCard from "./testCard/TestimonialsCard";

import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";
import test4 from "../assets/test4.png";

const testimonials = [
  {
    id: 1,
    image: test1,
    name: "Emily Williams",
    country: "USA",
    college: "Edusity",
    thoughts:
      "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
  },
  {
    id: 2,
    image: test2,
    name: "James Anderson",
    country: "Canada",
    college: "Edusity",
    thoughts:
      "The professors are knowledgeable and supportive. The learning environment helped me build confidence and practical skills.",
  },
  {
    id: 3,
    image: test3,
    name: "Sophia Brown",
    country: "Australia",
    college: "Edusity",
    thoughts:
      "I enjoyed every moment of my university life. The campus, faculty, and opportunities made my journey unforgettable.",
  },
  {
    id: 4,
    image: test4,
    name: "Michael Lee",
    country: "UK",
    college: "Edusity",
    thoughts:
      "Edusity provided me with industry exposure and excellent career guidance. I highly recommend it to every aspiring student.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (index < testimonials.length - cardsToShow) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
          What Students Say
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative px-4">

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={index === 0}
          className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 md:w-12 md:h-12 rounded-full
            flex items-center justify-center
            ${
              index === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }
            text-white transition`}
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={index >= testimonials.length - cardsToShow}
          className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 md:w-12 md:h-12 rounded-full
            flex items-center justify-center
            ${
              index >= testimonials.length - cardsToShow
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }
            text-white transition`}
        >
          <FaArrowRight />
        </button>

        {/* Slider */}
        <div className="overflow-hidden mx-12 md:mx-16">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * (100 / cardsToShow)}%)`,
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`${
                  cardsToShow === 1 ? "min-w-full" : "min-w-1/2"
                } px-3`}
              >
                <TestimonialsCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({
            length: testimonials.length - cardsToShow + 1,
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;