// File: src/components/Header.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Stack", href: "#" },
  { label: "Resume", href: "#resume" },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center transition-all py-4 duration-300 ease-in-out">
      <motion.div
        animate={{
          paddingLeft: scrolled ? "1.5rem" : "2.5rem",
          paddingRight: scrolled ? "1.5rem" : "2.5rem",
          paddingTop: scrolled ? "0.5rem" : "0.75rem",
          paddingBottom: scrolled ? "0.5rem" : "0.75rem",
          gap: scrolled ? "3rem" : "7rem",
          width: scrolled ? "35%" : "50%",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center"
        style={{
          display: "flex",
          gap: scrolled ? "1.25rem" : "6rem",
        }}
      >
        {links.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            whileHover={{
              y: -3,
              boxShadow: "0px 0px 10px rgba(255,255,255,0.2)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="relative group px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white transition-all overflow-hidden"
          >
            {/* Shimmer Sparkle Effect */}
            <span className="absolute inset-0 z-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
            <span className="relative z-10">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </header>
  );
};

export default Header;
