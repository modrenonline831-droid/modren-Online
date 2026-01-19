import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-20 bg-secondary/30 border-b border-border">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-balance mb-4">كتالوج </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
             أستكشف تميزنا ف الخامات و الاشكال الراقية و التصاميم الجديدة متميزين في اجود الخامات و الخشب الزان الاحمر الطبيعيتم تأكيد الحجز، برجاء دفع العربون

            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <PortfolioGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
