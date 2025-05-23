/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http'
        hostname: "assets.nflxext.com",
        pathname: "**", // optional: allows all pathnames
      },
      {
        protocol: "https", // or 'http'
        hostname: "cdn.24h.com.vn",
        pathname: "**", // optional: allows all pathnames
      },
    ],
  },
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
