// File: src/sections/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative px-6 py-8 max-w-6xl mx-auto text-white overflow-hidden"
    >
      <div className="relative group p-10 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
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

        {/* Content inside glass box */}
        <h3 className="text-3xl font-bold mb-10 text-center z-10 relative">
          About Me
        </h3>

        <div className="relative z-10 flex flex-col sm:flex-row gap-10 items-center sm:items-start">
          {/* About & highlights */}
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-200">
              I’m{" "}
              <span className="text-white font-semibold">Joshua Daniel</span> —
              an indie developer who thrives on crafting beautiful, functional
              tools. I love translating ideas into interactive web experiences
              that are both intuitive and inspiring. Whether it's designing
              pixel-perfect UIs or writing scalable backend logic, I enjoy the
              full journey from concept to creation.
            </p>

            <ul className="text-gray-300 space-y-3 list-disc list-inside text-lg">
              <li>
                🎯 Building tools that serve real-world needs with clarity and
                simplicity
              </li>
              <li>✨ Fusing sleek design with meaningful user interaction</li>
              <li>
                🚀 Iterating, experimenting, and learning with every build
              </li>
              <li>🌌 Dreaming big — one handcrafted microproduct at a time</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
