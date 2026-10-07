"use client";

import Link from "next/link";
import {
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  FileText,
  Gavel,
  Lock,
  FileCheck2,
  Cpu,
} from "lucide-react";
import { termsOfServiceMeta } from "@/features/legal/data/termsOfService";

export default function TermsHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#020617] py-8 sm:py-10 lg:py-16 border-b border-slate-800/70">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-[1420px] px-3.5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Rich Typography, Meta Badges & Actions (6 Cols) */}
          <div className="flex flex-col items-start text-left lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-sky-400 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Enterprise Commercial Governance
            </div>

            <h1 className="mt-3.5 sm:mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[46px] lg:leading-[1.14]">
              Terms of Service &amp; <br className="hidden sm:inline" />
              Platform <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Agreement.</span>
            </h1>

            <p className="mt-3 sm:mt-4 max-w-lg text-xs leading-relaxed text-slate-300 sm:text-base">
              Legally binding terms governing platform access, software licensing, customer data protection, intellectual property ownership, and commercial service standards for AIVIQONE.
            </p>

            <div className="my-4 sm:my-5 h-[2px] w-12 bg-sky-400" />

            {/* Meta Information Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-xl border border-sky-500/20 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm backdrop-blur-sm">
                <Building2 size={15} className="text-sky-400 shrink-0" />
                <span className="font-semibold text-white text-xs sm:text-sm">{termsOfServiceMeta.company}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <Calendar size={15} className="text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm">
                  Version: <strong className="text-white">{termsOfServiceMeta.version}</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-[#060c18]/90 px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm">
                <span className="text-slate-400 text-xs sm:text-sm">Effective:</span>
                <strong className="text-cyan-300 text-xs sm:text-sm">{termsOfServiceMeta.effectiveDate}</strong>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#policy-content"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95"
              >
                Read Full Terms (74 Sections)
                <ArrowRight size={15} />
              </a>
              <a
                href="#s71"
                className="flex items-center gap-2 rounded-xl border border-sky-500/30 bg-[#060c1a]/90 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:bg-[#070e24] hover:text-white"
              >
                <Gavel size={15} className="text-cyan-400" />
                Legal Inquiries
              </a>
            </div>

            {/* Trust Assurance Pills */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-800/80 pt-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Companies Act 2013 Incorp</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>100% Customer Data Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Arbitration Act 1996 Seat</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech 3D Cyber Legal Shield & Agreement Vault (6 Cols) */}
          <div className="flex w-full items-center justify-center lg:col-span-6">
            <div className="relative flex h-[310px] w-[290px] sm:h-[450px] sm:w-[440px] lg:h-[490px] lg:w-[480px] items-center justify-center">
              
              {/* Outer Volumetric Glow */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-sky-500/25 via-cyan-400/30 to-blue-600/25 blur-[75px] animate-pulse" />

              {/* 3D Orbiting Gyroscope Rings (SVG) */}
              <svg
                viewBox="0 0 480 480"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="termOrbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="0.75" />
                  </linearGradient>

                  <filter id="termNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Elliptical Ring 1 */}
                <ellipse
                  cx="240"
                  cy="240"
                  rx="210"
                  ry="80"
                  fill="none"
                  stroke="url(#termOrbitGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  transform="rotate(-20 240 240)"
                  className="opacity-75 animate-[spin_55s_linear_infinite]"
                />

                {/* Elliptical Ring 2 */}
                <ellipse
                  cx="240"
                  cy="240"
                  rx="200"
                  ry="70"
                  fill="none"
                  stroke="url(#termOrbitGrad)"
                  strokeWidth="1.2"
                  strokeDasharray="6 6"
                  transform="rotate(25 240 240)"
                  className="opacity-60 animate-[spin_45s_linear_infinite_reverse]"
                />

                {/* Outer Orbit Path */}
                <ellipse
                  cx="240"
                  cy="240"
                  rx="220"
                  ry="95"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1"
                  opacity="0.3"
                  transform="rotate(-4 240 240)"
                />

                {/* Glowing Nodes on Orbit */}
                <circle cx="95" cy="180" r="3" fill="#38bdf8" filter="url(#termNeonGlow)" />
                <circle cx="390" cy="115" r="3.5" fill="#06b6d4" filter="url(#termNeonGlow)" />
                <circle cx="375" cy="360" r="2.5" fill="#38bdf8" filter="url(#termNeonGlow)" />
                <circle cx="115" cy="355" r="2" fill="#06b6d4" opacity="0.85" />
                <circle cx="240" cy="65" r="3" fill="#38bdf8" filter="url(#termNeonGlow)" />
                <circle cx="240" cy="415" r="2.5" fill="#0284c7" opacity="0.85" />
              </svg>

              {/* Satellite Node 1: Left Binding Agreement Badge */}
              <div className="absolute left-1 sm:left-3 top-[32%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-sky-400/60 bg-[#040c1e]/95 text-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.7)] backdrop-blur-md">
                  <span className="absolute -inset-1 rounded-full border border-sky-400/40 animate-ping opacity-30" />
                  <FileCheck2 size={18} className="drop-shadow-[0_0_10px_rgba(56,189,248,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-sky-300 border border-sky-500/40 shadow-md">
                  Binding Terms
                </span>
              </div>

              {/* Satellite Node 2: Right Top IP & License Guard Badge */}
              <div className="absolute right-1 sm:right-3 top-[24%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-11 w-11 sm:h-13 sm:w-13 items-center justify-center rounded-full border border-cyan-400/60 bg-[#040c1e]/95 text-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.7)] backdrop-blur-md">
                  <span className="absolute -inset-1 rounded-full border border-cyan-400/40 animate-ping opacity-30" />
                  <Lock size={18} className="drop-shadow-[0_0_10px_rgba(6,182,212,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-cyan-300 border border-cyan-500/40 shadow-md">
                  IP Protection
                </span>
              </div>

              {/* Satellite Node 3: Right Bottom Legal & Arbitration Badge */}
              <div className="absolute right-6 sm:right-9 bottom-[12%] z-20 flex flex-col items-center gap-1 transition-transform duration-300 hover:scale-110">
                <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-blue-400/60 bg-[#040c1e]/95 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.7)] backdrop-blur-md">
                  <Scale size={16} className="drop-shadow-[0_0_10px_rgba(59,130,246,1)]" />
                </div>
                <span className="rounded-full bg-[#020617]/95 px-2.5 py-0.5 text-[9.5px] font-bold text-blue-300 border border-blue-500/40 shadow-md">
                  New Delhi Seat
                </span>
              </div>

              {/* CENTERPIECE: 3D CYBER LEGAL SHIELD WITH GAVEL & CONTRACT SEAL */}
              <div className="relative z-10 flex h-[260px] w-[210px] sm:h-[320px] sm:w-[260px] lg:h-[350px] lg:w-[285px] flex-col items-center justify-center">
                
                {/* Metallic Cyber Legal Shield Shell (SVG) */}
                <svg
                  viewBox="0 0 280 340"
                  className="h-full w-full drop-shadow-[0_0_40px_rgba(56,189,248,0.75)]"
                >
                  <defs>
                    {/* Shield Body Deep Metallic Gradient */}
                    <linearGradient id="termShieldFill" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#081b38" stopOpacity="0.98" />
                      <stop offset="45%" stopColor="#020713" stopOpacity="0.99" />
                      <stop offset="100%" stopColor="#05152d" stopOpacity="0.98" />
                    </linearGradient>

                    {/* Outer Neon Rim */}
                    <linearGradient id="termNeonRim" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="35%" stopColor="#06b6d4" />
                      <stop offset="70%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>

                    {/* Inner Edge Highlight */}
                    <linearGradient id="termInnerRim" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
                    </linearGradient>

                    {/* Glass Reflection */}
                    <linearGradient id="termGlassGlare" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                      <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* 1. ANGULAR HIGH-TECH LEGAL SECURITY SHIELD */}
                  <path
                    d="M 140 18 
                       L 250 18 
                       C 258 18, 264 24, 264 32
                       L 258 135 
                       C 252 225, 195 288, 140 328 
                       C 85 288, 28 225, 22 135 
                       L 16 32 
                       C 16 24, 22 18, 30 18 
                       Z"
                    fill="url(#termShieldFill)"
                    stroke="url(#termNeonRim)"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />

                  {/* Inner Concentric Bevel Plate */}
                  <path
                    d="M 140 34 
                       L 236 34 
                       L 242 132 
                       C 236 210, 188 268, 140 304 
                       C 92 268, 44 210, 38 132 
                       L 44 34 
                       Z"
                    fill="none"
                    stroke="url(#termInnerRim)"
                    strokeWidth="1.6"
                    strokeDasharray="4 4"
                    opacity="0.85"
                  />

                  {/* Diagonal Glass Glare Shard */}
                  <path
                    d="M 38 30 L 140 30 L 48 210 C 40 170, 38 110, 38 30 Z"
                    fill="url(#termGlassGlare)"
                  />

                  {/* Shield Corner Cyber Screws / Rivets */}
                  <circle cx="42" cy="40" r="3" fill="#38bdf8" />
                  <circle cx="238" cy="40" r="3" fill="#38bdf8" />
                  <circle cx="140" cy="314" r="3" fill="#06b6d4" />
                </svg>

                {/* Inner Shield Core: 3D Legal Scales / Gavel Contract Emblem */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Dynamic 3D Legal Seal */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Outer Rotating Cyan Energy Pulse Ring */}
                    <div className="absolute -inset-4 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-cyan-400/50" />
                    
                    {/* Reverse Spinning Track */}
                    <div className="absolute -inset-7 animate-[spin_24s_linear_infinite_reverse] rounded-full border border-sky-400/20" />

                    {/* 3D Glassmorphic Seal */}
                    <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full border-2 border-cyan-400/80 bg-gradient-to-br from-[#0a2754] via-[#030d1e] to-[#061836] shadow-[0_0_35px_rgba(6,182,212,0.85)] transition-transform duration-500 hover:scale-105">
                      
                      {/* Inner Ring */}
                      <div className="flex h-19 w-19 sm:h-22 sm:w-22 items-center justify-center rounded-full border border-sky-400/40 bg-[#020815]/90 shadow-inner">
                        
                        {/* Legal Scale & Gavel Combined Icon */}
                        <div className="flex flex-col items-center justify-center text-cyan-400">
                          <Scale size={32} className="drop-shadow-[0_0_12px_rgba(6,182,212,0.95)]" />
                          <span className="text-[9px] font-black tracking-widest text-sky-300 uppercase mt-0.5">
                            LEGAL CORE
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Integrated Verified Legal Seal Checkmark Badge */}
                    <div className="absolute -bottom-1 -right-1 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-emerald-400/90 bg-[#020b18] text-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)] backdrop-blur-md">
                      <ShieldCheck size={16} className="drop-shadow-[0_0_6px_rgba(52,211,153,1)]" />
                    </div>
                  </div>

                  {/* Status Banner */}
                  <div className="mt-3.5 flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>ENFORCEABLE COMMERCIAL TERMS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
