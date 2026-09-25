import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import contactAvatar from "../assets/Contact.png";
import resume from "../assets/Tanya_CV.pdf";

function Contact() {
    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_k4o4yrh",
      "template_4lffmfj",
      form.current,
      "d9p5FoLezAHJUwXcj"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );
};
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 lg:px-20 pt-8
      pb-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] bg-purple-600/10 blur-[120px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[350px] h-[350px] bg-pink-500/10 blur-[120px] rounded-full bottom-10 right-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2
  style={{
    fontFamily: "Satisfy, cursive",
  }}
  className="
    text-6xl
    md:text-7xl
    lg:text-8xl
    font-normal
    tracking-wide
  "
>
  <span className="text-white">
    Let's
  </span>

  <span
    className="
      ml-4
      bg-gradient-to-r
      from-purple-400
      via-purple-500
      to-pink-500
      bg-clip-text
      text-transparent

      drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]
    "
  >
    Connect
  </span>
</h2>

        <p className="text-zinc-400 mt-4">
          Have a project, internship opportunity, or just want to say hi?
           I'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
         {/* Avatar Section */}
<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ amount: 0.2 }}
  className="hidden lg:flex justify-center relative"
>
  {/* Glow */}
  <div
    className="
    absolute
    w-[350px]
    h-[350px]
    rounded-full
    bg-gradient-to-r
    from-purple-500/20
    to-pink-500/20
    blur-[90px]
  "
  />

  <motion.img
    src={contactAvatar}
    alt="Contact Avatar"
    animate={{
      y: [0, -15, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
    className="
      relative
      z-10
      w-[320px]
      object-contain
      drop-shadow-[0_0_40px_rgba(139,92,246,0.4)]
    "
  />
</motion.div>
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 lg:col-span-1"
        >
          {/* Email */}
          <a
            href="mailto:tanyachauhan8707@gmail.com"
            className="
              flex items-center gap-4
              bg-[#18181B]
              border border-white/10
              rounded-2xl p-6
              hover:border-purple-500
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
              transition-all duration-300
            "
          >
            <FaEnvelope className="text-3xl text-purple-400" />

            <div>
              <h3 className="font-semibold text-lg">
                Email
              </h3>

              <p className="text-zinc-400 break-all text-sm md:text-base">
                tanyachauhan8707@gmail.com
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanyachauhan0904/"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-4
              bg-[#18181B]
              border border-white/10
              rounded-2xl p-6
              hover:border-purple-500
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
              transition-all duration-300
            "
          >
            <FaLinkedin className="text-3xl text-blue-400" />

            <div>
              <h3 className="font-semibold text-lg">
                LinkedIn
              </h3>

              <p className="text-zinc-400 text-sm md:text-base">
                Tanya Chauhan
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/tanya0261"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center gap-4
              bg-[#18181B]
              border border-white/10
              rounded-2xl p-6
              hover:border-purple-500
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
              transition-all duration-300
            "
          >
            <FaGithub className="text-3xl text-white" />

            <div>
              <h3 className="font-semibold text-lg">
                GitHub
              </h3>

              <p className="text-zinc-400 break-all text-sm md:text-base">
                github.com/tanya0261
              </p>
            </div>
          </a>

          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-3
                px-6 py-3
                w-full justify-center
                rounded-full
                border border-purple-500
                hover:bg-purple-500/20
                transition
              "
            >
              <FaEye />
              View Resume
            </a>

            <a
              href={resume}
              download="Tanya_Chauhan_Resume.pdf"
              className="
                flex items-center gap-3
                px-6 py-3
                w-full justify-center
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-pink-500
                hover:scale-105
                transition
              "
            >
              <FaDownload />
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
        ref={form}
        onSubmit={sendEmail}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
           w-full
           max-w-full

         bg-[#18181B]/80
           border border-purple-500/20
           rounded-3xl

           p-5
           md:p-8

           space-y-6
           backdrop-blur-xl

           shadow-[0_0_40px_rgba(139,92,246,0.15)]

           hover:-translate-y-2
         hover:border-purple-500/50
           hover:shadow-[0_0_45px_rgba(139,92,246,0.35)]

           transition-all
           duration-300

           col-span-1
           
           "
          >
          <div>
            <label className="block mb-2 text-zinc-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="
              w-full
              min-w-0

            bg-black/20
              border border-white/10
              rounded-xl

              px-4 py-3

              text-sm
              md:text-base

              outline-none

            focus:border-purple-500
              focus:ring-2
            focus:ring-purple-500/30

             transition-all
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
               className="
                w-full
                bg-black/20
                border border-white/10
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-purple-500
              "
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-300">
              Message
            </label>

            <textarea
               name="message"
              rows="5"
              placeholder="Write your message..."
              className="
                w-full
                bg-black/20
                border border-white/10
                rounded-xl
                px-4 py-3
                outline-none
                resize-none
                focus:border-purple-500
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-pink-500
              hover:scale-[1.02]
              transition
            "
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
}

export default Contact;