import React from "react";
import TypeAnimation from 'react-type-animation';
// import smallLogo from './../assets/small_logo.svg';
import './home.css'
// import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';



const Home = () => {
    return (
        <>
        {/* <div 
            id="navbar"
            style={{
                padding: '1.2rem',
                // backgroundColor: "#00011E",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left max(40px, calc(40% - 280px)) top 50%',
                backgroundImage: `url(${smallLogo})`,
                minHeight: '20px',
            }}
            >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: '60%',
            }}>
                <a href="https://www.linkedin.com/in/philipzubel/" target="_blank"><FaLinkedin color="white" size={20} /></a> 
                <a href="https://github.com/PhilipZubel/" target="_blank"><FaGithubSquare color="white" size={20}/></a>
            </div>
        </div> */}
        <div id="home">
            <div className="title">
                <h1 className="text-3xl tracking-wider">Philip Zubel</h1>
                <TypeAnimation
                    className="type text-2xl tracking-widest"
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
        </>
    )
    
};

export default Home;
