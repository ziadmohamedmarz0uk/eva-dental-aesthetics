"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Calm subtle tooltip */}
      <div
        className={`hidden sm:block transition-all duration-200 pointer-events-none bg-stone-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-sm border border-stone-800 font-light ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        }`}
      >
        استفسر مباشرة مع الاستقبال الطبي
      </div>

      {/* Discreet, non-bouncing WhatsApp Button */}
      <a
        href="https://wa.me/201024567890?text=مرحباً%20مركز%20إيڤا،%20أود%20الاستفسار%20عن%20الخدمات%20المتاحة"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع عيادة إيڤا عبر واتساب"
        className="w-12 h-12 rounded-full bg-[#2F5D50] hover:bg-[#24493F] text-white flex items-center justify-center border border-stone-300/40 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 text-sand-300" />
      </a>
    </div>
  );
}
