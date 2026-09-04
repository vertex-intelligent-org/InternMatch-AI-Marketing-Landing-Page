import React from "react";
import { PROBLEMS } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            The Student Dilemma
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Internship searching
            <br />
            shouldn&apos;t feel like guesswork.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Students spend hours browsing opportunities without knowing which
            roles actually fit their background.
          </p>
        </div>

        {/* 3 Problem Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.number}
              className="relative p-8 rounded-3xl bg-white border border-[#E5E7E8] hover:border-[#C7DDE3] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F7F7F5] text-[#171A1C] font-mono text-base font-bold flex items-center justify-center mb-6 group-hover:bg-[#F2F7F8] group-hover:text-[#345B6B] transition-colors border border-[#E5E7E8]">
                  {problem.number}
                </div>
                <h3 className="text-xl font-bold text-[#171A1C] mb-3 tracking-tight">
                  {problem.title}
                </h3>
                <p className="text-sm sm:text-base text-[#656B70] leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center text-xs font-medium text-[#656B70] group-hover:text-[#467A8F] transition-colors">
                <span>Core friction point</span>
              </div>
            </div>
          ))}
        </div>

        {/* Large Brand Statement Banner in dark technical colors */}
        <div className="relative rounded-3xl bg-[#171C1F] p-8 sm:p-12 md:p-16 text-center text-[#F5F6F4] overflow-hidden shadow-xl border border-[#20272B]">
          {/* Subtle restrained glow within dark banner */}
          <div
            className="absolute -right-20 -top-20 w-80 h-80 bg-[#467A8F]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#345B6B]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-bold tracking-widest text-[#78A9B8] uppercase">
              The Fundamental Shift
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]">
              Students don&apos;t need more internship listings.
              <br />
              <span className="text-[#C7DDE3]">
                They need to know which opportunities actually fit them.
              </span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
