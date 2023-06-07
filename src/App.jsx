import React, { useEffect, useState } from 'react';

import "./index.css"

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Fotos from './components/Fotos';
import Links from './components/Links';
import GridVideo from './components/GridVideo';
import Loader from './components/Loader';



function App() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // if (loading) {
  //   return <Loader onLoad={() => setLoading(false)} />;
  // }

 
 

  return (
    <main className="App bg-[#090409]  ">
      <Links  className=""/>
      <Navbar className= "" />
      <Hero className="" />
      <GridVideo className="" />
      <Projects id="projects" className="" />
      <Footer />
      {/* <Fotos /> */}
     
     
    </main>
  );
}

export default App;
