import React from "react";

const CosmicBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      {/* Glow Blobs */}
      {[...Array(5)].map((_, i) => {
        const size = 200 + Math.random() * 200;
        return (
          <div
            key={`blob-${i}`}
            className="absolute rounded-full blur-[120px] opacity-30 animate-pulse"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: ["#a855f7", "#ec4899", "#3b82f6", "#9333ea"][
                i % 4
              ],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        );
      })}

      {/* Star Sparkles */}
      {[...Array(30)].map((_, i) => (
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
      ))}

      {/* Blinking Tiny Stars */}
      {[...Array(25)].map((_, i) => (
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
      ))}

      {/* Shooting Stars */}
      <>
        <style>{`
          @keyframes shooting-star {
            0% {
              transform: translate(0, 0) rotate(-45deg);
              opacity: 1;
            }
            70% {
              opacity: 0.8;
            }
            100% {
              transform: translate(-800px, 800px) rotate(-45deg);
              opacity: 0;
            }
          }

          .animate-shooting-star {
            animation: shooting-star 1.5s ease-out infinite;
          }

          @keyframes blink {
            0%, 100% { opacity: 0.2 }
            50% { opacity: 1 }
          }

          .animate-blink {
            animation: blink 2s infinite ease-in-out;
          }
        `}</style>

        {[...Array(6)].map((_, i) => {
          const top = Math.random() * 60; // Spread stars across top half
          const left = Math.random() * 100;
          const width = 100 + Math.random() * 40;
          const delay = i * 2 + Math.random(); // Each starts 2s apart roughly
          const duration = 1.4 + Math.random() * 0.6;

          return (
            <div
              key={`shooting-star-${i}`}
              className="absolute h-[2px] bg-white opacity-80 animate-shooting-star shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${width}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </>
    </div>
  );
};

export default CosmicBackground;
