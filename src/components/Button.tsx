"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onActivate?: () => void;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  onClick,
  onActivate,
  ...props
}: ButtonProps) {
  const glyphRef = useRef<HTMLSpanElement>(null);

  const animateGlyph = () => {
    if (!icon || !glyphRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const glyph = glyphRef.current;

    glyph.getAnimations().forEach((animation) => animation.cancel());
    glyph.style.transform = "rotate(0deg)";

    void glyph.offsetWidth;

    glyph.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(720deg)" },
      ],
      {
        duration: 560,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      }
    );
  };

  const baseStyles =
    "group inline-flex items-center justify-center font-semibold transition-[background-color,border-color,box-shadow,transform,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#467A8F] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full cursor-pointer select-none active:scale-[0.985]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-2",
    md: "text-sm px-5 py-2.5 gap-2.5",
    lg: "text-base px-6 py-3.5 gap-3 shadow-sm",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#467A8F] hover:bg-[#3D6C7F] text-white shadow-sm shadow-[#467A8F]/20 hover:shadow-md hover:shadow-[#467A8F]/30 border border-[#78A9B8]/30",
    secondary:
      "bg-white hover:bg-[#F2F7F8] text-[#171A1C] border border-[#E5E7E8] shadow-xs hover:border-[#C7DDE3] hover:shadow-sm",
    ghost:
      "bg-transparent hover:bg-[#F2F7F8] text-[#656B70] hover:text-[#171A1C]",
    dark:
      "bg-[#171C1F] hover:bg-[#20272B] text-[#F5F6F4] border border-[#2D4C59] shadow-sm",
  }[variant];

  const glyphSizeStyles = {
    sm: "w-[22px] h-[22px]",
    md: "w-[26px] h-[26px]",
    lg: "w-[30px] h-[30px]",
  }[size];

  const glyphVariantStyles = {
    primary:
      "border-white/65 bg-white/12 text-white",
    secondary:
      "border-[#467A8F]/35 bg-[#F2F7F8] text-[#2D4C59]",
    ghost:
      "border-[#467A8F]/30 bg-[#F2F7F8] text-[#2D4C59]",
    dark:
      "border-white/35 bg-white/8 text-[#F5F6F4]",
  }[variant];

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  const renderedIcon = icon ? (
    <span
      ref={glyphRef}
      className={`${glyphSizeStyles} ${glyphVariantStyles} inline-flex flex-none items-center justify-center rounded-full border will-change-transform`}
      aria-hidden="true"
    >
      <span className="inline-flex items-center justify-center">
        {icon}
      </span>
    </span>
  ) : null;

  const activate = () => {
    animateGlyph();
    onActivate?.();
  };

  if (href) {
    const isHashLink =
      href.startsWith("#");

    const isHomeSectionLink =
      href.startsWith("/#");

    const isInternalPage =
      href.startsWith("/");

    if (
      isHashLink ||
      isHomeSectionLink
    ) {
      return (
        <Link
          href={href}
          className={combinedStyles}
          onClick={(event) => {
            activate();

            /*
             * A /#section link from Privacy, Terms, or Data
             * Deletion must be allowed to navigate back home.
             */
            if (
              isHomeSectionLink &&
              window.location.pathname !== "/"
            ) {
              return;
            }

            event.preventDefault();

            const targetHash =
              isHomeSectionLink
                ? href.slice(1)
                : href;

            window.setTimeout(() => {
              const target =
                document.querySelector(
                  targetHash
                );

              if (target) {
                window.history.pushState(
                  null,
                  "",
                  targetHash
                );

                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }, 120);
          }}
        >
          {children}
          {renderedIcon}
        </Link>
      );
    }

    if (isInternalPage) {
      return (
        <Link
          href={href}
          className={combinedStyles}
          onClick={() => {
            activate();
          }}
        >
          {children}
          {renderedIcon}
        </Link>
      );
    }

    return (
      <a
        href={href}
        className={combinedStyles}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          activate();
        }}
      >
        {children}
        {renderedIcon}
      </a>
    );
  }

  return (
    <button
      className={combinedStyles}
      {...props}
      onClick={(event) => {
        activate();
        onClick?.(event);
      }}
    >
      {children}
      {renderedIcon}
    </button>
  );
}
