/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  // Required for static export (replaces 'next export')
  output: 'export',
  
  // Image optimization (must be disabled for static export)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },

  // Build configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Remove redirects/rewrites (not supported with static export)
  // redirects: async () => [],
  // rewrites: async () => [],

  // Enable trailing slashes for better compatibility
  trailingSlash: true,

  // (Optional) Add webpack config if needed
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
};

module.exports = nextConfig;