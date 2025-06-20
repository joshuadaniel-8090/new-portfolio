// File: src/components/CosmicBackground.tsx
import React from "react";

const CosmicBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Glowy cosmic blobs */}
      {[...Array(5)].map((_, i) => {
        const size = 200 + Math.random() * 200;
        return (
          <div
            key={i}
            className="absolute rounded-full blur-[120px] opacity-30 animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: [
                "#a855f7", // purple
                "#ec4899", // pink
                "#3b82f6", // blue
                "#9333ea", // deep purple
              ][i % 4],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        );
      })}

      {/* Floating sparkles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default CosmicBackground;
