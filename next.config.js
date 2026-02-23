/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',   // <-- علق عليه
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig