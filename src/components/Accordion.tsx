"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  const contentId = `faq-content-${id}`;
  const headerId = `faq-header-${id}`;

  return (
    <div className="border-b border-[#E5E7E8] last:border-none transition-colors">
      <button
        id={headerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onToggle}
        className="w-full py-5 sm:py-6 flex justify-between items-center text-left gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] rounded-lg"
      >
        <span className="text-base sm:text-lg font-semibold text-[#171A1C] group-hover:text-[#345B6B] transition-colors leading-snug">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-[#E5E7E8] flex items-center justify-center text-[#656B70] group-hover:border-[#C7DDE3] group-hover:text-[#345B6B] transition-all duration-200 ${
            isOpen ? "rotate-180 bg-[#F2F7F8] border-[#C7DDE3] text-[#345B6B]" : "bg-white"
          }`}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-6"
            : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm sm:text-base text-[#656B70] leading-relaxed font-normal">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="divide-y divide-[#E5E7E8] bg-white rounded-3xl border border-[#E5E7E8] px-6 sm:px-8 py-2 shadow-xs">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          id={`faq-${idx}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onToggle={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
}
