/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, path: false, crypto: false };
    config.module.rules.push({ test: /\.(md|mdx)$/, type: 'asset/source' });
    return config;
  },
};

export default nextConfig;
