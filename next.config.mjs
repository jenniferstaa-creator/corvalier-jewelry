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
      { source: "/collections", destination: "/en/jewelry", permanent: true },
      {
        source: "/collections/:collection/:product",
        destination: "/en/jewelry/:product",
        permanent: true,
      },
      { source: "/collections/:collection", destination: "/en/jewelry", permanent: true },
      { source: "/engagement-wedding", destination: "/en/engagement", permanent: true },
      { source: "/:locale(en|sv)/engagement-wedding", destination: "/:locale/engagement", permanent: true },
    ];
  },
};

export default nextConfig;
