"use client";

import React, { useState, useEffect } from "react";
import { BRANCHES } from "@/data/mockData";
import { MapPin, Clock, Phone, CheckCircle2, ArrowLeft, Building2, Calendar } from "lucide-react";

interface BookingAndBranchesProps {
  prefilledService?: string;
  prefilledCategory?: string;
}

export default function BookingAndBranchesSection({
  prefilledService = "",
  prefilledCategory = "",
}: BookingAndBranchesProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("zayed");
  const [category, setCategory] = useState("dental");
  const [service, setService] = useState("");
  const [preferredTime, setPreferredTime] = useState<"morning" | "evening">("evening");
  const [notes, setNotes] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  // Sync prefilled service when user selects one from ServicesDirectory
  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
    if (prefilledCategory) {
      setCategory(prefilledCategory);
    }
  }, [prefilledService, prefilledCategory]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    // Simulate instantaneous booking confirmation
    setTimeout(() => {
      const randomCode = `EVA-${Math.floor(1000 + Math.random() * 9000)}`;
      setConfirmationCode(randomCode);
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 600);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    setFullName("");
    setPhone("");
    setService("");
    setNotes("");
  };

  return (
    <section id="branches" className="scroll-mt-24 py-16 sm:py-24 lg:py-32 bg-[#2F5D50] text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-wider text-sand-300 uppercase mb-2 block">
            المواعيد والاستقبال
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">
            تفضل بزيارتنا في الشيخ زايد أو التجمع الخامس
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            لضمان الخصوصية والالتزام بأعلى معايير التعقيم، نستقبل الاستشارات والحالات بحجز مسبق. يسعد فريق الاستقبال الطبي بتنسيق موعدك والتأكيد عبر رسالة واتساب أو مكالمة هاتفية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Booking Form Card (7 Cols) */}
          <div id="booking" className="scroll-mt-28 lg:col-span-7 bg-[#24493F] border border-stone-600/40 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.15)]">
            
            {!isConfirmed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">
                    طلب موعد كشف أو استشارة طبية
                  </h3>
                  <p className="text-xs text-stone-300 font-normal">
                    املأ البيانات وسيقوم المنسق الطبي بالتواصل معك خلال ساعتي عمل لتأكيد الموعد النهائي.
                  </p>
                </div>

                {/* Name & Phone Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-200 mb-2">
                      الاسم بالكامل *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: م. أحمد عبد العزيز"
                      className="w-full bg-[#1A352E] border border-stone-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-sand-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-200 mb-2">
                      رقم الموبايل *
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01x xxxx xxxx"
                      className="w-full bg-[#1A352E] border border-stone-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-sand-400 transition-colors text-right"
                    />
                  </div>
                </div>

                {/* Branch Selection */}
                <div>
                  <label className="block text-xs font-medium text-stone-200 mb-2">
                    الفرع المطلوب *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setBranch("zayed")}
                      className={`p-3.5 rounded-lg border text-right transition-all flex items-start gap-3 ${
                        branch === "zayed"
                          ? "bg-sage-600/60 border-sand-400 text-white"
                          : "bg-[#1A352E]/70 border-stone-600/40 text-stone-300 hover:border-stone-500"
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-sand-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold">الشيخ زايد</div>
                        <div className="text-[11px] text-stone-300">أركان بلازا — الدور 4</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBranch("tagamoa")}
                      className={`p-3.5 rounded-lg border text-right transition-all flex items-start gap-3 ${
                        branch === "tagamoa"
                          ? "bg-sage-600/60 border-sand-400 text-white"
                          : "bg-[#1A352E]/70 border-stone-600/40 text-stone-300 hover:border-stone-500"
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-sand-300 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold">التجمع الخامس</div>
                        <div className="text-[11px] text-stone-300">التسعين الشمالي — الدور 2</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Specialty Category */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-200 mb-2">
                      التخصص الطبي
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-[#1A352E] border border-stone-500/50 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-sand-400 transition-colors"
                    >
                      <option value="dental">طب وتجميل الأسنان</option>
                      <option value="aesthetic">الجلدية والليزر والتجميل</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-200 mb-2">
                      الفترة المفضلة للحضور
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setPreferredTime("morning")}
                        className={`py-3 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          preferredTime === "morning"
                            ? "bg-sand-400 text-stone-950 border-sand-400 font-semibold"
                            : "bg-[#1A352E] text-stone-300 border-stone-500/50 hover:border-stone-400"
                        }`}
                      >
                        صباحية (10 ص - 3 م)
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredTime("evening")}
                        className={`py-3 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                          preferredTime === "evening"
                            ? "bg-sand-400 text-stone-950 border-sand-400 font-semibold"
                            : "bg-[#1A352E] text-stone-300 border-stone-500/50 hover:border-stone-400"
                        }`}
                      >
                        مسائية (4 م - 10 م)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Service/Procedure of interest */}
                <div>
                  <label className="block text-xs font-medium text-stone-200 mb-2">
                    الإجراء أو الاستفسار المطلوب
                  </label>
                  <input
                    type="text"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    placeholder="مثال: فحص دوري، فينير، زراعة فورية، كانديلا ليزر..."
                    className="w-full bg-[#1A352E] border border-stone-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-sand-400 transition-colors"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-medium text-stone-200 mb-2">
                    ملاحظات أو تاريخ مرضي ذو صلة (اختياري)
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="أي استفسار يود الطبيب معرفته قبل الحضور..."
                    className="w-full bg-[#1A352E] border border-stone-500/50 rounded-lg px-4 py-3 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-sand-400 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-sand-400 hover:bg-sand-300 text-stone-950 font-medium text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>جاري تسجيل الطلب...</span>
                    ) : (
                      <>
                        <span>تأكيد طلب الموعد</span>
                        <ArrowLeft className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-stone-300 mt-3 font-light">
                    لا يتم سداد أي رسوم إلكترونياً. الدفع عند الحضور في العيادة نقداً أو بالتقسيط الميسر.
                  </p>
                </div>
              </form>
            ) : (
              /* Instant Confirmation State */
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-sand-400/20 border border-sand-400 flex items-center justify-center text-sand-300 mb-4">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-medium text-white mb-2">
                  تم استلام طلب الموعد بنجاح
                </h3>
                
                <p className="text-stone-300 text-sm max-w-md mb-6 leading-relaxed font-light">
                  شكراً لك يا <strong>{fullName}</strong>. تم تسجيل حجزك المبدئي برقم مرجعي:
                </p>

                <div className="bg-[#1A352E] border border-stone-500/60 rounded-xl px-6 py-4 mb-6 w-full max-w-sm">
                  <div className="text-xs text-stone-400 mb-1">رقم الحجز المرجعي</div>
                  <div className="text-2xl font-mono font-bold tracking-widest text-sand-300">
                    {confirmationCode}
                  </div>
                  <div className="text-xs text-stone-300 mt-2 pt-2 border-t border-stone-600/40 flex justify-between">
                    <span>الفرع: {branch === "zayed" ? "الشيخ زايد (أركان)" : "التجمع الخامس (التسعين)"}</span>
                    <span>الفترة: {preferredTime === "morning" ? "صباحية" : "مسائية"}</span>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed max-w-md mb-8">
                  سيتواصل معك فريق الاستقبال الطبي على رقمك <strong dir="ltr">{phone}</strong> لتحديد الساعة الدقيقة وإرسال الموقع الجغرافي للعيادة عبر واتساب.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                  <a
                    href={`https://wa.me/201024567890?text=${encodeURIComponent(
                      `مرحباً مركز إيڤا، قمت بحجز موعد باسم ${fullName} ورقم الحجز ${confirmationCode} في ${
                        branch === "zayed" ? "فرع الشيخ زايد" : "فرع التجمع الخامس"
                      }.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 rounded-lg bg-sand-400 hover:bg-sand-300 text-stone-950 font-medium text-xs transition-colors"
                  >
                    إرسال التأكيد مباشرة عبر واتساب
                  </a>

                  <button
                    onClick={handleReset}
                    className="py-3 px-5 rounded-lg border border-stone-500 text-stone-200 hover:text-white text-xs font-medium transition-colors"
                  >
                    حجز موعد آخر
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* Branches Information (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sand-300">
              <Building2 className="w-4 h-4" />
              <span>فروع مركز إيڤا في القاهرة الكبرى</span>
            </div>

            {BRANCHES.map((br) => (
              <div
                key={br.id}
                className="bg-[#24493F]/60 border border-stone-600/40 rounded-xl p-6 transition-all hover:border-sand-400/60"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h4 className="text-lg font-medium text-white">
                    {br.name}
                  </h4>
                  <span className="text-xs font-medium text-sand-300">
                    {br.area}
                  </span>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed mb-4 font-light">
                  {br.address}
                  <br />
                  <span className="text-stone-400">{br.landmark}</span>
                </p>

                <div className="space-y-2 text-xs text-stone-300 pt-3 border-t border-stone-600/30">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-sand-300 shrink-0" />
                    <span>{br.workingHours}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-sand-300 shrink-0" />
                    <span dir="ltr" className="font-mono">{br.phone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-600/20 flex items-center justify-between text-[11px]">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(br.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-300 hover:underline flex items-center gap-1 font-medium"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>عرض الموقع على خرائط Google</span>
                  </a>
                  <span className="text-stone-400">مواقف سيارات متوفرة</span>
                </div>
              </div>
            ))}

            {/* Hotline Callout */}
            <div className="p-5 rounded-xl bg-[#1A352E] border border-stone-600/50 flex items-center justify-between">
              <div>
                <div className="text-xs text-stone-300 font-light">الخط الساخن الموحد للحجوزات والطوارئ</div>
                <div className="text-2xl font-bold tracking-wider text-white mt-0.5">19842</div>
              </div>
              <a
                href="tel:19842"
                className="px-4 py-2 rounded-lg bg-sand-400 text-stone-950 font-medium text-xs hover:bg-sand-300 transition-colors"
              >
                اتصال الآن
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
