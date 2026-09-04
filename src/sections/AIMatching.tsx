import React from "react";
import { SparklesIcon } from "@/components/Icons";

export function AIMatching() {
  return (
    <section className="py-24 sm:py-32 bg-[#171C1F] text-[#F5F6F4] relative overflow-hidden">
      {/* Background glow lines with brand #467A8F tint */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#467A8F]/8 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#20272B] text-[#A3C7D1] border border-[#2D4C59]">
            <SparklesIcon className="w-3 h-3 text-[#78A9B8]" />
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F6F4] leading-[1.12]">
            AI that supports the decision —
            <br />
            <span className="text-[#C7DDE3]">
              not replaces it.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#A3C7D1] leading-relaxed font-normal max-w-2xl mx-auto">
            InternMatch AI does not ask a language model to randomly decide whether a student is a good match.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#78A9B8] leading-relaxed font-normal max-w-2xl mx-auto">
            Matching is calculated from structured skills, semantic similarity and candidate preferences. AI is then used to understand CVs, explain results and support applications.
          </p>
        </div>

        {/* Simplified Architectural Diagram Visual */}
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-[#20272B] border border-[#2D4C59] shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Input Triad */}
            <div className="md:col-span-4 space-y-3">
              <div className="p-3.5 rounded-xl bg-[#171C1F] border border-[#2D4C59]/80 text-left">
                <div className="text-xs font-mono font-bold text-[#A3C7D1]">01</div>
                <div className="text-sm font-semibold text-[#F5F6F4]">Structured Skills</div>
                <div className="text-[11px] text-[#78A9B8]">Coursework, projects &amp; verified tools</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171C1F] border border-[#2D4C59]/80 text-left">
                <div className="text-xs font-mono font-bold text-[#78A9B8]">02</div>
                <div className="text-sm font-semibold text-[#F5F6F4]">Semantic Match</div>
                <div className="text-[11px] text-[#78A9B8]">Contextual background embeddings</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#171C1F] border border-[#2D4C59]/80 text-left">
                <div className="text-xs font-mono font-bold text-[#C7DDE3]">03</div>
                <div className="text-sm font-semibold text-[#F5F6F4]">Preferences</div>
                <div className="text-[11px] text-[#78A9B8]">Target role types &amp; work modalities</div>
              </div>
            </div>

            {/* Junction & Calculation */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center p-4">
              <div className="w-full flex items-center justify-center py-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#467A8F] to-[#345B6B] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#467A8F]/20 border border-[#78A9B8]/30">
                  ∑
                </div>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7DDE3]">
                Match Score Engine
              </div>
              <div className="text-[11px] text-[#78A9B8] mt-1">
                Deterministic Compatibility
              </div>
            </div>

            {/* Grounded Explanation Output */}
            <div className="md:col-span-4 space-y-3">
              <div className="p-4 rounded-2xl bg-[#171C1F] border border-[#467A8F]/60 text-left">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#78A9B8] animate-pulse" />
                  <span className="text-xs font-bold text-[#C7DDE3] uppercase tracking-wider">
                    AI Explanation
                  </span>
                </div>
                <div className="text-xs text-[#F5F6F4] leading-relaxed">
                  Transparent breakdown: exact skill alignments, flagged gaps, and tailored rationale.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#171C1F]/60 border border-[#2D4C59]/60 text-left text-xs text-[#78A9B8]">
                <span className="text-[#F5F6F4] font-semibold">Application Support:</span> Role-specific application support grounded in candidate and internship context.
              </div>
            </div>
          </div>

          {/* Footer Label */}
          <div className="mt-8 pt-6 border-t border-[#2D4C59] flex flex-col sm:flex-row items-center justify-between text-xs text-[#78A9B8] gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#467A8F]" />
              <span className="font-semibold text-[#F5F6F4]">Deterministic matching.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#78A9B8]" />
              <span className="font-semibold text-[#F5F6F4]">Grounded AI assistance.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C7DDE3]" />
              <span className="font-semibold text-[#F5F6F4]">Transparent match factors.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
