"use client";
import { motion } from "motion/react";

const ZoomInAnimation = ({
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
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            staggerChildern: 2,
            duration: 1.2,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInAnimation;
