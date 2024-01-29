import React from "react";
import Menu from "../assest/menu.svg";
import Linkedin from "../assest/linkedin.svg";
import Close from "../assest/cancel.svg";
import { Link } from 'react-router-dom';


export function NavBar({ handleMenu, menuIsOpen }) {

  return (
    <nav className="text-white p-4 ml-0 sm:ml-20 ml-0 sm:mr-20">
      <div className="flex items-center justify-between">
        <a href="https://www.linkedin.com/in/michael-olubode-olushola/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="linkedin" className="w-7 h-7" />
        </a>
        <img src={Menu} alt="menu" onClick={handleMenu} className="cursor-pointer" />
      </div>
      {menuIsOpen && <MenuOption handleMenu={handleMenu} />}
    </nav>
  );
}
function MenuOption({ handleMenu }) {
  const style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    opacity: "1",
  };

  const closeIconStyle = {
    position: "absolute",
    top: "20px",
    right: "60px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <div style={style}>
      <img src={Close} alt="close-menu" onClick={handleMenu} style={closeIconStyle} className="w-14 h-14" />
      <Link to="/" className="my-4 cursor-pointer text-3xl">Home</Link>
      <Link to="/About" className="my-4 cursor-pointer text-3xl">About</Link>
      <Link to="/Projects" className="my-4 cursor-pointer text-3xl">Projects</Link>
      <Link to="/Contact" className="my-4 cursor-pointer text-3xl">Contact</Link>
    </div>
  );
}
