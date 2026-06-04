/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Local editorial SVGs in /public/images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/collections", destination: "/jewelry", permanent: true },
      {
        source: "/collections/:collection/:product",
        destination: "/jewelry/:product",
        permanent: true,
      },
      { source: "/collections/:collection", destination: "/jewelry", permanent: true },
    ];
  },
};

export default nextConfig;
