/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["http://172.30.16.1:3000"], // Replace with the origin of your frontend
  },
};

module.exports = nextConfig;