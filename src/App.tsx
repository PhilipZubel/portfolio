import React from 'react';

import logo from './assets/logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';


const App = () => {
  return (
    <>
      <Parallax pages={5}>
        <ParallaxLayer 
            speed={0.8}
            style ={{
              backgroundImage: `url(${logo})`,
              backgroundSize: '80vh',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundColor: "#010926",
            }}
          >
            <Home/>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={1}
          style ={{
            backgroundColor: "black",
          }}
          >
          <About />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2} 
          speed={1}
          style ={{
            backgroundColor: "#010926",
          }}
          >
          <Experience />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={3} 
          speed={1}
          style ={{
            backgroundColor: "black",
          }}
          >
          <Projects/>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={4} 
          speed={1}
          style ={{
            backgroundColor: "#010926",
          }}
          >
          <Contact/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
