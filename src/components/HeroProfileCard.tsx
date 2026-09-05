"use client";

import React from "react";

export type StudentProfileId = "sara" | "lina" | "omar" | "mert";

interface HeroProfileCardProps {
  id: StudentProfileId;
  name: string;
  role: string;
  floatAnimation?: "a" | "b" | "c" | "d";
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Editorial, high-fidelity vector portraits for the 4 student profiles.
 * Rendered locally with harmonious InternMatch brand accents and natural skin tones.
 */
function StudentAvatar({ id }: { id: StudentProfileId }) {
  if (id === "sara") {
    // Sara — UX Design: warm complexion, stylish dark bun, teal accent
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-full"
      >
        <rect width="36" height="36" rx="18" fill="#E8F1F3" />
        <circle cx="18" cy="18" r="17" stroke="#C7DDE3" strokeWidth="1.5" />
        <circle cx="18" cy="10" r="5" fill="#2C2422" />
        <path
          d="M7 36 C8 27, 13 24, 18 24 C23 24, 28 27, 29 36 Z"
          fill="#467A8F"
        />
        <rect x="15.5" y="19" width="5" height="6" rx="2" fill="#E8B896" />
        <path d="M15 25 L18 28 L21 25" stroke="#E8F1F3" strokeWidth="1.2" strokeLinecap="round" />
        <ellipse cx="18" cy="16" rx="6" ry="6.8" fill="#F4CAAB" />
        <path
          d="M11.8 15 C11.8 11.5, 14 9, 18 9 C22 9, 24.2 11.5, 24.2 15 C24 13.5, 21.5 11.5, 18 11.5 C14.5 11.5, 12 13.5, 11.8 15 Z"
          fill="#2C2422"
        />
        <circle cx="11.8" cy="17" r="0.9" fill="#467A8F" />
      </svg>
    );
  }

  if (id === "lina") {
    // Lina — Marketing: shoulder-length dark wavy hair, warm neutral top
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-full"
      >
        <rect width="36" height="36" rx="18" fill="#F1F5F5" />
        <circle cx="18" cy="18" r="17" stroke="#C7DDE3" strokeWidth="1.5" />
        <path
          d="M10 16 C10 11, 14 8.5, 18 8.5 C22 8.5, 26 11, 26 16 C26 22, 25 25, 24 27 C23 25, 22 23, 22 21 C20 22, 16 22, 14 21 C14 23, 13 25, 12 27 C11 25, 10 22, 10 16 Z"
          fill="#3B2A24"
        />
        <path
          d="M7 36 C8 28, 13 25, 18 25 C23 25, 28 28, 29 36 Z"
          fill="#5B8A9A"
        />
        <rect x="15.5" y="19.5" width="5" height="6" rx="2" fill="#E0AD89" />
        <ellipse cx="18" cy="16.2" rx="5.8" ry="6.5" fill="#EBB995" />
        <path
          d="M12.2 14 C13.5 10, 16 9.5, 18.5 9.5 C22 9.5, 23.8 11.2, 23.8 14 C22.5 12, 19.5 11, 16 12 C13.5 12.8, 12.6 13.5, 12.2 14 Z"
          fill="#3B2A24"
        />
      </svg>
    );
  }

  if (id === "omar") {
    // Omar — Software Dev: short textured dark hair, glasses, slate crewneck
    return (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full rounded-full"
      >
        <rect width="36" height="36" rx="18" fill="#EBF2F4" />
        <circle cx="18" cy="18" r="17" stroke="#C7DDE3" strokeWidth="1.5" />
        <path
          d="M7 36 C8 27.5, 13 24.5, 18 24.5 C23 24.5, 28 27.5, 29 36 Z"
          fill="#2D4C59"
        />
        <rect x="15.5" y="19" width="5" height="6" rx="2" fill="#DFA885" />
        <ellipse cx="18" cy="15.5" rx="6" ry="6.8" fill="#E8B593" />
        <path
          d="M11.8 14.5 C11.5 11, 13.5 8, 18 8 C22.5 8, 24.5 11, 24.2 14.5 C23 11, 20.5 9.8, 18 9.8 C15.5 9.8, 13 11, 11.8 14.5 Z"
          fill="#211C1A"
        />
        <rect x="13.2" y="14.2" width="4.2" height="3.2" rx="1.2" stroke="#211C1A" strokeWidth="0.8" fill="none" />
        <rect x="18.6" y="14.2" width="4.2" height="3.2" rx="1.2" stroke="#211C1A" strokeWidth="0.8" fill="none" />
        <line x1="17.4" y1="15.5" x2="18.6" y2="15.5" stroke="#211C1A" strokeWidth="0.8" />
      </svg>
    );
  }

  // Mert — Product / Design: modern styled crop, collared blue-gray shirt
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-full"
    >
      <rect width="36" height="36" rx="18" fill="#EEF4F6" />
      <circle cx="18" cy="18" r="17" stroke="#C7DDE3" strokeWidth="1.5" />
      <path
        d="M7 36 C8 27.5, 13 24.5, 18 24.5 C23 24.5, 28 27.5, 29 36 Z"
        fill="#3D6C7F"
      />
      <path d="M14.5 24.8 L18 28.5 L21.5 24.8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="15.5" y="19" width="5" height="6" rx="2" fill="#DFAD8A" />
      <ellipse cx="18" cy="15.5" rx="5.9" ry="6.7" fill="#E8BA98" />
      <path
        d="M12 14.5 C11.5 10.5, 14 7.8, 18.5 7.8 C22.8 7.8, 24.2 10.2, 24.2 14 C23 11, 20.8 9.5, 18 9.5 C15 9.5, 13 11.2, 12 14.5 Z"
        fill="#2B221E"
      />
    </svg>
  );
}

export function HeroProfileCard({
  id,
  name,
  role,
  floatAnimation = "a",
  className = "",
  style,
}: HeroProfileCardProps) {
  const animationClass = {
    a: "internmatch-card-float-a",
    b: "internmatch-card-float-b",
    c: "internmatch-card-float-c",
    d: "internmatch-card-float-d",
  }[floatAnimation];

  return (
    <div
      className={`absolute pointer-events-none select-none origin-center ${animationClass} ${className}`}
      style={style}
    >
      <div
        className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2 sm:py-1 xl:px-2.5 xl:py-1 rounded-md sm:rounded-lg xl:rounded-xl bg-white/95 backdrop-blur-md border border-white/90 shadow-[0_2px_8px_-1px_rgba(20,50,65,0.08)]"
      >
        {/* Compact circular student portrait - refined subtle scale */}
        <div
          className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] xl:w-[22px] xl:h-[22px] rounded-full shrink-0 shadow-2xs border border-white"
          aria-hidden="true"
        >
          <StudentAvatar id={id} />
        </div>

        {/* Name and role - slightly smaller, crisp and readable */}
        <div className="flex flex-col text-left leading-none pr-0.5 sm:pr-1">
          <span className="text-[9px] sm:text-[9.5px] xl:text-[10.5px] font-bold text-[#171A1C] tracking-tight">
            {name}
          </span>
          <span className="text-[7.5px] sm:text-[8px] xl:text-[8.5px] font-medium text-[#656B70] mt-0.5">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
