import React from "react";
import Project1 from "../assest/project1.png"
import Project2 from "../assest/project2.png"
import Github from "../assest/github.svg"

const projectList = [
  {
    name: 'Eat-N-Split',
    link: 'https://eat-n-split-3pg1xuswj-michael-olubodes-projects.vercel.app/',
    describe: 'This React application enables users to manage expenses and balances with friends, including adding friends, selecting them for bill splitting, and updating balances, fostering easy expense tracking and financial management.',
    img: Project1,
    github: 'https://github.com/OlubodeMichael/Eat-N-Split'
  },
  {
    name: 'Url-Shortener',
    link: 'https://url-shortener-peach.vercel.app/',
    describe: 'The link shortening functionality is achieved through an intuitive interface that utilizes the "https://api.shrtco.de" API for dynamic results, integrating advanced analytics and branding features. Conversely, the QR code generator enables users to input links, generating QR codes instantly within a clean and minimalist design.',
    img: Project2,
    github: 'https://github.com/OlubodeMichael/Url-Shortener'
  },
  
];

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

function ProjectCard({ project }) {
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

// flex  justify-around align-top mt-10 sm:mt-32 max-md:flex-col