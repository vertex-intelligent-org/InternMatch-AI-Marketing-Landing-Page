import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy | InternMatch AI",
  description:
    "Learn how InternMatch AI handles account, profile, CV, application, and AI-assisted workflow data.",
};

const SECTIONS = [
  {
    id: "account-profile",
    title: "1. Account & Profile Information",
    body: "When you create an account, InternMatch stores the account and profile information you provide, such as your email address, full name, account type, and supported profile fields. This information is used to provide authentication, profile features, and matching.",
  },
  {
    id: "cv-processing",
    title: "2. CV & Document Processing",
    body: "Uploaded CVs are processed to extract information such as skills, education, experience, and project highlights used for profile enrichment and matching. CV files are not intended to be publicly displayed. Relevant CV content may be sent to configured AI providers for extraction and analysis.",
  },
  {
    id: "ai-matching",
    title: "3. AI-Assisted Matching",
    body: "Our matching intelligence analyzes requirements from internship listings against your structured profile details. AI-assisted features may also generate match explanations and cover letter drafts. These outputs are assistive and should be reviewed by you before use.",
  },
  {
    id: "applications-data",
    title: "4. Applications & Interaction Data",
    body: "Information about internships you save or track is stored to keep your application pipeline organized within the app. Generated application materials may also be stored or displayed as part of the relevant workflow.",
  },
  {
    id: "infrastructure-security",
    title: "5. Infrastructure & Security",
    body: "InternMatch uses Supabase for authentication and storage, together with backend services for application data and AI workflows. Protected app data is accessed through authenticated sessions and the app's configured authorization controls.",
  },
  {
    id: "user-control",
    title: "6. User Control & Data Management",
    body: "You can update supported profile information through the app. To request deletion of your InternMatch AI account and associated data, you may contact us using the account deletion email provided on our Data Deletion page. We may ask you to verify ownership of the account before processing the request. Once verified, the account and associated user data will be deleted, except for information that must be retained where required for legitimate security, fraud-prevention, or legal purposes.",
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Data &amp; Privacy
          </p>
        </header>

        {/* Small Intro Card */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            PRIVACY OVERVIEW
          </span>
          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed font-normal">
            InternMatch AI is an assistive platform designed to help students and early-career candidates discover relevant internship opportunities. This policy explains how data is handled when using InternMatch AI.
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
