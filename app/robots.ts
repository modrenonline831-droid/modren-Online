export const dynamic = 'force-static'

mport { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // نمنع الصفحات الخاصة
      disallow: ['/admin/', '/api/', '/dashboard/', '/private/'],
    },
    sitemap: 'https://modrenonline.com/sitemap.xml',
    host: 'https://modrenonline.com',
  }
}