import React from "react";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

import './timeline.css'
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";

import { timeline } from "../../assets/text";


const Timeline = () => {
    return (
        <>
        <div className="section" id="timeline">
          <span className="anchor-tag disable-select text-3xl tracking-wider">&lt;timeline&gt;</span>
          <VerticalTimeline>
            {timeline.map( (el) => <TimelineElement description={el}/>)}
          </VerticalTimeline>
          <span className="anchor-tag disable-select text-3xl tracking-wider">&lt;/timeline&gt;</span>
        </div>
        </>
    )
    
};

export default Timeline;
