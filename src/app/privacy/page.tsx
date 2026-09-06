import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const PRIVACY_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Privacy Policy | InternMatch AI",
  description:
    "Learn how InternMatch AI handles account, profile, CV, application, and AI-assisted workflow data.",
};

const SECTIONS = [
  {
    id: "account-profile",
    title: "1. Account & Profile Information",
    body: "When you create or use an InternMatch AI account, we process account and profile information such as your email address, full name, account type, authentication identifiers, and supported profile fields. This information is used to provide authentication, profile functionality, internship matching, and related product features.",
  },
  {
    id: "cv-processing",
    title: "2. CV & Document Processing",
    body: "Uploaded CVs are processed to extract information such as skills, education, experience, and project highlights for profile enrichment and matching. Your CV and its contents are not intended to be publicly displayed. Relevant CV content may be processed by configured AI providers, including Google Gemini, when needed for extraction, analysis, or AI-assisted product features.",
  },
  {
    id: "ai-features",
    title: "3. AI-Assisted Features",
    body: "InternMatch compares internship requirements with structured profile information and may use AI-assisted features to generate match explanations, application guidance, and draft materials such as cover letters. AI-generated outputs are assistive, may not always be complete or accurate, and should be reviewed and edited by you before use or submission.",
  },
  {
    id: "applications-data",
    title: "4. Applications & Interaction Data",
    body: "Information about internships you save, review, or track may be stored to provide the application workflow. This can include application status information and generated application materials associated with the relevant internship or workflow.",
  },
  {
    id: "service-providers",
    title: "5. Service Providers & Data Processing",
    body: "InternMatch relies on service providers and technical infrastructure to operate the product. These include Supabase for authentication and configured data storage, Google Gemini for configured AI processing, and backend and hosting infrastructure used to operate APIs, databases, background jobs, application workflows, and related system functions. When subscription features are enabled, RevenueCat may process subscription entitlement and purchase-related information. App stores and payment platforms may also process transaction information under their own terms and privacy practices.",
  },
  {
    id: "data-sharing",
    title: "6. Data Sharing",
    body: "InternMatch does not make your CV or profile information publicly available as part of the normal product experience. User data may be processed by service providers when necessary to operate authentication, storage, AI-assisted features, backend functionality, security, and subscription workflows, or when disclosure is required for legitimate legal or security purposes. External internship or employer websites are separate services and may have their own privacy practices.",
  },
  {
    id: "data-retention",
    title: "7. Data Retention",
    body: "Account and product data are generally retained while your account remains active or for as long as reasonably needed to provide InternMatch AI features. After a verified account deletion request, we will delete the account and associated user data under our control, including profile information, uploaded CVs, application-related data, and related product records, except for limited information that must be retained for legitimate security, fraud-prevention, dispute-resolution, regulatory, or legal purposes. Service providers or app stores may retain certain records where required by their own legal obligations.",
  },
  {
    id: "account-deletion",
    title: "8. Account & Data Deletion",
    body: "You may request deletion of your InternMatch AI account and associated user data through our Data Deletion page. We may ask you to verify ownership of the account before processing the request. Account deletion is intended to remove the account and associated user data rather than temporarily deactivate or freeze the account, subject only to the limited retention circumstances described above.",
  },
  {
    id: "security",
    title: "9. Security",
    body: "InternMatch uses authenticated sessions, configured authorization controls, and operational safeguards intended to protect account and product data. No online service or storage system can guarantee absolute security, and security measures may continue to evolve as the product develops.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5]">
      <Navbar />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20 sm:pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors mb-8 group"
        >
          <span className="rotate-180 inline-block transition-transform group-hover:-translate-x-0.5">
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </span>
          Back to Homepage
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171A1C] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Data &amp; Privacy
          </p>
        </header>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            PRIVACY OVERVIEW
          </span>

          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed font-normal">
            InternMatch AI is an assistive platform designed to help students
            and early-career candidates discover and evaluate relevant
            internship opportunities. This policy explains how information is
            processed when using InternMatch AI.
          </p>
        </div>

        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                aria-labelledby={`section-${section.id}`}
              >
                <h2
                  id={`section-${section.id}`}
                  className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
                >
                  {section.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                  {section.body}
                </p>

                {section.id === "account-deletion" ? (
                  <Link
                    href="/data-deletion"
                    className="inline-flex mt-3 text-sm font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
                  >
                    Open Data Deletion page
                  </Link>
                ) : null}
              </section>
            ))}

            <section aria-labelledby="section-privacy-contact">
              <h2
                id="section-privacy-contact"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                10. Privacy Contact
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For privacy questions, data requests, or concerns about how
                InternMatch AI handles your information, contact:
              </p>

              <a
                href={`mailto:${PRIVACY_EMAIL}?subject=InternMatch%20AI%20Privacy%20Inquiry`}
                className="inline-flex mt-3 font-mono text-sm sm:text-base font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
              >
                {PRIVACY_EMAIL}
              </a>
            </section>
          </div>

          <hr className="my-8 sm:my-10 border-[#E5E7E8]" />

          <p className="text-xs font-mono text-[#656B70]">
            Last updated: September 2026 | InternMatch AI
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}