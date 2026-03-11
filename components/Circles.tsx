"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Circles: React.FC = React.memo(() => {
  return (
    <motion.div
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
      className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge z-10 select-none pointer-events-none opacity-50 hover:opacity-100 transition-opacity duration-1000"
    >
      <Image
        src="/circles.png"
        alt=""
        width={300}
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

Circles.displayName = "Circles";

export default Circles;