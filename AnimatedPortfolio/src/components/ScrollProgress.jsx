import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-purple-500 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress, width: "100%" }}
    />
  );
}

export default ScrollProgress;