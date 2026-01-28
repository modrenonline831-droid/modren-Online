"use client"

import { useState, useEffect } from "react"
import { MessageCircle, ArrowRight, ArrowLeft, CheckCircle, Sparkles, Ruler, Palette, Home, Hammer, Shield } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "عايز تعمل قطعة أثاث مخصوصة ليك؟",
    text: "إحنا بنبدأ دايمًا بفهم فكرتك واستخدامك الحقيقي للقطعة. كل مشروع بيبدأ من حكاية، واحنا بنسمع حكايتك الأول.",
    icon: "💭",
    color: "from-blue-500 to-cyan-500",
    features: ["استشارة مجانية", "تصميم مبدئي", "تحديد الميزانية"],
    image: "https://cdn-icons-png.flaticon.com/512/3022/3022894.png"
  },
  {
    id: 2,
    title: "المكان عندك شكله إيه؟",
    text: "بنراعي المساحة، الحركة، والإضاءة علشان القطعة تبقى مريحة وتتناسب مع ديكور بيتك بشكل مثالي.",
    icon: "🏠",
    color: "from-emerald-500 to-green-500",
    features: ["قياس المساحة", "تحليل الإضاءة", "تخطيط الحركة"],
    image: "https://cdn-icons-png.flaticon.com/512/3467/3467982.png"
  },
  {
    id: 3,
    title: "تحب خشب وشكل إيه؟",
    text: "بنساعدك تختار نوع الخشب، اللون، والتشطيب المناسب ليك. عندنا أكثر من 50 نوع خشب و100+ لون.",
    icon: "🎨",
    color: "from-amber-500 to-orange-500",
    features: ["اختيار الخشب", "تحديد اللون", "نوع التشطيب"],
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972544.png"
  },
  {
    id: 4,
    title: "تحب تكون القطعة عاملة إزاي؟",
    text: "بنصمم قطعة متفصلة على بيتك مش على مقاس عام. كل تفصيلة بتتنفذ بدقة واهتمام.",
    icon: "📐",
    color: "from-purple-500 to-pink-500",
    features: ["تصميم ثلاثي الأبعاد", "موافقة نهائية", "بدء التصنيع"],
    image: "https://cdn-icons-png.flaticon.com/512/3246/3246707.png"
  },
  {
    id: 5,
    title: "جاهز نبدأ التنفيذ؟",
    text: "تنفيذ يدوي بإيد حرفيين وضمان جودة مدى الحياة. جاهزين نبدأ رحلة صناعة قطعتك الخاصة؟",
    icon: "🛠️",
    color: "from-red-500 to-rose-500",
    features: ["صناعة يدوية", "جودة مضمونة", "ضمان 5 سنوات"],
    image: "https://cdn-icons-png.flaticon.com/512/3246/3246726.png"
  }
]

const pricingPlans = [
  {
    name: "باكيج أساسي",
    price: "يبدأ من 5,000 ج",
    description: "للمشاريع الصغيرة والقطع البسيطة",
    features: [
      "تصميم مبدئي مجاني",
      "خشب زان جيد",
      "ضمان 5 سنوات",
      "توصيل داخل المدينة",
      "تركيب أساسي"
    ],
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    badge: "الأكثر طلباً"
  },
  {
    name: "باكيج احترافي",
    price: "يبدأ من 15,000 ج",
    description: "للمشاريع المتوسطة والقطع المميزة",
    features: [
      "تصميم ثلاثي الأبعاد",
      "خشب زان أحمر مستورد",
      "ضمان 10 سنوات",
      "توصيل سريع مجاني",
      "تركيب احترافي",
      "تشطيب ممتاز"
    ],
    color: "bg-purple-50 border-purple-200",
    textColor: "text-purple-700",
    badge: "الأفضل قيمة",
    popular: true
  },
  {
    name: "باكيج VIP مخصص",
    price: "سعر خاص",
    description: "للمشاريع الفاخرة والتصاميم الحصرية",
    features: [
      "تصميم كامل مخصص",
      "أفضل أنواع الخشب المستورد",
      "ضمان 5 سنوات",
      "توصيل وتركيب فاخر",
      "تشطيب سويسري",
      "متابعة شخصية",
      "صيانة مجانية"
    ],
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    badge: "فاخر"
  }
]

