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

const WhyChooseUs = () => {
  const handleScrollRight = () => {
    const scrollContainer = document.getElementById("feature-scroll-container");
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    const scrollContainer = document.getElementById("feature-scroll-container");
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col items-center  md:p-10 lg:p-12 space-y-16">
      <img loading="lazy"
        src="Images/ValuePage.png"
        alt="Background"
        className="absolute inset-0 object-cover -z-10"
      />

      <img loading="lazy"
        src="Images/dot.png"
        alt="Background"
        className="absolute inset-0 object-cover -z-2 top-52"
      />

      <div className="flex flex-col justify-center items-start gap-20 w-full z-30">
        <div className="text-start space-y-4 p-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900"></h2>
          <p className="text-gray-600 max-w-lg mx-auto"></p>
        </div>

        <div className="text-start space-y-4 p-6">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            We offer top-tier service to help you get the most from your
            property. Our team leverages design, marketing, and analytics to get
            you the best results.
          </p>
        </div>

        <div className="mt-48 w-full visibility-none mb-24">
          <section className="relative flex flex-col items-center space-y-8">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore the key features that make our services exceptional.
              </p>
            </div>

            <div className="relative flex items-center w-full max-w-5xl mx-auto">
              <div
                id="feature-scroll-container"
                className="flex gap-6 overflow-x-hidden scroll-smooth mx-auto p-4"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="min-w-[280px] w-1/3 flex-shrink-0 flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-5xl mb-2">{feature.icon}</div>
                    <h4 className="text-xl font-semibold text-blue-900">
                      {feature.title}
                    </h4>
                    <p className="text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <button
                onClick={handleScrollLeft}
                className="p-4 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300"
              >
                <FiArrowLeft size={24} />
              </button>
              <button
                onClick={handleScrollRight}
                className="p-4 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300"
              >
                <FiArrowRight size={24} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
