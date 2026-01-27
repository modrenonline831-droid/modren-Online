"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Phone, MessageCircle, ShoppingCart, Search, User, ChevronDown, Truck, Shield } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  // تتبع التمرير
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // القوائم
  const navLinks = [
    { label: "الرئيسية", href: "/", icon: "🏠" },
    { 
      label: "المنتجات", 
      href: "/portfolio",
      icon: "🛋️",
      submenu: [
        { label: "أنترية مغلف", href: "/portfolio?category=أنترية مغلف", count: 12 },
        { label: "ركن", href: "/portfolio?category=ركن", count: 8 },
        { label: "طرابيزات", href: "/portfolio?category=طرابيزات", count: 15 },
        { label: "جزمات", href: "/portfolio?category=جزمات", count: 10 },
        { label: "فوتية", href: "/portfolio?category=فوتية", count: 7 },
        { label: "كراسي", href: "/portfolio?category=كراسي", count: 9 }
      ]
    },
    { label: "صمم بنفسك", href: "/pricing", icon: "🎨" },
    { label: "عنا", href: "/about", icon: "ℹ️" },
    { label: "اتصل بنا", href: "/contact", icon: "📞" }
  ]

  const handleContactClick = (method: string) => {
    if (method === 'whatsapp') {
      window.open('https://wa.me/201015262864', '_blank')
    } else if (method === 'phone') {
      window.open('tel:+201015262864', '_blank')
    }
  }

  return (
    <>
      {/* شريط العلوي */}
      <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>متصلون الآن</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>توصيل مجاني للطلبات فوق 10,000 ج</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleContactClick('phone')}
              className="flex items-center gap-2 hover:text-yellow-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold">+20 101 526 2864</span>
            </button>
            <div className="h-4 w-px bg-white/30"></div>
            <button 
              onClick={() => handleContactClick('whatsapp')}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>واتساب سريع</span>
            </button>
          </div>
        </div>
      </div>

      {/* الهيدر الرئيسي */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* اليسار: اللوجو */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* لوجو الكنبة من الصورة */}
                <div className="relative w-14 h-14 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  {/* صورة الكنبة من الملف الموجود */}
                  <div className="relative w-10 h-10">
                    <Image
                      src="/handcrafted-wood-furniture-showcase.jpg"
                      alt="Modern Online Logo - Handcrafted Wood Furniture"
                      fill
                      className="object-cover rounded-lg"
                      sizes="40px"
                      priority
                    />
                    {/* Overlay لتوضيح الكنبة */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                  </div>
                  
                  {/* تأثير تألق حول اللوجو */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* مؤشر الكنبة الصغير */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                </div>
                
                {/* تأثير خارجي */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Modern Online
                </span>
                <span className="text-xs text-gray-500">أثاث دمياطي منذ 1990</span>
              </div>
            </Link>

            {/* الوسط: القائمة الرئيسية */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((item) => (
                <div 
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 font-medium"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeMenu === item.label ? 'rotate-180' : ''
                      }`} />
                    )}
                  </Link>

                  {/* القائمة الفرعية */}
                  {item.submenu && activeMenu === item.label && (
                    <div className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 mt-1 overflow-hidden">
                      <div className="p-4">
                        <div className="mb-3">
                          <div className="font-bold text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-500">تصفح جميع الفئات</div>
                        </div>
                        <div className="space-y-2">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.label}
                              href={subitem.href}
                              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-gray-700 group-hover:text-primary">
                                  {subitem.label}
                                </span>
                              </div>
                              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {subitem.count}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={item.href}
                          className="mt-3 block w-full text-center bg-gradient-to-r from-primary/10 to-primary/5 text-primary font-bold py-2 rounded-lg hover:from-primary/20 hover:to-primary/10 transition-all"
                          onClick={() => setActiveMenu(null)}
                        >
                          عرض جميع المنتجات
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* اليمين: أزرار الإجراءات */}
            <div className="flex items-center gap-3">
              {/* زر البحث */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>

              {/* حساب المستخدم */}
              <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <User className="w-5 h-5 text-gray-600" />
              </button>

              {/* سلة المشتريات */}
              <button className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary hover:from-primary/20 hover:to-primary/10 transition-all">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* زر التواصل الرئيسي */}
              <button
                onClick={() => handleContactClick('whatsapp')}
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>طلب سريع</span>
              </button>

              {/* زر القائمة للجوال */}
              <button 
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="القائمة"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* القائمة للجوال */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl max-h-[calc(100vh-200px)] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4">
              {/* بحث سريع */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث عن منتج..."
                    className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 pl-12 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* الروابط */}
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </Link>

                    {/* القائمة الفرعية للجوال */}
                    {item.submenu && (
                      <div className="pr-8 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="flex items-center justify-between py-2 px-8 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span>{subitem.label}</span>
                            </div>
                            <span className="text-sm bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                              {subitem.count}
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* أزرار إضافية للجوال */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      handleContactClick('whatsapp')
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 rounded-xl"
                  >
                    <MessageCircle className="w-5 h-5" />
                    واتساب
                  </button>
                  <button
                    onClick={() => {
                      handleContactClick('phone')
                      setIsMenuOpen(false)
                    }}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white font-bold py-3 rounded-xl"
                  >
                    <Phone className="w-5 h-5" />
                    اتصل بنا
                  </button>
                </div>
              </div>

              {/* معلومات سريعة */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <div className="font-bold text-blue-700">ضمان 20 سنة</div>
                  </div>
                  <div className="text-sm text-blue-600">جودة مضمونة</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div className="font-bold text-green-700">توصيل سريع</div>
                  </div>
                  <div className="text-sm text-green-600">خلال 3-7 أيام</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}