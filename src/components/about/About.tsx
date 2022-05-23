import React from "react";
import './about.css'
import Zoom from 'react-reveal/Zoom';

import {about} from "./../../assets/text"

const picture = require('../../assets/me.png');



const About = () => {
    
    return (
        <>
        <div id="about" className="section">
            <span className="anchor-tag disable-select about-tag">&lt;about&gt;</span>
            <div className="content">
                <Zoom left>
                    <img src={picture} alt="portrait" className="picture"/>
                </Zoom>
                <div className="info">
                    <p className="description">
                        {about.description}
                    </p>
                    <div className="cv">
                        <a href={about.cv} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}} >
                            <button className="button-24" >{about.button}</button>
                        </a>

                    </div>
                </div>
            </div>
            
            <span className="anchor-tag disable-select about-tag">&lt;/about&gt;</span>
        </div>
        </>
    )
    
};

export default About;
