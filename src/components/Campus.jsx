import React from 'react'
import g1 from '../assets/g1.png'
import g2 from '../assets/g2.png'
import g3 from '../assets/g3.png'
import g4 from '../assets/g4.png'
import { HiArrowRight } from "react-icons/hi2";
const Campus = () => {

  const campusImage = [
  { image: g1 },
  { image: g2 },
  { image: g3 },
  { image: g4 },
];

return (
  <section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-10">
      <p className="text-blue-700 uppercase tracking-widest font-semibold">
        GALLERY
      </p>
      <h3 className="text-4xl font-bold text-gray-800">
        Campus Photos
      </h3>
    </div>

    {/* Images */}
    <div className="flex flex-wrap justify-center items-center gap-6">
      {campusImage.map((item, idx) => (
        <img
          key={idx}
          src={item.image}
          alt={`Campus ${idx + 1}`}
          className="w-70 h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
        />
      ))}
    </div>

    <div className="flex items-center py-10">
      <button className='flex gap-1 items-center cursor-pointer bg-blue-900 p-3 rounded-full text-white font-medium mx-auto'>
        See more here <HiArrowRight size={20} />
      </button>
    </div>

  </div>
</section>
);
}

export default Campus
