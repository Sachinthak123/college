import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Logo from "./navContent/Logo";
import Menu from "./navContent/Menu";

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

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
  className={`fixed top-0 left-0 w-screen z-50 transition-all duration-300 ${
    scroll
      ? "bg-blue-900/90 backdrop-blur-md shadow-lg"
      : "bg-transparent"
  }`}
>
  <div className="w-full max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">

    <Logo />

    {/* Desktop Menu */}
    <div className="hidden lg:flex">
      <Menu />
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="lg:hidden text-white text-3xl p-2"
    >
      {menuOpen ? <HiX /> : <HiMenuAlt3 />}
    </button>

  </div>
</nav>

      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-all duration-300 z-40 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-70 h-screen bg-blue-900 shadow-2xl z-50 transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-4xl"
          >
            <HiX />
          </button>
        </div>

        <div className="px-8">
          <Menu
            mobile={true}
            closeMenu={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;