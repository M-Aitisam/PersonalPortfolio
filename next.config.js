/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true // Temporary during fixes
  },
  typescript: {
    ignoreBuildErrors: true // Temporary during fixes
  }
};

module.exports = nextConfig;