import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Temporarily comment out basePath and assetPrefix for local development
  // basePath: "/cv", // Replace 'cv' with your repository name
  // assetPrefix: "/cv/",
  trailingSlash: true,
};

export default nextConfig;
