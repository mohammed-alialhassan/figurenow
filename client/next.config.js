/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com', 'images.unsplash.com', 'www.mdanderson.org'],
  },
}

module.exports = nextConfig
