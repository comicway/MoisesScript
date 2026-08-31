/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  // Optimize compilation for modern browsers
  output: 'standalone',
  compiler: {
    // Remove unnecessary React properties in production
    reactRemoveProperties: true,
    // Optimize CSS and remove unused styles
    styledComponents: true,
    // Enable modern JS optimizations
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
