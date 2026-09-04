import React from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/Icons";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-[#F2F7F8]/40 border-y border-[#E5E7E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            System Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            One CV.
            <br />
            A smarter internship journey.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            A continuous transformation from raw document into actionable career intelligence.
          </p>
        </div>

        {/* Transformation Pipeline Journey */}
        <div className="relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C7DDE3]/50 via-[#467A8F]/40 to-[#C7DDE3]/50 -translate-y-12 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-white rounded-3xl p-6 border border-[#E5E7E8] shadow-xs hover:shadow-md hover:border-[#C7DDE3] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-[#F7F7F5] text-[#171A1C] group-hover:bg-[#F2F7F8] group-hover:text-[#345B6B] transition-colors border border-[#E5E7E8]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#171A1C] mb-1 group-hover:text-[#467A8F] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-[11px] font-mono text-[#467A8F] font-semibold mb-3">
                    {step.format}
                  </div>

                  <p className="text-xs sm:text-sm text-[#656B70] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-indicator at step bottom */}
                <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center justify-between text-xs text-[#656B70]">
                  <span className="text-[11px] font-medium text-[#656B70]">
                    Stage {idx + 1} of 5
                  </span>
                  {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                    <span className="lg:hidden text-[#467A8F]">
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Summary Bar */}
        <div className="mt-14 p-5 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#656B70] text-center">
          <span className="font-semibold text-[#171A1C]">CV Intake</span>
          <span className="text-slate-300">→</span>
          <span className="font-semibold text-[#171A1C]">Structured Profile</span>
          <span className="text-slate-300">→</span>
          <span className="font-semibold text-[#171A1C]">Matching Engine</span>
          <span className="text-slate-300">→</span>
          <span className="font-semibold text-[#171A1C]">Why You Match</span>
          <span className="text-slate-300">→</span>
          <span className="font-semibold text-[#345B6B]">Application Success</span>
        </div>
      </div>
    </section>
  );
}
