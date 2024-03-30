/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "img.freepik.com",
      "purepng.com",
      "image.pngaaa.com",
      "freepngimg.com",
    ],
  },
  experimental: {
    fallbackNodePolyfills: false,
  },
};

export default nextConfig;
