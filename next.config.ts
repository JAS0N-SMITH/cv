import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv", // Replace 'cv' with your repository name
  assetPrefix: "/cv/",
  trailingSlash: true,
};

export default nextConfig;
