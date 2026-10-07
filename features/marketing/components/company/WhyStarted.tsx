"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  FileText,
  Boxes,
  Clock,
  CheckCircle2,
  Lightbulb,
  Layers,
  Target,
  Eye,
  ArrowRight,FileSpreadsheet
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


// Left Box: 6 Before Items with authentic brand icons
const beforeTools = [
  { label: "Excel", icon: FileSpreadsheet, iconColor: "text-[#107C41]" },
  { label: "WhatsApp", icon: FaWhatsapp, iconColor: "text-[#25D366]" },
  { label: "Phone", icon: Phone, iconColor: "text-slate-300" },
  { label: "Notes", icon: FileText, iconColor: "text-amber-400" },
  { label: "Separate CRM", icon: Boxes, iconColor: "text-sky-400" },
  { label: "Manual Follow-ups", icon: Clock, iconColor: "text-purple-400" },
];

// Right Box: 6 After Items
const afterFeatures = [
  "CRM",
  "WhatsApp",
  "VoIP",
  "Automation",
  "Analytics",
  "Decision Intelligence",
];

// Philosophy 4 Cards
const philosophyItems = [
  {
    icon: Lightbulb,
    title: "SIMPLICITY",
    description: "Powerful technology should remain easy to understand.",
  },
  {
    icon: Layers,
    title: "INTEGRATION",
    description: "Business systems should work together instead of operating in isolation.",
  },
  {
    icon: Target,
    title: "INTELLIGENCE",
    description: "Data should help teams make better decisions.",
  },
  {
    icon: Eye,
    title: "EXECUTION",
    description: "Technology should create measurable business outcomes.",
  },
];

type PathData = {
  d: string;
};

