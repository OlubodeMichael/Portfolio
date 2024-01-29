import React from "react";
import { ProjectCard } from "./ProjectCard";
import { projectList } from "./projectList";

export function Project() {
  return (
    <div className="min-h-screen flex flex-col p-4 md:p-10 mt-10 mt-80 sm:mt-0 mb-20 sm:mb-0 sm:ml-20">
      <h1 className="flex flex-col justify-center items-center text-white text-center font-bold text-4xl">PROJECT</h1>
      {projectList.map((project, index) => (
        <div key={index} className="mt-10 mb-10">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}


// flex  justify-around align-top mt-10 sm:mt-32 max-md:flex-col