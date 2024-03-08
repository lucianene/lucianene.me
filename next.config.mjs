/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // needed for html generation
  sassOptions: {
    includePaths: ['src/styles'],
  },
  images: {
    unoptimized: true,
    domains: ['avatars.githubusercontent.com'],
  },
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};

export default nextConfig;
