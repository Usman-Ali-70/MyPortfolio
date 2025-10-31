"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`${
              pathname === link.path ? "text-accent" : "text-white"
            } relative flex items-center group hover:text-accent transition-all duration-300`}
          >
            {/* Tooltip */}
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] shadow-lg">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* Tooltip triangle */}
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>

            {/* Icon */}
            <link.Icon className="w-6 h-6" aria-hidden />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
