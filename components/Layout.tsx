"use client";

import React, { ReactNode } from "react";
import { Sora } from "next/font/google";

// Global Components
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import WhatsAppButton from "./WhatsAppButton";

// Font setup - Sora is excellent for modern, high-end portfolios
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* Note: Metadata is now handled in the RootLayout (layout.tsx) 
         using the Metadata API for Next.js 13+ compatibility.
      */}

      {/* [NEW] Subtle Vignette Overlay - Makes the content "pop" from the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none z-0" />

      {/* Decorative + navigational components */}
      <TopLeftImg />
      <Nav />
      <Header />

      {/* WhatsApp Chat Button - Sticky across all pages */}
      <WhatsAppButton />

      {/* Main content container. 
          The 'h-full' ensures that page transitions and layouts 
          calculate heights correctly across all devices.
      */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;