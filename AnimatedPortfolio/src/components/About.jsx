import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

import center from "../assets/About.png";
function About() {
  const stats = [
    {
      icon: <FaGraduationCap />,
      value: "8.02",
      title: "CGPA",
    },
    {
      icon: <FaCode />,
      value: "3+",
      title: "Projects",
    },
    {
      icon: <FaLaptopCode />,
      value: "MERN",
      title: "Developer",
    },
    {
      icon: <FaRocket />,
      value: "2027",
      title: "Graduate",
    },
  ];

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind",
    "C++",
    "DSA",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 pt-8
      pb-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[300px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-purple-400 uppercase tracking-[6px]">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
          Who Am I?
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center"
>
  <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[450px] md:w-[500px] md:h-[650px] mx-auto">

    {/* Purple Glow */}
    <div className="absolute inset-0 bg-purple-500/10 blur-[140px] rounded-full"></div>

    {/* Rotating Skills */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 hidden md:block"
    >
      {[
        { skill: "React", top: "10%", left: "50%" },
        { skill: "Node.js", top: "25%", left: "85%" },
        { skill: "MongoDB", top: "50%", left: "95%" },
        { skill: "Express", top: "75%", left: "85%" },
        { skill: "Tailwind", top: "90%", left: "50%" },
        { skill: "C++", top: "75%", left: "15%" },
        { skill: "DSA", top: "50%", left: "5%" },
        { skill: "GitHub", top: "25%", left: "15%" },
      ].map((item, index) => (
        <motion.div
          key={index}
          animate={{ rotate: -360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: item.top,
            left: item.left,
          }}
          className="
            absolute
            -translate-x-1/2
            -translate-y-1/2
            bg-[#18181B]
            border border-purple-500
            px-4 py-2
            rounded-full
            text-sm
            whitespace-nowrap
            shadow-[0_0_20px_rgba(139,92,246,0.4)]
          "
        >
          {item.skill}
        </motion.div>
      ))}
    </motion.div>

    {/* Avatar */}
    <motion.img
      src={center}
      alt="Tanya"
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        h-[300px]
        sm:h-[380px]
        md:h-[580px]
        object-contain
        drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]
        z-10
      "
    />
  </div>
</motion.div>
        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
            
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Passionate Developer & Problem Solver
          </h3>

          <p className="text-zinc-300 leading-8">
            I'm Tanya Chauhan, a third-year Electronics and
            Communication Engineering student at IEM Kolkata
            with a CGPA of 8.02.
          </p>

          <p className="text-zinc-400 leading-8 mt-5">
            I enjoy building responsive web applications
            using React, Node.js, Express and MongoDB while
            continuously improving my Data Structures &
            Algorithms skills.
          </p>

          <p className="text-zinc-400 leading-8 mt-5">
            My goal is to become a Software Engineer who
            creates impactful digital products and solves
            real-world problems through technology.
          </p>

          {/* Quote */}
          <div className="mt-8 border-l-4 border-purple-500 pl-5 italic text-zinc-300 text-left">
            "I love transforming ideas into interactive,
            beautiful and meaningful digital experiences."
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="
                px-4 py-2
                rounded-full
                bg-purple-500/20
                border border-purple-500/30
                text-purple-300
                hover:scale-105
                transition
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 md:mt-24">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="
            bg-[#18181B]
            border border-white/10
            rounded-3xl
            p-6
            text-center
            hover:border-purple-500
            hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
            transition-all
            "
          >
            <div className="text-3xl text-purple-400 flex justify-center mb-4">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold">
              {item.value}
            </h3>

            <p className="text-zinc-400 mt-2">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mt-12 md:mt-24 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          My Journey
        </h3>

        <div className="space-y-6">
          {[
            "2023 - Started B.Tech in ECE at IEM Kolkata",
            "2024 - Learned Frontend Development",
            "2025 - Built MERN Stack Projects",
            "2026 - Focusing on DSA & Placements",
            "2027 - Future Software Engineer",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ delay: index * 0.15 }}
              className="
              bg-[#18181B]
              border border-white/10
              rounded-2xl
              p-5
              hover:border-purple-500
              transition
              "
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;