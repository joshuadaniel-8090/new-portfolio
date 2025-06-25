import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    title: "Ideation",
    desc: "Every project starts with a clear purpose. I brainstorm, validate, and define the exact problem I'm solving.",
  },
  {
    title: "Design",
    desc: "I sketch the user experience, wireframe layouts, and prototype interface flows that are intuitive and beautiful.",
  },
  {
    title: "Development",
    desc: "From setting up backend logic to fine-tuning frontend animations — I turn designs into working, scalable products.",
  },
  {
    title: "Polish",
    desc: "Attention to detail is non-negotiable. I optimize performance, ensure accessibility, and clean up every pixel.",
  },
  {
    title: "Launch & Feedback",
    desc: "Deploy, monitor, gather feedback, and improve iteratively. I believe in shipping fast and improving faster.",
  },
];

const goals = [
  "Contribute to open source projects and collaborate with devs worldwide.",
  "Launch my productivity SaaS app with real users.",
  "Master DSA and system design for strong problem-solving skills.",
  "Document everything — code, journey, and lessons — through a dev blog.",
  "Refine my design-to-code pipeline for world-class UI polish.",
];

const WorkflowAndGoals: React.FC = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto space-y-20" id="workflow">
      {/* ===== WORKFLOW ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass p-10 rounded-3xl shadow-xl backdrop-blur border border-white/20 bg-white/10"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          How I Work
        </h3>
        <div className="relative border-l-2 border-white/20 ml-4 pl-6 space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <span className="absolute left-[-1.3rem] top-1 w-3 h-3 bg-emerald-400 rounded-full shadow-md" />
              <h4 className="text-white text-xl font-bold mb-1">
                {step.title}
              </h4>
              <p className="text-gray-300 text-lg">{step.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ===== GOALS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="glass p-10 rounded-3xl shadow-xl backdrop-blur border border-white/20 bg-white/10"
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          2025 Focus & Goals
        </h3>
        <ul className="space-y-4 max-w-2xl mx-auto">
          {goals.map((goal, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-200">
              <FaCheckCircle className="text-emerald-400 mt-1" />
              <span className="text-lg">{goal}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default WorkflowAndGoals;
