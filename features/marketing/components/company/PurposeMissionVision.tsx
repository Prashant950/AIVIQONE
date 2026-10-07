"use client";

import Image from "next/image";
import {
  Layers,
  FileSpreadsheet,
  Cog,
  TrendingUp,
  Boxes,
  Users2,
  FileText,
  Sparkles,
  ArrowDown,
  UserCog,
  MessagesSquare,
  BarChart3,
  Brain,
} from "lucide-react";

// Column 1: Purpose Points
const purposeList = [
  { label: "Reduce operational complexity", icon: Layers },
  { label: "Eliminate scattered customer information", icon: FileSpreadsheet },
  { label: "Automate repetitive work", icon: Cog },
  { label: "Help teams make better decisions", icon: TrendingUp },
  { label: "Give businesses one connected operating system", icon: Boxes },
];

// Column 2: Mission Flow Nodes
const missionNodes = [
  { label: "PEOPLE", icon: Users2 },
  { label: "DATA", icon: FileText },
  { label: "AUTOMATION", icon: Cog },
  { label: "INTELLIGENCE", icon: Sparkles },
];

export default function PurposeMissionVision() {
  return (
    <section className="border-t border-slate-800/80 bg-[#020617] py-8 sm:py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0">
          
          {/* ================= COLUMN 1: OUR PURPOSE ================= */}
          <div className="flex flex-col text-left pr-0 lg:border-r lg:border-slate-800/80 lg:pr-8 xl:pr-10">
            <div className="min-h-[135px] sm:min-h-[145px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                OUR PURPOSE
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold leading-tight text-white sm:text-[26px]">
                Make Powerful Business Technology Accessible.
              </h2>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                We believe growing businesses should have access to the same level of technology, automation and intelligence that large enterprises use.
              </p>
            </div>

            <ul className="mt-6 flex flex-col gap-2.5 sm:gap-3">
              {purposeList.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="group flex items-center gap-3">
                    <span className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg border border-sky-500/25 bg-[#061026] text-sky-400 shadow-sm transition-all duration-200 group-hover:border-sky-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                      <Icon size={14} />
                    </span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-slate-300 transition-colors group-hover:text-white">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= COLUMN 2: OUR MISSION ================= */}
          <div className="flex flex-col text-left px-0 lg:border-r lg:border-slate-800/80 lg:px-8 xl:px-10">
            <div className="min-h-[135px] sm:min-h-[145px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                OUR MISSION
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold leading-tight text-white sm:text-[26px]">
                Build Technology That Works With People.
              </h2>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                Our mission is to build intelligent software that helps businesses manage customers, communicate faster, automate repetitive processes and make better decisions.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center">
              {/* 4 Flow Nodes Horizontal */}
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 pt-2">
                {missionNodes.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div key={node.label} className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex flex-col items-center">
                        <div className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-sky-500/30 bg-[#061028] shadow-[0_0_12px_rgba(2,132,199,0.2)] transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                          <Icon size={16} className="text-slate-300 transition-colors group-hover:text-white" />
                        </div>
                        <span className="mt-2 text-[8px] sm:text-[8.5px] font-extrabold tracking-wider text-slate-400 uppercase">
                          {node.label}
                        </span>
                      </div>
                      {i < missionNodes.length - 1 && (
                        <span className="mb-5 text-xs font-bold text-slate-600">+</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Connecting Down Arrow */}
              <div className="my-4 sm:my-5 text-sky-400">
                <ArrowDown size={18} className="animate-bounce" />
              </div>

              {/* Better Business Button Box */}
              <div className="flex w-full max-w-[240px] sm:max-w-[260px] cursor-pointer items-center justify-center rounded-xl border border-sky-500/40 bg-gradient-to-r from-[#04122e] via-[#081d45] to-[#04122e] py-3 shadow-[0_0_20px_rgba(2,132,199,0.3)] transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.55)]">
                <span className="text-xs sm:text-[13px] font-black tracking-[0.18em] text-sky-300 uppercase">
                  Better Business
                </span>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: OUR VISION ================= */}
          <div className="flex flex-col text-left pl-0 lg:pl-8 xl:pl-10">
            <div className="min-h-[135px] sm:min-h-[145px]">
              <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase">
                OUR VISION
              </span>
              <h2 className="mt-2.5 text-2xl font-extrabold leading-tight text-white sm:text-[26px]">
                Become the Intelligence Layer Behind Modern Businesses.
              </h2>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-400 sm:text-[13px]">
                AIVIQONE aims to become a trusted technology platform that connects the systems, people and intelligence businesses need to grow.
              </p>
            </div>

            {/* Radial Hub Network with Center Glowing A1 Logo & Surrounding 6 Nodes */}
            <div className="relative mx-auto mt-5 flex h-[260px] sm:h-[275px] w-full max-w-[360px] scale-[0.84] xs:scale-[0.92] sm:scale-100 origin-center items-center justify-center select-none">
              
              {/* SVG Connecting Ray Lines with Glowing Junctions */}
              <svg viewBox="0 0 360 270" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <filter id="visionGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Subtle dashed orbit ring */}
                <ellipse cx="180" cy="135" rx="66" ry="66" fill="none" stroke="#0ea5e9" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.3" />
                
                {/* 1. Top to Customers */}
                <line x1="180" y1="90" x2="180" y2="40" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="180" cy="40" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />

                {/* 2. Top-Right to Sales Teams */}
                <line x1="220" y1="105" x2="265" y2="78" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="265" cy="78" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />

                {/* 3. Bottom-Right to Communication */}
                <line x1="220" y1="165" x2="265" y2="192" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="265" cy="192" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />

                {/* 4. Bottom to Automation */}
                <line x1="180" y1="180" x2="180" y2="228" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="180" cy="228" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />

                {/* 5. Bottom-Left to Analytics */}
                <line x1="140" y1="165" x2="95" y2="192" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="95" cy="192" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />

                {/* 6. Top-Left to Business Intelligence */}
                <line x1="140" y1="105" x2="95" y2="78" stroke="#0284c7" strokeWidth="1.2" strokeDasharray="2 3" strokeOpacity="0.85" />
                <circle cx="95" cy="78" r="2.5" fill="#38bdf8" filter="url(#visionGlow)" />
              </svg>

              {/* Center Prominent Glowing A1 Logo Core */}
              <div className="relative z-10 flex h-20 w-20 sm:h-[88px] sm:w-[88px] items-center justify-center rounded-full border-2 border-sky-400 bg-[#030919] shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:scale-105">
                <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                  <Image
                    src="/A_logo.png"
                    alt="AIVIQONE A1 Logo"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* 6 Connected Radial Satellite Badges */}
              
              {/* 1. Top: Customers */}
              <div className="absolute left-1/2 top-0.5 z-20 -translate-x-1/2 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <Users2 size={12} className="text-sky-400 shrink-0" />
                <span>Customers</span>
              </div>

              {/* 2. Top-Right: Sales Teams */}
              <div className="absolute right-0 top-[24%] z-20 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <UserCog size={12} className="text-sky-400 shrink-0" />
                <span>Sales Teams</span>
              </div>

              {/* 3. Bottom-Right: Communication */}
              <div className="absolute right-0 bottom-[22%] z-20 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <MessagesSquare size={12} className="text-sky-400 shrink-0" />
                <span>Communication</span>
              </div>

              {/* 4. Bottom: Automation */}
              <div className="absolute bottom-0.5 left-1/2 z-20 -translate-x-1/2 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <Cog size={12} className="text-sky-400 shrink-0" />
                <span>Automation</span>
              </div>

              {/* 5. Bottom-Left: Analytics */}
              <div className="absolute left-0 bottom-[22%] z-20 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <BarChart3 size={12} className="text-sky-400 shrink-0" />
                <span>Analytics</span>
              </div>

              {/* 6. Top-Left: Business Intelligence */}
              <div className="absolute left-0 top-[24%] z-20 flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-[#061028]/95 px-2.5 py-1 text-[9.5px] sm:text-[10px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]">
                <Brain size={12} className="text-sky-400 shrink-0" />
                <span>Business Intelligence</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}