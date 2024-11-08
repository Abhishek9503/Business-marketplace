import React from "react";

const AboutUsCollage = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main container with proper aspect ratio and responsive sizing */}
      <div className="relative w-full ">
        {/* Image container with preserved aspect ratio */}
        <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
          <img
            src="/Images/aboutusCollage.png"
            alt="About Us Collage"
            className="w-full h-full object-contain"
          />
        </div>
      
      </div>
    </div>
  );
};

export default AboutUsCollage;
