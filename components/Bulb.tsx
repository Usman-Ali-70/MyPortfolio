"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Bulb: React.FC = () => {
  return (
    <motion.div
      /* Custom smooth breathing/glow animation */
      initial={{ opacity: 0.6, scale: 0.9 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.95, 1, 0.95]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear" // Linear is better for continuous loop consistency, but we keep the keyframes smooth
      }}
      /* Original positioning and mix-blend preserved exactly */
      className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge z-10 w-[200px] xl:w-[260px] select-none pointer-events-none drop-shadow-[0_0_20px_rgba(241,48,36,0.2)]"
    >
      <Image
        src="/bulb.png"
        alt="Glowing light bulb graphic"
        width={260}
        height={200}
        priority
        quality={80}
        className="w-full object-contain"
        style={{ height: "auto" }}
      />
    </motion.div>
  );
};

export default Bulb;