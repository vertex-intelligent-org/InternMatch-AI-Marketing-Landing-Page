import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export function Logo({
  size = "md",
  showText = true,
  className = "",
}: LogoProps) {
  const dimensions = {
    sm: {
      iconClass: "w-8 h-8",
      textClass: "text-[17px]",
      px: 32,
    },
    md: {
      iconClass: "w-10 h-10 sm:w-11 sm:h-11",
      textClass: "text-[20px] sm:text-[22px]",
      px: 44,
    },
    lg: {
      iconClass: "w-12 h-12 sm:w-[52px] sm:h-[52px]",
      textClass: "text-[23px] sm:text-[25px]",
      px: 52,
    },
  }[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      <Image
        src="/branding/internmatch-icon.png"
        alt=""
        width={dimensions.px}
        height={dimensions.px}
        className={`${dimensions.iconClass} object-contain flex-shrink-0`}
        priority
      />

      {showText && (
        <span
          className={`${dimensions.textClass} font-extrabold tracking-[-0.03em] text-[#171A1C] leading-none whitespace-nowrap`}
        >
          InternMatch AI
        </span>
      )}
    </div>
  );
}
