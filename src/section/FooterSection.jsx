import React from "react";
import { FaTwitter, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:text-gray-300 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-white hover:text-gray-300 transition-colors duration-200"
  >
    {children}
  </a>
);

/**
 * RealEstateFooter component renders the footer section of a real estate website.
 * It includes a hero section with an image and a call-to-action button, a navigation bar with links and a subscription form,
 * and a footer with copyright information, a logo, and social media links.
 *
 * @component
 * @example
 * return (
 *   <RealEstateFooter />
 * )
 */
const RealEstateFooter = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0">
          <img loading="lazy"
            src="/Images/Rectangle.svg"
            alt="Interior design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Learn more about our listing process, as well as our additional
            staging and design work.
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded hover:bg-gray-100 transition-colors duration-200">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/testimonials">Testimonials</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>

            {/* Subscribe Form */}
            <div className="flex items-center space-x-2">
              <span className="text-white">Subscribe to Us</span>
              <input
                type="email"
                placeholder="Enter Email Address..."
                className="px-4 py-2 rounded text-gray-800"
              />
              <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>© All Rights Reserved 2023</div>

            {/* Logo */}
            <div className="text-xl font-bold">Real Trust</div>

            {/* Social Links */}

            <div className="flex space-x-4">
              <SocialLink href="#twitter">
                <FaTwitter size={20} />
              </SocialLink>
              <SocialLink href="#youtube">
                <FaYoutube size={20} />
              </SocialLink>
              <SocialLink href="#facebook">
                <FaFacebook size={20} />
              </SocialLink>
              <SocialLink href="#linkedin">
                <FaLinkedin size={20} />
              </SocialLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstateFooter;
