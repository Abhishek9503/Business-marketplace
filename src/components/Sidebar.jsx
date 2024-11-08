// Sidebar.jsx
import React from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Reviews', href: '#reviews' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      <div className="flex flex-col p-4 space-y-4">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-gray-700 hover:text-blue-600"
            onClick={toggleSidebar}
          >
            {link.name}
          </a>
        ))}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 mt-4">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
