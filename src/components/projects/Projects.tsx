import React from "react";
import Card from "./Card";
import './projects.css'

const Projects = () => {
    return (
        <>
        <div className="section tracking-wider" id="projects">
          <span className="disable-select anchor-tag text-3xl text-sky-300">&lt;projects&gt;</span>
            <Card/>
          <span className="disable-select anchor-tag text-3xl text-cyan-300">&lt;/projects&gt;</span>
        </div>
        </>
    )
    
};

export default Projects;
