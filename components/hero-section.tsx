"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Sparkles, Shield, Truck } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      image: "/handcrafted-wood-furniture-showcase.jpg",
      title: "أحدث تصميم مودرن بأعلي جودة وافضل سعر",
      subtitle: "تصاميم تختف الأنظار وجودة تدوم لأجيال",
      buttonText: "شاهد الكتالوج",
      badge: "🔥 الأكثر طلباً"
    },
    {
      image: "/1515.jpg",
      title: "أثاث دمياطي بجودة لا تقارن",
      subtitle: "خشب زان أحمر مستورد بأسعار تنافسية",
      buttonText: "استعرض المنتجات",
      badge: "🛡️ ضمان 5 سنوات"
    },
    {
      image: "/zezo.jpg",
      title: "تخفيضات تصل إلى 50%",
      subtitle: "عروض خاصة لفترة محدودة على أفضل التصاميم",
      buttonText: "اطلع على العروض",
      badge: "💥 عرض محدود"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>مصنع أثاث دمياطي منذ 1990</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                أحدث تصميمات مودرن
              </span>
              <br />
              <span className="text-foreground">بجودة تدوم وأسعار تنافسية</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              تصاميم تختفي الأنظار وجودة تدوم لأجيال. أثاث دمياطي بأعلى الخامات وأفضل الأسعار تحت رعاية{' '}
              <span className="font-bold text-primary">مودرن أونلاين</span>.
              خبرة أكثر من 30 سنة في صناعة الأثاث الدمياطي الأصيل.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="bg-secondary/50 p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">عميل راضي</div>
              </div>
              <div className="bg-secondary/50 p-4 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">سنوات ضمان</div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
                <Shield className="w-4 h-4" />
                <span>5 سنوات ضمان</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm">
                <Truck className="w-4 h-4" />
                <span>توصيل سريع</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-lg text-sm">
                <span>🎯</span>
                <span>خشب زان أحمر</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 text-lg"
              >
                <span>📚</span>
                استعرض الكتالوج
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl"
              >
                <span>🎨</span>
                اختر التصميم اللي يناسبك
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="pt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>متاحون الآن</span>
              </div>
              <span>•</span>
              <span>رد خلال 5 دقائق</span>
              <span>•</span>
              <span>98% رضا العملاء</span>
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Slides */}
              <div className="relative h-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Slide Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      {slide.badge && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-3">
                          {slide.badge}
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-white/90 text-sm">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                aria-label="السابق"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg"
                aria-label="التالي"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`الانتقال للشريحة ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/30 rounded-2xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}