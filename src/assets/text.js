// const about: { [key: string]: string } = {
//     "description" : 
//     "button" : "View my Resume",
// }
import cv from './CV.pdf'


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
        description : "fjkdsafhadfkj dsahj jksdf  jdasjk fhaj dsafh kdaf",
        color : "#00aeef",
    },
    {
        startDate : "September 2021",
        endDate : "Present",
        company : "Glasgow University Software Services",
        position : "Software Engineer",
        description : "fjkdsafhadfkj dsahj jksdf  jdasjk fhaj dsafh kdaf",
        color : "#00aeef",
    },
    {
        startDate : "September 2021",
        endDate : "Present",
        company : "University of Glasgow",
        position : "UG Demonstrator",
        description : "fjkdsafhadfkj dsahj jksdf  jdasjk fhaj dsafh kdaf",
        color : "#00aeef",
    },
]

const experience = {};

const projects = {};


export {about, timeline, experience, projects};