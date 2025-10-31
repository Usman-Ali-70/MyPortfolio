"use client";

import Image from "next/image";
import React from "react";

const Circles: React.FC = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 select-none pointer-events-none">
      <Image
        src="/circles.png"
        alt="Abstract glowing circles background"
        width={300}
        height={200}
        priority
        quality={100}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Circles;
