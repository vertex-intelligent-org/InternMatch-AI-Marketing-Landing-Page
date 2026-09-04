import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 ${
            dark
              ? "bg-[#20272B] text-[#A3C7D1] border border-[#2D4C59]"
              : "bg-[#F2F7F8] text-[#2D4C59] border border-[#C7DDE3]"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#467A8F] animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12] ${
          dark ? "text-[#F5F6F4]" : "text-[#171A1C]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 sm:mt-5 text-base sm:text-lg md:text-xl leading-relaxed font-normal ${
            dark ? "text-[#A3C7D1]" : "text-[#656B70]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
