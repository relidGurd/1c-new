import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.1c-future.ru",
      },
    ],
  },
};

export default nextConfig;
