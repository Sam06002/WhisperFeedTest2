import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable Turbopack for faster development builds
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // Enable SWC minifier for better performance
  swcMinify: true,
  // Optimize images
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // Enable strict mode for better development experience
  compiler: {
    removeConsole: false, // Keep console logs for development
  },
};

export default nextConfig;
