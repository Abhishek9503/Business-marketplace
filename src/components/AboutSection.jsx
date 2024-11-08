import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const features = [
  { title: "Potential ROI", description: "Get the best ROI.", icon: "💰" },
  { title: "Design", description: "Stunning home design.", icon: "🎨" },
  { title: "Marketing", description: "Top-tier marketing.", icon: "📈" },
  { title: "Consultation", description: "Expert guidance.", icon: "🗣️" },
  { title: "Analytics", description: "Data-driven strategies.", icon: "📊" },
  { title: "Support", description: "24/7 customer support.", icon: "💬" },
  { title: "Legal", description: "Secure transactions.", icon: "⚖️" },
  { title: "Networking", description: "Connect with buyers.", icon: "🔗" },
  { title: "Staging", description: "Professional staging.", icon: "🏠" },
  { title: "Negotiation", description: "Best deal guarantee.", icon: "🤝" },
];

const AboutSection = () => {
  const handleScrollRight = () => {
    const scrollContainer = document.getElementById("feature-scroll-container");
    const scrollAmount = window.innerWidth < 768 ? 280 : 300; // Adjust scroll amount for mobile
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    const scrollContainer = document.getElementById("feature-scroll-container");
    const scrollAmount = window.innerWidth < 768 ? 280 : 300; // Adjust scroll amount for mobile
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Explore the key features that make our services exceptional.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[100vw] mx-auto">
          <div
            id="feature-scroll-container"
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-4 pb-4 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] 
                             flex-shrink-0 flex flex-col items-center 
                             text-center p-4 sm:p-6 bg-gray-100 rounded-lg 
                             shadow-lg space-y-3 sm:space-y-4 
                             hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl sm:text-5xl mb-2">{feature.icon}</div>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-900">
                  {feature.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 sm:gap-6 mt-6">
            <button
              onClick={handleScrollLeft}
              className="p-3 sm:p-4 bg-blue-900 text-white rounded-full 
                           shadow-lg hover:bg-blue-700 focus:outline-none 
                           transition-colors duration-300"
              aria-label="Scroll left"
            >
              <FiArrowLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleScrollRight}
              className="p-3 sm:p-4 bg-blue-900 text-white rounded-full 
                           shadow-lg hover:bg-blue-700 focus:outline-none 
                           transition-colors duration-300"
              aria-label="Scroll right"
            >
              <FiArrowRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
