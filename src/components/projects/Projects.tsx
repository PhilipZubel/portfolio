import React from "react";
import Card from "./Card";

import { projects } from "../../assets/content";

const Projects = () => {
    return (
        <>
        <div className="section tracking-wider" id="projects">
          <span className="disable-select anchor-tag text-xl sm:text-3xl text-teal-500">&lt;projects&gt;</span>
            <div id="project-cards" className="my-6 sm:m-10 lg:mx-2 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-28 lg:gap-10 p-2">
              {projects.map( (project, idx) => {
                return (
                  <Card key={idx} project={project}/>
                )
              })}
            </div>
          <span className="disable-select anchor-tag text-xl sm:text-3xl text-teal-500">&lt;/projects&gt;</span>
        </div>
        </>
    )
    
};

export default Projects;
