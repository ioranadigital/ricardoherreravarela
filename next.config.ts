import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  images: {
    // Allow external image domains if needed in the future
    remotePatterns: [],
  },
{
  source: '/r/:path*',
  destination: 'https://qr.iorana.dev/slug/ricardoherreravarela.com/:path*',
  permanent: false,
},
};
export default nextConfig;
 
