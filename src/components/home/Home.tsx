import React from "react";
import TypeAnimation from 'react-type-animation';
import './home.css'



const Home = () => {
    return (
        <>
        <div id="home">
            <div className="title">
                <h1 className="text-xl sm:text-3xl tracking-wider">Philip Zubel</h1>
                <TypeAnimation
                    className="type text-lg sm:text-2xl tracking-widest"
                    cursor={false}
                    sequence={[
                        "Software Engineer", 2000, 
                        "Software Developer", 2000,
                        "Software Enthusiast ❤️", 4000,
                    ]}
                    repeat={Infinity}
                    wrapper="h2"
                />
            </div>
        </div>
        </>
    )
    
};

export default Home;
