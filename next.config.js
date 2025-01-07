/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,

  // PWA configuration
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },

  // Webpack configuration
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

  // Rewrites configuration
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
