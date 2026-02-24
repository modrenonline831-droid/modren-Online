/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'vercel.app' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  reactStrictMode: true,
}
module.exports = nextConfig