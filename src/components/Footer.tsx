import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex gap-3 ml-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/10 border border-white/20 rounded-full hover:scale-110 transition-all"
      >
        <FaGithub className="text-xl" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/10 border border-white/20 rounded-full hover:scale-110 transition-all"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noreferrer"
        className="p-2 bg-white/10 border border-white/20 rounded-full hover:scale-110 transition-all"
      >
        <FaInstagram className="text-xl" />
      </a>
    </div>
  );
};

export default Footer;
