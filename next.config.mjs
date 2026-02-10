/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sydneyoperahouse.com',
      },
      {
        protocol: 'https',
        hostname: 'img.mensxp.com',
      },
      {
        protocol: 'https',
        hostname: 'rukminim2.flixcart.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vice.com',
      },
      {
        protocol: 'https',
        hostname: 'meetmyself.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'blackhattalent.com',
      },
    ],
  },
};

export default nextConfig;

