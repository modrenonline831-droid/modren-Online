/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // إعدادات إضافية للتحسين
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig