"use client";

import { useEffect, useRef, useState } from "react";
import { BENEFITS } from "@/lib/constants";

type Benefit = (typeof BENEFITS)[number];

/*
 * Six cards still travel across the complete horizontal rail,
 * but the vertical interaction budget is fixed so rail width does
 * not turn into an excessively long mobile page.
 */
const MOBILE_BENEFITS_SCROLL_DISTANCE = 760;

function BenefitCard({
  benefit,
  active,
}: {
  benefit: Benefit;
  active: boolean;
}) {
  return (
    <article
      className={`relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-[28px] border p-6 transition-[background-color,border-color,box-shadow,transform] duration-300 sm:p-7 ${
        active
          ? "border-[#467A8F] bg-[#171C1F] shadow-[0_22px_55px_rgba(23,28,31,0.18)]"
          : "border-[#E1E4E5] bg-white shadow-[0_10px_30px_rgba(23,26,28,0.05)]"
      }`}
    >
      {active && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#467A8F] via-[#78A9B8] to-[#C7DDE3]"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <span
          className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
            active
              ? "border-[#467A8F]/70 bg-[#467A8F]/15 text-[#C7DDE3]"
              : "border-[#C7DDE3] bg-[#F2F7F8] text-[#345B6B]"
          }`}
        >
          {benefit.tag}
        </span>

        <div
          aria-hidden="true"
          className={`flex h-10 w-10 items-end gap-1 rounded-xl border p-2 ${
            active
              ? "border-[#35525D] bg-[#20272B]"
              : "border-[#DDE4E6] bg-[#F7F7F5]"
          }`}
        >
          <span
            className={`h-2 w-1.5 rounded-full ${
              active ? "bg-[#5E8998]" : "bg-[#A3C7D1]"
            }`}
          />
          <span
            className={`h-4 w-1.5 rounded-full ${
              active ? "bg-[#78A9B8]" : "bg-[#78A9B8]"
            }`}
          />
          <span
            className={`h-6 w-1.5 rounded-full ${
              active ? "bg-[#C7DDE3]" : "bg-[#467A8F]"
            }`}
          />
        </div>
      </div>

      <div className="mt-12">
        <h3
          className={`text-2xl font-extrabold tracking-tight ${
            active ? "text-white" : "text-[#171A1C]"
          }`}
        >
          {benefit.title}
        </h3>

        <p
          className={`mt-3 max-w-[30ch] text-sm leading-relaxed ${
            active ? "text-[#A3C7D1]" : "text-[#656B70]"
          }`}
        >
          {benefit.description}
        </p>
      </div>

      <div className="mt-auto pt-8">
        <div
          className={`h-px w-full ${
            active ? "bg-[#314B55]" : "bg-[#E5E7E8]"
          }`}
        />

        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              active ? "bg-[#78A9B8]" : "bg-[#467A8F]"
            }`}
          />

          <span
            className={`text-xs font-semibold ${
              active ? "text-[#D8E7EB]" : "text-[#345B6B]"
            }`}
          >
            Student advantage
          </span>
        </div>
      </div>
    </article>
  );
}

