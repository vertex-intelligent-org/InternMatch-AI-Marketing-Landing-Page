import React from "react";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "@/components/Icons";
import { EXTERNAL_LINKS } from "@/lib/constants";

export function Employer() {
  const hasContactEmail = Boolean(EXTERNAL_LINKS.CONTACT_EMAIL);

  return (
    <section id="for-employers" className="py-20 sm:py-24 bg-[#F2F7F8]/40 border-y border-[#E5E7E8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-left">
            <span className="text-xs font-bold tracking-widest text-[#656B70] uppercase block mb-3">
              For Employers &amp; Research Labs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171A1C] tracking-tight leading-snug mb-4">
              Built for students.
              <br />
              Designed to grow with employers.
            </h2>
            <p className="text-sm sm:text-base text-[#656B70] leading-relaxed font-normal">
              InternMatch AI&apos;s initial launch focuses on the student experience.
              The platform architecture also supports employer-created
              opportunities, applicant review and interview workflows.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            {hasContactEmail ? (
              <Button
                href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}?subject=Employer%20Partnership%20Inquiry`}
                variant="secondary"
                size="lg"
                icon={<ArrowRightIcon className="w-4 h-4" />}
                className="w-full md:w-auto"
              >
                Interested in partnering with InternMatch?
              </Button>
            ) : (
              <span className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#F7F7F5] text-[#656B70] text-sm font-medium border border-[#E5E7E8] cursor-default select-none w-full md:w-auto">
                Partnership contact coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
