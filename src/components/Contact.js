import React, { useState } from "react";
import Linkedin from "../assest/linkedin.svg";
import Github from "../assest/github.svg";
import { Button } from "./Button";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="h-screen">
      <h1 className="flex flex-col justify-center items-center text-white text-center font-bold text-4xl">CONTACT</h1>
      <p className="flex flex-col justify-center items-center text-white text-center mt-10 text-xl pl-4 pr-4">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <form className="flex flex-col items-center mt-24  p-4 rounded-md">
        <div className="flex flex-col w-full max-w-xl">
          <label htmlFor="name" className="text-white">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Your Name"
            className="w-full rounded border p-3 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="flex flex-col mt-2 w-full max-w-xl">
          <label htmlFor="email" className="text-white">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            className="w-full h-12 rounded border p-3 focus:outline-none focus:ring focus:ring-blue-300 text-black"
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="flex flex-col mt-2 w-full max-w-xl">
          <label htmlFor="message" className="text-white">Message</label>
          <textarea
            id="message"
            value={message}
            placeholder="Enter Your Message"
            className="w-full h-40 rounded border p-3 focus:outline-none focus:ring focus:ring-blue-300 text-black" 
            onChange={e => setMessage(e.target.value)}/>
        </div>
        <Button>Submit</Button>
        <div className="flex mt-32 mb-16">
          <a href="https://www.linkedin.com/in/michael-olubode-olushola/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="linkedin" className="w-7 h-7 m-8" />
          </a>
          <a href="https://github.com/OlubodeMichael" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="github" className="w-7 h-7 m-8" />
          </a>
        </div>
      </form>

    </div>
  );
}
