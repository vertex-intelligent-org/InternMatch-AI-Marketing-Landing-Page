import React from "react";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function DeviceFrame({ children, className = "" }: DeviceFrameProps) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] rounded-[48px] p-3.5 bg-slate-900/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.25),0_0_0_1px_rgba(255,255,255,0.1)_inset] ring-1 ring-slate-900/10 ${className}`}
    >
      {/* Phone outer bezel styling */}
      <div className="absolute top-28 -left-[2px] w-[3px] h-9 bg-slate-700/60 rounded-l" />
      <div className="absolute top-40 -left-[2px] w-[3px] h-12 bg-slate-700/60 rounded-l" />
      <div className="absolute top-56 -left-[2px] w-[3px] h-12 bg-slate-700/60 rounded-l" />
      <div className="absolute top-36 -right-[2px] w-[3px] h-16 bg-slate-700/60 rounded-r" />

      {/* Screen container */}
      <div className="relative w-full aspect-[9/19.5] bg-slate-50 rounded-[38px] overflow-hidden flex flex-col border border-slate-200/50 shadow-inner">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-2.5 inset-x-0 z-30 flex justify-center pointer-events-none">
          <div className="h-5 w-24 bg-slate-900 rounded-full flex items-center justify-between px-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-800/90 border border-slate-700/40" />
            <div className="w-2 h-2 rounded-full bg-[#467A8F]/80 animate-pulse" />
          </div>
        </div>

        {/* Screen Status Bar */}
        <div className="pt-2 px-6 pb-2 flex justify-between items-center text-[10px] font-semibold text-slate-700 z-20 pointer-events-none select-none">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">5G</span>
            <div className="w-4 h-2 border border-slate-600 rounded-xs p-0.5 flex items-center">
              <div className="w-full h-full bg-slate-700 rounded-xs" />
            </div>
          </div>
        </div>

        {/* Screen Content Area */}
        <div className="relative flex-1 overflow-hidden flex flex-col">
          {children}
        </div>

        {/* Home Indicator bar */}
        <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
          <div className="w-28 h-1 bg-slate-400/80 rounded-full" />
        </div>
      </div>
    </div>
  );
}
