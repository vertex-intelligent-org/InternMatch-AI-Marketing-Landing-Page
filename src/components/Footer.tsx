import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_CONFIG, EXTERNAL_LINKS } from "@/lib/constants";

export function Footer() {
  const hasContactEmail = Boolean(EXTERNAL_LINKS.CONTACT_EMAIL);

  return (
    <footer className="border-t border-[#E5E7E8] bg-white/70 backdrop-blur-sm text-[#656B70] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size="sm" />
            </Link>
            <p className="text-xs text-[#656B70] leading-relaxed max-w-xs">
              AI-powered internship discovery, matching and application support for university students.
            </p>
            <div className="pt-2 text-xs">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#F2F7F8] border border-[#C7DDE3] font-medium text-[#2D4C59]">
                Launch Readiness · 2026
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-[#171A1C] tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#product" className="hover:text-[#171A1C] transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-[#171A1C] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#demo" className="hover:text-[#171A1C] transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#171A1C] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-[#171A1C] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#171A1C] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h3 className="text-xs font-semibold text-[#171A1C] tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#171A1C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#171A1C] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="hover:text-[#171A1C] transition-colors">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold text-[#171A1C] tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                {hasContactEmail ? (
                  <a
                    href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}?subject=Support%20Inquiry`}
                    className="hover:text-[#171A1C] transition-colors"
                  >
                    Support
                  </a>
                ) : (
                  <span className="text-[#656B70]">Support (Coming soon)</span>
                )}
              </li>
              <li>
                {hasContactEmail ? (
                  <a
                    href={`mailto:${EXTERNAL_LINKS.CONTACT_EMAIL}?subject=Partnership%20Inquiry`}
                    className="hover:text-[#171A1C] transition-colors"
                  >
                    Partnerships
                  </a>
                ) : (
                  <span className="text-[#656B70]">Partnerships (Coming soon)</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with correct builder attribution */}
        <div className="mt-12 pt-8 border-t border-[#E5E7E8] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#656B70]">
          <p>
            Independent student-built product by{" "}
            <span className="font-semibold text-[#171A1C]">
              Mohamad Barakat &amp; Selenur Yurdakul
            </span>
            .
          </p>
          <p>© 2026 InternMatch AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
