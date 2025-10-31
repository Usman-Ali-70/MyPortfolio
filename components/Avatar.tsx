"use client";

import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="Portrait of Usman Ali"
        width={1000}
        height={1000}
        priority
        quality={100}
        className="translate-z-0 w-full h-full object-contain"
      />
    </div>
  );
};

export default Avatar;
