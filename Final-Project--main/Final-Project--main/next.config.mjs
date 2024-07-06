/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    
    domains: [
      "res.cloudinary.com",
      "img.daisyui.com",
      "localhost",
      "cdn-icons-png.flaticon.com",
      "avatars.githubusercontent.com",
    ],
  },
};

export default nextConfig;
