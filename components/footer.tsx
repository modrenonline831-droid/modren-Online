import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">Modern Online</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              أثاث مصنوع يدويًا يرفع مستوى منزلك بأناقة خالدة.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">التنقل</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  كتالوج
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  صمم بنفسك
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  تواصل
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">العنوان</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              مصر، دمياط
              <br />
              مركز دمياط، باب الحرس
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">تواصل معنا</h4>
            <p className="text-muted-foreground text-sm">روح على صفحة التواصل لتجد جميع وسائل التواصل الاجتماعية.</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2026 Modern Online. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              شروط الاستخدام
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
