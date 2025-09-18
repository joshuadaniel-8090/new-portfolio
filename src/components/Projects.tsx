// File: src/sections/Projects.tsx

import React from "react";
import { motion, easeOut } from "framer-motion";
import type { Variants } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "In Progress" | "Completed";
  link: string;
};

const projects: Project[] = [
  {
    title: "Microwrk Tools",
    description: "SaaS landing page hosting multiple micro productivity tools.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://microwrk.online",
    status: "Completed",
  },
  {
    title: "Unplaced University",
    description:
      "A blog website for Tier 3 college students to help them crack the best product based companies.",
    tech: ["Next.js", "Tailwind", "Resend", "Supabase"],
    link: "https://unplaced-university.vercel.app/",
    status: "In Progress",
  },
  {
    title: "Subscription System",
    description:
      "A full-featured donation tracker with QR, export, analytics, and WhatsApp reminders.",
    tech: ["React", "Node.js", "Firebase", "whatsapp-web.js"],
    link: "",
    status: "In Progress",
  },
  {
    title: "Project Nehemiah",
    description:
      "A semi-automatic crowd funding website where people can create a campaign, share it, and get donations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://project-nehemiah.vercel.app",
    status: "Completed",
  },
  {
    title: "LinkAd",
    description: "A URL shortener with analytics and password protection.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://url-shortner-five-psi-71.vercel.app/",
    status: "In Progress",
  },
  {
    title: "BlockUp Website",
    description:
      "Marketing site for BlockUp — a startup exploring API security solutions.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://block-up.tech",
    status: "Completed",
  },
  {
    title: "Lyric Cast",
    description:
      "A web app that transforms song lyrics into dynamic, animated slide presentations.",
    tech: [
      "Next.js",
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Markdown Rendering",
    ],
    link: "",
    status: "In Progress",
  },
];

// Animation variants

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut }, // ✅ FIXED
  },
};

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="px-6 lg:pt-20 pb-12 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h3
        className="text-3xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projects
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        {projects.map((project, idx) => {
          const card = (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 255, 200, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="glass p-6 rounded-xl transition-transform shadow-md min-h-[230px] flex flex-col justify-between"
            >
              {/* Project Title */}
              <h4 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h4>

              {/* Project Description */}
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-white/10 border border-white/20 px-2 py-0.5 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );

          return project.status === "Completed" ? (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {card}
            </a>
          ) : (
            <div key={idx}>{card}</div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
