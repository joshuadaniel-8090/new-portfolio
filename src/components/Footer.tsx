// File: src/components/Footer.tsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub className="text-2xl text-white" />,
    link: "https://github.com/joshuadaniel-8090/",
  },
  {
    icon: <FaLinkedin className="text-2xl text-white" />,
    link: "https://linkedin.com/in/joshuadaniel8090",
  },
  {
    icon: <FaInstagram className="text-2xl text-white" />,
    link: "https://instagram.com/joshua___daniel",
  },
];

const Footer = () => {
  return (
    <footer className="mt-8 px-6 lg:py-8 text-white text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass rounded-3xl px-6 py-10 border border-white/20 bg-white/5 backdrop-blur-lg shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
      >
        <h4 className="text-2xl font-bold mb-2 tracking-wide text-white/90">
          Let’s Connect and Collaborate
        </h4>
        <p className="text-gray-400 mb-6 text-sm">
          I’m always open to projects, ideas, and building something impactful
          together.
        </p>

        <div className="flex justify-center gap-5 mb-6">
          {socials.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.12, rotate: 2 }}
              whileTap={{ scale: 0.94 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.2, // ⬅️ quicker, snappier
              }}
              className="p-3 bg-white/10 border border-white/20 rounded-full shadow-md hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        <p className="text-sm text-gray-400">
          Made by Joshua Daniel — stay creative
        </p>
        <p className="text-sm mt-4 text-gray-400">
          Last Updated:{" "}
          <span className="text-gray-300 font-mono">18/09/2025 </span>
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
