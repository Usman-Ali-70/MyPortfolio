"use client";

import React, { ReactNode } from "react";

// Global Components
import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className="page bg-site text-white bg-cover bg-no-repeat font-sora relative h-full overflow-hidden"
    >
      {/* Subtle Vignette Overlay - Makes the content "pop" from the background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none z-0" />

      {/* Decorative + navigational components */}
      <TopLeftImg />
      <Nav />
      <Header />

      {/* WhatsApp Chat Button - Sticky across all pages */}
      <WhatsAppButton />

      {/* Main content container - full viewport, no extra scroll layers */}
      <div className="relative z-10 h-full w-full overflow-hidden">
        {children}
      </div>
    </main>
  );
};

export default Layout;