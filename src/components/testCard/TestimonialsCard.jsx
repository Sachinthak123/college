import React from "react";



const TestimonialsCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 rounded-full border-4 border-blue-600 object-cover"
        />

        <div>
          <h3 className="font-bold text-xl">{item.name}</h3>
          <p className="text-gray-500">
            {item.college}, {item.country}
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-7">
        {item.thoughts}
      </p>
    </div>
  );
};

export default TestimonialsCard;