// File: src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Stack", href: "stack" },
  { label: "Resume", href: "resume" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          }
        }

        .glow-on-hover:hover {
          animation: glowPulse 1.2s ease-in-out infinite;
        }

        @keyframes sparkleFloat {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20px) scale(0.2);
            opacity: 0;
          }
        }
      `}</style>

      <header className="sticky top-0 z-50 w-full flex justify-between items-center px-6 py-4 md:justify-center bg-transparent">
        {/* Logo (visible only on mobile) */}
        <h1 className="md:hidden text-white font-bold text-xl tracking-wide z-50">
          Joshua Daniel
        </h1>

        {/* Capsule Nav for Desktop */}
        <motion.div
          animate={{
            paddingLeft: scrolled ? "1.5rem" : "2.5rem",
            paddingRight: scrolled ? "1.5rem" : "2.5rem",
            paddingTop: scrolled ? "0.5rem" : "0.75rem",
            paddingBottom: scrolled ? "0.5rem" : "0.75rem",
            gap: scrolled ? "2rem" : "5rem",
            width: scrolled ? "35%" : "50%",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="hidden md:flex rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg items-center justify-center"
        >
          {links.map((link, idx) => (
            <motion.button
              key={idx}
              onClick={() => handleLinkClick(link.href)}
              transition={{ type: "spring", stiffness: 400, damping: 12 }}
              className="relative group px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white glow-on-hover transition-all"
            >
              {/* Sparkles on hover */}
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
              <span className="relative z-10">{link.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6"
          >
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => handleLinkClick(link.href)}
                className="text-white text-2xl font-semibold hover:text-indigo-300 transition-all"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
