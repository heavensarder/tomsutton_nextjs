import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'images.unsplash.com' }
    ],
  },
  async redirects() {
    return [
      {
        source: '/book-services-online',
        destination: 'https://book.servicem8.com/request_service_online_booking?strVendorUUID=b00bca15-4f6a-44c6-8974-1b55a86bb7cb',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
