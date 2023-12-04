import React from "react";
import { SkillsCard } from "./SkillsCard";
import { Button } from "./Button"

const skills = ["Java", "C++", "Python", "Javascript", "SQL", "HTML/CSS", "ReactJS", "NodeJS", "SEO", 'Figma', 'Unix', 'Git'];
export function About() {
  return (
    <div className="h-screen m-4 ms:mt-10 ">
      <h1 className="flex flex-col justify-center items-center text-white text-center font-bold text-4xl">ABOUT ME</h1>
      <p className="text-center mx-auto mt-10 text-white text-xl">Here you will find more information about me. What i do, and my current skills mostly in terms of programming and technology</p>
      <div className="flex  justify-around align-top mt-10 sm:mt-32 max-md:flex-col ">
        <div className="sm:pl-4 sm:pr-4 w-full sm:w-1/2">
          <h2 className="font-bold text-xl  sm:text-2xl ">Get to know me!</h2>
          <div>
            <h3 className="mt-10 text-md">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="font-bold">Projects</span> section.</h3>
            <br />
            <h3 className=" text-md">I also like sharing content related to the stuff that I have learned over the years in <span className="font-bold">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</h3>
            <br />
            <h3 className=" text-md ">I'm open to <span className="font-bold">Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</h3>
          </div>

          <Button >CONTACT</Button>
        </div>
        <div className=" flex flex-col items-start mb-20 sm:mb-0">
          <h2 className="font-bold text-xl  sm:text-2xl mb-10">My skills</h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-3 flex flex-wrap sm:flex-nowrap">
            {skills.map((skill, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-base flex justify-center items-center mb-2.5">
                <SkillsCard skill={skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}