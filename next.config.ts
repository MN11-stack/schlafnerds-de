import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/kids/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en-gb/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/nl/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kissentaxi",
        destination: "/",
        permanent: true,
      },
      {
        source: "/matratzenreinigung",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
