import Image from "next/image";
import { BUILDERS, SITE_CONFIG } from "@/lib/constants";
import {
  GitHubIcon,
  LinkedInIcon,
  GlobeIcon,
} from "@/components/Icons";

export function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-y border-[#E5E7E8] bg-[#F7F7F5] py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-[#467A8F]/8 blur-[125px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <span className="section-eyebrow mb-4">
            Founding Team
          </span>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-[#171A1C] sm:text-4xl md:text-5xl">
            Meet the builders.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#656B70] sm:text-base">
            The people behind the architecture, engineering and product
            experience of InternMatch AI.
          </p>

          <div className="mt-5 flex justify-center">
            <span className="rounded-full border border-[#D7E1E4] bg-white px-3.5 py-2 text-[10px] font-semibold text-[#52666E] shadow-sm sm:text-xs">
              {SITE_CONFIG.builders.shortContext}
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:gap-7">
          {BUILDERS.map((builder) => {
            const hasLinks = Boolean(
              builder.links.linkedin ||
                builder.links.github ||
                builder.links.portfolio,
            );

            return (
              <article
                key={builder.name}
                className="group overflow-hidden rounded-[30px] border border-[#D7DEE2] bg-white shadow-[0_16px_45px_rgba(23,26,28,0.07)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#B8CDD4] hover:shadow-[0_22px_55px_rgba(23,26,28,0.1)]"
              >
                <div className="relative aspect-[4/4.6] overflow-hidden bg-[#E9ECEC] sm:aspect-[4/4.25]">
                  <Image
                    src={builder.image}
                    alt={`${builder.name}, ${builder.role} of InternMatch AI`}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#171C1F]/70 via-[#171C1F]/20 to-transparent"
                  />

                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full border border-white/25 bg-[#171C1F]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-md">
                      {builder.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-2xl font-extrabold tracking-tight text-[#171A1C] sm:text-[28px]">
                    {builder.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#467A8F]">
                    Üsküdar University · AISS Club
                  </p>

                  <div className="mt-6">
                    <div className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7A878C]">
                      Engineering Focus
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {builder.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-xl border border-[#DCE3E5] bg-[#F4F6F6] px-3 py-1.5 text-[11px] font-semibold text-[#344249]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hasLinks && (
                    <div className="mt-6 flex items-center gap-2 border-t border-[#E5E7E8] pt-5">
                      {builder.links.linkedin && (
                        <a
                          href={builder.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${builder.name} LinkedIn`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D7DEE2] bg-[#F7F7F5] text-[#344249] transition-colors hover:border-[#B8CDD4] hover:bg-[#EEF4F5] hover:text-[#467A8F]"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </a>
                      )}

                      {builder.links.github && (
                        <a
                          href={builder.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${builder.name} GitHub`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D7DEE2] bg-[#F7F7F5] text-[#344249] transition-colors hover:border-[#B8CDD4] hover:bg-[#EEF4F5] hover:text-[#467A8F]"
                        >
                          <GitHubIcon className="h-4 w-4" />
                        </a>
                      )}

                      {builder.links.portfolio && (
                        <a
                          href={builder.links.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${builder.name} portfolio`}
                          className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D7DEE2] bg-[#F7F7F5] text-[#344249] transition-colors hover:border-[#B8CDD4] hover:bg-[#EEF4F5] hover:text-[#467A8F]"
                        >
                          <GlobeIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}