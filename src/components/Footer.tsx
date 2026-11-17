"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FAF9F6] border-t border-stone-200 text-stone-600 text-xs py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-stone-200">
          
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-xl font-semibold text-stone-900 tracking-tight">
                مركز إيڤا
              </span>
              <span className="text-[11px] uppercase tracking-widest text-stone-600 font-medium border-r border-stone-300 pr-2">
                EVA CLINIC
              </span>
            </div>
            
            <p className="text-stone-500 leading-relaxed font-normal mb-6 max-w-sm">
              مركز طبي استشاري رائد في طب وجراحة الأسنان والتجميل الإكلينيكي والعلاج بالليزر. يلتزم بأعلى معايير الرعاية الصحية العالمية مع الحفاظ على الهوية الجمالية الطبيعية.
            </p>

            <div className="flex items-center gap-2 text-stone-500 text-[11px]">
              <Shield className="w-3.5 h-3.5 text-sage-600 shrink-0" />
              <span>منشأة طبية مرخصة من وزارة الصحة والسكان المصرية</span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              التخصصات
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-stone-900 transition-colors">
                  ابتسامة إيماكس الخزفية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-900 transition-colors">
                  زراعة الأسنان الألمانية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-900 transition-colors">
                  التقويم الشفاف (Aligners)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-900 transition-colors">
                  إزالة الشعر بكانديلا ليزر
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-stone-900 transition-colors">
                  جلسات البروفايلو والنضارة
                </a>
              </li>
            </ul>
          </div>

          {/* Branches (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              الفروع وساعات العمل
            </h4>
            <div className="space-y-3 font-normal">
              <div>
                <strong className="text-stone-800 block mb-0.5">فرع الشيخ زايد:</strong>
                <span className="text-stone-500">أركان بلازا — مبنى العيادات الطبية، عيادة 412</span>
              </div>
              <div>
                <strong className="text-stone-800 block mb-0.5">فرع التجمع الخامس:</strong>
                <span className="text-stone-500">شارع التسعين الشمالي — ميديكال هاب، عيادة 208</span>
              </div>
              <div className="text-stone-500 pt-1 text-[11px]">
                مواعيد العمل: السبت - الخميس من 10 ص حتى 10 م
              </div>
            </div>
          </div>

          {/* Contact & Hotline (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">
              التواصل والحجز
            </h4>
            <div className="space-y-3 font-normal">
              <a
                href="tel:19842"
                className="flex items-center gap-2 text-stone-800 hover:text-sage-700 transition-colors font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-sage-600" />
                <span>الخط الساخن: 19842</span>
              </a>

              <div className="text-stone-500 text-[11px] leading-relaxed">
                استشارات واتساب المباشرة:
                <br />
                <span dir="ltr" className="font-mono text-stone-700 font-medium">010 2456 7890</span>
              </div>

              <div className="text-stone-500 text-[11px]">
                البريد الإلكتروني:
                <br />
                <span className="font-mono text-stone-700">care@evaclinicegy.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-600">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} مركز إيڤا الطبي (EVA Dental & Aesthetics).
          </div>
          <div className="flex items-center gap-6">
            <span>الشيخ زايد • التجمع الخامس</span>
            <span className="text-stone-400">|</span>
            <span>تقسيط بدون فوائد عبر ValU والبنوك المصرية المعتمدة</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
