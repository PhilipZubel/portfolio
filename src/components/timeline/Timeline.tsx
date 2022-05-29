import React from "react";
import { VerticalTimeline }  from 'react-vertical-timeline-component';

import './timeline.css'
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from "./TimelineElement";

import { timeline } from "../../assets/content";


const Timeline = () => {
    return (
        <>
        <div className="section" id="timeline">
          <span className="anchor-tag disable-select text-3xl text-violet-500 tracking-wider">&lt;timeline&gt;</span>
          <div className="py-10">
            <div className="place-content-center">
              <h3 className="text-3xl tracking-wider text-center my-6">Where I worked...</h3>
            </div>
            <VerticalTimeline>
              {timeline.map( (el, idx) => <TimelineElement description={el} key={idx}/>)}
            </VerticalTimeline>
          </div>
          <span className="anchor-tag disable-select text-3xl text-violet-500 tracking-wider mt-6">&lt;/timeline&gt;</span>
        </div>
        </>
    )
    
};

export default Timeline;
