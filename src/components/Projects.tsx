// File: src/sections/Projects.tsx
import React from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Subscription System (Ongoing)",
    description:
      "A full-featured donation tracker with QR, export, analytics, and WhatsApp reminders.",
    tech: ["React", "Node.js", "Firebase", "whatsapp-web.js"],
    image: "/projects/church.png",
    link: "https://github.com/yourusername/church-subscription",
  },
  {
    title: "Microwrk Tools",
    description: "SaaS landing page hosting multiple micro productivity tools.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    image: "/projects/microwrk.png",
    link: "https://microwrk.online",
  },
  {
    title: "The AI Stack",
    description:
      "Your personalized AI starter pack. Curated tools, workflows, and frameworks.",
    tech: ["Next.js", "Tailwind", "Resend", "Supabase"],
    image: "/projects/aistack.png",
    link: "https://the-ai-stack.vercel.app/",
  },
  {
    title: "BlockUp Website",
    description:
      "Marketing site for BlockUp — a startup exploring API security solutions.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/blockup.png",
    link: "https://block-up.tech",
  },
  {
    title: "Productivity App (Coming Soon)",
    description:
      "An all-in-one daily planner for focused creators — with tasks, goals, heatmaps, reviews, and themeable UI.",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Supabase"],
    image: "/projects/productivity.png", // Add this image to your public folder
    link: "https://your-productivity-app-link.com", // Replace when ready
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="px-6 lg:pt-20 pb-12 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center text-white">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-xl hover:scale-105 transition-transform shadow-md block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h4 className="text-xl font-semibold text-white">
              {project.title}
            </h4>
            <p className="text-gray-400 text-md mt-1 line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
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
