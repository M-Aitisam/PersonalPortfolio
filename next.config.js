module.exports = {
  // Better to always enable Strict Mode for React 18+ best practices
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
        // Add port explicitly (even if empty string)
        port: ''
      },
    ],
    // Reduce cache TTL for more frequent updates
    minimumCacheTTL: 3600, // 1 hour instead of 1 day
    // Add device sizes for better responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  output: "standalone",
  
  // Production optimizations
  compress: true,
  productionBrowserSourceMaps: false, 
  staticPageGenerationTimeout: 300,
  
  // Security headers
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ],
    },
  ],
  
  // Temporary build overrides (remove after fixing issues)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  experimental: {
    optimizePackageImports: [
      '@fortawesome/free-brands-svg-icons',
      'reactstrap',
      // Add other heavy packages you use
      'lottie-react'
    ],
    // Enable modern optimizations
    optimizeServerReact: true,
    optimizeCss: true,
  },
  
  // Better logging
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};