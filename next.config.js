/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  experimental: {
    workerThreads: false,
    cpus: 1,
  }
};

export default nextConfig;
