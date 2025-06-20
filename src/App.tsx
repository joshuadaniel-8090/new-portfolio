import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import "./index.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CosmicBackground from "./components/CosmicBackground";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <div className="absolute inset-0 -z-10">
        <CosmicBackground />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