export function PricingCards() {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(20)
  const [isHovered, setIsHovered] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1)

  const isLast = currentStep === steps.length - 1

  // تحديث التقدم
  useEffect(() => {
    setProgress(((currentStep + 1) / steps.length) * 100)
  }, [currentStep])

  // دوران تلقائي
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (!isLast) {
          setCurrentStep(prev => (prev + 1) % steps.length)
        }
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, isLast])

  const handleWhatsAppClick = (planName: string) => {
    const message = `مرحباً، أنا مهتم بـ ${planName} وأريد معرفة المزيد عن الأسعار والتفاصيل`
    window.open(`https://wa.me/201015262864?text=${encodeURIComponent(message)}`, '_blank')
  }

  const nextStep = () => {
    if (!isLast) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const currentStepData = steps[currentStep]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">رحلة التصنيع</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              كيف نصنع قطعتك المميزة؟
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            رحلة من الفكرة إلى التنفيذ، خطوة بخطوة مع أفضل الحرفيين
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* اليسار: خطوات التصنيع */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* شريط التقدم */}
              <div className="relative h-2 bg-gray-100">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* المحتوى */}
              <div 
                className="p-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* العداد */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm font-medium text-gray-600">
                    خطوة {currentStep + 1} من {steps.length}
                  </div>
                  <div className="flex items-center gap-2">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentStep(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentStep === idx
                            ? 'bg-primary w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`الانتقال للخطوة ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* الأيقونة والعنوان */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentStepData.color} text-white text-2xl`}>
                    {currentStepData.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {currentStepData.title}
                  </h3>
                </div>

                {/* الوصف */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {currentStepData.text}
                </p>

                {/* المميزات */}
                <div className="space-y-3 mb-8">
                  {currentStepData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* الصورة */}
                <div className="mb-8">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                    <div className="flex items-center justify-center">
                      <img 
                        src={currentStepData.image} 
                        alt={currentStepData.title}
                        className="w-32 h-32 object-contain opacity-90"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/128/ffffff/000000?text=${currentStepData.icon}`
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* أزرار التنقل */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      currentStep === 0
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                    رجوع
                  </button>

                  {!isLast ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      التالي
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/201015262864?text=مرحبا، حابب أبدأ في تصميم قطعة أثاث مخصوصة"
                      target="_blank"
                      className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      ابدأ مشروعك الآن
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* إحصائيات */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "30+", label: "سنة خبرة", icon: "🎯" },
                { value: "100%", label: "رضا العملاء", icon: "⭐" },
                { value: "5", label: "سنوات ضمان", icon: "🛡️" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-200 text-center shadow-sm">
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* اليمين: الباكيجات والأسعار */}
          <div className="space-y-8">
            {/* العنوان */}
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">الباكيجات والأسعار</h3>
              <p className="text-gray-600">اختر الباكيج المناسب لمشروعك واحصل على أفضل قيمة</p>
            </div>

            {/* بطاقات الأسعار */}
            <div className="space-y-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl ${
                    selectedPlan === index
                      ? 'border-primary shadow-lg scale-[1.02]'
                      : plan.color
                  } ${plan.popular ? 'ring-2 ring-primary/20' : ''}`}
                  onClick={() => setSelectedPlan(index)}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${plan.textColor} bg-white shadow-sm`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-bold rounded-full shadow-lg">
                        ⭐ الأكثر طلباً
                      </span>
                    </div>
                  )}

                  {/* المحتوى */}
                  <div className="space-y-4">
                    {/* الاسم والسعر */}
                    <div className="text-center pt-4">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="text-3xl font-bold mb-2">{plan.price}</div>
                      <p className="text-gray-600 text-sm">{plan.description}</p>
                    </div>

                    {/* المميزات */}
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* زر التواصل */}
                    <button
                      onClick={() => handleWhatsAppClick(plan.name)}
                      className={`w-full py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-primary to-primary/80 text-white'
                          : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        استفسر عن {plan.name}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ملاحظة */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">ضمان إضافي</h4>
                  <p className="text-gray-700 text-sm">
                    جميع الباكيجات تشمل ضمان ضد العيوب الصناعية وصيانة مجانية لمدة عام
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action نهائي */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 max-w-4xl mx-auto border border-primary/20">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl blur-lg"></div>
                <div className="relative p-4 bg-white rounded-2xl shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">💬</span>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h4 className="text-2xl font-bold text-gray-900">محتار تختار باكيج؟</h4>
                <p className="text-gray-600 mt-2">تواصل معنا لنساعدك تختار الباكيج المناسب لمشروعك</p>
              </div>
            </div>
            
            <button
              onClick={() => window.open('https://wa.me/201015262864', '_blank')}
              className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-4 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg">استشارة مجانية</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}