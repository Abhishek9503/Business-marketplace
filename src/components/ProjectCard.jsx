import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      key={index}
      className="min-w-[280px] w-1/3 flex-shrink-0  bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={`/Images/${project.image}`}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="flex flex-col items-center text-center p-6 space-y-4">
        <h3 className="text-xl font-semibold text-blue-900">
          {project.title}
        </h3>
        <p className="text-base text-gray-600">
          {project.price} - {project.details}
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;