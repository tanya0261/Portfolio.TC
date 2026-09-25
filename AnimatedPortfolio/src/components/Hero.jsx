import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Tanya_CV.pdf";
import center from "../assets/center.png";
import up from "../assets/up.png";
import down from "../assets/down.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import upLeft from "../assets/up-left.png";
import upRight from "../assets/up-right.png";
import downLeft from "../assets/down-left.png";
import downRight from "../assets/down-right.png";

function Hero() {
  const [avatar, setAvatar] = useState(center);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      if (x < 0.33 && y < 0.33) {
        setAvatar(upLeft);
      } else if (x > 0.66 && y < 0.33) {
        setAvatar(upRight);
      } else if (x < 0.33 && y > 0.66) {
        setAvatar(downLeft);
      } else if (x > 0.66 && y > 0.66) {
        setAvatar(downRight);
      } else if (y < 0.33) {
        setAvatar(up);
      } else if (y > 0.66) {
        setAvatar(down);
      } else if (x < 0.33) {
        setAvatar(left);
      } else if (x > 0.66) {
        setAvatar(right);
      } else {
        setAvatar(center);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    
    <section   id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-14 md:pt-24 pb-8 overflow-hidden">

      {/* Purple Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full top-20 -left-20"></div>

      {/* Pink Glow */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>

        <div className="absolute top-40 right-40 w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>

        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-purple-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-purple-300 rounded-full animate-bounce"></div>

      </div>

      {/* Left Side */}
      <div className="max-w-xl relative z-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-zinc-400 text-lg"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
           style={{
           fontFamily: "Satisfy, cursive",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-bold mt-2"
        >
          Tanya Chauhan
        </motion.h1>

        <div className="mt-5">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "BTech Student",
              2000,
              "Problem Solver",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl lg:text-3xl font-semibold text-purple-400"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-zinc-400 mt-6 leading-8"
        >
          Electronics & Communication Engineering student
          passionate about Full Stack Development,
          Data Structures & Algorithms, and building
          modern web applications.
        </motion.p>
<div className="flex gap-4 mt-8 mb-4">

  <a
    href={resume}
    target="_blank"
    rel="noreferrer"
    className="
      px-6 py-3
      rounded-full
      bg-gradient-to-r
      from-purple-600
      to-pink-500
      hover:scale-105
      transition duration-300
    "
  >
    Resume
  </a>

  <a
    href="#contact"
    className="
      px-6 py-3
      rounded-full
      border border-purple-500
      hover:bg-purple-500/20
      transition duration-300
    "
  >
    Contact
  </a>

</div>

      </div>

      {/* Right Side Avatar */}
<div className="w-[420px] lg:w-[650px] xl:w-[750px] relative z-10 flex items-center justify-center">

  {/* Purple Glow Behind Avatar */}
  <div
    className="
      absolute
      w-[80%]
      h-[80%]
      rounded-full
      bg-[#EC4899]/60
      blur-[140px]
      animate-pulse
    "
  />

  <motion.img
    src={avatar}
    alt="Tanya Avatar"
    className="
      relative
      z-10
      w-full
      h-auto
      object-contain
      rounded-[30px]
      drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]
    "
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
  />
</div>
    </section>
  );
}

export default Hero;