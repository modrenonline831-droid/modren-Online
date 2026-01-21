"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const portfolioItems = [
  {
    id: 1,
    title: "طقم روسكي",
    category: "أنترية مغلف",
    description: "مكون من 4 قطع 2 كنب 2 فوتية",
    image: "/1515.jpg",
    images: ["/1515.jpg", "/1516.jpg", "/3224.jpg", "/4456.jpg", "/5928.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 30000,
    priceNew: 25000,
    discount: "20%",
  },
  {
    id: 2,
    title: "طقم بلو باك",
    category: "أنترية مغلف",
    description: "مكون من 4 قطع 2 منبة 2 فوتية",
    image: "/momo.jpg",
    images: ["/momo.jpg", "/refo.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 28500,
    priceNew: 24500,
    discount: "15%",
  },
  {
    id: 3,
    title: "طقم بلو باك",
    category: "ركن",
    description: "ركنة مكانيزم 2*3",
    image: "/8879.jpg",
    images: ["/8879.jpg", "/98609.jpg", "/0099.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 28300,
    priceNew: 23800,
    discount: "16%",
  },
  {
    id: 4,
    title: "ركنة بلو باك",
    category: "ركن",
    description: "ركنة بابلز مقاس 2*3",
    image: "/2345.jpg",
    images: ["/2345.jpg", "/5647.jpg", "/7777.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 26000,
    priceNew: 22000,
    discount: "15%",
  },
  {
    id: 5,
    title: "ركنة بابلز",
    category: "ركن",
    description: "ركنة بابلز مقاس 2*3",
    image: "/9987.jpg",
    images: ["/9987.jpg", "/0934.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 28300,
    priceNew: 25000,
    discount: "10%",
  },
  {
    id: 6,
    title: "طقم أنترية مودرن",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 2 فوتية",
    image: "/zezo.jpg",
    images: ["/zezo.jpg", "/kkj.jpg", "/zezoo.jpg", "/008866.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 23000,
    priceNew: 20000,
    discount: "13%",
  },
  {
    id: 7,
    title: "انترية لاريكس",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 1 فوتية",
    image: "/amr.jpg",
    images: ["/amr.jpg", "/09km.jpg", "/moon.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 26000,
    priceNew: 22500,
    discount: "13%",
  },
  {
    id: 9,
    title: "طرابيزة الريشة",
    category: "طرابيزات",
    description: "من طرابيزة متفرغة علي شكل ريشة",
    image: "/n1.jpg",
    images: ["/n1.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 8000,
    priceNew: 4000,
    discount: "50%",
  },
  {
    id: 10,
    title: "طرابيزة قطعتين",
    category: "طرابيزات",
    description: "طرابيزة زان كبس",
    image: "/zse.jpg",
    images: ["/zse.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 5500,
    priceNew: 3500,
    discount: "36%",
  },
  {
    id: 11,
    title: "طرابيزة مربعة زان كبس",
    category: "طرابيزات",
    description: "طرابيزة زان كبس",
    image: "/esz.jpg",
    images: ["/esz.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 6000,
    priceNew: 3500,
    discount: "41%",
  },
  {
    id: 12,
    title: "كولكشن جديد",
    category: "طرابيزات",
    description: "طرابيزة زان كبس",
    image: "/wasd.jpg",
    images: ["/wasd.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 6500,
    priceNew: 3800,
    discount: "41%",
  },
  {
    id: 13,
    title: "جزامة جرار",
    category: "جزمات",
    description: "جزامة جرار بمراية",
    image: "/mn.jpg",
    images: ["/mn.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 10000,
    priceNew: 7300,
    discount: "27%",
  },
  {
    id: 14,
    title: "جزامة مودرن",
    category: "جزمات",
    description: "رف أحذية شديد التحمل ذو سعة كبيرة",
    image: "/qwe.jpg",
    images: ["/qwe.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 12000,
    priceNew: 9800,
    discount: "18%",
  },
  {
    id: 15,
    title: "جزامة مودرن",
    category: "جزمات",
    description: "جزامة مودرن 100*120 = كعب 10cm",
    image: "/moka.jpg",
    images: ["/moka.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 12000,
    priceNew: 9800,
    discount: "18%",
  },
  {
    id: 16,
    title: "فوتية مودرن",
    category: "فوتية",
    description: "فوتي مودرن خشب زان أحمر تشطيب أعلى فنش",
    image: "/qwert.jpg",
    images: ["/qwert.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 6500,
    priceNew: 4000,
    discount: "38%",
  },
  {
    id: 17,
    title: "فوتية مودرن2",
    category: "فوتية",
    description: "فوتي مودرن خشب زان أحمر تشطيب أعلى فنش",
    image: "/poiu.jpg",
    images: ["/poiu.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 8000,
    priceNew: 4500,
    discount: "43%",
  },
  {
    id: 18,
    title: "فوتية مودرن3",
    category: "فوتية",
    description: "فوتي مودرن خشب زان أحمر تشطيب أعلى فنش",
    image: "/sss.jpg",
    images: ["/sss.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 9000,
    priceNew: 5000,
    discount: "45%",
  },
  {
    id: 19,
    title: "فوتية مودرن4",
    category: "فوتية",
    description: "فوتي مودرن خشب زان أحمر تشطيب أعلى فنش",
    image: "/plm.jpg",
    images: ["/plm.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 8500,
    priceNew: 4000,
    discount: "52%",
  },
  {
    id: 20,
    title: "فوتية مودرن5",
    category: "فوتية",
    description: "فوتي مودرن خشب زان أحمر تشطيب أعلى فنش",
    image: "/klm.jpg",
    images: ["/klm.jpg", "/klm2.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 9000,
    priceNew: 5500,
    discount: "38%",
  },
  {
    id: 21,
    title: "كرسي مودرن",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/meca.jpg",
    images: ["/meca.jpg", "/meca2.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 5500,
    priceNew: 3000,
    discount: "45%",
  },
  {
    id: 22,
    title: "كرسي مودرن2",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/ioi.jpg",
    images: ["/ioi.jpg", "/ioi2.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 6000,
    priceNew: 3500,
    discount: "41%",
  },
  {
    id: 23,
    title: "كرسي مودرن3",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/asd.jpg",
    images: ["/asd.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 4000,
    priceNew: 3000,
    discount: "25%",
  },
]

const categories = ["الكل", "أنترية مغلف", "ركن", "طرابيزات", "جزمات", "فوتية", "كراسي"]

export function PortfolioGrid() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [activeCategory, setActiveCategory] = useState("الكل")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [activeImage, setActiveImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // دالة نسخ رابط المنتج
  const copyProductLink = (id: number) => {
    const link = `${window.location.origin}/portfolio?product=${id}`
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("✅ تم نسخ رابط المنتج")
      })
      .catch(() => {
        alert("❌ فشل نسخ الرابط")
      })
  }

  // قراءة الـ URL parameters عند التحميل الأول
  useEffect(() => {
    if (isInitialLoad) {
      const productId = searchParams.get("product")
      if (productId) {
        const item = portfolioItems.find((p) => p.id === Number(productId))
        if (item) {
          setSelectedItem(item)
          setActiveImage(item.image)
        }
      }

      const categoryParam = searchParams.get("category")
      if (categoryParam) {
        setActiveCategory(decodeURIComponent(categoryParam))
      }

      setIsInitialLoad(false)
    }
  }, [searchParams, isInitialLoad])

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === "الكل" || item.category === activeCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowToast(true)

    const productLink = `${window.location.origin}/portfolio?product=${selectedItem.id}`

    setTimeout(() => {
      setShowToast(false)

      if (selectedItem) {
        const whatsappLink = `https://wa.me/201015262864?text=${encodeURIComponent(
          `مرحبا، أريد الاستفسار عن المنتج التالي:\n\n` +
            `📌 اسم المنتج: ${selectedItem.title}\n` +
            `🎨 اللون المختار: ${selectedColor || "لم يتم الاختيار"}\n` +
            `💰 السعر الحالي: ${selectedItem.priceNew} ج.م\n` +
            `🔗 رابط المنتج: ${productLink}\n\n` +
            `يرجى التواصل معي.`
        )}`

        window.open(whatsappLink, "_blank")
      }
    }, 3000)
  }

  return (
    <div className="space-y-12 px-4 md:px-0">
      {/* الشريط الأصفر - معدل */}
      <div className="w-full overflow-hidden bg-yellow-200 text-yellow-900 font-semibold py-3 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="px-8">🔔 يوجد شغل عمولة بفضل الله – تواصل عبر واتساب أو أي وسيلة تواصل بإرسال كلمة "عمولة"</span>
          <span className="px-8">🔔 يوجد شغل عمولة بفضل الله – تواصل عبر واتساب أو أي وسيلة تواصل بإرسال كلمة "عمولة"</span>
          <span className="px-8">🔔 يوجد شغل عمولة بفضل الله – تواصل عبر واتساب أو أي وسيلة تواصل بإرسال كلمة "عمولة"</span>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 25s linear infinite;
            width: 300%;
          }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 35s linear infinite;
              width: 500%;
            }
            .animate-marquee span {
              font-size: 14px;
              padding: 0 16px;
            }
          }
        `}</style>
      </div>

      {/* 🔍 Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="ابحث عن منتج..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              if (category === "الكل") {
                router.push("/portfolio", { scroll: false })
              } else {
                router.push(`/portfolio?category=${encodeURIComponent(category)}`, {
                  scroll: false,
                })
              }
            }}
            className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm md:text-base ${
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="rounded-lg overflow-hidden bg-card hover:shadow-lg transition">
            <div
              onClick={() => {
                setSelectedItem(item)
                setActiveImage(item.image)
                setSelectedColor("")
                router.push(`/portfolio?product=${item.id}`, { scroll: false })
              }}
              className="cursor-pointer"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-4 space-y-2">
                <p className="text-sm text-primary font-medium uppercase">{item.category}</p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                copyProductLink(item.id)
              }}
              className="w-full bg-secondary hover:bg-secondary/80 text-sm py-2 font-medium transition"
            >
              🔗 نسخ رابط المنتج
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-background w-full max-w-xl rounded-xl relative">
            <button
              onClick={() => {
                setSelectedItem(null)
                router.push("/portfolio", { scroll: false })
              }}
              className="absolute top-4 right-4 text-xl z-10"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {/* Images */}
              <div className="space-y-4">
                <img
                  src={activeImage}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  alt={selectedItem.title}
                />
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedItem.images.map((img: string, index: number) => (
                    <img
                      key={index}
                      src={img}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer border-2 ${
                        activeImage === img ? "border-primary" : "border-transparent"
                      }`}
                      alt={`صورة ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold">{selectedItem.title}</h2>

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="line-through text-muted-foreground">{selectedItem.priceOld} ج.م</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">{selectedItem.priceNew} ج.م</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    خصم {selectedItem.discount}
                  </span>
                </div>

                <div className="text-sm text-muted-foreground space-y-1">
                  {selectedItem.details.map((detail: string, index: number) => (
                    <p key={index}>• {detail}</p>
                  ))}
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">اختر اللون:</h4>
                  <div className="flex gap-2 flex-wrap">
                    {selectedItem.colors.map((color: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 py-1 rounded-full border text-sm ${
                          selectedColor === color
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition mt-4"
                >
                  شراء / استفسار عبر واتساب
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
          ⚡ للتأكيد، الحجز يحتاج دفع عربون
        </div>
      )}
    </div>
  )
}