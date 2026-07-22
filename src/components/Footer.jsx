import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Menu from "./navContent/Menu";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-400">Edusity</h2>
          <p className="text-gray-400 text-sm mt-1">
            © {new Date().getFullYear()} Edusity. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <Menu/>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="#"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-sky-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;