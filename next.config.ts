import type { NextConfig } from "next";
export const repoName = "manghyi";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",          // 정적 export
  basePath: isProd ? `/${repoName}` : "", 
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,     // ✅ next/image 사용 시 필수
  },
   env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },
};

export default nextConfig;
