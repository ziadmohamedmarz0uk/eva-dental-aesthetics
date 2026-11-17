"use client";

import React from "react";
import Image from "next/image";
import { DOCTORS } from "@/data/mockData";
import { Award, GraduationCap, MapPin } from "lucide-react";

export default function MedicalTeamSection() {
  return (
    <section id="team" className="scroll-mt-24 py-16 sm:py-20 lg:py-28 bg-[#FAF9F6] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-50 border border-sage-200/80 text-sage-700 text-xs font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>الهيئة الطبية والاستشارية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight mb-4">
            استشاريون مصريون معتمدون بخبرات أكاديمية ودولية
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            يقود كل تخصص في مركز إيڤا استشاريون من كبار أساتذة كليات الطب المصرية (قصر العيني وجامعة القاهرة) مع زمالات الجراحين الملكية البريطانية والأمريكية.
          </p>
        </div>

        {/* 3 Clean Portrait Cards (Realistic Egyptian Doctor Portraits) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-sage-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] group"
            >
              <div>
                {/* Doctor Portrait Container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-stone-200/80 bg-stone-100 mb-5 shadow-sm">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Branch & Availability Tag */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-stone-800 text-[11px] font-semibold px-3 py-1 rounded-full border border-stone-200 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage-600"></span>
                    <span>{doctor.branch.split("(")[0]}</span>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-sage-700 transition-colors">
                    {doctor.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-sage-700 mb-2 leading-relaxed">
                    {doctor.title}
                  </p>

                  <div className="inline-block text-[11px] font-medium text-stone-600 bg-stone-100 px-2.5 py-0.5 rounded-md mb-3">
                    {doctor.specialty}
                  </div>
                </div>

                {/* Academic Qualifications List */}
                <ul className="space-y-2 text-xs text-stone-600 font-normal pt-3 border-t border-stone-100">
                  {doctor.qualifications.map((q, idx) => (
                    <li key={idx} className="leading-relaxed flex items-start gap-2">
                      <span className="text-sand-600 text-sm leading-none mt-0.5">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultation Booking Link for this doctor */}
              <div className="pt-5 mt-4 border-t border-stone-100">
                <a
                  href="#booking"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-stone-800 bg-stone-50 hover:bg-sage-600 hover:text-white border border-stone-200 hover:border-sage-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
                >
                  <span>طلب استشارة مع {doctor.name.split(" ")[1]}</span>
                  <span className="text-xs">←</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
