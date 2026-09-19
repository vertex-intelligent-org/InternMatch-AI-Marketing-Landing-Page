import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRightIcon } from "@/components/Icons";

const CONTACT_EMAIL = "internmatch@vertexintelligent.com";

export const metadata: Metadata = {
  title: "Privacy Policy | InternMatch AI",
  description:
    "Learn how InternMatch AI processes account, profile, CV, employer, application, AI, subscription, notification, and technical data.",
};

const SECTIONS = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    paragraphs: [
      "Depending on how you use InternMatch AI, we may process account and authentication information, candidate profile and career information, CV or resume information, profile images, internship and matching information, application and interview information, employer organization and verification information, employer compliance information, subscription and promotional information, notification information, and technical or operational information needed to operate and secure the service.",
      "Authentication is provided through Supabase Auth. We do not need or intend to store your password in InternMatch AI application databases.",
      "Where Sign in with Apple is used, applicable Apple authorization information may be processed as part of authentication.",
    ],
  },
  {
    id: "candidate-profile",
    title: "2. Candidate Profile and Career Information",
    paragraphs: [
      "Candidate profiles may include name, headline, skills, education, experience, projects, department or field of study, desired locations, preferred work arrangements, target roles, profile image, and other career-related information you choose to provide.",
      "InternMatch AI may also generate technical representations such as profile embeddings used to support semantic matching.",
    ],
  },
  {
    id: "cv-processing",
    title: "3. CV and Document Processing",
    paragraphs: [
      "Candidates may upload CV or resume files in supported formats. Processing may include the uploaded document, extracted profile information, file metadata, private storage references, processing-job status, and a warning or confirmation state where a newly uploaded CV may appear to belong to another person.",
      "Uploaded CVs are stored in private storage and are not intended to be publicly accessible.",
      "Where an authorized employer is permitted to view a candidate CV in connection with an application, access may be provided through a temporary server-generated signed link rather than a permanent public URL.",
      "Employer compliance evidence is also stored privately and is subject to separate organization, claim, and administrative access controls.",
    ],
  },
  {
    id: "photos",
    title: "4. Photos and Profile Images",
    paragraphs: [
      "If you choose to upload an avatar, InternMatch AI may access the photo you select from your photo library and store the selected image in private storage.",
      "The current mobile application does not require camera or microphone access for profile-image upload.",
    ],
  },
  {
    id: "matching-applications",
    title: "5. Matching, Applications, and Interviews",
    paragraphs: [
      "InternMatch AI may process internship listings, saved internships, match scores and component scores, matching or missing skills, skill-gap information, Why You Match explanations, candidate and listing embeddings, and candidate preferences used to rank or filter opportunities.",
      "Application information may include the relevant internship and employer, application status and history, notes, generated or saved cover-letter content, interview date and time, interview mode, location, employer messages, and other application-related information.",
    ],
  },
  {
    id: "employer-verification",
    title: "6. Employer Organization, Verification, and Compliance Information",
    paragraphs: [
      "Employer accounts may provide organization information such as legal and display names, website or domain, business email address, country, registration or tax information where provided, representative information, organization type, verification status, submission and review timestamps, reason codes, and administrative review history.",
      "Employer verification is separate from ordinary account registration and may require administrative review.",
      "Employer accounts may also submit compliance claims and supporting evidence. This may include claim type, jurisdiction, scope, statements, validity dates, review status, supporting PDF documents, file metadata, cryptographic integrity hashes, review history, and administrative notes.",
      "Compliance evidence is stored in private storage. Access is intended to be restricted and may be provided through short-lived signed links for authorized review.",
    ],
  },
  {
    id: "subscriptions-promotions",
    title: "7. Subscription, Purchase, and Promotional Information",
    paragraphs: [
      "If subscription or promotional features are available, InternMatch AI may process subscription plan or entitlement, product identifier, subscription status, renewal state, subscription period dates, store and environment information, store transaction identifiers where provided, subscription-provider event identifiers, and promotional eligibility or redemption history.",
      "Payment-card details are handled by the applicable app store or payment platform and are not intended to be collected directly by InternMatch AI.",
    ],
  },
  {
    id: "notifications",
    title: "8. Notifications",
    paragraphs: [
      "InternMatch AI may provide in-app notifications, push notifications, and transactional email notifications where enabled.",
      "Notification processing may include notification records, event type, related application, internship, organization, or compliance identifiers, read status, Expo push token, device platform, locale, and whether push delivery is enabled.",
      "Push delivery may use Expo's push-notification infrastructure together with underlying mobile-platform services such as Apple Push Notification service or Firebase Cloud Messaging.",
      "Where transactional email notifications are enabled, your account email address and limited notification information may be processed to send service-related messages.",
    ],
  },
  {
    id: "ai-processing",
    title: "9. Artificial Intelligence Processing",
    paragraphs: [
      "InternMatch AI uses artificial intelligence for supported candidate and employer features, including CV processing, matching support, match explanations, application assistance, interview preparation, employer candidate insights, interview kits, shortlist comparison, and internship-description assistance.",
      "Google Gemini is used as a primary AI provider for supported AI operations, including structured CV processing and embedding workflows.",
      "OpenAI may be used as an independent fallback provider for supported generation operations when the primary provider is unavailable or an eligible provider failure occurs. Embedding operations are not intended to use the OpenAI fallback.",
      "Depending on the feature, information sent to an AI provider may include CV content, professional profile information, internship information, match information, generation parameters, or employer-provided listing information.",
      "For employer candidate-insight features, InternMatch AI is designed to exclude candidate name, email, user ID, profile photo, and other direct identity attributes from the AI hiring-assistance context. Employment decisions remain the responsibility of human employers.",
      "AI-generated content may contain errors or omissions and is provided as decision support rather than a guaranteed, final, legal, or authoritative employment decision.",
    ],
  },
  {
    id: "ai-telemetry",
    title: "10. AI Usage, Operational, and Security Information",
    paragraphs: [
      "For reliability, quota enforcement, fraud prevention, security, debugging, and cost monitoring, InternMatch AI may maintain operational information such as authenticated user identifier, AI feature used, provider and model, processing-job identifiers, quota information, idempotency or request-fingerprint information, token counts where available, estimated AI processing cost, request or model latency, success or failure state, safe error metadata, timestamps, and server-side operational logs.",
      "InternMatch AI does not need to store complete AI prompts in its AI telemetry table in order to record usage metadata.",
    ],
  },
  {
    id: "employer-access",
    title: "11. Employer Access to Candidate Information",
    paragraphs: [
      "An employer account does not receive unrestricted access to all candidate information merely by existing on InternMatch AI.",
      "When a candidate submits an application, information relevant to that application may be made available to the authorized employer associated with the opportunity.",
      "This may include professional profile information, application history, match information, application materials, authorized CV access, and interview-related information.",
      "Employers are expected to use candidate information only for legitimate application and recruitment purposes.",
    ],
  },
  {
    id: "service-providers",
    title: "12. Service Providers",
    paragraphs: [
      "InternMatch AI relies on service providers where necessary to operate the service.",
    ],
    bullets: [
      "Supabase — authentication, database services, and private file storage.",
      "Google Gemini — supported AI processing, generation, document understanding, and embedding workflows.",
      "OpenAI — fallback provider for supported AI generation operations.",
      "RevenueCat — subscription entitlement, purchase state, store transaction state, and promotional entitlement access.",
      "Expo — mobile build infrastructure and push-notification delivery services.",
      "Apple — App Store, Sign in with Apple, Apple Push Notification service, and applicable purchase or subscription workflows.",
      "Google — Google Play, Firebase Cloud Messaging or related Android services, and Google Gemini.",
      "Transactional email provider — where service-related email notifications are enabled, the configured provider may process the recipient email address and limited message data required for delivery.",
      "Hosting and infrastructure providers — may process limited technical information needed to host, secure, monitor, and operate InternMatch AI.",
    ],
    after:
      "Third-party providers process information under their own terms, security practices, and privacy policies.",
  },
  {
    id: "sharing",
    title: "13. Sharing of Information",
    paragraphs: ["We may share information:"],
    bullets: [
      "With an authorized employer when necessary for an application submitted to that employer.",
      "With service providers necessary to operate InternMatch AI.",
      "With AI providers when necessary to perform an AI-assisted feature requested through the service.",
      "With subscription and app-store providers to manage purchases, subscriptions, entitlement state, or promotional access.",
      "With push or email delivery providers to deliver service-related notifications.",
      "With authorized administrators for employer verification, moderation, compliance review, fraud prevention, security, and support.",
      "When required to comply with applicable legal obligations.",
      "When reasonably necessary to protect InternMatch AI, its users, or others from fraud, misuse, security threats, or unlawful activity.",
    ],
    after:
      "InternMatch AI does not currently use third-party advertising SDKs in the mobile application and does not use personal information for cross-app behavioral advertising tracking.",
  },
  {
    id: "retention",
    title: "14. Data Retention",
    paragraphs: [
      "We retain information for as long as reasonably necessary to provide the service, maintain active accounts, preserve application and employer workflow history, manage subscriptions and entitlements, enforce usage limits and promotional eligibility, maintain security, complete verification or compliance review, resolve disputes, protect platform integrity, or meet legal or regulatory obligations.",
      "Different categories of information may have different retention periods. Some temporary, cached, or signed-access information may expire automatically.",
      "Certain limited records may remain after account deletion where reasonably necessary for security, deleted-account enforcement, subscription or transaction disputes, promotional redemption integrity, employer verification or compliance audit history, historical application integrity, legal obligations, or dispute resolution.",
      "Third-party providers may retain information independently under their own retention obligations and privacy policies.",
    ],
  },
  {
    id: "account-deletion",
    title: "15. Account and Data Deletion",
    paragraphs: [
      "Authenticated users can request account deletion through InternMatch AI → Settings → Delete Account. Deletion requires account-owner authentication and confirmation.",
      "For candidate accounts, deletion is designed to remove applicable product data associated with the account, including candidate profile information, profile-linked career and application data, private CV and avatar files, user notifications, registered push-device records, user-specific AI usage telemetry, quota records, processing jobs, subscription-entitlement state, and the Supabase authentication identity.",
      "A minimal technical deletion record may be retained so delayed subscription-provider events cannot recreate subscription authority for a deleted account.",
      "For employer accounts, opportunity records that must remain to preserve historical application integrity may be detached from the deleted employer account and closed rather than physically removed.",
      "Employer verification, compliance, audit, fraud-prevention, promotional-redemption, transaction, dispute, or legal records may also be retained where reasonably necessary.",
      "Deleting an InternMatch AI account does not automatically cancel an Apple App Store or Google Play subscription. Store subscriptions must be managed separately through the applicable store account.",
    ],
  },
  {
    id: "security",
    title: "16. Security",
    paragraphs: [
      "InternMatch AI uses technical and organizational safeguards intended to protect personal information. Depending on the data and feature, safeguards may include authenticated access controls, server-side authorization checks, private file storage, short-lived signed links, role-based administrative access, file validation, cryptographic integrity hashes for compliance evidence, rate limiting, request idempotency, separation of client-accessible and server-only credentials, account reauthentication for destructive account deletion, and security or audit records.",
      "No online service, transmission method, or storage system can guarantee absolute security.",
    ],
  },
  {
    id: "permissions",
    title: "17. Device Permissions and Mobile Data",
    paragraphs: [
      "The current InternMatch AI mobile application may request photo-library access when you choose a profile image and notification permission when push notifications are enabled.",
      "The current profile-image flow does not require camera or microphone access.",
      "InternMatch AI does not require precise device-location permission to provide candidate desired-location or internship-location features. Location information entered into a profile or internship listing is user-provided or listing-related information rather than continuous device GPS tracking.",
    ],
  },
  {
    id: "tracking",
    title: "18. No Advertising Tracking",
    paragraphs: [
      "The current InternMatch AI mobile application is not designed around third-party advertising.",
      "The current mobile application does not include a third-party advertising SDK and does not use personal information for cross-app behavioral advertising tracking.",
      "If this changes materially in the future, this Privacy Policy will be updated and any additional platform consent requirements will be handled as applicable.",
    ],
  },
  {
    id: "international",
    title: "19. International Processing",
    paragraphs: [
      "InternMatch AI and its service providers may process information in countries other than the country where you live.",
      "Where information is transferred or processed internationally, the applicable service provider's infrastructure, contractual terms, and legal obligations may apply.",
    ],
  },
  {
    id: "choices",
    title: "20. Your Choices and Rights",
    paragraphs: [
      "Depending on applicable law and your relationship with InternMatch AI, you may have rights or choices relating to your personal information.",
    ],
    bullets: [
      "Accessing information associated with your account.",
      "Correcting profile information.",
      "Updating career preferences.",
      "Removing or replacing a profile image.",
      "Updating or replacing a CV.",
      "Managing notification permissions through your device.",
      "Managing subscriptions through the applicable app store.",
      "Deleting your InternMatch AI account.",
      "Contacting us with privacy questions or requests.",
    ],
    after:
      "Some information cannot be edited directly where it forms part of security, audit, fraud-prevention, transaction, moderation, verification, compliance, or legal records.",
  },
  {
    id: "children",
    title: "21. Children's Privacy",
    paragraphs: [
      "InternMatch AI is designed for users who are legally permitted to use the service and participate in internship, education, recruitment, or employment-related activities.",
      "Users should not provide personal information through InternMatch AI if they are not legally permitted to use the service.",
    ],
  },
  {
    id: "changes",
    title: "22. Changes to This Policy",
    paragraphs: [
      'InternMatch AI may update this Privacy Policy as the service changes. When material changes are made, the updated version will be published with a revised "Last updated" date and additional notice may be provided where required.',
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
            InternMatch AI respects your privacy. This Privacy Policy explains
            what personal information we process, why we process it, how it may
            be shared, how it is protected, how long it may be retained, and
            the choices available to you when you use the mobile application,
            website, employer tools, and related services.
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
                23. Contact
              </h2>

              <p className="text-sm sm:text-base text-[#4B5257] leading-relaxed">
                For privacy, account, deletion, or support questions:
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
            Last updated: September 19, 2026 | InternMatch AI
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}