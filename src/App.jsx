

import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Skills from './pages/Skills'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Project />
    <Contact />
    <Footer/>
   </>
  )
}

export default App
