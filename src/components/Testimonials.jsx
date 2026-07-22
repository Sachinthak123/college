import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialsCard from "./testCard/TestimonialsCard";
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import test4 from '../assets/test4.png'
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

  const nextSlide = () => {
    if (index < testimonials.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="py-20">
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold uppercase">
          Testimonials
        </p>
        <h2 className="text-4xl font-bold">
          What Students Say
        </h2>
      </div>
      <div className="max-w-6xl mx-auto relative">

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-4 rounded-full"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white p-4 rounded-full"
        >
          <FaArrowRight />
        </button>

        {/* Slider */}
        <div className="overflow-hidden mx-16">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * 50}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-[50%]">
                <TestimonialsCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;