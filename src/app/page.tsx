import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { HowItWorks } from "@/sections/HowItWorks";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { AIMatching } from "@/sections/AIMatching";
import { Benefits } from "@/sections/Benefits";
import { Demo } from "@/sections/Demo";
import { Employer } from "@/sections/Employer";
import { Validation } from "@/sections/Validation";
import { Journey } from "@/sections/Journey";
import { Team } from "@/sections/Team";
import { FAQ } from "@/sections/FAQ";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#171A1C] relative selection:bg-[#467A8F] selection:text-white">
      {/* 01: Sticky Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 02: Hero with 42/58 split, Device Mockup & Blender Replacement Zone */}
        <Hero />

        {/* 03: The Problem & Major Brand Statement */}
        <Problem />

        {/* 05: How It Works (Connected Narrative Transformation) */}
        <HowItWorks />

        {/* 06: Product Showcase (5 Stories A-E with Alternating Mockups) */}
        <ProductShowcase />

        {/* 07: AI Without The Hype (Dark Section, Deterministic Math + Grounded AI) */}
        <AIMatching />

        {/* 08: Benefits (6 Refined Student Advantage Units) */}
        <Benefits />

        {/* 09: Demo (Product Walkthrough Video Container) */}
        <Demo />

        {/* 10: Employer (Restrained Student-First Growth) */}
        <Employer />

        {/* 11: Validation & Credibility (1087 Tests, Store Release Status) */}
        <Validation />

        {/* 12: Product Journey (Shipaton to Türkiye Expansion, Store Release Current) */}
        <Journey />

{/* 13: Team (Founding Builders: Mohamad Barakat & Selenur Yurdakul) */}
        <Team />

{/* 14: FAQ (Accessible Accordion) */}
        <FAQ />
      </main>

      {/* 18: Footer with Accurate Attribution & Legal Links */}
      <Footer />
    </div>
  );
}
