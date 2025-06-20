// File: src/sections/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 py-12 max-w-4xl mx-auto">
      <h3 className="text-3xl font-bold mb-6">About Me</h3>
      <div className="glass p-6 rounded-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <img
            src="/your-photo.jpg" // Replace with your actual image path
            alt="Joshua Daniel"
            className="w-32 h-32 rounded-full border border-white/20 object-cover"
          />
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m Joshua Daniel — a passionate indie developer and aspiring MNC
            engineer. I love building elegant, functional web tools that blend
            stunning UI/UX with clean code. I'm currently mastering JavaScript,
            Java, and DSA while building side projects that solve real problems.
          </p>
        </div>

        {/* Timeline Placeholder */}
        <div className="pt-6 border-t border-white/10">
          <h4 className="text-xl font-semibold mb-2">My Journey</h4>
          <ul className="text-gray-400 space-y-2">
            <li>
              🚀 2025 – Preparing for top product MNCs (Zoho, Adobe, etc.)
            </li>
            <li>🧪 2024 – Started building SAAS microtools and portfolio</li>
            <li>🌱 2023 – Learned basics of React, Firebase, and Tailwind</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
