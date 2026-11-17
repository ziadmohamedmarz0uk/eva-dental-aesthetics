"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { BEFORE_AFTER_CASES } from "@/data/mockData";
import {
  Sparkles,
  Smile,
  ArrowLeft,
  Clock,
  Layers,
  SplitSquareVertical,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Stethoscope,
} from "lucide-react";

export default function BeforeAfterSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const [viewMode, setViewMode] = useState<"slider" | "sideBySide">("slider");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    let percentage = (x / width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand-100/80 border border-sand-300 text-sand-800 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>توثيق الحالات السريرية الحقيقية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight mb-3">
            نتائج سريرية حقيقية توثق دقة الإجراء قبل وبعد
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            شاهد صور المقارنة المقربة لمرضانا بعد اكتمال الخطة العلاجية. يمكنك سحب الفاصل في المنتصف أو استعراض الصورتين جنباً إلى جنب.
          </p>
        </div>

        {/* 3 Clear Case Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 max-w-4xl mx-auto">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const isSelected = activeCaseIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`p-4 rounded-xl border text-right transition-all flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#FAF9F6] border-sage-600 shadow-sm ring-1 ring-sage-600"
                    : "bg-white border-stone-200 hover:border-stone-300 text-stone-600"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                    isSelected ? "bg-sage-100 text-sage-800" : "bg-stone-100 text-stone-600"
                  }`}>
                    {item.category === "dental" ? "طب الأسنان" : "الجلدية والتجميل"}
                  </span>
                  <span className="text-[11px] text-stone-600 flex items-center gap-1 font-normal">
                    <Clock className="w-3 h-3 text-stone-600" />
                    {item.duration}
                  </span>
                </div>

                <div className={`text-sm font-semibold leading-snug ${
                  isSelected ? "text-stone-900" : "text-stone-700"
                }`}>
                  {item.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Controls Bar (Slider vs Side-by-Side Toggle & Preset Buttons) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-6 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-medium text-stone-600 shrink-0">طريقة العرض:</span>
            <div className="inline-flex rounded-lg bg-stone-100 p-1 border border-stone-200 shrink-0">
              <button
                onClick={() => setViewMode("slider")}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === "slider"
                    ? "bg-white text-stone-900 shadow-sm font-semibold"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <SplitSquareVertical className="w-3.5 h-3.5" />
                <span>سلايدر السحب التفاعلي</span>
              </button>
              <button
                onClick={() => setViewMode("sideBySide")}
                className={`px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-all ${
                  viewMode === "sideBySide"
                    ? "bg-white text-stone-900 shadow-sm font-semibold"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>عرض الصورتين جنباً إلى جنب</span>
              </button>
            </div>
          </div>

          {viewMode === "slider" && (
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs overflow-x-auto pb-1 sm:pb-0">
              <span className="text-stone-600 hidden md:inline shrink-0">أزرار سريعة:</span>
              <button
                onClick={() => setSliderPosition(95)}
                className={`px-2 sm:px-2.5 py-1 rounded border text-[10px] sm:text-[11px] transition-colors shrink-0 ${
                  sliderPosition > 80 ? "bg-sand-100 border-sand-400 text-sand-900 font-semibold" : "bg-white border-stone-200 text-stone-600"
                }`}
              >
                عرض (قبل) فقط
              </button>
              <button
                onClick={() => setSliderPosition(50)}
                className={`px-2 sm:px-2.5 py-1 rounded border text-[10px] sm:text-[11px] transition-colors shrink-0 ${
                  sliderPosition >= 40 && sliderPosition <= 60 ? "bg-stone-900 border-stone-900 text-white font-semibold" : "bg-white border-stone-200 text-stone-600"
                }`}
              >
                مقارنة 50/50
              </button>
              <button
                onClick={() => setSliderPosition(5)}
                className={`px-2 sm:px-2.5 py-1 rounded border text-[10px] sm:text-[11px] transition-colors shrink-0 ${
                  sliderPosition < 20 ? "bg-sage-100 border-sage-400 text-sage-900 font-semibold" : "bg-white border-stone-200 text-stone-600"
                }`}
              >
                عرض (بعد) فقط
              </button>
            </div>
          )}
        </div>

        {/* Main Comparison Area: Visual Comparison + Structured Clinical File */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Comparison Frame (7 Cols) */}
          <div className="lg:col-span-7">
            {viewMode === "slider" ? (
              <div>
                {/* Interactive Dragging Comparison Box */}
                <div
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchStart={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  onTouchMove={handleTouchMove}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-stone-200 bg-stone-100 cursor-ew-resize select-none touch-none shadow-sm"
                >
                  {/* After Image (Full Background) */}
                  <div className="absolute inset-0">
                    <Image
                      src={activeCase.afterImage}
                      alt="النتيجة بعد الإجراء الطبي — مركز إيڤا"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    {/* After Badge (Left in RTL / standard after indicator) */}
                    <div className="absolute bottom-4 left-4 z-10 bg-sage-800/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-sage-600 shadow-sm flex items-center gap-1.5 pointer-events-none">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>النتيجة بعد العلاج (After)</span>
                    </div>
                  </div>

                  {/* Before Image (Clipped Layer based on sliderPosition) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div
                      className="relative w-full h-full"
                      style={{
                        width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%",
                      }}
                    >
                      <Image
                        src={activeCase.beforeImage}
                        alt="الحالة قبل التدخل العلاجي — مركز إيڤا"
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                      {/* Before Badge (Right in RTL / initial state indicator) */}
                      <div className="absolute bottom-4 right-4 z-10 bg-stone-900/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-700 shadow-sm flex items-center gap-1.5 pointer-events-none">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span>الحالة قبل العلاج (Before)</span>
                      </div>
                    </div>
                  </div>

                  {/* High-Contrast Draggable Hairline & Circular Grip Handle */}
                  <div
                    className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none z-20"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-stone-900 shadow-lg flex items-center justify-center border-2 border-stone-300">
                      <div className="flex items-center gap-0.5 text-xs font-bold text-stone-700">
                        <span>◀</span>
                        <span>▶</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Helpful Instruction Tip */}
                <div className="mt-3 flex items-center justify-between text-xs text-stone-600 px-1">
                  <span className="flex items-center gap-1.5">
                    <span className="text-sage-600 font-bold">💡 إرشاد:</span>
                    <span>اسحب المقبض الدائري أفقياً لمشاهدة التحول الكامل بين قبل وبعد</span>
                  </span>
                  <span className="font-mono text-[11px] text-stone-600">ID: #{activeCase.id}</span>
                </div>
              </div>
            ) : (
              /* Side-by-Side Dual Image View */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Before Image Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
                  <Image
                    src={activeCase.beforeImage}
                    alt="الحالة قبل الإجراء"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-stone-900/90 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                    قبل العلاج (Before)
                  </div>
                </div>

                {/* After Image Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-sage-300 bg-stone-100 shadow-sm">
                  <Image
                    src={activeCase.afterImage}
                    alt="النتيجة بعد الإجراء"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-sage-700 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                    النتيجة بعد العلاج (After)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Structured Clinical Case Analysis (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-sage-600 block mb-1">
                تقرير الحالة السريرية
              </span>
              <h3 className="text-2xl font-bold text-stone-900 leading-tight">
                {activeCase.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6 font-normal">
              {activeCase.description}
            </p>

            {/* 3 Structured Clinical Cards: Before Problem, Treatment, and Clinical Outcome */}
            <div className="space-y-3 mb-8">
              
              {/* Card 1: Before Diagnosis */}
              <div className="p-3.5 rounded-xl bg-sand-50/70 border border-sand-200/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-sand-800 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-sand-600 shrink-0" />
                  <span>التشخيص المبدئي (قبل العلاج):</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal font-normal pr-5">
                  {activeCase.details[0]?.replace("التشخيص المبدئي: ", "")}
                </p>
              </div>

              {/* Card 2: Clinical Procedure */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-800 mb-1">
                  <Stethoscope className="w-3.5 h-3.5 text-sage-600 shrink-0" />
                  <span>الخطة والبروتوكول العلاجي:</span>
                </div>
                <p className="text-xs text-stone-600 leading-normal font-normal pr-5">
                  {activeCase.details[1]?.replace("الخطة العلاجية: ", "")}
                </p>
              </div>

              {/* Card 3: Final Clinical Outcome */}
              <div className="p-3.5 rounded-xl bg-sage-50/70 border border-sage-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-sage-800 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>النتيجة السريرية المعتمدة (بعد العلاج):</span>
                </div>
                <p className="text-xs text-stone-700 leading-normal font-normal pr-5">
                  {activeCase.details[2]?.replace("النتيجة السريرية: ", "")}
                </p>
              </div>

            </div>

            {/* Action Button */}
            <div>
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-medium text-xs transition-all shadow-sm active:scale-[0.98]"
              >
                <span>احجز استشارة لفحص وتقييم حالتك</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
