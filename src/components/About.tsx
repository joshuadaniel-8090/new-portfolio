// File: src/sections/About.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // instead of "easeOut"
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easeOut
    },
  },
};

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-12 max-w-6xl mx-auto text-white overflow-hidden"
    >
      <motion.div
        className="relative group p-10 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* SVG ripple effect filter */}
        <svg className="absolute w-0 h-0">
          <filter id="ripple">
            <feTurbulence
              id="turb"
              type="fractalNoise"
              baseFrequency="0"
              numOctaves="1"
              result="ripple"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="ripple"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </svg>

        <style>{`
          .group:hover #turb {
            animation: ripple 1.2s forwards;
          }
          @keyframes ripple {
            0% { baseFrequency: 0 0; }
            50% { baseFrequency: 0.03 0.015; }
            100% { baseFrequency: 0 0; }
          }
        `}</style>

        {/* Glow Borders */}
        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-3xl animate-pulse blur-lg opacity-20 group-hover:opacity-40 transition duration-700"></div>

        {/* Heading */}
        <motion.h3
          className="text-3xl font-bold mb-10 text-center z-10 relative"
          variants={itemVariants}
        >
          About Me
        </motion.h3>

        <div className="relative z-10 flex flex-col sm:flex-row gap-10 items-center sm:items-start">
          {/* About & highlights */}
          <div className="space-y-6">
            <motion.p
              className="text-xl leading-relaxed text-gray-200"
              variants={itemVariants}
            >
              I’m{" "}
              <span className="text-white font-semibold">Joshua Daniel</span> —
              an indie developer who thrives on crafting beautiful, functional
              tools. I love translating ideas into interactive web experiences
              that are both intuitive and inspiring. Whether it's designing
              pixel-perfect UIs or writing scalable backend logic, I enjoy the
              full journey from concept to creation.
            </motion.p>

            <motion.ul
              className="text-gray-300 space-y-3 list-disc list-inside text-lg"
              variants={containerVariants}
            >
              {[
                "Building tools that serve real-world needs with clarity and simplicity",
                "Fusing sleek design with meaningful user interaction",
                "Iterating, experimenting, and learning with every build",
                "Dreaming big — one handcrafted microproduct at a time",
              ].map((text, idx) => (
                <motion.li key={idx} variants={itemVariants}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
