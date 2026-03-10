"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

const Avatar: React.FC = () => {
  const [pic, setPic] = useState<string>("/avatar12.png");

  useEffect(() => {
    client.fetch(siteSettingsQuery).then((data) => {
      if (data?.profilePic) {
        setPic(data.profilePic);
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      className="flex xl:max-w-none pointer-events-none select-none relative z-10"
    >
      <Image
        src={pic}
        alt="Portrait of Usman Ali"
        width={1000}
        height={1000}
        priority
        quality={90}
        className="translate-z-0 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700"
        style={{ height: "auto" }}
      />
    </motion.div>
  );
};

export default Avatar;