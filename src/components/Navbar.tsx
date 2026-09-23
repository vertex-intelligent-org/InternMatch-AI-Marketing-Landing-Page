"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { MenuIcon, CloseIcon, PlayIcon } from "./Icons";
import { NAV_LINKS } from "@/lib/constants";
import { StoreDownloadBadges } from "./StoreDownloadBadges";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileMenuOpen(false);

        requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });

        return;
      }

      if (event.key !== "Tab" || !mobileMenuRef.current) {
        return;
      }

      const focusableElements = Array.from(
        mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMenuAndRestoreFocus = () => {
    setIsMobileMenuOpen(false);

    requestAnimationFrame(() => {
      menuButtonRef.current?.focus();
    });
  };

  const reloadHome = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      event.preventDefault();
      window.location.reload();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F5]/94 backdrop-blur-md border-b border-[#E5E7E8] py-3"
            : "bg-[#F7F7F5]/92 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Main Navigation"
          >
            <Link
              href="/"
              onClick={reloadHome}
              aria-label="Reload InternMatch AI homepage"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-4 focus-visible:ring-offset-[#F7F7F5] rounded-md"
            >
              <Logo size="md" />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-base font-semibold text-[#656B70] hover:text-[#171A1C] transition-colors relative py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Button
                href="#demo"
                variant="primary"
                size="lg"
                icon={<PlayIcon className="w-4 h-4" />}
              >
                Watch Demo
              </Button>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden inline-flex w-11 h-11 items-center justify-center rounded-xl text-[#171A1C] hover:bg-[#F2F7F8] active:bg-[#E3EEF1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F]"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      <div
        ref={mobileMenuRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 z-[100] md:hidden bg-[#F7F7F5] transition-[opacity,transform,visibility] duration-200 ease-out ${
          isMobileMenuOpen
            ? "visible opacity-100 translate-y-0"
            : "invisible pointer-events-none opacity-0 -translate-y-2"
        }`}
      >
        <div
          className="min-h-[100dvh] flex flex-col px-5"
          style={{
            paddingTop: "max(16px, env(safe-area-inset-top))",
            paddingBottom: "max(24px, env(safe-area-inset-bottom))",
          }}
        >
          <div className="h-[72px] flex items-center justify-between border-b border-[#E5E7E8]">
            <Link
              href="/"
              onClick={reloadHome}
              aria-label="Reload InternMatch AI homepage"
              className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F]"
            >
              <Logo size="md" />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenuAndRestoreFocus}
              className="inline-flex w-11 h-11 items-center justify-center rounded-xl text-[#171A1C] hover:bg-[#F2F7F8] active:bg-[#E3EEF1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F]"
              aria-label="Close navigation menu"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>

          <nav
            className="flex-1 min-h-0 flex flex-col overflow-y-auto pt-10"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-16 items-center border-b border-[#E5E7E8] text-[26px] leading-none font-semibold tracking-[-0.025em] text-[#171A1C] hover:text-[#467A8F] focus-visible:outline-none focus-visible:text-[#467A8F] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-8">
<div className="mb-6 border-t border-[#E5E7E8] pt-6">
  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#656B70]">
    Get the App
  </p>

  <StoreDownloadBadges variant="menu" />
</div>


              <Button
                href="#demo"
                variant="primary"
                size="lg"
                className="w-full"
                icon={<PlayIcon className="w-3.5 h-3.5" />}
                onActivate={closeMenu}
              >
                Watch Demo
              </Button>

              <p className="mt-5 text-center text-[13px] leading-relaxed text-[#656B70]">
                InternMatch AI · Built for university students
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}