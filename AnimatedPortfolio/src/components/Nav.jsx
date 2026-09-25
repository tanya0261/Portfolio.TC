import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Logo */}
     <a
  href="#home"
  className="
    hidden md:block

    fixed
    top-6
    left-8

    z-50
    text-3xl
    font-bold

    bg-gradient-to-r
    from-purple-400
    to-pink-500
    bg-clip-text
    text-transparent
  "
>
  Tanya
</a>

      {/* Desktop Navbar */}
      <nav
        className="
          hidden md:block
          fixed
          top-5
          right-8
          z-50
          bg-[#18181B]/90
          backdrop-blur-xl
          border border-white/10
          rounded-full
          px-5 py-3
          shadow-[0_0_30px_rgba(139,92,246,0.15)]
        "
      >
        <div className="flex items-center gap-8 text-base">
          <a
            href="#about"
            className="text-zinc-300 hover:text-purple-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-zinc-300 hover:text-purple-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-zinc-300 hover:text-purple-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-zinc-300 hover:text-purple-400 transition"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          md:hidden
          fixed
          top-6
          right-6
          z-50
          text-white
          bg-[#18181B]/80
          backdrop-blur-xl
          border border-white/10
          p-3
          rounded-xl
        "
      >
        <Menu size={24} />
      </button>

     {/* Mobile Menu Overlay */}
{isOpen && (
  <div
    onClick={() => setIsOpen(false)}
    className="
      md:hidden
      fixed
      inset-0
      z-[60]
      bg-black/30
      backdrop-blur-md
      flex
      justify-end
      items-start
    "
  >
    {/* Menu Panel */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="
        mt-5
        mr-5

        w-fit
        min-w-[180px]

        bg-[#2A0A1B]/95
        backdrop-blur-2xl

        border
        border-pink-500/30

        rounded-3xl

        shadow-[0_0_80px_rgba(236,72,153,0.5)]

        p-6
      "
    >
      
     {/* Header */}
<div className="flex items-center justify-between mb-3 pb-2 border-b border-pink-500/20">
  <a
    href="#home"
    onClick={() => setIsOpen(false)}
  >
    <h2
      className="
        text-2xl
        font-bold
        bg-gradient-to-r
        from-purple-400
        to-pink-500
        bg-clip-text
        text-transparent
      "
    >
      Tanya
    </h2>
  </a>

  <button
    onClick={() => setIsOpen(false)}
    className="text-white"
  >
    <X size={24} />
  </button>
</div>

      {/* Links */}
      <div className="flex flex-col gap-4 text-lg">
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="
            text-zinc-300
            hover:text-pink-400
            transition
          "
        >
          About
        </a>

        <a
          href="#skills"
          onClick={() => setIsOpen(false)}
          className="
            text-zinc-300
            hover:text-pink-400
            transition
          "
        >
          Skills
        </a>

        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="
            text-zinc-300
            hover:text-pink-400
            transition
          "
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="
            text-zinc-300
            hover:text-pink-400
            transition
          "
        >
          Contact
        </a>
      </div>
    </div>
  </div>
)}
    </>
  );
}

export default Nav;