export function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeIndexRef = useRef(0);

  const mobileSectionRef = useRef<HTMLElement | null>(null);
  const mobileViewportRef = useRef<HTMLDivElement | null>(null);
  const mobileRailRef = useRef<HTMLDivElement | null>(null);

  const desktopSectionRef = useRef<HTMLElement | null>(null);
  const desktopViewportRef = useRef<HTMLDivElement | null>(null);
  const desktopRailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = mobileSectionRef.current;
    const viewport = mobileViewportRef.current;
    const rail = mobileRailRef.current;

    if (!section || !viewport || !rail) {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frameId = 0;
    let maxShift = 0;
    let isNearSection = false;

    const applyProgress = () => {
      frameId = 0;

      if (!mobileQuery.matches) {
        return;
      }

      const scrollRange = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      const rect = section.getBoundingClientRect();

      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollRange),
      );

      const translateX = reducedMotionQuery.matches
        ? 0
        : -(progress * maxShift);

      rail.style.transform = `translate3d(${translateX}px, 0, 0)`;

      const nextIndex = reducedMotionQuery.matches
        ? 0
        : Math.min(
            BENEFITS.length - 1,
            Math.round(progress * (BENEFITS.length - 1)),
          );

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const requestUpdate = () => {
      if (!isNearSection || frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(applyProgress);
    };

    const measure = () => {
      if (!mobileQuery.matches) {
        rail.style.transform = "translate3d(0, 0, 0)";
        section.style.height = "";
        return;
      }

      maxShift = Math.max(
        0,
        rail.scrollWidth - viewport.clientWidth,
      );

      const extraScroll =
        reducedMotionQuery.matches
          ? 0
          : MOBILE_BENEFITS_SCROLL_DISTANCE;

      section.style.height =
        `${window.innerHeight + extraScroll}px`;

      window.requestAnimationFrame(applyProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearSection = entry.isIntersecting;

        if (isNearSection) {
          requestUpdate();
        }
      },
      {
        rootMargin: "100% 0px 100% 0px",
      },
    );

    observer.observe(section);

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", measure);
    mobileQuery.addEventListener("change", measure);
    reducedMotionQuery.addEventListener("change", measure);

    measure();

    return () => {
      observer.disconnect();

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      mobileQuery.removeEventListener("change", measure);
      reducedMotionQuery.removeEventListener("change", measure);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      rail.style.transform = "";
      section.style.height = "";
    };
  }, []);

  useEffect(() => {
    const section = desktopSectionRef.current;
    const viewport = desktopViewportRef.current;
    const rail = desktopRailRef.current;

    if (!section || !viewport || !rail) {
      return;
    }

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    let frameId = 0;
    let maxShift = 0;
    let isNearSection = false;

    const applyProgress = () => {
      frameId = 0;

      if (!desktopQuery.matches) {
        return;
      }

      const scrollRange = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / scrollRange),
      );

      const translateX = reducedMotionQuery.matches
        ? 0
        : -(progress * maxShift);

      rail.style.transform = `translate3d(${translateX}px, 0, 0)`;

      const nextIndex = reducedMotionQuery.matches
        ? 0
        : Math.min(
            BENEFITS.length - 1,
            Math.round(progress * (BENEFITS.length - 1)),
          );

      if (nextIndex !== activeIndexRef.current) {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    const requestUpdate = () => {
      if (!isNearSection || frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(applyProgress);
    };

    const measure = () => {
      if (!desktopQuery.matches) {
        rail.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      maxShift = Math.max(0, rail.scrollWidth - viewport.clientWidth);

      const extraScroll = reducedMotionQuery.matches
        ? 0
        : maxShift + 260;

      section.style.height = `${window.innerHeight + extraScroll}px`;

      window.requestAnimationFrame(applyProgress);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isNearSection = entry.isIntersecting;

        if (isNearSection) {
          requestUpdate();
        }
      },
      {
        rootMargin: "100% 0px 100% 0px",
      },
    );

    observer.observe(section);

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", measure);
    desktopQuery.addEventListener("change", measure);
    reducedMotionQuery.addEventListener("change", measure);

    measure();

    return () => {
      observer.disconnect();

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", measure);
      desktopQuery.removeEventListener("change", measure);
      reducedMotionQuery.removeEventListener("change", measure);

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      rail.style.transform = "";
      section.style.height = "";
    };
  }, []);


  return (
    <>
      {/* ======================================================
          MOBILE — VERTICAL SCROLL DRIVES HORIZONTAL RAIL
          ====================================================== */}
      <section
        ref={mobileSectionRef}
        className="relative bg-[#F7F7F5] lg:hidden"
      >
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="w-full">
            <div className="px-4 sm:px-6">
              <div className="mb-8 max-w-xl">
                <span className="section-eyebrow mb-4">
                  Core Advantages
                </span>

                <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#171A1C] sm:text-4xl">
                  Less searching.
                  <br />
                  More relevant opportunities.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#656B70]">
                  A student-first flow for matching, preparation and application progress.
                </p>
              </div>
            </div>

            <div
              ref={mobileViewportRef}
              className="overflow-hidden motion-reduce:overflow-x-auto [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none" }}
            >
              <div
                ref={mobileRailRef}
                className="flex w-max gap-4 px-4 will-change-transform sm:px-6"
              >
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`h-[290px] w-[82vw] max-w-[330px] shrink-0 transition-transform duration-300 ${
                      index === activeIndex
                        ? "scale-100"
                        : "scale-[0.965]"
                    }`}
                  >
                    <BenefitCard
                      benefit={benefit}
                      active={index === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2">
              {BENEFITS.map((benefit, index) => (
                <span
                  key={benefit.title}
                  aria-hidden="true"
                  className={`h-2 rounded-full transition-[width,background-color] duration-200 ${
                    index === activeIndex
                      ? "w-6 bg-[#467A8F]"
                      : "w-2 bg-[#CDD5D8]"
                  }`}
                />
              ))}
            </div>

            <div className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A969B]">
              Scroll to explore
            </div>
          </div>
        </div>
      </section>
      {/* ======================================================
          DESKTOP — VERTICAL SCROLL DRIVES HORIZONTAL RAIL
          ====================================================== */}
      <section
        ref={desktopSectionRef}
        className="relative hidden bg-[#F7F7F5] lg:block"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mb-12 flex items-end justify-between gap-12">
              <div className="max-w-3xl">
                <span className="section-eyebrow mb-4">
                  Core Advantages
                </span>

                <h2 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-[#171A1C]">
                  Less searching.
                  <br />
                  More relevant opportunities.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#656B70]">
                  A student-first flow for matching, preparation and application progress.
                </p>
              </div>

              <div className="mb-1 flex items-center gap-3 text-xs font-semibold text-[#657278]">
                <span className="h-px w-10 bg-[#9DB7C0]" />
                Scroll to explore
              </div>
            </div>

            <div
              ref={desktopViewportRef}
              className="overflow-hidden"
            >
              <div
                ref={desktopRailRef}
                className="flex w-max gap-6 will-change-transform"
              >
                {BENEFITS.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`h-[320px] w-[360px] shrink-0 transition-transform duration-300 xl:w-[390px] ${
                      index === activeIndex
                        ? "scale-[1.02]"
                        : "scale-[0.985]"
                    }`}
                  >
                    <BenefitCard
                      benefit={benefit}
                      active={index === activeIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {BENEFITS.map((benefit, index) => (
                <span
                  key={benefit.title}
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-200 ${
                    index === activeIndex
                      ? "w-8 bg-[#467A8F]"
                      : "w-3 bg-[#CDD5D8]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}