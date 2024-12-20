"use client";
import { motion } from "motion/react";

const SlideUpAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: { y: 50, opacity: 0 }, // Start slightly below with no opacity
        visible: {
          y: 0, // Final position
          opacity: 1, // Fully visible
          transition: {
            staggerChildern: 2,
            duration: 1.5, // Duration of the slide-up animation
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpAnimation;
