import React, {useState} from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Scroll } from "./components/ScrollToTop";
import { Project } from "./components/Project";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen)
  }
  return (
    <div className="min-h-screen flex flex-col  text-white scroll-smooth focus:scroll-auto">
      {!menuIsOpen && <Scroll />}
      <NavBar handleMenu={handleMenu} menuIsOpen={menuIsOpen}/>
      <HeroSection />
      <About />
      <Project />
      <Contact />

    </div>
  );
}

export default App;
