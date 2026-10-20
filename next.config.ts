import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/pages/about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/pages/case-study",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/blogs/case-studies/tarun-tahiliani",
        destination: "/work/tarun-tahiliani",
        permanent: true,
      },
      {
        source: "/blogs/case-studies/mahima-mahajan",
        destination: "/work/mahima-mahajan",
        permanent: true,
      },
      {
        source: "/blogs/case-studies/house-of-masaba",
        destination: "/work/house-of-masaba",
        permanent: true,
      },
      {
        source: "/blogs/case-studies/:slug*",
        destination: "/work/:slug*",
        permanent: true,
      },
      {
        source: "/pages/tech",
        destination: "/technology/partners",
        permanent: true,
      },
      {
        source: "/pages/careers",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pages/why-growify-digital",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blogs/the-scoop",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/pages/lookify",
        destination: "/technology/lookify",
        permanent: true,
      },
      {
        source: "/pages/referral-program",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/policies/terms-of-service",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/policies/refund-policy",
        destination: "/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
