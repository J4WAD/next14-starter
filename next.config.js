/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config options...

  // Add this to ensure admin files are copied to the build output
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
module.exports = nextConfig;
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
