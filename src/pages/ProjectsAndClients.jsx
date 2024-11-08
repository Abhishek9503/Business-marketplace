import React, { useState } from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  const [isHovered, setIsHovered] = useState(false);

  const clients = [
    {
      image: "client1.svg",
      name: "Benjamin Smith",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client2.svg",
      name: "Diana Kwak",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client3.svg",
      name: "John Lepora",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client4.svg",
      name: "Kerry Freeman",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client5.svg",
      name: "Lucy",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client2.svg",
      name: "Diana Kwak",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client3.svg",
      name: "John Lepora",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client4.svg",
      name: "Kerry Freeman",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client2.svg",
      name: "Diana Kwak",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client3.svg",
      name: "John Lepora",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      image: "client4.svg",
      name: "Kerry Freeman",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          Happy Clients
        </h2>

        {/* Marquee Effect Clients Container */}
        <motion.div
          className="overflow-x-hidden whitespace-nowrap"
          animate={{
            x: isHovered ? 0 : ["0%", "-100%"], // Animate between 0% and -100%
          }}
          transition={{
            x: {
              repeat: Infinity, // Infinite loop
              repeatType: "mirror", // Reverse the direction after each loop
              duration: 20, // Adjust speed here
              ease: "linear", // Constant speed for smooth scrolling
            },
          }}
          onMouseEnter={() => setIsHovered(true)} // Pause scroll on hover
          onMouseLeave={() => setIsHovered(false)} // Resume scroll when hover ends
        >
          <div className="inline-flex gap-6 px-4">
            {/* Duplicate the clients array to create the seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-72 inline-block whitespace-normal bg-white rounded-lg p-6 shadow-md"
              >
                <img loading="lazy"
                  src={`/Images/${client.image}`}
                  alt={client.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-blue-900 text-center mb-2">
                  {client.name}
                </h3>
                <p className="text-gray-500 text-sm text-center mb-4">
                  {client.role}
                </p>
                <p className="text-gray-600 text-sm text-center line-clamp-4">
                  {client.review}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
