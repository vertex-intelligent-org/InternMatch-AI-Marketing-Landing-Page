"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { MenuIcon, CloseIcon, PlayIcon } from "./Icons";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E5E7E8] shadow-xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo with official icon */}
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] rounded-lg p-1"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#656B70] hover:text-[#171A1C] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button: Watch Demo */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#demo"
              variant="primary"
              size="md"
              icon={<PlayIcon className="w-3.5 h-3.5" />}
            >
              Watch Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#171A1C] hover:bg-[#F2F7F8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 bg-white/98 backdrop-blur-xl rounded-2xl border border-[#E5E7E8] shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-[#171A1C] hover:text-[#467A8F] py-2 px-3 rounded-lg hover:bg-[#F2F7F8] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-[#E5E7E8] flex flex-col">
              <Button
                href="#demo"
                variant="primary"
                size="md"
                className="w-full"
                icon={<PlayIcon className="w-3.5 h-3.5" />}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
