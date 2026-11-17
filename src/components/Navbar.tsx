"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "التخصصات", href: "#services" },
    { label: "النتائج السريرية", href: "#results" },
    { label: "الأطباء", href: "#team" },
    { label: "الفروع والمواعيد", href: "#branches" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          : "bg-[#FAF9F6]/85 backdrop-blur-sm border-b border-stone-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-baseline gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl font-bold sm:font-semibold tracking-tight text-stone-900 group-hover:text-sage-600 transition-colors">
            مركز إيڤا
          </span>
          <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-stone-600 font-medium border-r border-stone-300 pr-3 mr-1">
            EVA DENTAL & AESTHETICS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-600">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-stone-900 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:right-0 after:left-0 after:h-[1.5px] after:bg-sage-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Hotline */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          <a
            href="tel:19842"
            className="flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
            title="الخط الساخن لمركز إيڤا"
          >
            <Phone className="w-3.5 h-3.5 text-sage-600" />
            <span className="font-semibold tracking-wider">19842</span>
            <span className="text-stone-600 text-[11px]">(الخط الساخن)</span>
          </a>

          <Link
            href="#booking"
            className="inline-flex items-center justify-center px-5 xl:px-6 py-2.5 rounded-full bg-sage-600 hover:bg-sage-700 text-white text-sm font-medium transition-all shadow-sm active:scale-[0.98]"
          >
            احجز موعد
          </Link>
        </div>

        {/* Mobile Call & Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:19842"
            className="p-2 rounded-full bg-stone-100 text-sage-700 hover:bg-stone-200 transition-colors"
            aria-label="اتصل بالخط الساخن"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-stone-200 px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-700 hover:text-sage-600 py-1.5 transition-colors border-b border-stone-100 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200/80 flex flex-col gap-3">
            <a
              href="tel:19842"
              className="flex items-center justify-between text-sm font-medium text-stone-800 bg-stone-100 p-3 rounded-xl"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage-600" />
                <span>الخط الساخن الموحد</span>
              </span>
              <span className="font-bold tracking-wider font-mono text-base">19842</span>
            </a>

            <Link
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-sage-600 text-white text-sm font-medium shadow-sm hover:bg-sage-700 transition-colors"
            >
              احجز موعد كشف أو استشارة
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
