import React from "react";
import Image from "next/image";
import { CheckIcon, SparklesIcon } from "@/components/Icons";

const SHOWCASE_EYEBROW_CLASS =
  "text-xs font-bold uppercase tracking-[0.14em] text-[#345B6B]";

const SHOWCASE_TITLE_CLASS =
  "mt-2 mb-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-[#171A1C] sm:text-4xl lg:text-[42px]";

type ProductImageProps = {
  src: string;
  alt: string;
};

function ProductImage({
  src,
  alt,
}: ProductImageProps) {
  return (
    <div className="aurora-card-surface relative mx-auto w-full max-w-[500px] overflow-hidden rounded-[32px] border border-[#DCE5E7] bg-[#F7F7F5] p-3 shadow-sm sm:p-4 lg:p-5">
      <div className="relative z-10 aspect-[10/17] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) calc(100vw - 56px), (max-width: 1024px) 460px, 500px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function ProductShowcase() {
  return (
    <section
      id="product"
      className="pt-12 pb-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================
            PRODUCT INTRO — REAL ACCOUNT ACCESS SCREEN
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 lg:order-2">
            <span className={`${SHOWCASE_EYEBROW_CLASS} mb-4`}>
              Product Capabilities
            </span>

            <h2 className={SHOWCASE_TITLE_CLASS}>
              Engineered for high signal.
              <br />
              Built for candidate clarity.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
              Every feature is designed to reduce friction and eliminate ambiguity between your academic background and real employer roles.
            </p>
          </div>

          <div className="lg:col-span-7 lg:order-1">
            <ProductImage
              src="/media/product-showcase/account-access.png"
              alt="InternMatch AI account access screen"
            />
          </div>
        </div>

        {/* ========================================================
            STORY A — CV ANALYSIS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 lg:order-1">
            <span className={SHOWCASE_EYEBROW_CLASS}>
              CV ANALYSIS
            </span>

            <h3 className={SHOWCASE_TITLE_CLASS}>
              Your CV becomes your profile.
            </h3>

            <h4 className="text-lg font-semibold text-[#171A1C] mb-4">
              Upload once. Build from what already represents you.
            </h4>

            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              InternMatch turns your CV into a structured candidate profile so you don&apos;t repeatedly enter the same information.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#171A1C] font-medium">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>

                <span>
                  Structured extraction of skills, education, experience and projects
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>

                <span>
                  Candidate information becomes structured data for matching
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>

                <span>
                  Review extracted information before confirming your profile
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 lg:mt-0 lg:col-span-7 lg:order-2">
            <ProductImage
              src="/media/product-showcase/cv-analysis.png"
              alt="InternMatch AI CV analysis and structured profile screen"
            />
          </div>
        </div>

        {/* ========================================================
            STORY B — MATCHUPS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 lg:order-2">
            <span className={SHOWCASE_EYEBROW_CLASS}>
              MATCHUPS
            </span>

            <h3 className={SHOWCASE_TITLE_CLASS}>
              Know where you actually fit.
            </h3>

            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              InternMatch combines skill alignment, semantic similarity and candidate preferences to surface more relevant internship opportunities.
            </p>

            <div className="rounded-2xl border border-[#C7DDE3] bg-[#F2F7F8] p-4 text-xs text-[#2D4C59]">
              <div className="font-semibold">
                Deterministic Hybrid Scoring
              </div>

              <p className="mt-1 text-[#656B70] leading-relaxed">
                Matches are scored from structured candidate and internship signals rather than generated from scratch. Students can see the main factors behind each match.
              </p>
            </div>
          </div>

          <div className="mt-2 lg:mt-0 lg:col-span-7 lg:order-1">
            <ProductImage
              src="/media/product-showcase/matchups.png"
              alt="InternMatch AI internship matchups screen"
            />
          </div>
        </div>

        {/* ========================================================
            STORY C — WHY YOU MATCH
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 lg:order-1">
            <span className={SHOWCASE_EYEBROW_CLASS}>
              WHY YOU MATCH
            </span>

            <h3 className={SHOWCASE_TITLE_CLASS}>
              A percentage isn&apos;t enough.
            </h3>

            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              See which skills align, what&apos;s missing, and what you can improve before applying.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#171A1C] font-medium">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3" />
                </span>

                <span>
                  Explicit breakdown of overlapping skills
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                  !
                </span>

                <span>
                  Clear visibility into missing skills
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
                  <SparklesIcon className="w-3 h-3 text-[#467A8F]" />
                </span>

                <span>
                  Actionable guidance before submitting an application
                </span>
              </div>
            </div>
          </div>

          <div className="mt-2 lg:mt-0 lg:col-span-7 lg:order-2">
            <ProductImage
              src="/media/product-showcase/why-you-match.png"
              alt="InternMatch AI Why You Match explanation screen"
            />
          </div>
        </div>

        {/* ========================================================
            STORY D — APPLICATION SUPPORT
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5 lg:order-2">
            <span className={SHOWCASE_EYEBROW_CLASS}>
              APPLICATION SUPPORT
            </span>

            <h3 className={SHOWCASE_TITLE_CLASS}>
              Go from match to application faster.
            </h3>

            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              Create context-aware application content grounded in your real background and the internship requirements.
            </p>

            <p className="text-sm text-[#656B70] leading-relaxed">
              Application content is grounded in your profile and the role requirements, helping you prepare a more relevant application.
            </p>
          </div>

          <div className="mt-2 lg:mt-0 lg:col-span-7 lg:order-1">
            <ProductImage
              src="/media/product-showcase/application-support.png"
              alt="InternMatch AI application support screen"
            />
          </div>
        </div>

        {/* ========================================================
            STORY E — APPLICATION TRACKING
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 lg:order-1">
            <span className={SHOWCASE_EYEBROW_CLASS}>
              APPLICATION TRACKING
            </span>

            <h3 className={SHOWCASE_TITLE_CLASS}>
              Keep every application in one place.
            </h3>

            <p className="text-base text-[#656B70] leading-relaxed mb-6 font-normal">
              Follow progress from Saved to Applied, Interviewing and final outcomes.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="px-3 py-1.5 rounded-lg bg-[#F7F7F5] text-[#656B70] border border-[#E5E7E8]">
                Saved
              </span>

              <span className="text-slate-300" aria-hidden="true">
                →
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">
                Applied
              </span>

              <span className="text-slate-300" aria-hidden="true">
                →
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-[#467A8F] text-white">
                Interviewing
              </span>

              <span className="text-slate-300" aria-hidden="true">
                →
              </span>

              <span className="px-3 py-1.5 rounded-lg bg-[#171A1C] text-white">
                Accepted
              </span>
            </div>
          </div>

          <div className="mt-2 lg:mt-0 lg:col-span-7 lg:order-2">
            <ProductImage
              src="/media/product-showcase/application-tracking.png"
              alt="InternMatch AI application tracking screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}