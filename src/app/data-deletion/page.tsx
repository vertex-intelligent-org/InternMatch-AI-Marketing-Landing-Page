import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Request Account Deletion | InternMatch AI",
  description:
    "If you would like to delete your InternMatch AI account and associated user data, you can request deletion by email.",
};

export default function DataDeletionPage() {
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
            Request Account Deletion
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Data &amp; Account Deletion
          </p>
        </header>

        {/* Small Intro Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            ACCOUNT DELETION
          </span>
          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed font-normal">
            If you would like to delete your InternMatch AI account and associated user data, you can request deletion by email.
          </p>
        </div>

        {/* Sections */}
        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            {/* Section 1: How to request deletion */}
            <section aria-labelledby="section-how-to-request">
              <h2
                id="section-how-to-request"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                How to request deletion
              </h2>
              <div className="text-sm sm:text-base text-[#4B5257] leading-relaxed space-y-4">
                <p>
                  Send an email from the email address associated with your InternMatch AI account to:
                </p>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] font-mono font-semibold text-sm sm:text-base select-all">
                  internmatch@vertexintelligent.com
                </div>
                <p>Use the subject:</p>
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] text-[#171A1C] font-mono text-xs sm:text-sm select-all">
                  InternMatch AI — Account Deletion Request
                </div>
                <p>Include the following information:</p>
                <ul className="list-disc list-inside space-y-1.5 text-[#4B5257] pl-1">
                  <li>Your full name</li>
                  <li>The email address associated with your InternMatch AI account</li>
                  <li>A clear statement that you want your InternMatch AI account deleted</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Verification */}
            <section aria-labelledby="section-verification">
              <h2
                id="section-verification"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                Verification
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                We may contact you to verify ownership of the account before processing the deletion request.
              </p>
            </section>

            {/* Section 3: What happens after verification */}
            <section aria-labelledby="section-after-verification">
              <h2
                id="section-after-verification"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                What happens after verification
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                After account ownership is verified, we will delete the account and associated user data, except for information that must be retained where required for legitimate security, fraud-prevention, or legal purposes.
              </p>
            </section>

            {/* Section 4: Important */}
            <section aria-labelledby="section-important">
              <h2
                id="section-important"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                Important
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                You do not need to reinstall the app in order to request account deletion. You can use this page at any time to start the deletion request process.
              </p>
            </section>
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
