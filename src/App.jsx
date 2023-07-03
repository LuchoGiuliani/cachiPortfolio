import React, { useEffect, useState } from "react";

import "./index.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Fotos from "./components/Fotos";
import Horizontal from "./components/Horizontal";
import GridVideo from "./components/GridVideo";
import Loader from "./components/Loader";
import AboutMe from "./components/AboutMe";

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
    <main className="App  ">
      <Navbar className="" />
      <Hero />
      <GridVideo className="" />
      <Horizontal />
      <AboutMe />
      <Projects id="projects" className="" />
      <Footer className="" />
      {/* <Fotos /> */}
    </main>
  );
}

export default App;
