import React, { useEffect, useState } from 'react';

import "./index.css"

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Fotos from './components/Fotos';
import Links from './components/Links';



function App() {

 
 

  return (
    <main className="App bg-[#090409]  ">
      <Links />
      <Navbar className= "" />
      <Hero className="" />
      <Projects id="projects" className="" />
      {/* <Fotos /> */}
      <Footer />
     
    </main>
  );
}

export default App;
