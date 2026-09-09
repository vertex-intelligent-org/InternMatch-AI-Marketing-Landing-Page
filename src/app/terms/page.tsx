import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const CONTACT_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Terms of Use | InternMatch AI",
  description:
    "Read the terms governing access to and use of InternMatch AI.",
};

const SECTIONS = [
  {
    id: "service",
    title: "1. The Service",
    paragraphs: [
      "InternMatch AI provides tools for internship discovery, candidate matching, applications, employer opportunity management, AI-assisted application support, interview preparation, and related features.",
      "InternMatch AI may provide different features to candidate and employer accounts.",
      "Features may change, be improved, be limited, or be discontinued as the service evolves.",
    ],
  },
  {
    id: "accounts",
    title: "2. Accounts",
    paragraphs: ["Users are responsible for:"],
    bullets: [
      "Providing accurate account information.",
      "Maintaining control of their account credentials.",
      "Keeping account information reasonably current.",
      "Using only accounts they are authorized to access.",
      "Not impersonating another person or organization.",
    ],
    after:
      "You are responsible for activity performed through your account unless caused by a failure of InternMatch AI's systems.",
  },
  {
    id: "candidate-responsibilities",
    title: "3. Candidate Responsibilities",
    paragraphs: [
      "Candidates are responsible for the accuracy of the information they provide, including profile information, CV content, qualifications, skills, education, experience, and application information.",
      "Candidates should review AI-generated or automatically extracted information before relying on it.",
      "Uploading a CV or submitting information through InternMatch AI does not guarantee an internship, interview, employer contact, acceptance, employment, any particular ranking, or any particular outcome.",
    ],
  },
  {
    id: "employer-responsibilities",
    title: "4. Employer Responsibilities",
    paragraphs: [
      "Employers are responsible for ensuring that opportunities they publish are accurate and authorized.",
      "Employers must not:",
    ],
    bullets: [
      "Publish fraudulent or misleading opportunities.",
      "Misrepresent an organization or role.",
      "Request information they are not authorized to obtain.",
      "Use candidate information for unrelated or unauthorized purposes.",
      "Scrape or mass-extract candidate data.",
      "Circumvent access controls.",
    ],
    after:
      "Employers are responsible for their communications, interview arrangements, hiring decisions, and compliance with obligations applicable to their own recruitment activities.",
  },
  {
    id: "artificial-intelligence",
    title: "5. Artificial Intelligence",
    paragraphs: [
      "InternMatch AI includes AI-assisted functionality.",
      "AI-generated content, extracted information, recommendations, explanations, rankings, and preparation materials may contain errors or omissions.",
      "AI features are provided as decision-support tools and not as guarantees or final employment decisions.",
      "Users should independently review important information before acting on AI-generated output.",
      "InternMatch AI does not guarantee that an AI-generated match score, recommendation, cover letter, explanation, or interview preparation result will lead to a particular employment outcome.",
    ],
  },
  {
    id: "applications",
    title: "6. Applications and Candidate Information",
    paragraphs: [
      "When a candidate applies for an opportunity, InternMatch AI may make relevant application information available to the employer responsible for that opportunity.",
      "Employers must use candidate information only for legitimate recruitment and application-related purposes.",
      "Access to candidate CV files may be temporary and controlled by InternMatch AI.",
      "Users must not attempt to bypass these restrictions.",
    ],
  },
  {
    id: "acceptable-use",
    title: "7. Acceptable Use",
    paragraphs: ["You may not use InternMatch AI to:"],
    bullets: [
      "Commit fraud.",
      "Impersonate another person, candidate, employer, or organization.",
      "Upload malicious content.",
      "Attempt unauthorized access to accounts, APIs, databases, files, or systems.",
      "Interfere with or disrupt the service.",
      "Circumvent usage limits, subscription restrictions, or security controls.",
      "Scrape, crawl, harvest, or mass-extract private or restricted information.",
      "Reverse-engineer restricted systems where prohibited.",
      "Abuse AI functionality or automated services.",
      "Use candidate information for purposes unrelated to legitimate recruitment.",
      "Violate the rights of other users or third parties.",
      "Use the service in violation of applicable law.",
    ],
    after:
      "We may limit or suspend access where necessary to protect the service or other users.",
  },
  {
    id: "subscriptions",
    title: "8. Subscriptions and Payments",
    paragraphs: [
      "InternMatch AI may offer paid subscription plans through the Apple App Store or Google Play.",
      "Available plans, pricing, billing periods, and features may vary by platform or account type.",
      "Purchases made through Apple or Google are also subject to the applicable store's terms.",
      "Subscription renewal, cancellation, billing, and applicable refund handling are generally managed through the store through which the subscription was purchased.",
      "Deleting an InternMatch AI account does not automatically cancel an App Store or Google Play subscription.",
      "Users should cancel subscriptions separately through their applicable store account when necessary.",
    ],
  },
  {
    id: "availability",
    title: "9. Availability",
    paragraphs: [
      "We aim to provide a reliable service, but InternMatch AI may occasionally be unavailable because of maintenance, software updates, infrastructure problems, third-party provider outages, security events, technical failures, or changes to features or services.",
      "Continuous or error-free availability is not guaranteed.",
    ],
  },
  {
    id: "third-party",
    title: "10. Third-Party Services and Links",
    paragraphs: [
      "InternMatch AI may interact with third-party services or contain links to external websites.",
      "We do not control third-party services and are not responsible for their content, availability, privacy practices, or independent actions.",
      "Use of third-party services may be subject to separate terms and privacy policies.",
    ],
  },
  {
    id: "suspension",
    title: "11. Suspension or Termination",
    paragraphs: [
      "Access to InternMatch AI may be limited, suspended, or terminated where reasonably necessary because of abuse, fraud, security risk, unauthorized access, material violation of these Terms, harm to other users or the service, or operational or legal requirements.",
      "Users may also stop using the service and may delete their account through supported account-deletion functionality.",
    ],
  },
  {
    id: "no-employment-guarantee",
    title: "12. No Employment Guarantee",
    paragraphs: [
      "InternMatch AI is a technology platform.",
      "We do not guarantee that opportunities are available at any particular time, that a candidate will receive an interview or offer, that an employer will select any particular candidate, that information provided by another user is always complete or accurate, or that an AI-generated recommendation will produce a desired outcome.",
      "Hiring and employment decisions remain the responsibility of candidates and employers.",
    ],
  },
  {
    id: "privacy",
    title: "13. Privacy",
    paragraphs: [
      "Use of personal information through InternMatch AI is described in the Privacy Policy.",
      "By using the service, users acknowledge that information will be processed as necessary to provide the service as described in that policy.",
    ],
  },
  {
    id: "changes",
    title: "14. Changes to the Service or Terms",
    paragraphs: [
      'InternMatch AI may update features or these Terms as the service evolves. Material updates will be reflected by changing the "Last updated" date or otherwise providing appropriate notice where necessary.',
    ],
  },
];

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-base sm:text-lg font-medium text-[#656B70] mt-2">
            Using InternMatch AI
          </p>
        </header>

        <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E5E7E8] shadow-xs mb-8">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3] mb-3">
            TERMS OF USE
          </span>
          <p className="text-sm sm:text-base text-[#171A1C] leading-relaxed">
            These Terms of Use govern access to and use of InternMatch AI. By
            creating an account or using InternMatch AI, you agree to use the
            service in accordance with these Terms. If you do not agree with
            these Terms, do not use the service.
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
                  {section.paragraphs.map((paragraph) => (
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

                  {section.id === "privacy" ? (
                    <Link
                      href="/privacy"
                      className="inline-flex font-semibold text-[#345B6B] hover:text-[#2D4C59] transition-colors"
                    >
                      Read the Privacy Policy
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
                15. Contact
              </h2>
              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                Questions about these Terms or InternMatch AI can be sent to:
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