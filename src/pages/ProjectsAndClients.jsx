import React, { useEffect, useRef } from "react";

const ProjectsAndClients = () => {
  const clientsContainerRef = useRef(null);

  const projects = [
    {
      image: "project1.jpg",
      title: "Consultation",
      price: "$150-$200",
      details: "3 weeks",
    },
    {
      image: "project2.jpg",
      title: "Design",
      price: "$150-$200",
      details: "3 weeks",
    },
    {
      image: "project3.jpg",
      title: "Marketing & Design",
      price: "$150-$200",
      details: "3 weeks",
    },
    {
      image: "project4.jpg",
      title: "Consultation & Marketing",
      price: "$150-$200",
      details: "3 weeks",
    },
    {
      image: "project5.jpg",
      title: "Consultation",
      price: "$150-$200",
      details: "3 weeks",
    },
  ];

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
      image: "client6.svg",
      name: "Lucy",
      role: "Real Estate Agent",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
  ];

  useEffect(() => {
    const container = clientsContainerRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += container.clientWidth / 2;
        }
      }, 1000);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    startScrolling();

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    return () => {
      clearInterval(scrollInterval);
      container?.removeEventListener("mouseenter", stopScrolling);
      container?.removeEventListener("mouseleave", startScrolling);
    };
  }, []);

  return (
    <div className="w-full bg-white py-16 md:py-24">
      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We know what buyers are looking for and suggest projects that will
            bring clients top dollar for the sale of their homes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`/Images/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-blue-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {project.price} - {project.details}
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16">
          Happy Clients
        </h2>

        {/* Auto-scrolling Clients Container */}
        <div
          ref={clientsContainerRef}
          className="overflow-x-hidden whitespace-nowrap"
        >
          <div className="inline-flex gap-6 px-4">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="w-72 inline-block whitespace-normal bg-white rounded-lg p-6 shadow-md"
              >
                <img
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
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndClients;