import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <SiCplusplus />,
      title: "C++",
      desc: "Problem Solving & Competitive Programming",
    },
    {
      icon: "🧠",
      title: "DSA",
      desc: "Data Structures & Algorithms",
    },
    {
      icon: <FaReact />,
      title: "React",
      desc: "Interactive User Interfaces",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      desc: "Modern Responsive Design",
    },
    {
      icon: <SiNodedotjs />,
      title: "Node.js",
      desc: "Backend Development",
    },
    {
      icon: <SiExpress />,
      title: "Express.js",
      desc: "REST APIs & Server Logic",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      desc: "Database Management",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      desc: "Version Control",
    },
  ];

  return (
    <section
  id="skills"
  className="
  relative
  min-h-screen
  px-4
  sm:px-6
  md:px-10
  lg:px-20
  pt-4
  pb-16
  overflow-hidden
  "
>
      {/* Glow Effects */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
     <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-10 md:mb-16"
>
  <p className="text-purple-400 uppercase tracking-[4px]">
    Technologies
  </p>

  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
    My Skills
  </h2>

  <p className="text-zinc-400 mt-4 text-sm sm:text-base">
    Tools and technologies I use to build modern applications.
  </p>
</motion.div>

      {/* Moving Tech Strip */}
      <div className="overflow-hidden mb-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {[
            "⚛ React",
            "🚀 Node.js",
            "🍃 MongoDB",
            "🎨 Tailwind",
            "💻 C++",
            "🧠 DSA",
            "⚡ Express",
            "🐙 GitHub",
            "✨ JavaScript",
            "🔥 MERN Stack",
            "⚛ React",
            "🚀 Node.js",
            "🍃 MongoDB",
            "🎨 Tailwind",
          ].map((item, index) => (
            <div
              key={index}
              className="
              px-4 py-2
              rounded-full
              bg-[#18181B]
              border border-purple-500/30
              text-purple-300
              "
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
           className="
group
relative
bg-[#18181B]
border
border-white/10
rounded-2xl

p-4
sm:p-5
md:p-6

overflow-hidden

hover:border-purple-500
hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]

transition-all
duration-300
"
          >
            <div
              className="
              absolute inset-0
              opacity-0
              group-hover:opacity-100
              bg-gradient-to-br
              from-purple-500/10
              to-pink-500/10
              transition
              "
            />

            <div className="relative z-10">
              <div className="text-4xl md:text-5xl text-purple-400 mb-3 md:mb-5">
              {skill.icon}
              </div>

              <h3 className="text-base md:text-xl font-semibold">
               {skill.title}
              </h3>

              <p className="text-zinc-400 mt-2 text-xs md:text-sm leading-5">
               {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-3 md:gap-6 mt-14 md:mt-20">
        {[
          {
            value: "8.02",
            label: "CGPA",
          },
          {
            value: "3+",
            label: "Projects",
          },
          {
            value: "2027",
            label: "Graduation",
          },
          {
            value: "MERN",
            label: "Stack",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              delay: index * 0.1,
            }}
            className="
bg-[#18181B]
border
border-white/10
rounded-2xl

p-4
md:p-8

text-center

hover:border-purple-500
transition
"
          >
           <h3 className="text-xl md:text-4xl font-bold text-purple-400">
           {item.value}
            </h3>

            <p className="text-zinc-400 mt-2">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;