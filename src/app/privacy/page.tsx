import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const CONTACT_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Privacy Policy | InternMatch AI",
  description:
    "Learn how InternMatch AI collects, uses, shares, retains, and protects information.",
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    paragraphs: [
      "Depending on how you use InternMatch AI, we may process information including:",
    ],
    bullets: [
      "Name and account information.",
      "Email address and authentication information.",
      "Account type, such as candidate or employer.",
      "Profile information such as headline, department, skills, desired locations, education, experience, and other career-related details.",
      "Profile image or avatar.",
      "CV or resume files uploaded by candidates.",
      "Links you choose to provide, such as LinkedIn, GitHub, or portfolio links.",
      "Internship listings and employer-provided opportunity information.",
      "Saved internships, applications, application status information, and interview-related information.",
      "Information generated or submitted when using AI-assisted features.",
      "Subscription and entitlement information.",
      "Technical and operational information needed to operate, secure, and improve the service.",
    ],
    after:
      "We do not ask users to provide information that is unnecessary for the operation of InternMatch AI.",
  },
  {
    id: "cv-processing",
    title: "2. CV and Resume Processing",
    paragraphs: [
      "When a candidate uploads a CV or resume, InternMatch AI may extract and process information from that document to support candidate profile creation and updates, skill identification, internship matching, match explanations, application assistance, and interview preparation.",
      "Uploaded CVs are stored in private storage and are not intended to be publicly accessible.",
      "When an authorized employer needs access to a candidate CV in connection with an application, access is provided through a temporary server-generated signed link rather than a permanent public URL.",
      "InternMatch AI may also warn a user if an uploaded CV appears to belong to another person before replacing existing candidate information.",
    ],
  },
  {
    id: "ai-processing",
    title: "3. Artificial Intelligence Processing",
    paragraphs: [
      "InternMatch AI uses artificial intelligence to provide features such as CV analysis, matching assistance, match explanations, application support, and interview preparation.",
      "Google Gemini is used as a primary AI provider for supported AI operations.",
      "OpenAI may be used as a fallback provider for supported generation operations when the primary provider is unavailable or an eligible provider failure occurs. Not every AI operation necessarily uses both providers.",
      "AI-generated content is intended to assist users and should not be treated as a guaranteed, final, or authoritative employment decision.",
      "For reliability, quota enforcement, security, and cost monitoring, we may maintain operational AI metadata.",
    ],
    bullets: [
      "AI operation type.",
      "Provider and model.",
      "Input and output token counts where available.",
      "Estimated processing cost.",
      "Request latency.",
      "Success or failure status.",
      "Safe error metadata.",
    ],
    after:
      "Our server-side telemetry supports both Gemini and OpenAI providers.",
  },
  {
    id: "applications-employers",
    title: "4. Applications and Employer Interaction",
    paragraphs: [
      "Candidates may use InternMatch AI to save internships, submit applications, and manage application-related activity.",
      "Application information may include internship and employer information, application status, generated or saved application materials, cover-letter-related content, interview scheduling information, interview mode, location or employer message, and application status history.",
      "When a candidate applies to an opportunity, relevant application information may be made available to the authorized employer associated with that opportunity.",
      "Employers do not receive unrestricted access to all candidate information merely by having an employer account.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "5. How We Use Information",
    paragraphs: ["We may use information to:"],
    bullets: [
      "Create and maintain user accounts.",
      "Provide candidate and employer features.",
      "Analyze uploaded CVs.",
      "Build and update candidate profiles.",
      "Provide internship matching.",
      "Generate AI-assisted explanations and application content.",
      "Support interview preparation.",
      "Operate subscription and usage-limit features.",
      "Maintain service reliability and security.",
      "Detect or prevent misuse.",
      "Diagnose technical problems.",
      "Respond to support requests.",
      "Process account deletion requests.",
    ],
  },
  {
    id: "service-providers",
    title: "6. Service Providers",
    paragraphs: [
      "InternMatch AI relies on third-party service providers where necessary to operate the service.",
    ],
    bullets: [
      "Supabase — used for authentication, database services, and private file storage.",
      "Google Gemini — used for supported AI processing and generation.",
      "OpenAI — used as a fallback for supported AI generation operations.",
      "RevenueCat — used to help manage subscription entitlement and purchase state.",
      "Apple App Store and Google Play — used to distribute mobile applications and process applicable store purchases or subscriptions.",
      "Infrastructure and hosting providers may also process limited technical information as necessary to operate the service.",
    ],
    after:
      "Third-party providers operate under their own terms and privacy policies.",
  },
  {
    id: "sharing",
    title: "7. Sharing of Information",
    paragraphs: [
      "We do not make candidate CVs or private account information publicly available through InternMatch AI.",
      "Information may be shared:",
    ],
    bullets: [
      "With an employer when necessary for an application submitted to that employer.",
      "With service providers necessary to operate InternMatch AI.",
      "When required to protect the service, users, or others from misuse or security threats.",
      "When required by applicable legal obligations.",
    ],
    after:
      "Candidate CV access provided to employers is intended to be restricted to authorized application-related access.",
  },
  {
    id: "retention",
    title: "8. Data Retention",
    paragraphs: [
      "We retain information only for as long as reasonably necessary to provide the service, operate accounts, maintain security, enforce deletion state, resolve disputes, comply with applicable obligations, or protect the integrity of the platform.",
      "Different types of information may have different retention periods. Certain temporary or cached data may expire automatically.",
      "Some limited technical, security, fraud-prevention, subscription, transaction, dispute, or deletion-enforcement information may need to remain after an account is deleted.",
      "Information retained independently by third-party providers may be subject to those providers' own retention rules.",
    ],
  },
  {
    id: "account-deletion",
    title: "9. Account and Data Deletion",
    paragraphs: [
      "Authenticated users can request deletion directly from the mobile application through Settings → Delete Account.",
      "Deletion requires confirmation before it is performed.",
      "Account deletion is designed to remove the user's InternMatch AI account and associated product data, including applicable profile information and privately stored CV or avatar files.",
      "For employer accounts, opportunity records that must remain for historical application integrity may be anonymized, detached from the deleted employer account, and deactivated rather than removing historical application context.",
      "Limited records may be retained where reasonably necessary for technical, security, fraud-prevention, dispute, regulatory, legal, subscription, or deletion-enforcement purposes.",
      "Deleting an InternMatch AI account does not automatically cancel an Apple App Store or Google Play subscription. Subscriptions should also be managed through the applicable store account.",
    ],
  },
  {
    id: "security",
    title: "10. Security",
    paragraphs: [
      "InternMatch AI uses technical and organizational safeguards intended to protect user information, including authentication, authorization controls, private storage, and restricted access to sensitive resources.",
      "However, no online service, transmission method, or storage system can guarantee absolute security.",
      "Users are responsible for protecting access to their own accounts and devices.",
    ],
  },
  {
    id: "children",
    title: "11. Children's Privacy",
    paragraphs: [
      "InternMatch AI is intended for users who are eligible to use the service and participate in internship or employment-related activities.",
      "Users should not provide personal information through the service if they are not legally permitted to do so.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    paragraphs: [
      'We may update this Privacy Policy as InternMatch AI evolves. When material changes are made, the updated policy will be published with a revised "Last updated" date.',
      "Continued use of the service after an updated policy becomes effective may be subject to the updated policy.",
    ],
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
          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed">
            InternMatch AI respects your privacy and is designed to process
            personal information only as needed to provide internship matching,
            application support, employer tools, and related account services.
            This Privacy Policy explains what information we collect, how we
            use it, when it may be shared, how long it may be retained, and the
            choices available to you.
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

                <div className="space-y-3 text-sm sm:text-base text-[#4B5257] leading-relaxed">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets ? (
                    <ul className="list-disc space-y-1.5 pl-5">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.after ? <p>{section.after}</p> : null}

                  {section.id === "account-deletion" ? (
                    <Link
                      href="/data-deletion"
                      className="inline-flex font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
                    >
                      Open Account &amp; Data Deletion page
                    </Link>
                  ) : null}
                </div>
              </section>
            ))}

            <section aria-labelledby="section-contact">
              <h2
                id="section-contact"
                className="text-lg sm:text-xl font-bold text-[#171A1C] tracking-tight mb-3"
              >
                13. Contact
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For privacy, account, or support questions:
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex mt-3 font-mono text-sm sm:text-base font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
              >
                {CONTACT_EMAIL}
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