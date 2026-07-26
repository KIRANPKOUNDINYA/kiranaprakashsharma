/** @type {import('next').NextConfig} */

const repoName = "kiranaprakashsharma";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  // Use basePath only in production (GitHub Pages)
  basePath: isProd ? `/${repoName}` : "",

  // Use assetPrefix only in production
  assetPrefix: isProd ? `/${repoName}/` : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : "",
  },

  // Optional: removes the cross-origin warning in development
  allowedDevOrigins: ["10.21.137.148"],
};

export default nextConfig;