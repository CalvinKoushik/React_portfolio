import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { VscCode } from "react-icons/vsc";
import { BsStack } from "react-icons/bs";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectDetails = () => {
  const navigate = useNavigate();

  return (
    <section
      id="expense"
      className="min-h-screen w-full text-white py-12 px-4 md:px-10 relative"
    >
      {/* Background & overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black z-[-2]" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Bg-ff.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0" />

      {/* Back button & breadcrumb */}
      <motion.div
        className="relative z-10 flex items-center gap-3 text-sm md:text-base mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoIosArrowRoundBack className="text-2xl" />
          <span>Back</span>
        </motion.button>
        <span className="text-gray-400">/ Projects</span>
        <IoChevronForward className="text-gray-400" />
        <span className="text-royalblue font-medium">Expense Tracker</span>
      </motion.div>

      {/* Main grid */}
      <motion.div
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left panel: Info */}
        <motion.div
          className="p-8 rounded-3xl shadow-xl flex flex-col gap-6 bg-slate-900/20 backdrop-blur-md border border-white/10"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-sky-600 text-transparent bg-clip-text">
            Expense Tracker
          </h1>

          <p className="text-base md:text-lg text-mintgreen leading-relaxed">
            Developed a responsive web application to track daily income and
            expenses with interactive chart visualizations. Utilized React Hooks
            for dynamic state management and localStorage for seamless data
            persistence across sessions.
          </p>

          {/* Summary cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 rounded-xl backdrop-blur bg-slate-200/10 p-3">
            <div className="w-full sm:w-auto min-w-[350px] flex items-center gap-4 py-4 px-6 rounded-[12px] transition-all duration-300 bg-slate-500/20 hover:bg-gray-700 hover:border-cyan-400 hover:scale-105 cursor-pointer border border-transparent">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <VscCode className="text-2xl text-blue-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white">5</span>
                <span className="text-sm text-gray-300">Total Technology</span>
              </div>
            </div>

            <div className="w-full sm:w-auto min-w-[350px] flex items-center gap-4 py-4 px-6 rounded-[12px] transition-all duration-300 bg-slate-500/20 hover:bg-gray-700 hover:border-cyan-400 hover:scale-105 cursor-pointer border border-transparent">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <BsStack className="text-2xl text-blue-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-white">6</span>
                <span className="text-sm text-gray-300">Key Features</span>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h3 className="text-2xl font-semibold text-softindigo mb-3">
              🛠️ Tech Stack Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Tailwind CSS",
                "Chart.js",
                "Local Storage",
                " React-Hooks",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700 text-skyblue px-4 py-1 rounded-md text-sm md:text-base shadow-sm hover:bg-slate-600 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right panel: Image & features */}
        <motion.div
          className="p-6 rounded-3xl shadow-xl flex flex-col gap-6 bg-slate-800/20 backdrop-blur-md border border-white/10 z-10"
          variants={fadeInUp}
        >
          <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden border border-white/10">
            <motion.img
              src="exp.webp"
              alt="Portfolio Preview"
              className="w-full h-full object-fill"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </div>

          <div className="w-full p-6 bg-slate-700/20 backdrop-blur-md rounded-xl border border-white/10">
            <h3 className="text-2xl font-semibold text-softindigo mb-4">
              ✨ Key Features
            </h3>
            <ul className="list-disc list-inside space-y-3 text-oceanblue text-sm md:text-base">
              <li>
                <strong>📊 Dashboard with Charts:</strong> Visualize income vs
                expenses using bar/pie/donut charts.
              </li>
              <li>
                <strong>📝 Add/Edit/Delete Transactions:</strong> CRUD
                functionality for income and expense entries.
              </li>
              <li>
                <strong>📅 Date-wise Tracking:</strong> Filter and view
                transactions by date or category.
              </li>
              <li>
                <strong>💾 Persistent Storage: </strong> Data saved in browser
                localStorage for session continuity.
              </li>
              <li>
                <strong>🎨 Animations:</strong> Framer Motion and Tailwind-based
                effects.
              </li>
              <li>
                <strong>📱 Responsive Design: </strong> Optimized for mobile,
                tablet, and desktop screens.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
