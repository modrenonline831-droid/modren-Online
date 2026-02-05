const fs = require('fs')
const path = require('path')

console.log('🚀 بدء توليد ملفات SEO والإعدادات...')
console.log('⏱️ التاريخ:', new Date().toLocaleString('ar-EG'))

const baseUrl = 'https://modrenonline.com'
const currentDate = new Date().toISOString().split('T')[0]

// 1. إنشاء sitemap.xml
const pages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/portfolio/', priority: 0.9, changefreq: 'weekly' },
  { url: '/blog/', priority: 0.8, changefreq: 'weekly' },
  { url: '/blog/athath-modren-dumyat/', priority: 0.9, changefreq: 'monthly' },
  { url: '/about/', priority: 0.7, changefreq: 'monthly' },
  { url: '/contact/', priority: 0.6, changefreq: 'yearly' },
  { url: '/services/', priority: 0.8, changefreq: 'monthly' },
  { url: '/products/', priority: 0.8, changefreq: 'weekly' },
  { url: '/gallery/', priority: 0.7, changefreq: 'weekly' },
  { url: '/testimonials/', priority: 0.6, changefreq: 'monthly' },
]

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

pages.forEach(page => {
  const fullUrl = `${baseUrl}${page.url}`
  sitemapXml += `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
})

sitemapXml += '\n</urlset>'

// حفظ sitemap.xml
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemapXml)
console.log('✅ تم إنشاء sitemap.xml')

// 2. إنشاء robots.txt
const robotsTxt = `# روبوتات محركات البحث
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/

# السايت ماب
Sitemap: ${baseUrl}/sitemap.xml

# إعدادات إضافية
Crawl-delay: 10
Clean-param: ref /blog/

# محركات البحث العربية
User-agent: Baiduspider
Crawl-delay: 15

User-agent: YandexBot
Crawl-delay: 15`

fs.writeFileSync(path.join(__dirname, '../public/robots.txt'), robotsTxt)
console.log('✅ تم إنشاء robots.txt')

// 3. إنشاء .htaccess لأباشي (للاستضافات التي تدعمه)
const htaccess = `# ملف .htaccess لـ مودرن أونلاين
# إعدادات الأمان والتحسين

# حماية من XSS
<IfModule mod_headers.c>
    Header set X-XSS-Protection "1; mode=block"
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "DENY"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "camera=(), microphone=(), geolocation=()"
</IfModule>

# إعدادات الملفات
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
</IfModule>

# إعادة التوجيهات
Redirect 301 /index.html /
Redirect 301 /home /
Redirect 301 /index.php /

# ضغط GZIP
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# منع الوصول لملفات النظام
<FilesMatch "^\.">
    Order allow,deny
    Deny from all
</FilesMatch>

<FilesMatch "\.(log|md|txt|yml|yaml|json|lock)$">
    Order allow,deny
    Deny from all
</FilesMatch>`

fs.writeFileSync(path.join(__dirname, '../public/.htaccess'), htaccess)
console.log('✅ تم إنشاء .htaccess')

// 4. إنشاء netlify.toml (إذا كنت تستخدم Netlify)
const netlifyToml = `[build]
  publish = "out"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NEXT_PUBLIC_SITE_URL = "https://modrenonline.com"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosnify"
    X-XSS-Protection = "1; mode=block"

[[headers]]
  for = "/sitemap.xml"
  [headers.values]
    Content-Type = "application/xml"

[[headers]]
  for = "/robots.txt"
  [headers.values]
    Content-Type = "text/plain"`

fs.writeFileSync(path.join(__dirname, '../netlify.toml'), netlifyToml)
console.log('✅ تم إنشاء netlify.toml')

// 5. إنشاء _redirects (لـ Vercel وNetlify)
const vercelRedirects = `# إعادة التوجيهات اليدوية
/home              /               301
/index.html        /               301
/old-blog/*        /blog/:splat    301
/about-us          /about          301
/contact-us        /contact        301
/products/*        /products       301

# الصفحة 404
/*                 /404.html       404`

fs.writeFileSync(path.join(__dirname, '../public/_redirects'), vercelRedirects)
console.log('✅ تم إنشاء _redirects')

// 6. إنشاء _headers (لـ Vercel)
const vercelHeaders = `# أمان
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

# السايت ماب
/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=3600

# روبوتس
/robots.txt
  Content-Type: text/plain
  Cache-Control: public, max-age=3600

# الصور
/*.png
/*.jpg
/*.jpeg
/*.webp
  Cache-Control: public, max-age=31536000

# CSS وJS
/*.css
/*.js
  Cache-Control: public, max-age=31536000`

fs.writeFileSync(path.join(__dirname, '../public/_headers'), vercelHeaders)
console.log('✅ تم إنشاء _headers')

console.log('\n🎉 تم إنشاء جميع ملفات التحسين والأمان!')
console.log('📁 الملفات المنشأة:')
console.log('  • public/sitemap.xml')
console.log('  • public/robots.txt')
console.log('  • public/.htaccess (لأباشي)')
console.log('  • public/_redirects (لـ Vercel/Netlify)')
console.log('  • public/_headers (لـ Vercel)')
console.log('  • netlify.toml (لـ Netlify)')
console.log('\n📋 التعليمات:')
console.log('1. قم بالبناء: npm run build')
console.log('2. ارفع مجلد out/ إلى الاستضافة')
console.log('3. أرسل sitemap.xml لـ Google Search Console')