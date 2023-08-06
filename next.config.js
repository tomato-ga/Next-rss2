/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rssphoto.s3-ap-northeast-1.amazonaws.com'],
  }
}

module.exports = nextConfig
