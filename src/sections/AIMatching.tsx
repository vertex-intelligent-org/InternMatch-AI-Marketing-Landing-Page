import React from "react";
import { ArrowRightIcon, SparklesIcon } from "@/components/Icons";

function FlowArrow() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-1 md:px-2 md:py-0"
    >
      <ArrowRightIcon className="h-5 w-5 rotate-90 text-[#5F8997] md:rotate-0" />
    </div>
  );
}

export function AIMatching() {
  return (
    <section className="relative overflow-hidden bg-[#171C1F] py-20 text-[#F5F6F4] sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,169,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(120,169,184,0.08) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#467A8F]/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="section-eyebrow section-eyebrow-dark mb-4">
            <SparklesIcon className="h-3 w-3 text-[#467A8F]" />
            Engineering Philosophy
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#F5F6F4] sm:text-4xl md:text-5xl">
            AI supports the decision —
            <br />
            <span className="text-[#C7DDE3]">
              it doesn&apos;t make it.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#91B5C0] sm:text-base">
            Your match is calculated from real profile and internship signals.
            AI explains the result and helps you prepare what comes next.
          </p>
        </div>

        {/* Compact flow */}
        <div className="mx-auto max-w-5xl rounded-[28px] border border-[#2D4C59] bg-[#1B2226]/95 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-6">
          <div className="grid grid-cols-1 items-stretch md:grid-cols-[1fr_auto_1fr_auto_1fr]">
            {/* Profile */}
            <div className="rounded-2xl border border-[#D7DEE2] bg-[#F2F4F5] p-5 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#467A8F]">
                  Your profile
                </span>

                <div
                  aria-hidden="true"
                  className="grid h-8 w-8 grid-cols-2 gap-1"
                >
                  <span className="rounded-sm border border-[#467A8F]/70 bg-[#467A8F]/15" />
                  <span className="rounded-sm border border-[#78A9B8]/40" />
                  <span className="rounded-sm border border-[#78A9B8]/40" />
                  <span className="rounded-sm border border-[#467A8F]/70 bg-[#467A8F]/15" />
                </div>
              </div>

              <h3 className="text-base font-bold text-[#202A2F]">
                Structured signals
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#5F6B73]">
                Skills, experience, education, projects and preferences.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Skills", "Experience", "Projects", "Preferences"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#D7DEE2] bg-white px-2 py-1 text-[9px] font-semibold text-[#2F3B42] shadow-sm"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <FlowArrow />

            {/* Match */}
            <div className="rounded-2xl border border-[#B8CDD4] bg-[#F2F4F5] p-5 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#52666E]">
                  Match engine
                </span>

                <span className="rounded-full border border-[#D7DEE2] bg-white px-2.5 py-1 text-[9px] font-bold text-[#2F3B42] shadow-sm">
                  Calculated
                </span>
              </div>

              <h3 className="text-base font-bold text-[#202A2F]">
                Hybrid matching
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#5F6B73]">
                Combines skill alignment, semantic similarity and profile attributes.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Skills", "Semantic", "Attributes"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-[#D7DEE2] bg-white px-2 py-2.5 text-center text-[9px] font-semibold text-[#2F3B42] shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <FlowArrow />

            {/* AI */}
            <div className="rounded-2xl border border-[#D7DEE2] bg-[#F2F4F5] p-5 shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#467A8F]">
                  AI assistance
                </span>

                <SparklesIcon className="h-4 w-4 text-[#467A8F]" />
              </div>

              <h3 className="text-base font-bold text-[#202A2F]">
                Explain &amp; prepare
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#5F6B73]">
                AI explains why you match and helps prepare application content using real context.
              </p>

              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#78A9B8]" />
                  <span className="text-[10px] font-medium text-[#52666E]">
                    Match explanation
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#467A8F]" />
                  <span className="text-[10px] font-medium text-[#52666E]">
                    Application support
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Single takeaway */}
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#D7DEE2] bg-[#F2F4F5] px-4 py-3.5 shadow-[0_8px_22px_rgba(0,0,0,0.07)] sm:items-center">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#78A9B8] sm:mt-0" />

            <p className="text-xs font-semibold leading-relaxed text-[#3F4C53]">
              AI does not generate your match score. It helps you understand it and act on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}