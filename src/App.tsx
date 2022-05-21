import React from 'react';
import Home from './components/Home';
import logo from './assets/logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const App = () => {
  return (
    <>
      <Parallax pages={3}>
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
        <ParallaxLayer offset={1} speed={0.5}>
          <div>HELLO THERE</div>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
