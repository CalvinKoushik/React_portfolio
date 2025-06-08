import React from 'react';
import NavBar from '../Components/NavBar';
import Home from '../Components/Home';
import About from '../Components/About';
import Portfolio from '../Components/Portfolio';
import Contact from '../Components/Contact';

const Main = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      Background Video
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Bg-ff.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="relative z-10">
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
