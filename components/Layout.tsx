"use client";

import React, { ReactNode } from "react";
import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "./Header";
import Nav from "./Nav";
import TopLeftImg from "./TopLeftImg";

// Font setup
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
      {/* Meta data */}
      <Head>
        <title>Usman Ali | Portfolio</title>
        <meta
          name="description"
          content="Usman Ali is a Full Stack MERN Developer with 2+ years of experience, building modern web applications using React, Next.js, Node.js, and MongoDB."
        />
        <meta
          name="keywords"
          content="Usman Ali, MERN stack, full stack developer, React, Next.js, Node.js, MongoDB, TypeScript, portfolio, web developer Pakistan"
        />
        <meta name="author" content="Usman Ali" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      {/* Decorative + navigational components */}
      <TopLeftImg />
      <Nav />
      <Header />

      {/* Main content */}
      <div className="relative z-10">{children}</div>
    </main>
  );
};

export default Layout;
