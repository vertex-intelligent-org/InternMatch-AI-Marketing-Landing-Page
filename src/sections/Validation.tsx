import React from "react";
import { VALIDATION_METRICS, TECH_STACK_PILLS, SITE_CONFIG } from "@/lib/constants";

export function Validation() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Engineering Rigor
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            More than a hackathon prototype.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Built with thorough architectural rigor, automated validation, and a scalable core foundation.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {VALIDATION_METRICS.map((m) => (
            <div
              key={m.label}
              className="p-8 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs flex flex-col justify-between hover:border-[#C7DDE3] transition-colors"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-sm font-bold text-[#171A1C] mb-1">
                  {m.label}
                </div>
                <div className="text-xs text-[#656B70] font-normal">
                  {m.subtext}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center gap-2 text-[11px] text-[#345B6B] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F]" />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </div>

        {/* Current Launch Readiness Status Banner & Tech Stack Pills */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F7F5] border border-[#E5E7E8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#345B6B] font-bold mb-1">
              Current Platform Status
            </div>
            <div className="text-base sm:text-lg font-bold text-[#171A1C]">
              {SITE_CONFIG.status}
            </div>
          </div>

          {/* Supporting Technology Line */}
          <div className="flex flex-wrap items-center gap-2">
            {TECH_STACK_PILLS.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-white border border-[#E5E7E8] text-xs font-medium text-[#171A1C] shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
