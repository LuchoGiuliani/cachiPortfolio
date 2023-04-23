import React ,{useEffect, useState} from 'react'



import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Fotos from './components/Fotos'

function App() {

  

  return (
    <main className="App bg-[#090409] h-[100vw] w-full ">
      <Navbar />
      <Hero />
      <Projects className="" />
      <Fotos /> 
      <Footer />
    </main>
  )
}

export default App
