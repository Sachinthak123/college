import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 flex-shrink-0"
    >
      <img
        src={logo}
        alt="College Logo"
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
      />

      <div className="hidden sm:block">
        <h2 className="text-white font-bold text-xl leading-none">
          EduVerse
        </h2>

        <p className="text-blue-100 text-xs mt-1">
          Excellence in Education
        </p>
      </div>
    </Link>
  );
};

export default Logo;