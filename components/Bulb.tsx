"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Bulb: React.FC = React.memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0.6, scale: 0.9 }}
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [0.95, 1, 0.95]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }}
      className="rotate-12 mix-blend-color-dodge z-10 w-[200px] xl:w-[260px] select-none pointer-events-none drop-shadow-[0_0_20px_rgba(241,48,36,0.2)]"
    >
      <Image
        src="/bulb.png"
        alt=""
        width={260}
        height={200}
        quality={80}
        loading="lazy"
        className="w-full object-contain"
        style={{ height: "auto" }}
        aria-hidden="true"
      />
    </motion.div>
  );
});

Bulb.displayName = "Bulb";

export default Bulb;