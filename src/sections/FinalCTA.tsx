import React from "react";
import { Button } from "@/components/Button";
import { PlayIcon, ArrowRightIcon, SparklesIcon } from "@/components/Icons";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function FinalCTA() {
  const hasAppStore = Boolean(EXTERNAL_LINKS.APP_STORE_URL);
  const hasPlayStore = Boolean(EXTERNAL_LINKS.PLAY_STORE_URL);
  const hasContactEmail = Boolean(EXTERNAL_LINKS.CONTACT_EMAIL);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Restrained atmosphere glow using brand color #467A8F */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#467A8F]/7 blur-[140px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-14 md:p-16 rounded-[40px] bg-white border border-[#E5E7E8] shadow-xl shadow-slate-900/5 relative overflow-hidden">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            <SparklesIcon className="w-3.5 h-3.5 text-[#467A8F]" />
            <span>Launch Readiness</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12] mb-4">
            See InternMatch AI in action.
          </h2>

          <p className="text-base sm:text-lg text-[#656B70] max-w-xl mx-auto mb-8 font-normal">
            Explore the product experience, watch the demo, and follow our journey toward public release.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Button
              href="#demo"
              variant="primary"
              size="lg"
              icon={<PlayIcon className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Watch Demo
            </Button>
            <Button
              href="#product"
              variant="secondary"
              size="lg"
              icon={<ArrowRightIcon className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Explore the Product
            </Button>

            {/* Optional store badges — ONLY shown if real URLs exist */}
            {(hasAppStore || hasPlayStore) && (
              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                {hasAppStore && (
                  <a
                    href={EXTERNAL_LINKS.APP_STORE_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#171A1C] text-white text-xs font-semibold hover:bg-[#20272B] transition-colors"
                  >
                    Download on App Store
                  </a>
                )}
                {hasPlayStore && (
                  <a
                    href={EXTERNAL_LINKS.PLAY_STORE_URL!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#171A1C] text-white text-xs font-semibold hover:bg-[#20272B] transition-colors"
                  >
                    Get it on Google Play
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Static Contact / Partnership Box */}
          <div className="pt-8 border-t border-[#E5E7E8] max-w-md mx-auto">
            <h3 className="text-sm font-bold text-[#171A1C] mb-1">
              Interested in InternMatch AI?
            </h3>
            <p className="text-xs text-[#656B70] mb-3">
              For partnerships, sponsorships or product inquiries:
            </p>
            {hasContactEmail ? (
              <a
                href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F7F7F5] hover:bg-[#F2F7F8] text-[#171A1C] text-xs font-semibold transition-colors border border-[#E5E7E8]"
              >
                <span>Contact the Team</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F7F7F5] text-[#656B70] text-xs font-medium border border-[#E5E7E8] cursor-default select-none">
                <span>Contact details coming soon</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
