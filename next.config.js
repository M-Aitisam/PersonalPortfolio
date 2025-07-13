/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Essential for static export (Cloudflare Pages)
  output: 'export',
  
  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '**', // Allow all paths under this hostname
      },
      // Add other domains you use (e.g., for portfolio images)
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },

  // Build-time configurations
  eslint: {
    ignoreDuringBuilds: true, // Disable if ESLint errors are resolved
  },
  typescript: {
    ignoreBuildErrors: true, // Disable if TypeScript errors are resolved
  },

  // Optional: Add basePath if deploying to a subdirectory (e.g., /portfolio)
  // basePath: '/portfolio',

  // Enable trailing slashes for better compatibility
  trailingSlash: true,

  // (Optional) Redirects/rewrites for static export
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  }
};

module.exports = nextConfig;
