/** @type {import('next').NextConfig} */
const nextConfig = {
  // Core Settings
  reactStrictMode: true,
  output: 'export', // Required for Cloudflare Pages
  trailingSlash: true, // Recommended for static exports
  
  // Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
        port: ''
      },
    ],
    unoptimized: true, // Required for static exports
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Performance Optimizations
  compress: true,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 300,

  // Cloudflare-Specific Optimizations
  experimental: {
    optimizePackageImports: [
      '@fortawesome/free-brands-svg-icons',
      'reactstrap',
      'lottie-react'
    ],
    optimizeCss: true,
  },

  // Build Configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Logging
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

// Only add headers if not exporting (for development)
if (process.env.NODE_ENV !== 'production' || process.env.NEXT_OUTPUT !== 'export') {
  nextConfig.headers = async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ],
    },
  ];
}

module.exports = nextConfig;