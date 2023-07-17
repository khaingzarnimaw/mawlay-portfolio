import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import Title from "./resources/Title";

const Portfolio = () => {
  
  const [projects, setProjects] = useState([
    {
      title: "Project One",
      text: "",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["Javascript", "C#", "TailWind"],
    },
    {
      title: "Project Two",
      text: "",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["TailWind", "Css", "Html"],
    },
    {
      title: "Project Three",
      text: "",
      githubUrl: "https://github.com/khaingzarnimaw",
      url: "http://www.google.com",
      languages: ["PHP", "Laravel"],
    },
  ]);
   console.log(projects);

  return (
    <div className="h-screen flex  justify-center items-center my-20" id="protfolio">
      <div className="w-[70%] mx-auto ">
        {/* <span className="text-2xl font-bold underline ">Portfolio</span>
        <span className="text-xs bg-slate-300 p-1 ml-2 ">work do so far</span> */}
        <Title title={"Portfolio"} setTitle={"Work do so far"} />

        <div className="flex gap-5 flex-col md:flex-row ">
          {projects?.map((project, index) => {
            return (
              <div className="basis-1/3" key={index}>
                <ProjectCard data={project} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
