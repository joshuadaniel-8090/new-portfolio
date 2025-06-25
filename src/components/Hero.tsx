import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center text-center px-4 md:px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 z-10 w-full max-w-7xl">
        {/* Left Box - Image + Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col items-center text-left shadow-lg w-full md:w-[600px] md:h-[800px]"
        >
          <div className="w-full h-[300px] sm:h-[400px] md:h-[480px] bg-white/10 rounded-xl border-4 border-white/10 shadow-lg mb-6 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="Joshua Daniel"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 text-left w-full">
            Joshua Daniel
          </h2>

          <h3 className="text-base sm:text-lg md:text-xl text-indigo-300 mb-6 text-left w-full">
            Creator of{" "}
            <a
              href="https://microwrk.online"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 decoration-indigo-400 hover:text-indigo-200 transition-all"
            >
              Microwrk
            </a>
          </h3>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto px-6 py-3 bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all backdrop-blur-md text-white"
            onClick={() => {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Right Box - Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 md:p-8 text-left shadow-lg w-full md:w-[600px] md:h-[800px] text-white flex items-center"
        >
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            I'm a passionate indie developer and digital builder focused on
            crafting micro-products that solve real-world problems. With a deep
            interest in product thinking and a love for elegant code, I combine
            functionality and beauty in everything I build. Whether it's
            shipping solo SaaS tools or refining full-stack applications, I
            thrive in transforming raw ideas into live, interactive tools on the
            web. Currently building a product-driven dev journey through{" "}
            <a
              href="https://microwrk.online"
              target="_blank"
              className="text-indigo-300 underline underline-offset-2 hover:text-indigo-100"
              rel="noreferrer"
            >
              microwrk.online
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
