import React from "react";
import Github from "../assest/github.svg";

export function ProjectCard({ project }) {
  return (
    <div className="flex flex-col items-center  sm:flex-row">
      {project.img && (
        <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
          <img src={project.img} alt={project.name} className="w-[400px] h-auto cursor-auto" />
        </div>
      )}
      <div className="flex flex-col sm:w-1/2">
        <h3 className="text-3xl mb-2 font-semibold">{project.name}</h3>
        <p className="mb-4">{project.describe}</p>
        <div className="flex items-center">
          <a href={project.link} className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded mr-4">
            View Project
          </a>
          <a href={project.github}>
            <img src={Github} alt="github" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
