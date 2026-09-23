import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const CONTACT_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Account & Data Deletion | InternMatch AI",
  description:
    "Learn how to delete your InternMatch AI account and associated product data.",
  alternates: {
    canonical: "/data-deletion",
  },
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
            Account &amp; Data Deletion
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Account Control &amp; Deletion
          </p>
        </header>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            ACCOUNT DELETION
          </span>

          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed">
            InternMatch AI allows authenticated users to request deletion of
            their account and associated product data.
          </p>
        </div>

        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                1. Delete Your Account in the App
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>The supported in-app path is:</p>

                <p className="font-semibold text-[#171A1C]">
                  InternMatch AI → Settings → Delete Account
                </p>

                <p>
                  Deletion requires account-owner authentication and
                  confirmation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                2. Candidate Account Deletion
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  For candidate accounts, deletion is designed to remove
                  applicable InternMatch AI product data associated with the
                  account, including:
                </p>

                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Candidate profile information.</li>
                  <li>
                    Skills, education, experience, projects, matches,
                    applications, and saved internships linked through the
                    candidate profile.
                  </li>
                  <li>Private CV files.</li>
                  <li>Private avatar files.</li>
                  <li>User notifications.</li>
                  <li>Registered push-device records.</li>
                  <li>
                    User-specific AI usage telemetry, quota records, and
                    processing jobs.
                  </li>
                  <li>InternMatch AI subscription-entitlement state.</li>
                  <li>The Supabase authentication identity.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                3. Employer Accounts
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  For employer accounts, opportunity records that must remain
                  to preserve historical application integrity may be detached
                  from the deleted employer account and closed rather than
                  physically removed.
                </p>

                <p>
                  Employer verification, compliance, audit, fraud-prevention,
                  promotional-redemption, transaction, dispute, or legal
                  records may also be retained where reasonably necessary.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                4. Deleted-Account Protection
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  A minimal technical deletion record may be retained so
                  delayed subscription-provider events cannot recreate
                  subscription authority for a deleted account.
                </p>

                <p>
                  Limited information may also be retained where reasonably
                  necessary for security, fraud prevention, technical
                  integrity, dispute resolution, historical application
                  integrity, subscription or transaction disputes, promotional
                  redemption integrity, or legal and regulatory obligations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                5. App Store and Google Play Subscriptions
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p className="font-semibold text-[#171A1C]">
                  Deleting your InternMatch AI account does not automatically
                  cancel an Apple App Store or Google Play subscription.
                </p>

                <p>
                  Store subscriptions must be managed separately through the
                  applicable store account.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                6. If You Cannot Access the App
              </h2>

              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  If you cannot access the in-app deletion function, contact:
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=InternMatch%20AI%20Account%20Deletion%20Request`}
                  className="inline-flex font-mono font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>

                <p>
                  Do not send passwords, authentication tokens, API keys, or
                  other account secrets by email.
                </p>

                <p>
                  We may need to verify that the request is being made by the
                  legitimate account owner before processing it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3">
                7. More Information
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For more information about data processing, retention, service
                providers, AI processing, notifications, employer workflows,
                and privacy rights, review the Privacy Policy.
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
            Last updated: September 19, 2026 | InternMatch AI
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}