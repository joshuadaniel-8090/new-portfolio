// File: src/sections/Contact.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        "service_nl1gs37", // e.g., "service_123abc"
        "template_5dvlg3j", // e.g., "template_xyz789"
        formRef.current,
        "xhQoRp-3f6PANC4Bn" // e.g., "fHEgh-LFWHRt2d123"
      )
      .then(
        () => {
          setStatus("sent");
          formRef.current?.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="glass p-8 rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Me</h3>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              className="peer w-full bg-transparent border-b border-white/20 px-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-white/40"
              placeholder="Name"
            />
            <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="reply_to"
              required
              className="peer w-full bg-transparent border-b border-white/20 px-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-white/40"
              placeholder="Email"
            />
            <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              rows={4}
              required
              className="peer w-full bg-transparent border-b border-white/20 px-2 pt-6 pb-2 text-white placeholder-transparent focus:outline-none focus:border-white/40"
              placeholder="Message"
            />
            <label className="absolute left-2 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
              Message
            </label>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full mt-4 bg-white/10 border border-white/20 px-4 py-3 rounded-full text-white hover:bg-white/20 transition-all"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✅"
              : status === "error"
              ? "Error ❌ Try Again"
              : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
