import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import MyStyleImg from "../assets/MyStyle.png";
import AuthImg from "../assets/Authentication.png";
import PortfolioImg from "../assets/Portfolio.png";

function Projects() {
  const projects = [
    {
      title: "MyStyle",
      image: MyStyleImg,
      description:
        "Modern fashion e-commerce website with responsive design and category-based shopping experience.",
      tech: ["React", "Tailwind CSS"],
      github: "https://github.com/tanya0261/MyStyle",
      demo: "https://mystyle-frontend9.onrender.com/",
    },

    {
      title: "Authentication System",
      image: AuthImg,
      description:
        "JWT based authentication system with secure login/signup, Cloudinary image uploads and MongoDB.",
      tech: ["Node.js", "MongoDB", "JWT", "Express"],
      github:
        "https://github.com/tanya0261/mern-authentication",
      demo:
        "https://mern-authentication-pi-ten.vercel.app/signup",
    },

    {
      title: "Animated Portfolio",
      image: PortfolioImg,
      description:
        "Interactive portfolio website built using React, Tailwind CSS and Framer Motion.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/tanya0261",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 lg:px-20 pt-8
      pb-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full bottom-0 right-0"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20 relative z-10"
      >
        <p className="uppercase tracking-[6px] text-purple-400 text-sm">
          My Work
        </p>

        <h2 className="text-5xl lg:text-7xl font-bold mt-4">
          Featured{" "}
          <span className="text-purple-400">
            Projects
          </span>
        </h2>

        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
          Here are some of the projects I've built
          using modern technologies and creative
          problem solving.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
            }}
            className="
              group
              relative
              h-[380px] md:h-[450px]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              bg-[#18181B]
              cursor-pointer
              hover:border-purple-500
              transition-all
              duration-500
            "
          >
            {/* Hover Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
               absolute
               inset-0
               w-full
               h-full
               object-cover

               opacity-100
               md:opacity-0

               md:group-hover:opacity-100
               transition-all
               duration-700
                "
              />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/70
                opacity-100
                md:opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            ></div>

            {/* Normal Card Content */}
            <div
              className="
                relative
                z-10
                p-8
                h-full
                flex
                flex-col
                justify-between
                md:group-hover:opacity-0
                transition-all
                duration-300
              "
            >
              <div>
                <h3 className="text-3xl font-bold text-purple-400">
                  {project.title}
                </h3>

                <p className="text-zinc-400 mt-5 leading-7">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-purple-500/20
                      text-purple-300
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Content */}
            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
                z-20
                opacity-100
                translate-y-0

                md:opacity-0
                md:translate-y-16

                md:group-hover:opacity-100
                md:group-hover:translate-y-0
                transition-all
                duration-500
              "
            >
              <h3 className="text-3xl font-bold mb-4">
                {project.title}
              </h3>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    bg-gradient-to-r
                    from-purple-600
                    to-pink-500
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    px-5
                    py-3
                    rounded-full
                    border
                    border-white/20
                    backdrop-blur-md
                  "
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                shadow-[0_0_80px_rgba(139,92,246,0.5)]
              "
            ></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="
          mt-24
          text-center
          relative
          z-10
        "
      >
        <h3 className="text-3xl font-bold">
          Have a project in mind?
        </h3>

        <p className="text-zinc-400 mt-4">
          Let's build something amazing together.
        </p>

        <a
          href="#contact"
          className="
            inline-block
            mt-8
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            hover:scale-105
            transition
          "
        >
          Get In Touch →
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;