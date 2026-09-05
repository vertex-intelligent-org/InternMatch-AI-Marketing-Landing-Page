import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Terms of Use | InternMatch AI",
  description:
    "Read the terms governing the use of InternMatch AI and its AI-assisted internship features.",
};

const SECTIONS = [
  {
    id: "purpose",
    title: "1. Purpose of InternMatch",
    body: "InternMatch AI is an assistive internship platform designed to support the internship discovery, profile-based match analysis, application preparation, and tracking for students and early-career candidates.",
  },
  {
    id: "assistive-ai",
    title: "2. Assistive AI & User Review",
    body: "AI-generated recommendations, matchup insights, and draft cover letters are designed to assist you. They do not constitute professional career advice and should always be reviewed and edited by you before submission to employers.",
  },
  {
    id: "no-guarantee",
    title: "3. No Guarantee of Employment",
    body: "InternMatch AI facilitates discovery and preparation but does not guarantee internship placements, interview invitations, or employment offers from listed companies or recruiters.",
  },
  {
    id: "user-responsibilities",
    title: "4. User Responsibilities & Conduct",
    body: "You agree to provide accurate and truthful information in your profile and uploaded CVs. You are responsible for maintaining the confidentiality of your account credentials.",
  },
  {
    id: "third-party",
    title: "5. Third-Party Services",
    body: "InternMatch relies on third-party services for functions such as authentication, storage, and AI-assisted processing. Third-party services may have their own terms and privacy practices. Where external internship or employer links are provided, you are responsible for reviewing those external sites.",
  },
  {
    id: "product-status",
    title: "6. Product Status & Availability",
    body: "InternMatch AI is under active development. Features and service availability may be updated, modified, or refined over time. The service may also experience interruptions during development.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20 sm:pb-24">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors mb-8 group"
        >
          <span className="rotate-180 inline-block transition-transform group-hover:-translate-x-0.5">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
          Back to Homepage
        </Link>

        {/* Legal Page Hero */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171A1C] tracking-tight">
            Terms of Use
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Using InternMatch
          </p>
        </header>

        {/* Small Intro Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            TERMS OF USE
          </span>
          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed font-normal">
            These Terms describe the conditions for using InternMatch AI. Please read them before using the app and its AI-assisted internship features.
          </p>
        </div>

        {/* Sections 1–6 */}
        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            {SECTIONS.map((section) => (
              <section key={section.id} aria-labelledby={`section-${section.id}`}>
                <h2
                  id={`section-${section.id}`}
                  className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
                >
                  {section.title}
                </h2>
                <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Divider */}
          <hr className="my-8 sm:my-10 border-[#E5E7E8]" />

          {/* Last Updated Note */}
          <p className="text-xs font-mono text-[#656B70]">
            Last updated: August 2026 | InternMatch AI
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
