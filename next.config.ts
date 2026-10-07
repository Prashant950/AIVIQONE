import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/terms",
        destination: "/legal/terms",
        permanent: true,
      },
      {
        source: "/refund-policy",
        destination: "/legal/refund-policy",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/legal/cookie-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
