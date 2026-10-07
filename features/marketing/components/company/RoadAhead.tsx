"use client";

import {
  Boxes,
  MessagesSquare,
  Cog,
  Sparkles,
  Server,
  ArrowRight,
  ShieldCheck,
  Lock,
  FileCheck2,
} from "lucide-react";

// Left: 5 Roadmap Nodes
const roadmapSteps = [
  { label: "CRM", icon: Boxes },
  { label: "Communication", icon: MessagesSquare },
  { label: "Automation", icon: Cog },
  { label: "Intelligence", icon: Sparkles },
  { label: "Business Infrastructure", icon: Server },
];

// Right: 4 Responsibility Cards
const responsibilityCards = [
  {
    icon: ShieldCheck,
    title: "Secure Technology",
    description: "We use modern security practices to keep your data protected.",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data is yours. We protect it with strict privacy principles.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description: "Built on scalable and secure infrastructure you can trust.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Practices",
    description: "We believe in clarity, honesty and long-term relationships.",
  },
];

export default function RoadAhead() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
          
          {/* ================= COLUMN 1: THE ROAD AHEAD (6 COLS) ================= */}
          <div className="flex flex-col text-left pr-0 lg:col-span-6 lg:border-r lg:border-slate-800/80 lg:pr-8 xl:pr-10">
            <div className="min-h-[105px] sm:min-h-[115px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                THE ROAD AHEAD
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                We&rsquo;re Just Getting Started.
              </h2>
              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-400">
                AIVIQONE is being built as a continuously evolving technology
                platform. As businesses change, the platform will continue to
                evolve with them.
              </p>
            </div>

            {/* Mobile Mode: 3 on Top Row, 2 on Bottom Row */}
            <div className="mt-6 flex flex-col items-center gap-4 sm:hidden w-full">
              {/* Row 1: First 3 items */}
              <div className="flex items-center justify-center gap-1.5 xs:gap-2">
                {roadmapSteps.slice(0, 3).map(({ label, icon: Icon }, index) => (
                  <div key={label} className="flex items-center gap-1 xs:gap-1.5">
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                      <div className="flex h-12 w-12 xs:h-14 xs:w-14 items-center justify-center rounded-full border-2 border-sky-400/40 bg-[#030a1c] shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-sky-300">
                        <Icon size={20} className="text-sky-400" />
                      </div>
                      <span className="mt-2 max-w-[75px] text-[10px] xs:text-[11px] font-bold text-slate-200 leading-tight">
                        {label}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className="flex shrink-0 items-center justify-center text-sky-400 pb-4">
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 2: Next 2 items */}
              <div className="flex items-center justify-center gap-1.5 xs:gap-2">
                {roadmapSteps.slice(3).map(({ label, icon: Icon }, index) => (
                  <div key={label} className="flex items-center gap-1 xs:gap-1.5">
                    <div className="group flex flex-col items-center text-center cursor-pointer">
                      <div className="flex h-12 w-12 xs:h-14 xs:w-14 items-center justify-center rounded-full border-2 border-sky-400/40 bg-[#030a1c] shadow-[0_0_15px_rgba(2,132,199,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-sky-300">
                        <Icon size={20} className="text-sky-400" />
                      </div>
                      <span className="mt-2 max-w-[85px] text-[10px] xs:text-[11px] font-bold text-slate-200 leading-tight">
                        {label}
                      </span>
                    </div>
                    {index < 1 && (
                      <div className="flex shrink-0 items-center justify-center text-sky-400 pb-4">
                        <ArrowRight size={13} strokeWidth={2.5} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop & Tablet Mode (sm: and up): Single Horizontal Flow */}
            <div className="mt-6 hidden sm:flex w-full items-center justify-between gap-1.5 sm:gap-2 pt-2">
              {roadmapSteps.map(({ label, icon: Icon }, index) => (
                <div key={label} className="flex items-center gap-1 sm:gap-2 flex-1 last:flex-none">
                  
                  {/* Circular Node */}
                  <div className="group flex flex-col items-center text-center cursor-pointer">
                    <div className="flex h-13 w-13 sm:h-15 sm:w-15 items-center justify-center rounded-full border-2 border-sky-400/40 bg-[#030a1c] shadow-[0_0_18px_rgba(2,132,199,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]">
                      <Icon size={22} className="text-sky-400 transition-colors group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.7)]" />
                    </div>
                    <span className="mt-2.5 max-w-[85px] text-[10.5px] sm:text-[11.5px] font-bold text-slate-200 transition-colors group-hover:text-white leading-tight">
                      {label}
                    </span>
                  </div>

                  {/* Connecting Arrow */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="flex shrink-0 items-center justify-center text-sky-400 pb-5">
                      <ArrowRight size={15} strokeWidth={2.5} className="drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ================= COLUMN 2: BUILT WITH RESPONSIBILITY (6 COLS) ================= */}
          <div className="flex flex-col text-left pl-0 lg:col-span-6 lg:pl-8 xl:pl-10">
            <div className="min-h-[105px] sm:min-h-[115px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                BUILT WITH RESPONSIBILITY
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                Built With Responsibility.
              </h2>
            </div>

            {/* 4 Responsibility Cards Grid */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-3">
              {responsibilityCards.map(({ icon: Icon, title, description }, i) => (
                <div
                  key={title}
                  className="group flex flex-col justify-between rounded-2xl border border-sky-500/20 bg-[#060e22]/90 p-3.5 sm:p-4 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] min-h-[165px]"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-[#030919] text-sky-400 shadow-[0_0_10px_rgba(2,132,199,0.25)] transition-all duration-300 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.6)]">
                        <Icon size={16} />
                      </span>
                      <h3 className="text-xs sm:text-[12.5px] font-bold text-white leading-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-[11px] sm:text-[12px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}