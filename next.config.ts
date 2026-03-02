import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    // Add external image domains as needed
    remotePatterns: [
      // Uncomment and add domains for external images
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // Performance optimizations
  poweredByHeader: false,

  // Compression
  compress: true,

  // Strict mode for better debugging
  reactStrictMode: true,

  // Headers for security and caching
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // Cache static assets
        source: "/(.*).(ico|png|jpg|jpeg|gif|svg|woff|woff2)",
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
