import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    domains: ["apgtexoma.com", "ik.imagekit.io"],
  },
};

export default nextConfig;