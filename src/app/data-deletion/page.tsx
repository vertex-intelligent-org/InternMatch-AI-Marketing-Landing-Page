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
            InternMatch AI allows users to request deletion of their account
            and associated product data.
          </p>
        </div>

        <article className="rounded-2xl sm:rounded-3xl bg-white border border-[#E5E7E8] p-6 sm:p-10 shadow-xs">
          <div className="space-y-8 sm:space-y-10">
            <section aria-labelledby="section-in-app">
              <h2
                id="section-in-app"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                1. Delete Your Account in the App
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  The recommended method is the self-service deletion option
                  available while signed in:
                </p>
                <p className="font-semibold text-[#171A1C]">
                  InternMatch AI → Settings → Delete Account
                </p>
                <p>
                  You will be asked to confirm the deletion before the request
                  is completed. This option is available from account settings
                  and is intended for authenticated account owners.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-what-is-deleted">
              <h2
                id="section-what-is-deleted"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                2. What Is Deleted
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  When account deletion completes, InternMatch AI is designed
                  to remove applicable account and product information
                  associated with the authenticated user, including:
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Candidate profile information.</li>
                  <li>
                    Candidate skills, education, experience, and related
                    profile data.
                  </li>
                  <li>Private CV or resume files.</li>
                  <li>Private avatar or profile-image files.</li>
                  <li>
                    Saved internships and associated candidate-owned profile
                    relationships where applicable.
                  </li>
                  <li>
                    AI quota and internal user-specific processing state where
                    applicable.
                  </li>
                  <li>
                    InternMatch AI subscription entitlement state associated
                    with the deleted account.
                  </li>
                </ul>
                <p>
                  The deletion request is based on the identity of the
                  authenticated account. A user cannot request deletion of
                  another user&apos;s account by supplying a different user ID.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-employers">
              <h2
                id="section-employers"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                3. Employer Accounts
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  For an employer account, internship or opportunity records
                  that need to remain to preserve historical application
                  integrity may not necessarily be physically removed.
                </p>
                <p>
                  Such records may be detached from the deleted employer
                  account, deactivated, or retained without the deleted
                  employer account identity where necessary to preserve
                  application history.
                </p>
                <p>
                  They must not continue functioning as active opportunities
                  owned by the deleted account.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-auth-storage">
              <h2
                id="section-auth-storage"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                4. Authentication and Private Storage
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  Account deletion includes removal of the applicable
                  InternMatch AI authentication identity through our
                  authentication provider and deletion of applicable privately
                  stored CV/avatar files.
                </p>
                <p>
                  If a required deletion step cannot safely be completed, the
                  deletion operation may return an error rather than silently
                  reporting success.
                </p>
                <p>
                  InternMatch AI also maintains protections intended to prevent
                  a deleted account from being recreated unintentionally by
                  delayed subscription-provider events.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-retained">
              <h2
                id="section-retained"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                5. Information That May Be Retained
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  Some limited information may be retained where reasonably
                  necessary for:
                </p>
                <ul className="list-disc space-y-1.5 pl-5">
                  <li>Security.</li>
                  <li>Fraud and abuse prevention.</li>
                  <li>Technical integrity.</li>
                  <li>Deletion enforcement.</li>
                  <li>Subscription or transaction disputes.</li>
                  <li>Legal or regulatory obligations.</li>
                  <li>Resolving disputes or protecting the service.</li>
                </ul>
                <p>
                  A minimal technical record may be retained to recognize that
                  an account was deleted and prevent external provider events
                  from recreating the account&apos;s subscription state.
                </p>
                <p>
                  Third-party providers may also retain records independently
                  according to their own legal requirements and privacy
                  policies.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-subscriptions">
              <h2
                id="section-subscriptions"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                6. App Store and Google Play Subscriptions
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p className="font-semibold text-[#171A1C]">
                  Deleting your InternMatch AI account does not automatically
                  cancel an Apple App Store or Google Play subscription.
                </p>
                <p>
                  If you have an active subscription, cancel it separately
                  through the store where you purchased it.
                </p>
                <p>
                  Deleting your InternMatch AI account removes access to the
                  account but does not control subscription billing managed
                  independently by Apple or Google.
                </p>
              </div>
            </section>

            <section aria-labelledby="section-no-access">
              <h2
                id="section-no-access"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                7. If You Cannot Access the App
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                <p>
                  If you cannot access the in-app deletion option, contact:
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=InternMatch%20AI%20Account%20Deletion%20Request`}
                  className="inline-flex font-mono font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
                <p>
                  Include enough information for us to identify the account you
                  are requesting to delete.
                </p>
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

            <section aria-labelledby="section-questions">
              <h2
                id="section-questions"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                8. Questions
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For questions about account deletion or personal information:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex mt-3 font-mono text-sm sm:text-base font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </section>

            <Link
              href="/privacy"
              className="inline-flex text-sm font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
            >
              Read the Privacy Policy
            </Link>
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