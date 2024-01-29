import React from "react";
import Icon from "../assest/icon.svg";
import { Button } from "../components/Button";

export function HeroSection() {
  const pdfUrl = process.env.PUBLIC_URL + "/MyResume.pdf";
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white text-center  ">
      <h1 className=" text-4xl sm:text-6xl font-bold mb-4 ">
        HEY, I'M MICHAEL OLUBODE
      </h1>
      <p className="max-w-2xl text-lg tracking-wide font-lato tracking-wide leading-10 mt-10 w-80 sm:w-auto">
        A Frontend-focused Web Developer building the frontend of websites and web applications that lead to the success of the overall product.
      </p>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        <Button>RESUME</Button>
      </a>
      <img src={Icon} alt="icon" className="mt-20 max-w-36" />

    </div>
  );
}
