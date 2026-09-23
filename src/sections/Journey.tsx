"use client";

import { useEffect, useRef } from "react";
import { CheckIcon } from "@/components/Icons";
import { JOURNEY_MILESTONES } from "@/lib/constants";
import { STORE_RELEASE } from "@/lib/store";

export function Journey() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef<HTMLDivElement | null>(null);

  const currentMilestone = JOURNEY_MILESTONES.find(
    (item) => item.status === "current",
  );

  useEffect(() => {
    const section = sectionRef.current;
    const rail = railRef.current;
    const current = currentRef.current;

    if (!section || !rail || !current) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let frameId = 0;
    let delayId = 0;
    let hasStarted = false;
    let cancelled = false;

    const cancelAutoJourney = () => {
      cancelled = true;

      if (delayId) {
        window.clearTimeout(delayId);
      }

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };

    const runAutoJourney = () => {
      if (hasStarted) {
        return;
      }

      hasStarted = true;

      const targetLeft = Math.max(
        0,
        current.offsetLeft -
          (rail.clientWidth - current.offsetWidth) / 2,
      );

      if (reducedMotion) {
        rail.scrollLeft = targetLeft;
        return;
      }

      /*
       * Always begin from the first milestone so the visitor
       * actually sees the roadmap travel to the current phase.
       */
      rail.scrollLeft = 0;
      cancelled = false;

      delayId = window.setTimeout(() => {
        if (cancelled) {
          return;
        }

        const startLeft = rail.scrollLeft;
        const distance = targetLeft - startLeft;
        const duration = 780;
        let startedAt = 0;

        const animate = (timestamp: number) => {
          if (cancelled) {
            return;
          }

          if (!startedAt) {
            startedAt = timestamp;
          }

          const progress = Math.min(
            1,
            (timestamp - startedAt) / duration,
          );

          /*
           * Ease-out cubic:
           * fast travel first, then settles cleanly
           * onto the current milestone.
           */
          const eased = 1 - Math.pow(1 - progress, 3);

          rail.scrollLeft =
            startLeft + distance * eased;

          if (progress < 1) {
            frameId = window.requestAnimationFrame(animate);
          }
        };

        frameId = window.requestAnimationFrame(animate);
      }, 120);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        runAutoJourney();
        observer.disconnect();
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    /*
     * Manual interaction always wins.
     * Once the user touches/drags/scrolls the rail,
     * the automatic journey stops immediately.
     */
    rail.addEventListener("pointerdown", cancelAutoJourney, {
      passive: true,
    });

    rail.addEventListener("touchstart", cancelAutoJourney, {
      passive: true,
    });

    rail.addEventListener("wheel", cancelAutoJourney, {
      passive: true,
    });

    return () => {
      observer.disconnect();

      rail.removeEventListener(
        "pointerdown",
        cancelAutoJourney,
      );

      rail.removeEventListener(
        "touchstart",
        cancelAutoJourney,
      );

      rail.removeEventListener(
        "wheel",
        cancelAutoJourney,
      );

      if (delayId) {
        window.clearTimeout(delayId);
      }

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-[#E5E7E8] bg-[#F7F7F5] py-20 sm:py-28"
    >
      {/* ======================================================
          SUBTLE BACKGROUND
          ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-[#467A8F]/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            HEADING
            ==================================================== */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow mb-4">
              Roadmap &amp; Milestones
            </span>

            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#171A1C] sm:text-4xl md:text-5xl">
              From Shipaton
              <br />
              to a real product.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#656B70] sm:text-base">
              {STORE_RELEASE.journeyIntro}
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-full border border-[#BDD0D6] bg-white px-3 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#467A8F] opacity-30 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#467A8F]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#467A8F]">
              Current · {currentMilestone?.stage ?? "Store Release"}
            </span>
          </div>
        </div>

        {/* ====================================================
            HORIZONTAL ROADMAP
            ==================================================== */}
        <div className="relative">
          {/* background timeline */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[28px] hidden h-px bg-[#D7DEE2] sm:block"
          />

          <div
            ref={railRef}
            className="flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain pb-5 pr-[12vw] touch-pan-x sm:gap-5 sm:pr-24 [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {JOURNEY_MILESTONES.map((item) => {
              const isCurrent = item.status === "current";
              const isCompleted = item.status === "completed";
              const isUpcoming = item.status === "upcoming";

              return (
                <div
                  key={item.stage}
                  ref={isCurrent ? currentRef : undefined}
                  className="relative w-[78vw] max-w-[300px] shrink-0 snap-center pt-0 sm:w-[285px] sm:pt-12"
                >
                  {/* ==========================================
                      DESKTOP TIMELINE NODE
                      ========================================== */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-6 top-[21px] z-10 hidden h-4 w-4 rounded-full border-[3px] sm:block ${
                      isCurrent
                        ? "border-[#467A8F] bg-[#F7F7F5] shadow-[0_0_0_5px_rgba(70,122,143,0.12)]"
                        : isCompleted
                          ? "border-[#78A9B8] bg-[#78A9B8]"
                          : "border-[#CBD5D8] bg-[#F7F7F5]"
                    }`}
                  />

                  <article
                    className={`flex min-h-[260px] flex-col rounded-[26px] border p-5 transition-[border-color,box-shadow,transform,background-color] duration-200 sm:min-h-[280px] sm:p-6 ${
                      isCurrent
                        ? "border-[#467A8F] bg-[#171C1F] shadow-[0_20px_48px_rgba(23,28,31,0.16)] sm:-translate-y-1"
                        : isCompleted
                          ? "border-[#D7DEE2] bg-white shadow-[0_10px_28px_rgba(23,26,28,0.05)]"
                          : "border-dashed border-[#D4DADD] bg-[#F2F4F5]"
                    }`}
                  >
                    {/* status */}
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                          isCurrent
                            ? "text-[#A3C7D1]"
                            : isCompleted
                              ? "text-[#5D777F]"
                              : "text-[#8B969A]"
                        }`}
                      >
                        {isCurrent
                          ? "Current phase"
                          : isCompleted
                            ? "Completed"
                            : "Next"}
                      </span>

                      {isCompleted && (
                        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C7DDE3] bg-[#F2F7F8] text-[#467A8F]">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                      )}

                      {isCurrent && (
                        <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-[#466B78] bg-[#243137]">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#78A9B8]" />
                          <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-[#78A9B8] opacity-35 motion-reduce:hidden" />
                        </span>
                      )}

                      {isUpcoming && (
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-[#AAB5B9]" />
                      )}
                    </div>

                    {/* content */}
                    <div className="mt-12">
                      <h3
                        className={`text-xl font-extrabold tracking-tight ${
                          isCurrent
                            ? "text-white"
                            : isCompleted
                              ? "text-[#171A1C]"
                              : "text-[#586367]"
                        }`}
                      >
                        {item.stage}
                      </h3>

                      <p
                        className={`mt-3 text-sm leading-relaxed ${
                          isCurrent
                            ? "text-[#A3ADB1]"
                            : "text-[#687278]"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* bottom progress cue */}
                    <div className="mt-auto pt-8">
                      <div
                        className={`h-px w-full ${
                          isCurrent
                            ? "bg-[#314B55]"
                            : "bg-[#DDE2E4]"
                        }`}
                      />

                      <div
                        className={`mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          isCurrent
                            ? "text-[#C7DDE3]"
                            : isCompleted
                              ? "text-[#6F7B80]"
                              : "text-[#939DA1]"
                        }`}
                      >
                        {item.cue}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}