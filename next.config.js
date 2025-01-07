/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config options...

  // Add this to ensure admin files are copied to the build output
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};
// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  // your existing Next.js config
});
