import React from "react";
import './skills.css'
import { skills } from "../../assets/content";

const Skills = () => {
    return (
        <div className="section" id="skills">
          <span className="disable-select anchor-tag text-xl sm:text-3xl tracking-wider pb-6 text-blue-400">&lt;skills&gt;</span>
          <div className="grid grid-cols-3 md:grid-cols-5 place-content-evenly">
            {skills.map((skill, idx) => {
              return (
                <div key={idx} className="p-3 sm:p-6">
                  <img src={skill.picture} alt={skill.name} style={{width:'96px', height:'96px', display: "block", 
                      marginLeft: "auto",
                      marginRight: "auto",
                      }}/>
                  <h4 className="text-center font-bold text-amber-50 pt-1 sm:pt-2">{skill.name}</h4>
                </div>
              )
            })}

          </div>
          <span className="disable-select anchor-tag text-xl sm:text-3xl tracking-wider pt-6 text-blue-400">&lt;/skills&gt;</span>
        </div>
    )
};

export default Skills;
