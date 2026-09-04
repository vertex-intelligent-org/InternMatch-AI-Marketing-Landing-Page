import React from "react";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#171A1C] leading-[1.12]">
            Answers to common questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#656B70] leading-relaxed font-normal">
            Everything you need to know about our matching engine, CV handling, and release timeline.
          </p>
        </div>

        {/* Accessible Accordion Component */}
        <Accordion items={FAQS} />
      </div>
    </section>
  );
}
