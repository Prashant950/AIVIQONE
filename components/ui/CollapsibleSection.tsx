"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export default function CollapsibleSection({
  id,
  title,
  children,
  defaultOpen = false,
  level = 0,
}: {
  id: string;
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  level?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const titleSize =
    level === 0
      ? "text-sm sm:text-base md:text-lg font-bold"
      : level === 1
      ? "text-xs sm:text-sm md:text-base font-semibold"
      : "text-xs sm:text-sm font-semibold";

  return (
    <div
      id={id}
      className={`scroll-mt-28 rounded-xl sm:rounded-2xl border transition-all duration-200 ${
        level === 0
          ? open
            ? "border-sky-500/40 bg-[#060c1c]/90 shadow-[0_4px_20px_rgba(2,6,23,0.5)]"
            : "border-slate-800/80 bg-[#050a18]/70 hover:border-slate-700 hover:bg-[#070e24]"
          : "border-slate-800/60 bg-[#040814]/80"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={`flex w-full items-center justify-between gap-3 text-left transition-colors ${
          level === 0 ? "px-3.5 py-3 sm:px-5 sm:py-4" : "px-3 py-2.5 sm:px-4 sm:py-3"
        }`}
        aria-expanded={open}
      >
        <span className={`${titleSize} text-white group-hover:text-sky-400 leading-snug`}>
          {title}
        </span>
        <div
          className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-300 transition-all duration-300 ${
            open ? "rotate-180 border-sky-500/40 bg-sky-500/10 text-sky-400" : ""
          }`}
        >
          <ChevronDown size={14} className="sm:w-[15px] sm:h-[15px]" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`flex flex-col gap-3 sm:gap-4 border-t border-slate-800/60 text-slate-300 leading-relaxed text-xs sm:text-sm ${
              level === 0 ? "px-3.5 pb-3.5 pt-2 sm:px-5 sm:pb-5 sm:pt-2" : "px-3 pb-3 pt-1.5 sm:px-4 sm:pb-4"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}