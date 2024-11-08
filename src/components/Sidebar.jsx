import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // For an outline cross icon

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Reviews", href: "#reviews" },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 bg-white shadow-lg transition-transform transform z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } md:hidden`}
    >
      {/* Close button container */}
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close sidebar"
        >
          <AiOutlineClose size={24} />
        </button>
      </div>

      {/* Navigation links container */}
      <div className="flex flex-col px-4 pb-4 space-y-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            onClick={toggleSidebar}
          >
            {link.name}
          </a>
        ))}

        {/* Contact button */}
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 
                     transition-colors mt-4 w-full"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
