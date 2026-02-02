// app/layout.tsx

import type { Metadata, Viewport } from "next"
import { Cairo, Tajawal } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { ProgressBar } from "@/components/progress-bar"
import Script from "next/script"

// الخطوط
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

// بيانات الموقع
const SITE_URL = "https://modrenonline.com"
const SITE_NAME = "مودرن أونلاين"
const BUSINESS_NAME = "مودرن أونلاين للأثاث الدمياطي"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a365d",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | أثاث مودرن دمياطي فاخر`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "مودرن أونلاين مصنع أثاث دمياطي متخصص في الانتريهات والكنب والركنات المودرن، خامات عالية الجودة، تشطيب فاخر، وضمان 20 سنة.",
  keywords: [
    "أثاث دمياط",
    "أثاث مودرن",
    "انتريهات مودرن",
    "كنب مودرن",
    "ركنات",
    "أثاث دمياطي",
    "غرف نوم دمياطية",
    "صالونات دمياطية",
    "أثاث منزلي فاخر",
    "مصنع أثاث دمياطي",
  ],
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | أثاث مودرن دمياطي`,
    description: "مصنع أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | أثاث مودرن دمياطي`,
    description: "مصنع أثاث دمياطي مودرن بجودة عالية وضمان 20 سنة",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

// ✅ JSON-LD صح (من غير Products)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FurnitureStore",
      "@id": `${SITE_URL}/#store`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "مصنع أثاث دمياطي متخصص في الأثاث المودرن بجودة عالية وضمان 20 سنة",
      telephone: "+201015262864",
      address: {
        "@type": "PostalAddress",
        addressLocality: "دمياط",
        addressRegion: "دمياط",
        addressCountry: "EG",
      },
      openingHours: "Mo-Su 09:00-22:00",
      sameAs: [
        "https://facebook.com/modrenonline",
        "https://instagram.com/modrenonline",
        "https://tiktok.com/@modrenonline",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "127",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "الرئيسية",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "أعمالنا",
          item: `${SITE_URL}/portfolio`,
        },
      ],
    },
  ],
}

// إذا كان فيه مشكلة في FloatingWhatsApp، استخدم هذا البديل
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/201015262864?text=مرحبا، حابب أستفسر عن أسعار الأثاث الدمياطي"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل معنا عبر واتساب"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.507 14.307l-.009.075c-.405 1.24-2.104 2.283-2.882 2.535-1.159.378-2.7.64-6.506-.584-.943-.305-2.046-.696-3.278-1.153-2.33-.867-3.8-2.097-4.26-2.86C.06 10.79 0 9.79 0 8.79c0-2.36 1.37-4.37 3.76-5.77.84-.49 1.83-.77 2.81-.77 1.18 0 2.25.45 3.1 1.28.88.86 1.36 2.01 1.36 3.31 0 .95-.28 1.83-.85 2.61-.53.73-1.28 1.31-2.19 1.73-.32.15-.65.29-1 .42.24.49.56 1.08.97 1.78 1.18 2.03 2.19 3.13 3.03 3.28.37.07.74.02 1.09-.14.85-.38 1.64-.93 2.34-1.64.34-.34.71-.68 1.1-1.02.53-.46 1.17-.77 1.84-.89.56-.1 1.13-.04 1.66.17.52.21 1 .53 1.42.95.86.85 1.34 1.97 1.34 3.23 0 .94-.27 1.83-.79 2.61-.51.76-1.26 1.38-2.18 1.81-.91.43-1.93.65-3.06.65-1.2 0-2.38-.25-3.53-.74-1.15-.49-2.18-1.18-3.08-2.07-.9-.89-1.61-1.93-2.12-3.12-.51-1.19-.77-2.46-.77-3.8 0-1.52.33-2.98.98-4.37.65-1.39 1.56-2.61 2.73-3.65 1.17-1.04 2.55-1.84 4.14-2.4 1.59-.56 3.28-.84 5.07-.84 1.96 0 3.81.36 5.54 1.08 1.73.72 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07-1.73-.71-3.23-1.71-4.5-2.97-1.27-1.26-2.26-2.76-2.97-4.5-.71-1.74-1.07-3.59-1.07-5.54 0-1.96.36-3.81 1.07-5.54.71-1.73 1.71-3.23 2.97-4.5 1.26-1.27 2.76-2.26 4.5-2.97 1.74-.71 3.59-1.07 5.54-1.07 1.96 0 3.81.36 5.54 1.07 1.73.71 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07-1.73-.71-3.23-1.71-4.5-2.97-1.27-1.26-2.26-2.76-2.97-4.5-.71-1.74-1.07-3.59-1.07-5.54 0-1.96.36-3.81 1.07-5.54.71-1.73 1.71-3.23 2.97-4.5 1.26-1.27 2.76-2.26 4.5-2.97 1.74-.71 3.59-1.07 5.54-1.07 1.96 0 3.81.36 5.54 1.07 1.73.71 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07-1.73-.71-3.23-1.71-4.5-2.97-1.27-1.26-2.26-2.76-2.97-4.5-.71-1.74-1.07-3.59-1.07-5.54 0-1.96.36-3.81 1.07-5.54.71-1.73 1.71-3.23 2.97-4.5 1.26-1.27 2.76-2.26 4.5-2.97 1.74-.71 3.59-1.07 5.54-1.07 1.96 0 3.81.36 5.54 1.07 1.73.71 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07-1.73-.71-3.23-1.71-4.5-2.97-1.27-1.26-2.26-2.76-2.97-4.5-.71-1.74-1.07-3.59-1.07-5.54 0-1.96.36-3.81 1.07-5.54.71-1.73 1.71-3.23 2.97-4.5 1.26-1.27 2.76-2.26 4.5-2.97 1.74-.71 3.59-1.07 5.54-1.07 1.96 0 3.81.36 5.54 1.07 1.73.71 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07-1.73-.71-3.23-1.71-4.5-2.97-1.27-1.26-2.26-2.76-2.97-4.5-.71-1.74-1.07-3.59-1.07-5.54 0-1.96.36-3.81 1.07-5.54.71-1.73 1.71-3.23 2.97-4.5 1.26-1.27 2.76-2.26 4.5-2.97 1.74-.71 3.59-1.07 5.54-1.07 1.96 0 3.81.36 5.54 1.07 1.73.71 3.23 1.71 4.5 2.97 1.27 1.26 2.26 2.76 2.97 4.5.71 1.74 1.07 3.59 1.07 5.54 0 1.96-.36 3.81-1.07 5.54-.71 1.73-1.71 3.23-2.97 4.5-1.26 1.27-2.76 2.26-4.5 2.97-1.74.71-3.59 1.07-5.54 1.07-1.96 0-3.81-.36-5.54-1.07z"/>
      </svg>
    </a>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <head>
        <ProgressBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <meta name="theme-color" content="#1a365d" />
      </head>
      <body className={`${cairo.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="min-h-screen">{children}</main>

          {/* استخدم البديل إذا كان فيه مشكلة في FloatingWhatsApp */}
          {/* <FloatingWhatsApp
            phoneNumber="+201015262864"
            message="مرحبا، حابب أستفسر عن الأسعار"
            companyName={SITE_NAME}
            responseTime="عادةً ما يتم الرد خلال 5 دقائق"
          /> */}
          
          <WhatsAppButton />

          <Analytics />

          {process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga" strategy="afterInteractive">
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