import React from "react";
import { JOURNEY_MILESTONES } from "@/lib/constants";
import { CheckIcon } from "@/components/Icons";

export function Journey() {
  return (
    <section className="py-24 sm:py-32 bg-[#F2F7F8]/30 border-y border-[#E5E7E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Roadmap &amp; Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            From Shipaton
            <br />
            to a real product.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            A disciplined transition from an initial hackathon concept toward public launch.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {JOURNEY_MILESTONES.map((item, idx) => {
            const isCurrent = item.status === "current";
            const isCompleted = item.status === "completed";
            const isUpcoming = item.status === "upcoming";

            return (
              <div
                key={item.stage}
                className={`p-6 rounded-3xl transition-all duration-200 flex flex-col justify-between ${
                  isCurrent
                    ? "bg-white border-2 border-[#467A8F] shadow-lg shadow-[#467A8F]/10 ring-4 ring-[#E3EEF1]"
                    : isCompleted
                    ? "bg-white border border-[#E5E7E8] shadow-xs"
                    : "bg-[#F7F7F5] border border-dashed border-[#E5E7E8] text-[#656B70]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#656B70]">
                      0{idx + 1}
                    </span>

                    {isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#467A8F] text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                        Current
                      </span>
                    )}

                    {isCompleted && (
                      <span className="w-5 h-5 rounded-full bg-[#F2F7F8] text-[#345B6B] flex items-center justify-center">
                        <CheckIcon className="w-3 h-3" />
                      </span>
                    )}

                    {isUpcoming && (
                      <span className="text-[10px] font-mono text-[#656B70] font-semibold uppercase">
                        Future
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-base font-bold mb-2 tracking-tight ${
                      isCurrent
                        ? "text-[#171A1C]"
                        : isCompleted
                        ? "text-[#171A1C]"
                        : "text-[#656B70]"
                    }`}
                  >
                    {item.stage}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed ${
                      isCurrent
                        ? "text-[#2D4C59] font-medium"
                        : isCompleted
                        ? "text-[#656B70]"
                        : "text-[#656B70]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5E7E8] text-[10px] uppercase font-mono font-semibold">
                  {isCurrent && <span className="text-[#345B6B] font-bold">● Active Phase</span>}
                  {isCompleted && <span className="text-[#656B70]">Completed</span>}
                  {isUpcoming && <span className="text-[#656B70]">Upcoming State</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
