import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Terms of Service | InternMatch AI",
  description: "InternMatch AI Terms of Service for university students and participating labs.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5]">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#345B6B] hover:text-[#2D4C59] mb-8"
        >
          <span className="rotate-180 inline-block">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
          Back to Homepage
        </Link>

        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-4">
          Legal Notice
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-xs font-mono text-[#656B70] mb-8">
          Status: Launch Readiness · Last updated: March 2026
        </p>

        <div className="p-8 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs space-y-6 text-sm text-[#656B70] leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] font-medium">
            Final policy content is being prepared ahead of public launch.
          </div>

          <h2 className="text-lg font-bold text-[#171A1C]">
            Terms of Use &amp; Early Release
          </h2>
          <p>
            InternMatch AI is an independent student-built platform currently
            entering its launch readiness phase. Candidates and student partners
            use the service for genuine internship discovery, matching evaluation,
            and career preparation.
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#171A1C]">
            <li>Platform features and matching algorithms are subject to ongoing improvements.</li>
            <li>Users retain complete ownership of their resumes and self-authored application material.</li>
            <li>No automated scraping, misuse, or unauthorized distribution of matched internship data is permitted.</li>
          </ul>
          <p className="text-xs text-[#656B70] pt-4 border-t border-[#E5E7E8]">
            Official inquiries and contact channels will be published prior to public launch.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
