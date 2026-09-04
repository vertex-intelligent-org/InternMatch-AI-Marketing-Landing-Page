import React from "react";
import { BUILDERS } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon, GlobeIcon } from "@/components/Icons";

export function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#F2F7F8]/30 border-y border-[#E5E7E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Founding Team
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Meet the builders.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            The student builders behind the architecture, engineering, and product experience of InternMatch AI.
          </p>
        </div>

        {/* Two Equal Premium Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {BUILDERS.map((builder) => (
            <div
              key={builder.name}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs hover:shadow-md hover:border-[#C7DDE3] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Avatar / Placeholder */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#20272B] to-[#171C1F] text-[#A3C7D1] font-bold text-xl flex items-center justify-center shadow-xs border border-[#2D4C59]">
                    {builder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#171A1C] tracking-tight">
                      {builder.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#345B6B] uppercase tracking-wider mt-0.5">
                      {builder.role}
                    </p>
                    <p className="text-xs text-[#656B70] mt-0.5">
                      Üsküdar University · AISS Club
                    </p>
                  </div>
                </div>

                {/* Focus Areas */}
                <div className="mb-6">
                  <div className="text-[11px] font-bold text-[#656B70] uppercase tracking-wider mb-2.5">
                    Engineering Focus
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {builder.areas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] text-xs font-medium text-[#171A1C]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social / Profile Links (Graceful fallback when URL is null) */}
              <div className="pt-6 border-t border-[#E5E7E8] flex items-center justify-between text-xs text-[#656B70]">
                <span className="text-[11px] font-medium text-[#656B70]">Profiles:</span>
                <div className="flex items-center gap-2">
                  {/* LinkedIn */}
                  {builder.links.linkedin ? (
                    <a
                      href={builder.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#F7F7F5] hover:bg-[#F2F7F8] text-[#171A1C] hover:text-[#345B6B] transition-colors border border-[#E5E7E8]"
                      aria-label={`${builder.name} LinkedIn`}
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className="p-2 rounded-lg bg-[#F7F7F5] text-slate-300 cursor-not-allowed border border-[#E5E7E8]"
                      title="LinkedIn link coming soon"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </span>
                  )}

                  {/* GitHub */}
                  {builder.links.github ? (
                    <a
                      href={builder.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#F7F7F5] hover:bg-[#F2F7F8] text-[#171A1C] hover:text-[#345B6B] transition-colors border border-[#E5E7E8]"
                      aria-label={`${builder.name} GitHub`}
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className="p-2 rounded-lg bg-[#F7F7F5] text-slate-300 cursor-not-allowed border border-[#E5E7E8]"
                      title="GitHub link coming soon"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </span>
                  )}

                  {/* Portfolio */}
                  {builder.links.portfolio ? (
                    <a
                      href={builder.links.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#F7F7F5] hover:bg-[#F2F7F8] text-[#171A1C] hover:text-[#345B6B] transition-colors border border-[#E5E7E8]"
                      aria-label={`${builder.name} Portfolio`}
                    >
                      <GlobeIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      className="p-2 rounded-lg bg-[#F7F7F5] text-slate-300 cursor-not-allowed border border-[#E5E7E8]"
                      title="Portfolio link coming soon"
                    >
                      <GlobeIcon className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
