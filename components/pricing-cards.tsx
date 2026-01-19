"use client"

import { useState } from "react"

const steps = [
  {
    title: "عايز تعمل قطعة أثاث مخصوصة ليك؟",
    text: "إحنا بنبدأ دايمًا بفهم فكرتك واستخدامك الحقيقي للقطعة.",
  },
  {
    title: "المكان عندك شكله إيه؟",
    text: "بنراعي المساحة، الحركة، والإضاءة علشان القطعة تبقى مريحة.",
  },
  {
    title: "تحب خشب وشكل إيه؟",
    text: "بنساعدك تختار نوع الخشب، اللون، والتشطيب المناسب ليك.",
  },
  {
    title: "تحب تكون القطعة عاملة إزاي؟",
    text: "بنصمم قطعة متفصلة على بيتك مش على مقاس عام.",
  },
  {
    title: "جاهز نبدأ التنفيذ؟",
    text: "تنفيذ يدوي بإيد حرفيين وضمان جودة مدى الحياة.",
  },
]

export function PricingCards() {
  const [currentStep, setCurrentStep] = useState(0)
  const isLast = currentStep === steps.length - 1

  return (
    <section className="py-24 flex justify-center px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center space-y-8 shadow-md">
        {/* Progress */}
        <div className="text-sm text-muted-foreground">
          خطوة {currentStep + 1} من {steps.length}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{steps[currentStep].title}</h2>
          <p className="text-muted-foreground">{steps[currentStep].text}</p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {!isLast ? (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              التالي
            </button>
          ) : (
            <a
              href="https://wa.me/201015262864?text=مرحبا، حابب أبدأ في تصميم قطعة أثاث مخصوصة"
              target="_blank"
              className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              تواصل عبر واتساب
            </a>
          )}

          {currentStep > 0 && !isLast && (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="text-sm text-muted-foreground hover:underline"
            >
              رجوع
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
