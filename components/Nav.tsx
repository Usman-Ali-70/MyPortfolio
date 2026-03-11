"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

// Icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// Navigation data type
interface NavItem {
  name: string;
  path: string;
  Icon: React.ComponentType<{ className?: string }>;
}

// Navigation links
export const navData: NavItem[] = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "services", path: "/services", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "testimonials", path: "/testimonials", Icon: HiChatBubbleBottomCenterText },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-auto xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Inner Container - Glassmorphism style, sticky bottom on mobile & desktop */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-20 xl:px-0 h-[72px] xl:h-max py-8 bg-black/60 backdrop-blur-xl text-2xl xl:text-xl xl:rounded-full border-t border-white/10 xl:border-t-0 xl:border-l xl:border-r shadow-[0_-4px_30px_rgba(0,0,0,0.3)] xl:shadow-none xl:bg-white/10 xl:backdrop-blur-sm">
        {navData.map((link, i) => {
          const isActive = pathname === link.path;

          return (
            <Link
              key={i}
              href={link.path}
              className={`${isActive ? "text-accent scale-110" : "text-white/70 hover:text-accent active:scale-95"
                } relative flex items-center group transition-all duration-300 ease-premium`}
              aria-label={link.name}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Tooltip - Desktop only */}
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex"
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                  className="bg-white relative flex text-primary items-center p-[8px] rounded-[3px] shadow-2xl"
                >
                  <div className="text-[12px] leading-none font-bold capitalize tracking-wider">
                    {link.name}
                  </div>

                  {/* Tooltip triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>

              {/* Icon with active indicator dot */}
              <div className="relative">
                <link.Icon className="w-5 h-5 xl:w-6 xl:h-6" aria-hidden="true" />
                {isActive && (
                  <motion.div
                    layoutId="active-dot"
                    className="absolute -bottom-1.5 xl:-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;