import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

// Load the sleek, modern Sora font for a premium tech aesthetic
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap", // Font display swap for better LCP
});

// Viewport configuration for mobile responsiveness
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#131424",
};

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://usmanali.engineer"),
  title: {
    template: "%s | Usman Ali - Portfolio",
    default: "Usman Ali | Full Stack Developer & Next.js Expert",
  },
  description:
    "Portfolio of Usman Ali, a Full Stack Developer specializing in MERN stack, Next.js, React, and scalable web architectures. View projects like SkyStar POS and custom e-commerce solutions.",
  keywords: [
    "Usman Ali",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "MERN Stack",
    "Web Developer Portfolio",
    "ERP Dashboard Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "UI/UX Enthusiast",
    "TailwindCSS",
    "TypeScript Developer",
  ],
  authors: [{ name: "Usman Ali", url: "https://usmanali.engineer" }],
  creator: "Usman Ali",
  publisher: "Usman Ali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_STRING", // TODO: Replace
    yandex: "YOUR_YANDEX_VERIFICATION_STRING", // TODO: Replace
    other: {
      me: ["my-email@example.com", "https://usmanali.engineer"], // TODO: Replace
    },
  },
  openGraph: {
    title: "Usman Ali | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web applications, ERP systems, and e-commerce architectures.",
    url: "https://usmanali.engineer",
    siteName: "Usman Ali Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Usman Ali - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Ali | Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web applications, ERP systems, and e-commerce architectures.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable}`}>
      <head>
        {/* Preconnect to critical origins for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="h-full font-sora bg-secondary text-white/80 overflow-hidden overscroll-none">
        <Layout>{children}</Layout>
        <GoogleAnalytics gaId="G-XYZ" />
        <GoogleTagManager gtmId="GTM-XYZ" />
        {/* JSON-LD Schema for Rich Search Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Usman Ali",
              url: "https://usmanali.engineer",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance / Independent",
              },
              sameAs: [
                "https://www.linkedin.com/", // TODO: Update Link
                "https://github.com/Usman-Ali-70",
                "https://www.instagram.com/usman_warraixh",
              ],
              knowsAbout: [
                "React.js", "Next.js", "Node.js", "TypeScript",
                "MongoDB", "MySQL", "Express.js", "Tailwind CSS",
                "ERP Dashboards", "E-commerce Development"
              ],
              description: "Full Stack Developer specializing in MERN stack, Next.js, React, and scalable web architectures.",
            }),
          }}
        />
      </body>
    </html>
  );
}