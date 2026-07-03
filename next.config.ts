import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      {
        source: '/r/:path*',
        destination: 'https://qr.iorana.dev/slug/ricardoherreravarela.com/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;