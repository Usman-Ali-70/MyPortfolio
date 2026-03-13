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
      {/* Animated radial glow behind the avatar */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center 60%, rgba(241,48,36,0.18) 0%, rgba(241,48,36,0.08) 35%, transparent 70%)",
          filter: "blur(40px)",
          animation: "avatarGlow 4s ease-in-out infinite",
        }}
      />

      <Image
        src={pic}
        alt="Portrait of Usman Ali"
        width={1000}
        height={1000}
        priority
        quality={100}
        className="translate-z-0 w-full object-contain transition-all duration-700 relative z-[1]"
        style={{
          height: "auto",
          filter:
            "brightness(1.18) contrast(1.12) saturate(1.25) drop-shadow(0 0 60px rgba(241,48,36,0.22)) drop-shadow(0 20px 50px rgba(0,0,0,0.35))",
        }}
      />
    </motion.div>
  );
};

export default Avatar;