/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.stats = "errors-only"; // Показывать только ошибки
    return config;
  },
};

export default nextConfig;
