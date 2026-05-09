import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname)
  },
  async redirects() {
    return [{ source: "/patrocinadores", destination: "/aliados-estrategicos", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co"
      }
    ]
  }
};

export default nextConfig;
