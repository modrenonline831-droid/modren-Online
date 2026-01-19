"use client"

import { useState, useEffect } from "react"

const portfolioItems = [
  {
    id: 1,
    title: "طقم روسكي",
    category: "أنترية مغلف",
    description: "مكون من 4 قطع 2 كنب 2 فوتية",
    image: "/1515.jpg",
    images: ["/1516.jpg", "/3224.jpg", "/4456.jpg", "/5928.jpg","/1515.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
    priceOld: 30000,
    priceNew: 25000,
    discount: "20%",
  },
  {
    id: 2,
    title: "طقم بلو باك",
    category: "أنترية مغلف",
    description: "مكون من 4 قطع 2 منبة 2 فوتية ",
    image: "/momo.jpg",
    images: ["/refo.jpg", "/momo.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
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
    images: ["/98609.jpg", "/0099.jpg","/8879.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
    priceOld: 28300,
    priceNew: 23800,
    discount: "16%",
  },
   {
    id: 4,
    title: " ركنة بلو باك ",
    category: "ركن",
    description: "ركنة بابلز مقاس 2*3",
    image: "/2345.jpg",
    images: ["/5647.jpg","/7777.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
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
    images: ["/0934.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
    priceOld: 28300,
    priceNew: 25000,
    discount: "10%",
   },
   {
    id: 6,
    title: " طقم أنترية مودرن",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 2 فوتية",
    image: "/zezo.jpg",
    images: ["/kkj.jpg","/zezoo.jpg","/008866.jpg", "/zezo.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
    priceOld: 23000,
    priceNew: 20000,
    discount: "13%",
   },
   {
    id: 7,
    title: "انترية لاريكس",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 1 قوتية",
    image: "/amr.jpg",
    images: ["/09km.jpg","/moon.jpg", "/amr.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38","قماش: وتر بروف ضد المياه"],
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
    description: "رف احذية شديد التحمل ذو سعة كبيرة",
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
    title: "2جزامة مودرن",
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
    description: "  فوتي مودرن خشب زان أحمر تشطيب اعلي فنش لل 1 ",
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
    description: "  فوتي مودرن خشب زان أحمر تشطيب اعلي فنش لل 1 ",
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
    description: "  فوتي مودرن خشب زان أحمر تشطيب اعلي فنش لل 1 ",
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
    description: "  فوتي مودرن خشب زان أحمر تشطيب اعلي فنش لل 1 ",
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
    description: "  فوتي مودرن خشب زان أحمر تشطيب اعلي فنش لل 1 ",
    image: "/klm.jpg",
    images: ["/klm2.jpg","/klm.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 9000,
    priceNew: 5500,
    discount: "38%",
   },
    {
    id: 21 ,
    title: "كرسي مودرن",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/meca.jpg",
    images: ["/meca2.jpg","/meca.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 5500,
    priceNew: 3000,
    discount: "45%",
   },
   {
    id: 22 ,
    title: "كرسي مودرن2",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/ioi.jpg",
    images: ["/ioi2.jpg","/ioi.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld: 6000,
    priceNew: 3500,
    discount: "%41",
   },
   {
    id: 23 ,
    title: "كرسي مودرن3",
    category: "كراسي",
    description: "كرسي زان قماشة فوطة",
    image: "/asd.jpg",
    images: ["/asd.jpg"],
    colors: ["متاح جميع الألوان"],
    details: [""],
    priceOld:  4000,
    priceNew: 3000,
    discount: "25%",
   },
 ]

const categories = [
  "الكل",
  "أنترية مغلف",
  "ركن",
  "طرابيزات",
  "جزمات",
  "فوتية",
  "كراسي",
  ]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("الكل")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [activeImage, setActiveImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showToast, setShowToast] = useState(false)
  

 const filteredItems = portfolioItems.filter((item) => {
  const matchesCategory =
    activeCategory === "الكل" || item.category === activeCategory

  const matchesSearch =
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())

  return matchesCategory && matchesSearch
})

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
      if (selectedItem) {
        const whatsappLink = `https://wa.me/201015262864?text=${encodeURIComponent(
          `مرحبا، أريد الاستفسار عن المنتج التالي:\n\n` +
            `📌 اسم المنتج: ${selectedItem.title}\n` +
            `🎨 اللون المختار: ${selectedColor || "لم يتم الاختيار"}\n` +
            `💰 السعر الحالي: ${selectedItem.priceNew} ج.م\n\n` +
            `يرجى التواصل معي.`
        )}`
        window.open(whatsappLink, "_blank")
      }
    }, 3000)
  }

  return (
    <div className="space-y-12 px-4 md:px-0">
	<div className="overflow-hidden bg-yellow-200 text-yellow-900 font-semibold py-2">
  <div className="animate-marquee whitespace-nowrap">
    🔔 يوجد شغل عمولة بفضل الله – تواصل عبر واتساب أو أي وسيلة تواصل بإرسال كلمة "عمولة" &nbsp;&nbsp;&nbsp;
    🔔 يوجد شغل عمولة بفضل الله – تواصل عبر واتساب أو أي وسيلة تواصل بإرسال كلمة "عمولة"
  </div>
</div>

<style jsx>{`
  .animate-marquee {
    display: inline-block;
    white-space: nowrap;
    animation: marquee 20s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
`}</style>


	
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
            onClick={() => setActiveCategory(category)}
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
          <div
            key={item.id}
            onClick={() => {
              setSelectedItem(item)
              setActiveImage(item.image)
              setSelectedColor("")
            }}
            className="cursor-pointer rounded-lg overflow-hidden bg-card hover:shadow-lg transition"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm text-primary font-medium uppercase">
                {item.category}
              </p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-background w-full max-w-xl rounded-xl relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
              {/* Images */}
              <div className="space-y-4">
                <img
                  src={activeImage}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg"
                />
                <div className="flex gap-2 overflow-x-auto">
                  {selectedItem.images.map((img: string) => (
                    <img
                      key={img}
                      src={img}
                      onClick={() => setActiveImage(img)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded cursor-pointer border ${
                        activeImage === img
                          ? "border-primary"
                          : "border-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {selectedItem.title}
                </h2>

                {/* Prices */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="line-through text-muted-foreground">
                    {selectedItem.priceOld} ج.م
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">
                    {selectedItem.priceNew} ج.م
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    خصم {selectedItem.discount}
                  </span>
                </div>

                {/* ✅ DETAILS FIX */}
                <div className="text-sm text-muted-foreground space-y-1">
                  {Array.isArray(selectedItem.details) ? (
                    selectedItem.details.map(
                      (detail: string, index: number) => (
                        <p key={index}>• {detail}</p>
                      )
                    )
                  ) : (
                    <p>{selectedItem.details}</p>
                  )}
                </div>

                {/* Colors */}
                <div>
                  <h4 className="font-semibold mb-2 text-sm">
                    اختر اللون:
                  </h4>
                  <div className="flex gap-2 flex-wrap">
                    {selectedItem.colors.map((color: string) => (
                      <button
                        key={color}
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

                                {/* WhatsApp */}
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

               
