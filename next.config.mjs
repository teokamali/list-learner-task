/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      formats: ["image/webp"],

      remotePatterns: [{ hostname: "dummyjson.com" }, { hostname: "picsum.photos" }],
   },
   env: {
      BASE_URL: process.env.BASE_URL,
   },
};

export default nextConfig;
