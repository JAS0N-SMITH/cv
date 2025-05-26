import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cv",
  assetPrefix: "/cv/",
  trailingSlash: true,
};

export default nextConfig;
