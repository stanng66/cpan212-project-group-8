/** @type {import('next').NextConfig} */
const API_ORIGIN = process.env.API_ORIGIN;

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_ORIGIN}/api/:path*`,
      },
    ];
  },
  /* config options here (default from setting up Next.js) */ // Can remove if not needed
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
