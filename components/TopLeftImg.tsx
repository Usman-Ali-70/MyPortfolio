"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TopLeftImg = () => {
  return (
    <motion.div
      /* Subtle entry animation for a premium feel */
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      /* Original positioning and mix-blend preserved */
      className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] pointer-events-none select-none"
    >
      <Image
        src="/top-left-img.png"
        alt="Top left decorative background cover"
        width={400}
        height={400}
        /* Critical for SEO and Performance as this is at the top of the page */
        priority={true}
        quality={90}
        className="w-full object-contain"
        style={{ height: "auto" }}
      />
    </motion.div>
  );
};

export default TopLeftImg;