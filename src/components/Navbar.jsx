import React, { useEffect, useState } from "react";
import Logo from "./navContent/Logo";
import Menu from "./navContent/Menu";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-16  ${
        scroll
          ? "bg-blue-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" mx-auto w-full flex items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <Logo />
        <div className="hidden lg:flex">
          <Menu />
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-blue-900/95 backdrop-blur-md px-6 pb-6">
          <Menu mobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;