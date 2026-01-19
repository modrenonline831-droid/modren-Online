export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              أحدث تصميم مودرن بأعلي جودة وافضل سعر
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تصاميم تختف الانظار و جودة تدوم لأجيال , أثاث دمياط أعلي الخامات و افضل الأسعار تحت رعاية مودرن أونلاين 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                كتالوج
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
               أخترالتصميم ال ينسبك 
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary">
            <img
              src="/handcrafted-wood-furniture-showcase.jpg"
              alt="Beautiful handcrafted furniture piece"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
