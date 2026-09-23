"use client";

import React, { useEffect, useRef, useState } from "react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { ArrowRightIcon } from "@/components/Icons";

/* ==========================================================================
   WORKFLOW MICRO-VISUALS
   ========================================================================== */

function UploadVisual({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`workflow-visual ${isActive ? "workflow-visual-active" : ""}`}>
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
        <rect x="13" y="8" width="22" height="30" rx="5" stroke="#467A8F" strokeWidth="1.6" />
        <path d="M18 16h12M18 21h9" stroke="#78A9B8" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M24 32V23m0 0-4 4m4-4 4 4"
          stroke="#2D4C59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={isActive ? "workflow-upload-arrow" : ""}
        />
      </svg>
    </div>
  );
}

function ProfileVisual({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`workflow-visual ${isActive ? "workflow-visual-active" : ""}`}>
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
        <circle cx="15" cy="15" r="4" stroke="#467A8F" strokeWidth="1.5" />
        <circle cx="33" cy="15" r="4" stroke="#78A9B8" strokeWidth="1.5" />
        <circle cx="24" cy="33" r="4" stroke="#345B6B" strokeWidth="1.5" />
        <path d="M18.5 17.5 22 29M29.5 17.5 26 29M19 15h10" stroke="#A3C7D1" strokeWidth="1.2" />
        <circle
          cx="24"
          cy="24"
          r="2.5"
          fill="#467A8F"
          className={isActive ? "workflow-profile-node" : ""}
        />
      </svg>
    </div>
  );
}

function MatchVisual({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`workflow-visual ${isActive ? "workflow-visual-active" : ""}`}>
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
        <circle cx="33" cy="16" r="7" stroke="#467A8F" strokeWidth="1.5" />
        <circle cx="33" cy="16" r="2.5" fill="#467A8F" />
        <circle cx="10" cy="12" r="2" fill="#345B6B" />
        <circle cx="11" cy="25" r="2" fill="#78A9B8" />
        <circle cx="15" cy="37" r="2" fill="#467A8F" />
        <path d="M12 13.5 27 16M13 25 28 18M17 35 29 21" stroke="#A3C7D1" strokeWidth="1.2" />
        <circle
          cx="23"
          cy="19"
          r="1.8"
          fill="#62C8D9"
          className={isActive ? "workflow-match-pulse" : ""}
        />
      </svg>
    </div>
  );
}

function ExplainVisual({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`workflow-visual ${isActive ? "workflow-visual-active" : ""}`}>
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="10" stroke="#467A8F" strokeWidth="1.5" />
        <path d="m27.5 27.5 8 8" stroke="#2D4C59" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M15 17h10M15 21h7M15 25h5" stroke="#78A9B8" strokeWidth="1.4" strokeLinecap="round" />
        <circle
          cx="25"
          cy="17"
          r="2"
          fill="#467A8F"
          className={isActive ? "workflow-explain-pulse" : ""}
        />
      </svg>
    </div>
  );
}

function PipelineVisual({ isActive = false }: { isActive?: boolean }) {
  return (
    <div className={`workflow-visual ${isActive ? "workflow-visual-active" : ""}`}>
      <svg viewBox="0 0 48 48" className="w-7 h-7" fill="none" aria-hidden="true">
        <path d="M9 24h30" stroke="#C7DDE3" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="24" r="4" fill="#78A9B8" />
        <circle cx="24" cy="24" r="4" fill="#467A8F" />
        <circle cx="38" cy="24" r="4" stroke="#345B6B" strokeWidth="1.6" fill="white" />
        <circle
          cx="24"
          cy="24"
          r="2"
          fill="#F7F7F5"
          className={isActive ? "workflow-pipeline-pulse" : ""}
        />
      </svg>
    </div>
  );
}

const WORKFLOW_VISUALS = [
  UploadVisual,
  ProfileVisual,
  MatchVisual,
  ExplainVisual,
  PipelineVisual,
];

const WORKFLOW_FOOTERS = [
  "CV intake",
  "Profile structured",
  "Match calculated",
  "Fit explained",
  "Pipeline ready",
];

