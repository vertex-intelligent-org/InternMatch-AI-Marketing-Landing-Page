import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Data & Account Deletion | InternMatch AI",
  description: "Request deletion of your InternMatch AI candidate profile and uploaded documents.",
};

export default function DataDeletionPage() {
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
          Data Governance
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#171A1C] tracking-tight mb-4">
          Data &amp; Account Deletion
        </h1>
        <p className="text-xs font-mono text-[#656B70] mb-8">
          Status: Launch Readiness · Last updated: March 2026
        </p>

        <div className="p-8 rounded-3xl bg-white border border-[#E5E7E8] shadow-xs space-y-6 text-sm text-[#656B70] leading-relaxed">
          <div className="p-4 rounded-2xl bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] font-medium">
            Final automated self-serve deletion mechanism will be available inside mobile application settings upon public release.
          </div>

          <h2 className="text-lg font-bold text-[#171A1C]">
            How to Request Account and Data Deletion
          </h2>
          <p>
            Candidates retain the right to request complete erasure of personal
            data, uploaded resume files, extracted skill embeddings, and
            application history from InternMatch AI at any time.
          </p>
          <div className="p-4 rounded-2xl bg-[#F7F7F5] border border-[#E5E7E8]">
            <div className="font-semibold text-[#171A1C] mb-1">
              Deletion Procedure:
            </div>
            <p className="text-xs text-[#656B70] mb-2">
              Upon public release, candidates may initiate one-click deletion directly from account settings in the mobile app, or submit a request through official support channels.
            </p>
            <p className="text-xs text-[#656B70]">
              Official verified submission endpoints and email addresses will be published alongside mobile store release.
            </p>
          </div>
          <p className="text-xs text-[#656B70] pt-2">
            Upon receipt and identity confirmation, candidate vectors, parsed skills, CV records, and application logs are permanently erased within 14 business days.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
