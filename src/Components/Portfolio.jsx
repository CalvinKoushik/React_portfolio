import React, { useState } from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";
import Certificate from "./Certificate";
import TechStack from "./Techstack";
import { GiCubeforce } from "react-icons/gi";
import { VscCode } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "certificates":
        return <Certificate />;
      case "techstack":
        return <TechStack />;
      default:
        return <Projects />;
    }
  };

  return (
    <section
      id="portfolio"
      className="w-full min-h-screen text-white px-4 py-16 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 text-center mb-4"
        >
          Portfolio Showcase
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-tealgreen text-base sm:text-lg text-center mb-10"
        >
          Dive into my projects, certifications, and the stack I work with every
          day!
        </motion.p>

        {/* Button Tabs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-10 rounded-xl backdrop-blur bg-slate-200/10 p-3"
        >
          {[
            {
              label: "Projects",
              key: "projects",
              icon: <VscCode className="text-2xl mb-1" />,
            },
            {
              label: "Certificates",
              key: "certificates",
              icon: <LiaCertificateSolid className="text-2xl mb-1" />,
            },
            {
              label: "Tech Stack",
              key: "techstack",
              icon: <GiCubeforce className="text-2xl mb-1" />,
            },
          ].map((tab) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full sm:w-auto flex-1 min-w-[150px] font-semibold text-oceanblue flex flex-col items-center justify-center
                py-4 px-4 rounded-[12px] transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gray-600"
                    : "hover:bg-gray-700 hover:border-cyan-400"
                }`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Render Section with fade */}
        <motion.div
          key={activeTab} // key triggers animation on change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-4 rounded-lg shadow-lg"
        >
          {renderContent()}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
