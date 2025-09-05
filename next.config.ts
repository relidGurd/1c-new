import type { NextConfig } from "next";
import { strapi_site_url } from "./test";

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
