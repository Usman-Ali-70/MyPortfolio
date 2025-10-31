"use client";

import React from "react";
import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

// TypeScript interface for social data
interface SocialLink {
  name: string;
  link: string;
  Icon: React.ComponentType<{ className?: string }>;
}

// Update with your real links
export const socialData: SocialLink[] = [
  {
    name: "YouTube",
    link: "https://youtube.com",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com",
    Icon: RiFacebookLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com",
    Icon: RiDribbbleLine,
  },
  {
    name: "Pinterest",
    link: "https://pinterest.com",
    Icon: RiPinterestLine,
  },
  {
    name: "GitHub",
    link: "https://github.com/usmanaliwarraich", // 🔥 Updated with your GitHub profile
    Icon: RiGithubLine,
  },
];

const Socials: React.FC = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          href={social.link}
          title={social.name}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[6px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden className="w-5 h-5" />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
