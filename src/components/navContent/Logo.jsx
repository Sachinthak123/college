import React from "react";
import logo from "../../assets/Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <img
        src={logo}
        alt="College Logo"
        className="w-16 h-16 object-contain"
      />

      <div className="hidden sm:block">
        <h2 className="text-white font-bold text-xl">
          EduVerse
        </h2>

        <p className="text-blue-100 text-xs">
          Excellence in Education
        </p>
      </div>
    </div>
  );
};

export default Logo;