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
            className="flex xl:max-w-none pointer-events-none select-none"
        >
            <Image
                src="/avatar3.png"
                alt="Portrait of Usman Ali"
                // Original size settings preserved exactly
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