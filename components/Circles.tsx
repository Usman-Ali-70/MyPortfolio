"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Circles: React.FC = () => {
  return (
    <motion.div
      /* Custom smooth floating and slow rotation animation */
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        scale: [1, 1.1, 1],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
      /* Original positioning and blend mode preserved */
      className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge z-10 select-none pointer-events-none opacity-50 hover:opacity-100 transition-opacity duration-1000"
    >
      <Image
        src="/circles.png"
        alt="Abstract glowing circles background"
        width={300}
        height={200}
        priority
        quality={80}
        className="w-full object-contain"
        style={{ height: "auto" }}
      />
    </motion.div>
  );
};

export default Circles;