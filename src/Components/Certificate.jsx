import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certificates = [
  {
    name: "Java Full Stack",
    issuer: "JSpiders",
    year: "2025",
  },
  {
    name: "React & Frontend Dev Internship",
    issuer: "Aryu Enterprises",
    year: "2025",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Certificate = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {certificates.map((cert, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          className="group relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-6 rounded-xl shadow-xl border border-white/10 backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
        >
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-cyan-400/10 blur-2xl opacity-0 group-hover:opacity-40 transition duration-500" />

          {/* Certificate icon */}
          <FaCertificate className="text-cyan-400 text-3xl mb-4 drop-shadow-lg" />

          <h4 className="text-xl font-bold text-white">{cert.name}</h4>
          <p className="text-sm text-gray-300">{cert.issuer}</p>
          <span className="text-sm text-cyan-400 font-medium">{cert.year}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certificate;
