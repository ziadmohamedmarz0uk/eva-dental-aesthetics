"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquare, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Editorial Text Column (7 Cols in RTL) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location Tag */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-xs text-stone-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-sage-600 shrink-0"></span>
              <span className="border-l border-stone-300 pl-2 ml-1 text-stone-800 font-semibold">عيادات معتمدة</span>
              <span className="text-stone-600">الشيخ زايد (أركان بلازا) • التجمع الخامس (التسعين)</span>
            </div>

            {/* Clean Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.25] lg:leading-[1.2] mb-5 sm:mb-6">
              دقة طبية جراحية،
              <br />
              <span className="text-stone-500 font-normal">
                وجمال طبيعي متزن يدوم.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl mb-7 sm:mb-8 font-normal">
              نجمع في مركز إيڤا بين تكنولوجيا طب الأسنان الرقمية وأحدث أجهزة الجلدية والليزر المعتمدة دولياً. نعتمد بروتوكولات علاجية أوروبية تحفظ الأنسجة الطبيعية وتعيد التناسق دون تصنّع أو مبالغة.
            </p>

            {/* Primary Action & WhatsApp Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 mb-8 sm:mb-12">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-sage-600 hover:bg-sage-700 text-white font-medium text-sm transition-all shadow-sm active:scale-[0.98] text-center"
              >
                <span>احجز استشارة طبية</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/201024567890?text=مرحباً%20مركز%20إيڤا،%20أود%20الاستفسار%20عن%20مواعيد%20العيادة"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-stone-700 hover:text-sage-600 font-medium text-sm py-2.5 px-3 transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-sage-600 shrink-0" />
                <span>تواصل عبر واتساب</span>
                <span className="text-xs text-stone-400 group-hover:translate-x-[-3px] transition-transform">←</span>
              </a>
            </div>

            {/* Subtly Framed Installment Note */}
            <div className="p-3.5 mb-8 sm:mb-10 bg-white/80 border border-stone-200 rounded-xl max-w-xl text-xs text-stone-600 flex items-start sm:items-center gap-2.5 sm:gap-3">
              <span className="px-2 py-0.5 rounded bg-sand-100 text-sand-800 font-medium text-[11px] shrink-0 mt-0.5 sm:mt-0">
                مرونة السداد
              </span>
              <p className="leading-relaxed">
                تقسيط جميع الخطط العلاجية حتى <strong className="text-stone-800 font-semibold">12 شهراً بدون فوائد</strong> عبر ValU وبطاقات ائتمان البنوك المعتمدة.
              </p>
            </div>

            {/* Minimal Trust Metrics (Responsive 3 Columns) */}
            <div className="grid grid-cols-3 pt-5 border-t border-stone-200 divide-x divide-x-reverse divide-stone-200">
              <div className="pr-0 pl-2 sm:pl-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 tracking-tight mb-0.5 sm:mb-1">
                  14+
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-normal leading-tight">
                  عاماً خبرة سريرية
                </div>
              </div>

              <div className="px-2 sm:px-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 tracking-tight mb-0.5 sm:mb-1">
                  18k+
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-normal leading-tight">
                  إجراء طبي مكتمل
                </div>
              </div>

              <div className="px-2 sm:px-6">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 tracking-tight mb-0.5 sm:mb-1">
                  100%
                </div>
                <div className="text-[10px] sm:text-xs text-stone-500 font-normal leading-tight">
                  أجهزة معتمدة (FDA)
                </div>
              </div>
            </div>

          </div>

          {/* Editorial Visual Column (5 Cols in RTL) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Single Clean Framed High-Res Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="عيادة مركز إيڤا للأسنان والجلدية — أركان بلازا"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
                
                {/* Subtle Gradient Veil at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white">
                  <div className="flex items-center justify-between text-xs font-light">
                    <span>العيادة الطبية المعتمدة — أركان بلازا</span>
                    <span className="text-stone-300 text-[11px]">الشيخ زايد</span>
                  </div>
                </div>
              </div>

              {/* Minimal caption line below the frame */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-600 px-1">
                <span>غرف علاجية فردية بنظام العزل والتعقيم المستمر</span>
                <span className="text-stone-600 font-mono text-[10px]">EVA-01</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
