"use client";

import React, { useState } from "react";
import { DENTAL_SERVICES, AESTHETIC_SERVICES } from "@/data/mockData";
import { ServiceItem } from "@/types";
import { ArrowLeft, Clock, CreditCard, Sparkles, Smile, ArrowUpRight } from "lucide-react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

interface ServicesDirectoryProps {
  onSelectService?: (serviceName: string, category: string) => void;
}

export default function ServicesDirectory({ onSelectService }: ServicesDirectoryProps) {
  const [activeTab, setActiveTab] = useState<"dental" | "aesthetic">("dental");
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const services = activeTab === "dental" ? DENTAL_SERVICES : AESTHETIC_SERVICES;

  const handleServiceSelect = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title, service.category);
    }
    // Smooth scroll to booking section
    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200/80 text-sage-700 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>دليل الإجراءات والتخصصات المعتمدة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 tracking-tight mb-3 sm:mb-4">
            تخصصات دقيقة تحت إشراف نخبة من كبار الاستشاريين
          </h2>

          <p className="text-stone-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto">
            اضغط على أي كارت للاطلاع على تفاصيل الإجراء وخطواته السريرية ومزاياه المضمونة، أو اختره مباشرة للحجز.
          </p>
        </div>

        {/* Responsive Segmented Tab Switcher */}
        <div className="flex justify-center mb-10 sm:mb-14">
          <div className="flex w-full max-w-md sm:w-auto p-1 sm:p-1.5 rounded-full bg-stone-200/70 border border-stone-300/80 shadow-inner">
            <button
              onClick={() => setActiveTab("dental")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "dental"
                  ? "bg-white text-stone-900 shadow-sm font-semibold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Smile className={`w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 ${activeTab === "dental" ? "text-sage-600" : "text-stone-500"}`} />
              <span className="sm:hidden">طب الأسنان</span>
              <span className="hidden sm:inline">طب وجراحة الأسنان</span>
              <span className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeTab === "dental" ? "bg-sage-100 text-sage-800" : "bg-stone-300/60 text-stone-700"
              }`}>
                {DENTAL_SERVICES.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab("aesthetic")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeTab === "aesthetic"
                  ? "bg-white text-stone-900 shadow-sm font-semibold"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Sparkles className={`w-3.5 sm:w-4 h-3.5 sm:h-4 shrink-0 ${activeTab === "aesthetic" ? "text-sand-600" : "text-stone-500"}`} />
              <span className="sm:hidden">الجلدية والليزر</span>
              <span className="hidden sm:inline">الجلدية والتجميل</span>
              <span className={`text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-full ${
                activeTab === "aesthetic" ? "bg-sand-100 text-sand-800" : "bg-stone-300/60 text-stone-700"
              }`}>
                {AESTHETIC_SERVICES.length}
              </span>
            </button>
          </div>
        </div>

        {/* Structured Editorial Cards Grid with Click-for-Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setModalService(service)}
              className="cursor-pointer bg-white border border-stone-200/90 hover:border-sage-400 rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 group relative"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-stone-400">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                    {service.isPopular && (
                      <span className="text-[10px] sm:text-[11px] font-medium text-sage-700 bg-sage-50 border border-sage-200/70 px-2 py-0.5 rounded-full">
                        إجراء متميز
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] sm:text-[11px] text-stone-500 flex items-center gap-1 font-normal">
                    <Clock className="w-3 h-3 text-stone-400" />
                    {service.sessionDuration}
                  </span>
                </div>

                {/* Service Title with Details Link Icon */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-stone-900 leading-snug group-hover:text-sage-700 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-stone-400 group-hover:text-sage-600 transition-colors p-1 shrink-0" title="عرض التفاصيل">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

                {/* English Subtitle */}
                {service.enTitle && (
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-stone-600 mb-3 sm:mb-4">
                    {service.enTitle}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5 sm:mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom Details Box & Action Buttons */}
              <div className="pt-3 sm:pt-4 border-t border-stone-100 mt-auto space-y-3 sm:space-y-3.5">
                
                {/* Pricing & Installment Row */}
                <div className="bg-stone-50 rounded-xl p-3 sm:p-3.5 border border-stone-200/70 space-y-1.5">
                  <div className="flex items-baseline justify-between text-xs">
                    <span className="text-stone-500 text-[11px] sm:text-xs">التكلفة:</span>
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">
                      {service.priceNote}
                    </span>
                  </div>

                  {service.installmentNote && (
                    <div className="flex items-baseline justify-between text-[11px] text-sage-700 pt-1 border-t border-stone-200/60">
                      <span className="text-stone-500">التقسيط:</span>
                      <span className="font-medium">
                        {service.installmentNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* Two Action Buttons: View Details & Instant Book */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalService(service);
                    }}
                    className="py-2.5 px-2 rounded-xl text-xs font-medium text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 transition-colors text-center"
                  >
                    تفاصيل الإجراء
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceSelect(service);
                    }}
                    className="py-2.5 px-2 rounded-xl text-xs font-semibold text-white bg-sage-600 hover:bg-sage-700 transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]"
                  >
                    <span>احجز الآن</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Financing & Installment Banner */}
        <div className="mt-10 sm:mt-14 p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-stone-600 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sand-100 text-sand-800 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-stone-900 block font-medium mb-0.5">خطط تقسيط معتمدة بدون فوائد:</strong>
              <span className="text-stone-600 leading-relaxed">متاح التقسيط الميسر حتى 12 شهراً لجميع علاجات الأسنان والجلدية عبر تطبيق ValU وبطاقات ائتمان البنك الأهلي، CIB، وبنك مصر.</span>
            </div>
          </div>

          <div className="text-stone-600 text-[11px] shrink-0">
            * يتم تحديد الخطة العلاجية والتكلفة النهائية بعد جلسة الفحص والاستشارة السريرية.
          </div>
        </div>

      </div>

      {/* Professional Service Details Modal */}
      <ServiceDetailModal
        service={modalService}
        onClose={() => setModalService(null)}
        onBook={handleServiceSelect}
      />
    </section>
  );
}
