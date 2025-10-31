"use client";

import Image from "next/image";
import React from "react";

const Bulb: React.FC = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px] select-none pointer-events-none">
      <Image
        src="/bulb.png"
        alt="Glowing light bulb graphic"
        width={260}
        height={200}
        priority
        quality={100}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Bulb;
