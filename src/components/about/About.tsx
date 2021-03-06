import React from "react";
import './about.css'

import {about} from "../../assets/content"

const picture = require('../../assets/me.png');



const About = () => {
    
    return (
        <>
        <div id="about" className="section tracking-wider">
            <span className="anchor-tag disable-select text-xl sm:text-3xl text-rose-600 mb-10">&lt;about&gt;</span>
            <div className="content">
                    <img src={picture} alt="portrait" className="picture"/>
                <div className="info">
                    <p className="description text-sm py-4 sm:py-0 sm:text-xl">
                        {about.description}
                    </p>
                    <div className="cv">
                        <a href={about.cv} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}} >
                            <button className="button-24 bg-rose-600" >{about.button}</button>
                        </a>

                    </div>
                </div>
            </div>
            
            <span className="anchor-tag disable-select text-xl sm:text-3xl text-rose-600 mt-10">&lt;/about&gt;</span>
        </div>
        </>
    )
    
};

export default About;
