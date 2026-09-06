import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const DELETION_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Request Account Deletion | InternMatch AI",
  description:
    "Request deletion of your InternMatch AI account and associated user data.",
};

export default function DataDeletionPage() {
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
            Request Account Deletion
          </h1>

          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Data &amp; Account Deletion
          </p>
        </header>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            ACCOUNT DELETION
          </span>

          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed font-normal">
            You can use this page to request deletion of your InternMatch AI
            account and associated user data, including if you no longer have
            access to the mobile app.
          </p>
        </div>

        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            <section aria-labelledby="section-how-to-request">
              <h2
                id="section-how-to-request"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                1. How to request deletion
              </h2>

              <div className="text-sm sm:text-base text-[#4B5257] leading-relaxed space-y-4">
                <p>
                  Send an email from the email address associated with your
                  InternMatch AI account to:
                </p>

                <a
                  href={`mailto:${DELETION_EMAIL}?subject=InternMatch%20AI%20Account%20Deletion%20Request`}
                  className="block p-3.5 sm:p-4 rounded-xl bg-[#F2F7F8] border border-[#C7DDE3] text-[#2D4C59] font-mono font-semibold text-sm sm:text-base break-all hover:border-[#8DB2BD] transition-colors"
                >
                  {DELETION_EMAIL}
                </a>

                <p>Use the subject:</p>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F7F7F5] border border-[#E5E7E8] text-[#171A1C] font-mono text-xs sm:text-sm select-all">
                  InternMatch AI — Account Deletion Request
                </div>

                <p>Include the following information:</p>

                <ul className="list-disc list-inside space-y-1.5 text-[#4B5257] pl-1">
                  <li>Your full name</li>
                  <li>
                    The email address associated with your InternMatch AI
                    account
                  </li>
                  <li>
                    A clear statement that you want your InternMatch AI account
                    deleted
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="section-verification">
              <h2
                id="section-verification"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                2. Verification
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                We may contact you to verify ownership of the account before
                processing the deletion request. This helps prevent
                unauthorized deletion requests.
              </p>
            </section>

            <section aria-labelledby="section-what-is-deleted">
              <h2
                id="section-what-is-deleted"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                3. What happens after verification
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                After account ownership is verified, we will delete the
                InternMatch AI account and associated user data under our
                control, including profile information, uploaded CVs,
                application-related data, and related product records. Limited
                information may be retained where necessary for legitimate
                security, fraud-prevention, dispute-resolution, regulatory, or
                legal purposes.
              </p>
            </section>

            <section aria-labelledby="section-provider-records">
              <h2
                id="section-provider-records"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                4. Service-provider and transaction records
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                Some service providers, app stores, or payment platforms may
                retain limited records where required by their own legal or
                operational obligations. When subscription features are
                enabled, this may include subscription or transaction records
                processed by RevenueCat or the applicable app store. Retention
                of such records does not keep your InternMatch AI account
                active.
              </p>
            </section>

            <section aria-labelledby="section-external-access">
              <h2
                id="section-external-access"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                5. Accessing this deletion resource
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                You do not need to reinstall the app to submit a deletion
                request. This page is available as an external account deletion
                resource so that you can request deletion even if you no longer
                have access to the app.
              </p>
            </section>

            <section aria-labelledby="section-privacy-policy">
              <h2
                id="section-privacy-policy"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                6. More information
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For more information about data processing, AI providers,
                service providers, retention, and privacy rights, review the
                InternMatch AI Privacy Policy.
              </p>

              <Link
                href="/privacy"
                className="inline-flex mt-3 text-sm font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
              >
                Read the Privacy Policy
              </Link>
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