import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function CredibilityStrip() {
  return (
    <section className="py-6 border-y border-[#E5E7E8] bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Main attribution line */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#467A8F] flex-shrink-0" />
            <p className="text-xs sm:text-sm text-[#171A1C] font-medium leading-normal">
              {SITE_CONFIG.builders.context}
            </p>
          </div>

          {/* Shipaton / Independent Milestone */}
          <div className="flex items-center gap-2 text-xs text-[#656B70] font-normal">
            <span className="px-2.5 py-1 rounded-full bg-white border border-[#E5E7E8] text-[#656B70] font-mono text-[11px]">
              RevenueCat Shipaton 2026
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-[#656B70]">Independent Student Product</span>
          </div>
        </div>
      </div>
    </section>
  );
}
