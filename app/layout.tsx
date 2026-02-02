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
  robots: {
    index: true,
    follow: true,
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
      </head>
      <body className={`${cairo.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main>{children}</main>

          <FloatingWhatsApp
            phoneNumber="+201015262864"
            message="مرحبا، حابب أستفسر عن الأسعار"
            companyName={SITE_NAME}
          />

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
