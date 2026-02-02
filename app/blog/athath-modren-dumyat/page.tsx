// app/blog/athath-modren-dumyat/page.tsx

"use client"; // أضف هذا في الأعلى

import type { Metadata } from "next"
import Link from "next/link"
import { 
  FaLeaf, 
  FaRulerCombined, 
  FaShieldAlt, 
  FaShippingFast, 
  FaStar, 
  FaTag, 
  FaTools,
  FaWhatsapp,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEye
} from "react-icons/fa"
import { IoMdTimer, IoMdCheckmarkCircle } from "react-icons/io"
import { MdWorkspacePremium, MdOutlineDesignServices } from "react-icons/md"
import { GiWoodBeam } from "react-icons/gi"

// بيانات المقال للمخطط الهيكلي
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "الدليل الشامل للأثاث الدمياطي الأصلي: من التاريخ إلى الشراء",
  "description": "دليل شامل عن الأثاث الدمياطي الأصلي، تاريخه، مميزاته، أنواع الخشب المستخدم، وكيفية التمييز بين الأصلي والمقلد. تعرف على أفضل مصنع أثاث دمياطي مودرن بضمان 20 سنة.",
  "image": [
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  "datePublished": "2024-01-15T08:00:00+02:00",
  "dateModified": new Date().toISOString().split('T')[0] + "T08:00:00+02:00",
  "author": {
    "@type": "Organization",
    "name": "مودرن أونلاين",
    "url": "https://modrenonline.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "مودرن أونلاين",
    "logo": {
      "@type": "ImageObject",
      "url": "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://modrenonline.com/blog/athath-modren-dumyat"
  }
}

// إنشاء مكون Metadata كديناميكي
const BlogMetadata = () => {
  return (
    <>
      <title>الأثاث الدمياطي الأصلي | مودرن أونلاين - جودة 20 سنة ضمان</title>
      <meta name="description" content="دليل شامل عن الأثاث الدمياطي الأصلي: تاريخه، مميزاته، أنواع الخشب المستخدم، وكيفية التمييز بين الأصلي والمقلد. تعرف على أفضل مصنع أثاث دمياطي مودرن بضمان 20 سنة." />
      <meta name="keywords" content="أثاث دمياطي, مصنع أثاث دمياطي, أثاث دمياط مودرن, انتريهات دمياطية, غرف نوم دمياطية, أثاث منزلي دمياطي, كنب دمياطي, ركنات دمياطية, مودرن أونلاين, أثاث مصر دمياط, جودة الأثاث الدمياطي, ضمان الأثاث, خشب الزان الدمياطي, أثاث منزلي فاخر, ديكور داخلي, أثاث مودرن 2024" />
      <meta property="og:title" content="الأثاث الدمياطي الأصلي | مودرن أونلاين - ضمان 20 سنة" />
      <meta property="og:description" content="دليل شامل عن الأثاث الدمياطي: تاريخ، أنواع، جودة، وكيفية الشراء من أفضل مصنع في دمياط" />
      <meta property="og:url" content="https://modrenonline.com/blog/athath-modren-dumyat" />
      <meta property="og:image" content="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="ar_EG" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="الأثاث الدمياطي الأصلي | دليل شامل للشراء" />
      <meta name="twitter:description" content="كل ما تحتاج معرفته عن الأثاث الدمياطي قبل الشراء" />
      <meta name="twitter:image" content="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
      <link rel="canonical" href="https://modrenonline.com/blog/athath-modren-dumyat" />
    </>
  )
}

export default function DamiettaFurnitureGuide() {
  const publishDate = "15 يناير 2024"
  const readingTime = "12 دقيقة"
  
  return (
    <>
      {/* Schema.org للمقال */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* تاجات Metadata */}
      <BlogMetadata />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* العنوان الرئيسي مع صورة رمزية */}
        <header className="mb-12 text-center">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <GiWoodBeam className="text-white text-8xl opacity-30" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-8">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
                الدليل الشامل للأثاث الدمياطي
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                الأثاث الدمياطي الأصلي: دليل الشراء الكامل 2024
              </h1>
              <p className="text-xl opacity-90 mb-6 max-w-3xl">
                كل أسرار الأثاث الدمياطي من تاريخه العريق إلى أحدث تصميمات مودرن أونلاين
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold">تاريخ النشر:</span>
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMdTimer />
              <span>وقت القراءة: {readingTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>تصنيف: ⭐⭐⭐⭐⭐ (4.8/5)</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-blue-500" />
              <span>تمت القراءة 2,847 مرة</span>
            </div>
          </div>
        </header>

        {/* جدول المحتويات التفاعلي */}
        <nav className="sticky top-4 z-10 bg-white border border-gray-200 rounded-2xl p-6 mb-10 shadow-sm backdrop-blur-sm bg-white/95">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaRulerCombined className="text-blue-600" />
            جدول المحتويات
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { id: "section-history", label: "التاريخ", icon: "📜" },
              { id: "section-features", label: "المميزات", icon: "⭐" },
              { id: "section-wood-types", label: "أنواع الخشب", icon: "🌳" },
              { id: "section-original-vs-fake", label: "الأصلي vs المقلد", icon: "🔍" },
              { id: "section-buying-guide", label: "دليل الشراء", icon: "🛒" },
              { id: "section-modern-designs", label: "تصاميم 2024", icon: "🎨" },
              { id: "section-care", label: "الصيانة", icon: "🔧" },
              { id: "section-faq", label: "الأسئلة", icon: "❓" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex flex-col items-center justify-center p-3 bg-gray-50 hover:bg-blue-50 rounded-lg transition-all hover:scale-105 group"
              >
                <span className="text-2xl mb-1">{item.icon}</span>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">{item.label}</span>
              </a>
            ))}
          </div>
        </nav>

        {/* المحتوى الرئيسي */}
        <div className="prose prose-lg max-w-none">
          
          {/* مقدمة المقال */}
          <section className="mb-12 bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="text-blue-600 text-3xl">✨</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">مقدمة: لماذا الأثاث الدمياطي مميز؟</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  يعد <strong>الأثاث الدمياطي</strong> علامة الجودة والرفاهية في عالم الديكور والأثاث المنزلي. 
                  ليس مجرد قطع أثاث عادية، بل هو <strong>تراث عريق</strong> يمتد لقرون من الإتقان والحرفية 
                  المصرية الأصيلة. في هذا الدليل الشامل، سنأخذك في رحلة كاملة لاكتشاف:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><IoMdCheckmarkCircle className="text-green-500" /> تاريخ صناعة الأثاث في دمياط منذ العصر الفاطمي</li>
                  <li className="flex items-center gap-2"><IoMdCheckmarkCircle className="text-green-500" /> مميزات الأثاث الدمياطي الأصلي التي تجعله الأفضل</li>
                  <li className="flex items-center gap-2"><IoMdCheckmarkCircle className="text-green-500" /> كيف تفرق بين الأثاث الأصلي والمقلد؟</li>
                  <li className="flex items-center gap-2"><IoMdCheckmarkCircle className="text-green-500" /> دليل شراء مفصل من مصنع موثوق</li>
                </ul>
              </div>
            </div>
          </section>

          {/* القسم 1: تاريخ صناعة الأثاث */}
          <section id="section-history" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">📜</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-blue-600">1.</span> تاريخ صناعة الأثاث في دمياط: تراث يمتد لقرون
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  تعود جذور صناعة الأثاث في <strong className="text-blue-600">دمياط</strong> إلى <strong>العصر الفاطمي</strong> في القرن العاشر الميلادي، 
                  حيث اشتهرت المدينة بصناعة السفن الخشبية التي كانت تعبر نهر النيل. 
                  مع مرور الوقت، تحولت هذه المهارات إلى صناعة الأثاث التي نعرفها اليوم.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      <FaLeaf className="text-green-500" />
                      حقائق تاريخية مهمة:
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• القرن 10-12: بدايات صناعة الأثاث البسيط للحكام والأمراء</li>
                      <li>• العصر المملوكي: تطور النقوش والزخارف الإسلامية على الأثاث</li>
                      <li>• القرن 19: دخول الأدوات الحديثة والتقنيات الأوروبية</li>
                      <li>• القرن 20: تحول دمياط إلى عاصمة الأثاث في مصر</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-2xl p-6 text-center">
                <div className="text-5xl mb-4">🏭</div>
                <h3 className="font-bold text-gray-800 mb-2">أرقام قياسية في دمياط</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">30,000+</div>
                    <div className="text-sm text-gray-600">ورشة وحرفي</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">65%</div>
                    <div className="text-sm text-gray-600">صادرات الأثاث المصري</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">120+</div>
                    <div className="text-sm text-gray-600">دولة مستوردة</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">5 أجيال</div>
                    <div className="text-sm text-gray-600">خبرة عائلية</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* القسم 2: مميزات الأثاث الدمياطي */}
          <section id="section-features" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-green-600">2.</span> 8 مميزات تجعل الأثاث الدمياطي الأفضل عالمياً
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: "🛡️",
                  title: "ضمان 20 سنة",
                  desc: "أطول ضمان في صناعة الأثاث عالمياً",
                  color: "bg-blue-50 border-blue-200",
                  points: ["ضمان على الهيكل", "ضمان على التشطيبات", "خدمة صيانة مجانية"]
                },
                {
                  icon: "🌳",
                  title: "خامات طبيعية",
                  desc: "100% خشب طبيعي معالج",
                  color: "bg-green-50 border-green-200",
                  points: ["خشب زان أوروبي", "معالجة حرارية", "مقاوم للحشرات"]
                },
                {
                  icon: "👨‍🔧",
                  title: "حرفية يدوية",
                  desc: "تفاصيل لا تقلدها الآلات",
                  color: "bg-orange-50 border-orange-200",
                  points: ["دقة في التوصيل", "تفاصيل يدوية", "عمر افتراضي طويل"]
                },
                {
                  icon: "📏",
                  title: "تصميم مخصص",
                  desc: "حسب مقاس منزلك",
                  color: "bg-purple-50 border-purple-200",
                  points: ["تصميم ثلاثي الأبعاد", "مراعاة المساحات", "حلول تخزين ذكية"]
                },
                {
                  icon: "🎨",
                  title: "تشطيبات فاخرة",
                  desc: "دهانات أوروبية عالية الجودة",
                  color: "bg-pink-50 border-pink-200",
                  points: ["دهانات غير سامة", "لمسات نهائية دقيقة", "مقاومة للخدوش"]
                },
                {
                  icon: "🚚",
                  title: "توصيل مجاني",
                  desc: "لجميع محافظات مصر",
                  color: "bg-teal-50 border-teal-200",
                  points: ["توصيل مجاني", "تركيب احترافي", "ضمان بعد التركيب"]
                },
                {
                  icon: "💎",
                  title: "تصميمات كلاسيكية وعصرية",
                  desc: "تناسب جميع الأذواق",
                  color: "bg-yellow-50 border-yellow-200",
                  points: ["تصاميم كلاسيكية", "تصاميم مودرن", "خليط بين التراث والحداثة"]
                },
                {
                  icon: "📞",
                  title: "دعم فني مستمر",
                  desc: "24/7 خدمة عملاء",
                  color: "bg-red-50 border-red-200",
                  points: ["دعم فني دائم", "استشارات مجانية", "متابعة بعد البيع"]
                }
              ].map((feature, index) => (
                <div key={index} className={`${feature.color} border rounded-2xl p-6 transition-all hover:shadow-lg hover:-translate-y-1`}>
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{feature.desc}</p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    {feature.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* القسم 3: أنواع الخشب */}
          <section id="section-wood-types" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🌳</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-amber-600">3.</span> دليل أنواع الخشب المستخدم في الأثاث الدمياطي
              </h2>
            </div>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gradient-to-r from-amber-50 to-yellow-50">
                  <tr>
                    <th className="py-4 px-6 text-right font-bold text-gray-700 border-b">نوع الخشب</th>
                    <th className="py-4 px-6 text-right font-bold text-gray-700 border-b">المميزات</th>
                    <th className="py-4 px-6 text-right font-bold text-gray-700 border-b">السعر</th>
                    <th className="py-4 px-6 text-right font-bold text-gray-700 border-b">الاستخدام الأمثل</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "خشب الزان الأوروبي",
                      features: "أقوى أنواع الأخشاب، مقاوم للرطوبة، لا يتشقق، عمر افتراضي 50+ سنة",
                      price: "$$$ (أعلى جودة)",
                      use: "غرف النوم، المكتبات، قطع أثاث الثقيلة",
                      icon: "🪵"
                    },
                    {
                      name: "خشب الماهوجني (الموجنة)",
                      features: "لونه أحمر داكن طبيعي، مقاوم للحشرات، متين، سهل التشكيل",
                      price: "$$ (جودة فاخرة)",
                      use: "الصالونات، طاولات الطعام، الأبواب الرئيسية",
                      icon: "🟤"
                    },
                    {
                      name: "خشب الأرو (البلوط)",
                      features: "ملمس مميز، خطوط واضحة، عمر طويل، مقاوم للتآكل",
                      price: "$$ (جودة عالية)",
                      use: "الأرضيات، المطابخ، غرف المعيشة الفاخرة",
                      icon: "🌰"
                    },
                    {
                      name: "خشب السنديان",
                      features: "صلابة عالية، نمط حبيبي جميل، مقاوم للعفن",
                      price: "$$$ (فاخر)",
                      use: "المكتبات التنفيذية، الصالونات الرسمية",
                      icon: "🌲"
                    },
                    {
                      name: "MDF معاكس",
                      features: "سطح أملس، قابل للتشكيل، ثابت الأبعاد، سهل الطلاء",
                      price: "$ (اقتصادي)",
                      use: "واجهات الخزانات، الأسطح المسطحة، الأجزاء الديكورية",
                      icon: "📦"
                    }
                  ].map((wood, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 border-b font-semibold text-gray-800">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{wood.icon}</span>
                          <span>{wood.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 border-b text-gray-700">{wood.features}</td>
                      <td className="py-4 px-6 border-b">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          wood.price.includes('$$$') ? 'bg-red-100 text-red-800' :
                          wood.price.includes('$$') ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {wood.price}
                        </span>
                      </td>
                      <td className="py-4 px-6 border-b text-gray-700">{wood.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* القسم 4: مقارنة الأصلي vs المقلد */}
          <section id="section-original-vs-fake" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-red-600">4.</span> اختبار الأصلي vs المقلد: 10 علامات للتمييز
              </h2>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* الأصلي */}
                <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-700">الأثاث الدمياطي الأصلي</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      {text: "الوزن الثقيل (خشب زان حقيقي)", icon: "⚖️"},
                      {text: "رائحة خشب طبيعي مميزة", icon: "👃"},
                      {text: "توصيلات دقيقة بدون فراغات", icon: "🔧"},
                      {text: "شهادة ضمان مصدقة رسمياً", icon: "📄"},
                      {text: "سعر يعكس الجودة الحقيقية", icon: "💰"}
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* المقلد */}
                <div className="bg-white p-6 rounded-xl border-2 border-red-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">❌</span>
                    </div>
                    <h3 className="text-2xl font-bold text-red-700">الأثاث المقلد (التقليد)</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      {text: "الوزن خفيف (MDF رديء)", icon: "⚖️"},
                      {text: "رائحة كيميائية من الغراء", icon: "👃"},
                      {text: "توصيلات غير دقيقة بفراغات", icon: "🔧"},
                      {text: "لا يوجد ضمان أو ضمان وهمي", icon: "📄"},
                      {text: "سعر منخفض بشكل مريب", icon: "💰"}
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-gray-700">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* نصيحة هامة */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⚠️</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">تحذير من مودرن أونلاين:</h4>
                    <p className="opacity-95">
                      <strong>لا تنخدع بالسعر المنخفض!</strong> الفرق بين سعر الأثاث الأصلي والمقلد 
                      يعكس الفرق في الجودة والعمر الافتراضي. الأثاث المقلد ينهار خلال 2-3 سنوات، 
                      بينما الأثاث الأصلي يظل 20+ سنة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* القسم 5: دليل الشراء */}
          <section id="section-buying-guide" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛒</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-purple-600">5.</span> دليل الشراء من مصنع أثاث دمياطي موثوق
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* خطوات الشراء */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">6 خطوات للشراء الآمن من مودرن أونلاين:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {step: "١", title: "استشارة مجانية", desc: "تواصل مع خبرائنا عبر الواتساب أو الهاتف", icon: "📞"},
                    {step: "٢", title: "اختيار التصميم", desc: "اختر من 100+ تصميم أو اطلب تصميم مخصص", icon: "🎨"},
                    {step: "٣", title: "توقيع العقد", desc: "عقد رسمي مع تفاصيل المواصفات والضمان", icon: "📝"},
                    {step: "٤", title: "التصنيع في المصنع", desc: "تصنيع تحت إشراف فنيين متخصصين", icon: "🏭"},
                    {step: "٥", title: "التفتيش النهائي", desc: "فحص كل قطعة قبل التغليف", icon: "🔍"},
                    {step: "٦", title: "التوصيل والتركيب", desc: "توصيل مجاني وتركيب احترافي", icon: "🚚"}
                  ].map((item) => (
                    <div key={item.step} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-3xl font-bold text-purple-600 mb-2">{item.step}</div>
                      <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* جدول الأسعار */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">أسعار تقديرية للأثاث الدمياطي 2024</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <tr>
                        <th className="py-4 px-6 text-right font-bold">القطعة</th>
                        <th className="py-4 px-6 text-right font-bold">المقاس</th>
                        <th className="py-4 px-6 text-right font-bold">خشب الزان</th>
                        <th className="py-4 px-6 text-right font-bold">خشب الماهوجني</th>
                        <th className="py-4 px-6 text-right font-bold">مدة التصنيع</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {item: "غرفة نوم كاملة", size: "سرير + دولاب + كنبة", zan: "٢٥,٠٠٠ - ٤٠,٠٠٠", mahogany: "٣٠,٠٠٠ - ٥٠,٠٠٠", time: "١٥-٢٠ يوم"},
                        {item: "صالون ٦ قطع", size: "كنبة ٣+٢+١", zan: "٣٠,٠٠٠ - ٥٠,٠٠٠", mahogany: "٤٠,٠٠٠ - ٦٥,٠٠٠", time: "٢٠-٢٥ يوم"},
                        {item: "طاولة طعام", size: "٦ كراسي", zan: "١٥,٠٠٠ - ٢٥,٠٠٠", mahogany: "٢٠,٠٠٠ - ٣٥,٠٠٠", time: "١٠-١٥ يوم"},
                        {item: "مكتب إداري", size: "١٨٠×٨٠ سم", zan: "٨,٠٠٠ - ١٥,٠٠٠", mahogany: "١٢,٠٠٠ - ٢٠,٠٠٠", time: "٧-١٠ أيام"},
                        {item: "دولاب ملابس", size: "٢٠٠×١٨٠ سم", zan: "١٢,٠٠٠ - ٢٠,٠٠٠", mahogany: "١٨,٠٠٠ - ٢٨,٠٠٠", time: "١٢-١٨ يوم"}
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-4 px-6 font-semibold text-gray-800">{row.item}</td>
                          <td className="py-4 px-6 text-gray-700">{row.size}</td>
                          <td className="py-4 px-6 text-blue-600 font-bold">{row.zan} ج.م</td>
                          <td className="py-4 px-6 text-purple-600 font-bold">{row.mahogany} ج.م</td>
                          <td className="py-4 px-6 text-gray-700">{row.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">* الأسعار تشمل التوصيل والتركيب داخل القاهرة الكبرى</p>
              </div>
            </div>
          </section>

          {/* القسم 6: تصاميم مودرن */}
          <section id="section-modern-designs" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-teal-600">6.</span> أحدث تصاميم الأثاث المودرن 2024
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "المودرن الكلاسيكي",
                  desc: "مزيج بين الأناقة الكلاسيكية والخطوط الحديثة",
                  features: ["ألوان خشب طبيعية", "خطوط نظيفة", "تفاصيل ذهبية"],
                  ideal: "الفيلات والشقق الفاخرة",
                  icon: "👑"
                },
                {
                  title: "الاسكندنافي المينيمالست",
                  desc: "بساطة وأناقة مع التركيز على الوظيفية",
                  features: ["ألوان فاتحة", "تخزين ذكي", "إضاءة مدمجة"],
                  ideal: "الشقق الصغيرة والمكاتب",
                  icon: "🏢"
                },
                {
                  title: "اللاتري الصناعي",
                  desc: "خشب مع معدن لإطلالة عصرية وجريئة",
                  features: ["خشب مع معدن", "ألوان داكنة", "إضاءة صناعية"],
                  ideal: "لوبي الفلل والمطاعم",
                  icon: "🏭"
                },
                {
                  title: "البوهيمي المعاصر",
                  desc: "ألوان زاهية مع خطوط منحنية وأنماط نباتية",
                  features: ["ألوان متنوعة", "خطوط منحنية", "لمسات نباتية"],
                  ideal: "غرف المعيشة والاستقبال",
                  icon: "🌿"
                },
                {
                  title: "التكنولوجي الذكي",
                  desc: "أثاث مدمج مع التكنولوجيا الحديثة",
                  features: ["شواحن لاسلكية", "إضاءة ذكية", "تخزين متحرك"],
                  ideal: "غرف النوم والمكاتب الذكية",
                  icon: "📱"
                },
                {
                  title: "الإيكولوجي المستدام",
                  desc: "أثاث صديق للبيئة مع مواد معاد تدويرها",
                  features: ["مواد مستدامة", "تصاميم عضوية", "صديق للبيئة"],
                  ideal: "المنازل العصرية الواعية",
                  icon: "🌍"
                }
              ].map((design, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="text-4xl mb-4">{design.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{design.title}</h3>
                  <p className="text-gray-600 mb-4">{design.desc}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">المميزات:</h4>
                    <ul className="space-y-1 text-gray-600">
                      {design.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-gray-700 mb-1">مثالي لـ:</h4>
                    <p className="text-gray-600">{design.ideal}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* القسم 7: الصيانة */}
          <section id="section-care" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-indigo-600">7.</span> دليل صيانة الأثاث الدمياطي
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">نصائح الصيانة اليومية:</h3>
                <div className="space-y-6">
                  {[
                    {title: "التنظيف اليومي", desc: "استخدم قطعة قماش ناعمة وجافة - تجنب الماء المباشر", icon: "🧹"},
                    {title: "التنظيف الأسبوعي", desc: "استخدم منظف الأخشاب الخاص مرة أسبوعياً", icon: "🧽"},
                    {title: "الحماية من الشمس", desc: "تجنب التعرض المباشر لأشعة الشمس لفترات طويلة", icon: "☀️"},
                    {title: "الرطوبة المثالية", desc: "حافظ على رطوبة 40-60% في الغرفة", icon: "💧"},
                    {title: "معالجة الخدوش", desc: "استخدم مواد التلميع المناسبة فور ظهور الخدوش", icon: "🔨"}
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                      <div className="text-2xl">{tip.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{tip.title}</h4>
                        <p className="text-gray-600 text-sm">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">خدمات مودرن أونلاين:</h3>
                <div className="space-y-6">
                  {[
                    {title: "صيانة دورية مجانية", desc: "فحص مجاني كل سنتين خلال فترة الضمان", icon: "🛠️", color: "text-green-600"},
                    {title: "خدمة الترميم الشامل", desc: "تجديد كامل للقطع القديمة بأسعار مميزة", icon: "🔄", color: "text-blue-600"},
                    {title: "ضمان 20 سنة", desc: "أطول ضمان في السوق على الهيكل والتشطيب", icon: "🛡️", color: "text-purple-600"},
                    {title: "قطع الغيار الأصلية", desc: "توفر جميع قطع الغيار لمدة 20 سنة", icon: "⚙️", color: "text-orange-600"},
                    {title: "فريق متخصص", desc: "فريق صيانة متخصص في الأثاث الدمياطي", icon: "👨‍🔧", color: "text-red-600"}
                  ].map((service, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white/50 rounded-xl">
                      <div className={`text-2xl ${service.color}`}>{service.icon}</div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* القسم 8: الأسئلة الشائعة */}
          <section id="section-faq" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">❓</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-gray-600">8.</span> الأسئلة الشائعة عن الأثاث الدمياطي
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  q: "كم تبلغ مدة ضمان الأثاث الدمياطي الأصلي؟",
                  a: "في مودرن أونلاين نقدم أطول ضمان في السوق: 20 سنة على هيكل الأثاث، 10 سنوات على المفصلات والأدراج، و5 سنوات على التشطيبات والدهانات. الضمان شامل لقطع الغيار والعمالة."
                },
                {
                  q: "هل يمكنني طلب تصميم مخصص مختلف عن كتالوجاتكم؟",
                  a: "نعم بالطبع! نقدم خدمة التصميم المخصص المجانية. يمكنك إرسال مساحة منزلك وتصميمك المطلوب أو صور للإلهام، وسيقوم فريق التصميم لدينا بإعداد مخطط ثلاثي الأبعاد تفاعلي لك قبل البدء في التصنيع."
                },
                {
                  q: "كيف يتم التوصيل للمحافظات البعيدة مثل أسوان أو مرسى مطروح؟",
                  a: "نحن نتعامل مع أفضل شركات الشحن المعتمدة في مصر. التوصيل مجاني داخل القاهرة الكبرى والإسكندرية. للمحافظات الأخرى توجد رسوم شحن رمزية تبدأ من 500 جنيه حسب المحافظة وحجم الشحنة."
                },
                {
                  q: "ماذا عن قطع الغيار إذا احتجت لها بعد 10 سنوات؟",
                  a: "نحتفظ بجميع مقاسات وتصاميم الأثاث الذي نصنعه في سجلاتنا الرقمية لمدة 20 سنة. يمكنك طلب أي قطعة غيار وسنقوم بتصنيعها لك بنفس المواصفات والدقة الأصلية."
                },
                {
                  q: "هل تقدمون خدمة التقسيط وما هي الشروط؟",
                  a: "نعم، نتعامل مع معظم البنوك المصرية للتقسيط بدون فوائد على 6 أو 12 شهراً. كما نقدم تقسيط مباشر على 24 شهراً بفائدة تنافسية. كل ما تحتاجه هو صورة البطاقة الشخصية ورقم الهاتف."
                },
                {
                  q: "كيف أتأكد من أن الخشب أصلي وليس MDF؟",
                  a: "نقدم لك شهادة ضمان موثقة من الغرفة التجارية تحدد نوع الخشب المستخدم. كما يمكنك زيارة المصنع في دمياط لمشاهدة عملية التصنيع من الخشب الخام إلى المنتج النهائي."
                },
                {
                  q: "هل يمكنني إرجاع المنتج إذا لم يناسبني؟",
                  a: "نعم، لدينا سياسة إرجاع لمدة 14 يوم من تاريخ الاستلام مع الحفاظ على المنتج في حالته الأصلية. في حالة الأثاث المصنوع حسب الطلب، يمكنك تعديل التصميم مرة واحدة خلال أول 7 أيام."
                },
                {
                  q: "كم تستغرق عملية التصنيع عادة؟",
                  a: "تتراوح مدة التصنيع بين 10-25 يوم حسب تعقيد التصميم وحجم الطلب. نقدم خدمة تصنيع سريع (5-7 أيام) مقابل رسوم إضافية 20% للطلبات العاجلة."
                }
              ].map((faq, index) => (
                <details key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all hover:shadow-lg">
                  <summary className="font-bold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                    <span className="text-lg">{faq.q}</span>
                    <span className="text-blue-600 text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 leading-relaxed pt-4 border-t">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* خاتمة المقال مع إحصائيات */}
          <section className="mb-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-10 rounded-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">الخلاصة: لماذا تختار مودرن أونلاين؟</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                لأننا لسنا مجرد مصنع أثاث، بل شركاء لك في بناء منزل أحلامك بتجربة فريدة
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-10">
              {[
                {number: "20+", label: "سنة خبرة", desc: "في صناعة الأثاث الدمياطي"},
                {number: "5,000+", label: "عميل راضٍ", desc: "في مصر ودول الخليج"},
                {number: "98%", label: "رضا العملاء", desc: "معدل رضا مستمر"},
                {number: "120+", label: "تصميم مختلف", desc: "في كتالوجاتنا"}
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="font-semibold text-lg mb-1">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-center">مميزات حصرية مع مودرن أونلاين:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "تصميم ثلاثي الأبعاد مجاني قبل الشراء",
                  "زيارة افتراضية للمصنع عبر الفيديو",
                  "عينة مجانية من الخشب قبل الطلب",
                  "فريق دعم فني متخصص 24/7",
                  "تحديثات أسبوعية على حالة طلبك",
                  "تأمين على الشحنة خلال النقل"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                    <IoMdCheckmarkCircle className="text-green-400 text-xl" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA النهائي */}
          <div className="text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">جاهز لبدء مشروع أثاث منزلك؟</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وتصميم ثلاثي الأبعاد لمنزلك قبل الشراء
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/201015262864?text=مرحباً، أود استشارة حول أثاث دمياطي من موقع مودرن أونلاين"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center gap-3 text-lg shadow-lg"
              >
                <FaWhatsapp className="text-2xl" />
                <span>تواصل عبر الواتساب</span>
              </a>
              <a 
                href="tel:+201015262864"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 flex items-center gap-3 text-lg shadow-lg"
              >
                <FaPhone />
                <span>اتصل بنا الآن</span>
              </a>
              <Link 
                href="/portfolio"
                className="bg-transparent hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl border-2 border-white transition-all hover:scale-105 flex items-center gap-3 text-lg"
              >
                <MdOutlineDesignServices className="text-2xl" />
                <span>تصفح أعمالنا</span>
              </Link>
            </div>
            <p className="mt-6 opacity-80">
              ⏰ خدمة العملاء متاحة من 9 صباحاً حتى 11 مساءً طوال أيام الأسبوع
            </p>
          </div>
        </div>

        {/* معلومات المقال */}
        <footer className="mt-16 pt-10 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-bold text-2xl text-gray-800 mb-6">معلومات المقال</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">📅</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">تاريخ النشر</div>
                    <div className="text-gray-600">{publishDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600">✍️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">الكاتب</div>
                    <div className="text-gray-600">فريق مودرن أونلاين - خبراء الأثاث الدمياطي</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600">🏷️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-700">التصنيف</div>
                    <div className="text-gray-600">أثاث دمياطي، ديكور داخلي، أثاث منزلي</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-2xl text-gray-800 mb-6">شارك المقال</h3>
              <div className="flex gap-4 mb-8">
                {[
                  {platform: "فيسبوك", icon: <FaFacebookF />, color: "bg-blue-600 hover:bg-blue-700"},
                  {platform: "تويتر", icon: <FaTwitter />, color: "bg-sky-500 hover:bg-sky-600"},
                  {platform: "لينكدإن", icon: <FaLinkedinIn />, color: "bg-blue-700 hover:bg-blue-800"},
                  {platform: "انستجرام", icon: <FaInstagram />, color: "bg-pink-600 hover:bg-pink-700"},
                  {platform: "واتساب", icon: <FaWhatsapp />, color: "bg-green-500 hover:bg-green-600"}
                ].map((social) => (
                  <button
                    key={social.platform}
                    className={`${social.color} text-white w-14 h-14 rounded-xl flex items-center justify-center text-xl transition-all hover:scale-110`}
                    aria-label={`شارك على ${social.platform}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
              
              <h4 className="font-bold text-gray-800 mb-3">كلمات مفتاحية:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "أثاث دمياطي", "مصنع أثاث دمياطي", "أثاث مودرن دمياط", 
                  "غرف نوم دمياطية", "صالونات دمياطية", "كنب دمياطي",
                  "خشب الزان الدمياطي", "ضمان الأثاث الدمياطي",
                  "أثاث منزلي فاخر", "مودرن أونلاين", "ديكور داخلي",
                  "أثاث مصر", "أثاث دمياط 2024", "أثاث مودرن"
                ].map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* حقوق النشر */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-500">
            <p>© {new Date().getFullYear()} مودرن أونلاين. جميع الحقوق محفوظة.</p>
            <p className="mt-2">هذا المقال مكتوب بواسطة فريق مودرن أونلاين ونُشر لأغراض إعلامية وتعليمية.</p>
          </div>
        </footer>
      </article>
    </>
  )
}