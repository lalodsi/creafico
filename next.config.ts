import type { NextConfig } from "next";
import { basePath } from "./src/types/assets";

console.log("process.env: ", process.env)

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
