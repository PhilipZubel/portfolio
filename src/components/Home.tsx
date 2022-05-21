import React from "react";
import TypeAnimation from 'react-type-animation';
// import {ReactComponent as ReactLogo} from './assets/logo.svg';
import './home.css'


const Home = () => {
    return (
        <div id="home">
        <div className="title">
            <h1>Philip Zubel</h1>
            <TypeAnimation
                className="type"
                cursor={false}
                sequence={[
                    "Software Engineer", 5000, 
                    "Software Developer", 5000,
                    "Software Enthusiast ❤️", 8000,
                ]}
                repeat={Infinity}
                wrapper="h2"
            />
        </div>
    </div>
    )
    
};

export default Home;
