"use client";

import React from "react";
import { Cpu, ShieldCheck, Microscope } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      title: "التصوير المقطعي والمسح الرقمي 3D",
      subtitle: "CBCT & Itero 5D Digital Scanners",
      description: "نستغني تماماً عن طبعات الفم التقليدية المزعجة، لنرسم خريطة رقمية ثلاثية الأبعاد لفمك في أقل من 60 ثانية وبأعلى دقة تصنيع.",
      tag: "طب الأسنان الرقمي",
    },
    {
      title: "أحدث أجهزة الليزر الطبي العالمي",
      subtitle: "Candela GentleMax Pro Plus (FDA)",
      description: "المعيار الذهبي عالمياً لإزالة الشعر وتجديد البشرة بنظام التبريد الفوري الديناميكي لحماية سطح الجلد وضمان الراحة التامة.",
      tag: "الجلدية والتجميل",
    },
    {
      title: "غرف التعقيم المركزي بمعيار Class-B",
      subtitle: "European Infection Control Protocol",
      description: "نطبق أشد المعايير الصارمة لمنع انتقال العدوى: تعقيم بالبخار المضغوط مع مؤشرات كيميائية حيوية لكل مريض على حدة.",
      tag: "سلامة المريض",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold tracking-wider text-sage-600 uppercase mb-2 block">
            البنية التكنولوجية
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
            تجهيزات سريرية متوافقة مع أرقى المعايير الدولية
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-x-reverse md:divide-stone-200">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                idx === 0
                  ? "md:pr-0 md:pl-8"
                  : idx === 2
                  ? "md:pr-8 md:pl-0"
                  : "md:px-8"
              } pb-6 md:pb-0 border-b md:border-b-0 border-stone-100 last:border-b-0`}
            >
              <span className="inline-block text-[11px] font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded mb-3 sm:mb-4 w-fit">
                {tech.tag}
              </span>
              <h3 className="text-base sm:text-lg font-medium text-stone-900 mb-1">
                {tech.title}
              </h3>
              <p className="text-xs font-mono text-sage-700 mb-2 sm:mb-3 font-medium">
                {tech.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed font-normal">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
