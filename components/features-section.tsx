"use client"
import { Hammer, Scissors, ShieldCheck, Sparkles, Award, Clock } from "lucide-react"

const features = [
  {
    icon: Hammer,
    title: "حرفة صنعة منذ سنوات و خبرة اكثر من 30 سنة",
    description: "أخشابنا كاملة من الزان الأحمر الطبيعي المستورد بأسعار تجارية تنافسية",
    stats: "30+ سنة خبرة",
    color: "amber"
  },
  {
    icon: Scissors,
    title: "حرفة تشطيب متقنة",
    description: "أعلى فنش تشطيب من قلب دمياط بأفضل الخامات وبضمان 20 سنة على كل قطعة",
    stats: "ضمان 5 سنوات",
    color: "emerald"
  },
  {
    icon: ShieldCheck,
    title: "ضمان الجودة الفعلي",
    description: "احنا واقفين ورا كل قطعة. لو فيها أي مشكلة، بندعمك بالكامل. الضمان بتاعنا مدى الحياة لأننا واثقين في اللي بنعمله.",
    stats: "ضمان مدى الحياة",
    color: "blue"
  },
  {
    icon: Sparkles,
    title: "تصميمات مودرن وعصرية",
    description: "نواكب أحدث صيحات الديكور العالمي ونقدمها بتصميمات تناسب الذوق العربي",
    stats: "100+ تصميم",
    color: "purple"
  },
  {
    icon: Award,
    title: "جائزة التميز في الصناعة",
    description: "حاصلين على جائزة أفضل مصنع أثاث مودرن في دمياط لعام 2023",
    stats: "حاصل على جائزة",
    color: "yellow"
  },
  {
    icon: Clock,
    title: "تسليم في الوقت المحدد",
    description: "التزامنا بتسليم المنتجات في الوقت المتفق عليه مع الحفاظ على أعلى معايير الجودة",
    stats: "95% تسليم في الوقت",
    color: "indigo"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">لماذا نكون اختيارك الأول؟</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            ليه تختارنا عن غيرنا؟
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            لأننا لا نصنع أثاثاً فقط، بل نصنع ذكريات تدوم مدى الحياة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              amber: "bg-amber-500/10 text-amber-600 border-amber-200",
              emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
              blue: "bg-blue-500/10 text-blue-600 border-blue-200",
              purple: "bg-purple-500/10 text-purple-600 border-purple-200",
              yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
              indigo: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
            }

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card border hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-6 md:p-8"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary rounded-full translate-y-20 -translate-x-20"></div>
                </div>

                {/* Icon Container */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl ${colorClasses[feature.color as keyof typeof colorClasses]} 
                  flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                    {feature.stats}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/10 transition-colors duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Stats Counter Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "5000+", label: "عميل راضي", icon: "😊" },
            { value: "30+", label: "سنة خبرة", icon: "🎯" },
            { value: "5", label: "سنوات ضمان", icon: "🛡️" },
            { value: "98%", label: "رضا العملاء", icon: "⭐" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://wa.me/201015262864', '_blank')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/80 hover:to-primary text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
          >
            <span>💬</span>
            تواصل معنا الآن للحصول على استشارة مجانية
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}