import {
  CheckIcon,
  GlobeIcon,
  ShieldIcon,
  SparklesIcon,
} from "@/components/Icons";
import {
  SITE_CONFIG,
  TECH_STACK_PILLS,
  VALIDATION_METRICS,
} from "@/lib/constants";

export function Validation() {
  const primaryMetric = VALIDATION_METRICS[0];
  const supportingMetrics = VALIDATION_METRICS.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#171C1F] py-20 sm:py-28">
      {/* ======================================================
          BACKGROUND ATMOSPHERE
          ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13] bg-[radial-gradient(#78A9B8_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#467A8F]/15 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#345B6B]/15 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            HEADING
            ==================================================== */}
        <div className="mb-10 max-w-3xl sm:mb-14">
          <span className="section-eyebrow-dark mb-4 inline-flex items-center gap-1.5 whitespace-nowrap">
            <ShieldIcon className="h-3 w-3 shrink-0" />
            <span>Engineering Rigor</span>
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#F5F6F4] sm:text-4xl md:text-5xl">
            Built to hold up
            <br />
            beyond the demo.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#A3ADB1] sm:text-base">
            Automated validation, structured architecture and a core product
            now moving through launch readiness.
          </p>
        </div>

        {/* ====================================================
            MAIN PROOF GRID
            ==================================================== */}
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:gap-5">
          {/* --------------------------------------------------
              PRIMARY METRIC — 542 TESTS
              -------------------------------------------------- */}
          <article className="relative overflow-hidden rounded-[28px] border border-[#D7DEE2] bg-[#F2F4F5] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.08)] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[#467A8F]/10 blur-[55px]"
            />

            <div className="relative z-10 flex h-full min-h-[330px] flex-col">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C9D8DD] bg-white text-[#467A8F] shadow-sm">
                  <CheckIcon className="h-5 w-5" />
                </div>

                <span className="rounded-full border border-[#C9D8DD] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#467A8F] shadow-sm">
                  Verified metric
                </span>
              </div>

              <div className="mt-auto pt-14">
                <div className="text-[72px] font-extrabold leading-none tracking-[-0.065em] text-[#202A2F] sm:text-[92px]">
                  {primaryMetric.value}
                </div>

                <h3 className="mt-3 text-xl font-bold tracking-tight text-[#202A2F] sm:text-2xl">
                  {primaryMetric.label}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-[#66757B]">
                  {primaryMetric.subtext}
                </p>

                <div className="mt-7 flex items-center gap-2 border-t border-[#D7DEE2] pt-5 text-xs font-semibold text-[#52666E]">
                  <span className="h-2 w-2 rounded-full bg-[#78A9B8]" />
                  614 passing across 39 test files
                </div>
              </div>
            </div>
          </article>

          {/* --------------------------------------------------
              SUPPORTING PROOF
              -------------------------------------------------- */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {supportingMetrics.map((metric, index) => {
              const icons = [
                <ShieldIcon key="quota" className="h-4 w-4" />,
                <SparklesIcon key="telemetry" className="h-4 w-4" />,
                <GlobeIcon key="platform" className="h-4 w-4" />,
              ];

              return (
                <article
                  key={metric.label}
                  className="group flex min-h-[145px] items-center gap-5 rounded-[24px] border border-[#D7DEE2] bg-[#F2F4F5] p-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-[border-color,background-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[#B8CDD4] hover:bg-white hover:shadow-[0_16px_38px_rgba(0,0,0,0.08)] sm:p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#C9D8DD] bg-white text-[#467A8F] shadow-sm">
                    {icons[index]}
                  </div>

                  <div className="min-w-0">
                    <div className="text-xl font-extrabold tracking-tight text-[#202A2F] sm:text-2xl">
                      {metric.value}
                    </div>

                    <div className="mt-1 text-sm font-bold text-[#344249]">
                      {metric.label}
                    </div>

                    <p className="mt-1 text-xs leading-relaxed text-[#66757B]">
                      {metric.subtext}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ====================================================
            LAUNCH READINESS STRIP
            ==================================================== */}
        <div className="mt-5 overflow-hidden rounded-[26px] border border-[#35525D] bg-[#F2F4F5]">
          <div className="grid lg:grid-cols-[0.9fr_1.6fr]">
            <div className="border-b border-[#D8E0E3] p-6 lg:border-b-0 lg:border-r sm:p-7">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#467A8F]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#467A8F] opacity-30 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#467A8F]" />
                </span>
                Current Platform Status
              </div>

              <div className="mt-3 max-w-md text-base font-bold leading-snug text-[#202A2F] sm:text-lg">
                {SITE_CONFIG.status}
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#68777D]">
                Core technology
              </div>

              <div className="flex flex-wrap gap-2">
                {TECH_STACK_PILLS.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-[#D7DEE2] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#344249] shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================
            BOTTOM PRINCIPLE
            ==================================================== */}
        <div className="mt-7 flex w-full justify-center px-4">
  <p className="m-0 max-w-[26rem] text-center text-xs font-medium leading-relaxed text-[#9AABB1]">
    <ShieldIcon className="mr-1.5 inline-block h-3.5 w-3.5 align-[-2px] text-[#78A9B8]" />
    <span>
      Validation is part of the product workflow — not something added only for the demo.
    </span>
  </p>
</div>
      </div>
    </section>
  );
}