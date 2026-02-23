import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  // Output configuration for GoDaddy static deployment
  // Uncomment below for static export:
  // output: "export",
  // trailingSlash: true,

  // Performance
  compress: true,
  poweredByHeader: false,

  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
