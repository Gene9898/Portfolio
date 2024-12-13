import React from "react";
import { experienceContent } from "@/constants/constants";
const ExperienceCard = () => {
  return (
    <div className="flex flex-col gap-20">
      {experienceContent.map((exp) => {
        const handleRedirect = () => {
          if (exp.url) {
            window.open(exp.url, "_blank");
          }
        };
        return (
          <div key={exp.name} className="cardDiv" onClick={handleRedirect}>
            <div className="flex md:flex-row md:items-center md:justify-between flex-wrap flex-col">
              <p className="contentSubtitle">
                {exp.name} <span className="relative bottom-1">.</span>{" "}
                {exp.position}
              </p>
              <p className="text-sm font-mono">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <p className="text-base">{exp.description}</p>
            <div className="flex flex-row gap-5 flex-wrap font-mono">
              {exp.techStack.map((skill) => {
                return (
                  <p
                    key={exp.name + skill}
                    className="rounded-lg p-1.5 bg-gray-700 text-gray-400 text-sm"
                  >
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceCard;
