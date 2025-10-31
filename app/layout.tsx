import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout"; // Make sure Layout is a client component

export const metadata: Metadata = {
  title: "Usman Ali | Full Stack Developer",
  description:
    "Portfolio of Usman Ali, a Full Stack Developer skilled in Next.js, React, Node.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full">
        {/* Layout must be a client component */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
