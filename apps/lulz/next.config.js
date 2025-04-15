/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@hash3/react',
  ],
  output: 'export',
  reactStrictMode: true,
};

module.exports = nextConfig