import React from "react";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { PlayIcon, SparklesIcon } from "@/components/Icons";

export function Demo() {
  const hasDemoVideo = Boolean(EXTERNAL_LINKS.DEMO_URL);

  return (
    <section id="demo" className="py-24 sm:py-32 relative overflow-hidden bg-[#F2F7F8]/40 border-y border-[#E5E7E8]">
      {/* Restrained brand atmosphere */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#467A8F]/6 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            <SparklesIcon className="w-3 h-3 text-[#467A8F]" />
            Product Walkthrough
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            See InternMatch AI in action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Watch the product journey from CV upload to internship matching, application support, and tracking.
          </p>
        </div>

        {/* Large Premium Video Container */}
        <div className="relative rounded-3xl sm:rounded-[36px] bg-[#171C1F] p-2 sm:p-3.5 shadow-2xl shadow-slate-900/10 border border-[#20272B] overflow-hidden">
          <div className="relative aspect-video w-full rounded-2xl sm:rounded-[28px] overflow-hidden bg-gradient-to-br from-[#171C1F] via-[#20272B] to-[#171C1F] flex flex-col items-center justify-center text-center p-6 border border-[#2D4C59]/40">
            
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10 bg-[radial-gradient(#78a9b8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
              aria-hidden="true"
            />

            {/* Video content or Placeholder state */}
            {hasDemoVideo ? (
              /*
                TODO: Replace with real demo video when available.
                Supported sources: public/media/internmatch-demo.mp4 or YouTube embed
              */
              <video
                controls
                className="w-full h-full object-cover"
                poster="/media/demo-poster.png"
              >
                <source src={EXTERNAL_LINKS.DEMO_URL!} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative z-10 flex flex-col items-center max-w-md">
                {/* Play button indicator */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#467A8F] text-white flex items-center justify-center pl-1 shadow-lg shadow-[#467A8F]/30 mb-6 hover:scale-105 transition-transform cursor-pointer border border-[#78A9B8]/40">
                  <PlayIcon className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>

                <div className="text-[#F5F6F4] font-bold text-lg sm:text-xl mb-1">
                  Product Demo Walkthrough
                </div>
                <p className="text-xs sm:text-sm text-[#A3C7D1] leading-relaxed mb-6 font-normal">
                  Production recording capturing the real mobile workflow is being finalized ahead of university rollout.
                </p>

                {/* Two Product Context Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-[#20272B] text-[#C7DDE3] border border-[#2D4C59] text-xs font-semibold">
                    Student Experience
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#20272B] text-[#A3C7D1] border border-[#2D4C59] text-xs font-semibold">
                    Employer Experience
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Video Metadata Substrip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#656B70] gap-4 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#467A8F]" />
            <span className="font-semibold text-[#171A1C]">Covered in Demo:</span>
            <span>CV Ingestion · Match Breakdown · Application Drafter · Status Pipeline</span>
          </div>

          <span className="text-[11px] font-mono text-[#656B70] bg-white px-3 py-1 rounded-full border border-[#E5E7E8]">
            Source: {EXTERNAL_LINKS.DEMO_URL ? "Live Demo" : "Demo recording in preparation"}
          </span>
        </div>
      </div>
    </section>
  );
}
