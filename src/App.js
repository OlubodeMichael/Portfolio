import React, {useState} from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Scroll } from "./components/ScrollToTop";
import { Project } from "./components/Project";
import { NavBar } from "./Pages/NavBar";
import { HeroSection } from "./Pages/HeroSection";
import { motion, useScroll } from "framer-motion";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { scrollYProgress } = useScroll();
  function handleMenu() {
    setMenuIsOpen((isOpen) => !isOpen)
  }
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="min-h-screen flex flex-col  text-white scroll-smooth focus:scroll-auto">
        {!menuIsOpen && <Scroll />}
        
        <NavBar handleMenu={handleMenu} menuIsOpen={menuIsOpen}/>
        <HeroSection />
        <About />
        <Project />
        <Contact />

      </div>
    </>
  );
}

export default App;
