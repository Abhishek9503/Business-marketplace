import React, { useState, useEffect } from "react";
import MainContent from "../components/layout/marketing/MainContent";
import ConsultationForm from "../components/layout/marketing/ConsultationForm";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array of image paths
  const images = [
    "/Images/client1.svg",
    "/Images/client2.svg",
    "/Images/client3.svg",
    "/Images/client4.svg",
    "/Images/client5.svg",
  ];

  // Handle image transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 900); // Match this with animation duration
    }, 9000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={img}
          loading={index === 0 ? "lazy" : "lazy"}
          src={img}
          alt={`Background ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
          } ${
            isAnimating ? "scale-105" : "scale-100"
          } transition-transform duration-500`}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-20 w-full min-h-screen">
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <MainContent />
            <ConsultationForm />
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  );
};

export default HeroSection;
