import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const basePath = isProd ? "/MaxRS07" : "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath,
  assetPrefix: isProd ? "/MaxRS07/" : "",
  // Plain <a href> to files in /public isn't prefixed by Next, so expose basePath
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
