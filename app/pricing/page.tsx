import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PricingCards } from "@/components/pricing-cards"

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-20 bg-secondary/30 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-4">أسعار شفافة</h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              ثلاث مستويات من الحرفية لتتناسب مع رؤيتك وميزانيتك. جميع القطع تشمل ضمان حرفيتنا مدى الحياة والخدمة
              الاستثنائية.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <PricingCards />

            {/* Additional Info */}
            <div className="mt-16 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">في كل الأسعار</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>استشارة تصميم احترافية</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>اختيار خامات فاخرة</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>حرفية من أفضل الحرفيين</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>ضمان جودة مدى الحياة</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">مش متأكد منهم؟</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  كل مشروع فريد. نفضل نعمل استشارة مجانية عشان نتناقش احتياجاتك والألوان الجديدة والميزانية. فريقنا
                  بتاعنا هيساعدك تلاقي الحل الكويس.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  احجز استشارة
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
