import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  /*
    Compact sizing prevents the presentation margins from overwhelming navbar layout.
    Ready to swap for a transparent PNG or vector SVG without modifying consumer layout.
  */
  const iconDimensions = {
    sm: { sizeClass: "w-7 h-7", px: 28 },
    md: { sizeClass: "w-8 h-8", px: 32 },
    lg: { sizeClass: "w-10 h-10", px: 40 },
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <div
        className={`relative ${iconDimensions.sizeClass} rounded-lg overflow-hidden flex-shrink-0 shadow-xs border border-[#E5E7E8] bg-white`}
      >
        <Image
          src="/branding/internmatch-icon.png"
          alt="InternMatch AI Logo"
          width={iconDimensions.px}
          height={iconDimensions.px}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {showText && (
        <span className="text-base sm:text-lg font-bold tracking-tight text-[#171A1C]">
          InternMatch AI
        </span>
      )}
    </div>
  );
}
