"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophyBanner from "@/components/PhilosophyBanner";
import ServicesDirectory from "@/components/ServicesDirectory";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TechnologySection from "@/components/TechnologySection";
import MedicalTeamSection from "@/components/MedicalTeamSection";
import BookingAndBranchesSection from "@/components/BookingAndBranchesSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("dental");

  const handleSelectService = (serviceTitle: string, category: string) => {
    setSelectedService(serviceTitle);
    setSelectedCategory(category);
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-stone-900 font-sans selection:bg-sage-600 selection:text-white">
      {/* 1. Minimal Sticky Header */}
      <Navbar />

      {/* 2. Editorial Hero Section */}
      <HeroSection />

      {/* 3. Clinical Philosophy & Standard */}
      <PhilosophyBanner />

      {/* 4. Clean Services Directory (Interactive Tab Switcher & Pre-fill Booking) */}
      <ServicesDirectory onSelectService={handleSelectService} />

      {/* 5. Interactive Before & After Slider Comparison */}
      <BeforeAfterSection />

      {/* 6. Medical Technology & Sterilization Standards */}
      <TechnologySection />

      {/* 7. Senior Medical Team & Academic Credentials */}
      <MedicalTeamSection />

      {/* 8. Minimalist Booking Form & Cairo Branches (Sheikh Zayed & New Cairo) */}
      <BookingAndBranchesSection
        prefilledService={selectedService}
        prefilledCategory={selectedCategory}
      />

      {/* 9. Minimalist Footer */}
      <Footer />

      {/* 10. Discreet WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
