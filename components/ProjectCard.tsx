import React from "react";
import Image from "next/image";
import { projectContent } from "@/constants/constants";
const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-20">
      {projectContent.map((proj) => {
        const handleRedirect = () => {
          if (proj.url) {
            window.open(proj.url, "_blank");
          }
        };
        return (
          <div key={proj.name} className="cardDiv" onClick={handleRedirect}>
            <div className="flex flex-row items-center gap-20">
              <div className="w-[300px] h-[150px]">
                <Image
                  className="rounded-lg"
                  width={0}
                  height={0}
                  sizes="100vh"
                  style={{ height: "100%", width: "auto" }}
                  src="/dummy.png"
                  alt="Project Image"
                />
              </div>
              <p className="contentSubtitle">{proj.name}</p>
            </div>
            <p>{proj.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
