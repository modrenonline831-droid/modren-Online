import type React from "react"
import type { Metadata } from "next"
import { Cairo, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

// خطوط عربية متوافقة
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
})

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
})

export const metadata: Metadata = {
  // العنوان الرئيسي
  title: {
    default: "مودرن أونلاين | أثاث مودرن راقي من دمياط بأسعار مناسبة",
    template: "%s | مودرن أونلاين",
  },
  
  // الوصف الشامل
  description: "مودرن أونلاين – مصنع أثاث مودرن دمياطي يقدم انتريهات، كنب، كراسي، غرف نوم وسفرة بتصميمات راقية وخامات عالية الجودة. تصنيع يدوي محلي، تشطيب فاخر، ضمان 20 سنة، وأسعار تنافسية. شاهد كتالوجنا الآن!",
  
  // الكلمات المفتاحية الشاملة
  keywords: [
    // أساسية
    "أثاث", "أثاث مودرن", "أثاث منزلي", "أثاث راقي", "مصانع أثاث", "أثاث دمياط",
    
    // دمياط
    "أثاث دمياط", "مصانع دمياط", "أثاث دمياط مودرن", "ورش أثاث دمياط", "دمياط للأثاث",
    "أثاث دمياط جودة", "تصنيع أثاث دمياط", "حرفيين دمياط", "أثاث دمياط أصلي",
    
    // منتجات رئيسية
    "انتريه", "انتريهات مودرن", "كنب", "كنب مودرن", "كراسي", "كراسي مودرن",
    "أثاث مغلف", "غرف نوم", "غرف سفرة", "صالونات", "ركنات", "فوتية",
    "طرابيزات", "جزمات", "مكاتب", "أثاث مكتبي", "أنترية مغلف", "ركن",
    
    // خامات وتشطيب
    "خشب زان", "خشب طبيعي", "خشب زان أحمر", "خشب مستورد", "تشطيب راقي",
    "تفصيل أثاث", "تصميم أثاث", "تصميم داخلي", "ديكور", "أثاث حسب الطلب",
    "أثاث مخصص", "تصنيع حسب المقاس", "أثاث يدوي الصنع", "حرفية يدوية",
    
    // جودة وضمان
    "ضمان 20 سنة", "جودة عالية", "أثاث متين", "أثاث يدوم", "صيانة مجانية",
    "توصيل وتركيب", "خدمة ما بعد البيع", "ضمان ضد العيوب",
    
    // تجاري
    "شراء أثاث", "سعر انتريه", "أسعار أثاث", "أفضل مصنع أثاث", "أثاث مودرن في مصر",
    "أثاث بأسعار مناسبة", "تخفيضات أثاث", "عروض أثاث", "أثاث أونلاين",
    "طلب أثاث أونلاين", "تسوق أثاث", "متجر أثاث",
    
    // براند
    "Modren Online", "مودرن أونلاين", "Modern Online", "موردن أونلاين",
    
    // لوجستي
    "توصيل أثاث", "تركيب أثاث", "شحن مجاني", "توصيل لجميع المحافظات",
    "أثاث للمنازل", "أثاث للشقق", "أثاث للمكاتب", "أثاث للفنادق",
    
    // تصنيفات إضافية
    "أثاث كلاسيك", "أثاث عصري", "أثاث فاخر", "أثاث اقتصادي", "أثاث عملي",
    "أثاث صغير", "أثاث كبير", "أثاث متعدد الاستخدامات", "أثاث موديولار",
  ],
  
  // معلومات عامة
  applicationName: "مودرن أونلاين - أثاث دمياطي مودرن",
  authors: [
    { 
      name: "مودرن أونلاين", 
      url: "https://modren-online.vercel.app" 
    }
  ],
  creator: "مودرن أونلاين للأثاث الدمياطي",
  publisher: "Modern Online Furniture Factory",
  generator: "Next.js 14",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // الروابط المفتوحة
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://modren-online.vercel.app",
    siteName: "مودرن أونلاين",
    title: "مودرن أونلاين | أثاث مودرن راقي من دمياط",
    description: "أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة - انتريهات، كنب، كراسي، وأكثر",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "مودرن أونلاين - أثاث دمياطي مودرن",
      },
    ],
  },
  
  // تويتر
  twitter: {
    card: "summary_large_image",
    title: "مودرن أونلاين | أثاث مودرن راقي من دمياط",
    description: "أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة",
    images: ["/twitter-image.jpg"],
    creator: "@modrenonline",
  },
  
  // الروابط المتعارف عليها
  alternates: {
    canonical: "https://modren-online.vercel.app",
    languages: {
      "ar-EG": "https://modren-online.vercel.app",
    },
  },
  
  // الايقونات
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
  
  // ألوان المتصفح
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4F46E5" },
    { media: "(prefers-color-scheme: dark)", color: "#6366F1" },
  ],
  
  // مانيفست
  manifest: "/manifest.json",
  
  // فيروسات
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
  },
  
  // أخرى
  category: "furniture",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

// مكون زر واتساب عائم
const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/201015262864?text=مرحبا، أنا مهتم بمنتجاتكم وأريد الاستفسار عن الأسعار"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group"
    aria-label="تواصل عبر واتساب"
  >
    <div className="relative">
      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-20"></div>
      <div className="text-2xl">💬</div>
    </div>
    <div className="hidden md:block">
      <div className="font-bold text-sm">تواصل عبر واتساب</div>
      <div className="text-xs opacity-90">رد خلال 5 دقائق</div>
    </div>
    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
  </a>
)

// مكون شريط تحميل
const LoadingBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary animate-loading-bar"></div>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`} suppressHydrationWarning>
      <head>
        {/* تحسينات إضافية للرأس */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* خطوط الويب */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* منع محركات البحث من فهرسة بيئات التطوير */}
        {process.env.NODE_ENV === 'development' && (
          <meta name="robots" content="noindex, nofollow" />
        )}
        
        {/* شريط التقدم */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes loading-bar {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(100%); }
            }
            .animate-loading-bar {
              animation: loading-bar 2s ease-in-out infinite;
            }
            
            /* تحسينات الأداء */
            * {
              scroll-behavior: smooth;
            }
            
            /* تحسينات للغة العربية */
            body {
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          `
        }} />
      </head>
      
      <body className={`font-sans antialiased min-h-screen bg-background text-foreground ${cairo.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* شريط التحميل */}
          <LoadingBar />
          
          {/* المحتوى الرئيسي */}
          {children}
          
          {/* زر واتساب عائم */}
          <FloatingWhatsAppButton />
          
          {/* تحليلات وإحصائيات */}
          <Analytics />
          
          {/* Structured Data لتحسين SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FurnitureStore",
                "name": "مودرن أونلاين",
                "description": "مصنع أثاث مودرن دمياطي يقدم أثاث عالي الجودة بضمان 20 سنة",
                "url": "https://modren-online.vercel.app",
                "logo": "https://modren-online.vercel.app/logo.png",
                "telephone": "+201015262864",
                "email": "info@modren-online.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "مركز دمياط، باب الحرس",
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
                "openingHours": [
                  "Mo-Th 09:00-22:00",
                  "Fr 13:00-22:00",
                  "Sa-Su 09:00-22:00"
                ],
                "priceRange": "$$",
                "sameAs": [
                  "https://facebook.com/modrenonline",
                  "https://tiktok.com/@modren.online"
                ],
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "منتجات الأثاث",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "انتريهات مودرن"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "كنب مودرن"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Product",
                        "name": "كراسي مودرن"
                      }
                    }
                  ]
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "127"
                }
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}