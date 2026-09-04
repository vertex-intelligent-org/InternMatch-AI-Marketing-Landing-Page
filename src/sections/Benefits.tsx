import React from "react";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Core Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Less searching.
            <br />
            More relevant opportunities.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Designed to transform hours of scattered job hunting into a streamlined, high-signal experience.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((b, i) => (
            <div
              key={b.title}
              className="p-8 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs hover:shadow-md hover:border-[#C7DDE3] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] flex items-center justify-center font-mono text-xs font-bold text-[#171A1C] group-hover:bg-[#F2F7F8] group-hover:text-[#345B6B] transition-colors">
                    0{i + 1}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
                    {b.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#171A1C] mb-2.5 tracking-tight group-hover:text-[#467A8F] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-[#656B70] leading-relaxed font-normal">
                  {b.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center gap-1.5 text-xs font-medium text-[#345B6B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F]" />
                <span>Student advantage</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
