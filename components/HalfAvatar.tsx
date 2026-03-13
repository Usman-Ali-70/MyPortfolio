"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Avatar: React.FC = () => {
    return (
        <motion.div
            /* Professional entry animation: subtle scale and fade */
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                delay: 0.1,
            }}
            className="flex xl:max-w-none pointer-events-none select-none relative"
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
                src="/avatar3.png"
                alt="Portrait of Usman Ali"
                // Original size settings preserved exactly
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