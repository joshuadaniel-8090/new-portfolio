import React from "react";

const ElegantBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0f0f1a] via-[#12121f] to-[#1a1a2e] overflow-hidden pointer-events-none">
      {/* Soft radial glow */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          top: "-200px",
          left: "-200px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.2), transparent 70%)",
          filter: "blur(120px)",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          bottom: "-150px",
          right: "-150px",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Grainy overlay for elegance */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10 mix-blend-soft-light" />
    </div>
  );
};

export default ElegantBackground;
