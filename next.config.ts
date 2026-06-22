import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production'

console.log("process.env: ", process.env)

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/creafico" : "",
  assetPrefix: isProd ? "/creafico/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
