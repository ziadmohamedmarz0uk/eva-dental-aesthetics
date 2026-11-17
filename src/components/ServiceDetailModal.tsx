"use client";

import React, { useEffect } from "react";
import { ServiceItem } from "@/types";
import {
  X,
  Clock,
  CreditCard,
  ShieldCheck,
  Check,
  ArrowLeft,
  MessageSquare,
} from "lucide-react";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (service: ServiceItem) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBook,
}: ServiceDetailModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleBookClick = () => {
    onBook(service);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً مركز إيڤا، أود الاستفسار عن تفاصيل وحجز موعد لإجراء: ${service.title}`
  );

  const isDental = service.category === "dental";

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-xl w-full border border-stone-200 shadow-xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-150 text-stone-900 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-stone-100 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold text-sage-800 bg-sage-50 border border-sage-200 px-2.5 py-0.5 rounded-full">
                {isDental ? "طب وتجميل الأسنان" : "الجلدية والليزر"}
              </span>

              <span className="text-[11px] text-stone-600 flex items-center gap-1 font-normal">
                <Clock className="w-3.5 h-3.5 text-stone-600" />
                {service.sessionDuration}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
              {service.title}
            </h3>

            {service.enTitle && (
              <p className="text-xs font-mono text-stone-600 mt-1 uppercase tracking-wider">
                {service.enTitle}
              </p>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="إغلاق"
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-900 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body (Simple, Clean & Uncluttered) */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-6 text-sm text-stone-700">
          
          {/* Overview text */}
          <p className="text-stone-600 leading-relaxed text-sm font-normal">
            {service.detailedOverview || service.description}
          </p>

          {/* Clinical Steps (Clean numbered list, no nested cards) */}
          {service.clinicalSteps && service.clinicalSteps.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                مراحل الإجراء السريري:
              </h4>

              <div className="space-y-2 border-t border-stone-100 pt-3">
                {service.clinicalSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-sage-700 bg-sage-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-sage-200/60">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Highlights & Warranty (Clean bullets) */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                المزايا والنتائج المضمونة:
              </h4>

              <div className="space-y-2 border-t border-stone-100 pt-3">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-stone-700 font-normal leading-relaxed">
                      {b}
                    </span>
                  </div>
                ))}

                {service.warranty && (
                  <div className="flex items-start gap-2.5 pt-1 text-xs text-stone-800 font-medium">
                    <ShieldCheck className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                    <span>{service.warranty}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Pricing & Installments (Simple clean strip) */}
          <div className="p-4 rounded-xl bg-[#FAF9F6] border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-stone-600 block">التكلفة الاسترشادية:</span>
              <span className="text-lg font-bold text-stone-900">
                {service.priceNote}
              </span>
            </div>

            {service.installmentNote && (
              <div className="sm:text-left pt-2 sm:pt-0 sm:border-r sm:border-stone-200 sm:pr-4">
                <span className="text-[11px] text-stone-600 block">خيار التقسيط:</span>
                <span className="text-xs font-semibold text-sage-700 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  {service.installmentNote}
                </span>
              </div>
            )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-stone-100 bg-stone-50/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <a
            href={`https://wa.me/201024567890?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-stone-300 text-stone-700 hover:text-stone-950 hover:bg-stone-100 text-xs font-medium transition-colors text-center order-2 sm:order-1"
          >
            <MessageSquare className="w-4 h-4 text-sage-600" />
            <span>استفسار واتساب</span>
          </a>

          <button
            onClick={handleBookClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-sm active:scale-[0.98] order-1 sm:order-2"
          >
            <span>احجز موعد لهذا الإجراء</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
