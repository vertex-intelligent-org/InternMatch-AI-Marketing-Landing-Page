import React from "react";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="section-eyebrow mb-4">
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
