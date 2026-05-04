import type { NextConfig } from "next";
const repoName = "manghyi";

const nextConfig: NextConfig = {
  output: "export",          // 정적 export
  basePath: `/${repoName}`, 
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,     // ✅ next/image 사용 시 필수
  },
};

export default nextConfig;
