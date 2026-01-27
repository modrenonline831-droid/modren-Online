"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

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
    inStock: true,
    tags: ["أفضل مبيع",]
  },
  {
    id: 2,
    title: "طقم بلو باك",
    category: "أنترية مغلف",
    description: "مكون من 4 قطع 2 منبة 2 فوتية",
    image: "/momo.jpg",
    images: ["/momo.jpg", "/refo.jpg","/koko.jpg","/elzox.jpg","/plmk.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 32000,
    priceNew: 26000,
    inStock: true,
    tags: ["جديد"]
  },
  {
    id: 3,
    title: "طقم أنترية مودرن",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 2 فوتية",
    image: "/zezo.jpg",
    images: ["/zezo.jpg", "/kkj.jpg", "/zezoo.jpg", "/008866.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 23000,
    priceNew: 19800,
    inStock: true,
    tags: ["جديد"]
  },
  {
    id: 6,
    title: "ركنة ميكانيزم مودرين",
    category: "ركن",
    description: "ركنة مكانيزم 2*3",
    image: "/8879.jpg",
    images: ["/8879.jpg", "/98609.jpg", "/0099.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 27000,
    priceNew: 24000,
    inStock: false,
    tags: []
  },
  {
    id: 4,
    title: "ركنة بلو باك",
    category: "ركن",
    description: "ركنة ميكانيزم مقاس 2*3",
    image: "/2345.jpg",
    images: ["/2345.jpg", "/5647.jpg", "/7777.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 26000,
    priceNew: 23000,
    inStock: true,
    tags: ["جديد","أفضل مبيع"]
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
    inStock: true,
    tags: ["جديد"]
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
    priceOld: 30000,
    priceNew: 26000,
    inStock: true,
    tags: []
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
    priceNew: 4500,
    inStock: true,
    tags: ["خصم كبير"]
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
    inStock: true,
    tags: []
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
    inStock: true,
    tags: []
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
    inStock: true,
    tags: ["جديد"]
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
    inStock: true,
    tags: []
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
    inStock: true,
    tags: ["مودرن"]
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
    inStock: false,
    tags: ["مودرن"]
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
    priceOld: 9000,
    priceNew: 6500,
    inStock: true,
    tags: ["خصم كبير"]
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
    priceNew: 6000,
    inStock: true,
    tags: []
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
    priceNew: 6000,
    inStock: true,
    tags: []
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
    priceOld: 9500,
    priceNew: 6500,
    inStock: true,
    tags: []
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
    inStock: true,
    tags: []
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
    inStock: true,
    tags: ["أفضل مبيع"]
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
    inStock: true,
    tags: []
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
    inStock: true,
    tags: []
  },
]

const categories = ["الكل", "أنترية مغلف", "ركن", "طرابيزات", "جزمات", "فوتية", "كراسي"]
const sortOptions = [
  { value: "default", label: "الترتيب الافتراضي" },
  { value: "price-low", label: "السعر: من الأقل للأعلى" },
  { value: "price-high", label: "السعر: من الأعلى للأقل" },
  { value: "name", label: "الاسم: أ-ي" },
  { value: "discount", label: "أكبر خصم" }
]

export default function PortfolioGrid() {
  const router = useRouter()

  const [activeCategory, setActiveCategory] = useState("الكل")
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [activeImage, setActiveImage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 50000])
  const [sortBy, setSortBy] = useState("default")
  const [inStockOnly, setInStockOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [favoriteItems, setFavoriteItems] = useState<number[]>([])
  const [copiedItemId, setCopiedItemId] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // دالة حساب نسبة الخصم
  const calculateDiscount = (priceOld: number, priceNew: number) => {
    if (priceOld <= 0 || priceOld <= priceNew) return 0
    return Math.round(((priceOld - priceNew) / priceOld) * 100)
  }

  // دالة نسخ رابط المنتج مع تأثير
  const copyProductLink = (id: number) => {
    const link = `${window.location.origin}/portfolio?product=${id}`
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopiedItemId(id)
        setTimeout(() => setCopiedItemId(null), 2000)
      })
      .catch(() => {
        alert("❌ فشل نسخ الرابط")
      })
  }

  // زر شغل العمولة - يتجه مباشرة للواتساب
  const handleCommissionClick = () => {
    const whatsappLink = `https://wa.me/201015262864?text=${encodeURIComponent("اريد شغل عمولة")}`
    window.open(whatsappLink, "_blank")
  }

  // تفعيل/إلغاء الإعجاب
  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setFavoriteItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    )
  }

  // قراءة الـ URL parameters عند التحميل الأول
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const productId = params.get("product")
    
    if (productId) {
      const item = portfolioItems.find((p) => p.id === Number(productId))
      if (item) {
        setSelectedItem(item)
        setActiveImage(item.image)
        // Scroll to top when modal opens
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    const categoryParam = params.get("category")
    if (categoryParam) {
      setActiveCategory(decodeURIComponent(categoryParam))
    }
  }, [])

  // فلترة وترتيب المنتجات
  const filteredItems = useMemo(() => {
    return portfolioItems
      .filter((item) => {
        const matchesCategory = activeCategory === "الكل" || item.category === activeCategory
        const matchesSearch = searchQuery === "" || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesPrice = item.priceNew >= priceRange[0] && item.priceNew <= priceRange[1]
        const matchesStock = !inStockOnly || item.inStock
        
        return matchesCategory && matchesSearch && matchesPrice && matchesStock
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.priceNew - b.priceNew
          case "price-high":
            return b.priceNew - a.priceNew
          case "name":
            return a.title.localeCompare(b.title)
          case "discount":
            return calculateDiscount(b.priceOld, b.priceNew) - calculateDiscount(a.priceOld, a.priceNew)
          default:
            return 0
        }
      })
  }, [activeCategory, searchQuery, priceRange, sortBy, inStockOnly])

  // حساب الصفحات
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const currentItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

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
            `🏷️ الفئة: ${selectedItem.category}\n` +
            `🎨 اللون المختار: ${selectedColor || "لم يتم الاختيار"}\n` +
            `💰 السعر القديم: ${selectedItem.priceOld} ج.م\n` +
            `💰 السعر الحالي: ${selectedItem.priceNew} ج.م\n` +
            `🎯 نسبة الخصم: ${calculateDiscount(selectedItem.priceOld, selectedItem.priceNew)}%\n` +
            `🔗 رابط المنتج: ${productLink}\n\n` +
            `يرجى التواصل معي للتفاصيل والطلب.`
        )}`

        window.open(whatsappLink, "_blank")
      }
    }, 3000)
  }

  // تحديث URL عند تغيير الفلترة
  useEffect(() => {
    const params = new URLSearchParams()
    if (activeCategory !== "الكل") {
      params.set("category", activeCategory)
    }
    if (searchQuery) {
      params.set("search", searchQuery)
    }
    
    const newUrl = params.toString() 
      ? `/portfolio?${params.toString()}`
      : '/portfolio'
    
    router.push(newUrl, { scroll: false })
  }, [activeCategory, searchQuery, router])

  return (
    <div className="space-y-8 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 🔧 زر شغل العمولة - ثابت في الأعلى */}
      <div className="flex justify-center mb-4 sticky top-4 z-40">
        <button
          onClick={handleCommissionClick}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-900 font-bold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base border-2 border-yellow-700"
        >
          🛠️ يوجد شغل عمولة - اضغط هنا للتواصل عبر واتساب
        </button>
      </div>

      {/* Breadcrumbs */}
      <div className="text-sm text-muted-foreground mb-6 bg-secondary/30 p-3 rounded-lg">
        <button 
          onClick={() => router.push("/")} 
          className="hover:text-primary transition-colors"
        >
          الرئيسية
        </button>
        <span className="mx-2">/</span>
        <span className="text-primary font-medium">المعرض</span>
        {activeCategory !== "الكل" && (
          <>
            <span className="mx-2">/</span>
            <span className="font-medium">{activeCategory}</span>
          </>
        )}
      </div>

      {/* 🔍 Search and Filters Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="ابحث عن منتج، فئة، أو وصف..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm"
          >
            {showFilters ? "إخفاء الفلترة" : "عرض الفلترة"}
            <span>⚙️</span>
          </button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="bg-secondary/20 p-4 rounded-lg mb-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">نطاق السعر</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-24 px-3 py-2 rounded border text-sm"
                  placeholder="الحد الأدنى"
                />
                <span>إلى</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-24 px-3 py-2 rounded border text-sm"
                  placeholder="الحد الأقصى"
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">عرض المتوفر فقط</span>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">إظهار النتائج</label>
              <div className="text-lg font-bold text-primary">
                {filteredItems.length} منتج
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category)
              setCurrentPage(1)
            }}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg scale-105"
                : "bg-secondary hover:bg-secondary/80 hover:shadow-md"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      {currentItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">😔</div>
          <h3 className="text-xl font-semibold mb-2">لا توجد منتجات</h3>
          <p className="text-muted-foreground">جرب تغيير معايير البحث أو الفلترة</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {currentItems.map((item) => {
              const discount = calculateDiscount(item.priceOld, item.priceNew)
              const isFavorite = favoriteItems.includes(item.id)
              
              return (
                <div 
                  key={item.id} 
                  className="group rounded-xl overflow-hidden bg-card border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div
                    onClick={() => {
                      setSelectedItem(item)
                      setActiveImage(item.image)
                      setSelectedColor("")
                      router.push(`/portfolio?product=${item.id}`, { scroll: false })
                    }}
                    className="cursor-pointer relative"
                  >
                    {/* Tags */}
                    {item.tags.length > 0 && (
                      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
                        {item.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Favorite Button */}
                    <button
                      onClick={(e) => toggleFavorite(item.id, e)}
                      className="absolute top-3 left-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                    >
                      {isFavorite ? "❤️" : "🤍"}
                    </button>
                    
                    {/* Discount Badge */}
                    {discount > 0 && (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1 bg-red-500 text-white font-bold rounded-full text-sm">
                        خصم {discount}%
                      </div>
                    )}
                    
                    {/* Stock Status */}
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
                        <span className="bg-white text-black px-4 py-2 rounded-lg font-bold">
                          غير متوفر حالياً
                        </span>
                      </div>
                    )}
                    
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                          {item.category}
                        </p>
                        <h3 className="text-lg font-bold mt-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      {item.priceOld > item.priceNew && (
                        <span className="text-sm line-through text-gray-500">
                          {item.priceOld.toLocaleString()} ج.م
                        </span>
                      )}
                      <span className="text-xl font-bold text-primary">
                        {item.priceNew.toLocaleString()} ج.م
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          copyProductLink(item.id)
                        }}
                        className={`flex-1 py-2 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm ${
                          copiedItemId === item.id
                            ? "bg-green-500 text-white"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {copiedItemId === item.id ? "✅ تم النسخ" : "🔗 نسخ الرابط"}
                      </button>
                      
                      <button
                        onClick={() => {
                          setSelectedItem(item)
                          setActiveImage(item.image)
                          setSelectedColor("")
                        }}
                        className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-sm"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition"
              >
                السابق
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum
                if (totalPages <= 5) {
                  pageNum = i + 1
                } else if (currentPage <= 3) {
                  pageNum = i + 1
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i
                } else {
                  pageNum = currentPage - 2 + i
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg transition ${
                      currentPage === pageNum
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              })}
              
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary/80 transition"
              >
                التالي
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-background w-full max-w-4xl rounded-2xl relative my-8">
            <button
              onClick={() => {
                setSelectedItem(null)
                router.push("/portfolio", { scroll: false })
              }}
              className="absolute top-4 right-4 text-2xl z-10 p-2 hover:bg-secondary rounded-full transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Images */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={activeImage}
                    width={600}
                    height={600}
                    className="w-full h-96 object-cover"
                    alt={selectedItem.title}
                  />
                  {!selectedItem.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-black px-6 py-3 rounded-lg font-bold text-lg">
                        غير متوفر حالياً
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {selectedItem.images.map((img: string, index: number) => (
                    <div
                      key={index}
                      onClick={() => setActiveImage(img)}
                      className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden border-2 ${
                        activeImage === img ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover"
                        alt={`صورة ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-primary font-semibold uppercase tracking-wider">
                    {selectedItem.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold mt-2">{selectedItem.title}</h2>
                  <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
                </div>

                {/* Price & Discount */}
                <div className="flex items-center gap-4 flex-wrap">
                  {selectedItem.priceOld > selectedItem.priceNew && (
                    <>
                      <span className="text-2xl line-through text-gray-500">
                        {selectedItem.priceOld.toLocaleString()} ج.م
                      </span>
                      <span className="text-3xl font-bold text-primary">
                        {selectedItem.priceNew.toLocaleString()} ج.م
                      </span>
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                        خصم {calculateDiscount(selectedItem.priceOld, selectedItem.priceNew)}%
                      </span>
                    </>
                  )}
                  {selectedItem.priceOld <= selectedItem.priceNew && (
                    <span className="text-3xl font-bold text-primary">
                      {selectedItem.priceNew.toLocaleString()} ج.م
                    </span>
                  )}
                </div>

                {/* Details List */}
                {selectedItem.details[0] && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">تفاصيل المنتج:</h4>
                    <ul className="space-y-1">
                      {selectedItem.details.map((detail: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Colors */}
                <div>
                  <h4 className="font-semibold text-lg mb-3">اختر اللون:</h4>
                  <div className="flex gap-3 flex-wrap">
                    {selectedItem.colors.map((color: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-full border text-sm transition-all ${
                          selectedColor === color
                            ? "bg-primary text-primary-foreground border-primary scale-105"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition text-lg flex items-center justify-center gap-3"
                  >
                    <span>💬</span>
                    شراء / استفسار عبر واتساب
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      copyProductLink(selectedItem.id)
                    }}
                    className={`w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                      copiedItemId === selectedItem.id
                        ? "bg-green-500 text-white"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {copiedItemId === selectedItem.id ? "✅ تم نسخ رابط المنتج" : "🔗 نسخ رابط المنتج للمشاركة"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-xl animate-fade-in-out z-50 flex items-center gap-3">
          <span className="text-xl">⚡</span>
          <div>
            <p className="font-bold">تنويه هام</p>
            <p className="text-sm">للتأكيد، الحجز يحتاج دفع عربون</p>
          </div>
        </div>
      )}

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInOut {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-fade-in-out {
          animation: fadeInOut 3s ease-in-out;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  )
}