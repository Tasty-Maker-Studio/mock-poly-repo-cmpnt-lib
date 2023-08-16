/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'burst.shopifycdn.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ]
  }
};
