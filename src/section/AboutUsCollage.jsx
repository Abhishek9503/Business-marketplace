import React from "react";
import AboutUsSection from "./AboutUsSection";

// Functional component for the About Us Collage section
const AboutUsCollage = () => {
  return (
    // Main container with full width and responsive padding
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main container with proper aspect ratio and responsive sizing */}
      <div className="relative w-full ">
        {/* Image container with preserved aspect ratio */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
          {/* Lazy-loaded image for the About Us collage */}
          <img loading="lazy"
            src="/Images/aboutusCollage.png"
            alt="About Us Collage"
            className="w-full h-full object-contain"
          />
        </div>
        {/* About Us section component */}
        <AboutUsSection/>
      </div>
    </div>
  );
};

// Exporting the AboutUsCollage component as default
export default AboutUsCollage;