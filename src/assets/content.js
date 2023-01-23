// about
import cv from './CV.pdf'

// timelline
import barclays from './timeline/barclays.svg'
import glasgow from './timeline/glasgow.png'

// projects
import sorting from './projects/sorting.png'
import rental from './projects/rentalcalculator.png'
import repos from './projects/repos.png'
import CSPR from './projects/CSPR.jpg'

// skills
import ts from './technologies/typescript.svg'
import react from './technologies/react.svg'
import django from "./technologies/django.svg"
import python from "./technologies/python.svg"
import java from "./technologies/java.svg"
import git from "./technologies/git.svg"
import linux from './technologies/linux.png'
import mysql from "./technologies/mysql.svg"
import c from './technologies/c.svg'
import angular from './technologies/angular.svg'

const about = {
    description: "Hi, I'm Philip! 😎 I'm currently part of the Grill Team at Glasgow University working on a multi-modal conversational AI as part of the Alexa Prize TaskBot Challenge 2! I am also a final year Computing Science student at the University of Glasgow. 💻 I also love to code! ❤️ And I am keen on testing the limits of what can be achieved with a bit of imagination. 💭",
    button : "View my Resume",
    cv: cv,
}

const timeline = [
    {
        startDate : "September 2021",
        endDate : "Present",
        company : "University of Glasgow",
        position : "UG Demonstrator",
        color : "#3b82f6",
        logo: glasgow,
        description : "A laboratory tutor for 1st and 2nd year Computing Science courses:",
        bulletPoints : [
            "Computing Science 1P (CS1P)",
            "Web Application Development (WAD2)",
        ]
    },
    {
        startDate : "June 2022",
        endDate : "August 2022",
        company : "Barclays",
        position : "Developer Analyst",
        color : "#00aeef",
        logo: barclays,
        description : "",
        bulletPoints : [
            "Created and customized wealth tracking components using Angular",
            "Built automation acceptance tests using Serenity BDD and Screenplay Pattern for the Angular components. Used WireMock for generating a Mock API and Selenium for browser automation",
        ]
    },
    {
        startDate : "September 2021",
        endDate : "August 2022",
        company : "Glasgow University Software Services",
        position : "Software Engineer",
        color : "#6366f1",
        logo: glasgow,
        description : "",
        bulletPoints : [ 
            "Developed a Django/React web application which allows the university to track the mapping of grades earned by students abroad",
            "Performed a UX Testing Evaluation on a university web application called MyPath. Conducted interviews, focus groups and surveys which were then analysed via inductive coding",
        ]
    },
    
]



const projects = [
        {
            title : "CSPR Tracker App",
            description: "This mobile application developed with React Native allows to track the activity of nodes deployed on mainnet of a Casper Network.",
            github: "https://github.com/PhilipZubel/CSPR-tracker",
            picture: CSPR,
        },
        {
            title : "Algorithms Animator",
            description: "This React app demonstrates a visualization of various sorting and graphing algorithms.",
            github: "https://github.com/PhilipZubel/algorithm-animator",
            view: "https://philipzubel.github.io/algorithm-animator/",
            picture: sorting,
        },
        {
            title : "Github Repos",
            description: "This Django web app visualizes statistics regarding a user's github repository. The app integrates with GitHub's API.",
            github: "https://github.com/PhilipZubel/github-repos-app",
            picture: repos,
        },
        {
            title : "Rental Income Calculator",
            description: "This Django web app enables a user to keep track of their revenues and expeses when it comes to renting rental units.",
            github: "https://github.com/PhilipZubel/SortingVisualiser",
            picture: rental,
        },

    ];


const skills = [  
    {
        name: "React",
        picture: react,
    },
    {
        name: "Django",
        picture: django,
    },
    {
        name: "Angular",
        picture: angular,
    },
    {
        name: "TypeScript",
        picture: ts,
    },
    {
        name: "Python",
        picture: python,
    },
    {
        name: "Java",
        picture: java,
    },
    {
        name: "Git",
        picture: git,
    },
    {
        name: "Linux",
        picture: linux,
    },
    {
        name: "C/C++",
        picture: c,
    },
    {
        name: "MySQL",
        picture: mysql,
    },
]


export {about, timeline, projects, skills};
