/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // Desactiva Turbopack para evitar problemas con SSG
  },
};

export default nextConfig;
