"use client";

import React from "react";
import { CLINIC_PHILOSOPHY } from "@/data/mockData";

export default function PhilosophyBanner() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16 pb-6 border-b border-stone-200">
          <div>
            <span className="text-xs font-semibold tracking-wider text-sage-600 uppercase mb-2 block">
              فلسفة العمل السريري
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
              معايير طبية صارمة تؤطر كل خطة علاجية
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md font-normal leading-relaxed">
            لا نعد بما لا تستطيع البيولوجيا تحقيقه. نضع صحة الفم وسلامة أنسجة البشرة أولاً، لنصل إلى جمال طبيعي يعبر عن هويتك الحقيقية.
          </p>
        </div>

        {/* 4 Responsive Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-x-reverse lg:divide-stone-200">
          {CLINIC_PHILOSOPHY.map((item, idx) => (
            <div
              key={item.number}
              className={`flex flex-col ${
                idx === 0
                  ? "lg:pr-0 lg:pl-8"
                  : idx === 3
                  ? "lg:pr-8 lg:pl-0"
                  : "lg:px-8"
              } pb-6 sm:pb-0 border-b sm:border-b-0 border-stone-100 last:border-b-0`}
            >
              <span className="text-xs font-mono font-medium text-sand-500 block mb-3 sm:mb-4">
                [{item.number}]
              </span>
              <h3 className="text-base sm:text-lg font-medium text-stone-900 mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
