/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // unoptimized: true, // يمكنك إلغاء التعليق إذا كنت تواجه مشاكل في تحسين الصور
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co', // يسمح بصور Supabase Storage
      },
      // أضف أي نطاقات أخرى تحتاجها، مثل:
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      // },
    ],
  },
  reactStrictMode: true,
  // output: 'standalone', // تمت إزالته – لا يُستخدم مع Vercel
}

module.exports = nextConfig