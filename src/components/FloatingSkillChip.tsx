import React from "react";
import { CheckIcon } from "./Icons";

interface FloatingSkillChipProps {
  label: string;
  type?: "matched" | "missing" | "score";
  subtext?: string;
  className?: string;
  animate?: boolean;
}

export function FloatingSkillChip({
  label,
  type = "matched",
  subtext,
  className = "",
  animate = true,
}: FloatingSkillChipProps) {
  if (type === "score") {
    return (
      <div
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#C7DDE3] shadow-lg shadow-slate-900/5 ${
          animate ? "animate-float-slow" : ""
        } ${className}`}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#467A8F] to-[#345B6B] flex items-center justify-center text-white text-xs font-bold shadow-xs">
          ⚡
        </div>
        <div>
          <div className="text-sm font-bold text-[#171A1C] leading-tight">
            {label}
          </div>
          {subtext && (
            <div className="text-[11px] font-medium text-[#3D6C7F] leading-tight">
              {subtext}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === "missing") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-amber-200/70 shadow-md shadow-slate-950/5 text-xs font-medium text-[#171A1C] ${
          animate ? "animate-float-reverse" : ""
        } ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-amber-500" />
        <span className="text-[11px] text-amber-800 font-semibold">Missing:</span>
        <span className="text-[#171A1C] font-medium">{label}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#C7DDE3] shadow-md shadow-slate-950/5 text-xs font-medium text-[#171A1C] ${
        animate ? "animate-float-slow" : ""
      } ${className}`}
    >
      <span className="w-4 h-4 rounded-full bg-[#E3EEF1] text-[#345B6B] flex items-center justify-center">
        <CheckIcon className="w-2.5 h-2.5" />
      </span>
      <span>{label}</span>
    </div>
  );
}
