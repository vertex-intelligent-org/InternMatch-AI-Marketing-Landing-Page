import Image from "next/image";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { PlayIcon, SparklesIcon } from "@/components/Icons";

const DEMO_STAGES = [
  "CV Analysis",
  "Matching",
  "Application Support",
];

export function Demo() {
  const demoUrl = EXTERNAL_LINKS.DEMO_URL;
  const hasDemo = Boolean(demoUrl);

  return (
    <section
      id="demo"
      className="relative overflow-hidden border-y border-[#E5E7E8] bg-[#F7F7F5] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#467A8F]/8 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ====================================================
            COMPACT HEADING
            ==================================================== */}
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
          <span className="section-eyebrow mb-4">
            <SparklesIcon className="h-3 w-3 text-[#467A8F]" />
            Product Walkthrough
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-[#171A1C] sm:text-4xl md:text-5xl">
            See the real workflow.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#656B70] sm:text-base">
            From your CV to relevant matches and application support.
          </p>
        </div>

        {/* ====================================================
            REAL PRODUCT POSTER
            No video, iframe or external media loaded initially.
            ==================================================== */}
        <div className="relative mx-auto overflow-hidden rounded-[30px] border border-[#20272B] bg-[#171C1F] p-2 shadow-[0_28px_80px_rgba(23,28,31,0.16)] sm:rounded-[38px] sm:p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-[#2D4C59]/50 bg-[#171C1F] sm:aspect-video sm:rounded-[30px]">
            {/* Subtle poster atmosphere */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(70,122,143,0.24),transparent_44%)]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.13] bg-[radial-gradient(#78A9B8_1px,transparent_1px)] [background-size:25px_25px]"
            />

            {/* Animated real-workflow capsule */}
            <div className="absolute left-1/2 top-5 z-30 -translate-x-1/2 sm:top-7">
              <div className="flex whitespace-nowrap items-center gap-2 rounded-full border border-[#466B78] bg-[#20272B]/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
                <Image
                  src="/branding/internmatch-icon.png"
                  alt=""
                  width={18}
                  height={18}
                  aria-hidden="true"
                  className="h-[18px] w-[18px] rounded-[5px]"
                />

                <span className="text-[11px] font-bold tracking-tight text-[#F5F6F4] sm:text-xs">
                  InternMatch AI
                </span>
              </div>
            </div>

            {/* ==================================================
                THREE REAL APP SCREENS
                ================================================== */}
            <div className="absolute inset-x-0 bottom-[-9%] top-[18%] flex items-end justify-center sm:bottom-[-24%] sm:top-[13%]">
              {/* Left */}
              <div className="relative z-10 -mr-7 w-[34%] max-w-[220px] -rotate-[7deg] opacity-80 sm:-mr-10 sm:w-[25%]">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[18px] border-[3px] border-[#2C3438] bg-black shadow-[0_18px_40px_rgba(0,0,0,0.34)] sm:rounded-[26px] sm:border-[5px]">
                  <Image
                    src="/media/product-showcase/cv-analysis.png"
                    alt="InternMatch AI CV analysis screen"
                    fill
                    sizes="(max-width: 640px) 34vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Center */}
              <div className="relative z-20 w-[42%] max-w-[260px] sm:w-[29%]">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[21px] border-[4px] border-[#3A454A] bg-black shadow-[0_26px_60px_rgba(0,0,0,0.48)] sm:rounded-[30px] sm:border-[6px]">
                  <Image
                    src="/media/product-showcase/matchups.png"
                    alt="InternMatch AI personalized matches screen"
                    fill
                    priority={false}
                    sizes="(max-width: 640px) 42vw, 29vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="relative z-10 -ml-7 w-[34%] max-w-[220px] rotate-[7deg] opacity-80 sm:-ml-10 sm:w-[25%]">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[18px] border-[3px] border-[#2C3438] bg-black shadow-[0_18px_40px_rgba(0,0,0,0.34)] sm:rounded-[26px] sm:border-[5px]">
                  <Image
                    src="/media/product-showcase/application-support.png"
                    alt="InternMatch AI application support screen"
                    fill
                    sizes="(max-width: 640px) 34vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Bottom readability gradient */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 z-20 h-[38%] bg-gradient-to-t from-[#171C1F] via-[#171C1F]/75 to-transparent"
            />

            {/* ==================================================
                PLAY / COMING SOON STATE
                ================================================== */}
            <div className="absolute inset-x-0 bottom-6 z-30 flex flex-col items-center px-4 sm:bottom-8">
              {hasDemo && demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-[#78A9B8]/45 bg-[#467A8F] px-5 py-3 text-white shadow-[0_12px_32px_rgba(70,122,143,0.3)] transition-transform duration-200 hover:scale-[1.03]"
                  aria-label="Watch the InternMatch AI product demo"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 pl-0.5">
                    <PlayIcon className="h-4 w-4" />
                  </span>

                  <span className="text-sm font-bold">
                    Watch product demo
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-full border border-[#486570] bg-[#20272B]/95 px-5 py-3 shadow-xl backdrop-blur-md">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#466B78] bg-[#273238] text-[#A3C7D1]">
                    <PlayIcon className="h-4 w-4" />
                  </span>

                  <div className="text-left">
                    <div className="text-xs font-bold text-[#F5F6F4] sm:text-sm">
                      Full demo coming soon
                    </div>

                    <div className="mt-0.5 text-[9px] text-[#89AAB4] sm:text-[10px]">
                      Real product walkthrough
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ====================================================
            MINIMAL FLOW
            ==================================================== */}
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 sm:mt-7">
          {DEMO_STAGES.map((stage, index) => (
            <div
              key={stage}
              className="flex items-center gap-2"
            >
              <span className="rounded-full border border-[#D9E1E3] bg-white px-3 py-1.5 text-[10px] font-semibold text-[#44545B] sm:text-xs">
                {stage}
              </span>

              {index < DEMO_STAGES.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-xs font-bold text-[#9AA8AD]"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}