import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen w-full py-16 md:py-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-between min-h-screen gap-10 px-6 md:px-20"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-softindigo text-shadow-lg/20">
            Full Stack
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-900 text-transparent bg-clip-text">
            Developer
          </h2>
          <p className="text-tealgreen text-lg md:text-xl max-w-md mx-auto md:mx-0">
            I build full stack apps using Java, Spring Boot, React & Tailwind.
          </p>

          {/* Tech Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["Java", "JavaScript", "React", "MySQL"].map((tech) => (
              <button
                key={tech}
                className="px-4 py-1 rounded-md bg-gray-500 text-skybluee shadow-lg text-sm md:text-base"
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-oceanblue bg-[#030004] hover:scale-110 duration-300 shadow-lg shadow-cyan-500/50"
            >
              Projects <FaArrowUpRightFromSquare />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-md text-oceanblue bg-[#030004] hover:scale-110 duration-300 shadow-lg shadow-cyan-500/50"
            >
              Contact <GoMail />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-8 text-3xl text-white pt-6">
            <a
              href="https://github.com/CalvinKoushik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-400 transition duration-300" />
            </a>
            <a
              href="https://instagram.com/calvin_koushik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-pink-500 transition duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/calvinkoushik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src="home.svg"
            alt="Tech Illustration"
            className="w-[80%] max-w-xs md:max-w-md object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
