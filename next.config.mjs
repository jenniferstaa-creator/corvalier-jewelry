/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      { source: "/collections", destination: "/jewelry", permanent: true },
      { source: "/collections/:collection/:product", destination: "/jewelry/:product", permanent: true },
      { source: "/collections/:collection", destination: "/jewelry", permanent: true },
    ];
  },
};

export default nextConfig;
