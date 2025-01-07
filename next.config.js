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

// next.config.js

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public", // This will output the service worker and manifest to the public folder
    register: true, // Automatically registers the service worker
    skipWaiting: true, // Skip the waiting phase for the service worker
  },
});
