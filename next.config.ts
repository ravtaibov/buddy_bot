import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack uses the frontend directory as the workspace root
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
