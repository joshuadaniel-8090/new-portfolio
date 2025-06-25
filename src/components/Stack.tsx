import React from "react";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  // SiMaterialui,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFirebase,
  SiSupabase,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiGithub,
  SiPostman,
  SiOpenai,
  SiMysql,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { TbBrandVercel } from "react-icons/tb";

type StackItem = {
  name: string;
  icon: React.ReactElement;
};

const stack: StackItem[] = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  // { name: "Material UI", icon: <SiMaterialui className="text-indigo-400" /> },
  { name: "Sass", icon: <SiSass className="text-pink-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "Django", icon: <SiDjango className="text-green-300" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-sky-300" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  // { name: "Vercel", icon: <TbBrandVercel className="text-white" /> },
  // { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  // { name: "GitHub", icon: <SiGithub className="text-white" /> },
  // { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  // { name: "OpenAI API", icon: <SiOpenai className="text-white" /> },
  // {
  //   name: "whatsapp-web.js",
  //   icon: <PiWhatsappLogoFill className="text-green-400" />,
  // },
];

const Stack: React.FC = () => {
  return (
    <section id="stack" className="px-6 py-12 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-center text-white">
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {stack.map((item, idx) => (
          <Tooltip.Provider key={idx} delayDuration={100}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  className="glass w-28 h-28 flex flex-col items-center justify-center rounded-xl border border-white/20 cursor-pointer shadow-md"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                </motion.div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  className="bg-white/10 backdrop-blur px-3 py-1 text-sm text-white rounded-md border border-white/20 shadow"
                >
                  {item.name}
                  <Tooltip.Arrow className="fill-white/20" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>
    </section>
  );
};

export default Stack;
