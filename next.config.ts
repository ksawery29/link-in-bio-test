import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [{ hostname: "links.levelupnation.online" }]
  }
};

export default nextConfig;
