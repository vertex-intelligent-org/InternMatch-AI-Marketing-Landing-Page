import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_CONFIG, EXTERNAL_LINKS } from "@/lib/constants";
import { STORE_RELEASE } from "@/lib/store";
import { StoreDownloadBadges } from "./StoreDownloadBadges";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E7E8] bg-white/70 text-sm text-[#656B70] backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="inline-block">
              <Logo size="sm" />
            </Link>

            <p className="max-w-xs text-xs leading-relaxed text-[#656B70]">
              AI-powered internship discovery, matching and application
              support for university students.
            </p>

            <div className="pt-2 text-xs">
              <span className="inline-block rounded-md border border-[#C7DDE3] bg-[#F2F7F8] px-2.5 py-1 font-medium text-[#2D4C59]">
                {STORE_RELEASE.shortStatus}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#171A1C]">
              Navigation
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="#product"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Product
                </Link>
              </li>

              <li>
                <Link
                  href="#how-it-works"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  How it works
                </Link>
              </li>

              <li>
                <Link
                  href="#demo"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Demo
                </Link>
              </li>

              <li>
                <Link
                  href="#team"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href="#faq"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#171A1C]">
              Legal
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Terms of Use
                </Link>
              </li>

              <li>
                <Link
                  href="/data-deletion"
                  className="transition-colors hover:text-[#171A1C]"
                >
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#171A1C]">
              Support
            </h3>

            <a
              href={EXTERNAL_LINKS.VERTEX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-[#656B70] transition-colors hover:text-[#171A1C] sm:text-sm"
            >
              VERTEX AI
            </a>
          </div>
        </div>

{/* Store availability */}
<div className="mt-10 rounded-[24px] border border-[#D8E2E5] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(23,26,28,0.04)] sm:px-6">
  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h3 className="text-sm font-bold text-[#171A1C]">
        {STORE_RELEASE.footerTitle}
      </h3>

      <p className="mt-1 max-w-md text-xs leading-relaxed text-[#656B70]">
        {STORE_RELEASE.availabilityCopy}
      </p>
    </div>

    <StoreDownloadBadges />
  </div>
</div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#E5E7E8] pt-8 text-xs text-[#656B70] sm:flex-row">
          <p>
            Independent student-built product by{" "}
            <span className="font-semibold text-[#171A1C]">
              Mohamad Barakat &amp; Selenur Yurdakul
            </span>
            .
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span>
              {SITE_CONFIG.languages[0]} · {SITE_CONFIG.languages[1]} ·{" "}
              <span
                className="font-cairo font-medium text-[#171A1C]"
                lang="ar"
                dir="rtl"
              >
                {SITE_CONFIG.languages[2]}
              </span>
            </span>

            <span className="hidden text-slate-300 sm:inline">•</span>

            <p>© 2026 InternMatch AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}