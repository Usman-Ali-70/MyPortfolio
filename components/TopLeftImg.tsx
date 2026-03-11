"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TopLeftImg: React.FC = React.memo(() => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] pointer-events-none select-none"
    >
      <Image
        src="/top-left-img.png"
        alt=""
        width={400}
        height={400}
        priority={true}
        quality={80}
        className="w-full object-contain"
        style={{ height: "auto" }}
        aria-hidden="true"
      />
    </motion.div>
  );
});

TopLeftImg.displayName = "TopLeftImg";

export default TopLeftImg;