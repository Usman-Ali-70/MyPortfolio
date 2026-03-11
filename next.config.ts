import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
    ],
    qualities: [70, 75, 80, 85, 90],
    formats: ["image/avif", "image/webp"],
  },
  // Enable gzip/brotli compression headers
  compress: true,
  // Optimize package imports to reduce bundle size
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "react-countup",
    ],
  },
  // Security & performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(png|jpg|jpeg|gif|svg|ico|webp|avif|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;