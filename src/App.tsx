import React from 'react';

import logo from './assets/logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Skills from './components/skills/skills';
import Timeline from './components/timeline/Timeline';


const App = () => {
  return (
    <>
      <Parallax pages={6}>
        <ParallaxLayer
            speed={0.4}
            style ={{
              backgroundImage: `url(${logo})`,
              backgroundSize: '80vh',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
        <ParallaxLayer>
            <Home/>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={1} 
          speed={1.2}
          >
          <About />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={2} 
          speed={1.2}
          factor={1.5}
          >
          <Timeline />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={3.5} 
          speed={1.2}
          >
          <Projects/>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={4} 
          speed={1.2}
          >
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={5} 
          >
          <Contact/>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
