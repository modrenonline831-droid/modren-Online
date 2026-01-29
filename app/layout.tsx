import type { Metadata, Viewport } from "next"
import { Cairo, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// تم إزالة SpeedInsights مؤقتاً لحل مشكلة البناء
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ProgressBar } from "@/components/progress-bar"
import Script from "next/script"

// خطوط عربية متوافقة
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
})

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
  preload: true,
})

// الإعدادات الأساسية
const SITE_URL = "https://modrenonline.com"
const SITE_NAME = "مودرن أونلاين"
const BUSINESS_NAME = "مودرن أونلاين للأثاث الدمياطي"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1a365d" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  colorScheme: "light dark",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  // العنوان الرئيسي
  title: {
    default: `${SITE_NAME} | أثاث مودرن دمياطي فاخر بضمان 20 سنة`,
    template: `%s | ${SITE_NAME}`,
  },
  
  // الوصف الشامل
  description: `${SITE_NAME} - مصنع أثاث دمياطي يقدم انتريهات، كنب، غرف نوم، طاولات طعام وخزانات بتصميمات مودرن عالية الجودة. خشب زان طبيعي، تشطيب فاخر، ضمان 20 سنة، وتوصيل لجميع محافظات مصر. صنع في مصر بأيدي حرفيين دمياط.`,
  
  // الكلمات المفتاحية
  keywords: [
    "أثاث دمياط", "أثاث مودرن", "مصنع أثاث دمياطي", "أثاث منزلي", "كنب مودرن",
    "غرف نوم", "انتريهات", "أثاث راقي", "خشب زان", "ضمان 20 سنة",
    "أثاث دمياطي أصلي", "أثاث حسب الطلب", "توصيل أثاث", "أثاث أونلاين",
    "مودرن أونلاين", "Modern Online", "أثاث مودرن دمياط", "أثاث فاخر",
  ],
  
  // معلومات عامة
  applicationName: SITE_NAME,
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | أثاث مودرن دمياطي فاخر`,
    description: "أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة - صنع في مصر بأيدي حرفيين دمياط",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - أثاث دمياطي مودرن`,
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | أثاث مودرن دمياطي فاخر`,
    description: "أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة",
    images: ["/twitter-image.jpg"],
    creator: "@modrenonline",
    site: "@modrenonline",
  },
  
  // الروابط المتعارف عليها
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-EG": SITE_URL,
    },
  },
  
  // الأيقونات
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  
  // Manifest
  manifest: "/manifest.json",
  
  // SEO الأساسي
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // التصنيف
  category: "furniture",
}

// تعريفات JSON-LD المهمة للسيو
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FurnitureStore",
      "@id": `${SITE_URL}/#store`,
      "name": SITE_NAME,
      "description": "مصنع أثاث دمياطي متخصص في الأثاث المودرن بضمان 20 سنة",
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "telephone": "+201015262864",
      "email": "info@modrenonline.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "مركز دمياط",
        "addressLocality": "دمياط",
        "addressRegion": "دمياط",
        "addressCountry": "EG",
        "postalCode": "34511"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 31.4167,
        "longitude": 31.8167
      },
      "openingHours": ["Mo-Su 09:00-22:00"],
      "priceRange": "$$",
      "image": `${SITE_URL}/og-image.jpg`,
      "sameAs": [
        "https://facebook.com/modrenonline",
        "https://instagram.com/modrenonline",
        "https://tiktok.com/@modrenonline"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "ركنة ميكانيزم",
            "description": "ركنة ميكانيزم من خشب الزان الأحمر المستورد",
            "category": "أثاث معيشة"
          },
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "EGP",
            "price": "5500"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "غرف نوم كاملة",
            "description": "غرف نوم مودرن من خشب الزان الطبيعي",
            "category": "أثاث غرف نوم"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": SITE_URL
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": SITE_NAME,
      "description": "أثاث مودرن دمياطي فاخر",
      "potentialAction": [{
        "@type": "SearchAction",
        "target": `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }]
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`${cairo.variable} ${tajawal.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* تحسينات الهيد الأساسية */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect للموارد الخارجية */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* منع فهرسة بيئات التطوير */}
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        
        {/* إضافة شريط التقدم */}
        <ProgressBar />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          key="structured-data"
        />
      </head>
      
      <body 
        className={`
          font-sans 
          antialiased 
          min-h-screen 
          bg-background 
          text-foreground 
          ${cairo.className}
          selection:bg-primary/20
          overflow-x-hidden
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="modrenonline-theme"
        >
          {/* المحتوى الرئيسي */}
          <main className="flex-1">
            {children}
          </main>
          
          {/* زر الواتساب العائم */}
          <FloatingWhatsApp 
            phoneNumber="+201015262864" 
            message="مرحبا، أنا مهتم بمنتجاتكم وأريد الاستفسار عن الأسعار"
            companyName={SITE_NAME}
            responseTime="5 دقائق"
          />
          
          {/* تحليلات Vercel */}
          <Analytics />
          {/* SpeedInsights مشغل مؤقتاً لحل مشكلة البناء */}
          
          {/* Google Analytics (معلق مؤقتاً) */}
          {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `}
              </Script>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}