import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Resume from "./components/Resume";
import "./index.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CosmicBackground from "./components/CosmicBackground";
import WorkflowAndGoals from "./components/WorkflowAndGoals";
import { Analytics } from "@vercel/analytics/react";
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white font-sans">
      <Analytics />
      {/* Fixed cosmic background */}
      <div className="fixed inset-0 -z-10">
        <CosmicBackground />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <WorkflowAndGoals />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
