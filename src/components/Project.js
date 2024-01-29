import React from "react";
import Project1 from "../assest/project1.png"
import Project2 from "../assest/project2.png"
import { ProjectCard } from "./ProjectCard";

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


// flex  justify-around align-top mt-10 sm:mt-32 max-md:flex-col