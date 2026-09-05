"use client";

import React, { useState, useEffect, useRef } from "react";
import { PROBLEMS } from "@/lib/constants";

/* ==========================================================================
   CONTEXTUAL MICRO-ANIMATIONS (Preserved from Gate 03)
   ========================================================================== */

/** 01: Too many listings (Endless noise / overflow feed) */
function ListingsMicroAnimation({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden group-hover:border-[#78A9B8] group-hover:bg-[#E3EEF1] transition-all duration-300 flex-shrink-0">
      <svg
        className={`w-5 h-5 sm:w-6 sm:h-6 text-[#345B6B] transition-transform duration-300 ${
          isActive ? "scale-105 text-[#2D4C59]" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="5" rx="1.5" className="stroke-[#345B6B]" />
        <rect x="3" y="10" width="18" height="5" rx="1.5" className="stroke-[#467A8F]" />
        <rect x="3" y="17" width="12" height="4" rx="1" className="stroke-[#78A9B8] opacity-70" />
        <circle cx="18" cy="19" r="2" className="stroke-[#467A8F] fill-[#467A8F]" />
      </svg>
      {/* Endless feed pulse */}
      <span
        className={`absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#467A8F] ${
          isActive ? "animate-ping" : "animate-pulse"
        }`}
        style={{ animationDuration: "2.5s" }}
      />
    </div>
  );
}

/** 02: No clear fit (Candidate vs Job disconnect / Mismatched radar) */
function FitDisconnectMicroAnimation({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden group-hover:border-[#78A9B8] group-hover:bg-[#E3EEF1] transition-all duration-300 flex-shrink-0">
      <svg
        className={`w-5 h-5 sm:w-6 sm:h-6 text-[#345B6B] transition-transform duration-300 ${
          isActive ? "scale-105 text-[#2D4C59]" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="12" r="5.5" className="stroke-[#656B70]" strokeDasharray="2.5 2" />
        <circle cx="15" cy="12" r="5.5" className="stroke-[#467A8F]" />
        <path d="M12 9v6" className="stroke-[#78A9B8]" strokeDasharray="1.5 1.5" />
      </svg>
      {/* Disconnect indicator */}
      <div className="absolute bottom-1 right-1.5 text-[10px] font-mono font-bold text-[#467A8F] leading-none select-none">
        ≠
      </div>
    </div>
  );
}

/** 03: Applications everywhere (Fragmented tools & scattered docs) */
function FragmentedToolsMicroAnimation({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden group-hover:border-[#78A9B8] group-hover:bg-[#E3EEF1] transition-all duration-300 flex-shrink-0">
      <svg
        className={`w-5 h-5 sm:w-6 sm:h-6 text-[#345B6B] transition-transform duration-300 ${
          isActive ? "scale-105 text-[#2D4C59]" : ""
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="7" height="8" rx="1.5" className="stroke-[#467A8F]" />
        <rect x="14" y="12" width="7" height="8" rx="1.5" className="stroke-[#345B6B]" />
        <path d="M10 8h3a2 2 0 0 1 2 2v2" className="stroke-[#A3C7D1]" strokeDasharray="2 2" />
        <circle cx="10" cy="8" r="1" fill="#467A8F" />
        <circle cx="15" cy="12" r="1" fill="#345B6B" />
      </svg>
      {/* Multi-tool indicators */}
      <div className="absolute top-1.5 right-1.5 flex gap-0.5">
        <span className="w-1 h-1 rounded-full bg-[#78A9B8]" />
        <span className="w-1 h-1 rounded-full bg-[#345B6B]" />
      </div>
    </div>
  );
}

const MICRO_ANIMATIONS = [
  ListingsMicroAnimation,
  FitDisconnectMicroAnimation,
  FragmentedToolsMicroAnimation,
];

/* Helper to map scroll progress to smooth card progression with stable dwells */
function progressToStep(p: number): number {
  // Dwell zones:
  // 0.00 to 0.10: Card 1 settled
  // 0.10 to 0.45: Card 1 -> Card 2 smooth transition
  // 0.45 to 0.55: Card 2 settled
  // 0.55 to 0.90: Card 2 -> Card 3 smooth transition
  // 0.90 to 1.00: Card 3 settled
  if (p <= 0.10) return 0;
  if (p >= 0.90) return 2;

  if (p < 0.45) {
    const t = (p - 0.10) / 0.35;
    return t * t * (3 - 2 * t);
  } else if (p <= 0.55) {
    return 1;
  } else {
    const t = (p - 0.55) / 0.35;
    return 1 + t * t * (3 - 2 * t);
  }
}

export function Problem() {
  const [progress, setProgress] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [viewportWidth, setViewportWidth] = useState(390);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const runwayRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleMotionChange);
    return () => mediaQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Responsive dimensions for precise card centering
  useEffect(() => {
    const updateDimensions = () => {
      const vw = typeof window !== "undefined" ? window.innerWidth : 390;
      setViewportWidth(vw);
      // Card width: 86% of viewport width, clamped between 290px and 350px
      const cw = Math.min(Math.max(vw * 0.86, 290), 350);
      setCardWidth(cw);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Scroll-driven progress tracking on mobile
  useEffect(() => {
    if (prefersReducedMotion) return;

    let ticking = false;

    const updateScroll = () => {
      if (!runwayRef.current) return;
      const rect = runwayRef.current.getBoundingClientRect();
      const stickyTop = 58; // Sits right below mobile navbar
      const stickyHeight = window.innerHeight - stickyTop;
      const maxScrollDistance = rect.height - stickyHeight;

      if (maxScrollDistance <= 0) {
        ticking = false;
        return;
      }

      // Distance scrolled past when runway top hit stickyTop
      const scrollOffset = stickyTop - rect.top;
      const rawProgress = Math.min(Math.max(scrollOffset / maxScrollDistance, 0), 1);
      setProgress(rawProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [prefersReducedMotion]);

  const stepPosition = progressToStep(progress);
  const activeStep = Math.min(Math.max(Math.round(stepPosition), 0), 2);

  // Math for horizontal card centering:
  // centerOffset places the active card in the exact horizontal center of the viewport
  const cardGap = 16;
  const stepDistance = cardWidth + cardGap;
  const centerOffset = Math.max((viewportWidth - cardWidth) / 2 - 16, 0);
  const translateX = centerOffset - stepPosition * stepDistance;

  // Jump to specific card when tapping indicator pills
  const scrollToCard = (index: number) => {
    if (!runwayRef.current) return;
    const rect = runwayRef.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const stickyTop = 96;
      const stickyHeight =
        stickyRef.current?.offsetHeight ??
        Math.min(window.innerHeight - stickyTop, 560);

      const maxScrollDistance =
        runwayRef.current.offsetHeight - stickyHeight;
    if (maxScrollDistance <= 0) return;

    // Target dwell centers: 0.05 (Card 1), 0.50 (Card 2), 0.95 (Card 3)
    const targetProgress = index === 0 ? 0.05 : index === 1 ? 0.50 : 0.95;
    const targetY = currentScrollY + rect.top - stickyTop + targetProgress * maxScrollDistance;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="problem"
      className="pt-4 pb-6 md:pt-16 md:pb-32 relative overflow-x-clip overflow-y-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ==========================================================================
            DESKTOP SECTION (Preserves approved 3-card grid layout with micro-animations)
            ========================================================================== */}
        <div className="hidden md:block">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="section-eyebrow mb-4">
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

          {/* 3 Problem Cards Grid */}
          <div className="grid grid-cols-3 gap-8 lg:gap-10 mb-20">
            {PROBLEMS.map((problem, idx) => {
              const MicroIcon = MICRO_ANIMATIONS[idx];
              return (
                <div
                  key={problem.number}
                  className="aurora-card-surface relative p-8 rounded-3xl border border-[#E5E7E8] hover:border-[#C7DDE3] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <MicroIcon />
                    <h3 className="text-xl font-bold text-[#171A1C] mb-3 tracking-tight">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#656B70] leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center justify-between text-xs font-medium text-[#656B70] group-hover:text-[#467A8F] transition-colors">
                    <span>Core friction point</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C7DDE3] group-hover:bg-[#467A8F] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            MOBILE SECTION (Pinned horizontal scroll-driven storytelling sequence)
            ========================================================================== */}
        <div className="md:hidden">
          {prefersReducedMotion ? (
            /* Reduced Motion Fallback: Low-motion accessible horizontal swipe */
            <div className="mb-14">
              <div className="mb-6">
                <span className="section-eyebrow mb-3">
                  The Student Dilemma
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171A1C] leading-tight mb-2">
                  Internship searching
                  <br />
                  shouldn&apos;t feel like guesswork.
                </h2>
                <p className="text-xs sm:text-sm text-[#656B70] leading-relaxed">
                  Students spend hours browsing opportunities without knowing which roles actually fit their background.
                </p>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
                {PROBLEMS.map((problem, idx) => {
                  const MicroIcon = MICRO_ANIMATIONS[idx];
                  return (
                    <div
                      key={problem.number}
                      className="aurora-card-surface snap-center w-[86vw] max-w-[340px] flex-shrink-0 p-6 rounded-3xl border border-[#E5E7E8] shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <MicroIcon isActive />
                        <h3 className="text-lg font-bold text-[#171A1C] mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#656B70] leading-relaxed">
                          {problem.description}
                        </p>
                      </div>
                      <div className="mt-5 pt-3.5 border-t border-[#E5E7E8] flex items-center justify-between text-xs font-medium text-[#656B70]">
                        <span>Core friction point</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Controlled Scroll Runway: Concise vertical distance driving pinned cards */
            <div
              ref={runwayRef}
              className="relative -mx-4 px-4"
              style={{ height: "calc(100dvh + 360px)" }}
            >
              {/* Sticky Panel: Stays completely pinned at top-[58px], filling the viewport below navbar */}
              <div ref={stickyRef} className="sticky top-[96px] h-fit overflow-hidden py-2">
                {/* Stable, Unclipped Mobile Section Header */}
                <div className="px-2 mb-2">
                  <span className="section-eyebrow mb-2">
                    The Student Dilemma
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12] mb-1.5">
                    Internship searching
                    <br />
                    shouldn&apos;t feel like guesswork.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#656B70] leading-snug line-clamp-2">
                    Students spend hours browsing opportunities without knowing which roles actually fit their background.
                  </p>

                  {/* Interactive Progress Indicator Pills */}
                  <div className="flex items-center justify-between mt-2 mb-1">
                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => scrollToCard(idx)}
                          aria-label={`Jump to friction point ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeStep === idx
                              ? "w-8 bg-[#467A8F]"
                              : "w-2.5 bg-[#E5E7E8] hover:bg-[#C7DDE3]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Horizontal Card Presentation: Sits close beneath progress pills with generous card proportions */}
                <div className="relative w-full overflow-hidden mt-2 mb-0 py-1">
                  <div
                    className="flex items-stretch will-change-transform"
                    style={{
                      transform: `translateX(${translateX}px)`,
                      transition: "transform 140ms cubic-bezier(0.25, 1, 0.5, 1)",
                    }}
                  >
                    {PROBLEMS.map((problem, idx) => {
                      const MicroIcon = MICRO_ANIMATIONS[idx];
                      const isCurrent = idx === activeStep;
                      return (
                        <div
                          key={problem.number}
                          style={{ width: `${cardWidth}px`, marginRight: `${cardGap}px` }}
                          className={`aurora-card-surface flex-shrink-0 p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[295px] ${
                            isCurrent
                              ? "border-[#467A8F] shadow-lg shadow-[#467A8F]/10 ring-1 ring-[#467A8F]/20 scale-100 opacity-100"
                              : "border-[#E5E7E8] shadow-xs scale-[0.96] opacity-60"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3.5">
                              <MicroIcon isActive={isCurrent} />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-[#171A1C] mb-2 tracking-tight">
                              {problem.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#656B70] leading-relaxed">
                              {problem.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-[#E5E7E8] flex items-center justify-between text-xs font-medium text-[#656B70]">
                            <span className={isCurrent ? "text-[#467A8F] font-semibold" : ""}>
                              Core friction point
                            </span>
                            <span
                              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                isCurrent ? "bg-[#467A8F]" : "bg-[#C7DDE3]"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
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
