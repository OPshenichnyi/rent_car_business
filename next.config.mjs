/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
export const baseUrl = isProd ? "/rent_car_business" : "";

const nextConfig = {
  basePath: baseUrl,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
