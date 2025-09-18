import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex justify-center items-center text-center px-4 md:px-6 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 w-full max-w-7xl">
        {/* Left Box - Identity Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col items-center text-left shadow-lg w-full md:w-[600px] md:h-[820px] overflow-hidden"
        >
          {/* Profile Image */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[460px] bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-xl border-4 border-white/10 shadow-lg mb-6 overflow-hidden relative">
            <img
              src="/profile 2.jpg"
              alt="Joshua Daniel"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 w-full text-left">
            Joshua Daniel
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-300 mb-4 text-left w-full">
            Full Stack Developer • SaaS Builder • Web Developer for Businesses
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6 w-full">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/20">
              Web Developer
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/20">
              SaaS Projects
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-300 border border-green-400/20">
              Open Source
            </span>
          </div>

          {/* Role */}
          <h3 className="text-base sm:text-lg md:text-xl text-indigo-300 mb-8 text-left w-full">
            Managing{" "}
            <a
              href="https://microwrk.online"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-indigo-400 hover:text-indigo-200 transition-all"
            >
              Microwrk
            </a>
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="text-gray-300 text-sm sm:text-base md:text-lg italic tracking-wide mt-2"
          >
            Building free websites for all kinds of businesses —{" "}
            <span className="text-indigo-300 font-medium">contact me</span> to
            get yours.
          </motion.p>
          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <motion.button
              onClick={() => {
                const section = document.getElementById("projects");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="relative group px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white glow-on-hover transition-all"
            >
              <span
                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 pointer-events-none hidden group-hover:block"
                style={{
                  top: "30%",
                  left: "20%",
                  animation: "sparkleFloat 0.5s ease-out forwards",
                  animationDelay: "0.1s",
                }}
              />
              <span
                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 pointer-events-none hidden group-hover:block"
                style={{
                  top: "60%",
                  left: "70%",
                  animation: "sparkleFloat 0.5s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              />
              <span className="relative z-10">View Projects</span>
            </motion.button>

            <motion.button
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="relative group px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white glow-on-hover transition-all"
            >
              <span
                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 pointer-events-none hidden group-hover:block"
                style={{
                  top: "30%",
                  left: "20%",
                  animation: "sparkleFloat 0.5s ease-out forwards",
                  animationDelay: "0.1s",
                }}
              />
              <span
                className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-80 pointer-events-none hidden group-hover:block"
                style={{
                  top: "60%",
                  left: "70%",
                  animation: "sparkleFloat 0.5s ease-out forwards",
                  animationDelay: "0.2s",
                }}
              />
              <span className="relative z-10">Contact Me</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
