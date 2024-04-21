/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
export const baseUrl = isProd ? "/rent_car_business" : "";

const nextConfig = {
  distDir: "dist",
  assetPrefix: baseUrl,
  basePath: baseUrl,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
