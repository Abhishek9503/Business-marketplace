// Header.jsx
import React from "react";
import { FaBars } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#reviews" },
];

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4 pr-20 pl-20 bg-white shadow-md">
      <div>
        <img
          loading="lazy"
          src="/Images/logo.svg"
          className="w-auto h-10"
          alt=""
        />
      </div>
      {/* Desktop Navbar */}
      <div className="flex items-center  gap-20">
        <nav className="hidden md:flex space-x-8 text-gray-700">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </nav>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hidden md:block">
          Contact
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-gray-700">
          <FaBars size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
