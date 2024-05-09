/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Add other domains if needed
    domains: ["ik.imagekit.io"], // Add other domains if needed
  },

  env: {

  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
