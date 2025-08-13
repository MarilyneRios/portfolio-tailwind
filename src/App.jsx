import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero className="min-h-screen"/>
        <About className="min-h-screen"/>
        <Skills className="min-h-screen"/>
        <Project className="min-h-screen"/>
        <Contact className="min-h-screen"/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