/*
  Five-stage horizontal progression.
  0 -> 1 -> 2 -> 3 -> 4
*/
function progressToWorkflowStep(progress: number) {
  if (progress <= 0) return 0;
  if (progress >= 1) return 4;

  const scaled = progress * 4;
  const whole = Math.floor(scaled);
  const local = scaled - whole;

  const eased = local * local * (3 - 2 * local);

  return Math.min(whole + eased, 4);
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [viewportWidth, setViewportWidth] = useState(390);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const runwayRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeStepRef = useRef(0);
  const inRangeRef = useRef(false);

  const cardGap = 16;

  /*
   * Mobile scroll budget is intentionally decoupled from viewport
   * height. Five workflow stages need enough room to scrub smoothly,
   * but should not create a long pinned/dead zone.
   */
  const mobileStickyTop = 96;
  const mobileScrollDistance = 620;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setPrefersReducedMotion(mq.matches);

    update();
    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      const vw = window.innerWidth;

      setViewportWidth(vw);

      const width = Math.min(
        Math.max(vw * 0.84, 276),
        348
      );

      setCardWidth(width);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /*
   * Keep the mobile runway equal to the real sticky content height
   * plus a fixed interaction budget.
   *
   * This avoids the old viewport-dependent ~900px pinned distance.
   */
  useEffect(() => {
    if (
      prefersReducedMotion ||
      viewportWidth >= 768
    ) {
      return;
    }

    const runway =
      runwayRef.current;

    const sticky =
      stickyRef.current;

    if (!runway || !sticky) {
      return;
    }

    let rafId: number | null = null;

    const syncRunwayHeight = () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(
          rafId
        );
      }

      rafId =
        window.requestAnimationFrame(
          () => {
            rafId = null;

            runway.style.height =
              `${
                sticky.offsetHeight +
                mobileScrollDistance
              }px`;
          }
        );
    };

    const resizeObserver =
      new ResizeObserver(
        syncRunwayHeight
      );

    resizeObserver.observe(
      sticky
    );

    syncRunwayHeight();

    return () => {
      resizeObserver.disconnect();

      if (rafId !== null) {
        window.cancelAnimationFrame(
          rafId
        );
      }
    };
  }, [
    prefersReducedMotion,
    viewportWidth,
    mobileScrollDistance,
  ]);

  // High-performance mobile workflow tracking:
  // scroll updates GPU transform directly; React only changes active card state.
  useEffect(() => {
    if (prefersReducedMotion || viewportWidth >= 768) return;

    let rafId: number | null = null;

    const updateProgress = () => {
      rafId = null;

      if (!runwayRef.current || !trackRef.current) return;

      const rect =
        runwayRef.current.getBoundingClientRect();

      const stickyTop =
        mobileStickyTop;

      const stickyHeight =
        stickyRef.current?.offsetHeight ??
        Math.min(window.innerHeight - stickyTop, 560);

      const maxScrollDistance =
        runwayRef.current.offsetHeight - stickyHeight;

      if (maxScrollDistance <= 0) return;

      const scrollOffset = stickyTop - rect.top;

      const rawProgress = Math.min(
        Math.max(scrollOffset / maxScrollDistance, 0),
        1
      );

      const stepPosition =
        progressToWorkflowStep(rawProgress);

      const stepDistance = cardWidth + cardGap;

      const centerOffset = Math.max(
        (viewportWidth - cardWidth) / 2 - 16,
        0
      );

      const nextTranslateX =
        centerOffset - stepPosition * stepDistance;

      trackRef.current.style.transform =
        `translate3d(${nextTranslateX}px, 0, 0)`;

      const nextActiveStep = Math.min(
        Math.max(Math.round(stepPosition), 0),
        4
      );

      if (activeStepRef.current !== nextActiveStep) {
        activeStepRef.current = nextActiveStep;
        setActiveStep(nextActiveStep);
      }
    };

    const requestScrollUpdate = () => {
      if (!inRangeRef.current || rafId !== null) return;

      rafId =
        window.requestAnimationFrame(updateProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inRangeRef.current =
          entry?.isIntersecting ?? false;

        if (inRangeRef.current) {
          if (rafId !== null) {
            window.cancelAnimationFrame(rafId);
          }

          rafId =
            window.requestAnimationFrame(updateProgress);
        }
      },
      {
        rootMargin: "100% 0px 100% 0px",
      }
    );

    if (runwayRef.current) {
      observer.observe(runwayRef.current);
    }

    window.addEventListener(
      "scroll",
      requestScrollUpdate,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      requestScrollUpdate,
      { passive: true }
    );

    rafId =
      window.requestAnimationFrame(updateProgress);

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        requestScrollUpdate
      );

      window.removeEventListener(
        "resize",
        requestScrollUpdate
      );

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [
    prefersReducedMotion,
    cardWidth,
    viewportWidth,
  ]);

  return (
    <section
      id="how-it-works"
      className="pt-0 pb-6 md:py-32 bg-[#F2F7F8]/40 border-y border-[#E5E7E8] relative overflow-x-clip"
    >
      <style>{`
        .workflow-visual {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(242, 247, 248, 0.9);
          border: 1px solid #C7DDE3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition:
            border-color .3s ease,
            transform .3s ease,
            background .3s ease;
        }

        .workflow-visual-active {
          border-color: #78A9B8;
          background: #EAF3F5;
          transform: translateY(-2px);
        }

        .group:hover .workflow-visual {
          border-color: #78A9B8;
          background: #EAF3F5;
          transform: translateY(-2px);
        }

        @keyframes workflowUpload {
          0%, 25% {
            transform: translateY(2px);
            opacity: .45;
          }
          55%, 80% {
            transform: translateY(-2px);
            opacity: 1;
          }
          100% {
            transform: translateY(2px);
            opacity: .45;
          }
        }

        @keyframes workflowNode {
          0%, 100% {
            transform: scale(.72);
            opacity: .45;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @keyframes workflowMatch {
          0% {
            transform: translate(-5px, 3px);
            opacity: .2;
          }
          55% {
            transform: translate(5px, -2px);
            opacity: 1;
          }
          100% {
            transform: translate(8px, -3px);
            opacity: 0;
          }
        }

        @keyframes workflowExplain {
          0%, 100% {
            opacity: .35;
            transform: scale(.75);
          }
          50% {
            opacity: 1;
            transform: scale(1.25);
          }
        }

        @keyframes workflowPipeline {
          0% {
            transform: translateX(-12px);
            opacity: .2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(12px);
            opacity: .2;
          }
        }

        .workflow-upload-arrow {
          transform-origin: center;
          animation: workflowUpload 2.4s ease-in-out infinite;
        }

        .workflow-profile-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: workflowNode 2.6s ease-in-out infinite;
        }

        .workflow-match-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: workflowMatch 2.8s ease-in-out infinite;
        }

        .workflow-explain-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: workflowExplain 2.5s ease-in-out infinite;
        }

        .workflow-pipeline-pulse {
          transform-box: fill-box;
          transform-origin: center;
          animation: workflowPipeline 2.7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .workflow-upload-arrow,
          .workflow-profile-node,
          .workflow-match-pulse,
          .workflow-explain-pulse,
          .workflow-pipeline-pulse {
            animation: none !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================================================================
            DESKTOP / TABLET
            ================================================================ */}
        <div className="hidden md:block">

          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="section-eyebrow mb-4">
              System Workflow
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
              One CV.
              <br />
              A smarter internship journey.
            </h2>

            <p className="mt-5 text-lg text-[#656B70] leading-relaxed font-normal">
              A continuous transformation from raw document into actionable career intelligence.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C7DDE3]/50 via-[#467A8F]/40 to-[#C7DDE3]/50 -translate-y-12 z-0 pointer-events-none" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {HOW_IT_WORKS_STEPS.map((step, idx) => {
                const WorkflowVisual = WORKFLOW_VISUALS[idx];

                return (
                  <div
                    key={step.step}
                    className="aurora-card-surface relative rounded-3xl p-6 border border-[#E5E7E8] shadow-xs hover:shadow-md hover:border-[#C7DDE3] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <WorkflowVisual />

                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#171A1C] mb-1 group-hover:text-[#467A8F] transition-colors">
                        {step.title}
                      </h3>

                      <div className="text-[11px] font-mono text-[#467A8F] font-semibold mb-3">
                        {step.format}
                      </div>

                      <p className="text-sm text-[#656B70] leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5E7E8] flex items-center justify-between">
                      <span className="text-[11px] font-medium text-[#656B70] group-hover:text-[#467A8F] transition-colors">
                        {WORKFLOW_FOOTERS[idx]}
                      </span>

                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === HOW_IT_WORKS_STEPS.length - 1
                            ? "bg-[#467A8F]"
                            : "bg-[#C7DDE3] group-hover:bg-[#467A8F]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-14 p-5 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm text-[#656B70] text-center">
            <span className="font-semibold text-[#171A1C]">CV Intake</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#171A1C]">Structured Profile</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#171A1C]">Matching Engine</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#171A1C]">Why You Match</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-semibold text-[#345B6B]">Application Support</span>
          </div>
        </div>

        {/* ================================================================
            MOBILE
            ================================================================ */}
        <div className="md:hidden">
          {prefersReducedMotion ? (
            <div>
              <div className="mb-8">
                <span className="section-eyebrow mb-3">
                  System Workflow
                </span>

                <h2 className="font-extrabold tracking-tight text-[#171A1C] leading-[1.08] text-[clamp(19px,5.4vw,23px)]">
                  <span className="block whitespace-nowrap">
                    One CV. A smarter internship
                  </span>
                  <span className="block whitespace-nowrap">
                    journey.
                  </span>
                </h2>

                <p className="mt-4 text-sm text-[#656B70] leading-relaxed">
                  A continuous transformation from raw document into actionable career intelligence.
                </p>
              </div>

              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4">
                {HOW_IT_WORKS_STEPS.map((step, idx) => {
                  const WorkflowVisual = WORKFLOW_VISUALS[idx];

                  return (
                    <div
                      key={step.step}
                      className="aurora-card-surface snap-center w-[84vw] max-w-[348px] flex-shrink-0 p-5 rounded-3xl border border-[#E5E7E8] shadow-xs"
                    >
                      <div className="flex items-center justify-between mb-5">
                        <WorkflowVisual isActive />

                        <span className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#F2F7F8] text-[#345B6B] border border-[#C7DDE3]">
                          {step.badge}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[#171A1C] mb-1">
                        {step.title}
                      </h3>

                      <div className="text-[10px] font-mono text-[#467A8F] font-semibold mb-3">
                        {step.format}
                      </div>

                      <p className="text-xs text-[#656B70] leading-relaxed">
                        {step.description}
                      </p>

                      <div className="mt-5 pt-3.5 border-t border-[#E5E7E8] flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#467A8F]">
                          {WORKFLOW_FOOTERS[idx]}
                        </span>

                        <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              ref={runwayRef}
              className="relative -mx-4 px-4"
              style={{ height: "calc(100dvh + 220px)" }}
            >
              <div ref={stickyRef} className="sticky top-[96px] h-fit overflow-hidden py-2">

                {/* Entire visible workflow block stays centered while pinned */}
                <div>

                  <div className="px-1 mb-5">
                    <span className="section-eyebrow mb-3">
                      System Workflow
                    </span>

                    <h2 className="font-extrabold tracking-tight text-[#171A1C] leading-[1.08] text-[clamp(19px,5.4vw,23px)]">
                  <span className="block whitespace-nowrap">
                    One CV. A smarter internship
                  </span>
                  <span className="block whitespace-nowrap">
                    journey.
                  </span>
                </h2>

                    <p className="mt-4 text-xs text-[#656B70] leading-relaxed max-w-[340px]">
                      A continuous transformation from raw document into actionable career intelligence.
                    </p>

                    {/* Five-stage progress, no numeric labels */}
                    <div className="flex items-center gap-1.5 mt-4">
                      {HOW_IT_WORKS_STEPS.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            activeStep === idx
                              ? "w-8 bg-[#467A8F]"
                              : "w-2.5 bg-[#DCE7EA]"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Horizontal workflow track */}
                  <div className="relative w-full overflow-hidden py-1">
                    <div
                      ref={trackRef}
                      className="flex items-stretch will-change-transform"
                    >
                      {HOW_IT_WORKS_STEPS.map((step, idx) => {
                        const WorkflowVisual = WORKFLOW_VISUALS[idx];
                        const isCurrent = activeStep === idx;

                        return (
                          <div
                            key={step.step}
                            style={{
                              width: `${cardWidth}px`,
                              marginRight: `${cardGap}px`,
                            }}
                            className={`aurora-card-surface flex-shrink-0 p-5 rounded-3xl border flex flex-col justify-between min-h-[285px] transition-all duration-300 ${
                              isCurrent
                                ? "border-[#467A8F] shadow-lg shadow-[#467A8F]/10 ring-1 ring-[#467A8F]/15 opacity-100 scale-100"
                                : "border-[#E5E7E8] shadow-xs opacity-45 scale-[0.965]"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-5">
                                <WorkflowVisual isActive={isCurrent} />

                                <span
                                  className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full border transition-colors ${
                                    isCurrent
                                      ? "bg-[#F2F7F8] text-[#345B6B] border-[#C7DDE3]"
                                      : "bg-[#F7F7F5] text-[#8A9296] border-[#E5E7E8]"
                                  }`}
                                >
                                  {step.badge}
                                </span>
                              </div>

                              <h3 className="text-lg font-bold text-[#171A1C] mb-1">
                                {step.title}
                              </h3>

                              <div className="text-[10px] font-mono text-[#467A8F] font-semibold mb-3">
                                {step.format}
                              </div>

                              <p className="text-xs text-[#656B70] leading-relaxed">
                                {step.description}
                              </p>
                            </div>

                            <div className="mt-5 pt-3.5 border-t border-[#E5E7E8] flex items-center justify-between">
                              <span
                                className={`text-[11px] font-medium ${
                                  isCurrent
                                    ? "text-[#467A8F]"
                                    : "text-[#7A8185]"
                                }`}
                              >
                                {WORKFLOW_FOOTERS[idx]}
                              </span>

                              <span
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  isCurrent
                                    ? "bg-[#467A8F]"
                                    : "bg-[#C7DDE3]"
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}