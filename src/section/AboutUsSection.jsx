import React from "react";

/**
 * AboutUsSection component renders the "About Us" section of the webpage.
 * It includes a title, a description, and a "Learn More" button with hover effects.
 *
 * @component
 * @example
 * return (
 *   <AboutUsSection />
 * )
 */
const AboutUsSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2 pb-12 md:pb-10">
        {/* Content Container */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            About Us
          </h2>

          {/* Blue Underline */}
          <div className="w-24 h-1 bg-blue-500 mb-8 md:mb-12" />

          {/* Description Text */}
          <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-12 px-4 md:px-8">
            Meet your exclusive specialist to sell real estate and make you
            comfortable commitment to excellence, trust and honesty through the
            whole quality services is built where we live on island and maximize
            property, increase house value with us by serving you positively
            effectively.
          </p>

          {/* Learn More Button */}
          <button className="relative px-8 py-3 group">
            {/* Button Text */}
            <span className="relative z-10 text-gray-600 text-lg font-medium group-hover:text-blue-600 transition-colors duration-200">
              LEARN MORE
            </span>

            {/* Underline that expands on hover */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300 overflow-hidden">
              <div className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
