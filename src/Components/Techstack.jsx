const techStack = [
  { name: "HTML", image: "/html-icon.webp" },
  { name: "CSS", image: "/css-3.webp" },
  { name: "JavaScript", image: "/js.webp" },
  { name: "React", image: "/react-js-icon.webp" },
  { name: "Tailwind CSS", image: "/tailwind.webp" },
  { name: "Java", image: "/java-4-logo.webp" },
  { name: "Spring Boot", image: "/spring-boot.webp" },
  { name: "MySQL", image: "/mysql_PNG1.webp" },
  { name: "Git", image: "/gi.webp" },
  { name: "GitHub", image: "/github.webp" },
];

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-white justify-items-center">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="group w-[178px] h-[164px] rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
        >
          <div className="relative w-[100px] h-[100px] flex items-center justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
            <img
              src={tech.image}
              alt={`${tech.name} icon`}
              className="relative w-[80px] h-[80px] transition-transform duration-300"
            />
          </div>
          <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
