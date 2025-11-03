import React from 'react'
import './index.css';

// import Hero from './components/Hero';
// import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Feedback from './components/Feedback';
// import Works from './components/Works';
// import Tech from './components/Tech';
// import kite from "../src/Assets/pa.png"
import kite from "../src/assets/pa.png"
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';

const bgStyle={
  backgroundImage :`url(${kite})`,
  backgroundPosition: "center",
  backgroundSize:"cover",
  backgroundRepeat: "no-repeat",
  width:"100%",
 
  
 
  

};

function App() {
  return (
    <>
    <main className='overflow-hidden '>
    <BrowserRouter>
    <div style={bgStyle} className=' relative z-0  text-white container  '>
    <div>
      <Navbar/>
      </div>
      <div>
        <Hero/>
        <AboutMe/>
        <Technologies/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
      </div>
    </BrowserRouter>

   </main>

    </>
    
  );
}

export default App;
