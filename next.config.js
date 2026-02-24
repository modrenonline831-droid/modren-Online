/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
<<<<<<< HEAD
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'vercel.app' },
      { protocol: 'https', hostname: '**.supabase.co' },
    ],
  },
  reactStrictMode: true,
}
=======
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  },
  reactStrictMode: true,
  output: 'standalone', // بدل export
}

>>>>>>> 199d54cc9971ba86d5d4515cc073472c7631b9e2
module.exports = nextConfig