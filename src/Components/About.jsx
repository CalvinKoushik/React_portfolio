import React from "react";
import { motion } from "framer-motion";
import { CgFileDocument } from "react-icons/cg";
import { VscCode } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineArrowOutward } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="min-h-screen w-full px-4 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-blue-900 text-transparent bg-clip-text text-center mb-6"
        >
          About Me
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-center max-w-4xl mx-auto text-tealgreen leading-relaxed"
        >
          Hello, I'm{" "}
          <span className="text-softindigo font-semibold">Calvin Koushik</span>{" "}
          — an MCA graduate from the 2024 batch and a passionate Full Stack
          Developer. As a fresher, I've completed a full stack development
          course and am now actively seeking opportunities to kickstart my
          career in the tech industry. I'm always eager to learn, grow, and
          contribute wherever needed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 py-10"
        >
          <a
            href="/Calvin_Resume.pdf"
            download
            className="text-lg flex items-center gap-2 py-2 px-4 rounded-md text-oceanblue bg-[#030004] shadow-lg shadow-cyan-500/50 hover:scale-95 duration-300"
          >
            <CgFileDocument /> Download CV
          </a>

          <a
            href="#portfolio"
            className="text-lg flex items-center gap-2 py-2 px-4 rounded-md text-oceanblue bg-[#030004] shadow-lg shadow-cyan-500/50 hover:scale-105 duration-300"
          >
            <VscCode />
            View Projects
          </a>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 py-8"
        >
          {/* Projects Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-[400px] h-[170px] bg-gray-500 rounded-md shadow-lg shadow-cyan-500/50 duration-300 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <VscCode className="text-4xl bg-amber-50 rounded-full p-1" />
              <h1 className="text-3xl font-bold">3</h1>
            </div>
            <p className="text-xl font-serif mb-2">Total Projects</p>
            <div className="flex items-center justify-between text-sm text-white">
              <p>Innovation Web Applications</p>
              <MdOutlineArrowOutward />
            </div>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-[400px] h-[170px] bg-gray-500 rounded-md shadow-lg shadow-cyan-500/50 duration-300 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <LiaCertificateSolid className="text-4xl bg-amber-50 rounded-full p-1" />
              <h1 className="text-3xl font-bold">3</h1>
            </div>
            <p className="text-xl font-serif mb-2">Certificates</p>
            <div className="flex items-center justify-between text-sm text-white">
              <p>Professional Skills Validated</p>
              <MdOutlineArrowOutward />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
