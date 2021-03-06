import React from 'react';

import logo from './assets/logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Timeline from './components/timeline/Timeline';


const App = () => {
  return (
    <>
      <Parallax pages={7}>
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
          offset={2.1} 
          speed={1.2}
          factor={1.4}
          >
          <Timeline />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={3.5} 
          speed={1.2}
          factor={1.3}
          >
          <Projects/>
        </ParallaxLayer>
        <ParallaxLayer 
          offset={4.8} 
          speed={1.2}
          >
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer 
          offset={5.8} 
          speed={1.2}
          > 
          <ToastContainer/>
          <Contact/>
          
        </ParallaxLayer>
        
      </Parallax>
      
    </>
  );
}

export default App;
