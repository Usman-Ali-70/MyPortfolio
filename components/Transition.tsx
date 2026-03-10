"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// High-end liquid transition curve
const premiumCurve = [0.22, 1, 0.36, 1] as const;

const transitionVariants: Variants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition: React.FC = () => {
  return (
    <>
      {/* Layer 1 - Deepest Primary */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.5, ease: premiumCurve }}
        aria-hidden="true"
      />

      {/* Layer 2 - Mid Purple Accent */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.5, ease: premiumCurve }}
        aria-hidden="true"
      />

      {/* Layer 3 - Brand Accent Highlight */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.5, ease: premiumCurve }}
        aria-hidden="true"
      />
    </>
  );
};

export default Transition;