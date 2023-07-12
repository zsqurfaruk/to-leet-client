/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
    workerThreads: true,
    fs: false,
  },
};

module.exports = nextConfig;
