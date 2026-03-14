import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/MaxRS07" : "",
  assetPrefix: isProd ? "/MaxRS07/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
