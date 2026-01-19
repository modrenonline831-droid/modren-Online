import { Hammer, Scissors , ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Hammer,
    title: "حرفة صنعة منذ سنوات و خبرة اكثر من 30 سنة",
    description: "أخشبنا ب الكامل زان احمر طبيعي مستورد بأسعار تجارية",
  },
  {
    icon: Scissors ,
    title: "حرفة تشطيب",
    description:
      "أعلي فنش تشطيب من قلب دمياط بأعلي الخامات بضمان 20 سنة ",
  },
  {
    icon: ShieldCheck,
    title: "ضمان الجودة الفعلي",
    description:
      "احنا واقفين ورا كل قطعة. لو فيها أي مشكلة، بندعمك بالكامل. الضمان بتاعنا مدى الحياة لأننا واثقين في اللي بنعمله.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">ليه تختارنا؟</h2>
          <p className="text-lg text-muted-foreground">لأننا مميزون في الأثاث المودرن و الركن</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
