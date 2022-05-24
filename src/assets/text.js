// const about: { [key: string]: string } = {
//     "description" : 
//     "button" : "View my Resume",
// }
import cv from './CV.pdf'
import barclays from './timeline/barclays.svg'
import glasgow from './timeline/glasgow.png'


const about = {
    description: "Hi, I'm Philip! 😎 I'm currently working as a software engineer at Glasgow University Software Services. I am also a final year Computing Science student at the University of Glasgow. 💻 I also love to code! ❤️ And I am keen on testing the limits of what can be achieved with a bit of imagination.",
    button : "View my Resume",
    cv: cv,
}

const timeline = [
    {
        startDate : "June 2022",
        endDate : "August 2022",
        company : "Barclays",
        position : "Developer Analyst",
        color : "#00aeef",
        logo: barclays,
        description : "Comming soon...",
        bulletPoints : []
    },
    {
        startDate : "September 2021",
        endDate : "Present",
        company : "Glasgow University Software Services",
        position : "Software Engineer",
        color : "#6366f1",
        logo: glasgow,
        description : "Worked on the following projects:",
        bulletPoints : [ 
            "Developed a Django/React web application which allows the university to track the mapping of grades earned by students abroad",
            "Performed a UX Testing Evaluation via inductive coding analysis on a university web application through interviews, focus groups and surveys",
        ]
    },
    {
        startDate : "September 2021",
        endDate : "Present",
        company : "University of Glasgow",
        position : "UG Demonstrator",
        color : "#3b82f6",
        logo: glasgow,
        description : "A laboratory demonstrator for 1st and 2nd year Computing Science courses:",
        bulletPoints : [
            "Computing Science 1P (CS1P)",
            "Web Application Development (WAD2)",
        ]
    },
]

const experience = {};

const projects = {};


export {about, timeline, experience, projects};