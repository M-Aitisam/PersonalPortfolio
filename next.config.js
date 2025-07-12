module.exports = {
  reactStrictMode: process.env.NODE_ENV === 'development', // Enable in dev
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**', // More specific path matching
      },
    ],
    minimumCacheTTL: 86400, // Cache images for 1 day
  },
  output: "standalone",
  // Optional optimizations:
  compress: true,
  productionBrowserSourceMaps: false,
  staticPageGenerationTimeout: 300,
  experimental: {
    optimizePackageImports: [
      '@fortawesome/free-brands-svg-icons',
      'reactstrap'
    ],
  },
};