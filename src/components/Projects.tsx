// File: src/sections/Projects.tsx
import React, { useState } from "react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Church Subscription System",
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
  // Add more projects here
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-12 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8">Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(project)}
            className="glass p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform shadow-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
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
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-6">
          <div className="glass max-w-lg w-full p-6 rounded-xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-2 right-2 text-white text-xl hover:text-red-400"
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h4 className="text-2xl font-bold mb-2">{selected.title}</h4>
            <p className="text-gray-300 mb-4">{selected.description}</p>
            <a
              href={selected.link}
              target="_blank"
              className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded hover:bg-white/20"
              rel="noreferrer"
            >
              View Project →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
