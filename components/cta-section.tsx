"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, Phone, Ruler, Home, ChevronRight, Sparkles, CheckCircle } from "lucide-react"

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentSize, setCurrentSize] = useState(0)

  const sizes = [
    { value: "2×3", label: "صغير", desc: "للغرف الصغيرة", icon: "📏" },
    { value: "3×4", label: "متوسط", desc: "مناسب للمعيشة", icon: "🛋️" },
    { value: "4×5", label: "كبير", desc: "للصالات الكبيرة", icon: "🏠" },
    { value: "مقاسات خاصة", label: "مخصص", desc: "حسب طلبك", icon: "🎯" }
  ]

  // دوران تلقائي بين المقاسات
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSize((prev) => (prev + 1) % sizes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleContactClick = (method: string) => {
    if (method === 'whatsapp') {
      window.open('https://wa.me/201015262864', '_blank')
    } else if (method === 'phone') {
      window.open('tel:+201015262864', '_blank')
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>تخصيص حسب المساحة</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                حدد 
                <span className="block text-yellow-300 mt-2">مساحتك الخاصة</span>
                ونحن نصنع الحل المثالي
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                متاح جميع المقاسات بجميع التفاصيل. نوفر لك حلول أثاث مخصصة تناسب كل مساحة، من الغرف الصغيرة إلى الصالات الكبيرة.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: "📏", title: "جميع المقاسات", desc: "من الصغير للكبير" },
                { icon: "🎨", title: "تخصيص كامل", desc: "حسب ذوقك" },
                { icon: "⚡", title: "تنفيذ سريع", desc: "خلال 15 يوم" },
                { icon: "🛡️", title: "ضمان 20 سنة", desc: "جودة مضمونة" },
                { icon: "🚚", title: "توصيل مجاني", desc: "للمدن الكبرى" },
                { icon: "🎯", title: "استشارة مجانية", desc: "مع متخصص" }
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <div className="font-bold text-white text-sm">{feature.title}</div>
                      <div className="text-white/70 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100+</div>
                <div className="text-white/80 text-sm">مقاس متاح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-white/80 text-sm">مشروع مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-white/80 text-sm">رضا العملاء</div>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive */}
          <div className="space-y-8">
            {/* Size Selector */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-8 h-8 text-yellow-300" />
                <div>
                  <h3 className="text-xl font-bold text-white">اختر مقاس مساحتك</h3>
                  <p className="text-white/70 text-sm">المقاسات المتاحة لدينا</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {sizes.map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSize(idx)}
                    className={`group p-4 rounded-xl text-center transition-all duration-300 ${
                      currentSize === idx
                        ? 'bg-yellow-500 text-gray-900 shadow-2xl scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    <div className="text-3xl mb-2">{size.icon}</div>
                    <div className="text-2xl font-bold">{size.value}</div>
                    <div className="text-sm opacity-90">{size.label}</div>
                    <div className="text-xs opacity-70 mt-1">{size.desc}</div>
                  </button>
                ))}
              </div>

              {/* Current Size Display */}
              <div className="bg-gradient-to-r from-white/20 to-white/10 rounded-xl p-6 text-center">
                <div className="text-sm text-white/80 mb-2">المقاس المحدد حالياً</div>
                <div className="text-5xl font-bold text-white mb-2">{sizes[currentSize].value}</div>
                <div className="text-white/90">{sizes[currentSize].desc}</div>
              </div>
            </div>

            {/* Measurement Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-yellow-300" />
                <div>
                  <h3 className="text-xl font-bold text-white">أرسل مقاسات مساحتك</h3>
                  <p className="text-white/70 text-sm">لنقوم بتصميم الحل الأمثل</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="الطول (متر)"
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  <input
                    type="text"
                    placeholder="العرض (متر)"
                    className="bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <textarea
                  placeholder="تفاصيل إضافية عن المساحة (أبواب، نوافذ، إلخ)..."
                  rows={3}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                />
              </div>

              <button
                onClick={() => handleContactClick('whatsapp')}
                className="w-full group bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-gray-900 font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>أرسل المقاسات عبر واتساب</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-3">مستعد لبدء مشروعك؟</h3>
              <p className="text-white/80">
                تواصل معنا الآن للحصول على استشارة مجانية وتصميم مخصص لمساحتك
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleContactClick('whatsapp')}
                className="group bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب</span>
                <span className="text-lg">💬</span>
              </button>
              
              <button
                onClick={() => handleContactClick('phone')}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>اتصال مباشر</span>
                <span className="text-lg">📞</span>
              </button>
              
              <Link
                href="/portfolio"
                className="group bg-transparent border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3"
              >
                <span>📚</span>
                <span>شاهد الكتالوج</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>استشارة مجانية</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>تصميم مخصص</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>ضمان 20 سنة</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-300" />
              <span>توصيل وتركيب</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
    </section>
  )
}