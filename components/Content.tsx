import React from "react";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Footer from "./Footer";

type ContentProps = {
  className: string;
};

const Content = ({ className }: ContentProps) => {
  return (
    <div className={`flex flex-col gap-20 text-gray-400 ${className}`}>
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
