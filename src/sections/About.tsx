import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            About the Project
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.14]">
            Built to make internship discovery
            <br />
            more personal.
          </h2>
        </div>

        {/* Editorial Narrative Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs space-y-6 text-base sm:text-lg text-[#656B70] leading-relaxed">
          <p>
            <span className="font-bold text-[#171A1C]">InternMatch AI</span> was created by university students who experienced the same fragmented internship search process themselves.
          </p>

          <p>
            The goal is simple: <span className="font-semibold text-[#171A1C]">help students understand where they fit before spending hours applying blindly.</span>
          </p>

          {/* Context and Origin Box */}
          <div className="pt-6 mt-6 border-t border-[#E5E7E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-[#656B70]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#467A8F] flex-shrink-0" />
              <p className="font-medium text-[#171A1C]">
                {SITE_CONFIG.builders.context}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="px-3 py-1.5 rounded-full bg-[#F7F7F5] border border-[#E5E7E8] text-[#656B70] font-mono text-xs">
                {SITE_CONFIG.builders.milestone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
