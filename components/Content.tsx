import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="lg:w-1/2 flex flex-col gap-20 h-full text-gray-400">
      <About />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
};

export default Content;
