import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen text-white flex items-center justify-center relative overflow-hidden"
    >
      {/* Background layer (optional for design overlays) */}
      <div className="absolute top-0 left-0 w-full h-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full px-6 z-10"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-600 to-blue-900 text-center mb-4"
        >
          Contact Me
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-400 text-center mb-10"
        >
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          action="https://formspree.io/f/xpwrzpop"
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="w-full p-4 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full flex justify-center items-center gap-2 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-cyan-600 transition-all duration-300"
          >
            Message <RiSendPlaneFill />
          </motion.button>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center gap-6 mt-10"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-cyan-500 transition"
          >
            <FaLinkedinIn />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
