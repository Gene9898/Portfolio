import React from "react";
import { aboutContent } from "@/constants/constants";
const About = () => {
  return (
    <div id="about" className={`contentDiv`}>
      <p className="contentTitle">
        <span className="contentTitleText">ABOUT</span>
      </p>
      <div className="content flex flex-col gap-5 justify-center">
        {aboutContent.map((paragraph, index) => {
          return <p key={"p" + index}>{paragraph}</p>;
        })}
      </div>
      {}
    </div>
  );
};

export default About;
