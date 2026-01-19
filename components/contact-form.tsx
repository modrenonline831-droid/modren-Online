"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
    timeline: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        description: "",
        timeline: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="grid md:grid-cols-3 gap-12">
      {/* Contact Information */}
      <div className="md:col-span-1 space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-6">تواصل معنا</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            جاهز لمشروعك الأثاث المخصص؟ تواصل معنا ويلا نعمل حاجة جميلة.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">البريد الإلكتروني</h4>
              <a href="mailto:hello@artisan.com" className="text-muted-foreground hover:text-primary transition-colors">
                hello@artisan.com
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">الهاتف</h4>
              <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                (555) 123-4567
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-1">المكان</h4>
              <p className="text-muted-foreground">
                الاستوديو بالموعد
                <br />
                متاح في كل مكان
              </p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="p-4 bg-secondary/50 rounded-lg">
          <p className="text-sm">
            <span className="font-semibold text-foreground">وقت الرد العادي:</span>
            <span className="text-muted-foreground"> 24-48 ساعة</span>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
        {submitted && (
          <div className="p-4 bg-primary/10 border border-primary text-primary rounded-lg">
            شكراً! هنرد عليك في يومين كحد أقصى بعرض سعر جميل خاص بك.
          </div>
        )}

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            الاسم الكامل
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="اسمك"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="البريد@الخاص.بك"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
            نوع المشروع
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          >
            <option value="">اختر نوع المشروع</option>
            <option value="dining">أثاث الطعام</option>
            <option value="seating">المقاعد والأرائك</option>
            <option value="bedroom">أثاث النوم</option>
            <option value="storage">التخزين والرفوف</option>
            <option value="tables">الطاولات</option>
            <option value="custom">تصميم مخصص بالكامل</option>
            <option value="other">أخرى</option>
          </select>
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
            نطاق الميزانية
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          >
            <option value="">اختر نطاق الميزانية</option>
            <option value="under-1000">أقل من 1,000 دولار</option>
            <option value="1000-2500">1,000 - 2,500 دولار</option>
            <option value="2500-5000">2,500 - 5,000 دولار</option>
            <option value="5000-10000">5,000 - 10,000 دولار</option>
            <option value="above-10000">أكثر من 10,000 دولار</option>
            <option value="unsure">مش متأكد</option>
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
            الوقت المطلوب
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
          >
            <option value="">اختر الوقت</option>
            <option value="urgent">بسرعة (1-2 شهر)</option>
            <option value="soon">قريب (3-4 أشهر)</option>
            <option value="flexible">مرن (5+ أشهر)</option>
            <option value="undecided">مش قررت بعد</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            حكي لنا عن فكرتك
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
            placeholder="ايه اللي بتفكر فيه؟ الألوان، الحجم، الخشب المفضل، أي متطلبات خاصة..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          يلا بنا
        </button>

        <p className="text-xs text-muted-foreground text-center">
          هراجع الطلب وهكلمك في 24-48 ساعة بعرض سعر خاص بتصميمك.
        </p>
      </form>
    </div>
  )
}
