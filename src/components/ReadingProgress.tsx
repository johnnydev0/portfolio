import { motion, useScroll, useSpring } from "framer-motion";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Desktop: thin vertical bar on the far left edge of the sidebar */}
      <motion.div
        className="hidden md:block fixed left-0 top-0 w-0.5 bg-primary origin-top z-[60]"
        style={{ scaleY, height: "100vh" }}
      />
      {/* Mobile: horizontal bar at top */}
      <motion.div
        className="md:hidden fixed top-14 left-0 right-0 h-0.5 bg-primary origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default ReadingProgress;
