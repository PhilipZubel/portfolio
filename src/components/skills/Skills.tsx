import React from "react";
import './skills.css'
import { skills } from "../../assets/content";

const Skills = () => {
    return (
        <>
        <div className="section" id="skills">
          <span className="disable-select anchor-tag text-3xl tracking-wider">&lt;skills&gt;</span>
          <div className="flex flex-wrap ">
            {skills.map(skill => {
              return (
                <div className="p-6">
                  <img src={skill.picture} alt={skill.name} style={{width:'96px', height:'96px'}}/>
                  <h4 className="text-center font-bold pt-2">{skill.name}</h4>
                </div>
              )
            })}

          </div>
          <span className="disable-select anchor-tag text-3xl tracking-wider">&lt;/skills&gt;</span>
        </div>
        </>
    )
};

export default Skills;
