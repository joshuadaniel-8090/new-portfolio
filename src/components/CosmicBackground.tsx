import React from "react";

const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Custom CSS */}
      {/* <style>{`
        @keyframes glowFade {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-glow-fade {
          animation-name: glowFade;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 0.2 }
          50% { opacity: 1 }
        }

        .animate-blink {
          animation: blink 2s infinite ease-in-out;
        }
      `}</style> */}

      {/* Glow Blobs - More of them, better spread */}
      {[...Array(14)].map((_, i) => {
        const size = 160 + Math.random() * 240;
        const blur = 100 + Math.random() * 150;
        const duration = 6 + Math.random() * 6; // 6s to 12s
        const delay = Math.random() * 6;
        const opacity = 0.5 + Math.random() * 0.3;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const colors = ["#a855f7", "#ec4899", "#3b82f6", "#9333ea", "#facc15", "#14b8a6"];
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full animate-glow-fade"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              top: `${top}%`,
              left: `${left}%`,
              filter: `blur(${blur}px)`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity,
            }}
          />
        );
      })}

      {/* Star Sparkles */}
      {/* {[...Array(30)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute w-3 h-3 bg-white opacity-50 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 16.1L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z'/%3E%3C/svg%3E\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L13.09 8.26L19 9.27L14.5 13.14L15.82 19.02L12 16.1L8.18 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z'/%3E%3C/svg%3E\")",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        />
      ))} */}

      {/* Blinking Tiny Stars */}
      {/* {[...Array(25)].map((_, i) => (
        <div
          key={`blink-star-${i}`}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-blink"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))} */}
    </div>
  );
};

export default CosmicBackground;
