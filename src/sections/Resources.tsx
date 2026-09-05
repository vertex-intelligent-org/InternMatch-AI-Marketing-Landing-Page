import React from "react";
import Link from "next/link";
import { RESOURCES_LINKS } from "@/lib/constants";
import { ArrowRightIcon, ExternalLinkIcon } from "@/components/Icons";

export function Resources() {
  return (
    <section id="resources" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="section-eyebrow mb-4">
            Navigation &amp; Links
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Explore InternMatch
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Direct access to project resources, community origin, and release milestones.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES_LINKS.map((item) => {
            const hasValidLink = Boolean(item.href);

            const CardContent = (
              <div
                className={`p-8 rounded-3xl bg-white border border-[#E5E7E8] transition-all duration-200 flex flex-col justify-between h-full ${
                  hasValidLink
                    ? "hover:border-[#C7DDE3] hover:shadow-md cursor-pointer group"
                    : "opacity-85"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#656B70]">
                      Resource
                    </span>
                    {hasValidLink ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">
                        {item.actionLabel}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F7F7F5] text-[#656B70] border border-[#E5E7E8]">
                        Coming soon
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#171A1C] mb-2 group-hover:text-[#467A8F] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#656B70] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center justify-between text-xs font-medium">
                  {hasValidLink ? (
                    <span className="text-[#345B6B] flex items-center gap-1.5 group-hover:underline">
                      <span>Open resource</span>
                      {item.isExternal ? (
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      )}
                    </span>
                  ) : (
                    <span className="text-[#656B70]">
                      Link will be published upon release
                    </span>
                  )}
                </div>
              </div>
            );

            if (hasValidLink && item.isExternal) {
              return (
                <a
                  key={item.title}
                  href={item.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardContent}
                </a>
              );
            }

            if (hasValidLink && !item.isExternal) {
              return (
                <Link key={item.title} href={item.href!} className="block h-full">
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={item.title} className="block h-full">
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
