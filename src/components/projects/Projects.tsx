import React from "react";
import Card from "./Card";
import './projects.css'

const Projects = () => {
    return (
        <>
        <div className="section tracking-wider text-sky-300" id="projects">
          <span className="disable-select anchor-tag text-3xl">&lt;projects&gt;</span>
            <Card/>
          <span className="disable-select anchor-tag text-3xl text-cyan-300">&lt;/projects&gt;</span>
        </div>
        </>
    )
    
};

export default Projects;
