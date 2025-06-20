// File: src/sections/Hero.tsx
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import CosmicBackground from "../components/CosmicBackground";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Profile Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/10 border-4 border-white/10 shadow-lg mb-6 flex items-center justify-center text-white text-sm"
      >
        Your Image
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-bold mb-2"
      >
        Joshua Daniel
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-lg sm:text-xl text-indigo-300 mb-4"
      >
        <Typewriter
          words={["Full Stack Developer", "Creative Coder", "Indie Builder"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-md sm:text-lg text-gray-300 mb-6 max-w-2xl"
      >
        Building sleek digital experiences with creativity, code, and glassy
        vibes. I combine design intuition with technical excellence to bring
        ideas to life on the web.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all"
      >
        View Projects
      </motion.button>
    </section>
  );
};

export default Hero;
