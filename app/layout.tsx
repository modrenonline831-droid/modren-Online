import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Modren Online | أثاث مودرن راقي من دمياط",
    template: "%s | Modren Online",
  },
  description:
    "مودرن أونلاين – مصنع أثاث مودرن من دمياط يقدم انتريهات، كنب، كراسي، غرف نوم وسفرة بتصميمات راقية وخامات عالية الجودة. تصنيع محلي، تشطيب فاخر، وأسعار مناسبة.",
  keywords: [
    // أساسية
    "أثاث",
    "أثاث مودرن",
    "أثاث منزلي",
    "أثاث راقي",
    "مصانع أثاث",

    // دمياط
    "أثاث دمياط",
    "مصانع دمياط",
    "أثاث دمياط مودرن",
    "ورش أثاث دمياط",

    // منتجات
    "انتريه",
    "انتريهات مودرن",
    "كنب",
    "كنب مودرن",
    "كراسي",
    "كراسي مودرن",
    "أثاث مغلف",
    "غرف نوم",
    "غرف سفرة",
    "صالونات",
    "ركنات",

    // خامات وتشطيب
    "خشب زان",
    "خشب طبيعي",
    "تشطيب راقي",
    "تفصيل أثاث",
    "تصميم أثاث",

    // تجاري
    "شراء أثاث",
    "سعر انتريه",
    "أفضل مصنع أثاث",
    "أثاث مودرن في مصر",

    // براند
    "Modren Online",
    "مودرن أونلاين",
  ],
  applicationName: "Modren Online",
  authors: [{ name: "Modren Online Furniture" }],
  creator: "Modren Online",
  publisher: "Modren Online",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
