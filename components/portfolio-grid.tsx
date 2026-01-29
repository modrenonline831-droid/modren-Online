"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Share2, Heart, Filter, Eye, ShoppingBag, Clock, Shield, Truck, Star, GitCompare as Compare, ChevronDown, ChevronUp, Search, X } from "lucide-react"

// أضف واجهة Props
interface PortfolioGridProps {
  viewMode: 'grid' | 'list';
}

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
    tags: ["أفضل مبيع"],
    dimensions: "متاح جميع مقاسات",
    estimatedDelivery: "15-20 يوم",
    views: 245,
    orders: 18,
    rating: 4.8,
    reviews: 24,
    createdAt: "2023-12-15",
    lastOrder: "2 يوم مضى",
    icon: "🛋️"
  },
  {
    id: 2,
    title: "طقم بلو باك",
    category: "أنترية مغلف",
    description: "مكون من 2 كنبة و 2 فوتية",
    image: "/momo.jpg",
    images: ["/momo.jpg", "/refo.jpg","/koko.jpg","/elzox.jpg","/plmk.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 32000,
    priceNew: 26000,
    inStock: true,
    tags: ["جديد"],
    dimensions: "متاح جميع المقاسات",
    estimatedDelivery: "15-20 يوم",
    views: 189,
    orders: 12,
    rating: 4.5,
    reviews: 18,
    createdAt: "2024-01-10",
    lastOrder: "3 يوم مضى",
    icon: "🛋️"
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
    tags: ["جديد"],
    dimensions: "متاح جميع المقاسات",
    estimatedDelivery: "15-20 يوم",
    views: 321,
    orders: 25,
    rating: 4.9,
    reviews: 32,
    createdAt: "2024-01-05",
    lastOrder: "1 يوم مضى",
    icon: "🛋️"
  },
  {
    id: 6,
    title: "ركنة ميكانيزم مودرين",
    category: "ركن",
    description: "ركنة مكانيزم",
    image: "/8879.jpg",
    images: ["/8879.jpg", "/98609.jpg", "/0099.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 27000,
    priceNew: 24000,
    inStock: false,
    tags: [],
    dimensions: "2×3",
    estimatedDelivery: "15-20 يوم",
    views: 156,
    orders: 8,
    rating: 4.2,
    reviews: 12,
    createdAt: "2023-11-20",
    lastOrder: "10 يوم مضى",
    icon: "🪑"
  },
  {
    id: 4,
    title: "ركنة بلو باك",
    category: "ركن",
    description: "ركنة ميكانيزم",
    image: "/2345.jpg",
    images: ["/2345.jpg", "/5647.jpg", "/7777.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 26000,
    priceNew: 23000,
    inStock: true,
    tags: ["جديد","أفضل مبيع"],
    dimensions: "2×3",
    estimatedDelivery: "15-20 يوم",
    views: 278,
    orders: 20,
    rating: 4.7,
    reviews: 28,
    createdAt: "2024-01-15",
    lastOrder: "2 يوم مضى",
    icon: "🪑"
  },
  {
    id: 5,
    title: "ركنة بابلز",
    category: "ركن",
    description: "ركنة بابلز مقاس",
    image: "/9987.jpg",
    images: ["/9987.jpg", "/0934.jpg"],
    colors: ["متاح جميع الألوان"],
    details: ["خشب: زان أحمر", "سفنج: 38", "قماش: وتر بروف ضد المياه"],
    priceOld: 28300,
    priceNew: 25000,
    inStock: true,
    tags: ["جديد"],
    dimensions: "2×3",
    estimatedDelivery: "15-20 يوم",
    views: 194,
    orders: 14,
    rating: 4.6,
    reviews: 16,
    createdAt: "2024-01-12",
    lastOrder: "4 يوم مضى",
    icon: "🪑"
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
    tags: [],
    dimensions: "متاح جميع المقاسات",
    estimatedDelivery: "15-20 يوم",
    views: 167,
    orders: 9,
    rating: 4.3,
    reviews: 14,
    createdAt: "2023-12-25",
    lastOrder: "6 يوم مضى",
    icon: "🛋️"
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
    tags: ["خصم كبير"],
    dimensions: "120×80 سم",
    estimatedDelivery: "10-15 يوم",
    views: 89,
    orders: 15,
    rating: 4.4,
    reviews: 10,
    createdAt: "2024-01-08",
    lastOrder: "3 يوم مضى",
    icon: "🪵"
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
    tags: [],
    dimensions: "100×60 سم",
    estimatedDelivery: "10-15 يوم",
    views: 76,
    orders: 11,
    rating: 4.1,
    reviews: 8,
    createdAt: "2023-12-30",
    lastOrder: "5 يوم مضى",
    icon: "🪵"
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
    tags: [],
    dimensions: "90×90 سم",
    estimatedDelivery: "10-15 يوم",
    views: 67,
    orders: 9,
    rating: 4.0,
    reviews: 7,
    createdAt: "2024-01-03",
    lastOrder: "7 يوم مضى",
    icon: "🪵"
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
    tags: ["جديد"],
    dimensions: "110×70 سم",
    estimatedDelivery: "10-15 يوم",
    views: 92,
    orders: 13,
    rating: 4.5,
    reviews: 11,
    createdAt: "2024-01-20",
    lastOrder: "1 يوم مضى",
    icon: "🪵"
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
    tags: [],
    dimensions: "100×40×180 سم",
    estimatedDelivery: "10-15 يوم",
    views: 123,
    orders: 17,
    rating: 4.6,
    reviews: 19,
    createdAt: "2024-01-02",
    lastOrder: "2 يوم مضى",
    icon: "👞"
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
    tags: ["مودرن"],
    dimensions: "120×45×190 سم",
    estimatedDelivery: "10-15 يوم",
    views: 145,
    orders: 21,
    rating: 4.8,
    reviews: 22,
    createdAt: "2024-01-18",
    lastOrder: "1 يوم مضى",
    icon: "👞"
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
    tags: ["مودرن"],
    dimensions: "100×40×120 سم",
    estimatedDelivery: "10-15 يوم",
    views: 98,
    orders: 14,
    rating: 4.3,
    reviews: 13,
    createdAt: "2024-01-09",
    lastOrder: "8 يوم مضى",
    icon: "👞"
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
    tags: ["خصم كبير"],
    dimensions: "60×60 سم",
    estimatedDelivery: "10-15 يوم",
    views: 112,
    orders: 16,
    rating: 4.4,
    reviews: 15,
    createdAt: "2024-01-14",
    lastOrder: "3 يوم مضى",
    icon: "🛋"
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
    tags: [],
    dimensions: "55×55 سم",
    estimatedDelivery: "10-15 يوم",
    views: 87,
    orders: 12,
    rating: 4.2,
    reviews: 11,
    createdAt: "2023-12-28",
    lastOrder: "6 يوم مضى",
    icon: "🛋"
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
    tags: [],
    dimensions: "65×65 سم",
    estimatedDelivery: "10-15 يوم",
    views: 94,
    orders: 13,
    rating: 4.1,
    reviews: 9,
    createdAt: "2024-01-06",
    lastOrder: "4 يوم مضى",
    icon: "🛋"
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
    tags: [],
    dimensions: "70×70 سم",
    estimatedDelivery: "10-15 يوم",
    views: 103,
    orders: 14,
    rating: 4.5,
    reviews: 12,
    createdAt: "2024-01-16",
    lastOrder: "2 يوم مضى",
    icon: "🛋"
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
    tags: [],
    dimensions: "50×50 سم",
    estimatedDelivery: "10-15 يوم",
    views: 118,
    orders: 17,
    rating: 4.7,
    reviews: 16,
    createdAt: "2024-01-22",
    lastOrder: "1 يوم مضى",
    icon: "🛋"
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
    tags: ["أفضل مبيع"],
    dimensions: "50×50×85 سم",
    estimatedDelivery: "10-15 يوم",
    views: 156,
    orders: 22,
    rating: 4.9,
    reviews: 26,
    createdAt: "2024-01-11",
    lastOrder: "1 يوم مضى",
    icon: "💺"
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
    tags: [],
    dimensions: "55×55×90 سم",
    estimatedDelivery: "10-15 يوم",
    views: 134,
    orders: 19,
    rating: 4.6,
    reviews: 18,
    createdAt: "2024-01-13",
    lastOrder: "3 يوم مضى",
    icon: "💺"
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
    tags: [],
    dimensions: "45×45×80 سم",
    estimatedDelivery: "10-15 يوم",
    views: 109,
    orders: 15,
    rating: 4.3,
    reviews: 13,
    createdAt: "2024-01-07",
    lastOrder: "5 يوم مضى",
    icon: "💺"
  },
]

const categories = [
  { id: "الكل", name: "الكل", icon: "📦", count: 23 },
  { id: "أنترية مغلف", name: "أنترية مغلف", icon: "🛋️", count: 7 },
  { id: "ركن", name: "ركن", icon: "🪑", count: 3 },
  { id: "طرابيزات", name: "طرابيزات", icon: "🪵", count: 4 },
  { id: "جزمات", name: "جزمات", icon: "👞", count: 3 },
  { id: "فوتية", name: "فوتية", icon: "🛋", count: 6 },
  { id: "كراسي", name: "كراسي", icon: "💺", count: 3 }
]

const sortOptions = [
  { value: "default", label: "الترتيب الافتراضي" },
  { value: "price-low", label: "السعر: من الأقل للأعلى" },
  { value: "price-high", label: "السعر: من الأعلى للأقل" },
  { value: "name", label: "الاسم: أ-ي" },
  { value: "discount", label: "أكبر خصم" },
  { value: "rating", label: "أعلى تقييم" },
  { value: "popular", label: "الأكثر طلباً" },
  { value: "newest", label: "الأحدث أولاً" }
]

export default function PortfolioGrid({ viewMode }: PortfolioGridProps) {
  const router = useRouter()
  const observerRef = useRef<IntersectionObserver | null>(null)

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
  const [compareItems, setCompareItems] = useState<number[]>([])
  const [showCompare, setShowCompare] = useState(false)
  const [quickViewItem, setQuickViewItem] = useState<any>(null)
  const [showShareMenu, setShowShareMenu] = useState<number | null>(null)
  const [showCategoryCounts, setShowCategoryCounts] = useState(true)
  const [loadingItems, setLoadingItems] = useState<Set<number>>(new Set())
  const [viewedItems, setViewedItems] = useState<number[]>([])
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const itemsPerPage = 9

  // تحميل المفضلة والمقارنة من localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteItems')
    const savedCompare = localStorage.getItem('compareItems')
    const savedViewed = localStorage.getItem('viewedItems')
    
    if (savedFavorites) setFavoriteItems(JSON.parse(savedFavorites))
    if (savedCompare) setCompareItems(JSON.parse(savedCompare))
    if (savedViewed) setViewedItems(JSON.parse(savedViewed))
  }, [])

  // حفظ المفضلة والمقارنة في localStorage
  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
    localStorage.setItem('compareItems', JSON.stringify(compareItems))
    localStorage.setItem('viewedItems', JSON.stringify(viewedItems))
  }, [favoriteItems, compareItems, viewedItems])

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

  // إضافة/إزالة من المقارنة
  const toggleCompare = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setCompareItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id)
      } else {
        if (prev.length >= 3) {
          alert("يمكنك مقارنة 3 منتجات كحد أقصى")
          return prev
        }
        return [...prev, id]
      }
    })
  }

  // تفعيل عرض سريع
  const handleQuickView = (item: any, e: React.MouseEvent) => {
    e.stopPropagation()
    setQuickViewItem(item)
  }

  // مشاركة المنتج
  const shareProduct = (item: any, platform: string) => {
    const productLink = `${window.location.origin}/portfolio?product=${item.id}`
    const message = `شاهد هذا المنتج الرائع: ${item.title}\n${productLink}`
    
    switch (platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank')
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productLink)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank')
        break
      case 'copy':
        navigator.clipboard.writeText(productLink)
        alert('تم نسخ الرابط!')
        break
    }
    
    setShowShareMenu(null)
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
        // إضافة للمنتجات التي تم عرضها
        setViewedItems(prev => {
          if (!prev.includes(item.id)) {
            return [item.id, ...prev.slice(0, 9)]
          }
          return prev
        })
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
          case "rating":
            return b.rating - a.rating
          case "popular":
            return b.orders - a.orders
          case "newest":
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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

  // تحميل الصور عند الظهور
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const datasetSrc = img.getAttribute('data-src')
            if (datasetSrc) {
              img.src = datasetSrc
              img.removeAttribute('data-src')
            }
            observerRef.current?.unobserve(img)
          }
        })
      },
      { rootMargin: '50px' }
    )

    document.querySelectorAll('img[data-src]').forEach(img => {
      observerRef.current?.observe(img)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [currentItems])

  // المنتجات التي تم عرضها مؤخراً
  const recentlyViewed = useMemo(() => {
    return viewedItems
      .map(id => portfolioItems.find(item => item.id === id))
      .filter(item => item !== undefined)
  }, [viewedItems])

  // منتجات مشابهة للمنتج المحدد
  const similarProducts = useMemo(() => {
    if (!selectedItem) return []
    return portfolioItems
      .filter(item => 
        item.id !== selectedItem.id && 
        (item.category === selectedItem.category || 
         item.tags.some(tag => selectedItem.tags.includes(tag)))
      )
      .slice(0, 4)
  }, [selectedItem])

  return (
    <div className="space-y-8 px-3 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* شريط المقارنة */}
      {compareItems.length > 0 && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50">
          <div className="bg-white rounded-xl shadow-2xl border p-4 animate-slideUp">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Compare className="w-5 h-5 text-primary" />
                <span className="hidden md:inline">قائمة المقارنة</span>
                <span className="md:hidden">مقارنة</span>
                ({compareItems.length}/3)
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowCompare(!showCompare)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  {showCompare ? <ChevronDown className="w-5 h-5" /> : <ChevronUp className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setCompareItems([])}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  مسح الكل
                </button>
              </div>
            </div>
            
            {showCompare && (
              <div className="space-y-3 mb-3">
                {compareItems.map(id => {
                  const item = portfolioItems.find(p => p.id === id)
                  if (!item) return null
                  
                  return (
                    <div key={id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-sm line-clamp-1">{item.title}</div>
                          <div className="text-primary font-bold">{item.priceNew.toLocaleString()} ج.م</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setCompareItems(prev => prev.filter(i => i !== id))}
                        className="text-gray-400 hover:text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowCompare(true)}
                className="flex-1 bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition text-sm md:text-base"
              >
                عرض المقارنة
              </button>
              <button
                onClick={() => {
                  if (compareItems.length < 2) {
                    alert("يجب اختيار منتجين على الأقل للمقارنة")
                    return
                  }
                  // تنفيذ المقارنة
                  const items = compareItems.map(id => portfolioItems.find(p => p.id === id))
                  console.log("مقارنة المنتجات:", items)
                }}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm md:text-base"
              >
                مقارنة الآن
              </button>
            </div>
          </div>
        </div>
      )}

      {/* عرض mode banner */}
      <div className={`p-3 rounded-lg text-center font-medium mb-4 ${
        viewMode === 'grid' 
          ? 'bg-blue-50 text-blue-700 border border-blue-200' 
          : 'bg-green-50 text-green-700 border border-green-200'
      }`}>
        {viewMode === 'grid' 
          ? '📊 عرض الشبكة: عرض منتظم للمنتجات' 
          : '📋 عرض القائمة: تفاصيل أكثر للمنتجات'}
      </div>

      {/* 🔧 زر شغل العمولة - ثابت في الأعلى */}
      <div className="flex justify-center mb-4 sticky top-4 z-40">
        <button
          onClick={handleCommissionClick}
          className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-yellow-900 font-bold py-3 px-4 md:px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base border-2 border-yellow-700 w-full max-w-md mx-2"
        >
          🛠️ شغل عمولة - اضغط للتواصل عبر واتساب
        </button>
      </div>

      {/* المنتجات التي تم عرضها مؤخراً */}
      {recentlyViewed.length > 0 && (
        <div className="bg-secondary/20 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <span className="hidden sm:inline">شاهدت مؤخراً</span>
              <span className="sm:hidden">المشاهدات</span>
            </h3>
            <button
              onClick={() => setViewedItems([])}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              مسح السجل
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {recentlyViewed.map(item => (
              <div 
                key={item.id}
                onClick={() => {
                  setSelectedItem(item)
                  setActiveImage(item.image)
                }}
                className="cursor-pointer group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="text-xs font-medium line-clamp-2 text-center">{item.title}</div>
                <div className="text-xs text-primary font-bold text-center">{item.priceNew.toLocaleString()} ج.م</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Top Bar */}
      <div className="lg:hidden flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 rounded-lg bg-secondary"
          >
            ☰
          </button>
          <h1 className="font-bold text-lg">المعرض</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="p-2 rounded-lg bg-secondary"
          >
            <Filter className="w-5 h-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="بحث..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
          <div className="bg-white w-64 h-full p-4 animate-slideInRight">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl">القائمة</h2>
              <button onClick={() => setShowMobileMenu(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg mb-3">الفئات</h3>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id)
                      setCurrentPage(1)
                      setShowMobileMenu(false)
                    }}
                    className={`flex items-center gap-3 w-full p-3 rounded-lg text-right ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{category.name}</div>
                      <div className="text-xs opacity-75">{category.count} منتج</div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-3">التصنيف</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 rounded-lg border bg-background"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filters */}
      {showMobileFilters && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-start justify-end">
          <div className="bg-white w-full h-3/4 mt-auto rounded-t-2xl p-4 animate-slideUp">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-xl">الفلاتر</h2>
              <button onClick={() => setShowMobileFilters(false)} className="p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">نطاق السعر (ج.م)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-1/2 px-3 py-2 rounded border text-sm"
                    placeholder="الحد الأدنى"
                  />
                  <span>إلى</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-1/2 px-3 py-2 rounded border text-sm"
                    placeholder="الحد الأقصى"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">عرض المتوفر فقط</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showCategoryCounts}
                    onChange={(e) => setShowCategoryCounts(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">عرض أعداد المنتجات</span>
                </label>
              </div>
              
              <div className="pt-4">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary">{filteredItems.length}</div>
                  <div className="text-gray-600">منتج متوافق</div>
                </div>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-3 bg-primary text-white rounded-lg font-bold"
                >
                  تطبيق الفلاتر
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs - مخفي على الموبايل */}
      <div className="hidden lg:block text-sm text-muted-foreground mb-6 bg-secondary/30 p-3 rounded-lg">
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
            <span className="font-medium">
              {categories.find(c => c.id === activeCategory)?.name || activeCategory}
            </span>
          </>
        )}
      </div>

      {/* 🔍 Search and Filters Header - للشاشات الكبيرة فقط */}
      <div className="hidden lg:flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
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
          <div className="relative">
            <button
              onClick={() => setShowCategoryCounts(!showCategoryCounts)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Filter className="w-4 h-4" />
              {showCategoryCounts ? "إخفاء الأعداد" : "عرض الأعداد"}
            </button>
          </div>
          
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
            className="px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary min-w-[180px]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters - للشاشات الكبيرة فقط */}
      {showFilters && (
        <div className="hidden lg:block bg-secondary/20 p-4 rounded-lg mb-6 animate-fadeIn">
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
            
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="text-sm">عرض المتوفر فقط</span>
              </label>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={false}
                  onChange={() => {}}
                  className="w-4 h-4"
                />
                <span className="text-sm">منتجات مخفضة فقط</span>
              </label>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">إظهار النتائج</label>
              <div className="text-lg font-bold text-primary">
                {filteredItems.length} منتج
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {filteredItems.filter(item => item.inStock).length} متوفر
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Filter - تصميم جديد مع أيقونات كبيرة */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-center hidden sm:block">الفئات</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setCurrentPage(1)
              }}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all duration-300 min-w-[80px] sm:min-w-[100px] ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105 border-2 border-primary"
                  : "bg-secondary hover:bg-secondary/80 hover:shadow-md border-2 border-transparent"
              }`}
            >
              <span className="text-3xl sm:text-4xl">{category.icon}</span>
              <div className="flex flex-col items-center">
                <span className="font-medium text-sm sm:text-base text-center">{category.name}</span>
                {showCategoryCounts && (
                  <span className={`text-xs mt-1 px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {category.count}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Grid/List View */}
      {currentItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">😔</div>
          <h3 className="text-xl font-semibold mb-2">لا توجد منتجات</h3>
          <p className="text-muted-foreground">جرب تغيير معايير البحث أو الفلترة</p>
        </div>
      ) : (
        <>
          {viewMode === 'grid' ? (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {currentItems.map((item) => {
                const discount = calculateDiscount(item.priceOld, item.priceNew)
                const isFavorite = favoriteItems.includes(item.id)
                const inCompare = compareItems.includes(item.id)
                const isRecentlyViewed = viewedItems.includes(item.id)
                const isNew = new Date(item.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                
                return (
                  <div 
                    key={item.id} 
                    className="group rounded-xl overflow-hidden bg-card border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                  >
                    {isNew && (
                      <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                        🆕 جديد
                      </div>
                    )}
                    
                    {isRecentlyViewed && (
                      <div className="absolute top-12 right-3 z-10 px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                        👀 شاهدته
                      </div>
                    )}
                    
                    {/* Image Container */}
                    <div
                      onClick={() => {
                        setSelectedItem(item)
                        setActiveImage(item.image)
                        setSelectedColor("")
                        // إضافة للمنتجات التي تم عرضها
                        setViewedItems(prev => {
                          if (!prev.includes(item.id)) {
                            return [item.id, ...prev.slice(0, 9)]
                          }
                          return prev
                        })
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
                      
                      {/* Action Buttons Overlay */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                        <button
                          onClick={(e) => toggleFavorite(item.id, e)}
                          className={`p-2 rounded-full transition-colors ${
                            isFavorite ? "bg-red-500 text-white" : "bg-black/50 hover:bg-black/70 text-white"
                          }`}
                          title={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
                        >
                          <Heart className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} />
                        </button>
                        
                        <button
                          onClick={(e) => toggleCompare(item.id, e)}
                          className={`p-2 rounded-full transition-colors ${
                            inCompare ? "bg-blue-500 text-white" : "bg-black/50 hover:bg-black/70 text-white"
                          }`}
                          title={inCompare ? "إزالة من المقارنة" : "إضافة للمقارنة"}
                        >
                          <Compare className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={(e) => handleQuickView(item, e)}
                          className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                          title="عرض سريع"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setShowShareMenu(showShareMenu === item.id ? null : item.id)
                            }}
                            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
                            title="مشاركة"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                          
                          {showShareMenu === item.id && (
                            <div className="absolute left-full top-0 ml-1 bg-white rounded-lg shadow-xl border p-2 w-40">
                              <button
                                onClick={() => shareProduct(item, 'whatsapp')}
                                className="w-full text-right p-2 hover:bg-gray-100 rounded text-sm flex items-center justify-between"
                              >
                                واتساب
                                <span className="text-green-500">📱</span>
                              </button>
                              <button
                                onClick={() => shareProduct(item, 'facebook')}
                                className="w-full text-right p-2 hover:bg-gray-100 rounded text-sm flex items-center justify-between"
                              >
                                فيسبوك
                                <span className="text-blue-500">📘</span>
                              </button>
                              <button
                                onClick={() => shareProduct(item, 'copy')}
                                className="w-full text-right p-2 hover:bg-gray-100 rounded text-sm flex items-center justify-between"
                              >
                                نسخ الرابط
                                <span className="text-gray-500">🔗</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      
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
                          data-src={item.image}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{item.icon || "📦"}</span>
                            <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                              {item.category}
                            </p>
                          </div>
                          <h3 className="text-lg font-bold mt-1 line-clamp-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Rating and Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{item.rating}</span>
                          <span className="text-gray-500">({item.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                          <ShoppingBag className="w-4 h-4" />
                          <span>{item.orders}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="text-xs text-gray-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3" />
                          <span>التوصيل خلال {item.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">المقاس:</span>
                          <span>{item.dimensions}</span>
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
          ) : (
            // List View
            <div className="space-y-4">
              {currentItems.map((item) => {
                const discount = calculateDiscount(item.priceOld, item.priceNew)
                const isFavorite = favoriteItems.includes(item.id)
                const inCompare = compareItems.includes(item.id)
                const isNew = new Date(item.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                
                return (
                  <div 
                    key={item.id} 
                    className="group flex flex-col md:flex-row gap-4 rounded-xl overflow-hidden bg-card border hover:shadow-xl transition-all duration-300 p-4"
                  >
                    {/* Image Container */}
                    <div className="cursor-pointer relative md:w-1/3">
                      {isNew && (
                        <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                          🆕 جديد
                        </div>
                      )}
                      
                      <div
                        onClick={() => {
                          setSelectedItem(item)
                          setActiveImage(item.image)
                          setSelectedColor("")
                          // إضافة للمنتجات التي تم عرضها
                          setViewedItems(prev => {
                            if (!prev.includes(item.id)) {
                              return [item.id, ...prev.slice(0, 9)]
                            }
                            return prev
                          })
                          router.push(`/portfolio?product=${item.id}`, { scroll: false })
                        }}
                      >
                        {/* Action Buttons Overlay */}
                        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                          <button
                            onClick={(e) => toggleFavorite(item.id, e)}
                            className={`p-2 rounded-full transition-colors ${
                              isFavorite ? "bg-red-500 text-white" : "bg-black/50 hover:bg-black/70 text-white"
                            }`}
                            title={isFavorite ? "إزالة من المفضلة" : "إضافة للمفضلة"}
                          >
                            <Heart className="w-4 h-4" fill={isFavorite ? "currentColor" : "none"} />
                          </button>
                          
                          <button
                            onClick={(e) => toggleCompare(item.id, e)}
                            className={`p-2 rounded-full transition-colors ${
                              inCompare ? "bg-blue-500 text-white" : "bg-black/50 hover:bg-black/70 text-white"
                            }`}
                            title={inCompare ? "إزالة من المقارنة" : "إضافة للمقارنة"}
                          >
                            <Compare className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Discount Badge */}
                        {discount > 0 && (
                          <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-red-500 text-white font-bold rounded-full text-sm">
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
                        
                        <div className="aspect-square overflow-hidden rounded-lg">
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
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-2 space-y-4">
                      <div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-3xl">{item.icon || "📦"}</span>
                              <div>
                                <p className="text-xs text-primary font-semibold uppercase tracking-wider">
                                  {item.category}
                                </p>
                                {isNew && (
                                  <span className="px-2 py-0.5 bg-green-100 text-green-800 text-xs rounded-full">
                                    جديد
                                  </span>
                                )}
                              </div>
                            </div>
                            <h3 className="text-xl font-bold">
                              {item.title}
                            </h3>
                          </div>
                          
                          <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2">
                              {item.priceOld > item.priceNew && (
                                <span className="text-sm line-through text-gray-500">
                                  {item.priceOld.toLocaleString()} ج.م
                                </span>
                              )}
                              <span className="text-2xl font-bold text-primary">
                                {item.priceNew.toLocaleString()} ج.م
                              </span>
                            </div>
                            {discount > 0 && (
                              <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded mt-1">
                                وفر {discount}%
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Rating and Stats */}
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-medium">{item.rating}</span>
                            <span className="text-gray-500">({item.reviews} تقييم)</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <Eye className="w-4 h-4" />
                            <span>{item.views} مشاهدة</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500 text-sm">
                            <ShoppingBag className="w-4 h-4" />
                            <span>{item.orders} طلب</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {item.description}
                        </p>
                        
                        {/* Details */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <div>
                              <div className="text-gray-500">التوصيل خلال</div>
                              <div className="font-medium">{item.estimatedDelivery}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500">المقاس:</span>
                            <span className="font-medium">{item.dimensions}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500">آخر طلب:</span>
                            <span className="font-medium">{item.lastOrder}</span>
                          </div>
                        </div>
                        
                        {/* Details List */}
                        {item.details[0] && (
                          <div className="space-y-1 mb-4">
                            <h4 className="font-semibold text-sm">المواصفات:</h4>
                            <ul className="text-sm space-y-1">
                              {item.details.map((detail: string, index: number) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Colors */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-sm mb-2">الألوان المتاحة:</h4>
                          <div className="flex gap-2 flex-wrap">
                            {item.colors.map((color: string, index: number) => (
                              <span
                                key={index}
                                className="px-3 py-1 rounded-full bg-secondary text-sm"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            copyProductLink(item.id)
                          }}
                          className={`flex-1 md:flex-none py-2 px-4 rounded-lg font-medium transition flex items-center justify-center gap-2 text-sm ${
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
                          className="flex-1 md:flex-none py-2 px-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition text-sm"
                        >
                          عرض التفاصيل
                        </button>
                        
                        <button
                          onClick={(e) => toggleCompare(item.id, e)}
                          className={`flex-1 md:flex-none py-2 px-4 rounded-lg font-medium transition text-sm flex items-center justify-center gap-2 ${
                            inCompare ? "bg-blue-500 text-white" : "bg-secondary hover:bg-secondary/80"
                          }`}
                        >
                          <Compare className="w-4 h-4" />
                          {inCompare ? "تمت الإضافة" : "مقارنة"}
                        </button>
                        
                        <button
                          onClick={handleWhatsAppClick}
                          className="flex-1 md:flex-none py-2 px-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-medium transition text-sm flex items-center justify-center gap-2"
                        >
                          💬 واتساب
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
              <div className="text-sm text-gray-500">
                عرض {Math.min((currentPage - 1) * itemsPerPage + 1, filteredItems.length)} إلى {Math.min(currentPage * itemsPerPage, filteredItems.length)} من {filteredItems.length} منتج
              </div>
              
              <div className="flex items-center gap-2">
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
            </div>
          )}
        </>
      )}

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{quickViewItem.icon || "📦"}</span>
                  <h3 className="text-xl font-bold">{quickViewItem.title}</h3>
                </div>
                <button
                  onClick={() => setQuickViewItem(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={quickViewItem.image}
                    alt={quickViewItem.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-semibold">
                      {quickViewItem.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{quickViewItem.rating}</span>
                      <span className="text-gray-500">({quickViewItem.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{quickViewItem.description}</p>
                  
                  <div className="flex items-center gap-3">
                    {quickViewItem.priceOld > quickViewItem.priceNew && (
                      <span className="text-lg line-through text-gray-500">
                        {quickViewItem.priceOld.toLocaleString()} ج.م
                      </span>
                    )}
                    <span className="text-2xl font-bold text-primary">
                      {quickViewItem.priceNew.toLocaleString()} ج.م
                    </span>
                    {calculateDiscount(quickViewItem.priceOld, quickViewItem.priceNew) > 0 && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        خصم {calculateDiscount(quickViewItem.priceOld, quickViewItem.priceNew)}%
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSelectedItem(quickViewItem)
                        setActiveImage(quickViewItem.image)
                        setQuickViewItem(null)
                      }}
                      className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
                    >
                      عرض التفاصيل الكاملة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal - المعدل ليكون مناسباً لجميع الأجهزة */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-auto">
          <div className="bg-background w-full h-full sm:h-auto sm:max-w-4xl sm:max-h-[95vh] sm:rounded-2xl relative sm:my-8 overflow-y-auto">
            <button
              onClick={() => {
                setSelectedItem(null)
                router.push("/portfolio", { scroll: false })
              }}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl z-10 p-2 hover:bg-secondary rounded-full transition"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-3 sm:p-4 md:p-6">
              {/* Images */}
              <div className="space-y-3 sm:space-y-4">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={activeImage}
                    width={600}
                    height={600}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                    alt={selectedItem.title}
                  />
                  {!selectedItem.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-base sm:text-lg">
                        غير متوفر حالياً
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 px-1">
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
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover"
                        alt={`صورة ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-2xl sm:text-3xl">{selectedItem.icon || "📦"}</span>
                      <span className="text-xs sm:text-sm text-primary font-semibold uppercase tracking-wider">
                        {selectedItem.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" />
                      <span className="font-medium text-sm sm:text-base">{selectedItem.rating}</span>
                      <span className="text-gray-500 text-xs sm:text-sm">({selectedItem.reviews} تقييم)</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2">{selectedItem.title}</h2>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">{selectedItem.description}</p>
                  
                  <div className="flex items-center gap-2 sm:gap-4 mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{selectedItem.views} مشاهدة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ShoppingBag className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{selectedItem.orders} طلب</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>آخر طلب: {selectedItem.lastOrder}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Discount */}
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                  {selectedItem.priceOld > selectedItem.priceNew && (
                    <>
                      <span className="text-lg sm:text-xl line-through text-gray-500">
                        {selectedItem.priceOld.toLocaleString()} ج.م
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold text-primary">
                        {selectedItem.priceNew.toLocaleString()} ج.م
                      </span>
                      <span className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-sm sm:text-base font-bold">
                        خصم {calculateDiscount(selectedItem.priceOld, selectedItem.priceNew)}%
                      </span>
                    </>
                  )}
                  {selectedItem.priceOld <= selectedItem.priceNew && (
                    <span className="text-2xl sm:text-3xl font-bold text-primary">
                      {selectedItem.priceNew.toLocaleString()} ج.م
                    </span>
                  )}
                </div>

                {/* Details List */}
                {selectedItem.details[0] && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-base sm:text-lg">تفاصيل المنتج:</h4>
                    <ul className="space-y-1 text-sm sm:text-base">
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
                  <h4 className="font-semibold text-base sm:text-lg mb-3">اختر اللون:</h4>
                  <div className="flex gap-2 sm:gap-3 flex-wrap">
                    {selectedItem.colors.map((color: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`px-3 sm:px-4 py-2 rounded-full border text-sm transition-all ${
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

                {/* Delivery Info */}
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <h4 className="font-semibold text-base sm:text-lg mb-2 flex items-center gap-2">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    معلومات التوصيل
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">مدة التصنيع:</span>
                      <span className="font-medium">15-20 يوم عمل</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">مدة التوصيل:</span>
                      <span className="font-medium">3-7 أيام بعد التصنيع</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">التوصيل:</span>
                      <span className="font-medium text-green-600">شحن لجميع المحافظات</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الضمان:</span>
                      <span className="font-medium flex items-center gap-1">
                        <Shield className="w-4 h-4 text-green-600" />
                        5 سنوات
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 sm:py-4 rounded-xl transition text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <span>💬</span>
                    شراء / استفسار عبر واتساب
                  </button>
                  
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        copyProductLink(selectedItem.id)
                      }}
                      className={`py-2 sm:py-3 rounded-lg font-medium transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                        copiedItemId === selectedItem.id
                          ? "bg-green-500 text-white"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      {copiedItemId === selectedItem.id ? "✅ تم النسخ" : "🔗 نسخ الرابط"}
                    </button>
                    
                    <button
                      onClick={(e) => toggleFavorite(selectedItem.id, e)}
                      className={`py-2 sm:py-3 rounded-lg font-medium transition flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                        favoriteItems.includes(selectedItem.id)
                          ? "bg-red-500 text-white"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" fill={favoriteItems.includes(selectedItem.id) ? "currentColor" : "none"} />
                      {favoriteItems.includes(selectedItem.id) ? "في المفضلة" : "إضافة للمفضلة"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Products */}
            {similarProducts.length > 0 && (
              <div className="border-t mt-6 pt-6 px-3 sm:px-4 md:px-6 pb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-4">منتجات مشابهة</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                  {similarProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        setSelectedItem(product)
                        setActiveImage(product.image)
                      }}
                      className="cursor-pointer group"
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />
                      </div>
                      <div className="text-xs sm:text-sm font-medium line-clamp-1">{product.title}</div>
                      <div className="text-primary font-bold text-sm sm:text-base">{product.priceNew.toLocaleString()} ج.م</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
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
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
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

        /* تحسينات للموبايل */
        @media (max-width: 640px) {
          .sm\:hidden {
            display: none !important;
          }
          
          input, select, button {
            font-size: 16px !important; /* منع التكبير في iOS */
          }
        }

        /* تحسينات للتابلت */
        @media (min-width: 641px) and (max-width: 1024px) {
          .md\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}