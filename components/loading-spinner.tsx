"use client"

import { Loader2 } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative">
        {/* الدائرة الخارجية */}
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
        
        {/* الدائرة الدوارة */}
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        
        {/* الأيقونة */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader2 className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// نسخة أصغر للاستخدام في الأزرار
export function SmallLoadingSpinner() {
  return (
    <div className="inline-flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-white/30 rounded-full">
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

// نسخة للصفحة كاملة
export function FullPageLoading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* اللوجو */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-primary to-primary/80 rounded-xl shadow-lg">
              <span className="text-white text-2xl">🛋️</span>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Modern Online
              </div>
              <div className="text-sm text-gray-500">جاري التحميل...</div>
            </div>
          </div>
        </div>
        
        {/* مؤشر التحميل */}
        <div className="relative mb-6">
          <div className="w-20 h-20 border-4 border-primary/10 rounded-full"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader2 className="w-10 h-10 text-primary animate-pulse" />
          </div>
        </div>
        
        {/* شريط التقدم */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-primary to-primary/60 animate-progress-bar"></div>
        </div>
        
        {/* النص */}
        <p className="mt-4 text-gray-600 text-sm">جاري تحميل أفضل تجربة تسوق...</p>
        
        {/* CSS للشريط المتحرك */}
        <style jsx>{`
          @keyframes progress-bar {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
          .animate-progress-bar {
            animation: progress-bar 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </div>
  )
}

// نسخة للمنتجات
export function ProductLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="rounded-xl overflow-hidden bg-white border border-gray-200 animate-pulse">
          {/* الصورة */}
          <div className="aspect-square bg-gray-200"></div>
          
          {/* المحتوى */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            
            {/* السعر */}
            <div className="flex items-center justify-between pt-2">
              <div className="h-6 bg-gray-200 rounded w-20"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
            
            {/* الزر */}
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}