export default function WhyStarted() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const leftItemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const rightIconRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [leftPaths, setLeftPaths] = useState<PathData[]>([]);
  const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

  const calculatePositions = () => {
    if (!containerRef.current || !arrowRef.current) return;

    const contBox = containerRef.current.getBoundingClientRect();
    const arrowBox = arrowRef.current.getBoundingClientRect();

    setSvgSize({ width: contBox.width, height: contBox.height });

    const arrowLeftX = arrowBox.left - contBox.left;
    const arrowCenterY = arrowBox.top - contBox.top + arrowBox.height / 2;

    const newLeftPaths: PathData[] = [];
    const offsets = [-20, 25, -30, 25, -20, 15];

    leftItemRefs.current.forEach((item, idx) => {
      if (!item) return;
      const itemBox = item.getBoundingClientRect();
      const startX = itemBox.right - contBox.left + 6;
      const startY = itemBox.top - contBox.top + itemBox.height / 2;

      const midX = (startX + arrowLeftX) / 2;
      const wave = offsets[idx % offsets.length];

      const c1x = startX + (midX - startX) * 0.85;
      const c1y = startY + wave;
      const c2x = midX + (arrowLeftX - midX) * 0.15;
      const c2y = arrowCenterY - wave * 0.3;

      const d = `M ${startX} ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${arrowLeftX} ${arrowCenterY}`;
      newLeftPaths.push({ d });
    });

    setLeftPaths(newLeftPaths);
  };

  useEffect(() => {
    calculatePositions();
    const timer = setTimeout(calculatePositions, 100);
    window.addEventListener("resize", calculatePositions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
          
          {/* ================= COLUMN 1: WHY WE STARTED ================= */}
          <div className="flex flex-col text-left pr-0 lg:border-r lg:border-slate-800/80 lg:pr-8 xl:pr-12">
            <div className="min-h-[90px] sm:min-h-[100px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                WHY WE STARTED
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                Businesses Don&rsquo;t Need More Tools.<br className="hidden sm:inline" />
                They Need Better Connections.
              </h2>
            </div>

            {/* Comparison Flow: Before -> Red Dotted Flow -> Arrow -> After */}
            <div
              ref={containerRef}
              className="relative mt-6 flex w-full flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 sm:gap-0"
            >
              
              {/* SVG Animated Red Dotted Curves radiating from every word (Desktop / Tablet) */}
              {svgSize.width > 0 && (
                <svg
                  style={{ width: svgSize.width, height: svgSize.height }}
                  className="pointer-events-none absolute inset-0 z-20 hidden sm:block"
                  aria-hidden="true"
                >
                  <defs>
                    <style>{`
                      @keyframes redDashMove {
                        from { stroke-dashoffset: 24; }
                        to { stroke-dashoffset: 0; }
                      }
                      .animate-red-flow {
                        animation: redDashMove 1.4s linear infinite;
                      }
                    `}</style>
                  </defs>

                  {leftPaths.map((path, idx) => (
                    <path
                      key={`red-flow-${idx}`}
                      d={path.d}
                      fill="none"
                      stroke="#f43f5e"
                      strokeWidth="1.35"
                      strokeDasharray="3 3.5"
                      strokeOpacity="0.85"
                      className="animate-red-flow"
                    />
                  ))}
                </svg>
              )}

              {/* 1. Left Card: BEFORE */}
              <div className="relative z-10 flex w-full max-w-[280px] sm:max-w-[215px] sm:flex-1 min-h-[300px] sm:min-h-[315px] flex-col justify-between rounded-2xl border border-red-500/30 bg-[#060c18]/95 p-4 sm:p-5 shadow-[0_0_20px_rgba(239,68,68,0.15)] backdrop-blur-md">
                <div>
                  <div className="border-b border-red-500/30 pb-2.5 mb-3 text-center flex items-center justify-center min-h-[44px]">
                    <span className="text-xs font-extrabold tracking-widest text-red-400 uppercase">
                      BEFORE
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2.5 sm:gap-3">
                    {beforeTools.map((tool, idx) => {
                      const Icon = tool.icon;
                      return (
                        <li key={tool.label} className="flex items-center gap-2.5 h-6">
                          <span className={`flex h-4 w-4 shrink-0 items-center justify-center ${tool.iconColor}`}>
                            <Icon size={15} />
                          </span>
                          <span
                            ref={(el) => {
                              leftItemRefs.current[idx] = el;
                            }}
                            className="whitespace-nowrap text-xs sm:text-[12.5px] font-medium text-slate-300"
                          >
                            {tool.label}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* 2. Central Heavy Glowing Cyan Arrow (Points Down on mobile, Right on desktop) */}
              <div
                ref={arrowRef}
                className="relative z-30 flex shrink-0 items-center justify-center sm:-mr-5 md:-mr-6 my-1 sm:my-0"
              >
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border-2 border-sky-300 bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 text-white shadow-[0_0_30px_rgba(56,189,248,0.95)] transition-transform duration-300 hover:scale-110 active:scale-95">
                  <ArrowRight size={20} strokeWidth={3} className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] rotate-90 sm:rotate-0" />
                </div>
              </div>

              {/* 3. Right Card: AFTER */}
              <div className="relative z-10 flex w-full max-w-[280px] sm:max-w-[215px] sm:flex-1 min-h-[300px] sm:min-h-[315px] flex-col justify-between rounded-2xl border border-sky-500/40 bg-[#061026]/95 p-4 sm:p-5 shadow-[0_0_25px_rgba(2,132,199,0.3)] backdrop-blur-md">
                <div>
                  <div className="border-b border-sky-500/30 pb-2.5 mb-3 text-center flex items-center justify-center gap-2 min-h-[44px]">
                    <span className="text-xs font-extrabold tracking-widest text-sky-400 uppercase">
                      AFTER
                    </span>
                    <span className="text-slate-600 font-light text-xs">|</span>
                    <div className="flex items-center gap-1.5">
                      <div className="relative h-4 w-4 sm:h-4.5 sm:w-4.5">
                        <Image
                          src="/A_logo.png"
                          alt="A1 Logo"
                          fill
                          sizes="18px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs font-black tracking-widest text-white uppercase">
                        AIVIQONE
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 sm:gap-3">
                    {afterFeatures.map((feat, idx) => (
                      <li
                        key={feat}
                        className="flex items-center gap-2.5 h-6 border-b border-sky-500/5 pb-0.5"
                      >
                        <span
                          ref={(el) => {
                            rightIconRefs.current[idx] = el;
                          }}
                          className="flex h-4 w-4 shrink-0 items-center justify-center text-sky-400"
                        >
                          <CheckCircle2 size={14} className="drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                        </span>
                        <span className="whitespace-nowrap text-xs sm:text-[12.5px] font-medium text-slate-200">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* ================= COLUMN 2: OUR PHILOSOPHY ================= */}
          <div className="flex flex-col text-left pl-0 lg:pl-8 xl:pl-12">
            <div className="min-h-[90px] sm:min-h-[100px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                OUR PHILOSOPHY
              </span>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-[26px] lg:text-[28px]">
                One Platform. One Workflow.<br className="hidden sm:inline" />
                One Source of Truth.
              </h2>
            </div>

            {/* 2x2 Grid with 4 High-Tech Cards */}
            <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
              {philosophyItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="group flex flex-col gap-2 rounded-2xl border border-sky-500/20 bg-[#060e22]/90 p-4 sm:p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(2,132,199,0.35)]"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-[#030919] text-sky-400 shadow-[0_0_10px_rgba(2,132,199,0.25)] transition-all duration-300 group-hover:border-sky-300 group-hover:bg-[#071330] group-hover:text-white group-hover:shadow-[0_0_18px_rgba(56,189,248,0.6)]">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-xs sm:text-[13px] font-extrabold tracking-wider text-white uppercase">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-[11.5px] sm:text-[12px] leading-relaxed text-slate-400 group-hover:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}