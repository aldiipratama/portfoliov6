import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org'
      }
    ]
  }
};

export default nextConfig;
