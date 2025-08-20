// File: src/sections/Projects.tsx
import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Microwrk Tools (Beta)",
    description: "SaaS landing page hosting multiple micro productivity tools.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://microwrk.online",
  },
  {
    title: "Unplaced University (Beta)",
    description:
      "A blog website for Tier 3 college students to help them crack the best product based companies.",
    tech: ["Next.js", "Tailwind", "Resend", "Supabase"],
    link: "https://unplaced-university.vercel.app/",
  },
  {
    title: "Subscription System (Ongoing)",
    description:
      "A full-featured donation tracker with QR, export, analytics, and WhatsApp reminders.",
    tech: ["React", "Node.js", "Firebase", "whatsapp-web.js"],
    link: "https://github.com/yourusername/church-subscription",
  },
  {
    title: "Project Nehemiah",
    description:
      "A semi-automatic crowd funding website where people can create a campaign, share it, and get donations.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "https://project-nehemiah.vercel.app",
  },
  // {
  //   title: "Productivity App (Coming Soon)",
  //   description:
  //     "An all-in-one daily planner for focused creators — with tasks, goals, heatmaps, reviews, and themeable UI.",
  //   tech: ["Next.js", "Tailwind", "Framer Motion", "Supabase"],
  //   link: "https://your-productivity-app-link.com",
  // },
  {
    title: "LinkAd (Beta)",
    description: "A URL shortener with analytics and password protection.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://url-shortner-five-psi-71.vercel.app/",
  },
  {
    title: "BlockUp Website",
    description:
      "Marketing site for BlockUp — a startup exploring API security solutions.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://block-up.tech",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 lg:pt-20 pb-12 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center text-white">
        Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-6 rounded-xl hover:scale-105 transition-transform shadow-md block"
          >
            {/* Project Title */}
            <h4 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h4>

            {/* Project Description */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-white/10 border border-white/20 px-2 py-0.5 rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
