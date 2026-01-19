import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-balance">حدد مساحتك </h2>
        <p className="text-lg opacity-90 text-balance">
          متاح جميع المقاسات بجميع التفاصيل . تواصل معانا الان 
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          تواصل معنا دلوقتي
        </Link>
      </div>
    </section>
  )
}
