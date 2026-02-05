import type { Metadata, Viewport } from "next"
import { Cairo, Tajawal } from "next/font/google"
import "./globals.css"

// خطوط عربية متوافقة
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
})

// الإعدادات الأساسية
const SITE_URL = "https://modrenonline.com"
const SITE_NAME = "مودرن أونلاين"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a365d" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: `${SITE_NAME} | أثاث منزلي دمياطي مودرن - ضمان 5 سنوات`,
    template: `%s | ${SITE_NAME}`,
  },
  
  description: `متجر ${SITE_NAME} للأثاث الدمياطي المودرن. مجموعات ركن فاخرة، كنب، غرف نوم، طاولات طعام، خزانات ملابس. خشب زان طبيعي، ضمان 5 سنوات، توصيل لجميع المحافظات.`,
  
  keywords: [
    "أثاث دمياطي",
    "أثاث منزلي دمياطي",
    "مجموعات ركن دمياطي",
    "كنب مودرن دمياطي",
    "غرف نوم دمياطي",
    "أثاث مصري",
    "ضمان 5 سنوات أثاث",
    "توصيل أثاث دمياطي",
    "مودرن أونلاين",
  ],
  
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | أثاث منزلي دمياطي مودرن`,
    description: "أثاث منزلي دمياطي مودرن مع مجموعات ركن فاخرة بضمان 5 سنوات",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - أثاث منزلي مودرن`,
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | أثاث منزلي دمياطي مودرن`,
    description: "أثاث منزلي دمياطي مودرن مع مجموعات ركن فاخرة بضمان 5 سنوات",
    images: ["/og-image.jpg"],
  },
  
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD مبسط بدون منتجات - تعريف المتجر فقط
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${SITE_URL}/#store`,
  "name": SITE_NAME,
  "description": "متجر أثاث منزلي دمياطي متخصص في الأثاث المودرن ومجموعات الركن بضمان 5 سنوات",
  "url": SITE_URL,
  "telephone": "+201015262864",
  "email": "info@modrenonline.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "دمياط",
    "addressRegion": "دمياط",
    "addressCountry": "EG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.4167,
    "longitude": 31.8167
  },
  "openingHours": "Mo-Su 09:00-22:00",
  "priceRange": "$$",
  "image": `${SITE_URL}/og-image.jpg`,
  "sameAs": [
    "https://facebook.com/modrenonline",
    "https://tiktok.com/@modrenonline"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* JSON-LD بدون منتجات - فقط تعريف المتجر */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      
      <body className={`${cairo.className} min-h-screen bg-gray-50 text-gray-900`}>
        {children}
        
        {/* زر واتساب عائم بسيط */}
        <a 
          href="https://wa.me/201015262864"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <span className="text-xl">💬</span>
          <span className="hidden sm:inline">واتساب</span>
        </a>
      </body>
    </html>
  )
}